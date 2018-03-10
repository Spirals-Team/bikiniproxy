var epdofitvids = epdofitvids || function ($)
{

    $.fn.fitVidsEP = function (options) {
        if (_EPYT_.epresponsiveselector.constructor !== Array)
        {
            _EPYT_.epresponsiveselector = JSON.parse(_EPYT_.epresponsiveselector);
        }
        var settings = {
            customSelector: null
        };

        if (!document.getElementById('fit-vids-style')) {

            var div = document.createElement('div'),
                    ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
                    cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

            div.className = 'fit-vids-style';
            div.id = 'fit-vids-style';
            div.style.display = 'none';
            div.innerHTML = cssStyles;

            ref.parentNode.insertBefore(div, ref);

        }

        if (options) {
            $.extend(settings, options);
        }

        return this.each(function () {
//            var selectors = [
//            "iframe[src*='youtube.com']",
//            "iframe[src*='youtube-nocookie.com']"
//            ];
            var selectors = _EPYT_.epresponsiveselector;

            if (settings.customSelector) {
                selectors.push(settings.customSelector);
            }

            var $allVideos = $(this).find(selectors.join(','));
            $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

            $allVideos.each(function () {
                var $this = $(this);
                if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
                    return;
                }
                var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
                        width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
                        aspectRatio = height / width;
                if (!$this.attr('id')) {
                    var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
                    $this.attr('id', videoID);
                }
                var fwvwrap = document.createElement('div');
                fwvwrap.className = 'fluid-width-video-wrapper';
                try {
                    $this.wrap(fwvwrap).parent('.fluid-width-video-wrapper').attr('style', 'padding-top: ' + (aspectRatio * 100) + "% !important;");
                    $this.removeAttr('height').removeAttr('width');
                }
                catch (wraperr) {
                }
            });
        });
    };

    $(document).ready(function () {
        $("body").fitVidsEP();

        $(document).ajaxSuccess(function (e, xhr, settings) {
            if (xhr && xhr.responseText && xhr.responseText.indexOf('<iframe ') !== -1)
            {
                $("body").fitVidsEP();
            }
        });
    });
    return true;
};

try {
    epdofitvids(window.jQuery);
} catch (err) {
}


