jQuery(document).ready(function(){
    // run MA script identify() when submit on any forms with email field
    jQuery('form').on('submit', function(e){
        if(!jQuery(this).hasClass('sib_signup_form')) {
            var email = jQuery(this).find('input[type=email]').val();
            var emailPattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (typeof sendinblue != 'undefined' && email != null && emailPattern.test(email)) {
                var postData = jQuery(this).serializeObject();
                sendinblue.identify(email, postData);
            }
        }
        else
        {
            var form = jQuery(this).closest('form');
            /**
             * For safari
             * Not support required attribute
             * Begin
             */

            var required_fileds = [];
            var index = 0;
            jQuery.each(form.find('input[required="required"]'), function(){
                if(jQuery(this).val() == '')
                {
                    required_fileds[index] = jQuery(this).attr('name');
                    index++;
                }
            });
            if(index > 0)
            {
                form.find('.sib_msg_disp').html('<p class="sib-alert-message sib-alert-message-warning ">Please fill out required fields</p>').show();
                e.preventDefault();
                return;
            }
            index=0;
            jQuery.each(form.find('input[type="email"]'), function(){
                var Email = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
                if (!Email.test(jQuery(this).val()))
                {
                    index++;
                }
            });
            if(index > 0)
            {
                form.find('.sib_msg_disp').html('<p class="sib-alert-message sib-alert-message-warning ">Please fill out valid email address </p>').show();
                e.preventDefault();
                return;
            }
            /**
             * End
             */
            form.find('.sib_loader').show();
            jQuery('.sib_msg_disp').hide();
            var postData = form.serializeArray();
            var formURL = form.attr("action");
            form.addClass('sib_processing');
            jQuery.ajax(
                {
                    url : formURL,
                    type: "POST",
                    dataType: "json",
                    data : postData,
                    success:function(data, textStatus, jqXHR)
                    {
                        var form = jQuery('.sib_processing');
                        jQuery('.sib_loader').hide();
                        if(data.redirect) {
                            window.location.href = data.redirect;
                        } else if(data.status === 'success' || data.status === 'update') {
                            var cdata = '<p class="sib-alert-message sib-alert-message-success ">' + data.msg.successMsg + '</p>';
                            form.find('.sib_msg_disp').html(cdata).show();
                        } else if(data.status === 'failure') {
                            var cdata = '<p class="sib-alert-message sib-alert-message-error ">' + data.msg.errorMsg + '</p>';
                            form.find('.sib_msg_disp').html(cdata).show();
                        } else if(data.status === 'already_exist') {
                            var cdata = '<p class="sib-alert-message sib-alert-message-warning ">' + data.msg.existMsg + '</p>';
                            form.find('.sib_msg_disp').html(cdata).show();
                        } else if(data.status === 'invalid') {
                            var cdata = '<p class="sib-alert-message sib-alert-message-error ">' + data.msg.invalidMsg + '</p>';
                            form.find('.sib_msg_disp').html(cdata).show();
                        } else if(data.status === 'gcaptchaEmpty'){
                            var cdata = '<p class="sib-alert-message sib-alert-message-error ">' + data.msg + '</p>';
                            form.find('.sib_msg_disp').html(cdata).show();
                        } else if(data.status === 'gcaptchaFail'){
                            var cdata = '<p class="sib-alert-message sib-alert-message-error ">' + data.msg + '</p>';
                            form.find('.sib_msg_disp').html(cdata).show();
                        }
                        // run MA script identify() when subscribe on SIB forms
                        if(typeof sendinblue != 'undefined') {
                            var email = form.find('input[name=email]').val();
                            var postData = form.serializeObject();
                            if (data.status === 'success' || data.status === 'update' || data.status === 'already_exist') {
                                sendinblue.identify(email, postData);
                            }
                        }
                        jQuery(".sib-alert-message").delay(2000).hide('slow');
                        form.removeClass('sib_processing');
                    },
                    error: function(jqXHR, textStatus, errorThrown)
                    {
                        form.find('.sib_msg_disp').html(jqXHR).show();
                    }
                });
            e.preventDefault();
        };
    });
});
// get serialized data form subscribe form
jQuery.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    jQuery.each(a, function() {
        if(this.name == 'sib_form_action' || this.name == 'sib_form_id' || this.name == 'email')
            return true; // continue
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
