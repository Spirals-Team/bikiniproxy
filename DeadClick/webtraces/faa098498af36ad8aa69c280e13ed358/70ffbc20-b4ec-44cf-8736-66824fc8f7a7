(function() {
		if(CNBC_Settings && CNBC_Settings.pageNodeId == 100003784) {
			return;
		}
		var count = 0;
		var timer = setInterval(function(){		
			console.log(count);
			if(count > 60 || (window.PARSELY && PARSELY.config && PARSELY.config.parsely_site_uuid) ) {
				clearInterval(timer);
				profileBeacon();
			}
			count++;
		}, 1000);

    function profileBeacon() {
    	var uuid = (window.PARSELY && PARSELY.config && PARSELY.config.parsely_site_uuid) ? PARSELY.config.parsely_site_uuid : null;
	    if (!uuid) {return}
	    
	    var urlArray = window.location.href.split('?');
	    var url = urlArray[0];
	  	var urlPrams = [];

	  	if (CNBC_Settings.templateName == "quote_custom_redesign") {

	  		urlArray[1].split('&').map(function(val) {
	  			if(val.indexOf("symbol=") == 0) {
	  				urlPrams.push(val);
	  			}
	  		});

	  		url += "?" + urlPrams[0].toLocaleLowerCase();
	  	}

		  var apikey = CNBC_Settings.baseurls.cnbc_base_host || "cnbc.com",
		    parsely_base = "https://api.parsely.com/v2/profile?",
		    beacon = new Image();
		  beacon.src = parsely_base + "apikey=" + apikey + "&url=" + encodeURIComponent(url) + "&uuid=" + uuid;
    };
})();