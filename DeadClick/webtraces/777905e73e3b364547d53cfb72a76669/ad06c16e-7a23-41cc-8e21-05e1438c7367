

if(typeof jQuery === 'undefined'){
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
}

// make sure that jquery is always present
var isJqueryReady = function(callback) {
    if (window.jQuery) {
        callback(jQuery.noConflict());
        var $ = jQuery;
    }
    else {
        window.setTimeout(function() { isJqueryReady(callback); }, 20);
    }
};


isJqueryReady(function($jqueryInstance) {
    $jqueryInstance(function() {
        var endingTime = new Date().getTime();
        var tookTime = endingTime - startingTime;
        $jqueryInstance('body').append('<!-- jquery version: ' + $jqueryInstance.fn.jquery + ' -->');
        var cmApp_element='';
        var cmApp_formType='';

        var CM_BASE_SITE_URL = "";

        window.cmApp_validateForm = function()
        {

            var signupContainerElem=$jqueryInstance("#cmApp_signupContainer");

            var errorElem = $jqueryInstance("#cmApp_emailError");
            var errorElemDOB = $jqueryInstance("#cmApp_dobError");
            var formElem = signupContainerElem.find("form");
            var processingMsgElem = signupContainerElem.find("div.cmApp_processingMsg");
            var successMsgElem = signupContainerElem.find("div.cmApp_successMsg");


            var errorMsgAr=[];
            var errorFieldSelectorAr=[];

            var errorMsg="";

            formElem.hide();
            errorElem.html("").hide();
            errorElemDOB.html("").hide();
            successMsgElem.hide();

            cmApp_showProcessing();

            signupContainerElem.find("input,select").css("outline","none");

            // validate the email field. make sure it is not empty and that it is valid. if invalid, add to the error array and outline the field in red
            var email = $jqueryInstance("#cmApp_signupEmail").val();

            if (email.length < 1) {
                errorMsg = "Email address is required";
                errorMsgAr[errorMsgAr.length]="Email address is required";
                $jqueryInstance("#cmApp_signupEmail").focus().css("outline","1px solid #FF0000");
            }
            else {
                if (!cmApp_validateEmail(email)) {
                    errorMsgAr[errorMsgAr.length]="Email address is invalid";
                    errorFieldSelectorAr[errorFieldSelectorAr.length]="#cmApp_signupEmail";
                    $jqueryInstance("#cmApp_signupEmail").focus().css("outline","1px solid #FF0000");
                }
            }

            // make sure that all required inputs and selects (dropdown) have values. if invalid, add to the error array and outline the field in red
            $jqueryInstance(".cm-required").find("input").css("outline","none");
            var elems=$jqueryInstance(".cm-required").find("input,select");
            for (var x=0; x<elems.length;x++)
            {
                var elem=$jqueryInstance(elems[x]);
                if (elem)
                {
                    var val=elem.val();
                    if (val.length<1)
                    {
                        // the field is empty.
                        var elemId=elem.attr("name");
                        var tempElem=$jqueryInstance("#cmApp_signupContainer").find("label[for='"+elemId+"']");
                        var fieldLabel="Field";
                        if (tempElem.length>0)
                        {
                            // the field has a label. use the label as the field name
                            fieldLabel=tempElem.html();
                        }
                        else
                        {
                            if (elem.attr("placeholder"))
                            {
                                // the field has a placeholder. use the placeholder as the field name
                                fieldLabel=elem.attr("placeholder");
                            }
                        }
                        errorMsgAr[errorMsgAr.length]= fieldLabel.replace(" *","")+" is required";
                        elem.focus().css("outline","1px solid #FF0000");
                    }
                }
            }

            // make sure that all required multi select many inputs (checkboxes) have at least 1 checked field. if invalid, add to the error array and outline all checkboxes in red
            $jqueryInstance(".cm-checkboxes-required").find("input").css("outline","none");
            var elems=$jqueryInstance(".cm-checkboxes-required");

            for (var x=0; x<elems.length;x++)
            {
                var elem=$jqueryInstance(elems[x]).find("input:checked");
                if (elem.length<1)
                {
                    // there are no checked inputs in the container
                    var fieldLabel=elems.find("label:eq(0)").html();
                    errorMsgAr[errorMsgAr.length]= fieldLabel.replace(" *","")+" is required";
                    elems.find("input").focus().css("outline","1px solid #FF0000");
                }
            }


            if (errorMsgAr.length > 0 ) {
                // at least 1 error was found. loop through all error and display them.
                cmApp_hideProcessing();
                formElem.show();
                var errorMsg="";
                for (var x=0;x<errorMsgAr.length;x++)
                {
                    errorMsg+="<div>"+errorMsgAr[x]+"</div>";
                }
                $jqueryInstance("#cmApp_errorAll").html(errorMsg).slideDown(200);
                successMsgElem.hide();
                //return false;
            }



            var errorMsgDOB="";

            if (cmApp_validateDOB() == true){
                //errorMsgDOB = "";
            } else {
                //console.log("DOB NOT valid");
                errorMsgDOB = "Please enter a valid date (MM/DD/YYYY)";
                cmApp_hideProcessing();
                formElem.show();
                errorElemDOB.html(errorMsgDOB).slideDown(200);
                successMsgElem.hide();
                //return false;
            }

            if (errorMsg.length > 0 || errorMsgDOB.length>0)
            {
                return false;
            }
            return true;

        };


        window.cmApp_signup_writeCookie = function(var1, val1)
        {
            document.cookie = var1 + "=" + encodeURIComponent(val1) + "; path=/";
        };

        window.cmApp_signup_removeCookie = function(var1)
        {
            document.cookie = var1 + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
        };

        window.cmApp_signup_readCookie = function(var1)
        {
            var nameEQ = var1 + "=";
            var cookieAr = document.cookie.split(';');
            for (var i = 0; i < cookieAr.length; i++) {
                var curCookie = cookieAr[i].trim();
                if (curCookie.indexOf(nameEQ) == 0) {
                    return decodeURIComponent(curCookie.substring(nameEQ.length, curCookie.length));
                }
            }
            return "";
        };


        window.cmApp_validateEmail = function(email)
        {
            // simple test to determine that there are character(s), the @ symbol, character(s), period, character(s)
            // this will still allow some invalid emails (ex: "a@a@.a"), these can be checked by campaign monitor.
            var emailReg = /^[^\s]+@[^\s@]+\.[^\s@]+$/;
            return emailReg.test(email);
        };

        window.cmApp_validateDOB = function()
        {
            var dobNode = $jqueryInstance("#cmApp_signupDateOfBirth");
            if (dobNode.length == 0){ // there is no date of birth field in the form. no error.
                return true;
            }

            var dob = dobNode.val();
            if (dob.length == 0){ // date of birth field is blank. it is not required, so there is no error.
                return true;
            }


            dob = dob.replace(/\/|-| |\.|,/g, '-');
            var dateAR=dob.split("-");
            if (dateAR.length!=3)
            { // there should be 3 values: day, month, and year. Otherwise there is a date error.
                return false;
            }

            // Parse the date parts to integers
            var day = parseInt(dateAR[1]);
            var month = parseInt(dateAR[0]);
            var year = parseInt(dateAR[2]);


            if(isNaN(day) || isNaN(month) || isNaN(year)) {
                // day, month, or year is not a numeric.
                return false;
            }

            var currentYear=new Date().getFullYear();

            // Check the ranges of month and year
            if (year < 1900 || year > currentYear || month == 0 || month > 12) {
                // the month or year is invalid
                return false;
            }

            var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            // Adjust for leap years
            if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
                monthLength[1] = 29;
            }

            // Check the range of the day
            if (day <= 0 || day > monthLength[month - 1]) {
                // the number of days is not valid for the specified month.
                return false;
            }

            return true;
        };

        window.cmApp_showProcessing = function() {
            var statusContainer = document.getElementById('cmApp_statusContainer');
            var processingElem  = statusContainer.querySelector('.cmApp_processingMsg');

            statusContainer.classList.add('cmApp_processing');
            statusContainer.classList.remove('cmApp_hidden');
        };

        window.cmApp_hideProcessing =  function() {
            var statusContainer = document.getElementById('cmApp_statusContainer');
            var processingElem  = statusContainer.querySelector('.cmApp_processingMsg');

            statusContainer.classList.remove('cmApp_processing');
            statusContainer.classList.add('cmApp_hidden');
        };

        window.showSuccess = function() {
            var statusContainer = document.getElementById('cmApp_statusContainer');
            var processingElem  = statusContainer.querySelector('.cmApp_processingMsg');

            statusContainer.classList.remove('cmApp_hidden');
            statusContainer.classList.remove('cmApp_processing');
        };

        window.cmApp_showError = function() {
            var statusContainer = document.getElementById('cmApp_statusContainer');
        };

        var cmApp_formIsDisplayed=0;

        window.cmApp_initForm = function(forceLoadForm)
        {
            // cmApp_formType = $jqueryInstance('#cmApp_formType').val();
            // cmApp_element

            if (cmApp_formIsDisplayed && $jqueryInstance("#noAutoOpen").val()!="1")
            {
                return false;
            }

            if (cmApp_formType=="lightbox" && !forceLoadForm)
            {
                var percentScroll=0;

                var elem=$jqueryInstance('#noAutoOpen');
                if (elem.length>0)
                {
                    var noAutoOpen=parseInt(elem.val());
                    if (noAutoOpen>0)
                    {
                        //alert("load form in "+delaySeconds+" sec");
                        //setTimeout(function(){ cmApp_initForm(1); }, (delaySeconds*1000));
                        cmApp_button();
                        return false;
                    }
                }

                elem=$jqueryInstance('#lightboxSeconds');
                if (elem.length>0)
                {
                    //alert("c");
                    var delaySeconds=parseInt(elem.val());
                    if (delaySeconds>0)
                    {
                        //alert("load form in "+delaySeconds+" sec");
                        setTimeout(function(){ cmApp_initForm(1); }, (delaySeconds*1000));
                        return false;
                    }
                }

                elem=$jqueryInstance('#lightboxScrollPercent');
                if (elem.length>0)
                {

                    var percentScroll=parseInt(elem.val());
                    if (percentScroll>0)
                    {

                        //console.log("load form in "+percentScroll+" % scroll");

                        function checkPageScroll(percentScroll)
                        {
                            var wintop = $jqueryInstance(window).scrollTop();
                            var docheight = $jqueryInstance(document).height();
                            var winheight = $jqueryInstance(window).height();
                            //var  scrolltrigger = event.data.percentScroll/100;
                            var  scrolltrigger = percentScroll/100;
                            //console.log("A "+((wintop/(docheight-winheight))+" > "+(scrolltrigger)));
                            //console.log("b +(("+wintop+"/("+docheight+"-"+winheight+")) > ("+scrolltrigger+"))");
                            if  ((wintop/(docheight-winheight)) > scrolltrigger)
                            {
                                cmApp_initForm(1);
                            }
                        }

                        $jqueryInstance(document).bind("scroll", { percentScroll:percentScroll  }, function(event){
                            checkPageScroll(event.data.percentScroll);
                        });
                        //console.log("checkPageScroll("+percentScroll+")");
                        checkPageScroll(percentScroll);
                        return false;
                    }
                }
            }


            var campaignMonitorFormId = $jqueryInstance("#cmApp_FormId").val();
            var campaignMonitorViewedIds = cmApp_signup_readCookie("campaignMonitorViewedIds");

            // get $ reference to form
            var el = $jqueryInstance('#' + cmApp_element);

            cmApp_formIsDisplayed=1;

            // add form id to cookie
            if (campaignMonitorFormId) {

                if (campaignMonitorViewedIds.indexOf("(" + campaignMonitorFormId + ")") < 0) {
                    cmApp_signup_writeCookie("campaignMonitorViewedIds",
                        campaignMonitorViewedIds + "(" + campaignMonitorFormId + ")");
                }
            }

            if (cmApp_formType == 'lightbox') {
                //cmApp_lightboxForm(el);
                setTimeout(function(){
                    cmApp_lightboxForm(el);
                }, 1000);
            } else {
                if (cmApp_formType == 'slideoutTab') {
                    cmApp_slideoutForm(el);
                } else {
                    if (cmApp_formType == 'embedded') {
                        cmApp_embedForm(el);
                    } else {
                        el.removeClass('cmApp_hidden');
                    }
                }
            }


            // bind close button click handler
            el.find('.cmApp_closeFormButton').on('click', function (event)
            {
                event.preventDefault();
                cmApp_closeForm(cmApp_element);
            });


            cmPreviewFormHeightUpdate();


        };

        window.cmApp_closeForm = function(element)
        {
            var modalBackground = $jqueryInstance('#cmApp_modalBackground');
            element = $jqueryInstance('#' + element);
            modalBackground.fadeOut( 300, function() {
                element.addClass('cmApp_hidden');
            });

        };

        window.cmApp_embedForm = function(el)
        {
            var markup = el.html();

            var main = $jqueryInstance('.cmApp_embedFormContainer').first();

            if (main.length >= 0)
            {
                $jqueryInstance('.cmApp_embedFormContainer').css("display","block");
            }
            else {
                var main = $jqueryInstance('main').first();

                if (main.length < 1) {
                    main = $jqueryInstance('[role="main"]').first();
                }
            }

            if (main.length >= 1) {
                el.appendTo(main);
            }
            el.removeClass('cmApp_hidden');

        };

        window.cmApp_button = function()
        {

            var main = $jqueryInstance('.cmApp_FormButtonContainer').first();

            if (main.length > 0)
            {
                $jqueryInstance('.cmApp_FormButtonContainer').css("display","block");
            }
            else {
                var main = $jqueryInstance('main').first();

                if (main.length < 1) {
                    main = $jqueryInstance('[role="main"]').first();
                }
                if (main.length < 1) {
                    main = $jqueryInstance('body').first();
                }
            }

            if (main.length >= 1) {
                //el.appendTo(main);
                main.append('<a href="javascript:void(0);" onclick="cmApp_initForm(1);" class="cmFormElemButton">Click Here</a>');

                var elem=$jqueryInstance(".cmApp_formSubmitButton");
                var elemNew=$jqueryInstance(".cmFormElemButton");
                elemNew.css("background-color", elem.css("background-color"));
                elemNew.css("color", elem.css("color"));
                elemNew.html(elem.val());

            }
        };

        window.cmApp_lightboxForm = function(el)
        {

            $jqueryInstance('#cmApp_modalBackground').removeClass("cmApp_hidden").css("display", "block");
            el.removeClass('cmApp_hidden');
        };

        window.cmApp_slideoutForm = function(el)
        {
            $jqueryInstance('#cmApp_slideoutButton').on('click', function (event)
            {
                event.preventDefault();
                cmApp_toggleSlideout(el);
            });
        };

        window.cmApp_toggleSlideout = function(el)
        {
            if (el.is('.cmApp_hidden')) {
                el.removeClass('cmApp_hidden');
            } else {
                el.addClass('cmApp_hidden');
            }
        };

        window.cmApp_toggleModal = function(hideBackground) {
            var modal = $jqueryInstance('#cmApp_modalBackground');

            if (typeof hideBackground == "undefined") {
                if (modal.is('.cmApp_hidden')) {
                    hideBackground = 0;
                }
                else {
                    hideBackground = 1;
                }
            }

            if (hideBackground) {
                modal.addClass('cmApp_hidden');
            } else {
                modal.removeClass('cmApp_hidden');
            }
        };

        window.cmPreviewFormHeightUpdate = function()
        {
            var windowHeight = $jqueryInstance( window ).height();

            /*var maxHeightInner=windowHeight-300;
             if (maxHeightInner<120)
             {
             maxHeightInner=120;
             }*/

            var maxHeightOuter=windowHeight-150;
            if (maxHeightOuter<300)
            {
                maxHeightOuter=300;
            }

            var lightboxFieldElem=$jqueryInstance("#cmApp_signupContainer.cmApp_lightbox");
            var slideoutElem=$jqueryInstance("#cmApp_signupContainer.cmApp_slideoutTab").find("#cmApp_signupForm");

            slideoutElem.css("max-height",(maxHeightOuter+"px")).css("overflow-y","auto");
            slideoutElem.find("input").css("margin-left",0).css("margin-right",0);
            lightboxFieldElem.css("max-height",(maxHeightOuter+"px")).css("overflow-y","auto");
            lightboxFieldElem.find("input").css("margin-left",0).css("margin-right",0);
        };

        $jqueryInstance(window).load  (function () {
            $jqueryInstance(document).on('click', '.post-ajax', function (e) {
                e.preventDefault();

                $jqueryInstance('#cmApp_thankYouCheck').hide();


                if (!cmApp_validateForm()) {
                    return false;
                }


                var dataToSend = {};
                var recaptchaKey = $jqueryInstance('.g-recaptcha-response').val();
                dataToSend.action = 'ajax_handler_nopriv_cm_forms';
                dataToSend.recaptcha_key = recaptchaKey;


                var formData = $jqueryInstance(this).closest('.cm-form-handler').serializeArray();
                $jqueryInstance(formData).each(function (index, obj) {

                    if (obj.name !== 'no_js'){
                        dataToSend[obj.name] = obj.value;
                    }
                });

                $jqueryInstance.ajax({
                    type: "POST",
                    url: ajax_request.ajax_url,
                    data: dataToSend,
                    dataType: "text json",
                    success: function (data, textStatus, request) {


                        var successMessage = $jqueryInstance('<p/>');
                        successMessage.text('Thank You!');

                        if (typeof data.success_message != "undefined") {
                            successMessage.css('white-space', 'normal');
                            successMessage.text(data.success_message);
                        }
                        $jqueryInstance('#cmApp_thankYouCheck').show();
                        $jqueryInstance('.cmApp_processingMsg').show().text('');
                        $jqueryInstance('.cmApp_processingMsg').show().append(successMessage);
                        $jqueryInstance('#cmApp_thankYouCheck').show();

                    },
                    error: function (request, textStatus, errorThrown) {

                        if (request.responseText) {
                            var errorMsg = request.responseText.replace("error:", "");
                        }
                        else {
                            var errorMsg = "List Error. Email address not added.";
                            console.log(request);
                        }
                        var signupContainerElem = $jqueryInstance("#cmApp_signupContainer");
                        var formElem = signupContainerElem.find("form");
                        var errorElem = $jqueryInstance("#cmApp_emailError");
                        cmApp_hideProcessing();
                        formElem.show();
                        errorElem.html(errorMsg).slideDown(200);
                    }
                });
            });

            $jqueryInstance(window).resize(function () {
                cmPreviewFormHeightUpdate();
            });

            cmApp_element = 'cmApp_signupContainer';
            cmApp_formType = $jqueryInstance('#cmApp_formType').val();
            cmApp_initForm(0);

        });
    });
});

