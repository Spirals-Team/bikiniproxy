// Eliminate FOIT (Flash of Invisible Text) caused by web fonts loading slowly
// using font events with Font Face Observer.
(function ($) {

  "use strict";

  Drupal.behaviors.atFFOI = {
    attach: function (context) {

      $('html').addClass('fa-loading');

      var fontawesome = new FontFaceObserver('FontAwesome', {});

      // Because we are checking an icon font we need a unicode code point to check,
      // SEE https://github.com/bramstein/fontfaceobserver/issues/34
      fontawesome.check('\uf22d').then(function () {
        $('html').removeClass('fa-loading').addClass('fa-loaded');
      }, function() {
        $('html').removeClass('fa-loading').addClass('fa-unavailable');
      });

    }
  };
}(jQuery));
;
!function(a,b,c){"use strict";Drupal.behaviors.atBP={attach:function(a,d){function e(a,b){enquire.register(b,{match:function(){c.body.classList.add("bp--"+a)},unmatch:function(){c.body.classList.remove("bp--"+a)}})}if(b.matchMedia("only screen").matches){var f=d.ajaxPageState.theme,g=d[f].at_breakpoints;for(var h in g)g.hasOwnProperty(h)&&e(h,g[h].mediaquery)}}}}(jQuery,window,document);
