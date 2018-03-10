


	// New reduced region set: North America
	var northAmericaCode = "usa";
	var northAmericaArray = ['usa', 'can'];

	// New reduced region set: European Union
	var europeanUnionCode = "eur";
	var europeanUnionArray = ['bel', 'fra', 'deu', 'ita', 'lux', 'nld', 'dnk', 'irl', 'grc', 
				'prt', 'esp', 'aut', 'fin', 'swe', 'cyp', 'cze', 'est', 'hun', 
				'lva', 'ltu', 'mlt', 'pol', 'svk', 'svn', 'bgr', 'rou'];

	// New reduced region set: The rest of the world
	var restOfWorldCode = "Other";


	function rs_decode_media() {
		var ck = document.cookie + ';';
		var ret = "";
		var x = ck.indexOf('GU_revsci_media=');
		
		if (x > -1) {
			var media_data = ck.substring(x+16, ck.indexOf(';',x));
			ret = unescape(media_data);
		}
		
		return ret;
	}
	
	function rs_process_media() {
		var rs_cook = rs_decode_media();
		if (rs_cook != "") {
			rs_cook = rs_cook.split(';');
			for (var i = 0; i < rs_cook.length; i++) {
				var data = rs_cook[i].split('=');
				DM_addToLoc(data[0],data[1]);
			}
		}
	}

	function deduceCountry(actualCountry) {
		// append the Country code to page variable
		DM_addToLoc('country', matchToTargettedRegions(actualCountry));
		
		return;
	}

	function matchToTargettedRegions(countryCode) {
		if (existsInArray(countryCode, northAmericaArray)) {
			return northAmericaCode;
		}
		if (existsInArray(countryCode, europeanUnionArray)) {
			return europeanUnionCode;
		}
		if ("gbr" == countryCode) {
			return "gbr";
		}
		return restOfWorldCode;
	
	}

	function existsInArray(item, array) {
		for (var x = 0; x <= array.length; x++) {
			if (item == array[x]) {
				return true;
			}
		}
		return false;
	}

	