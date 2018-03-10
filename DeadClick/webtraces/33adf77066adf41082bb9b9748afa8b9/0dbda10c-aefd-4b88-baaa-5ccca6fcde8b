/**
 * @file
 * Adds smooth scrolling to TOC anchor links.
 *
 * From: Scroll window smoothly in jQuery - Animated scroll
 *       http://blog.freelancer-id.com/2009/03/26/scroll-window-smoothly-in-jquery/
 */

(function ($) {

Drupal.tocFilterScrollToOnClick = function() {
  // Make sure links still has hash.
  if (!this.hash || this.hash == '#') {
    return true;
  }

  // Make sure the href is pointing to an anchor link on this page.
  var href = this.href.replace(/#[^#]*$/, '');
  var url = window.location.toString();
  if (href && url.indexOf(href) === -1) {
    return true;
  }

  // Scroll to the anchor
  return Drupal.tocFilterScrollTo(this.hash);
}

Drupal.tocFilterScrollTo = function(hash) {
  // Find hash target.
  var $a = $('a[name=' + hash.substring(1) + ']');

  // Make hash target is on the current page.
  if (!$a.length) {
    return true;
  }

  // Scroll to hash target
  var duration = Drupal.settings.toc_filter_smooth_scroll_duration || 'medium';
  $('html, body').animate({scrollTop: $a.offset().top}, duration);

  // Move focus to targets back to top link.
  // Target anchor not focused; breaks keyboard navigation https://drupal.org/node/2058875
  $a.parent().prev('.toc-filter-back-to-top').find('a').focus();

  return false;
}

Drupal.behaviors.tocFilterSmoothScroll = {
  attach: function (context) {
    // Only map <a href="#..."> links
    $('a[href*="#"]', context).once('toc-filter').click(Drupal.tocFilterScrollToOnClick);
  }
};

// Override CToolsJumpMenu behavior for TOC filter jumpmenus.
Drupal.behaviors.tocFilterCToolsJumpMenu = {
  attach: function(context) {
    $('.toc-filter-jump-menu .ctools-jump-menu-change:not(.toc-filter-jump-menu-processed)')
      .addClass('toc-filter-jump-menu-processed')
      .unbind('change')
      .change(function() {
        // Find our sibling value.
        var $select = $(this).parents('form').find('.ctools-jump-menu-select');
        var hash = $select.val();
        if (hash) {
          Drupal.tocFilterScrollTo(hash);
        }
        $select.find('option:first').attr('selected', true);
        return false;
      });
  }
};

})(jQuery)
