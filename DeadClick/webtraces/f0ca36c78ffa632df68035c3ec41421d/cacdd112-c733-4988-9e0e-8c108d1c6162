(function ($) {

if (Drupal.settings.dnt === undefined) {
  var dnt = navigator.doNotTrack || navigator.msDoNotTrack;
  $.extend(Drupal.settings, {'dnt': (dnt === 'yes' || dnt === '1')});
}

})(jQuery);
