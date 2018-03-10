(function($) {

/**
 * jQuery debugging helper.
 *
 * Invented for Dreditor.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */
jQuery.extend({
  debug: function () {
    // Setup debug storage in global window. We want to look into it.
    window.debug = window.debug || [];

    args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (typeof console != 'undefined') {
      console.log(name, data);
    }
    return this;
  }
});
// @todo Is this the right way?
jQuery.fn.debug = jQuery.debug;

})(jQuery);
;
/**
 * @file
 * Set the adaptive image cookie based on the window size
 *
 */

// For older browsers that don't support filter()
if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisp */)
  {
    "use strict";

    if (this == null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun != "function")
      throw new TypeError();

    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in t)
      {
        var val = t[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, t))
          res.push(val);
      }
    }

    return res;
  };
}


/**
 * Set the cookie with the width value
 */
(function ($) {
  Drupal.behaviors.ais = function () {
    /*
      First, get the actual browser size.
      window.outerWidth/outerHeight answers honestly on Android devices, dishonestly on iOS, and not at all in IE
      window.screen.availWidth/availHeight answers honestly on iOS devices, dishonestly on Android, and not at all in pre-html5 browsers
      $(window).width()/height() will always answer (thanks jQuery!) and is the fall back
    */
    var width = [ window.outerWidth, window.screen.availWidth, $(window).width()];
    var height = [ window.outerHeight, window.screen.availHeight, $(window).height()];
    
    width = width.filter(Number);
    height = height.filter(Number);

    var width = Math.min.apply( Math, width);
    var height = Math.min.apply( Math, height);

    /* Select a method for determining the size */
    var size = width;
    if (Drupal.settings.ais_method == 'both-max') {
      size = Math.max( width, height );
    } else if (Drupal.settings.ais_method == 'both-min') {
      size = Math.min( width, height );
    } else if (Drupal.settings.ais_method == 'width') {
      size = width;
    } else if (Drupal.settings.ais_method == 'height') {
      size = height;
    }

    /* Match an image style and set the cookie */
    var style = Drupal.settings.ais[0];
    for (i in Drupal.settings.ais) {
       if (Number(Drupal.settings.ais[i].size) < size && Number(Drupal.settings.ais[i].size) > Number(style.size)) {
         style = Drupal.settings.ais[i];
       }
    }
    if (style) {
      document.cookie='ais='+style.name+'; path=/';
    } else {
      document.cookie='ais=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT';
    }
  }
  $(window).resize(Drupal.behaviors.ais);
}(jQuery));

  // Call the cookie set function right away
  Drupal.behaviors.ais();

;
