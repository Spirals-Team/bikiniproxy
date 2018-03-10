
Slidex = function () {
    this.init = function (opt) {
        var options = jQuery.extend({
                wrapperId: 's5_body',
                s5_is: "s5_is",
                items5_is_slide: "s5_is_slide",
                opacityClass: "s5_is_slide",
                fullsize: 1,
                opacity: 85
            }, opt);
        var itemsOpacity = jQuery("#" + options.wrapperId + " ." + options.opacityClass);
        var items = jQuery("#" + options.wrapperId + " ." + options.s5_is);
        var itemsCover = jQuery("#" + options.wrapperId + " ." + options.items5_is_slide);
        if (itemsOpacity.size()) {
            itemsOpacity.css({
                    'opacity': options.opacity / 100,
                    'filter': 'alpha(opacity=' + options.opacity + ')'
                });
        }
        var s5_is_slide_class = "no";
        var s5_is_slide_class = document.getElementById(options.wrapperId).getElementsByTagName("DIV");
        for (var s5_is_slide_class_y = 0; s5_is_slide_class_y < s5_is_slide_class.length; s5_is_slide_class_y++) {
            if (s5_is_slide_class[s5_is_slide_class_y].className == options.opacityClass) {
                s5_is_slide_class = "yes";
            }
        }
        if (s5_is_slide_class == "yes") {
            if (itemsCover.size()) {
                jQuery(items).css("display", "block");
                itemsCover.each(function (index, itemc) {
                    jQuery(itemc).css({
                            'height': jQuery('h3', jQuery(itemc))[0].offsetHeight + 'px',
                            'width': '100%'
                        });
                });
            }
        }
        jQuery(items).each(function (index, item) {
            jQuery(item).mouseenter(function (d) {
                var height = items.eq(index).children('img')[0].offsetHeight;
		if(d.target.nodeName != 'IMG' && jQuery('img',d.target).length > 0) d.target = jQuery('img',d.target);
                jQuery('.' + options.items5_is_slide, jQuery(d.target).parents('.' + options.s5_is)).eq(0).animate({
                        height: height + 'px'
                    }, 300);
            });
            jQuery(item).mouseleave(function (d) {
                var height = jQuery('h3', itemsCover.eq(index))[0].offsetHeight;
                jQuery('.' + options.items5_is_slide, jQuery(d.target).parents('.' + options.s5_is)).eq(0).animate({
                        height: height + 'px'
                    }, 300);
            });
        });
    }
}; 

