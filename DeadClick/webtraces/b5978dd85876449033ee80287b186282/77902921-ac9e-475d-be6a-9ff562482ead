(function() {
  var ALWAYS_PREVIEW = "always-preview";
  var BRONTO_POPUP_ID = 'bronto-popup-id';
  var STATS_ENDPOINT = 'https://popupstats.brontops.com/image.gif';

  /* These values need to match the do not display option in PopupVersion.RibbonDisplayMode EXACTLY */
  var NO_DISPLAY_RIBBON = 'DO_NOT_DISPLAY';
  var POPUP_FIRST = 'DISPLAY_POPUP_FIRST';
  var RIBBON_FIRST = 'DISPLAY_RIBBON_FIRST';

  var containerOption = "";

  var PopupEvent = function(delivery, type, additional) {
	var json = additional || {};
    json.type = type;
    return {
      data: function() {
        var other = {
          splitTest: delivery.getConfig().splitTest,
          displayType: delivery.getConfig().deployType,
          versionId: delivery.getGuid(),
          accountId: delivery.getPopupGuid(),
          path: window.location.pathname,
          query: window.location.search,
          screenWidth: screen.width,
          screenHeight: screen.height,
          domain: delivery.getConfig().domain
        };
        for (var name in json) {
          other[name] = json[name];
        }
        return other;
      },
      send: function(callback) {
        var params = [],
            stat = this.data(),
            image = new Image();
        for (var name in stat) {
          params.push(encodeURIComponent(name) + "=" + encodeURIComponent(stat[name]));
        }
        if (callback) {
          image.onload = callback.bind(this);
        }

        if (!delivery.getConfig().preview) {
        	image.src = STATS_ENDPOINT + "?" + params.join('&');
        	document.dispatchEvent(new CustomEvent('bronto:popup-stat-' + type, {
        		detail: { stat: stat }
        	}));
        }
      }
    }
  };

  var Delivery = function(hostUrl, guid) {
    var delivery = this;

    var useTriggerCriteria = true;
    var popupSubmitted = false;
    var versionGuid = "";
    var resources = {};
    var params = {};
    var errors = {};
    var events = {
      'bronto:popup-created': function(e) {
        new PopupEvent(delivery, 'viewed').send();
      },
      'bronto:popup-submitted': function(e) {
        var additional = { email: e.detail.email };
        new PopupEvent(delivery, 'submitted', additional).send();
        if (document.querySelector('.ribbon-close')) {
          var ribbonCloseBtn = document.querySelector('.ribbon-close');
          if (ribbonCloseBtn.onclick) {
            ribbonCloseBtn.onclick();
          } else if (ribbonCloseBtn.click) {
            ribbonCloseBtn.click();
          }
        } else {
          var version = getVersionForDisplay(containerOption);
          version.ribbonDisplayMode = NO_DISPLAY_RIBBON;
        }
      }
    };

    var isValidDomain = function(domain) {
      if (domain.match(/^www\./)) {
        domain = domain.replace(/^www\./, '');
      }
      var regex = new RegExp(".*" + domain.replace(/\./g, "\\.") + ".*$");
      return regex.test(document.domain);
    };

    var isPathMatched = function(path, browserPath) {
      var star = /\*$/;
      if (!browserPath) {
        browserPath = window.location.pathname;
      }
      if (star.test(path)) {
        var fakeReg = new RegExp(path.replace('*', '.+'));
        if (fakeReg.test(browserPath)) {
          return true;
        }
      } else if (path == browserPath) {
          return true;
      }
      return false;
    };

    var isVersionValid = function(json) {
      if (!isValidDomain(json.popup.domain || json)) {
        return false;
      }
      if (params.popup.deployType !== 'mobile') {
        /* This is coming through as 2 different values depending on how old the popup is. */
        params.popup.excludeDeviceWidth = params.popup.excludeDeviceWidth || params.popup.maxMobileWidth;
      	params.popup.maxMobileHeight = params.popup.maxMobileHeight || 600;
    		if (!document.querySelector('[' + ALWAYS_PREVIEW + ']') &&
                (!matchMedia('(min-width: ' + (params.popup.excludeDeviceWidth + 1) + 'px)').matches ||
    			!matchMedia('(min-height: ' + (params.popup.maxMobileHeight + 1) + 'px)').matches)) {
    			return false;
    		}
      }
      if (!json.popup.lazyPathEval && !delivery.validatePath(window.location.pathname)) {
          return false;
      }
      return true;
    };

    var getUniqueResources = function(collection) {
      var uniqueResources = [];
      var lookup = {};
      for (var i = 0; i < collection.length; i++) {
        var resource = collection[i];
        if (!lookup[resource.name]) {
          lookup[resource.name] = {};
          uniqueResources.push(resource);
        }
      }
      return uniqueResources;
    };

    var addCartRecovery = function(e) {
      var popup = e.detail.popup;
      if (typeof bronto !== 'undefined' && typeof bronto.EmailInput !== 'undefined') {
        popup.getConfig().withElementForEventOfType("inputs", "email", function(capture) {
          var input = new bronto.EmailInput({selector:'#' + capture.dom.getAttribute("id")}, bronto.jQuery);
          input.observe();
        });
      }
    };

    var getVersionForDisplay = function(container) {
        params.maxMobileHeight = params.maxMobileHeight || 600;
        var maxMobileHeight = params.maxMobileHeight;
        var widthMatch = matchMedia('(min-width: ' + params.maxMobileWidth + 'px)').matches
        var heightMatch = matchMedia('(min-height: ' + params.maxMobileHeight + 'px)').matches

        if (!document.querySelector("[" + ALWAYS_PREVIEW + "]") &&
          (!matchMedia('(min-width: ' + (params.maxMobileWidth + 1) + 'px)').matches ||
      	  !matchMedia('(min-height: ' + (params.maxMobileHeight + 1) + 'px)').matches)) {
          return container.mobile;
        }
        return container.desktop;
    };

    var ribbonClicked = function(event) {
      loadSpecificVersion(getVersionForDisplay(containerOption));
    };

    var loadSpecificVersion = function(version) {

      versionGuid = version.popupVersionId || version.versionId;

      var versionToShow = 'popup';

      if (!popupSubmitted && version.ribbonDisplayMode &&
        version.ribbonDisplayMode === RIBBON_FIRST &&
        !document.querySelector('.ribbon-dialog')) {
        versionToShow = 'ribbon';
      }

      var numberLoaded = 0;
      var uniqueResources = getUniqueResources(params[versionToShow].resources || []);
      for (var i = 0; i < uniqueResources.length; i++) {
        (function(resource) {
          new ResourceLoader(hostUrl, delivery.getPopupGuid() + "/" + versionGuid).gather(resource.name, resource.type, function(data) {
            numberLoaded++;

            if (data instanceof Error) {
              errors[resource.name] = data;
            } else {
              resource.data = data;
              resources[resource.name] = resource;
            }

            if (numberLoaded == uniqueResources.length) {
              var evt = new CustomEvent('bronto:' + versionToShow + '-delivered', { detail: delivery });
              document.dispatchEvent(evt);
            }
          });
        })(uniqueResources[i]);
      }
    };

    var loadVersions = function(postConfig) {
      var index = Math.floor(Math.random() * params.versions.length);
      // Sets the global popup config
      params.popup = {
        splitTest: params.versions.length > 1 ? 'true' : 'false',
        formId: params.formId,
        domain: params.domain,
        lazyPathEval: params.versions[index].lazyPathEval || false,
        excludes: params.versions[index].excludes,
        includes: params.versions[index].includes,
        resources: params.versions[index].resources,
        deployType: 'desktop',
        excludeDeviceWidth: params.versions[index].excludeDeviceWidth
      };
      params.popup.resources.push({ name: "popup.js", type: "javascript" });
      if (isVersionValid(params)) {
        loadSpecificVersion(params.versions[index]);
      }
      document.removeEventListener('bronto:popup-config', postConfig, false);
    };

    var loadContainers = function(postConfig) {
      var options = ['primary'];
      if (params.containers.secondary) {
        options.push('secondary');
      }
      var field = Math.floor(Math.random() * options.length);
      containerOption = params.containers[options[field]];
      if (isValidDomain(params.domain)) {
        var version = getVersionForDisplay(containerOption);
        if (version) {
          params.popup = {
            splitTest: params.containers.secondary ? 'true' : 'false',
            formId: params.formId,
            domain: params.domain,
            preview: params.preview,
            maxMobileWidth: params.maxMobileWidth,
            maxMobileHeight	: params.maxMobileHeight,
            lazyPathEval: version.lazyPathEval || false,
            excludes: version.excludes,
            includes: version.includes,
            resources: version.resources,
            deployType: version.deployType
          };

          if (version['ribbonDisplayMode'] && version['ribbonDisplayMode'] !== NO_DISPLAY_RIBBON) {
            params.ribbon = {
              splitTest: params.containers.secondary ? 'true' : 'false',
              formId: params.formId,
              domain: params.domain,
              preview: params.preview,
              maxMobileWidth: params.maxMobileWidth,
              maxMobileHeight: params.maxMobileHeight,
              lazyPathEval: version.lazyPathEval || false,
              excludes: params.popup.excludes,
              includes: params.popup.includes,
              resources: version.ribbonResources,
              deployType: version.deployType
            };

            params.ribbon.resources.push({ name: 'ribbon.js', type: 'javascript'});
          }
          params.popup.resources.push({ name: 'popup.js', type: 'javascript' });

          if (isVersionValid(params)) {
            loadSpecificVersion(version);
          }
        }
      }
      document.removeEventListener('bronto:popup-config', postConfig, false);
    };

    this.loadPopupResources = function() {
      var postConfig = function(e) {
        params = e.detail || params;

        if (document.querySelector('.popup-dialog')) {
          return false;
        }

        if (!params.popupId || params.popupId == guid) {
          if (params.versions) {
            loadVersions(postConfig);
          } else {
            loadContainers(postConfig);
          }
        }
      };
      document.addEventListener('bronto:ribbon-clicked', ribbonClicked, false);
      document.addEventListener('bronto:popup-config', postConfig, false);
      document.addEventListener('bronto:popup-created', addCartRecovery, false);
      for (var eventName in events) {
        document.addEventListener(eventName, events[eventName]);
      }
      document.addEventListener('bronto:popup-closed', popupClosed, false);

      new ResourceLoader(hostUrl, delivery.getPopupGuid()).gather("config.js", "javascript", function(data) {
        document.removeEventListener('bronto:popup-config', postConfig);
      });
    };

    this.getHost = function() {
      return hostUrl;
    };

    this.getPopupGuid = function() {
      return guid;
    };

    this.getGuid = function() {
      return versionGuid;
    };

    this.getFormId = function() {
      return params.popup.formId;
    };

    this.getResources = function() {
      return resources;
    };

    this.getResource = function(key) {
      return resources[key] ? resources[key] : {};
    };

    this.getConfig = function() {
      return params.popup;
    };

    this.getErrors = function() {
      return errors;
    };

    this.hasErrors = function() {
      for (var key in errors) {
        return true;
      }
      return false;
    };

    this.validatePath = function(browserPath) {
      if (params.popup.includes && params.popup.includes.length > 0) {
        var pass = false;
        for (var i = 0; i < params.popup.includes.length; i++) {
          if (isPathMatched(params.popup.includes[i], browserPath)) {
            pass = true;
            break;
          }
        }
        if (!pass) {
          return false;
        }
      }

      for (var i = 0; i < params.popup.excludes.length; i++) {
        if (isPathMatched(params.popup.excludes[i], browserPath)) {
          return false;
        }
      }
      return true;
    };

    var popupClosed = function(event) {
      if (document.querySelector('.ribbon-dialog')) {
        return false;
      }
      var popup = event.detail;
      var config = popup.getConfig().getConfig();
      if (config.ribbonDisplayMode === POPUP_FIRST) {
        var version = getVersionForDisplay(containerOption);
        version.ribbonDisplayMode = RIBBON_FIRST;
        delivery.useTriggerCriteria = false;
        loadSpecificVersion(version);
      }
    };
  };

  var ResourceLoader = function(hostUrl, base) {
    this.gather = function(name, type, callback) {
      var url = hostUrl + "/" + (base ? base + "/" : "") + name;
      switch (type) {
        case "javascript":
          var done = false;
          var element = document.createElement("script");
          element.setAttribute('type', 'text/javascript');
          element.onload = element.onreadystatechange = function () {
            if (!done && (
                  !this.readyState ||
                  this.readyState === "loaded" ||
                  this.readyState === "complete"
            )) {
              done = true;
              element.onload = element.onreadystatechange = null;
              if (callback) {
                callback(element);
                document.documentElement.removeChild(element);
              }
            }
          };
          element.onerror = function() {
            if (callback) callback(new Error("Failed to load js: " + url));
            element.onerror = null;
          };
          element.setAttribute('src', url);
          document.documentElement.appendChild(element);
          break;
        case "image":
          var image = new Image();
          image.onload = function() {
            if (callback) callback(image);
            image.onload = null;
          };
          image.onerror = function() {
            if (callback) callback(new Error('Failed to load image: ' + url));
            image.onerror = null;
          };
          image.src = url;
          break;
        default:
          callback(new Error("Resource with name " + name + " is not valid."));
      };
    };
  };

  var PopupLoader = function(script) {
    var hostUrl = script.src.split("/").slice(0, -1).join('/');

    var loadPolyfills = function(callback) {
      var loaded = 0;
      var scripts = ['polyfills.js'];
      for (var i = 0, script; script = scripts[i]; i++) {
        (function(name) {
          new ResourceLoader(hostUrl).gather(name, "javascript", function() {
            loaded++;
            if (loaded == scripts.length) {
              callback();
            }
          });
        })(script);
      }
    };

    var initializePopup = function() {
      var popupId = script.getAttribute(BRONTO_POPUP_ID),
          guids = popupId ? popupId.split(/\s+/g) : [];
      if (popupId) {
        for (var i = 0; i < guids.length; i++) {
          new Delivery(hostUrl, guids[i]).loadPopupResources();
        }
      }
    };

    loadPolyfills(function() {
      document.dispatchEvent(new CustomEvent('bronto:polyfills'));
      document.addEventListener('bronto:load-popup', initializePopup, false);
      initializePopup();
    });
  };

  // Simple IE + other polyfill
  var attachEvent = function(element, eventName, fn) {
    if (element.addEventListener) {
      element.addEventListener(eventName, fn, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + eventName, fn);
    }
  };

  var loadDelivery = function() {
    if (document.all && (document.documentMode === undefined)) {
      return;
    }
    var scripts = document.getElementsByTagName('script');
    var altAttr = BRONTO_POPUP_ID.replace(/\-/g, '');
    for (var i = 0, script; script = scripts[i]; i++) {
      if (script['hasAttribute'] && (script.hasAttribute(BRONTO_POPUP_ID) || script.hasAttribute(altAttr))) {
        return new PopupLoader(script);
      }
    }
  };

  if (document.readyState === "complete") {
    loadDelivery();
  } else {
    attachEvent(window, "load", loadDelivery);
  }
})();
