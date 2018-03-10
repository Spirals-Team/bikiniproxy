jQuery(document).ready(function () {
    if (lightbox_type == 'old_type') {

        var img = jQuery('a').filter(function () {

            var href = jQuery(this).attr('href');
            if (typeof href !== 'undefined') {
                href = href.toLowerCase();
                return href.substr(-4) == '.jpg' || href.substr(-5) == '.jpeg' || href.substr(-4) == '.png' || href.substr(-4) == '.gif';
            }
        });

        img.addClass('group1');

        /***<select case-insensitive a tags>***/

        jQuery("body a[href$='.jpg'], body a[href$='.jpeg'], body a[href$='.png'], body a[href$='.gif']").addClass('group1');
        jQuery("body a[class*='catalog_group']").removeClass('group1');
        jQuery("body a[class*='catalog_slider_group']").removeClass('group1');
        jQuery("body a[class*='cboxElement']").removeClass('group1');

        jQuery('a[href*="youtube.com"],a[href*="youtu.bebe"]').not('a[href*="/channel/"]').not('a[href*="/user/"]').not('.huge_it_gallery_item').not('.huge_it_videogallery_item').not('.huge_it_portfolio_item').each(function () {

            jQuery(this).addClass('youtube').addClass('group1');
            var url = jQuery(this).attr('href');
            var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            if (videoid) {
                jQuery(this).attr('href', 'https://www.youtube.com/embed/' + videoid[1]);
            }
        });

        jQuery('a[href*="vimeo.com"]').not('a[href$="vimeo.com"]').not('a[href*="/channels/"]').not('.huge_it_gallery_item').not('.huge_it_videogallery_item').each(function () {
            var href = jQuery(this).attr("href").split("/");
            if (Number(href[href.length - 1]) == Number(href[href.length - 1])) {
                jQuery(this).addClass('vimeo').addClass('group1');
                var vimeourl = jQuery(this).attr('href');
                var vimeoid = vimeourl.substring(vimeourl.lastIndexOf("/") + 1, vimeourl.length);
                jQuery(this).attr('href', 'http://player.vimeo.com/video/' + vimeoid);
            }
        });

        jQuery(".group1").colorbox({rel: 'group1'});
        jQuery(".group2").colorbox({rel: 'group2', transition: "fade"});
        jQuery(".group3").colorbox({rel: 'group3', transition: "none", width: "75%", height: "75%"});
        jQuery(".group4").colorbox({rel: 'group4', slideshow: true});
        jQuery(".ajax").colorbox();
        jQuery("a.youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
        jQuery("a.vimeo").colorbox({iframe: true, innerWidth: 500, innerHeight: 409});
        jQuery(".iframe").colorbox({iframe: true, width: "80%", height: "80%"});
        jQuery(".inline").colorbox({inline: true, width: "50%"});
        jQuery(".callbacks").colorbox({
            onOpen: function () {
                alert('onOpen: colorbox is about to open');
            },
            onLoad: function () {
                alert('onLoad: colorbox has started to load the targeted content');
            },
            onComplete: function () {
                alert('onComplete: colorbox has displayed the loaded content');
            },
            onCleanup: function () {
                alert('onCleanup: colorbox has begun the close process');
            },
            onClosed: function () {
                alert('onClosed: colorbox has completely closed');
            }
        });

        jQuery('.non-retina').colorbox({rel: 'group5', transition: 'none'});
        jQuery('.retina').colorbox({rel: 'group5', transition: 'none', retinaImage: true, retinaUrl: true});
    }
    else if (lightbox_type == 'new_type'){
        var img = jQuery('a').filter(function () {

            var href = jQuery(this).attr('href');
            if (typeof href !== 'undefined') {
                href = href.toLowerCase();
                return href.substr(-4) == '.jpg' || href.substr(-5) == '.jpeg' || href.substr(-4) == '.png' || href.substr(-4) == '.gif';
            }
        });

        jQuery('a[href*="youtube.com"],a[href*="youtu.bebe"]').not('a[href*="/channel/"]').not('a[href*="/user/"]').not('.huge_it_gallery_item').not('.huge_it_videogallery_item').not('.huge_it_portfolio_item').each(function () {
            jQuery(this).addClass('youtube').addClass('responsove_lightbox');
            var url = jQuery(this).attr('href');
            var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            if (videoid) {
                jQuery(this).attr('href', 'https://www.youtube.com/embed/' + videoid[1]);
            }
        });

        jQuery('a[href*="vimeo.com"]').not('a[href$="vimeo.com"]').not('a[href*="/channels/"]').not('.huge_it_gallery_item').not('.huge_it_videogallery_item').each(function () {
            var href = jQuery(this).attr("href").split("/");
            if (Number(href[href.length - 1]) == Number(href[href.length - 1])) {
                jQuery(this).addClass('vimeo').addClass('responsove_lightbox');
                /*var vimeourl = jQuery(this).attr('href');
                 var vimeoid = vimeourl.substring(vimeourl.lastIndexOf("/") + 1, vimeourl.length);
                 jQuery(this).attr('href', 'http://player.vimeo.com/video/' + vimeoid);*/
            }
        });

        img.addClass('responsove_lightbox');

        jQuery("body a[href$='.jpg'], body a[href$='.jpeg'], body a[href$='.png'], body a[href$='.gif']").addClass('responsove_lightbox');
        // solve conflict with Portfolio Gallery
        jQuery('.portfolio-gallery-content a').removeClass('responsove_lightbox');
        // solve conflict with Gallery
        jQuery('.gallery-img-content a').removeClass('responsove_lightbox');
        // solve conflict with Gallery Video
        jQuery('.gallery-video-content a').removeClass('responsove_lightbox');
        // solve conflict with Catalog
        jQuery('.huge_it_catalog_container a').removeClass('responsove_lightbox');
        jQuery('section[id^="huge_it_catalog_content_"] a, div[id^="main-slider_"] a').removeClass('responsove_lightbox');

    }
});

jQuery(window).load(function(){
    var urls = [];
    jQuery("body a[href$='.jpg'] > img, body a[href$='.jpeg'] > img, body a[href$='.png'] > img, body a[href$='.gif'] > img").each(function(){
        urls.push(jQuery(this).attr('src'));
    });

    var data = {
        action: 'lightbox_description',
        urls: urls
    };

    jQuery.post(ajaxUrl, data, function (response) {
        if(response) {
            response = JSON.parse(response);
            for(var i = 0; i < jQuery("a.responsove_lightbox").length; i++){
                jQuery("a.responsove_lightbox").eq(i).find('img').attr('data-description', response[i]);
            }
        }
    });

    jQuery('.responsove_lightbox').lightbox();
});		