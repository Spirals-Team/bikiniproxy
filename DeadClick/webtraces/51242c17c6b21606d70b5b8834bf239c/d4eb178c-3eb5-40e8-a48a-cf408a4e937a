function catSetSelectedCSSItem(menuid) {
    var _host = document.location.host;
	var _url = document.location.href.substring(document.location.href.indexOf(_host)+_host.length).toLowerCase();
	var _anchor;
    var _parent;
    var _class;
    var _image;
    var _anchors = document.getElementById(menuid).getElementsByTagName('a');

	var ie = false;
	var detect = navigator.userAgent.toLowerCase();	
	if (detect.indexOf('msie') > 0) ie = true;
	    
	if (_url.indexOf('?') != -1) _url = _url.substring(0,_url.indexOf('?')); // must remove query variables

    for (var i=0;i<_anchors.length;i++) {
	    _anchor = _anchors[i].href.substring(document.location.href.indexOf(_host)+_host.length).toLowerCase();
	    if (_anchor == _url) {
            _image = _anchors[i].getAttribute('selimg'); // sel img is on anchor
			if (_image)
			    _anchors[i].style.background = "url("+_image+")";					
		    _parent = _anchors[i].parentNode; // get li node
		    while (_parent) {
			    if (_parent.id == menuid) break; // don't go up infinitely
			    if (_parent.tagName == "LI") {
				    _class = _parent.getAttribute('selcss'); // sel css is on li
				    if (_class)				
					    _parent.className = _class; 
				    else { // logic below as per partner req't
				        if (ie){
                                var ver = getInternetExplorerVersion();
                                if (ver > -1) {
                                    if (ver >= 8.0)
                                        _class = _parent.getAttribute('class'); 
                                    else
                                        _class = _parent.getAttribute('className'); 
                                }
                            } 				            
				        else
				            _class = _parent.getAttribute('class'); 
				            
				        if (_class)
					        _parent.className = _class+" selected";	
				        else
				            _parent.className = "selected";	
					    //when you mouse over the selected class get removed. fix..
				        _parent.onmouseout = function(val) {
				            return function() {
				                if (val)
				                    this.className = val + " selected";
				                else
				                    this.className = "selected";
				            }
				        } (_class);					            
				        
					}
			    }
			    _parent = _parent.parentNode;
		    }
		    break;
	    }
	}
}


function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}