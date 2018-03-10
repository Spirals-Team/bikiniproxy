(function ($, Drupal) {
    // Hiding start and end date fields.
    Drupal.behaviors.wizImageOptimization = {
        attach: function (context) {
            var wizImageQualities = $("input[name*=wiz_image_quality]");

            wizImageQualities.each(function() {
                var imageQuality = $(this);
                var $inputFid = $(this).parent().nextAll("input[type=hidden][name*=\\[fid\\]]:eq(0)");
                $(this).data('fid', $inputFid.val());

                //Trigger Event change input value field image
                $inputFid.change(function() {
                    if (imageQuality.data('fid')) {
                        if (imageQuality.data('fid') != $(this).val()) {
                            imageQuality.removeAttr('disabled');
                            imageQuality.addClass('field-wiz-image-optimization');
                        }
                        else {
                            imageQuality.attr('disabled', 'disabled');
                            imageQuality.removeClass('field-wiz-image-optimization');
                        }
                    }
                })
            });
        }
    };

})(jQuery, Drupal);
