

/**
 * Custom javascript for drupal integration
 */

/*---- Solves the problem of conflict with other jquery library using $ ----*/

var $ = jQuery.noConflict();

/**
 * Search story locator. Opens a new window with the search result
 *
 * @returns {boolean}
 *   false value input is empty
 */
function AddSearchTerm() {

    var wizardsModuleWidgetSearchURLEndpoint='http://locator.wizards.com/deeplink/widget.aspx?p=';
    var wizardsModuleWidgetSearchTerm=document.getElementById('txtWizardsModuleWidgetSearch');

    if (wizardsModuleWidgetSearchTerm.value=='') {
        wizardsModuleWidgetSearchTerm.focus();
        return false;
    }
    wizardsModuleWidgetSearchURLEndpoint += encodeURIComponent(wizardsModuleWidgetSearchTerm.value) + '&amp;a=search&amp;brand=dnd';
    window.open(wizardsModuleWidgetSearchURLEndpoint);
}

/**
 * Dom manipulation of loading the page using jquery
 */
$(document).ready(function(){

    /*-- Extension ajax see more --*/

    $.fn.ajaxSeeMore = function( options ) {

        var settings = $.extend({
            type: ''
        }, options );

        var $this = this;
        $this.addClass('loading');
        $.getJSON(
            settings.url,
            settings.data,
            function(response) {
                $.each(response.data, function(i, val) {
                    $(settings.wrapper).append(val);
                });

                if (settings.type) {
                    if(response.data_next_page == 1) {
                        var nextPage = parseInt($this.attr('data-page'))+1;
                        $this.attr('data-page', nextPage);
                    } else {
                        $this.remove();

                    }
                    if (settings.type == 'podcast') {
                        window.ark.AudioPlayer_V2.initAll();
                    }

                    if (settings.type == 'livestream') {
                        ark.expandLiveSteams();
                        ark.checkLiveStreamsHeight();
                    }
                } else {
                    if(response.data.length < $this.attr('data-limit')){
                        $this.remove();
                    } else {
                        var nextPage = parseInt($this.attr('data-page')) + 1;
                        $this.attr('data-page', nextPage);
                    }
                }



                $this.removeClass('loading');
            }
        );

        return this;

    };

    /*-- View Modes --*/

    $("#image-mode").click(function () {
        $('.main-content').removeClass('details-mode').addClass('thumbnails-mode');
        $(this).addClass('current');
        $('#detail-mode').removeClass('current');
    });

    $("#detail-mode").click(function () {
        $('.main-content').removeClass('thumbnails-mode').addClass('details-mode');
        $(this).addClass('current');
        $('#image-mode').removeClass('current');
    });

    
    /*-- Submenu Mobile --*/

    $("#submenu-title").click(function () {
        
        var submenu         = $('#submenu.mobile');
            contentPadding  = contentPadding != null ? contentPadding : parseInt($("#content").css("padding-top"));
        
        if ( submenu.hasClass("open") ) {
            submenu.removeClass('open');
            if ( submenu.hasClass("snap-menu") ) {
                $("#content").css("padding-top", $('nav#submenu').height() + contentPadding);
            }
        } else {
            submenu.addClass('open');
            $('html, body').animate({ 
                scrollTop:$("#page-header").height() 
            }, 'slow');
            $("#content").css("padding-top", $('nav#submenu').height() + contentPadding);
        }
    });

    
    $("#submenu ul li").click(function () {
        $('li.current').removeClass('current');
        $(this).addClass('current');
        $('#submenu.mobile').removeClass('open');
    });

    
    /*-- Search news --*/

    // Hubnews type or sort selector
    $("#hubnews-form .tag, #hubnews-form .sort").live('change', function(){
        $("#hubnews-form").submit();
    });

    // Hubnews AJAX for "more news"
    $('#hubnews-form a.more').live('click', function() {
        var currentPage = $(this).attr('data-page');
        var currentType = $('#hubnews-form input.type').val();
        var currentSort = $('#hubnews-form select.sort').val();
        var currentTag = $('#hubnews-form select.tag').val();
        var currentSearch = $('#global-search-form').val();
        var data = {page:currentPage,sort:currentSort,tag:currentTag,type:currentType,search:currentSearch};

        $(this).ajaxSeeMore({
            url: "/news/ajax",
            data: data,
            wrapper: '.main-content .article-list'
        });

        return false;
    });

    /*-- Search product --*/

    // Product catalog type or sort selector
    $("#product-catalog-form .subtype, #product-catalog-form .sort").live('change', function(){
        $("#product-catalog-form").submit();
    });

    // Product catalog AJAX for "more product"
    $('#product-catalog-form a.more').live('click', function() {
        var currentPage = $(this).attr('data-page');
        var currentType = $('#product-catalog-form input.type').val();
        var currentSort = $('#product-catalog-form select.sort').val();
        var currentSubtype = $('#product-catalog-form select.subtype').val();
        var currentSearch = $('#global-search-form').val();

        var data = {page:currentPage,sort:currentSort,subtype:currentSubtype,type:currentType,search:currentSearch};

        $(this).ajaxSeeMore({
            url: "/products/ajax",
            data: data,
            wrapper: '.main-content .articles'
        });

        return false;
    });

    /*-- Search podcasts & livestream --*/
    $("#hubpodcasts-form .sort").live('change', function(){
        $("#hubpodcasts-form").submit();
    });

    $("#hublivestream-form .sort").live('change', function(){
        $("#hublivestream-form").submit();
    });

    // Hub podcasts & livestream AJAX for "more element"
    $('#hubpodcasts-form a.more').live('click', function() {
        var currentPage = $(this).attr('data-page');
        var currentOffset = $(this).attr('data-offset');
        var currentType = $('#hubpodcasts-form input.type').val();
        var currentSubtype = $('#hubpodcasts-form input.subtype').val();
        var currentSort = $('#hubpodcasts-form select.sort').val();
        var currentSearch = $('#global-search-form').val();
        var data = {page:currentPage, sort:currentSort, type:currentType, subtype:currentSubtype, offset:currentOffset,search:currentSearch};

        $(this).ajaxSeeMore({
            url: "/hubpodcast/ajax",
            data: data,
            wrapper: '.article-related .article-list',
            type: 'podcast'
        });

        return false;
    });

    $('#hublivestream-form a.more').live('click', function() {
        var currentPage = $(this).attr('data-page');
        var currentOffset = $(this).attr('data-offset');
        var currentType = $('#hublivestream-form input.type').val();
        var currentSubtype = $('#hublivestream-form input.subtype').val();
        var currentSort = $('#hublivestream-form select.sort').val();
        var currentSearch = $('#global-search-form').val();
        var data = {page:currentPage, sort:currentSort, type:currentType, type:currentSubtype, offset:currentOffset,search:currentSearch};

        $(this).ajaxSeeMore({
            url: "/hublivestream/ajax",
            data: data,
            wrapper: '.article-related .article-list',
            type: 'livestream'
        });

        return false;
    });


    // YouTube video module
    $('figure.video a:not(.audio-play)').each(function() {
        $(this).attr('href','javascript:void(0)');
    });

    /*----- Fancybox -----*/

    if($(".fancybox").length) {
        $(".fancybox:not(.galleryItem)").fancybox({
            padding:0,
            margin:10,
            maxWidth:728,
            maxHeight:800,
            helpers : {
                title: { type: 'outside' }//,
                //buttons : { tpl: '<div id="fancybox-buttons"><ul><li><a class="btnToggle linkedImage" title="Toggle size" href="javascript:$.fancybox.toggle();">Fullscreen</a></li></ul></div>' }
            },
            iframe : {
                scrolling:'no'
            },
            afterLoad : function() {
                var titre = $($(this)[0].group[$(this)[0].index].element.context).find("h3")[0];
                $(titre).clone().insertBefore(".fancybox-skin");

            },
            onUpdate : function() {
                if ( !$("#fancybox-actions").length ) {
                    $('<div id="fancybox-actions"></div>').insertBefore(".fancybox-skin");
                } else {
                    $("#fancybox-actions").empty();
                }

                var linkButton = $($(this)[0].group[$(this)[0].index].element.context),
                    wallpapers = linkButton.data("wallpaper") ? JSON.parse(linkButton.data("wallpaper").replace(/\'/g,'"')) : null;

                if (wallpapers) {
                    var wallpapersHTML = '<div class="download-wallpaper"><p>Download</p><ul>';
                    for ( var i = 0; i < wallpapers.length; i++ ) {
                        wallpapersHTML += '<li class="' + wallpapers[i].size + '"><a download="wallpaper_' + wallpapers[i].size + '.jpg" href="' + wallpapers[i].file + '" target="_blank">' + wallpapers[i].size + '</a></li>';
                    }
                    wallpapersHTML += '</ul></div>';
                    $("#fancybox-actions").append(wallpapersHTML);
                }

                $($(this)[0].wrap[0]).addClass(linkButton.eq(0).parent()[0].className);

                $("#fancybox-actions").append($("#fancybox-buttons").clone());
            },
        });

        $('body').on('click','.btnToggle' ,function(e){
            e.preventDefault();
            activeImgURL = $('.fancybox-inner img').attr('src');
            window.open(activeImgURL);
        });

        $('body').on('click','.download-wallpaper' ,function(){
            $('.download-wallpaper ul').toggle();
        });
    }

    /*----- Send form ------*/

    $("#dx1-narrow-sort-form .narrow, #dx1-narrow-sort-form .sort").change( function(){
        $(this).parents('form').submit();
        //$("#hubnews-form").submit();
    });

    $(".product_media-resources #search-form-button," +
        "#search-form-mini #search-form-button, " +
        ".product_catalog hub_catalog #search-form-button," +
        "#search-article #search-form-button").click( function(){
        $(this).parents('form').submit();
    });


    /*------Display content see more -------*/

    $('.see-more').live('click', function(){
        var url = $('.see-more').data( "url" );
        var data = $('#dx1-narrow-sort-form').serialize() + '&' + $('#dx1-search-form').serialize() + '&offset=' + $('.see-more').attr("data-offset");

        $(this).addClass('loading');
        var $this = $(this);
        $.getJSON(
            url,
            data,
            function( response ) {
                $('.see-more').attr("data-offset", response.offsetQuery);
                $('.see-more').addClass(response.showHideSeeMore);
                if (response.data.length > 0) {
                    $('.promo-box .articles').append(response.data.join(""));
                }
                $this.removeClass('loading');
            }
        );

        $(this).trigger('blur');

    });

    /*------Display content see more -------*/

    $('.responsive-table').stacktable({myClass:'stacktable small-only'});

    /*------ Remove attribut border, cellspacing and cellpadding in table -------*/

    $('.main-content.article table').removeAttr('border');
    $('.main-content.article table').removeAttr('cellspacing');
    $('.main-content.article table').removeAttr('cellpadding');
    $('.main-content.article table').removeAttr('style');

    /*------ Add class half-left and half-right into img -------*/

    $("figure.caption[style]").each(function(){
        var position = $(this).attr('style').split(':');
        $(this).addClass('half-' + position[1].trim().replace(/\;/g,""));
        $(this).removeAttr('style');
    });

    /*------ Event onclick social medias -------*/

    $('#socials a').click( function() {
        var urlCurrentSocial = $(this).attr('href');
        window.open(urlCurrentSocial, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
        return false;
    });

    /*------ See more Dragon+ issues ------*/

    $('.module_dragon-magazine .more-button').click(function () {
        var $this = $(this),
            data = { items: JSON.parse($this.attr('data-items')) };
            $articleContainer = $this.parent().prev('.articles');

        $this.addClass('loading');

        $.ajax({
            method: 'POST',
            url: '/dx-block/dragon-plus-issues/see-more',
            data: data,
            success: function(response) {
                if (response.status == 'OK') {
                    $articleContainer.append(response.markup);
                    var items = JSON.parse(response.see_more_json);
                    $this.attr('data-items', response.see_more_json);
                    if (items.length == 0) {
                        //Remove see more button
                        $this.parent().remove();
                    }
                }
                $this.removeClass('loading');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Unexpected error. Status : ' + textStatus + ', msg : ' + errorThrown);
                $this.removeClass('loading');
            }

        });
    });
});