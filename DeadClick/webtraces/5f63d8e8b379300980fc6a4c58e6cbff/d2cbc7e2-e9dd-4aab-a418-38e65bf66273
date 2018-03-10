/*!
    --------------------------------
    PXU Photoset Extended
    --------------------------------
    + https://github.com/PixelUnion/Extended-Tumblr-Photoset
    + http://pixelunion.net
    + Version 1.5.0
    + Copyright 2012 Pixel Union
    + Licensed under the MIT license
*/

/*!
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------
    Note: This is a highly shredded version of Pixel Unions plugin, used as a leapboard to get photosets on Syndex to behave nicely again. Thank you PXU.
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

(function( $ ){

    $.fn.pxuPhotoset = function( options, callback ) {

        var defaults = {
            'highRes'        : true,
            'photoset'       : '.photo-slideshow',
            'photoWrap'      : '.photo-data',
            'photo'          : '.pxu-photo'
        };

        var settings = $.extend(defaults, options);

            // init Tumblr Lightbox
            $('.tumblr-box').on('click', function (e) {
                e.preventDefault();
                var clickedpxu = $(this);
                var photoSlideshow = clickedpxu.parent().parent().parent().find(".photo-slideshow").attr('id');
                tumblrLightbox(clickedpxu, photoSlideshow);
            });
            $('.pset').on('click', function (e) {
                e.preventDefault();
                var clickedpxu = $(this);
                var photoSlideshow = clickedpxu.parent().parent().parent().attr('id');
                tumblrLightbox(clickedpxu, photoSlideshow);
            });

            var tumblrLightbox = function (current,photoset) {

                // figure out which image was clickedpxu
                // we'll make sure that's where we start our lightbox
                var openWith = current.parents(settings.photoWrap).find(settings.photo+' img').data('count');

                var photosetArray = [];
                $('#'+photoset).find(settings.photoWrap).each(function () {
                    var thisImage = $(this).find(settings.photo+' img');
                    var imageWidth = thisImage.data('width');
                    var imageHeight = thisImage.data('height');
                    var imageLowRes = thisImage.attr('src');
                    var imageHighRes = thisImage.data('highres');
                    // formatting is specific to how Tumblr has things set up
                    var thisPhotoPackage = {"width":imageWidth,"height":imageHeight,"low_res":imageLowRes,"high_res":imageHighRes};
                    photosetArray.push(thisPhotoPackage);
                });

                Tumblr.Lightbox.init(photosetArray, openWith);

            }; // end tumblrLightbox()


        // display photo info
        $("span.info")
            .on("mouseenter", function() {
                var toggle = $(this);
                var exifData = toggle.children('.pxu-data');
                exifData.css('display','block').stop(true, false).animate({opacity: 1}, 200);
            });
        $("span.info")
            .on("mouseleave", function() {
                var toggle = $(this);
                var exifData = toggle.children('.pxu-data');
                exifData.stop(true, false).animate({opacity: 0}, 200, function() {
                    $(this).css('display','none');
                });
            });

        return this.each(function() {
            var $this = $(this);

            $this.imagesLoaded(function() {

                // Roll through HighRes data and replace the images
                if( settings.highRes ) {
                    $this.find(settings.photoWrap).each(function() {
                        var thisImage = $(this).find('.photo img');
                        var bigOne    = thisImage.data('highres');

                        thisImage.attr('src', bigOne);
                    });
                } // end HIGH RES

                // We're done! Add a 'processed' class so people can tie other processes into it

                $this.addClass('processed');

                // callback if provided
                if (typeof callback == 'function') { // make sure the callback is a function
                        callback.call(this);
                }

            }); // end imagesLoaded

        }); // end return each

    }; // end PXU Photoset Extended

})( jQuery );
