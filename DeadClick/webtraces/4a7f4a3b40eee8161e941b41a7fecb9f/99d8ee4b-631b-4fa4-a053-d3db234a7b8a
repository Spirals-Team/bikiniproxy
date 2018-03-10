(function (_w, _s) {

    var document = _w.document,
        app = {},
        startTimeMS = 0,
        _logMessage = function (m) {
            if (!app.logging)
                return;
            if (app.timing) {
                if (startTimeMS == 0)
                    startTimeMS = (new Date()).getTime();
                var t = (new Date()).getTime();
                m = '[AdButler] ' + m + ' (' + (t - startTimeMS) + ' ms)';
            }
            else
                m = '[AdButler] ' + m;
            _w.console && _w.console.log && _w.console.log(m);
        };


    app = {
        ads: [],
        pixels: {},
        requests: {},
        domains: {},

        protocol: 'http:',
        pageKey: false,

        logging: false,
        timing: false,

        // states
        initialized: false,

        init: function () {
            app.initialized = true;

            app.logging = app.isBoolean(_w.AdButlerAppLogging) ? _w.AdButlerAppLogging : app.logging;

            _logMessage('app.init()');

            app.protocol = (document.location.protocol === 'https:' ? 'https:' : 'http:');
            app.ads = app.ads ? app.ads : [];

            app.initRND();

            var tmp = app.ads;
            app.ads = [];
            app.ads.push = app.registerByPush;

            if (tmp && tmp.length > 0) {
                for (var i = 0; i < tmp.length; i++)
                    tmp[i].handler.call(null, tmp[i].opt);
            }

        },

        addEventListener: function (el, evt, func) {
            if ('addEventListener' in _w) {
                el.addEventListener(evt, func, false);
            } else if ('attachEvent' in _w) { //IE
                el.attachEvent('on' + evt, func);
            }
        },

        insertScriptBefore: function(beforeEl, src, async, loadFn) {
            var s = document.createElement('script');
            s.async = !!async;
            s.type = 'text/javascript';
            s.src = src;

            if (app.isFunction(loadFn)) {
                app.addEventListener(s, 'load', loadFn);
            }

            beforeEl.parentElement.insertBefore(s, beforeEl);
        },

        registerByPush: function (request) {
            _logMessage('app.registerByPush()');
            return request.handler.call(null, request.opt);
        },

        register: function (account, zone, size, div, opt) {
            _logMessage('app.register(' + account + ', ' + zone + ', ' + size.join('x') + ', ' + div + ')');

            var request = {core: {}, redirect: {}, opt: {adserveVersion: 'adserve'}, custom:{}};
            request.core = {
                ID: account,
                size: size.join('x'),
                setID: zone,
                type: 'async',
                domid: div,
                place: opt.place,
                pid: opt.pageKey ? opt.pageKey : app.pageKey,
                sw: (_s.width ? _s.width : 0),
                sh: _s.height ? _s.height : 0,
                spr: _w.devicePixelRatio ? _w.devicePixelRatio : 1,
                rnd: opt.rnd ? opt.rnd : app.rnd
            };

            // conditional core options
            if (opt.keywords && opt.keywords.length)
                request.core.kw = opt.keywords;
            if (opt.extraData && opt.extraData.length)
                request.core.extra = encodeURIComponent(opt.extraData);
            if (opt.rcb)
                request.core.rcb = opt.rcb;

            // custom
            if (typeof(opt.custom) == 'object') {
                for (var key in opt.custom) {
                    request.custom[key] = opt.custom[key];
                }
            }

            // redirect handling
            if (opt.clickURL && opt.clickURL.length)
                request.redirect.clickURL = opt.clickURL;
            if (opt.click && opt.click.length)
                request.redirect.click = opt.click;
            
            if (opt.adserveVersion) {
                request.opt.adserveVersion = opt.adserveVersion;
            }
            
            // if (account == 142519 || account == 164128) { //  || account == 158636
            //     opt.domain = 'adbutler-fermion.com';
            // }
            
            var r = Math.floor(Math.random() * 1000000);
            // 100000 = 10% of traffic
            // 10000 = 1% of traffic
            // 1000 = 0.1% of traffic
            if (r < 150000 && account == 170185 && opt.domain !== 'adglobal.tech') {
                opt.domain = 'adbutler-fermion.com';
            }

            app.setAccountDomain(account, opt.domain);
            app.setRequestMeta(request);

            app.load(opt.domain, request);
        },

        initRND: function () {
            if (window.rnd) {
                app.pageKey = app.rnd = window.rnd;
            }
            else {
                app.pageKey = app.rnd = window.rnd = app.randomNumber();
            }
        },

        load: function (domain, request) {
            _logMessage('app.load() --> ' + request.core.domid + ' [' + request.core.size + ']');

            var src = [app.protocol + '//' + domain + '/' + request.opt.adserveVersion + '/'],
                key, el;

            //
            for (key in request.core) {
                src.push(key + '=' + request.core[key]);
            }
            //
            for (key in request.custom) {
                src.push(key + '=' + request.custom[key]);
            }
            //
            for (key in request.redirect) {
                src.push(key + '=' + request.redirect[key]);
            }

            el = document.getElementById(request.core.domid);
            app.insertScriptBefore(el, src.join(';'), true);
        },

        placePlainMarkup: function (div, html) {
            _logMessage('app.placePlainHTML(' + div + ', *html)');

            var contentDiv = document.getElementById(div);
            if (typeof(contentDiv) != 'undefined')
                contentDiv.innerHTML = html;

            app.placeRegisteredPixels(div);
        },

        placeIframeMarkup: function (zone, place, size, div, html, opts) {
            _logMessage('app.placeIframeHTML(' + zone + ', ' + place + ', ' + size.join('x') + ', ' + div + ', *html)');

            var contentDiv = document.getElementById(div),
                width = size.length === 2 ? size[0] : 0,
                height = size.length === 2 ? size[1] : 0;

            contentDiv.innerHTML = '';

            var contentDocument, wrapperFrame;
            wrapperFrame = document.createElement("iframe");
            wrapperFrame.id = 'placement_' + zone + '_' + place + '_iframe';
            wrapperFrame.frameBorder = 0;
            wrapperFrame.scrolling = "no";
            wrapperFrame.noresize = "noresize";
            wrapperFrame.marginheight = 0;
            wrapperFrame.marginwidth = 0;
            wrapperFrame.height = height;
            wrapperFrame.width = width;

            contentDiv.appendChild(wrapperFrame);

            app.addEventListener(wrapperFrame, 'load', function() {
                return app.handleIframeHTMLOnLoad(div, zone, place);
            });

            html = "<!DOCTYPE HTML><html><head><style>html,body{padding:0;margin:0;}</style></head><body>" + html + "</body></html>";
            if (/msie/.test(navigator.userAgent.toLowerCase()) || _w.opera) {
                wrapperFrame.contentWindow.contents = html;
                return wrapperFrame.src = "javascript:window[\"contents\"]";
            } else {
                contentDocument = wrapperFrame.contentDocument;
                contentDocument.open();
                contentDocument.write(html);
                contentDocument.close();
                return wrapperFrame;
            }
        },

        handleIframeHTMLOnLoad: function (div, zone, place) {
            _logMessage('app.handleIframeHTMLOnLoad(' + div + ', ' + zone + ', ' + place + ')');

            var ifrm = document.getElementById('placement_' + zone + '_' + place + '_iframe');
            if (ifrm !== null && ifrm.readyState !== "complete" && app.isString(ifrm.readyState)) {
                return setTimeout((function () {
                    return app.handleIframeHTMLOnLoad(div, zone, place);
                }), 50);
            }
            else {
                app.placeRegisteredPixels(div);
            }
        },



        servePlainMarkup: function(div, ad) {
            _logMessage('app.servePlainMarkup(' + div + ', *html)');

            var contentDiv = document.getElementById(div);
            if (typeof(contentDiv) != 'undefined')
                contentDiv.innerHTML = ad.markup;

            app.placeRegisteredPixels(div);
        },

        serveIframeByMarkup: function(div, ad) {
            _logMessage('app.serveFramedMarkup(' + ad.zone + ', ' + ad.place + ', ' + ad.size.join('x') + ', ' + div + ', *html)');

            var contentDiv = document.getElementById(div),
                frameID = 'placement_' + ad.zone + '_' + ad.place + '_iframe',
                width = ad.size.length === 2 ? ad.size[0] : 0,
                height = ad.size.length === 2 ? ad.size[1] : 0,
                contentDocument, wrapperFrame,
                markup, i;

            contentDiv.innerHTML = '';

            wrapperFrame = document.createElement("iframe");
            wrapperFrame.id = frameID;
            wrapperFrame.frameBorder = 0;
            wrapperFrame.scrolling = "no";
            wrapperFrame.noresize = "noresize";
            wrapperFrame.marginheight = 0;
            wrapperFrame.marginwidth = 0;
            wrapperFrame.height = height;
            wrapperFrame.width = width;

            //
            contentDiv.appendChild(wrapperFrame);

            //
            app.addEventListener(wrapperFrame, 'load', function() {
                return app.processFrameOnLoad(div, frameID, ad);
            });

            // 
            app.processAdScripts(div, frameID, ad);

            //
            markup = "<!DOCTYPE HTML><html><head><style>html,body{padding:0;margin:0;}</style></head><body>" + ad.markup + "</body></html>";
            if (/msie/.test(navigator.userAgent.toLowerCase()) || _w.opera) {
                wrapperFrame.contentWindow.contents = markup;
                return wrapperFrame.src = "javascript:window[\"contents\"]";
            } else {
                contentDocument = wrapperFrame.contentDocument;
                contentDocument.open();
                contentDocument.write(markup);
                contentDocument.close();
                return wrapperFrame;
            }
        },

        serveIframeByURL: function(div, ad) {
            _logMessage('app.serveFramedMarkup(' + ad.zone + ', ' + ad.place + ', ' + ad.size.join('x') + ', ' + div + ', *url)');

            var contentDiv = document.getElementById(div),
                frameID = 'placement_' + ad.zone + '_' + ad.place + '_iframe',
                width = ad.size.length === 2 ? ad.size[0] : 0,
                height = ad.size.length === 2 ? ad.size[1] : 0,
                wrapperFrame;

            contentDiv.innerHTML = '';

            wrapperFrame = document.createElement("iframe");
            wrapperFrame.id = frameID;
            wrapperFrame.frameBorder = 0;
            wrapperFrame.scrolling = "no";
            wrapperFrame.noresize = "noresize";
            wrapperFrame.marginheight = 0;
            wrapperFrame.marginwidth = 0;
            wrapperFrame.height = height;
            wrapperFrame.width = width;

            // 
            contentDiv.appendChild(wrapperFrame);

            //
            app.addEventListener(wrapperFrame, 'load', function() {
                return app.processFrameOnLoad(div, frameID, ad);
            });

            // 
            app.processAdScripts(div, frameID, ad);

            // begin
            wrapperFrame.src = ad.src;

            return wrapperFrame;
        },

        processAdScripts: function(div, frameID, ad) {
            var contentDiv = document.getElementById(div),
                i, mediaScript, loadFn;

            // media scripts?
            if ( !(app.isArray(ad.scripts) && ad.scripts.length > 0) ) {
                return;
            }

            for (i = 0; i < ad.scripts.length; i++) {
                loadFn = null;
                mediaScript = ad.scripts[i];
                // if a loader is present
                if (app.isFunction(mediaScript.loadFn)) {
                    loadFn = function(){
                        mediaScript.loadFn(div, frameID, ad);
                    };
                }
                app.insertScriptBefore(contentDiv, mediaScript.src, true, loadFn);
            }
        },

        processFrameOnLoad: function(div, frameID, ad) {
            _logMessage('app.processFrameOnLoad(' + div + ', ' + ad.zone + ', ' + ad.place + ')');

            var ifrm = document.getElementById(frameID);
            if (ifrm !== null && ifrm.readyState !== "complete" && app.isString(ifrm.readyState)) {
                return setTimeout((function () {
                    return app.processFrameOnLoad(div, frameID, ad);
                }), 50);
            }
            else {
                app.placeRegisteredPixels(div);
            }
        },

        queuePlacementRefresh: function (div, rct, delay) {
            _logMessage('app.queuePlacementRefresh(' + div + ', ' + rct + ', ' + delay + ')');
            var request = app.getRequestMeta(div),
                domain = app.getAccountDomain(request.core.ID);

            request.core.rct = rct;

            setTimeout(function () {
                app.load(domain, request);
            }, delay);
        },

        randomNumber: function () {
            return Math.floor(Math.random() * 10e6);
        },

        getZoneMeta: function (zone) {
            if (!app.isObject(app.zoneMeta[zone]))
                app.zoneMeta[zone] = {
                    place: 0,
                    key: app.randomNumber()
                };
            else
                app.zoneMeta[zone].place++;
            return app.zoneMeta[zone];
        },

        setAccountDomain: function (ID, domain) {
            app.domains[ID] = domain;
        },

        getAccountDomain: function (ID) {
            return app.domains[ID];
        },

        setRequestMeta: function (request) {
            app.requests[request.core.domid] = request;
        },

        getRequestMeta: function (domid) {
            return app.requests[domid];
        },

        /* ============================================================ */
        /*  PIXEL FUNCTIONS                                             */
        /* ============================================================ */

        registerPixel: function (div, url) {
            _logMessage('app.registerPixel(' + div + ', *url)');

            if (!app.isArray(app.pixels[div])) {
                app.pixels[div] = [];
            }
            app.pixels[div].push(url);
        },

        placeRegisteredPixels: function (div) {
            _logMessage('app.placeRegisteredPixels(' + div + ')');

            if (app.isArray(app.pixels[div])) {
                for (var k = 0; k < app.pixels[div].length; k++) {
                    app.placePixel(div, app.pixels[div][k]);
                }
                app.pixels[div] = [];
            }
        },

        placePixel: function (div, url) {
            _logMessage('app.placePixel(' + div + ', ' + url + ')');
            if (url.length === 0)
                return;

            var container, pixel;
            container = document.getElementById(div);
            if (container !== null) {
                pixel = document.createElement('img');
                pixel.setAttribute("height", "0");
                pixel.setAttribute("width", "0");
                pixel.setAttribute("border", "0");
                pixel.setAttribute("style", "display:none;");
                pixel.setAttribute("src", url);
                return container.appendChild(pixel);
            }
        },


        /* ============================================================ */
        /*  HELPER FUNCTIONS                                            */
        /* ============================================================ */

        isArray: function (obj) {
            if (obj && obj.isArray) {
                return obj.isArray();
            }
            return typeof(obj) === "object" && obj instanceof Array;
        },

        isFunction: function(obj) {
            return typeof(obj) === 'function';
        },

        isObject: function (obj) {
            return typeof(obj) === "object";
        },

        isString: function (obj) {
            return typeof(obj) === "string";
        },

        isBoolean: function (obj) {
            return typeof(obj) === "boolean";
        }
    };

    if (_w.AdButler && _w.AdButler.initialized) {
        if (_w.AdButler.logging) {
            _logMessage('app initialized a second time, carrying on as usual.');
        }
        return;
    }

    if (_w.AdButler) {
        app.ads = _w.AdButler.ads || [];
        app.domain = _w.AdButler.domain || false;
    }

    _w.AdButler = app;

    app.init();

}(window, screen));

