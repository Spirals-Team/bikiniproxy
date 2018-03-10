/* Lightweight wrapper around mixpanel/session tracking mechanism */

var GB = GB || {};

GB.Cookies = {
  domain: '.geckoboard.com',

  all: function() {
    var cookies = {};
    $.each(document.cookie.split("; "), function(index, item) {
      kv = item.split("=");
      cookies[kv[0]] = kv[1];
    });
    return cookies;
  },

  get: function(name) {
    return GB.Cookies.all()[name];
  },

  set: function(name, value) {
    var oneYear = 60 * 60 * 24 * 365;

    document.cookie = this.cookieString(name, value, {
      'max-age': oneYear.toString(),
      path: '/',
      domain: this.domain
    });
  },

  // name=value has to come first so we need to treat them separately
  cookieString: function(name, value, options) {
    var cookie = name + '=' + value;
    for (var key in options) {
      cookie += ';' + key + '=' + options[key];
    }
    return cookie;
  }
};

GB.getTrackingId = function () {
  if (!GB.Cookies.get('gb_mixpanel')) {
    var uuid = makeUUID();
    GB.Cookies.set('gb_mixpanel', uuid);
  }

  function makeUUID() {
    function a(x) {
      var b = (Math.random().toString(16) + "000000000").substr(2, 8);
      return x ? "-" + b.substr(0, 4) + "-" + b.substr(4, 4) : b;
    }
    return a()+a(!0)+a(!0)+a();
  }

  return GB.Cookies.get('gb_mixpanel');
};
