/*!************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
if(typeof s7viewers == "undefined") {
	s7viewers = {};
}else if(typeof s7viewers != "object") {
	throw new Error("Cannot initialize a root 's7viewers' package. s7viewers is not an object");
}

if(!s7viewers.BasicZoomViewer) {
	(function(){
		var s7sdk;
		/**
		 * Construct a BasicZoomViewer object
		 * @param {Object} inObj optional simple JSON object that consists of name:value pairs for customization of the viewer.
		 */
		s7viewers.BasicZoomViewer = function (inObj) {
			this.sdkBasePath = 'js/3.3/BasicZoomViewer/';
			this.containerId = null;
			this.params = {};
			this.handlers = [];
	//		this.onInitComplete = null;
			this.onInitFail = null;
			this.initializationComplete = false;
			this.initCalled = false;
			this.firstMediasetParsed = false;
			this.isDisposed = false;
			this.utilsScriptElm = null;
			this.fixinputmarker = null;

			if (typeof inObj == "object"){
				if (inObj.containerId) {
					this.setContainerId(inObj.containerId)
				}
				if (inObj.params) {
					for(var param in inObj.params) {
						if(inObj.params.hasOwnProperty(param) && inObj.params.propertyIsEnumerable(param)) {
							this.setParam(param,inObj.params[param]);
						}
					}
				}
				if (inObj.handlers) {
					this.setHandlers(inObj.handlers);
				}
				if (inObj.localizedTexts) {
					this.setLocalizedTexts(inObj.localizedTexts);
				}
			}
		};

		s7viewers.BasicZoomViewer.cssClassName = "s7basiczoomviewer";

		s7viewers.BasicZoomViewer.prototype.modifiers = {
		};

		s7viewers.BasicZoomViewer.prototype.setContainerId = function (inElemId) {
			if (this.isDisposed) return;
			this.containerId = inElemId || null;
		};
		
		s7viewers.BasicZoomViewer.getCodeBase = function() {
			var contentUrl = "";
			var viewerPath = "";
			var scriptTags = null;
			if (document.scripts){
				scriptTags = document.scripts;
			} else {
				scriptTags = document.getElementsByTagName("script");
			}

			for(var i=0; i<scriptTags.length;i++){
				var src = scriptTags[i].src;
				var result = /^\s*(http[s]?:\/\/[^\/]*)?(.*)(\/(js|js_orig)\/BasicZoomViewer\.js)/.exec(src);
				if (result && result.length == 5) {
					if ( typeof result[1] !== 'undefined' ) {
						contentUrl = result[1];
					}
					contentUrl += result[2];
					viewerPath = src;
					break;
				}
			}
			if ((contentUrl != '') && (contentUrl.lastIndexOf('/') != contentUrl.length - 1)) {
				contentUrl += '/';
			}
			
			var codebaseRegEx = /\/etc\/dam\/viewers\//;
			s7viewers.BasicZoomViewer.codebase = {"contentUrl": contentUrl, "isDAM": codebaseRegEx.test(viewerPath)};
			
		};
		s7viewers.BasicZoomViewer.getCodeBase();
		
		s7viewers.BasicZoomViewer.prototype.getContentUrl = function () {
			return s7viewers.BasicZoomViewer.codebase.contentUrl;
		};

		s7viewers.BasicZoomViewer.prototype.includeViewer = function () {
			s7sdk.Util.lib.include("s7sdk.set.MediaSet");
			s7sdk.Util.lib.include("s7sdk.image.ZoomView");
			s7sdk.Util.lib.include("s7sdk.common.Button");
			s7sdk.Util.lib.include("s7sdk.common.Container");

			this.trackingManager = new s7sdk.TrackingManager(); // needs to be created first to track LOAD event

			this.s7params = new s7sdk.ParameterManager(null,null,{"asset" : "MediaSet.asset"},this.getContentUrl()+"BasicZoomViewer_light.css");
			var viewerName = ""; 
			if (this.s7params.params.config && (typeof(this.s7params.params.config) == "string")) {
				viewerName = ",";
				if (this.s7params.params.config.indexOf("/") > -1) {
					viewerName += this.s7params.params.config.split('/')[1];
				} else 
					viewerName += this.s7params.params.config;
			}
			this.s7params.setViewer("501,5.8.4" + viewerName);

			for(var prm in this.params){
				if (prm != "localizedtexts"){
					this.s7params.push(prm, this.params[prm]);
				}else{
					this.s7params.setLocalizedTexts(this.params[prm]);
				}
			}

			this.container = null;
			this.zoomView = null;
			this.zoomInButton = null;
			this.zoomOutButton = null;
			this.zoomResetButton = null;
			this.closeButton = null;
			this.mediaSet = null; 
			this.fullScreenButton = null;
			//visibility manager
			this.visibilityManagerZoom = null;
			this.isOrientationMarkerForcedChanged = false;

			var self = this;
			
			function initViewer(){
				
				self.s7params.push("aemmode",  s7viewers.BasicZoomViewer.codebase.isDAM  ? "1" : "0");
				
				if (s7sdk.browser.device.name == "desktop") self.s7params.push("ZoomView.singleclick", "zoomReset"); //singleclick and doubleclick for desktop have specific
				if (s7sdk.browser.device.name == "desktop") self.s7params.push("ZoomView.doubleclick", "reset");						

			/*get fixinputmarker*/
			var fixinputmarkerParam = self.getParam("fixinputmarker");
			if (fixinputmarkerParam) {
				self.fixinputmarker = (fixinputmarkerParam == "s7touchinput" || fixinputmarkerParam == "s7mouseinput") ? self.fixinputmarker = fixinputmarkerParam : null;
			};
			
			var urlParam = self.getURLParameter("fixinputmarker");
			if (urlParam){
				self.fixinputmarker = (urlParam == "s7touchinput" || urlParam == "s7mouseinput") ? self.fixinputmarker = urlParam : null;;
			};
			/*some code...*/
			if (self.fixinputmarker){
				if(self.fixinputmarker === "s7mouseinput"){
					self.addClass(self.containerId,"s7mouseinput");
				}else if(self.fixinputmarker === "s7touchinput"){
					self.addClass(self.containerId,"s7touchinput");
				}
			}else{
				// Create a viewer Container
					if (s7sdk.browser.supportsTouch()){
					self.addClass(self.containerId,"s7touchinput");
				}else{
					self.addClass(self.containerId,"s7mouseinput");
				}
			}	

				self.parseMods();

				self.container = new s7sdk.common.Container(self.containerId, self.s7params, self.containerId+"_container");
				if(self.container.isInLayout()){
					completeInitViewer();
				} else {
					self.container.addEventListener(s7sdk.event.ResizeEvent.ADDED_TO_LAYOUT, completeInitViewer, false);
				}
			}
			
			function completeInitViewer(){
				
				self.container.removeEventListener(s7sdk.event.ResizeEvent.ADDED_TO_LAYOUT, completeInitViewer, false);

				// work-around for webkit issue with applying height:100% to the containing element

				var containerDiv = document.getElementById(self.containerId);
				var tempMinHeight = containerDiv.style.minHeight;
				containerDiv.style.minHeight = "1px";

				var testdiv = document.createElement("div");
				testdiv.style.position = "relative";
				testdiv.style.width = "100%";
				testdiv.style.height = "100%";
				containerDiv.appendChild(testdiv);
				var emptyViewerHeight = testdiv.offsetHeight;
				if (testdiv.offsetHeight <= 1){
					containerDiv.style.height = "100%";
					emptyViewerHeight = testdiv.offsetHeight;
				}
				containerDiv.removeChild(testdiv);
				containerDiv.style.minHeight = tempMinHeight;

				var responsive = false;
				switch(self.s7params.get("responsive", "auto")){
					case "fit":
						responsive = false;
						break;
					case "constrain":
						responsive = true;
						break;
					default :
						responsive = emptyViewerHeight == 0;
						break;
				}
				self.updateCSSMarkers();
				self.updateOrientationMarkers();
				if(self.container.isFixedSize()) { // free
					self.viewerMode = "fixed";
				} else {
					if(responsive) { // restrict
						self.viewerMode = "ratio";
					} else {
						self.viewerMode = "free";
					}
				}

				self.mediaSet = new s7sdk.set.MediaSet(null, self.s7params, self.containerId+"_mediaSet");
				self.trackingManager.attach(self.mediaSet);
				// ====================================== Event Listeners ====================================== //
				// Add MediaSet event listeners
				self.mediaSet.addEventListener(s7sdk.event.AssetEvent.NOTF_SET_PARSED, onSetParsed, false);
				// Add Container event listeners
				self.container.addEventListener(s7sdk.event.ResizeEvent.COMPONENT_RESIZE, onContainerResize,false);
				self.container.addEventListener(s7sdk.event.ResizeEvent.FULLSCREEN_RESIZE, onContainerFullScreen,false);	
				self.container.addEventListener(s7sdk.event.ResizeEvent.SIZE_MARKER_CHANGE, onContainerSizeMarkerChange,false);	
				
				self.zoomView = new s7sdk.image.ZoomView(self.container, self.s7params, self.containerId+"_zoomView");
				self.trackingManager.attach(self.zoomView);
				if ((self.s7params.get("closeButton", "0") == "1") || (self.s7params.get("closeButton", "0").toLowerCase() == "true")){
					self.closeButton = new s7sdk.common.CloseButton(self.container, self.s7params, self.containerId + "_closeButton");
					self.closeButton.addEventListener("click", closeWindow);
				}
				self.zoomInButton = new s7sdk.common.ZoomInButton(self.container, self.s7params, self.containerId+"_zoomInButton");
				self.zoomOutButton = new s7sdk.common.ZoomOutButton(self.container, self.s7params, self.containerId+"_zoomOutButton");
				self.zoomResetButton = new s7sdk.common.ZoomResetButton(self.container, self.s7params, self.containerId+"_zoomResetButton");
				self.fullScreenButton = new s7sdk.common.FullScreenButton(self.container, self.s7params, self.containerId + "_fullScreenButton");
				
				if (self.container.isPopup() && !self.container.isFixedSize() &&!self.container.supportsNativeFullScreen()) {
					self.fullScreenButton.setCSS(".s7fullscreenbutton", "display", "none");
				}
			
				if(self.viewerMode == "ratio"){
					containerDiv.style.height = "auto";                
				}
				resizeViewer(self.container.getWidth(), self.container.getHeight());

				// Add ZoomInButton event listeners
				self.zoomInButton.addEventListener("click", function(){self.zoomView.zoomIn();});
				// Add ZoomOutButton event listeners
				self.zoomOutButton.addEventListener("click", function(){self.zoomView.zoomOut();});
				// Add FullScreenButton event listeners
				self.fullScreenButton.addEventListener("click", onFullScreenButtonClick);
				// Add buttons event listener (change states)
				self.zoomView.addEventListener(s7sdk.event.CapabilityStateEvent.NOTF_ZOOM_CAPABILITY_STATE,function(stateEvent){
					if (stateEvent.s7event.state.hasCapability(s7sdk.ZoomCapabilityState.ZOOM_IN))
						self.zoomInButton.activate();
					else
						self.zoomInButton.deactivate();
						
					if (stateEvent.s7event.state.hasCapability(s7sdk.ZoomCapabilityState.ZOOM_OUT))
						self.zoomOutButton.activate();
					else
						self.zoomOutButton.deactivate();						
							
					if (stateEvent.s7event.state.hasCapability(s7sdk.ZoomCapabilityState.ZOOM_RESET)) {
						self.zoomResetButton.activate();
					}
					else {
						self.zoomResetButton.deactivate();
					}
				});
				
				// Add ZoomResetButton event listeners
				self.zoomResetButton.addEventListener("click",function(){self.zoomView.zoomReset(); });

				self.trackingManager.setCallback(proxyTrack);
				// AppMeasurementBridge only available when config2 modifier is present
				if ((typeof(AppMeasurementBridge) == "function") && (self.isConfig2Exist == true)){
					self.appMeasurementBridge = new AppMeasurementBridge(self.trackingParams);
				}


	////
				// ====================================== VisibilityManagers ====================================== //
				//Add VisibilityManager (for touch devices only)
				if (s7sdk.browser.device.name != "desktop") {
					self.visibilityManagerZoom = new s7sdk.VisibilityManager();
					self.visibilityManagerZoom.reference(self.zoomView);

					self.visibilityManagerZoom.attach(self.closeButton);

					self.visibilityManagerZoom.attach(self.zoomInButton);
					self.visibilityManagerZoom.attach(self.zoomOutButton);
					self.visibilityManagerZoom.attach(self.zoomResetButton);
					if (!self.notCustomSize  || self.container.supportsNativeFullScreen()) {
						self.visibilityManagerZoom.attach(self.fullScreenButton);
					}
				}
				// ====================================== Event Handlers ====================================== //
				function onSetParsed(e) {
					var mediaSetDesc = e.s7event.asset;

					if(self.viewerMode == "ratio"){
						var itm = mediaSetDesc.items[0];
						var assetRatio = itm.width/itm.height;
						self.container.setModifier({ "aspect": assetRatio });
					}
					resizeViewer(self.container.getWidth(), self.container.getHeight());
					self.zoomView.setItem(mediaSetDesc.items[0]);

	//				if ((self.onInitComplete != null) && (typeof self.onInitComplete == "function")){
	//					self.onInitComplete();
	//				}


					if ((self.handlers["initComplete"] != null) && (typeof self.handlers["initComplete"] == "function") && !self.firstMediasetParsed){
                        if (typeof window.s7sdk == "undefined") {
                            window.s7sdk = s7sdk;
                        }
                        self.handlers["initComplete"]();
					}
					self.firstMediasetParsed = true;
				}

				// FullScreenButton Event Handlers
				function onFullScreenButtonClick() { 
					if (!self.container.isFullScreen()){
						if(self.closeButton){
							self.closeButton.setCSS(".s7closebutton", "display", "none");
						}
						self.container.requestFullScreen();
					}
					else {
						if(self.closeButton){
							self.closeButton.setCSS(".s7closebutton", "display", "block");
						}
						self.container.cancelFullScreen();
					}					
				}				
				
				//Container Resize handler
				function onContainerResize(event) {
					if((typeof(event.target) == 'undefined') || (event.target == document.getElementById(self.containerId+"_container"))) {
						if(!self.container.isInLayout()){
							return;
						}
						if(self.closeButton){
							if(self.container.isFullScreen()) {
								self.closeButton.setCSS(".s7closebutton", "display", "none");
							}else{
								self.closeButton.setCSS(".s7closebutton", "display", "block");
							}
						}
						resizeViewer(event.s7event.w, event.s7event.h);
					}
				}
				
				//Container FullScreen Resize handler
				function onContainerFullScreen(event) {
					if(self.closeButton){
						if(self.container.isFullScreen()) {
							self.closeButton.setCSS(".s7closebutton", "display", "none");
						}else{
							self.closeButton.setCSS(".s7closebutton", "display", "block");
						}
					}
					resizeViewer(event.s7event.w, event.s7event.h);
					self.fullScreenButton.setSelected(self.container.isFullScreen());
				}

				function onContainerSizeMarkerChange(event) {
					self.updateCSSMarkers();
				}

				//Resize viewer handler
				function resizeViewer(w,h){
					self.updateOrientationMarkers();
					self.zoomView.resize(w, h);
				}
				
				function closeWindow() {
					try{
						if(s7sdk.browser.name != "firefox") {
							window.open(self.getContentUrl() + "s7sdkclose.html","_self"); //workaround for close self window with JS
						} else {
							window.close(); // Firefox does not allow workaround so we fall back to window.close to cover pop-up case
						} 
					}
					catch(e){
						s7sdk.Logger.log(s7sdk.Logger.WARN,"Cannot close the window");
					}
				}
				
				function proxyTrack(objID, compClass, instName, timeStamp, eventInfo) {
					if (self.appMeasurementBridge) {
						self.appMeasurementBridge.track(objID, compClass, instName, timeStamp, eventInfo);
					}
					if (self.handlers["trackEvent"]) {
                        if (typeof window.s7sdk == "undefined") {
                            window.s7sdk = s7sdk;
                        }
						self.handlers["trackEvent"](objID, compClass, instName, timeStamp, eventInfo);
					}
					if ("s7ComponentEvent" in window) {
						s7ComponentEvent(objID, compClass, instName, timeStamp, eventInfo);
					}
				}
				
			}

			this.s7params.addEventListener(s7sdk.Event.SDK_READY,function(){
													self.initSiteCatalyst(self.s7params,initViewer);
											},false);
			this.s7params.init();	
		};


		s7viewers.BasicZoomViewer.prototype.setParam = function(key, def){
			if (this.isDisposed) return;
			this.params[key] = def;	
		};

		s7viewers.BasicZoomViewer.prototype.getParam = function(key){
			var keyLC = key.toLowerCase();
            for (var paramsKey in this.params) {
                if (paramsKey.toLowerCase() == keyLC) {
                    return this.params[paramsKey];
                }
            }
            return null; 
		};

		s7viewers.BasicZoomViewer.prototype.setParams = function(inParams){
			if (this.isDisposed) return;
			var params = inParams.split("&");
			for (var i = 0; i < params.length; i++) {
				var pair = params[i].split("=");
				if (pair.length > 1) {
					this.setParam(pair[0],decodeURIComponent(params[i].split("=")[1]));
				}
			}
		};
		
		s7viewers.BasicZoomViewer.prototype.s7sdkUtilsAvailable = function(){
			if (s7viewers.BasicZoomViewer.codebase.isDAM) {
				return typeof(s7viewers.s7sdk) != "undefined";
			} else {
				return (typeof(s7classic) != "undefined") && (typeof(s7classic.s7sdk) != "undefined");
			}
		};

		s7viewers.BasicZoomViewer.prototype.init = function(){
			if (this.isDisposed) return;
			if (this.initCalled) return;
			this.initCalled = true;
			if (this.initializationComplete) return this;

			var containerDiv = document.getElementById(this.containerId);
			if (containerDiv.className != ""){
				if (containerDiv.className.indexOf(s7viewers.BasicZoomViewer.cssClassName) != -1){
					//
				}else{
					containerDiv.className += " "+s7viewers.BasicZoomViewer.cssClassName;
				}	
			}else{
				containerDiv.className = s7viewers.BasicZoomViewer.cssClassName;
			}

			this.s7sdkNamespace = s7viewers.BasicZoomViewer.codebase.isDAM ? "s7viewers" : "s7classic";
			var utilSrcPath = this.getContentUrl() + this.sdkBasePath + "js/s7sdk/utils/Utils.js?namespace="+this.s7sdkNamespace;
			var allScripts = null;
			if (document.scripts){
				allScripts = document.scripts;
			}else{
				allScripts = document.getElementsByTagName("script");
			}

			if (this.s7sdkUtilsAvailable()){
				s7sdk = (s7viewers.BasicZoomViewer.codebase.isDAM ? s7viewers.s7sdk : s7classic.s7sdk);
				s7sdk.Util.init(); 
				this.includeViewer(); 
				this.initializationComplete = true; 
			}else if (!this.s7sdkUtilsAvailable() && (s7viewers.BasicZoomViewer.codebase.isDAM ? s7viewers.S7SDK_S7VIEWERS_LOAD_STARTED : s7viewers.S7SDK_S7CLASSIC_LOAD_STARTED)){
				var selfRef = this;
				var utilsWaitId = setInterval(
					function() {
						if (selfRef.s7sdkUtilsAvailable()) {
							clearInterval(utilsWaitId);
							s7sdk = (s7viewers.BasicZoomViewer.codebase.isDAM ? s7viewers.s7sdk : s7classic.s7sdk);
							s7sdk.Util.init(); 
							selfRef.includeViewer();
							selfRef.initializationComplete = true;  
						}
					}, 100
				);
			}else{
				this.utilsScriptElm = document.createElement("script");
				this.utilsScriptElm.setAttribute("language", "javascript");
				this.utilsScriptElm.setAttribute("type", "text/javascript");

				var headElem = document.getElementsByTagName("head")[0];
				var self = this;

				function cleanupAndInitUtils() {
					if (!self.utilsScriptElm.executed) { 
						self.utilsScriptElm.executed = true;
						s7sdk = (s7viewers.BasicZoomViewer.codebase.isDAM ? s7viewers.s7sdk : s7classic.s7sdk);
						if (self.s7sdkUtilsAvailable() && s7sdk.Util){
							s7sdk.Util.init(); 
							self.includeViewer();  
							self.initializationComplete = true;
							self.utilsScriptElm.onreadystatechange = null;
							self.utilsScriptElm.onload = null;
							self.utilsScriptElm.onerror = null;
						}
					}  
				}

				if (typeof(self.utilsScriptElm.readyState) != "undefined") {
					self.utilsScriptElm.onreadystatechange =  function() {
						if (self.utilsScriptElm.readyState == "loaded") {
							headElem.appendChild(self.utilsScriptElm);
						} else if (self.utilsScriptElm.readyState == "complete") {
							cleanupAndInitUtils();
						}
					};
					self.utilsScriptElm.setAttribute("src", utilSrcPath);
				} else {
					self.utilsScriptElm.onload = function() {
						cleanupAndInitUtils();
					};
					self.utilsScriptElm.onerror = function() {
					};
					self.utilsScriptElm.setAttribute("src", utilSrcPath);
					headElem.appendChild(self.utilsScriptElm);
					self.utilsScriptElm.setAttribute("data-src", self.utilsScriptElm.getAttribute("src"));
					self.utilsScriptElm.setAttribute("src", "?namespace="+this.s7sdkNamespace);
				}
				if(s7viewers.BasicZoomViewer.codebase.isDAM) {
					s7viewers.S7SDK_S7VIEWERS_LOAD_STARTED = true;
				}else {
					s7viewers.S7SDK_S7CLASSIC_LOAD_STARTED = true;	
				}
			}
			
			return this;
		};
				
		s7viewers.BasicZoomViewer.prototype.getDomain = function(inUrl) {
			var res = /(^http[s]?:\/\/[^\/]+)/i.exec(inUrl);
			if (res == null) {
				return '';
			} else {
				return res[1];
			}
		};

		s7viewers.BasicZoomViewer.prototype.setAsset = function(inAsset) {
			if (this.isDisposed) return;
			if (this.mediaSet){
				this.mediaSet.setAsset(inAsset);
			}else{
				this.setParam("asset", inAsset);
			}
		};
		
		s7viewers.BasicZoomViewer.prototype.setLocalizedTexts = function(inText) {
			if (this.isDisposed) return;
			if (this.s7params){
				this.s7params.setLocalizedTexts(inText);
			}else{
				this.setParam("localizedtexts", inText);
			}
		};

		s7viewers.BasicZoomViewer.prototype.initSiteCatalyst = function(params,inCallback) {
				//integrate SiteCatalyst logging
				//strip modifier from asset and take the very first entry from the image list, and the first element in combination from that entry
				var siteCatalystAsset = params.get("asset", null, "MediaSet").split(',')[0].split(':')[0];
				this.isConfig2Exist = false;
				if (siteCatalystAsset.indexOf('/') != -1) {
					var company = s7sdk.MediaSetParser.findCompanyNameInAsset(siteCatalystAsset);
					var config2 = params.get("config2");
					this.isConfig2Exist = (config2 != '' && typeof config2 != "undefined");
					if (this.isConfig2Exist){
						this.trackingParams = {
							siteCatalystCompany: company,
							config2: config2,
							isRoot: params.get("serverurl")
						};
						var jsp_src =this.getContentUrl()+'../AppMeasurementBridge.jsp?company=' + company + (config2 == '' ? '' : '&preset=' + config2);
						if (params.get("serverurl", null)) {
							jsp_src += "&isRoot=" + params.get("serverurl");
						}
						var elem = document.createElement("script");
						elem.setAttribute("language", "javascript");
						elem.setAttribute("type", "text/javascript");
						elem.setAttribute("src", jsp_src);

						var elems = document.getElementsByTagName("head");
						elem.onload = elem.onerror = function() {  
							if (!elem.executed) { 
								elem.executed = true;  
								if (typeof inCallback == "function"){
									inCallback();
								}
								elem.onreadystatechange = null;
								elem.onload = null;
								elem.onerror = null;
							}  
						};  

						elem.onreadystatechange = function() {  
							if (elem.readyState == "complete" || elem.readyState == "loaded") {  
								setTimeout(function() { 
									if (!elem.executed) { 
										elem.executed = true;  
										if (typeof inCallback == "function"){
											inCallback();
										}
									}  
									elem.onreadystatechange = null;
									elem.onload = null;
									elem.onerror = null;
								}, 0);
							}  
						};
						elems[0].appendChild(elem);
					}else{
						if (typeof inCallback == "function"){
							inCallback();
						}
					}	
				}
		};

		/**
		 * Return component within the viewer according the specified id, null if id is invalid or inapplicable.
		 * @param inId ID of the component to retrieve 
		 */
		s7viewers.BasicZoomViewer.prototype.getComponent = function(inId) {
			if (this.isDisposed) return null;
			switch(inId){
				case "container":
					return this.container || null;
				case "mediaSet":
					return this.mediaSet || null;
				case "zoomView":
					return this.zoomView || null;
				case "zoomInButton":
					return this.zoomInButton || null;
				case "zoomOutButton":
					return this.zoomOutButton || null;
				case "zoomResetButton":
					return this.zoomResetButton || null;
				case "fullScreenButton":
					return this.fullScreenButton || null;
				case "closeButton":
					return this.closeButton || null;
				case "parameterManager":
					return this.s7params || null;
				default:
					return null;
			}
		};

		/**
		 * @private
		 * Assigns handler functions by names.  This function will clear the previous handler functions on the list.
		 * Non-function entries will be ignored.
		 *
		 * @param {Object} inObj Simple JSON object containing name:function pairs.
		 */
		s7viewers.BasicZoomViewer.prototype.setHandlers = function(inObj) {
			if (this.isDisposed) return;
			if (this.initCalled) return;
			this.handlers = [];
			for (var i in inObj) {
				if (!inObj.hasOwnProperty(i)) continue;
				if (typeof inObj[i] != "function") continue;
				this.handlers[i] = inObj[i];
			}
		};

		s7viewers.BasicZoomViewer.prototype.getModifiers = function() {
			return this.modifiers;
		};

		s7viewers.BasicZoomViewer.prototype.setModifier = function(modifierObject) {
			if (this.isDisposed) return;
			var modName, modDesc, modObj, modVal, parsedModifier, i;
			for(modName in modifierObject) {
				if(!this.modifiers.hasOwnProperty(modName)) {
					continue;
				}
				modDesc = this.modifiers[modName];
				
				try {
					modVal = modifierObject[modName];

					if (modDesc.parseParams === false) {
						parsedModifier = new s7sdk.Modifier([modVal  != "" ? modVal : modDesc.defaults[0]]);
					} else {
						parsedModifier = s7sdk.Modifier.parse(modVal, modDesc.defaults, modDesc.ranges);
					}

					if(parsedModifier.values.length == 1) {
						this[modName] = parsedModifier.values[0];
						this.setModifierInternal(modName);
					}
					else if(parsedModifier.values.length > 1) {
						modObj = {};
						for(i = 0; i < parsedModifier.values.length; i++) {
							modObj[modDesc.params[i]] = parsedModifier.values[i];
						}
						this[modName] = modObj;
						this.setModifierInternal(modName);
					}
				}
				catch(error) {
					throw new Error("Unable to process modifier: '"+ modName + "'. " + error);
				}
			}
		};

		s7viewers.BasicZoomViewer.prototype.setModifierInternal = function(modName) {
			switch (modName) {
				default :
					break;				
			}
		};

		s7viewers.BasicZoomViewer.prototype.parseMods = function () {
			var modName, modDesc, modObj, modVal, parsedModifier, i;
			
			for(modName in this.modifiers) {
				if(!this.modifiers.hasOwnProperty(modName)) {
					continue;
				}
				modDesc = this.modifiers[modName];
				
				try {
					modVal = this.s7params.get(modName, "");

					if (modDesc.parseParams === false) {
						parsedModifier = new s7sdk.Modifier([modVal  != "" ? modVal : modDesc.defaults[0]]);
					} else {
						parsedModifier = s7sdk.Modifier.parse(modVal, modDesc.defaults, modDesc.ranges);
					}

					if(parsedModifier.values.length == 1) {
						this[modName] = parsedModifier.values[0];
					}
					else if(parsedModifier.values.length > 1) {
						modObj = {};
						for(i = 0; i < parsedModifier.values.length; i++) {
							modObj[modDesc.params[i]] = parsedModifier.values[i];
						}
						this[modName] = modObj;
					}
				}
				catch(error) {
					throw new Error("Unable to process modifier: '"+ modName + "'. " + error);
				}
			}
		};

		/**
		 * @private
		 */
		s7viewers.BasicZoomViewer.prototype.updateCSSMarkers = function (){
			var sizeMarker = this.container.getSizeMarker();
			var newclass;
			if (sizeMarker == s7sdk.common.Container.SIZE_MARKER_NONE){
				return;
			}		
			if (sizeMarker == s7sdk.common.Container.SIZE_MARKER_LARGE){
				newclass = "s7size_large";
			}else{
				if (sizeMarker == s7sdk.common.Container.SIZE_MARKER_SMALL){
					newclass = "s7size_small";
				}else if (sizeMarker == s7sdk.common.Container.SIZE_MARKER_MEDIUM){
					newclass = "s7size_medium";
				}
			}
			if (this.containerId) {
				this.setNewSizeMarker(this.containerId, newclass);
			}
			this.reloadInnerComponents();
		};

		s7viewers.BasicZoomViewer.prototype.reloadInnerComponents = function () {
			var regCompArr = this.s7params.getRegisteredComponents();
			for(var i=0; i < regCompArr.length; i++){
				if (regCompArr[i] && regCompArr[i].restrictedStylesInvalidated()){
					regCompArr[i].reload();
				}
			}
		};
		
		s7viewers.BasicZoomViewer.prototype.setNewSizeMarker = function (elm, inClass) {
			var cls = document.getElementById(elm).className;
			var re = /^(.*)(s7size_small|s7size_medium|s7size_large)(.*)$/gi;
			var newcls;
			if(cls.match(re)){
				newcls = cls.replace(re,  "$1" + inClass + "$3");
			} else {
				newcls = cls + " " + inClass;
			}
			if(cls != newcls){
				document.getElementById(elm).className = newcls;
			}
		};

	/////////////////////////////////////////
	/*
		ZoomViewer - constructor
		setContainerId
		setParam
		setParams
		setLocalizedTexts
		getComponent
		setHandlers
		setAsset
		init    

		try to run your tests in cross-browser manner. When possible, have console open to capture JS errors.
		make sure that after dispose() there is no HTTP traffic coming out from the viewer
		make sure that after dispose() web page DOM does not have viewer elements, 
			 and viewer container is completely empty and does not even have CSS markers assigned
		make sure that all documented viewer API is noop and does not trigger errors after dispose()
		make sure it is possible to create, dispose and then create new viewer again and again many times in a row. 
			For this test:
				try re-creating the same viewer multiple times
				try re-creating different viewers in the same DOM container
				measure CPU/memory utilization. Memory use should not grow after you created and disposed a viewer many times
		verify fix for Container.dispose() (S7-6899)
	*/
		s7viewers.BasicZoomViewer.prototype.dispose = function () {
			if (this.appMeasurementBridge) {
				this.appMeasurementBridge.dispose();
				this.appMeasurementBridge = null;
			}
			if (this.trackingManager){
				this.trackingManager.dispose();
				this.trackingManager = null;
			}
			if (this.visibilityManagerZoom){
				this.visibilityManagerZoom.dispose();
				this.visibilityManagerZoom = null;
			}
			if (this.zoomView){
				this.zoomView.dispose();
				this.zoomView = null;
			}
			if (this.zoomInButton){
				this.zoomInButton.dispose();
				this.zoomInButton = null;
			}
			if (this.zoomOutButton){
				this.zoomOutButton.dispose();
				this.zoomOutButton = null;
			}
			if (this.zoomResetButton){
				this.zoomResetButton.dispose();
				this.zoomResetButton = null;
			}
			if (this.fullScreenButton){
				this.fullScreenButton.dispose();
				this.fullScreenButton = null;
			}
			if (this.closeButton){
				this.closeButton.dispose();
				this.closeButton = null;
			}
			if (this.mediaSet){
				this.mediaSet.dispose();
				this.mediaSet = null;
			}
			if (this.s7params){
				this.s7params.dispose();
				this.s7params = null;
			}
			if (this.container){
				var classes = [s7viewers.BasicZoomViewer.cssClassName,"s7touchinput","s7mouseinput","s7size_large","s7size_small","s7size_medium"];
				var cls = document.getElementById(this.containerId).className.split(' ');
				for(var i=0; i<classes.length;i++){
					var idx = cls.indexOf(classes[i]);
					if(idx != -1) { 
						cls.splice(idx, 1);
					}
				}
				document.getElementById(this.containerId).className = cls.join(' ');
				this.container.dispose();
				this.container = null;
			}
			this.handlers = [];
			this.isDisposed = true;
		};

		/**
		 * @private
		 */	
		s7viewers.BasicZoomViewer.prototype.updateOrientationMarkers = function (){
			if(!this.isOrientationMarkerForcedChanged){
				var newclass;
				if (window.innerWidth > window.innerHeight){
					newclass = "s7device_landscape";
				}else{
					newclass = "s7device_portrait";
				}			
				if (document.getElementById(this.containerId).className.indexOf(newclass) == -1) {
					this.setNewOrientationMarker(this.containerId, newclass);
					this.reloadInnerComponents();
				}
			}
		};
		
		s7viewers.BasicZoomViewer.prototype.setNewOrientationMarker = function (elm, inClass) {
			var cls = document.getElementById(elm).className;
			var re = /^(.*)(s7device_landscape|s7device_portrait)(.*)$/gi;
			var newcls;
			if(cls.match(re)){
				newcls = cls.replace(re,  "$1" + inClass + "$3");
			} else {
				newcls = cls + " " + inClass;
			}
			if(cls != newcls){
				document.getElementById(elm).className = newcls;
			}
		};

		s7viewers.BasicZoomViewer.prototype.forceDeviceOrientationMarker = function (marker){
			switch (marker){
				case "s7device_portrait":
				case "s7device_landscape":
					this.isOrientationMarkerForcedChanged = true;
					if (this.containerId) {
						this.setNewOrientationMarker(this.containerId, marker);
					}
					this.reloadInnerComponents();
					break;
				case null:
					this.isOrientationMarkerForcedChanged = false;
					this.updateOrientationMarkers();
					break;
				default:
					break;
			}
		};

		s7viewers.BasicZoomViewer.prototype.getURLParameter = function (name) {
			return decodeURIComponent((new RegExp('[?|&]' + name + '=([^&;]+?)(&|#|;|$)','gi').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
		};

		s7viewers.BasicZoomViewer.prototype.addClass = function (elm, inClass) {
			var cls = document.getElementById(elm).className.split(' ');
			if(cls.indexOf(inClass) == -1) {
				cls[cls.length] = inClass;
				document.getElementById(elm).className = cls.join(' ');
			}
		};

	})();		
}
