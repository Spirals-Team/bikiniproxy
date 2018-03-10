var eyeBuild = {
    isInit: false,
    isLive: false,
    sid: -1,
    tid: -1,
    guid: '',
    clicktag: '',
    oob: false,
    vars: [],
    initCallback: null,
    elementIndex: -1,
	
	getParameterByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },
	
    checkInit: function () {
        if (!this.isInit) {
            throw 'eyeBuild was not initialized, please call function eyeBuild.initialize() before calling any other function.';
        }
    },

    post: function (s) {
        parent.postMessage(s, '*');
    },

    log: function (msg) {
        try {
            console.log('eyeBuild: ' + msg);
        } catch (ignore) {}
    },

    doIAT: function (i) {
        this.checkInit();

        if (this.isLive) {
            new Image().src = 'https://orion.eyereturn.com/iat.aspx?tokenID=' + this.tid + '&actionID=' + (i + 20000);
        }
		
		this.log('IAT ' + i);
    },

    doCustomIAT: function (i) {
        this.checkInit();

        if (i < 0 || i > 450) {
            throw 'i must be between 0 and 450';
        }
        if (this.isLive) {
            new Image().src = 'https://orion.eyereturn.com/iat.aspx?tokenID=' + this.tid + '&actionID=' + (i + 3000);
        }
		
		this.log('Custom IAT ' + i);
    },

    doPixel: function (pix) {
        this.checkInit();

        if (this.isLive) {
            new Image().src = pix;
        }
		
		this.log('doPixel ' + pix);
    },

    doScriptPixel: function (pix) {
        this.checkInit();

        if (this.isLive) {
			var er = document.createElement('script');
            er.type = 'text/javascript';
            er.async = true;
            er.src = pix;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(er, s);
        }
		
		this.log('doScriptPixel ' + pix);
    },

    doCallback: function (cb, index) {
        this.checkInit();

        if (index === undefined) {
            index = this.elementIndex;
        }
        if (this.isLive) {
            
			this.post(cb + ':' + index + ':' + this.tid);
        }
		
		this.log(cb + ', index = ' + index);
    },

    doOpen: function () {
        this.doCallback('open', -1);
    },

    doClose: function () {
        this.doCallback('close', -1);
    },

    doClick: function (n, val1, val2, val3, redirURL) {
        this.checkInit();

        if (this.oob) {
            this.doCallback('_oob');
        }

        var clickURL = this.clicktag;

        if (!!n) {
            clickURL = clickURL.replace('cn=0', 'cn=' + n);
        }

        if (!!val1) {
            clickURL = clickURL + '&val1=' + encodeURIComponent(val1);
        }

        if (!!val2) {
            clickURL = clickURL + '&val2=' + encodeURIComponent(val2);
        }

        if (!!val3) {
            clickURL = clickURL + '&val3=' + encodeURIComponent(val3);
        }

        if (!!redirURL) {
            clickURL = clickURL + '&redirURL=' + encodeURIComponent(redirURL);
        }

        if (this.isLive) {
            window.open(clickURL);
        }
		
		this.log('doClick ' + n);
    },

    initialize: function (cb) {
        if (this.isInit) {
            console.error('eyeBuild: initialize() has already been called, please call it only once.');
            return;
        }
		
        this.isInit = true;
        this.initCallback = cb;
		
		// Get parameters from query string
        this.tid = this.getParameterByName('tid');
        this.sid = this.getParameterByName('sid');
        this.guid = this.getParameterByName('guid');
        this.clicktag = decodeURIComponent(this.getParameterByName('clicktag'));
        this.oob = this.getParameterByName('oob') === 'true';
		this.vars = this.getParameterByName('vars') || [];
		this.elementIndex = this.getParameterByName('elementIndex') || -1;
		
		if (!!this.tid)
			this.isLive = true;
		
        try {
            // Iframe
            if (self !== top) {
                this.post('initialize');
            } else {
                this.post('initialize');
            }
        } catch (er_err) {
            this.post('initialize');
        } finally {
            this.log('initialize() called');
        }
		
		if (!!this.tid && !!eyeBuild.initCallback && typeof eyeBuild.initCallback === 'function') {
			eyeBuild.initCallback();
			eyeBuild.initCallback = null;
		}
		
		if (!!eyeBuild.initCallback)
		{
			switch(window.location.protocol) {
				case 'file:':
					//local file
					eyeBuild.initCallback.apply(this);
					break;
				default: 
				
			}
		}

    }
};

var message = function (e) {
	try
	{
		var t = JSON.parse(e.data);

		if (t.cmd === 'initialize') {
			eyeBuild.tid = t.data.tid;
			eyeBuild.sid = t.data.sid;
			eyeBuild.guid = t.data.guid;
			eyeBuild.clicktag = t.data.clicktag;
			eyeBuild.oob = !!t.data.oob;
			eyeBuild.vars = t.data.vars || [];
			eyeBuild.elementIndex = t.data.elementIndex || -1;
			eyeBuild.isLive = true;
			eyeBuild.log('is now live');

			// Call the creative's callback when initialization is done
			if (!!eyeBuild.initCallback && typeof eyeBuild.initCallback === 'function') {
				eyeBuild.initCallback();
			}
		} else if (t.cmd === 'doCallback' && !!t.data.cb) {
			// Call custom function in a creative
			var cb = window[t.data.cb];
			if (!!cb) {
				cb.apply(this, t.data.args);
			}
		}
	} catch (errr) {}
};

if (!!window.attachEvent) {
    window.attachEvent('onmessage', message);
} else {
    window.addEventListener('message', message);
}
