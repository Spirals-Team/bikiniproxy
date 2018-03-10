/*****************************************************
 *@Description: BKB TABIFY
 *@Created By: Mahbub
 *@Created At: 09-06-2014
 *@Last Edited: 09-06-2014
 *****************************************************/

jQuery(document).ready(function($) {

    $('.bkb-tabs li').click(function() {

        if ($(this).find(".bkb-link").attr("class") != "bkb-link") {
            switch_tabs($(this));
        }

    });

    function switch_tabs( obj ) {

        obj.parent().parent().find('.bkb-tab-content').slideUp("fast");
        
        obj.parent().find('li').removeClass("active");

        var id = obj.find("a", 0).attr("rel");

        $('#' + id).slideDown("slow");

        obj.addClass("active");
    }
});