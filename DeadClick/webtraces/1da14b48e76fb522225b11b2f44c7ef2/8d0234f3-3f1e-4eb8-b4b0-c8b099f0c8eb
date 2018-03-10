// Copyright 2007 FreeWheel Media Inc.
var fwLib = {
	version:1.0,
	loadComplete:false,
	currentSwapIndex:0,
	fwJSLibsLoaded:function() 
	{
		return true;
	},
	flIntegration: {
		testFn:function()
		{	
			alert("FL Integration");
		},	       
		getElementsByClass:function(startNode, tagFilter, classFilter)
		{
			var arrElms = (tagFilter == "*" && startNode.all) ? startNode.all : startNode.getElementsByTagName(tagFilter);
			var arrRetElms = new Array();
			var arrRegExpClassNames = new Array();
			if(typeof classFilter == "object")
			{
				for(var i=0; i<classFilter.length; i++)
				{
					arrRegExpClassNames.push(new RegExp("(^|\\s)" + classFilter[i].replace(/\-/g, "\\-") + "(\\s|$)"));
				}
			}
			else
			{
				arrRegExpClassNames.push(new RegExp("(^|\\s)" + classFilter.replace(/\-/g, "\\-") + "(\\s|$)"));
			}
			var element;
			var matchesAll;
			for(var j=0; j<arrElms.length; j++)
			{
				element = arrElms[j];
				matchesAll = true;
				for(var k=0; k<arrRegExpClassNames.length; k++)
				{
					if(!arrRegExpClassNames[k].test(element.className))
					{
						matchesAll = false;
						break;
					}
				}
				if(matchesAll)
				{
					arrRetElms.push(element);
				}
			}
			return arrRetElms;
		},
		findPageSlots:function()
		{
			var ret = new Array();
			var id = "";
			var arr = this.getElementsByClass(document, "span", "_fwph");
			for(var i=0; i < arr.length; ++i)
			{
				id = arr[i].getAttribute("id");
				ret.push(id);
				var input = document.getElementById("_fw_input_" + id);
				ret.push(input.getAttribute("value"));
			}	
			return ret;
		},
		savedSlots: [],
		replacePageSlotInnerHtml:function(innerHTML, safeId, saveOrigin)
		{
			var parentContainer = document.getElementById(safeId);
			var originalContainer = document.getElementById("_fw_container_" + safeId);
			var adContainer = document.createElement('span');
			var isIE = navigator.appVersion.match(/\bMSIE\b/);
			//if (originalContainer.hasAttributes()) { //FIXME IE<=6 has no hasAttributes, assume true
			
			// remove slots created over the original ad already
			if(document.getElementById("_fw_container_" + safeId + "_new_" + fwLib.currentSwapIndex))
			{
				this.restorePageSlot(safeId);
			}
			
			var newSpanId = "_fw_container_" + safeId;
			if (saveOrigin) newSpanId += "_new_" + fwLib.currentSwapIndex;
			
			var attrs = originalContainer.attributes;
			for(var i=0; i<attrs.length; i++) {
				var name = attrs[i].name || attrs[i].nodeName;
				var value = attrs[i].value || attrs[i].nodeValue;
				if ( isIE && (!name || value === 'null' || value === 'false' || !value) ) continue;
				if ( name == "id") value = newSpanId;
				adContainer.setAttribute(name, value);
			}
			if (isIE) { //XXX IE treat style separately
				for (var i in originalContainer.style) {
					try {
						if (i=='content') continue; //XXX workaround IE8b1 crash
						adContainer.style[i] = originalContainer.style[i];
					} catch (e) {
					}
				}
			}
			if (saveOrigin){
				originalContainer.style.display = "none";
				parentContainer.appendChild( adContainer );
			}
			else {
				originalContainer.parentNode.replaceChild(adContainer, originalContainer);
			}
			adContainer.innerHTML = innerHTML;
			var fw_js = document.getElementById("_fw_container_js_" + safeId);
			if(fw_js){
				eval(fw_js.innerHTML); 
			}
		},
		restorePageSlot:function(safeId) {
			if(!safeId || !document.getElementById("_fw_container_" + safeId + "_new_" + fwLib.currentSwapIndex)) return;
			var adContainer = document.getElementById("_fw_container_" + safeId + "_new_" + fwLib.currentSwapIndex++);
			document.getElementById(safeId).removeChild( adContainer );
			
			var originalContainer = document.getElementById("_fw_container_" + safeId);
			originalContainer.style.display = "inline";
		},
		clearSavedPageSlots:function() { //TODO: should call this when document.unload at least in IE<=6, or there'll be leak
			for (var safeId in fwLib.flIntegration.savedSlots) {
				fwLib.flIntegration.savedSlots[safeId] = null;
			}
		},
		isPageLoaded:function()
		{
			return fwLib.loadComplete;
		},
		onLoadComplete:function()
		{
			fwLib.loadComplete = true;
		},
		addLoadEvent:function(func) 
		{
			var oldonload = window.onload;
			if (typeof window.onload != 'function') 
			{
				window.onload = func;
			}
			else 
			{
				window.onload = function() 
				{
					if (oldonload) {
						oldonload();
					}
					func();
				}
			}
		}
	}
}
fwLib.flIntegration.addLoadEvent(fwLib.flIntegration.onLoadComplete);
