/**
 * StumbleUpon - http://www.stumbleupon.com
 * Copyright (c) 2011 StumbleUpon
 * Author: Stefan De Clercq
 *
 *
 *
 */

 /**
  * @namespace STMBLPN public namespace for StumbleUpon widgets and badges
  */

STMBLPN = window.STMBLPN || {};

(function() {
  if (STMBLPN && STMBLPN.hasHelperFunction)
    return;

  if (STMBLPN instanceof Array)
  {
      var list = STMBLPN;
      STMBLPN = {};
      STMBLPN.list = list;
  }

  STMBLPN.browser = function() {
    var ua = navigator.userAgent;
    return { ie: ua.match(/MSIE\s([^;]*)/) };
  }();

  STMBLPN.trim = function(str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  STMBLPN.byId = function(id) {
    if (typeof id == 'string') {
      return document.getElementById(id);
    }
    return id;
  };
  STMBLPN.loadStyleSheet = function(url, Namespace, widgetEl) {
    if (!STMBLPN.Namespace.loadingStyleSheet) {
      STMBLPN.Namespace.loadingStyleSheet = true;
      var linkElement = document.createElement('link');
      linkElement.href = url;
      linkElement.rel = 'stylesheet';
      linkElement.type = 'text/css';
      document.getElementsByTagName('head')[0].appendChild(linkElement);
      var timer = setInterval(function() {
        var style = getStyle(widgetEl, 'position');
        if (style == 'relative') {
          clearInterval(timer);
          timer = null;
          STMBLPN.Namespace.hasLoadedStyleSheet = true;
        }
      }, 50);
    }
  };
  STMBLPN.jsonP = function(url, callback) {
    var script = document.createElement('script');
    var head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    script.src = url;
    head.insertBefore(script, head.firstChild);
    callback(script);
    return script;
  };
  /**
    * classes object
    * -has - add - remove
    */
  STMBLPN.classes = {
    has: function(el, c) {
      return new RegExp("(^|\\s)" + c + "(\\s|$)").test(STMBLPN.byId(el).className);
    },
    add: function(el, c) {
      if (!this.has(el, c)) {
        STMBLPN.byId(el).className = STMBLPN.trim(STMBLPN.byId(el).className) + ' ' + c;
      }
    },
    remove: function(el, c) {
      if (this.has(el, c)) {
        STMBLPN.byId(el).className = STMBLPN.byId(el).className.replace(new RegExp("(^|\\s)" + c + "(\\s|$)", "g"), "");
      }
    }
  };
  /**
    * x-browser event listener
    * eg: STMBLPN.events.add(element, 'click', fn);
    */
  STMBLPN.events = {
    add: function(el, type, fn) {
      if (el.addEventListener) {
        el.addEventListener(type, fn, false);
      }
      else {
        el.attachEvent('on' + type, function() {
          fn.call(el, window.event);
        });
      }
    },
    remove: function (el, type, fn) {
      if (el.removeEventListener) {
        el.removeEventListener(type, fn, false);
      }
      else {
        el.detachEvent('on' + type, fn);
      }
    },
    // domready function
    ready: function(f) {
      var
        listening = false,
        todo = [], // handler queue
        isReady = function() {
          return (/loaded|complete/.test(document.readyState) || !!document.body);
        },
        doing = false, // semaphore for doit function
        doit = function() { // execute the handlers from the handler queue in order added
          var fn;
          if(doing) {
            return;
          }
          doing = true;
          while(fn = todo.shift()) {
            fn(); // this will empty the queue and subsequent calls have no effect -- safe to call twice
          }
          doing = false;
        };
      if(isReady()) {
        return f(); // execute immediately and exit
      }
      todo.push(f); // not ready yet, add to queue
      if(!listening) {
        // 1st time, set up event listeners
        listening = true;
        if(document.addEventListener) { // normal browsers
          document.addEventListener('DOMContentLoaded', doit, false);
          window.addEventListener('load', doit, false);
        } else if (document.attachEvent) { // whacky browsers
          document.attachEvent('onreadystatechange', doit);
          window.attachEvent('onload', doit);
        }
        if(document.documentElement.doScroll && window == window.top) { // really evil browsers
          // use doScroll to detect readiness
          function check() {
            try  {
              document.documentElement.doScroll('left');
            } catch(e) {
              setTimeout(check, 0);
              return;
            }
            doit();
          }
          check();
        }
      }
    }
  };
  STMBLPN.wasBadgeDataColleted = false;
  STMBLPN.collectBadgeData = function() {
    try {
      if (!window._gat)
        return;
      var account = window._gat._getTrackerByName()._getAccount();
      if (account.indexOf('UA-XXXX') == 0)
        account = window.pageTracker._getAccount();
      var params = {
        'utmn': (new Date()).getTime(), //cachebuster
        'utmhn': document.location.hostname,
        'utmt': 'event',
        'utmr': 'http://www.stumbleupon.com/refer.php',
        'utmp': document.location.pathname,
        'utmac': account,
        'url': document.URL,
        'utmcc': ''
      };
      var ga_cookies = {'__utma': true, '__utmb': true, '__utmc': true, '__utmz': true };
      var cookies = document.cookie.split(';');
      for(var i=0; i < cookies.length; i++) {
        var pos = cookies[i].indexOf('=');
        if (pos == -1) continue;
        var cookie_name = cookies[i].substring(0, pos);
        var cookie_value = cookies[i].substring(pos);
        if(ga_cookies[cookie_name] === true)
          params['utmcc'] += (params['utmcc'] ? ';' : '') + cookie_name + "=" + cookie_value;
      }
      var data = [];
      for (var param in params)
        data.push("\"" + param + "\": \"" + String(params[param]).replace("\"", "\\\"") + "\"");
      return "{\"type\": \"SU_BADGEMESSAGE\", \"params\": {" + data.join(', ') + "}}";

    } catch (e) {}
  };

  STMBLPN.createIframe = function (src, width, height) {
    var e = document.createElement('iframe');
    e.scrolling = 'no';
    e.frameBorder = '0';
    e.setAttribute('allowTransparency', 'true');
    e.style.overflow = 'hidden';
    e.style.margin = 0;
    e.style.padding = 0;
    e.style.border = 0;

    e.src = src;
    if (width)
      e.width = width;
    if (height)
      e.height = height;
    return e;
  };

  STMBLPN.isNode = function (o) {
    return (
      typeof Node === "object" ? o instanceof Node :
      typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
    );
  };

  STMBLPN.wasProcessLoaded = false;

  STMBLPN.processWidgets = function() {
    if(STMBLPN.wasProcessLoaded) {
      return;
    }
    STMBLPN.wasProcessLoaded  = true;

    var els = document.getElementsByTagName('su:badge');
    if(els) {
      var attributes = ['layout', 'location', 'id', 'domain'];
      var widgets = [];
      for(var i = 0; i < els.length; i++) {
        var w = els[i];
        var opts = {'container': w, 'type': 'badge'};
        for (var j = 0; j < attributes.length; j++) {
          var a = w.getAttribute(attributes[j]);
          if (a)
            opts[attributes[j]] = a;
        }
        widgets.push(new STMBLPN.Widget(opts));
      }
      for (var i = 0; i < widgets.length; i++)
         widgets[i].render();
      STMBLPN.Widget.sendBadgeData();
    }

    els = document.getElementsByTagName('su:follow');
    if (els) {
      var widgets = [];
      for(var i = 0; i < els.length; i++) {
        var w = els[i];
        var opts = {'container': w, 'type': 'follow'};
        opts['ref'] = w.getAttribute('ref');
        if (!opts['ref'])
          continue;

        var attributes = ['layout', 'id', 'domain'];
        for (var j = 0; j < attributes.length; j++) {
          var a = w.getAttribute(attributes[j]);
          if (a)
            opts[attributes[j]] = a;
        }
        widgets.push(new STMBLPN.Widget(opts));
      }
      for (var i = 0; i < widgets.length; i++)
         widgets[i].render();
    }
  };

  STMBLPN.hasHelperFunction = true;

  return true;
})();

(function() {
  if (STMBLPN && STMBLPN.Widget) {
    // this is most likely happens when people try to embed multiple
    // badges/widgets on the same page and include this script again
    return;
  }

  /**
    * @constructor
    * Badge Base for new instances of the StumbleUpon badge widget
    * @param {Object} opts the configuration options for the widget
    */
  STMBLPN.Widget = function(opts) {
    this.init(opts);
  };

  (function() {
      isHttps = window.location.protocol.match(/https/);

      STMBLPN.Widget.sendBadgeData = function() {
        try {
          if (STMBLPN.wasBadgeDataColleted)
            return;
          STMBLPN.wasBadgeDataColleted = true;
          var data = STMBLPN.collectBadgeData();
          if (!data)
            return;
          top.postMessage(data, 'http://www.stumbleupon.com');
        } catch (e){ }
      };

      // STMBLPN.Widget.isLoaded = false;
      // STMBLPN.Widget.loadingStyleSheet = false;
      // STMBLPN.Widget.hasLoadedStyleSheet = false;
      STMBLPN.Widget.NUMBER = 0;

      STMBLPN.Widget.prototype = function() {
        var scheme = (isHttps? 'https:' : 'http:') + '//';

        var badgeBase = '/badge/embed/';
        var followBase = '/widgets/follow_badge.php';
        var bestofBase = '/widgets/get.php';

        return {
	        init: function(opts) {
            var that = this;
            this._badgeNumber = ++STMBLPN.Widget.NUMBER;
            this.selfContainer = false;
            this.domain = opts.domain ? opts.domain.replace(/^\.+/g, '') : 'stumbleupon.com';
            this.type = opts.type || 'badge';
            this.layout = opts.layout? parseInt(opts.layout) : 1;
            this.layout = this.layout || 1;
            this.id = opts.id || 'stmblpn-widget-' + this._badgeNumber;
            this.container = opts.container;

            if (opts.id) {
              var e = STMBLPN.byId(opts.id);
              // check if e is node as well / html5 and some browsers return HTMLUnknownElement for not found
              // && STMBLPN.isNode(e) && !e instanceof HTMLUnknownElement
              if (e) {
                this.selfContainer = true;
              }
            }

            if (!this.container && !this.selfContainer) {
              document.write('<div id="' + this.id + '"></div>');
              this.container = STMBLPN.byId(this.id);
            }

            // set widget specific data
            switch(this.type) {
              case 'badge':
                this.location = opts.location || document.URL;
                break;
              case 'follow':
                this.ref = opts.ref;
                break;
              case 'bestof':
                this.title = opts.title || '';
                this.request = [];
                var params = ['usernames', 'channels', 'topics', 'sites'];

                for (var k = 0; k < params.length; k++) {
                  var key = params[k];
                  if (! opts[key])
                    continue;
                  var r = opts[key];
                  if (typeof r == 'object' && r instanceof Array) {
                    for (var i = 0; i < r.length; i++)
                      this.request.push(key + '[]=' + encodeURIComponent(r[i]));
                  } else this.request.push(key + '=' + encodeURIComponent(r));
                }
                break;
            }

            return this;
          },

          /**
            * @public
            * @return self
            * renders the widget onto an HTML page
            */
          render: function() {
            var that = this;
            var src = this._getIframeSrc();
            var dimensions = this._getIframeDimensions();

            var parent = null;
            var iframe = STMBLPN.createIframe(src, dimensions['width'], dimensions['height']);
            iframe.id = 'iframe-' + this.id;

            if (this.container && STMBLPN.isNode(this.container)) {
              parent = this.container.parentNode;
            }

            if (this.selfContainer) {
              STMBLPN.byId(this.id).appendChild(iframe);
            } else {
              if (parent)
                parent.insertBefore(iframe, this.container);
            }
            // check if container again, may have been removed by other call
            if (this.container && STMBLPN.isNode(this.container)) {
              parent.removeChild(this.container);
              delete this.container;
            }

            return this;
          },

          /**
            * @private
            * gets type specific iframe src
            */
          _getIframeSrc: function() {
            if (this.type == 'badge') {
              var sub = (isHttps ? "www." : "badge.");
              return scheme + sub + this.domain + badgeBase + this.layout + '/?url=' + encodeURIComponent(this.location);
            } else if (this.type == 'follow')
              return scheme + 'www.' + this.domain + followBase + '?id=' + this.ref + '&l=' + this.layout;
            else if (this.type == 'bestof')
              return scheme + 'www.' + this.domain + bestofBase + '?' + this.request.join('&')  + '&l=' + this.layout + '&title=' + encodeURIComponent(this.title);
          },

          /**
            * @private
            * gets type specific iframe dimensions
            */
          _getIframeDimensions: function() {
            var dimensions;
            if (this.type == 'badge') {
              dimensions = {
                1:    {'width': 74, 'height': 18},
                2:    {'width': 65, 'height': 18},
                4:    {'width': 18, 'height': 18},
                5:    {'width': 50, 'height': 60},
                6:    {'width': 30, 'height': 31},
                200:  {'width': 108, 'height': 22},
                310:  {'width': 128, 'height': 22}
              };
              dimensions[3] = dimensions[2];
              dimensions[210] = dimensions[200];
              dimensions[300] = dimensions[200];
              dimensions[this.layout] = dimensions[this.layout] || dimensions[1];
              return dimensions[this.layout];
            } else if (this.type == 'follow') {
              dimensions = {
                1: {'width': 154, 'height': 21},
                2: {'width': 210, 'height': 28},
                3: {'width': 160, 'height': 105}
              };

              dimensions[this.layout] = dimensions[this.layout] || dimensions[1];
              return dimensions[this.layout];
            } else if (this.type == 'bestof') {
              dimensions = {
                1: {'width': 300, 'height': 250},
                2: {'width': 600, 'height': 250},
                3: {'width': 160, 'height': 600}
              };
              dimensions[this.layout] = dimensions[this.layout] || dimensions[1];
              return dimensions[this.layout];
            }

            return {'width': null, 'height': null};
          }
        };
      }();
  })();
})();

(function() {
  STMBLPN.events.ready(STMBLPN.processWidgets);

  if (STMBLPN.list) {
     while(STMBLPN.list.length)
       new STMBLPN.Widget(STMBLPN.list.shift()).render();
  }
})();
