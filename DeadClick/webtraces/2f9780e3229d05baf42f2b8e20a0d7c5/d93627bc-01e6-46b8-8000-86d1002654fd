
/* !-- Insterstitials -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

jQuery(function() {
	
	// Local Storage PageCount
	if(localStorage["pageCount"] == undefined) localStorage["pageCount"] = 0;
	else localStorage["pageCount"]++;

	// Session Storage PageCount
	if(sessionStorage["pageCount"] == undefined) sessionStorage["pageCount"] = 1;
	else sessionStorage["pageCount"]++;

	var lastVisit = Math.floor(Date.now() / 1000);
	if(localStorage["lastVisit"] != undefined) lastVisit = localStorage["lastVisit"];
	localStorage["lastVisit"] = Math.floor(Date.now() / 1000);

	var json = null;
	if(localStorage["interstitial"] == undefined) json = {};
	else json = JSON.parse(localStorage["interstitial"]);

	if(Interstitials.list.length > 0) {
		for(var i = 0; i < Interstitials.list.length; ++i) {
			var view = json[Interstitials.list[i].nid];
			var isNewUser = localStorage["pageCount"] == 0;
			var thisInt = Interstitials.list[i];

			/* Display Rules */
			var display = false;
			if(view != undefined) {
				// Reccuring interstitials
				if(view.count != undefined && view.count > 0) {
					if(thisInt.countVisit > 0 && localStorage["pageCount"] - view.count >= thisInt.countVisit)
						display = true;
					else if(thisInt.countDays > 0 && Math.floor(Date.now() / 1000) - lastVisit >= thisInt.countDays * (3600 * 24))
						display = true;
				}
			} else {
				// New interstitials
				var missingRequired = false;
				if(thisInt.vRequired.length > 0) {
					for(var j = 0; j < thisInt.vRequired.length; ++j) {
						var foundRequired = false;
						for(var interstitialId in json) {
							if(interstitialId == thisInt.vRequired[j]) {
								foundRequired = true;
								break;
							}
						}
						if(!foundRequired) {
							missingRequired = true;
							break;
						}
					}
				}

				if(!missingRequired) display = true;
			}

			/* PageViews Required */
			if(display) {
				display = sessionStorage["pageCount"] >= thisInt.pageCount;
			}

			/* Random Display Rate */
			if(display) {
				var randomRate = Math.random() * 100;
				display = randomRate <= thisInt.displayRate;
			}

			/* URL Referer */
			if(display && thisInt.referrer != "") {
				var relative = document.referrer.replace("http://" + document.domain, "");
				var wildcardCheck = true;
				if(thisInt.referrer.indexOf("*") != -1) {
					var regex = new RegExp("^" + thisInt.referrer.replace(/\*/g, ".*") + "$");
					wildcardCheck = !((document.referrer.match(regex) != null) || (relative.match(regex) != null));
				}

				if(
					document.referrer != thisInt.referrer &&
					relative != thisInt.referrer &&
					wildcardCheck
				) display = false;
			}

			/* Image Trigger */
			if(display && thisInt.vTriggerImage.length > 0) {
				display = false;
				for(var j = 0; j < thisInt.vTriggerImage.length; ++j) {
					if(document.querySelector("img[src*='" +thisInt.vTriggerImage[j]+ "'], [style*=background][style*='" +thisInt.vTriggerImage[j]+ "']") != null) {
						display = true;
						break;
					}
				}
			}


			/* Render */
			if(display && (isNewUser == thisInt.newUserOnly)) {
				var preheat = false;
				if(thisInt.delayOpen > 0) {
					setTimeout(function(){ renderInterstitial(thisInt.nid) }, (thisInt.delayOpen * 1000));
					preheat = true;
				}
				if(thisInt.delayClose > 0) {
					setTimeout(function(){ jQuery.fancybox.close(); }, ((thisInt.delayOpen + thisInt.delayClose) * 1000));
				}

				if(!preheat) renderInterstitial(thisInt.nid);
				break;
			}
		}
	}
	
	function renderInterstitial(nid) {
		var json = null;
		if(localStorage["interstitial"] == undefined) json = {};
		else json = JSON.parse(localStorage["interstitial"]);

		json[nid] = {
			count: localStorage["pageCount"],
			time: Math.floor(Date.now() / 1000)
		};
		localStorage["interstitial"] = JSON.stringify(json);
		
		if(!ark.locationQuery.interstitials) {
			
			/* Fancybox Display */
			jQuery.fancybox({
				autoSize    : false,
				closeBtn	: false,
				padding		: 0, 
				margin		: 0,
		        width       : '100%',
		        height      : '100%',
				href		: '/wiz_interstitial/'+ Interstitials.list[i].nid,
				type		: 'ajax',
				beforeShow  : function() {
					jQuery(".fancybox-wrap").addClass("fancybox-interstitials");
					handleVideoContent(jQuery(".fancybox-wrap")[0]);
					ark.isMobile() ? jQuery("body").addClass("mobile-lock") : null;
				},
				afterClose  : function() {
					jQuery("body").removeClass("mobile-lock");
				},
				afterShow: function () {
					jQuery(".close-btn").click(function(){
						jQuery.fancybox.close();
						return false;
					});
					jQuery("#interstitials").click(function(e){
						
						if (!jQuery(e.target).is('#interstitials *')) {
							jQuery.fancybox.close();
						} 
						
						e.stopPropagation();
					});
				}
			});
		}
	}
	
	
	/* -- Replaces video content by poster image on mobile devices -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function handleVideoContent(_html) {
		if ( ark.isMobile() ) {
			var _videoNodes = _html.querySelectorAll("video");
			if (_videoNodes) {
				var _videoPoster = null,
					_videoImage  = null,
					_i           = null;
				
				for ( _i = _videoNodes.length - 1; _i >= 0; _i-- ) {
					if ( _videoNodes[_i].querySelector("img") !== null ) {
						_videoPoster = _videoNodes[_i].querySelector("img").getAttribute("src");
					} else if (_videoNodes[_i].getAttribute("poster") !== null) {
						_videoPoster = _videoNodes[_i].getAttribute("poster");
					}
					
					if ( _videoPoster ) {
						_videoImage = document.createElement("img");
						_videoImage.setAttribute("src", _videoPoster);
						_videoImage.setAttribute("alt", "");
						_videoImage.classList.add("mobile-video-poster");

						_videoNodes[_i].parentNode.insertBefore(_videoImage, _videoNodes[_i]);
						_videoNodes[_i].parentNode.removeChild(_videoNodes[_i]);
					}
				}
			}
		}
	}
});
