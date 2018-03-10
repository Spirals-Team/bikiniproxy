/*  ArchiveStats - v1.0.0, 2015-11-10
 *  Copyright (c) 2015 BBC, all rights reserved.
 */
(function() {
    function ArchiveStats() {
        this.trackingUrl = window.istatsTrackingUrl;
        this.cookieBits = "";
        this.validStats = this.isValidStatsDoc();
        this.mandatoryValues = ['name', 'app_type', 'app_name', 'app_version', 'ml_name', 'ml_version', 'language', 'screen_resolution', 'ns_nc', 'bbc_mc', 'bbc_identity', 'ns_jspageurl'];
        this.missingValues = [];
        this.trackingUrl = this.insertCounterName();

        this.trackingUrl += this.getSignOnFlag();
        this.trackingUrl += this.getCookiePolicy();
        this.trackingUrl += this.getCookiesEnabled();
        this.trackingUrl += this.getScreenResolution();
        this.trackingUrl += '&blq_s=2.8d&blq_r=2.7&blq_v=default-domestic';

        if (this.validStats) {
            this.setCookie();

            this.trackingUrl += this.getPageTime();
            this.trackingUrl += this.getCharacterSet();
            this.trackingUrl += this.getPageTitle();
            this.trackingUrl += this.cookieBits;
            this.trackingUrl += this.getPageUrl();
            this.trackingUrl += this.getPageReferrer();

            this.breakUpLongUrl();
            this.setMissingValues();

            this.trackingUrl += this.getBlankValues();
            this.trackingUrl = this.replaceMeasurementLibName();
        } else {
            /* used by Flash library to track */
            window.ns_pixelUrl = this.trackingUrl;
        }
    }

    ArchiveStats.prototype.replaceMeasurementLibName = function() {
        return this.trackingUrl.replace(/([?&]ml_name=)[^&]+/ig, '$1archive-stats');
    };

    ArchiveStats.prototype.setMissingValues = function() {
        for (var i = 0; i < this.mandatoryValues.length; i++) {
            var re = new RegExp('\\b' + this.mandatoryValues[i] + '=');
            if (!re.test(this.trackingUrl)){
                this.missingValues.push(this.mandatoryValues[i]);
            }
        }
    };

    ArchiveStats.prototype.getBlankValues = function() {
        var result = '';
        for (var i = 0; i < this.missingValues.length; i++) {
            result += '&' + this.missingValues[i] + '=';
        }
        return result;
    };

    ArchiveStats.prototype.createComscoreImage = function() {
        if (document.images && this.validStats) {
            this.image = new Image();
            this.image.src = this.trackingUrl;
        } else {
            document.write('<p><img id="comscoreImage" src="' + this.trackingUrl + '" height="1" width="1" alt="" /></p>');
        }
    };

    ArchiveStats.prototype.breakUpLongUrl = function() {
        if (this.trackingUrl.length > 2000 && this.trackingUrl.lastIndexOf("&")) {
            var ampIndex = this.trackingUrl.lastIndexOf("&");

            this.trackingUrl = this.trackingUrl.substring(0, ampIndex + 1) + "ns_cut=" + this.trackingUrl.substring(ampIndex + 1, this.trackingUrl.lastIndexOf("=")).substring(0, 40);
        }
    };

    ArchiveStats.prototype.isValidStatsDoc = function() {
        window.istats = window.istats || {};

        var cookieDisabled = (document.cookie.indexOf('NO-SA=') != -1),
            hasCookieLabels = (document.cookie.indexOf('sa_labels=') != -1),
            hasClickThrough = /^#sa-(.*?)(?:-sa(.*))?$/.test(document.location.hash);

        return !cookieDisabled && !hasCookieLabels && !hasClickThrough && !istats._linkTracked;
    };

    ArchiveStats.prototype.insertCounterName = function() {
        var replaceWith = "";

        if (window.istats_countername) {
            replaceWith = this.parseCurrentCounterName();
        } else {
            replaceWith = this.parseCounterNameFromUrl();
        }

        return this.trackingUrl.replace(/([?&]name=)[^&]+/ig, '$1' + replaceWith);
    };

    ArchiveStats.prototype.getScreenResolution = function() {
        var screenRes = 'unavailable';

        if (window.screen && screen.width && screen.height) {
            screenRes = screen.width + 'x' + screen.height;
        }

        return '&screen_resolution=' + screenRes;
    };

    ArchiveStats.prototype.getCookiesEnabled = function() {
        if ( /\bckns_policy=\d\d0/.test(document.cookie) ) {
            // Cookies enabled
            return '&ns_nc=1';
        }
        return '';
    };

    ArchiveStats.prototype.getCookiePolicy = function() {
        var policy = (document.cookie.match(/\bckns_policy=(\d\d\d)/)||[]).pop() || '';
        var result = "";

        // Cookie settings
        if (policy) {
            result = 'ad' + policy.charAt(0) + 'ps' + policy.charAt(1) + 'pf' + policy.charAt(2);
        } else {
            result = 'not_set';
        }
        return '&bbc_mc=' + result;
    };

    ArchiveStats.prototype.getSignOnFlag = function() {
        if (/\bIDENTITY=/.test(document.cookie)) {
            return '&bbc_identity=1';
        }
        return '';
    };

    ArchiveStats.prototype.getCharacterSet = function() {
        if (document.characterSet) {
            return "&ns_c=" + document.characterSet;
        }
        return document.defaultCharset;
    };

    ArchiveStats.prototype.getPageTime = function() {
        return "&ns__t=" + (new Date().getTime());
    };

    ArchiveStats.prototype.parseCurrentCounterName = function() {
        var counterName = window.istats_countername;
        var strlen = counterName.length;

        if((counterName !== 'SET-COUNTER') && (counterName.substr(strlen - 5, strlen) !== '.page')) {
            counterName += '.page';
        }

        return counterName;
    };

    ArchiveStats.prototype.parseCounterNameFromUrl = function() {
        var counterName = this.getRawPageUrl();
        var regex = new RegExp(/^.*\/\/[^\/]+/);

        if(regex.test(counterName)) {
            counterName = counterName.replace(regex, '');
            counterName = counterName.replace(/^\/|\/$/g, '');
            counterName = counterName.replace(/\//g, '.');
            counterName += '.page';
        }

        return counterName;
    };

    ArchiveStats.prototype.getRawPageUrl = function() {
        var l = document.location;

        return l && l.href ? l.href : document.URL;
    };

    ArchiveStats.prototype.escapePageUrl = function() {
        return encodeURIComponent(this.getRawPageUrl());
    };

    ArchiveStats.prototype.getPageUrl = function() {
        return "&ns_jspageurl=" + this.escapePageUrl();
    };

    ArchiveStats.prototype.getPageTitle = function() {
        return "&ns_ti=" + encodeURIComponent(document.title);
    };

    ArchiveStats.prototype.getPageReferrer = function() {
        return "&ns_referrer=" + encodeURIComponent(document.referrer);
    };

    ArchiveStats.prototype.setCookie = function() {
        var b = "";

        if (document.cookie.indexOf("st_ux=") !== -1) {
            var crumbs = document.cookie.split(";");

            var cName = "st_ux",
                cDomain = document.domain,
                cPath = "/";

            if (typeof ns_ !== "undefined" && typeof ns_.ux !== "undefined") {
                cName = ns_.ux.cName || cName;
                cDomain = ns_.ux.cDomain || cDomain;
                cPath = ns_.ux.cPath || cPath;
            }

            for (var g = 0, f = crumbs.length; g < f; g++) {
                var m = crumbs[g].indexOf("st_ux=");

                if (m !== -1) {
                    b = "&" + decodeURIComponent(crumbs[g].substring(m + 6));
                }
            }

            document.cookie = cName + "=; expires=" + new Date(new Date().getTime() - 60).toGMTString() + "; path=" + cPath + "; domain=" + cDomain;
        }
        this.cookieBits = b;
    };

    if (window.istatsTrackingUrl) {
        var archiveStats = new ArchiveStats();

        archiveStats.createComscoreImage();
    }
})();
