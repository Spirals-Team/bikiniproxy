(function (d, w, $) {
    var c = d.className;
    d.className = c + (c && ' ') + 'iphorm-js';
    w.iPhorm = {
        preloadedImages: [],
        preload: function (images, prefix) {
            for (var i = 0; i < images.length; i++) {
                var elem = document.createElement('img');
                elem.src = prefix ? prefix + images[i] : images[i];
                w.iPhorm.preloadedImages.push(elem);
            }
        },
        instance: null,
        logic: {}
    };

    w.iPhormRecaptchaLoaded = function () {
        if (!w.grecaptcha) return;

        $('.iphorm-recaptcha').each(function () {
            var $this = $(this);
            $this.data('iphorm-recaptcha-id', grecaptcha.render($this.data('unique-id'), $this.data('config')));
        });
    };

    var gettingSessionId = false,
        deferred = $.Deferred();

    w.iPhorm.getSessionId = function() {
        if (!gettingSessionId) {
            gettingSessionId = true;

            $.ajax({
                url: iphormL10n.ajax_url,
                dataType: 'json',
                data: {
                    action: 'iphorm_get_session_id_ajax'
                }
            })
            .done(function (response) {
                if (typeof response !== 'object' || response === null || response.type !== 'success') {
                    deferred.reject();
                }

                deferred.resolve(response.id);
            })
            .fail(deferred.reject);
        }

        return deferred;
    };
})(document.documentElement, window, jQuery);