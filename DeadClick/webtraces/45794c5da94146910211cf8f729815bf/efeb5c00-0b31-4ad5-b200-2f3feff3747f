var Utils = {
    areCookiesEnabled : function () {
        var cookieEnabled = (navigator.cookieEnabled) ? true : false,
            ua = navigator.userAgent.toLowerCase(),
            isIE = (ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1);

        // try to set a test cookie if we can't see any cookies and we're using
        // either a browser that doesn't support navigator.cookieEnabled
        // or IE (which always returns true for navigator.cookieEnabled)
        if ((navigator.cookieEnabled === undefined) || isIE) {
            document.cookie = "__wtestcookie";
            cookieEnabled = (document.cookie.indexOf("__wtestcookie") !== -1) ? true : false;
        }
        return cookieEnabled;
    },

    /**
     * Returns true when we are in an SSL environment
     */
    isSSL : function () {
        if ("javas" + String() + "cript:" === document.location.protocol) {
            return "https:" === parent.document.location.protocol;
        }
        return "https:" === document.location.protocol;
    },

    writeTrackerPIXEL : function (trackerUrl) {
        var i = new Image(1,1);
        i.src = trackerUrl;
        i.onload=function() { return 1; }
    },

    writeTrackerIFRAME : function (trackerUrl) {
        var i = document.createElement('iframe');
        i.setAttribute('width',1);
        i.setAttribute('height',1);
        i.setAttribute('frameborder',0);
        i.setAttribute('style','border:0px');
        i.setAttribute('src',trackerUrl);
        try {document.body.appendChild(i);}catch (e) {}
    },

    writeTrackerJAVASCRIPT : function (trackerUrl) {
        if (trackerUrl.indexOf('%%User_ID%%') >= 0) {
            userID = document.cookie.match("AFFICHE_W=([^!_][^;]*)(;|$)")
            trackerUrl = trackerUrl.replace('%%User_ID%%', userID[1])
        }
        var g = document.createElement('script');
        g.type = 'text/javascript';
        g.src = trackerUrl;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(g, s);
    },
    writeTrackerPixelsWithCapping : function (extra, milliseconds, modulo){
      if(milliseconds % modulo == 0) {
        for (var trackerIncrement = 0; trackerIncrement < extra.length; trackerIncrement++) {
          this.writeTrackerPIXEL(extra[trackerIncrement]);
        }
      }
    },
    callTrackers : function (today) {
      var isCookieSet,
          year,
          expiryDate,
          cookieLifetime = Config.cookieLifetime || 7, // cookieLifetime is in days
          trackerIncrement,
          capping,
          i;

      // try to detect if the user has already been synced on this domain using a cookie.
      isCookieSet = document.cookie.match('(^|;) ?' + Config.cookieName + '=([^;]*)(;|$)');

      // if the cookie is set or cookies are not supported, leave the function. (stop propagation)
      if (isCookieSet || this.areCookiesEnabled() === false) {
          return;
      }

      // calculate expiry date
      year = today.getYear() < 2000 ? today.getYear() + 1900 : today.getYear();
      expiryDate = new Date(year, today.getMonth(), today.getDate() + cookieLifetime).toGMTString();

      // set the cookie if it was not set before.
      for(i in Config.cookies) {
        document.cookie = Config.cookies[i] + '=1; expires=' + expiryDate + '; path=/;';
      }

      // call trackers
      var trackers = this.isSSL() ? Config.trackersSSL : Config.trackers;
      if (trackers['PIXEL'] !== undefined && trackers['PIXEL'] !== null) {
        for (trackerIncrement = 0; trackerIncrement < trackers['PIXEL'].length; trackerIncrement++) {
          this.writeTrackerPIXEL(trackers['PIXEL'][trackerIncrement]);
        }
      }

      if (trackers['IFRAME'] !== undefined && trackers['IFRAME'] !== null) {
        for (trackerIncrement = 0; trackerIncrement < trackers['IFRAME'].length; trackerIncrement++) {
          Utils.writeTrackerIFRAME(trackers['IFRAME'][trackerIncrement]);
        }
      }

      if (trackers['JAVASCRIPT'] !== undefined && trackers['JAVASCRIPT'] !== null) {
        for (trackerIncrement = 0; trackerIncrement < trackers['JAVASCRIPT'].length; trackerIncrement++) {
          Utils.writeTrackerJAVASCRIPT(trackers['JAVASCRIPT'][trackerIncrement]);
        }
      }

      if (trackers['EXTRA'] !== undefined && trackers['EXTRA'] !== null) {
        this.writeTrackerPixelsWithCapping(trackers['EXTRA'], today.getMilliseconds(), 100);
      }
   },
   isUserIDSet : function() {
     var userID, firstChar;

     userID = document.cookie.match("AFFICHE_W=([^;]*)(;|$)");
     if (userID === null) {
       return null;
     }
     firstChar = userID[1].substr(0,1);
     if (firstChar === "!" || firstChar === "_") {
       return false;
     } else {
       return true;
     }
   },

   run : function(retries) {
     var obj = this, isUserIDSet = this.isUserIDSet();
     if (isUserIDSet === true) {
       this.callTrackers(new Date());
       return;
     }

     if (isUserIDSet === null) {
       retries -= 1;
       if (retries > 0) {
         window.setTimeout(function(){obj.run(retries)}, 500);
         return;
       } else {
         if (document.URL.indexOf('loop=1') == -1) {
           window.location.replace(document.location.protocol + "//wam.solution.weborama.fr/fcgi-bin/dispatch.fcgi?d.A=rd&d.k=synchro&d.u=" + encodeURIComponent(document.URL + "?loop=1"));
           return;
         }
       }
     }
   }
};
