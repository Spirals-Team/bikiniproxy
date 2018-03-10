if(typeof ZERG == "undefined") {
var ZERG = {};
}
ZERG.zergInterval = false;
ZERG.gebcn = (typeof document['getElementsByClassName'] == "function");
if ( typeof ZERG['stack'] === "undefined" ) {
	ZERG['stack'] = [];
}
ZERG.loadNextWidget = function() {
	if ( typeof ZERG['running'] === "undefined" ) {
		ZERG['running'] = 1;
	} else if ( ZERG['running'] ) {
		setTimeout( ZERG.loadNextWidget, 200 );
		return false;
	} else if ( ZERG['running'] == 0 ) {
		ZERG['running'] = 1;
	}
	var widget = ZERG['stack'].shift();
	if ( typeof( widget.zergLoadWidget ) === "function") {
		widget.zergLoadWidget();
	}
};
ZERG.infiniteZerg = function( poll ) {
    var widgets = [];
    var lastData = {};
    var dupeCount = 0;
    var dupeTryLimit = 5;

	var initStack = ZERG.stack.length;

    if ( ZERG.gebcn ) {
        widgets = document.getElementsByClassName( "zergnet-widget" );
    } else {
        var qsa = (typeof document['querySelectorAll'] == "function");
        if ( !qsa ) {
            var d=document, s=d.createStyleSheet();
            d.querySelectorAll=function(r,c,i,j,a){a=d.all,c=[],r=r.replace(/\[for\b/gi,'[htmlFor').split(',');for(i=r.length;i--;){s.addRule(r[i],'k:v');for(j=a.length;j--;)a[j].currentStyle.k&&c.push(a[j]);s.removeRule(0)}return c};
        }
        widgets = document.querySelectorAll(".zergnet-widget");
    }

    for ( var i = 0; i < widgets.length; i++ ) {
        var w = widgets[i];
        var widgetId = parseInt( w.getAttribute("data-zerg-widget-id") );

        if ( typeof( lastData[widgetId] ) === "undefined" ) {
            lastData[widgetId] = "";
        }

		if ( typeof( ZERG.counters ) === "undefined" ) {
			ZERG.counters = {};
		}
		if ( typeof( ZERG.counters[widgetId] ) === "undefined" ) {
			ZERG.counters[widgetId] = 0;
		}

        if ( w.className.indexOf( "widget-loaded" ) == "-1" && widgetId > 0 && typeof( w.zergLoadWidget ) === "undefined" ) {
            w.zergLoadWidget = function() {
                if ( typeof( this.getAttribute ) === "function" ) {
                    var widget = this;
                    var randcallback = Math.floor((Math.random() * 9999999) + 1);
                    var timestamp = new Date().getTime();
                    var JSONP = (function(){var a=randcallback,c,f,b,d=this;function e(j){var i=document.createElement("script"),h=false;i.src=j;i.async=true;i.onload=i.onreadystatechange=function(){if(!h&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){h=true;i.onload=i.onreadystatechange=null;if(i&&i.parentNode){i.parentNode.removeChild(i)}}};if(!c){c=document.getElementsByTagName("head")[0]}c.appendChild(i)}function g(h,j,k){f="?";j=j||{};for(b in j){if(j.hasOwnProperty(b)){f+=encodeURIComponent(b)+"="+encodeURIComponent(j[b])+"&"}}var i="json"+(++a);d[i]=function(l){k(l);try{delete d[i]}catch(m){}d[i]=null;};e(h+f+"callback="+i);return i}return{get:g}}());
                    var widgetId = widget.getAttribute("data-zerg-widget-id");

                    JSONP.get( 'http://www.zergnet.com/output.js', {id:widgetId,time:timestamp,c:ZERG.counters[widgetId],t:"inf-multi"}, function(data){
                        if ( data == lastData[widgetId] && dupeCount < dupeTryLimit ) {
                            dupeCount++;
                            widget.zergLoadWidget();
                            return;
                        }
						ZERG['running'] = 0;
                        if (typeof window.opera != 'undefined') {
                            document.write(data);
                        } else {
                            widget.innerHTML = data;
                            lastData[widgetId] = data;
                        }
						if ( ZERG['stack'].length ) {
							ZERG.loadNextWidget();
						}
                    });
					ZERG.counters[widgetId]++;
                }
            };

            w.className += " widget-loaded";

	        ZERG.stack.push(w);
        }
    }

	if ( initStack == 0 && ZERG.stack.length > 0 ) {
		ZERG.loadNextWidget();
	}

    ZERG.zergInterval = false;
    if ( poll === true ) {
        ZERG.zergInterval = setTimeout( ZERG.infiniteZerg, 1000 );
    }
};
ZERG.triggerInfiniteZerg = function() {
    if ( !ZERG.zergInterval ) {
        ZERG.zergInterval = setTimeout( ZERG.infiniteZerg, 500 );
    }
};
ZERG.init = function() {
    if (window.addEventListener) { // W3C DOM
        window.addEventListener("scroll",ZERG.triggerInfiniteZerg,false);
		ZERG.triggerInfiniteZerg();
	} else if (window.attachEvent) { // IE DOM
		window.attachEvent("onscroll", ZERG.triggerInfiniteZerg);
		ZERG.triggerInfiniteZerg();
	} else {
        ZERG.infiniteZerg( true );
    }
};
ZERG.init();