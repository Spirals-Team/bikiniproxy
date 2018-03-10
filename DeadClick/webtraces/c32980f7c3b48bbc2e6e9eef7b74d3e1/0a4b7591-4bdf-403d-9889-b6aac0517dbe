function blqAddLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {window.onload = func;}
    else {window.onload = function() {
        if (oldonload) {oldonload();}
        func();}}
}

var blqOnDomReady;
(function() {
    var toRun = function() {},
    isReady = false,
    d = document,
    ua = navigator.userAgent.toLowerCase();

    blqOnDomReady = function(f) {
        //just run function if already ready
        if (isReady) {
            f();
        } else {
            var oldLoadFunc = toRun;
            toRun = function () {
                oldLoadFunc();
                f();
            };
        }
    };

    if (/*@cc_on !@*/false) {
        // polling for no errors
        (function () {
            try {
                // throws errors until after ondocumentready
                d.documentElement.doScroll('left');
            } catch (e) {
                setTimeout(arguments.callee, 50);
                return;
            }
            // no errors, fire
            toRun();
        })();
    } else if (typeof d.readyState != 'undefined' && ! (Number((/applewebkit\/(\d+(?:\.\d+)?)/.exec(ua) || [0,NaN])[1]) < 312)) {
        var f = function(){/loaded|complete/.test(d.readyState) ? toRun() : setTimeout(f, 10);};
        f();
    } else {
        var callback = function () {
            if (arguments.callee.fired) {return;}
            arguments.callee.fired = true;
            toRun();
        };
        d.addEventListener("DOMContentLoaded", callback, false);
        var oldOnload = window.onload;
        window.onload = function () {
        if (oldOnload) {oldOnload();}
            callback();
        };
    }
    blqOnDomReady(function() {isReady = true;});
})();

// Global nav
var blq = new function (){
    var computedStyles
        , navClicked = false
        , browserCSS = false
        , browserImages = false
        , browserJS = (document.getElementById && document.getElementsByTagName) ? true : false
        , externalGoMetadata = false
        , labels = {
            searchSuggestion: "Search"
        },
        _flagpoles = {};

    //Public var because location path includes release number and platform, so is set by page
    this.assetPath = false;

    this.init = function(){
        if(browserJS){
            if (typeof document.documentElement.className == "string") {
                document.documentElement.className += " blq-js";
            } else {
                document.documentElement.className = "blq-js";
            }
            //some cps's use quirks doctype and need to tweak css (see: CPSSTATIC-13)
            if (document.compatMode == "BackCompat") {
                document.documentElement.className += " blq-quirks";
            }
        }
    }

    this.domReady = function(){
        var searchButton = el('blq-search-btn');
        var moreButton = el('blq-nav-m').getElementsByTagName('a')[0];

        computedStyles = (document.defaultView && document.defaultView.getComputedStyle(searchButton, null)) || searchButton.currentStyle;

        //Check CSS is on
        //Using color as Opera doesn't report width this early
        //Allowing blank as PC and mac Safari 2 reports blank before window.onload
        if(computedStyles.color == "rgb(0, 0, 0)" || computedStyles.color == "#000000" || computedStyles.color == "#000" || computedStyles.color == ""){
            browserCSS = true;
        }

        //browser ability tests
        if(browserJS && browserCSS && moreButton){

            //Add open function
            moreButton.onclick = function(e){
                blq.toggleNav(e);
                return false;
            };

            //Add close function to body
            if (typeof document.body.onclick == "function") {
                var oldOnClick = document.body.onclick;
                document.body.onclick = function(){
                    animateNav('hide');
                    oldOnClick();
                };
            } else {
                document.body.onclick = function(){
                    animateNav('hide');
                };
            }

            el('blq-nav').onclick = function(e){
                stopBubble(e);
            };
        }

        blq.setARIAValues();
        blq.accessibilityLinks();
        initIdentityStatusBar();

        if (typeof require !== 'undefined') {
            require(['istats-1'], function(istats) {
                blqOnDomReady(function() {
                    var oldOnclick;

                    //  Set up tracking for masthead, footer and more panel links.
                    istats.track('internal', {
                        region: document.getElementById('blq-mast-home'),
                        linkLocation: 'blq-mast-home-gvl2.7'
                    });
                    istats.track('internal', {
                        region: document.getElementById('blq-nav-main'),
                        linkLocation: 'blq-nav-main-gvl2.7'
                    });
                    istats.track('internal', {
                        region: document.getElementById('blq-nav-links-inner'),
                        linkLocation: 'blq-nav-links-gvl2.7'
                    });
                    istats.track('internal', {
                        region: document.getElementById('blq-foot'),
                        linkLocation: 'blq-foot-gvl2.7'
                    });

                    //  Don't track opening of the more panel.
                    istats.addNoTrack(document.getElementById('blq-nav-m').getElementsByTagName('a')[0]);

                    oldOnclick = moreButton.onclick;
                    moreButton.onclick = function(e) {
                        if (typeof oldOnclick === 'function') {
                            oldOnclick(e);
                        }
                        istats.log('click', 'more-click-gvl2.7');
                        return false;
                    };
                });
            });
        }

        // set up the Search The BBC text hint before Glow is loaded on focus
        var searchBox = el('blq-search');
        if (searchBox.value == ""
                && searchBox != document.activeElement) {
            searchBox.value = labels.searchSuggestion;
        }
    }

    this.onLoad = function() {
        //Preload nav background, or set it to white when images are off
        if (imagesOn()){
            //Preload nav panel image
            var navPanelBG = new Image(1,1);
            navPanelBG.src = blq.assetPath + 'img/panel.png';

            //Preload autosuggest image
            var autosuggestPanelBG = new Image(1,1);
            autosuggestPanelBG.src = blq.assetPath + 'img/suggest_sprite.png';

            //Note IE7 triggers onload before ondomready
            el('blq-mast-home').className = "";
        } else {
            var navLinks = el('blq-nav-links');
            navLinks.className += ' blq-no-images';
        }
    }

    this.toggleNav = function(e) {
        //Normalisation required for IE
        e = e || window.event;
        e.target = e.target || e.srcElement;

        if(document.getElementById('blq-nav-links').style.display == "block"){
            animateNav('hide');
            if (e.target == el('blq-nav-m').getElementsByTagName('a')[0]) {
                el('blq-nav-m').setAttribute('tabIndex', '-1');
                el('blq-nav-m').focus();
            }
        } else {
            animateNav('show');
        }
        stopBubble(e);
    }

    this.addGoTrack = function (el, opts) {}
    this.addGoTrack.isStub = true;

    this.setExternalGoMetadata = function(metadata){
        externalGoMetadata = metadata;
    }

    /**
     * @public
     * @description Returns the value of the flagpole.
     */
    this.flagpole = function(name) {
        return _flagpoles[name];
    }

    /**
     * @public
     * @description Sets the value of a flagpole.
     * @param {string} name The name of the flagpole.
     * @param {string} value The value of the flagpole.
     */
    this.setFlagpole = function(name, value) {
        _flagpoles[name] = value;
    }

    this.tagEnglishLinks = function(label, tooltipTargets){
        if(browserJS && browserCSS && imagesOn()){//Have to retest as have to call from main doc to allow ssi var to be passed in, rather than calling this from domReady()
            this.addTooltips(el('blq-acc').getElementsByTagName('a'), label, "hreflang", "en-GB");
            this.addTooltips(el('blq-foot').getElementsByTagName('a'), label, "hreflang", "en-GB");
            this.addTooltips(el('blq-nav-main').getElementsByTagName('a'), label, "hreflang", "en-GB");
            //Get all from the divs passed in above too
            if(tooltipTargets != "false"){
                tooltipTargets = tooltipTargets.split(',');
                for(var i = tooltipTargets.length-1; i >= 0; i--){
                    if(el(tooltipTargets[i])){
                        this.addTooltips(el(tooltipTargets[i]).getElementsByTagName('a'), label, "hreflang", "en-GB");
                    }
                }
            }
        }
    }

    this.addTooltips = function(collection, label, attribute, value){
        for(var i = collection.length-1; i>=0; i--){
            if(collection[i].getAttribute(attribute) == value){
                if(collection[i].className){
                    collection[i].className += ' blq-tooltipped';
                } else {
                    collection[i].className = 'blq-tooltipped';
                }

                //Make the tooltip and add it to the link
                var tooltip = document.createElement('span');

                //if element is near top or right of page apply an additional class
                var tooltipClassString = "blq-tooltip blq-tipunder";

                tooltip.setAttribute('class', tooltipClassString);
                tooltip.setAttribute('className', tooltipClassString);//Needed for IE

                tooltip.innerHTML = '<span class="blq-tooltip-l">' + label + '</span><span class="blq-tooltip-r">&nbsp;</span>';//That &nbsp; is for IE
                collection[i].appendChild(tooltip);
            }
        }
    }

    this.suggest = function( data ) {
        if( this.suggestion._pendingRequest ) {
            clearTimeout(this.suggestion._pendingRequest._timeout);
            this.suggestion._pendingRequest = null;
        }
        this.suggestion.setData( data[1] || [] );
        this.suggestion.find();
    }

    this.addAutoSuggest = function(isRTL){
        //  Autosuggest is only supported for English.
        var lang = document.getElementById('blq-container-inner').getAttribute('lang') || 'en-GB';

            var searchBox = document.getElementById('blq-search'),
                autosuggestClasses,
                variantClass,
                self = this,
                removeSearchTheBBCHint = function () {
                };

            searchBox.parentNode.parentNode.onsubmit = function () {
                if (searchBox.value == labels.searchSuggestion) {
                    searchBox.value = '';
                }
            };

            if( !searchBox ) {return false;}
            searchBox.setAttribute('autocomplete','off');
            searchBox.onfocus = function() {

                if (searchBox.value == labels.searchSuggestion) {
                    searchBox.value = "";
                }

                if( document.getElementById('blq-autosuggest') ) {return false;} // ensure only one Autosuggest per page
                gloader.load( ["glow", "1", "glow.dom", "glow.net", "glow.widgets.AutoSuggest"], {
                    async  : true,
                    onLoad : function (glow) {
                        glow.ready(function () {
                            var $ = glow.dom.get;
                            $('#blq-mast form').addClass('active');
                            var scope = $("#blq-mast input").filter(function (i) {
                                return $(this).attr('name') == "scope";
                              });
                            variantClass = $('#blq-mast').attr('class').match(/blq-(\w+)-(domestic|worldwide)/) || [];
                            scope = (scope.length) ? scope.attr('value') : 'all';
                            self.noData = false;
                            self.suggestion = new glow.widgets.AutoSuggest( '#blq-search', [], {
                                    formatItem: function(item) {
                                      var name = item.title;
                                      if( name.length > 28 ) {
                                            name = item.title.substring(0,25) + '...';
                                            name += '<span class="blq-hide">' + item.title.substring(25,item.title.length) + '</span>';
                                      }
                                      return name;
                                    }
                                  , isMatch: function() {
                                        return this.data.length ? true : false;
                                    }
                                  , index : 'title'
                                  , maxListLength : blq.suggest_short ? 3 : 6
                                  , width : 226
                                  , activeOnShow : false
                                  , useCache : true
                                  , onInputChange : function(event) {
                                        /* only return a matched set when in 'en' */
                                        if (lang.substr(0, 2) !== 'en') {
                                            return;
                                        }
                                        event.preventDefault();
                                        if( this.noData ) {
                                            return false;
                                        }
                                        glow.dom.get('#suggid').remove();
                                        if( this._pendingRequest ) {
                                            this._pendingRequest.abort();
                                        }
                                        var self = this;

                                        var qs = glow.data.encodeUrl( {
                                            'q' : event.value,
                                            'scope' : scope,
                                            'format' : 'blq-1',
                                            'callback' : 'blq.suggest',
                                            'apikey' : 'jsKr6CVQKQAO6ufIcK0Td6Wm8hKT4RLB'
                                        } );
                                        this._pendingRequest = glow.net.loadScript(
                                            this.searchHost+'/search-suggest/suggest?'+qs,
                                          {useCache: true, charset:'utf-8',
                                                onError: function() {
                                                    self.inputElement.attr('autocomplete','on');
                                                    self.noData = true;
                                                }, timeout: 5
                                            });
                                    }
                                  , onDataError : function(event) {
                                      this.inputElement.attr('autocomplete','on');
                                    }
                                  , onItemSelect: function(event) {
                                        this.setValue(event.selectedItem.title);

                                        var input = glow.dom.get('#suggid');
                                        if( ! input.length ) {
                                            input = glow.dom.create('<input type="hidden" name="suggid" id="suggid" />');
                                            glow.dom.get('#blq-mast form').get('p').prepend(input);
                                        }
                                        input.val(event.selectedItem.id);

                                        var form = glow.dom.get('#blq-mast form');
                                        form[0].submit();
                                    }
                              }
                        );
                            // searchHost used to allow overriding default behaviour with a bookmarklet
                            self.suggestion.searchHost = self.searchHost || '//search-suggest.api.bbci.co.uk';
                            self.suggestion.overlay.container.attr('id', 'blq-autosuggest');

                            // Add variant class
                            if (variantClass.length > 0) {
                                autosuggestClasses = self.suggestion.overlay.container.attr('class');
                                self.suggestion.overlay.container.attr('class', autosuggestClasses + ' ' + variantClass[0]);
                            }

                            // RTL
                            if (isRTL) {
                                autosuggestClasses = self.suggestion.overlay.container.attr('class');
                                self.suggestion.overlay.container.attr('class', autosuggestClasses + ' blq-rtl');
                            }

                            self.suggestion.overlay.opts.hideWindowedFlash = false;

                            glow.events.addListener(
                                  '#blq-search'
                                , 'click'
                                , function(e) {
                                    e.stopPropagation();
                                    glow.dom.get('#blq-mast form').addClass('active');
                                    return false;
                                }
                            );

                            glow.events.addListener(
                                  document
                                , 'click'
                                , function(e) {
                                    glow.dom.get('#blq-mast form').removeClass('active');
                                }
                            );

                            searchTheBBCSearchHint(glow);
                        });
                    }
                });
                searchBox.onfocus = function() {};
            };
    }

    this.setARIAValues = function(){
        if(document.body.setAttribute){
            addAttribute('blq-acc', 'role', 'navigation');
            addAttribute('blq-search-form', 'role', 'search');
            addAttribute('blq-local-nav', 'role', 'navigation');
            addAttribute('blq-content', 'role', 'main');
            addAttribute('blq-nav-main', 'role', 'navigation');
            addAttribute('blq-nav', 'role', 'navigation');
            addAttribute('blq-foot', 'role', 'contentinfo');
        }
    }

    /**
        @public
        @name setLabel
        @function
        @description Allows setting of default labels (such as 'Search The BBC' search box hint).
        @param {key} Label key
        @param {value} The new value
    */
    this.setLabel = function (key, value) {
        labels[key] = value;
    }

    this.disableFeature = function (feature) {
    	if(this[feature]) {
    		delete this[feature];
    	}
    }

    this.accessibilityLinks = function() {
		var accLinks = document.getElementById('blq-acc-links'),
			clickHandler = function(e) {
				e = e || window.event;
				var target = e.target || window.event.srcElement,
					hash = target.getAttribute('href').match(/^#(.+)/),
					targetElement = hash ? document.getElementById(hash[1]) : null;
				if (targetElement) {
					if (targetElement.tabIndex === null || targetElement.tabIndex === -1) {
						targetElement.tabIndex = -1;
					}
					if (targetElement.tagName === 'INPUT') {
						// Firefox did not set focus on search input correctly unless the event was cancelled
						// Manually updating location.href to maintain correct URL
						e.preventDefault();
						document.location.hash = hash[1];
					}
					targetElement.focus();
				}
			};

		if (accLinks.attachEvent) {
			accLinks.attachEvent('onclick', clickHandler)
		} else {
			accLinks.addEventListener('click', clickHandler, false);
		}
	}

    //Privates
    function addAttribute (id, attribute, value){
        if (el(id)){
            el(id).setAttribute(attribute, value);
        }
    }

    function imagesOn(){
        var x = el('blq-search-btn');
        if (x.currentStyle){
            var y = x.currentStyle['backgroundImage'];
        } else if (window.getComputedStyle) {
            var y = document.defaultView.getComputedStyle(x,null).getPropertyValue('background-image');
        }

        if (y.indexOf("search_icon.png") == -1){
            return false;
        } else {
            return true;
        }
    }

    //Tooltip function factories
    function letShowTooltip(n,i){
        return function() {
            el('blq-tooltip-' + n + i).style.display = 'block';
        };
    }
    function letHideTooltip(n,i){
        return function() {
            el('blq-tooltip-' + n + i).style.display = 'none';
        };
    }

    function getPosition(theElement){
        var positionY = 0;
        var positionX = 0;

        while (theElement != null){
            positionX += theElement.offsetLeft;
            positionY += theElement.offsetTop;
            theElement = theElement.offsetParent;
        }
        return [positionX, positionY];
    }

    function animateNav(action){
        var agent=navigator.userAgent.toLowerCase(),
            navMainEl = el('blq-nav-main');

        if (el('blq-nav-links').style.opacity != undefined && agent.indexOf("chrome") == -1) {
            //Set initial opacity of nav panel
            var currentOpacity = el('blq-nav-links').style.opacity || 0;



            function showMorePanel() {
                el('blq-nav-links').style.display = "block";
            }

            function hideMorePanel() {
                el('blq-nav-links').style.display = "none";
            }

            if (action == 'show'){

                showMorePanel();

                if (currentOpacity < 1) {
                    el('blq-nav-links').style.opacity = (parseFloat(currentOpacity) + 0.15);
                    setTimeout(function(){
                        animateNav('show');
                    },10);
                }
                else {
                    navMainEl.className += " blq-morepanel-shown"
                    el('blq-nav-links').style.opacity = 1;
                    if(el('blq-az') && el('blq-az').focus){
                        el('blq-az').focus();
                    }
                }
            } else {
                if (currentOpacity > 0){
                    el('blq-nav-links').style.opacity = (parseFloat(currentOpacity) - 0.15);
                    setTimeout(function(){
                        animateNav('hide');
                    },10);
                } else {
                    el('blq-nav-links').style.opacity = 0;

                    navMainEl.className = navMainEl.className.replace("blq-morepanel-shown", "");
                    hideMorePanel()
                }
            }
        } else {
            if (action == 'show'){
                showMorePanel();
                navMainEl.className += " blq-morepanel-shown";
            } else {
                hideMorePanel();
                navMainEl.className = navMainEl.className.replace("blq-morepanel-shown", "");
            }
        }
    }

    function stopBubble(e){
        if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
    }

    function el(id){
        return document.getElementById(id);
    }

    /**
        @private
        @name searchTheBBCSearchHint
        @function
        @description Adds the 'Search The BBC' text to the search box
        @param {glow} A reference to Glow
    */
    function searchTheBBCSearchHint (glow) {
        var $         = glow.dom.get,
            bind      = glow.events.addListener,
            searchbox = $("#blq-search");

        bind(searchbox, 'focus', function () {
            if (searchbox.val() == labels.searchSuggestion) {
                searchbox.val("");
            }
        });

        bind(searchbox, 'blur', function () {
            if (! searchbox.val()) {
                searchbox.val(labels.searchSuggestion);
            }
        });

        bind(searchbox.parent().parent(), 'submit', function(e) {
            if ( searchbox.val() == labels.searchSuggestion) {
                searchbox.val('');
            }
        })
    }

    function initIdentityStatusBar() {

        function resizeStatusBar() {
            var idStatusDiv = el('id-status'),
                idStatusLink = idStatusDiv.getElementsByTagName('A')[0],
                navMenu = el('blq-nav-main'),
                idLeft,
                navLeft,
                statusWidth,
                idPadding = 53,
                maxStatusWidth = 200,
                snapBackStatusWidth = 166;

                idLeft = parseInt( idStatusDiv.offsetLeft );
                navLeft = parseInt( navMenu.offsetLeft );
                statusWidth = navLeft - idLeft;

            //  Set a maximum width for the ID status bar
            if (statusWidth > maxStatusWidth ) {
               statusWidth = snapBackStatusWidth;
               idStatusDiv.className = idStatusDiv.className + ' id-small-nav';
            };

            idStatusDiv.style.width = statusWidth + 'px';
            idStatusLink.style.width = (statusWidth - idPadding) + 'px';
        }

        var options = {
            id: 'blq-sign-in',
            publiclyCacheable: true,
            blq: '2.8',
            'link-id': 'blq-idstatus-link',
            'name-id': 'blq-idstatus-text'
        };

        if (el('id-status')) {
            resizeStatusBar();
            require(['idcta/statusbar'], function(statusbar) {
                new statusbar.Statusbar(options);
            });
        }
    };

    var _environment = '';

    /**
     * @public
     * @description Returns the environment Barlesque was rendered from.
     */
    this.environment = function () {
        return _environment;
    }

    /**
     * @public
     * @description Sets the environment Barlesque should consider itself rendered from.
     * @param {string} env The environment, normally one of 'live', 'stage', 'test', 'int', 'ci' or 'sandbox'.
     */
    this.setEnvironment = function (env) {
        _environment = env;
    }
}

blq.init();
blqOnDomReady(function(){
    blq.domReady();
});
blqAddLoadEvent(blq.onLoad);


/**
 * Demi
 *
 * Stubbed API that loads the full Demi javascript object.
 *
 * @author Paul Clifford <paul.clifford@bbc.co.uk>
 * @author Richard Hodgson <richard.hodgson@bbc.co.uk>
 */
var demi = (function () {
    var loading = false,
        callbacks = [],
        demiUrl = null;

    return {
        /**
            @private
            @description Used in the unit tests to restore the initial state.
         */
        _reset: function () {
            loading = false;
            callbacks = [];
            demiUrl = null;
        },

        /**
            @private
            @description Called by the demi.js library when it has finished loading, and re-registers all the callbacks provided to getDevice with the real implementation.
         */
        _loaded: function () {
            while (callbacks.length > 0) {
                demi.getDevice(callbacks.shift(), blq.environment());
            }
        },

        /**
            @private
            @description Insert a script tag at the top of the head element. Replaced in the unit tests to avoid side effects.
            @param {string} src The value for the script src attribute.
         */
        _addScriptTag: function (src) {
            var headTag = document.getElementsByTagName('head')[0];
            var scriptTag = document.createElement('script');
            scriptTag.type = 'text/javascript';
            scriptTag.src = src;
            headTag.insertBefore(scriptTag, headTag.firstChild);
        },

        /**
            @private
            @description Set the location of the demi.js library. Called by inline JavaScript emitted by the DeMI shared module via an inlineHead method.
            @param {string} url The URL for the demi.js library
         */
        _setSource: function (url) {
            demiUrl = url;
        },

        /**
            @public
            @description Request a DeMI device object. Behind the scenes this pulls in the demi.js library, and the callback is re-registered with the real getDevice function (see the _loaded function).
            @param {function} callback
         */
        getDevice: function (callback) {
            callbacks.push(callback);
            if (! loading) {
                loading = true;
                demi._addScriptTag(demiUrl);
            }
        }
    };
})();
