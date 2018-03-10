//# sourceURL=resources/js/members/member.js

var nextmembers;
$(document).ready(function() {
    nextmembers = (function($) {
        /**
         * The magnificPopup instance
         */
        var _popup = $.magnificPopup.instance;

        /**
         * The signed-in member, null otherwise
         */
        var _member = null;

        /**
         * Session secret id
         */
        var _secretid = null;

        /**
         * Init events binding
         * @return {object} The public API
         */
        var _init = function() {
            $('form.member-form').off('submit').on('submit', _onCommit);
            $('button.connect-popup-close').off('click').on('click', _closePopup);
            $('a.popup-goto').off('click').on('click', function(e) {
                return _sendData('GET', $(e.target).attr('href'));
            });
            $('.member-menu a[href="' + document.location.href.replace(document.location.search, '').replace(document.location.hash, '') + '"]').toggleClass('active', true);
            $('input.member-disable-storelogs').off('click').on('click', _onDisableLogs);
            $('button.member-remove-logs').off('click').on('click', _onRemoveLogs);
            $('a.member-bookmark').off('click').on('click', _onToggleBookmark);
            $('a.member-bookmarks-selectall').off('click').on('click', _onBookmarkSelectAll);
            $('a.member-bookmarks-deselectall').off('click').on('click', _onBookmarkDeselectAll);
            $('button.member-socialconnect').off('click').on('click', _onSocialConnect);


            //verification speudo
            $('#register-username').before('<div id="msg-pseudo"></div>');
            $('#register-username').autocomplete({
                source: function( request, response ) {
                    _onGeneratePseudo(request.term, response);
                },
                minLength: 3,
                select: function( event, ui ) {
                    _onVerificationPseudo(ui.item.label);
                },
                open: function() {
                    setTimeout(function () {
                        $('.ui-autocomplete').css('z-index', 100000);
                    }, 0);
                    $('#ui-id-1').prepend('<li class="ui-autocomplete-category">Liste des pseudos disponibles : </li>');

                    $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
                },
                close: function() {
                    $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
                }
            }) ;
            //verification Email
            $('#register-email').before('<div id="msg-email"></div>');


            return new PublicApi();
        };


        /**
         * Are the action in poup context ?
         */
        var _hasPopupContext = function() {
            return _popup && _popup.isOpen;
        };

        /**
         * Update the authentication status menu
         */
        var _updateStatusMenu = function(associate) {

            var member_connected = $.cookie('member_connected');


            if(member_connected) {


                var member_connected_info = $.cookie('information_member_connected');
                if(typeof member_connected_info !== 'undefined') {

                    var information_member_connected = jQuery.parseJSON($.cookie('information_member_connected'));
                    if (information_member_connected.secretid) {
                        _setSecretId(information_member_connected.secretid);
                    }
                    _setMember(information_member_connected.member);

                    $('.member-unsigned').hide();
                    $('.member-signed').show();
                    $('#comment-post-text').attr('placeholder','Ecrivez ici...');
                    $('#comment-post-text').removeAttr('disabled');
                    $(document).trigger('member-connect');
                }

            } else {
                _setMember(null);
                $('.member-unsigned').show();
                $('.member-signed').hide();
                $('#comment-post-text').attr('placeholder','Connectez-vous pour écrire ici...');
                $('#comment-post-text').attr('disabled','disabled');
                $(document).trigger('member-disconnect');
            }

            return new PublicApi();
        };

        /**
         * Sets the session secret id
         */
        var _setSecretId = function(secretid) {
            _secretid = secretid;
        };

        /**
         * Sets the member object
         */
        var _setMember = function(member) {
            _member = member;
        };

        /**
         * Returns the member object if connected, null otherwise
         */
        var _getMember = function() {
            return _member;
        };

        var _connect = function() {
            $('li.member-account ul li a.member-onlogin').trigger('click');
            return false;
        };

        /**
         * Close magnificPopup if exists and opened
         * @return {bool} Always FALSE
         */
        var _closePopup = function() {
            if (_popup && _popup.isOpen) {
                _popup.close();
            }
            return false;
        };

        /**
         * Send a new request
         * @param {string} type Request method (GET or POST)
         * @param {string} url  The URL to reach
         * @param {object} data An object of parameters to send
         * @return {bool} Always FALSE
         */
        var _sendData = function(type, url, data) {
            if (true === _hasPopupContext()) {
                _popup.updateStatus('loading', 'Loading...');
                $.ajax({
                    type: type,
                    url: url,
                    data: data
                }).done(function(response) {
                    _popup.content.empty().append($(response).children());
                }).fail(function(e) {
                    if (403 === e.status && 0 < $('form.member-login').length) {
                        // Access forbidden
                        $('form.member-login').find('div.form-group')
                                .addClass('has-error')
                                .find('span.help-block')
                                .first()
                                .empty()
                                .append('Informations d\'identification incorrectes');
                    } else {
                        _popup.content.empty().append('<div class="row"><div class="col-md-12"><div class="bloc cap big-font title">Erreur</div><p>Une erreur est survenue, veuillez nous excuser pour la gêne occasionnée.</p></div><button class="btn btn-primary btn-block connect-popup-close">Fermer</button></div>');
                    }
                }).always(function() {
                    _popup.updateStatus('ready');
                    _popup.content.append('<button title="Close (Esc)" type="button" class="mfp-close">×</button>');
                    _init();
                    _updateStatusMenu();
                });
            } else {
                return true;
            }

            return false;
        };

        /**
         * Checks for requirements on form inputs before commit
         * @param {DOMelement} form The form element
         * @return {bool} TRUE is none error deteted, FALSE otherwise
         */
        var _checkFormInput = function(form) {


            var has_error = false;
            $.each(form.find('div.form-group :input'), function(i, input) {
                input = $(input);
                var group = input.parents('div.form-group').removeClass('has-error');
                var help = group.find('.help-block').empty();
                if (input.hasClass('form-required')
                        && 'checkbox' === input.attr('type')
                        && false === input.context.checked) {
                    group.addClass('has-error');
                    help.append('Champ obligatoire');
                    has_error = true;
                } else if (input.hasClass('form-required') && '' === input.val()) {
                    group.addClass('has-error');
                    help.append('Champ obligatoire');
                    has_error = true;
                } else if ('email' === input.attr('type') && '' !== input.val()) {
                    var regmail = /^[a-zA-Z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,6}$/;
                    if (!regmail.exec(input.val())) {
                        group.addClass('has-error');
                        help.append('Email incorrecte');
                        has_error = true;
                    }
                } else if (input.hasClass('form-confirm')) {
                    var confirm = form.find('#' + input.attr('id').replace('conf-', ''));
                    if (confirm && input.val() !== confirm.val()) {
                        group.addClass('has-error');
                        help.append('Valeur différente');
                        has_error = true;
                    }
                }
            });

            _onVerificationPseudo();

           if(_onVerificationEmail() == false) {
               has_error = true;
           }

            return !has_error;
        };

        /**
         * Handles change storing logs satus
         * @return {bool} Always FALSE
         */
        var _onDisableLogs = function(e) {
            $(e.target).parents('form.member-form').submit();
            return false;
        };

        /**
         * Handles remove logs event
         * @return bool
         */
        var _onRemoveLogs = function() {
            return confirm('Supprimer l\'ensemble de votre historique ?');
        };

        /**
         * Handle commit event of a form
         * @return {bool} Always FALSE
         */
        var _onCommit = function(e) {
            var form = $(e.target);

            if (true === _checkFormInput(form)) {
                return _sendData(form.attr('method'), form.attr('action'), form.serialize());
            }

            return false;
        };

        /**
         * Handle bpage bookmarking
         * @returns {bool|Boolean}
         */
        var _onToggleBookmark = function(e) {
            $.ajax({
                type: 'GET',
                url: $(e.currentTarget).attr('href')
            }).always(function() {
                $(e.currentTarget).find('span').attr('style', 'color:yellow;');
            });

            return false;
        };

        var _onBookmarkSelectAll = function(e) {
            $(e.target).parent().parent().find('input').attr('checked', 'checked');
            return false;
        };

        var _onBookmarkDeselectAll = function(e) {
            $(e.target).parent().parent().find('input').removeAttr('checked');
            return false;
        };

        var _onSocialConnect = function(e) {
            e.preventDefault();

            var provider = $(this).data('provider');
            var origin   = $(this).data('origin');
            if (origin == 'site01net') {
                origin = '01net'
            }

            _gum.push(['login', {provider: provider, origin: origin}, function(response){
                if (response.status == 'success') {
                    $.ajax({
                        url: '/oauth2',
                        method: 'POST',
                        data: {'profile': response.profile, 'provider': provider}
                    }).done(function () {
                        document.location = '/mon-compte/mes-informations-personnelles.html';
                    });
                } else {
                    console.log(response);
                }
            }]);
        };

        /*
         * Fonction qui nous permet de faire une vérifaction du nom d'utilisateur
         * @param pseudo
         * @private
         */
        var _onVerificationPseudo = function(pseudo) {
            var usernameRegister = $('#register-username');
            var msgPseudo = $('#msg-pseudo');
            usernameRegister.parent().removeClass('has-error');
            usernameRegister.css({'border': '1px solid #ccc'});
            msgPseudo.html('');

           // console.log(pseudo);
            var strPseudo = null;
            if(typeof pseudo == 'undefined') {
                strPseudo = usernameRegister.val();
            } else {
                strPseudo = pseudo;
            }


            if(typeof strPseudo !='undefined' && strPseudo != '') {
                $.ajax({
                    url: "/verification-pseudo.json",
                    dataType: "json",
                    data: {
                        q: strPseudo
                    },
                    success: function( data ) {
                        if(data == false) {
                            usernameRegister.css({'border': '1px solid red'});
                            msgPseudo.html('<div class="has-error"><div class="form-control help-block">Nom d\'utilisateur déjà utilisé !</div></div>');
                        } else {
                            usernameRegister.css({'border': '1px solid green'});
                            msgPseudo.html('<div class="has-success"><div class="form-control help-block">Nom d\'utilisateur disponible.</div></div>');

                        }
                    }
                });
            } else {
                usernameRegister.css({'border': '1px solid red'});
                msgPseudo.html('<div class="has-error"><div class="form-control help-block">Nom d\'utilisateur ne peut être vide !</div></div>');
            }

        };

        /**
         * Fonction qui nous permet de générer un speudo
         * @param pseudo
         * @param response
         * @private
         */

        var _onGeneratePseudo = function(pseudo, response) {
            $('#register-username').css({'border': '1px solid #ccc'});
            $('#msg-pseudo').html('');

            var strPseudo = null;
            if(typeof pseudo == 'undefined')  {
                strPseudo = $('#register-username').val();
            } else {
                strPseudo = pseudo;
            }

            $.ajax({
                url: "/verification-pseudo.json",
                dataType: "json",
                // async: false,
                data: {
                    q: strPseudo //request.term
                },
                success: function( data ) {
                    if(data == false) {
                        $('#register-username').css({'border': '1px solid red'});
                        $('#msg-pseudo').html('<div class="has-error"><div class="form-control help-block">Nom d\'utilisateur déjà utilisé !</div></div>');

                        $.ajax({
                            url: "/generate-pseudo.json",
                            dataType: "json",
                            data: {
                                q: strPseudo //request.term
                            },
                            success: function( data ) {
                                response( data );
                            }
                        });
                    } else {
                        $('#register-username').css({'border': '1px solid green'});
                        $('#msg-pseudo').html('<div class="has-success"><div class="form-control help-block">Nom d\'utilisateur disponible.</div></div>');

                    }
                }
            });

        };


        var _onVerificationEmail = function(email) {
            $('#register-email').css({'border': '1px solid #ccc'});
            $('#msg-email').html('');

            var strEmail = null;
            if(typeof email == 'undefined')  {
                strEmail = $('#register-email').val();
            } else {
                strEmail = email;
            }

            var resp= null;

            if(typeof strEmail !='undefined' && strEmail != '') {
                $.ajax({
                    url: "/verification-email.json",
                    dataType: "json",
                    async:false,
                    data: {
                        q: strEmail
                    },
                    success: function( data ) {
                        resp = data;

                        console.log(data);
                        if(data == false) {
                            $('#register-email').css({'border': '1px solid red'});
                            $('#msg-email').html('<div class="has-error"><div class="form-control help-block">Email déjà utilisé !</div></div>');
                        } else {
                            $('#register-email').css({'border': '1px solid green'});
                            $('#msg-email').html('<div class="has-success"><div class="form-control help-block">Email disponible.</div></div>');

                        }
                    }
                });
            } else {
                $('#register-email').css({'border': '1px solid red'});
                $('#msg-email').html('<div class="has-error"><div class="form-control help-block">Email ne peut être vide !</div></div>');
            }

            // console.log(test);

            return resp;
        };

        /**
         * The public API of nextmembers object
         */
        var PublicApi = function() {
            return {
                init: _init,
                updateStatusMenu: _updateStatusMenu,
                connect: _connect,
                getMember: _getMember
            };
        };

        return _init().updateStatusMenu();
    })($);
});

