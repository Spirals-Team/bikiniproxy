if (!embeddedMedia) var embeddedMedia = {};

embeddedMedia.Player = function (version) {
    this.so = new SWFObject("http://www.bbc.co.uk/emp/player.swf", "bbc_emp_embed", this.height, this.width, version || "8", "#000000");
    this.revision = "18269_21576";
    this.so.addParam("wmode", "default");
    this.so.addParam("quality", "high");
    this.so.addParam("allowFullScreen", "true");
    this.so.addParam("allowScriptAccess", "always");
    this.so.addVariable("embedReferer", document.referrer);
    this.so.addVariable("embedPageUrl", location.href);
};

embeddedMedia.playerInstances = {};

embeddedMedia.Player.prototype = {

    call: function (functionName, params, callbackFunction) {
        this.swf.call(functionName, params, callbackFunction);
    },

    handleEvent: function (event) {
        if (!this[event.type]) return;
        this[event.type](event);
    },

    register: function (eventType) {
        this.swf.register(eventType);
    },

    unregister: function (eventType) {
        this.swf.unregister(eventType);
    },

    write: function (guidanceFlag) {

        embeddedMedia.playerInstances[this.domId] = this;

        if (bbc.guidance) {
            var instance = embeddedMedia.playerInstances,
            guidance = bbc.guidance;

            if (!embeddedMedia.guidanceInstalled) {
                embeddedMedia.guidanceInstalled = true;
                guidance.callbacks.toggle = guidance.callbacks.pass = function (status, callbackId) {
                    if (instance[callbackId]) instance[callbackId].write(status);
                };
            }

            this.set("guidance", guidanceFlag || guidance.status());
        }

        var flashVersion = deconcept.SWFObjectUtil.getPlayerVersion(),
        swf = this.so.getAttribute("swf");

        if (!this.swf) {
            this.so.setAttribute("id", this.so.getAttribute("id") + "_" + this.domId);
        }
		
        if (flashVersion.major >= 10) {
			swf='10player.swf';
		} else if (flashVersion.major < 8) {
            swf = "7player.swf";
        } else if (flashVersion.major == 9 && (flashVersion.minor > 0 || flashVersion.rev >= 115)) {
			swf='9player.swf';
		} else {
            swf = "player.swf";
        }

        this.so.setAttribute("swf", "http://www.bbc.co.uk/emp/" + swf + "?revision=" + this.revision);

        this.so.write(this.domId);

        this.swf = document.getElementById(this.so.getAttribute("id"));
    },

    setWidth: function (value) {
        this.so.setAttribute("width", value);
    },

    setHeight: function (value) {
        this.so.setAttribute("height", value);
    },

    setPlaylist: function (value) {
        this.so.addVariable("playlist", value);
    },

    setConfig: function (value) {
        this.so.addVariable("config", value);
    },

    setDomId: function (value) {
        this.domId = value;
        this.so.addVariable("domId", value);
    },

    setRevision: function (value) {
        this.revision = value;
    },

    set: function (key, value) {

        this.so.addVariable(key, value);
    }

};

embeddedMedia.console = function () {

    var popDetail = {};

    function popoutSimulcast(pid, locale, colour) {
        var root = (locale && locale != "en") ? "/iplayer/" + locale : "/iplayer";

        createPopup(
        root + "/console/" + pid + (colour ? ("/colour/" + colour) : "/colour/silver"), "simulcastPop", 429, 512);
    }

    function popoutRadioInvoke(pid, locale) {
        createPopup(getRadioConsoleUrl(pid, locale), "radioPop", 270, 512);
    }

    function getRadioConsoleUrl(pid, locale) {
        var root = (locale && locale != "en") ? "/iplayer/" + locale : "/iplayer";
        return root + "/console/" + (pid);
    }

    function popoutiPlayerVideo(language, vpid, epid) {

        createPopup("/iplayer/" + ((language != "en") ? language + "/" : "") + "console/" + epid + ((vpid) ? "/" + vpid : ""), "videoPopstandard", 400, 512);
    };

    function popout(params, height, width, mode) {
        height = ((height * 1)  + ((mode == "standard") ? 77 : 32));
        width = width * 1;
        popDetail = {
            params: params,
            mode: mode,
            height: height,
            width: width
        };
        createPopup("/emp/pop.html", "videoPop" + mode, height, width);
    }

    function createPopup(url, name, height, width) {
        var win = window.open(
        url, name, "width=" + width + ",height=" + height + ",toolbar=no,resizable=no,scrollbars=no");
        if (!win.opener) win.opener = window.self;
        if (win.focus) win.focus();
        return win;
    }

    return {
        popoutRadio: function (pid) {
            popoutRadioInvoke(pid);
        },
        popoutRadioInvoke: popoutRadioInvoke,
        popoutAudio: function (params, height, width) {
            popout(params, height, width, "audio");
        },
        popoutVideo: function (params, height, width) {
            popout(params, height, width, "standard");
        },
        popoutiPlayerVideo: popoutiPlayerVideo,
        popoutSimulcast: function (pid, locale, colour) {
            popoutSimulcast(pid, locale, colour);
        },
        popoutBlackSimulcast: function (pid, locale) {
            popoutSimulcast(pid, locale, "black");
        },
        notifyParent: function (childWin) {
            if (childWin && childWin.updatePlayer) childWin.updatePlayer(popDetail);
        }
    };
} ();

embeddedMedia.diagnostics = function () {
    return {
        openDiagnostics: function () {
            var href = ((/bbc.co.uk(:\d{2,5})?\/iplayer/).test(location.href)) ? "/iplayer/diagnostics" : "http://www.bbc.co.uk/iplayer/diagnostics";
            var isPopup = (/emp\/pop/).test(location) || (/iplayer\/console/).test(location.href);
            if (isPopup) {
                window.open(href, "_blank");
            } else {
                location.href = href;
            }
        }
    };
} ();

embeddedMedia.api = function () {
    return {
        handleEvent: function (id, event) {
            if (!embeddedMedia.playerInstances[id]) return;
            embeddedMedia.playerInstances[id].handleEvent(event);
        }
    };
} ();

// alias for existing bbc.Emp() namespace
if (!bbc) var bbc = {};
bbc.Emp = embeddedMedia.Player;