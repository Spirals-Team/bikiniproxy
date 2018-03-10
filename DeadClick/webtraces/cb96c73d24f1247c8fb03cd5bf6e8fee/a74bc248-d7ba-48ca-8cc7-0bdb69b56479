(function ($) {
  'use strict';

  Drupal.behaviors.eu_cookie_compliance_popup = {
    attach: function(context, settings) {
      if (context !== document) {
        return;
      }

      // If configured, check JSON callback to determine if in EU.
      if (Drupal.settings.eu_cookie_compliance.popup_eu_only_js) {
        if (Drupal.eu_cookie_compliance.showBanner()) {
          var url = Drupal.settings.basePath + 'eu-cookie-compliance-check';
          var data = {};
          $.getJSON(url, data, function(data) {
            // If in the EU, show the compliance popup.
            if (data.in_eu) {
              Drupal.eu_cookie_compliance.execute();
            }
            // If not in EU, set an agreed cookie automatically.
            else {
              Drupal.eu_cookie_compliance.setStatus(2);
            }
          });
        }
      }
      // Otherwise, fallback to standard behavior which is to render the popup.
      else {
        Drupal.eu_cookie_compliance.execute();
      }
    }
  };

  Drupal.eu_cookie_compliance = {};

  Drupal.eu_cookie_compliance.execute = function() {
    try {
        if (!Drupal.settings.eu_cookie_compliance.popup_enabled) {
          return;
        }
        if (!Drupal.eu_cookie_compliance.cookiesEnabled()) {
          return;
        }
        Drupal.eu_cookie_compliance.updateCheck();
        var status = Drupal.eu_cookie_compliance.getCurrentStatus();
        if (status === 0 || status === null) {
          if (!Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
            Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_info);
            Drupal.eu_cookie_compliance.attachAgreeEvents();
          }
        } else if (status === 1 && Drupal.settings.eu_cookie_compliance.popup_agreed_enabled) {
          Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_agreed);
          Drupal.eu_cookie_compliance.attachHideEvents();
        }
      }
      catch(e) {
      }
  };

  Drupal.eu_cookie_compliance.createPopup = function(html) {
    // This fixes a problem with jQuery 1.9.
    var $popup = $('<div></div>').html(html);
    $popup.attr('id', 'sliding-popup');
    if (!Drupal.settings.eu_cookie_compliance.popup_use_bare_css) {
      $popup.height(Drupal.settings.eu_cookie_compliance.popup_height)
          .width(Drupal.settings.eu_cookie_compliance.popup_width);
    }
    $popup.hide();
    var height = 0;
    if (Drupal.settings.eu_cookie_compliance.popup_position) {
      $popup.prependTo('body');
      height = $popup.height();
      $popup.show()
        .attr('class', 'sliding-popup-top clearfix')
        .css('top', -1 * height)
        .animate({top: 0}, Drupal.settings.eu_cookie_compliance.popup_delay);
    } else {
      if (Drupal.settings.eu_cookie_compliance.better_support_for_screen_readers) {
        $popup.prependTo('body');
      }
      else {
        $popup.appendTo('body');
      }
      height = $popup.height();
      $popup.show()
        .attr('class', 'sliding-popup-bottom')
        .css('bottom', -1 * height)
        .animate({bottom: 0}, Drupal.settings.eu_cookie_compliance.popup_delay);
    }
  };

  Drupal.eu_cookie_compliance.attachAgreeEvents = function() {
    var clickingConfirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
    var scrollConfirms = Drupal.settings.eu_cookie_compliance.popup_scrolling_confirmation;

    $('.agree-button').click(Drupal.eu_cookie_compliance.acceptAction);

    if (clickingConfirms) {
      $('a, input[type=submit], button[type=submit]').bind('click.euCookieCompliance', Drupal.eu_cookie_compliance.acceptAction);
    }

    if (scrollConfirms) {
      $(window).bind('scroll', Drupal.eu_cookie_compliance.acceptAction);
    }

    $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
  };

  Drupal.eu_cookie_compliance.attachHideEvents = function() {
    var popupHideAgreed = Drupal.settings.eu_cookie_compliance.popup_hide_agreed;
    var clickingConfirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
    $('.hide-popup-button').click(function() {
      Drupal.eu_cookie_compliance.changeStatus(2);
    });
    if (clickingConfirms) {
      $('a, input[type=submit], button[type=submit]').unbind('click.euCookieCompliance');
    }
    if (popupHideAgreed) {
      $('a, input[type=submit], button[type=submit]').bind('click.euCookieComplianceHideAgreed', function() {
        Drupal.eu_cookie_compliance.changeStatus(2);
      });
    }
    $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
  };

  Drupal.eu_cookie_compliance.acceptAction = function () {
    var agreedEnabled = Drupal.settings.eu_cookie_compliance.popup_agreed_enabled;
    var nextStatus = 1;
    if(!agreedEnabled) {
      Drupal.eu_cookie_compliance.setStatus(1);
      nextStatus = 2;
    }
    Drupal.eu_cookie_compliance.changeStatus(nextStatus);
  };

  Drupal.eu_cookie_compliance.moreInfoAction = function () {
    if (Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup) {
      Drupal.eu_cookie_compliance.setStatus(0);
      $('#sliding-popup').remove();
    }
    else {
      if (Drupal.settings.eu_cookie_compliance.popup_link_new_window) {
        window.open(Drupal.settings.eu_cookie_compliance.popup_link);
      }
      else {
        window.location.href = Drupal.settings.eu_cookie_compliance.popup_link;
      }
    }
  };

  Drupal.eu_cookie_compliance.getCurrentStatus = function() {
    var value = $.cookie('cookie-agreed');
    value = parseInt(value);
    if (isNaN(value)) {
      value = null;
    }
    return value;
  };

  Drupal.eu_cookie_compliance.changeStatus = function(value) {
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    if (status === value) {
      return;
    }
    if (Drupal.settings.eu_cookie_compliance.popup_position) {
      $('.sliding-popup-top').animate({top: $('#sliding-popup').height() * -1}, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
        if (status === null) {
          $('#sliding-popup').html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({top: 0}, Drupal.settings.eu_cookie_compliance.popup_delay);
          Drupal.eu_cookie_compliance.attachHideEvents();
        }
        else if (status === 1) {
          $('#sliding-popup').remove();
          Drupal.eu_cookie_compliance.reloadPage();
        }
      });
    } else {
      $('.sliding-popup-bottom').animate({bottom: $('#sliding-popup').height() * -1}, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
        if (status === null) {
          $('#sliding-popup').html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({bottom: 0}, Drupal.settings.eu_cookie_compliance.popup_delay);
          Drupal.eu_cookie_compliance.attachHideEvents();
        }
        else if (status === 1) {
          $('#sliding-popup').remove();
          Drupal.eu_cookie_compliance.reloadPage();
        }
      });
    }
    Drupal.eu_cookie_compliance.setStatus(value);
  };

  Drupal.eu_cookie_compliance.setStatus = function(status) {
    var date = new Date();
    var domain = Drupal.settings.eu_cookie_compliance.domain ? Drupal.settings.eu_cookie_compliance.domain : '';
    var path = Drupal.settings.basePath;
    if(path.length > 1) {
      var pathEnd = path.length - 1;
      if (path.lastIndexOf('/') === pathEnd) {
        path = path.substring(0, pathEnd);
      }
    }
    date.setDate(date.getDate() + parseInt(Drupal.settings.eu_cookie_compliance.cookie_lifetime));
    $.cookie('cookie-agreed', status, {expires: date, path: path, domain: domain});
  };

  Drupal.eu_cookie_compliance.hasAgreed = function() {
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    return (status === 1 || status === 2);
  };

  Drupal.eu_cookie_compliance.showBanner = function() {
    var showBanner = false;
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    if (status === 0 || status === null) {
      if (!Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
        showBanner = true;
      }
    } else if (status === 1 && Drupal.settings.eu_cookie_compliance.popup_agreed_enabled) {
      showBanner = true;
    }
    return showBanner;
  };

  Drupal.eu_cookie_compliance.cookiesEnabled = function() {
    var cookieEnabled = navigator.cookieEnabled;
    if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
      document.cookie = 'testCookie';
      cookieEnabled = (document.cookie.indexOf('testCookie') !== -1);
    }
    return cookieEnabled;
  };

  Drupal.eu_cookie_compliance.reloadPage = function() {
    if (Drupal.settings.eu_cookie_compliance.reload_page) {
      location.reload();
    }
  };

  // This code upgrades the cookie agreed status when upgrading for an old version.
  Drupal.eu_cookie_compliance.updateCheck = function () {
    var legacyCookie = 'cookie-agreed-' + Drupal.settings.eu_cookie_compliance.popup_language;
    var domain = Drupal.settings.eu_cookie_compliance.domain ? Drupal.settings.eu_cookie_compliance.domain : '';
    var path = Drupal.settings.basePath;
    var cookie;
    if ((cookie = $.cookie(legacyCookie)) !== null) {
      $.cookie('cookie-agreed', cookie, { path:  path, domain: domain });
      $.cookie(legacyCookie, null, { path: path, domain: domain });
    }
  }

})(jQuery);
