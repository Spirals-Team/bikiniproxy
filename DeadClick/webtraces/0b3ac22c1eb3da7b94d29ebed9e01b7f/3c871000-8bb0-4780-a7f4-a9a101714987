(function($){

    $.scrolltop = function(params){

        var defaults = {
            template: '^',
            duration: 1000,
            class: ''
        };

        params = $.extend({}, defaults, params);

        var $element = $('body');
        var $window = $(window);
        var $link = $('<a></a>')
        .attr('href', '#')
        .addClass('scrolltop ' + params.class)
        .html(params.template)
        .click(function(e){
            e.preventDefault();
            $('body, html').animate({
                scrollTop: 0
            }, params.duration);
        })
        .appendTo($element);

        $window.scroll(function(e){
            var scrollTop = $(this).scrollTop();
            if (scrollTop > $(this).height() / 2) {
                $link.addClass('active');
            }
            else {
                $link.removeClass('active');
            }
        });

    };

})(jQuery);
