
(function (_window, _document) {
	if (!_window.Webtrends) {
		return;
	}

	var QBertOverlay = {
		plugMap: {},
		is_null_or_undef: function (obj) {
			return !(typeof obj != 'undefined' && obj != null);
		},
		set_handler: function (obj, eventname, handler) {
			if (QBertOverlay.is_null_or_undef(obj.addEventListener)) {
				obj.detachEvent('on' + eventname, handler);
				obj.attachEvent('on' + eventname, handler);
			}
			else {
				obj.removeEventListener(eventname, handler, false);
				obj.addEventListener(eventname, handler, false);
			}
		},
		normalize_event: function (e) {
			// Find correct target object
			var eobj = null;

			if (e.target) {
				eobj = e.target;
			}
			else {
				eobj = e.srcElement;
			}

			if (QBertOverlay.is_null_or_undef(eobj)) {
				eobj = window
			}

			// Find correct x/y coords
			var ex = -1;
			var ey = -1;

			if (e.pageX) {
				ex = e.pageX;
				ey = e.pageY;
			}
			else if (e.clientX) {
				var metricsObj = QBertOverlay.get_metrics();
				ex = e.clientX + metricsObj.sl;
				ey = e.clientY + metricsObj.st;
			}

			// Bug: ex and ey must be ints
			ex = parseInt(ex);
			ey = parseInt(ey);

			// Find right click
			// Note: This only works as long as Firefox/Safari/Chrome provide event.which property on mouse events
			//  Oddly, IE9 is also providing event.which currently
			var erc = false;

			if (!QBertOverlay.is_null_or_undef(e.which)) // Firefox/Safari/Chrome
			{
				erc = (e.which == 3);
			}
			else if (!QBertOverlay.is_null_or_undef(e.button)) // IE
			{
				erc = (e.button == 2);
			}

			// Create object
			var outEvent = new Object();

			outEvent.obj = eobj;
			outEvent.et = e.type;
			outEvent.r = e.repeat;
			outEvent.kc = e.keyCode;
			outEvent.ks = e.shiftKey;
			outEvent.x = ex;
			outEvent.y = ey;
			outEvent.rc = erc;

			return outEvent;
		},
		get_metrics: function () {
			function get_metric(method) {
				if (!QBertOverlay.is_null_or_undef(document.documentElement)) {
					return document.documentElement[method];
				}
				else if (!QBertOverlay.is_null_or_undef(document.body)) {
					return document.body[method];
				}
				else {
					return -1;
				}
			}

			var metricsObj = new Object();

			// winWidth
			metricsObj.ww = get_metric('clientWidth');
			// winHeight
			metricsObj.wh = get_metric('clientHeight');
			// docWidth
			metricsObj.dw = get_metric('scrollWidth');
			// docHeight
			metricsObj.dh = get_metric('scrollHeight');
			// scrollLeft
			metricsObj.sl = get_metric('scrollLeft');
			// scrollTop
			metricsObj.st = get_metric('scrollTop');

			// Fix for chrome bug where document.documentElement.scrollTop may read zero
			if (metricsObj.st == 0 && !QBertOverlay.is_null_or_undef(document.body)) {
				metricsObj.st = document.body['scrollTop'];
			}

			return metricsObj;
		},
		get_linked_parent: function (obj) {
			var parObj = obj;
			var linkObj = null;

			while (!QBertOverlay.is_null_or_undef(parObj)) {
				if (!QBertOverlay.is_null_or_undef(parObj.tagName) && parObj.tagName == 'A') {
					linkObj = parObj;
				}

				parObj = parObj.parentNode;
			}

			return linkObj;
		},
		find_parent_with_attr: function (obj, attrName) {
			var parObj = obj;

			while (parObj != null) {

				if (!parObj.getAttribute) {
					return null;
				}

				var attrVal = parObj.getAttribute(attrName);

				if (!QBertOverlay.is_null_or_undef(attrVal) && attrVal != '') {
					return attrVal;
				}

				parObj = parObj.parentNode;
			}

			return null;
		},
		hm_scroll_event: function (tag, o_evt) {
			var metrics = QBertOverlay.get_metrics();

			var scrollPixel = Number(metrics.st) + Number(metrics.wh);

			if (scrollPixel > window.qbertMaxScrollPixel) {
				window.qbertMaxScrollPixel = scrollPixel;
			}
		},
		hm_click_event: function (tag, o_evt) {
			var tagObj = QBertOverlay.plugMap[tag.dcssID];
			if (!tagObj) {
				return;
			}

			e = o_evt.event || _window.event;

			var n_evt = QBertOverlay.normalize_event(e);
			var metrics = QBertOverlay.get_metrics();

			var x = n_evt.x; // X coord
			var y = n_evt.y; // Y coord
			var width = metrics.dw;	// doc width
			var height = metrics.dh; // doc height

			// reject bad/impossible x/y coords
			if (x < 0 || x > width || y < 0 || y > height) {
				return;
			}

			if (!tagObj.mTrackOptions["args"]) {
				tagObj.mTrackOptions["args"] = {};
			}

			// Metrics - use the hm_ prefix for compatibility with existing Webtrends Heatmap plugin
			tagObj.mTrackOptions["args"]["WT.dl"] = "250";
			tagObj.mTrackOptions["args"]["WT.hm_x"] = x;
			tagObj.mTrackOptions["args"]["WT.hm_y"] = y;
			tagObj.mTrackOptions["args"]["WT.hm_w"] = width;
			tagObj.mTrackOptions["args"]["WT.hm_h"] = height;

			// Object info
			if (!QBertOverlay.is_null_or_undef(n_evt.obj.tagName)) {
				tagObj.mTrackOptions["args"]["WT.hm_objTag"] = n_evt.obj.tagName;

				if (!QBertOverlay.is_null_or_undef(n_evt.obj.id)) {
					tagObj.mTrackOptions["args"]["WT.hm_objId"] = n_evt.obj.id;
				}

				if (!QBertOverlay.is_null_or_undef(n_evt.obj.className)) {
					tagObj.mTrackOptions["args"]["WT.hm_objClass"] = n_evt.obj.className;
				}
			}

			// Link info
			var linkedParent = QBertOverlay.get_linked_parent(n_evt.obj);
			if (linkedParent == null) {
				tagObj.mTrackOptions["args"]["WT.hm_isLink"] = 'no';
			}
			else {
				tagObj.mTrackOptions["args"]["WT.hm_isLink"] = 'yes';
				tagObj.mTrackOptions["args"]["WT.hm_linkDest"] = String(linkedParent.getAttribute('href'));

				if (!QBertOverlay.is_null_or_undef(linkedParent.id)) {
					tagObj.mTrackOptions["args"]["WT.hm_linkId"] = String(linkedParent.id);
				}

				if (!QBertOverlay.is_null_or_undef(linkedParent.className)) {
					tagObj.mTrackOptions["args"]["WT.hm_linkClass"] = String(linkedParent.className);
				}
			}

			// par class & id
			var parClass = QBertOverlay.find_parent_with_attr(n_evt.obj, 'class');
			if (parClass != null) {
				tagObj.mTrackOptions["args"]["WT.hm_parClass"] = String(parClass);
			}

			var parId = QBertOverlay.find_parent_with_attr(n_evt.obj, 'id');
			if (parId != null) {
				tagObj.mTrackOptions["args"]["WT.hm_parId"] = String(parId);
			}

			// scroll info
			tagObj.mTrackOptions["args"]["WT.hm_maxScrollPixel"] = window.qbertMaxScrollPixel;

			//tagObj.dcsMultiTrack(hm_data);
			tagObj.dcsMultiTrack(tagObj.mTrackOptions);
		},
		/*callback for register plug, which if fired when the main tag is ready for collection to begin.*/
		hm_loader: function (tag, plugin) {
			if (plugin['filter'] && plugin['filter']()) {
				return;
			}

			var tagObj = new Webtrends.dcs();
			var config = {
				dcsid: ((plugin["dcsid"]) ? plugin["dcsid"] : tag["dcsid"]),
				domain: ((plugin["domain"]) ? plugin["domain"] : "scs.webtrends.com"),
				timezone: tag['timezone'],
				i18n: tag['i18n'],
				vtid: tag['vtid'],
				enabled: tag['enabled'],
				privateFlag: true
			};

			if (tag['FPCConfig']) {
				var FPCConfig = {};
				var TPCConfig = {};

				FPCConfig['enabled'] = tag['FPCConfig']['enabled'];
				FPCConfig['name'] = tag['FPCConfig']['name'];
				FPCConfig['domain'] = tag['FPCConfig']['domain'];
				FPCConfig['expires'] = tag['FPCConfig']['expiry'];

				TPCConfig['enabled'] = tag['enabled'];
				TPCConfig['cfgType'] = tag['cfgType'];

				config['FPCConfig'] = FPCConfig;
				config['TPCConfig'] = TPCConfig;
			}
			else {
				config['fpc'] = tag['fpc'];
				config['fpcdom'] = tag['fpcdom'];
				config['cookieexpires'] = tag['cookieExp'];
			}

			tagObj.init(config);

			QBertOverlay.plugMap[tag.dcssID] = tagObj;

			if (plugin['transform']) {
				Webtrends.addTransform(plugin['transform'], "all", tagObj);
			}

			//QBertOverlay.set_handler(document, 'mouseup', QBertOverlay.hm_click_event);
			Webtrends.bindEvent("wtmouseup", QBertOverlay.hm_click_event, tag);

			// Set up scroll tracking
			window.qbertMaxScrollPixel = 0;
			window.qbertMaxScrollPercent = 0;
			QBertOverlay.set_handler(window, 'scroll', QBertOverlay.hm_scroll_event);
			QBertOverlay.hm_scroll_event();

			//Added for QA - This lets a user specify a set of multiTrack options that are used
			//for the heatmap multiTrack hit
			if (plugin["mTrackOptions"]) {
				tagObj.mTrackOptions = plugin["mTrackOptions"];
			}
			else {
				tagObj.mTrackOptions = {};
			}
		}
	};
	_window['QBertOverlay'] = QBertOverlay;
	/*register the plugin and pass our callback*/
	Webtrends.registerPlugin('hm', QBertOverlay.hm_loader);

})(window, window.document);
