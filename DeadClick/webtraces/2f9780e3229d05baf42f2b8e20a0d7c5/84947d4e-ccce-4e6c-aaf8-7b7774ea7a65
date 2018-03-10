/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* -- Geo Blocker -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

(function(){


/* !-- Global Variables -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	var	geoLocationObject = window.akamai_esi_geolocation,
		dataAttributes = {
			redirection : "data-geo-blocking-redirection",
			notice      : "data-geo-blocking-notice"
		};




/* !-- Static Methods -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	GeoBlocker.block = function() {
		redirect();
		notify();
		window.scrollBy(0, 1);
	};




/* !-- Constructor -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function GeoBlocker() {}




/* !-- Private Methods -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	
	/* -- Redirects the user -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function redirect() {
		var elements = document.querySelectorAll("[" + dataAttributes.redirection + "]"),
			rules,
			i, j;
		
		loop_elements:
		for ( i = 0; i < elements.length; i++ ) {
			if ( geoLocationObject ) {
				try {
					rules = JSON.parse(elements[i].getAttribute(dataAttributes.redirection));
					
					for ( j = 0; j < rules.countries.length; j++ ) {
						if ( rules.countries[j].toUpperCase() === geoLocationObject.country_code.toUpperCase() && rules.url ) {
							window.location.href = rules.url;
							break loop_elements;
						}
					}
					
				} catch(error) {
					console.error(error);
				}
			}
			
			elements[i].removeAttribute(dataAttributes.redirection);
		}
	}
	
	
	
	
	/* -- Notifies the user -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function notify() {
		var elements = document.querySelectorAll("[" + dataAttributes.notice + "]"),
			rules,
			i, j;
		
		for ( i = 0; i < elements.length; i++ ) {
			if ( geoLocationObject ) {
				try {
					rules = JSON.parse(elements[i].getAttribute(dataAttributes.notice));
					
					for ( j = 0; j < rules.countries.length; j++ ) {
						if ( rules.countries[j].toUpperCase() === geoLocationObject.country_code.toUpperCase() && rules.text && rules.text.value ) {
							
							while ( elements[i].firstChild ) {
								elements[i].removeChild(elements[i].firstChild);
							}
							
							elements[i].innerHTML = rules.text.value;

							break;
						}
					}
					
				} catch(error) {
					console.error(error);
				}
			}
			
			elements[i].removeAttribute(dataAttributes.notice);
		}
	}




/* -- Adds the object -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	if (!window.ark) {
		window.ark = {};
	}
	
	if (!window.ark.GeoBlocker) {
		window.ark.GeoBlocker = GeoBlocker;
	}
	
	document.addEventListener("DOMContentLoaded", function(){
		GeoBlocker.block();
	});


}());