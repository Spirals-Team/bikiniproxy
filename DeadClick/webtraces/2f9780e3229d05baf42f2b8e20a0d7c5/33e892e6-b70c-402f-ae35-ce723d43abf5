// Arketype Object
if (!window.ark) window.ark = new Object();


var $ = window.jQuery.noConflict();


/* !-- Global page load handler -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function globalPageLoadHandler() {
			
	window.ark.activateCurrentMenuButton();
	window.ark.setBoxCarousel();
	window.ark.expandLiveSteams();
	window.ark.checkLiveStreamsHeight();
	window.ark.mediasGallery();
	
	// Init Events Carousels
	window.ark.setEventsCarousel();
	
	// Set body class if windows platform and ie
	window.ark.detectUserPlatformNavigator();
	
	// Adds a "loaded" class to the body
	if ( !(/loaded/i).test(document.body.className) )
		document.body.className = "loaded" + (document.body.className.length ? " " + document.body.className : "");
	
	// Mobile menu button
	window.ark.addEvt(document.getElementById("menu-button"), "click", function() { window.ark.MobileMenu.toggle(); });
	window.ark.addEvt(document.body, "click", function(e) { 
			var node = e.target;
			var shouldClose = true;
			
			while (node) {
				if ( node.id == "menu" ) {
					shouldClose = false;
					node = null;
				} else
					node = node.parentNode;
			}
			
			if ( shouldClose )
				window.ark.MobileMenu.close();
		});
	
	$("#menu .accordion-icon").bind("click", function() {
		$(this).parent().toggleClass("expanded");
	});
	

	$(".rss-selector").click(function(){
		
		$(".rss-selector").not(this).removeClass("opened");
	    
	    $(this).toggleClass("opened");
	    
	    $("ul", this).css("top", $(this).height());
	});
	
	$(document).mouseup(function (e){    
		
		var container = $(".rss-selector");    
		
		if (!container.is(e.target) //if the target of the click isn't the container...        
			&& container.has(e.target).length === 0) // ... nor a descendant of the container    
		{
		
			container.removeClass("opened");    
		
		}
    
    });
	
	
	$("figure.video").click(function(){
		var videoID = $(this).data("video-id");
		var currentPlaceHolder = $(".video-container",this);
		
		if($(this).data("video-type") == "twitch" || $(this).data("video-type") == "twitch-vod") {
			var type = $(this).data("video-type");
			var href = "";
			if(type == "twitch") href = "http://player.twitch.tv/?autoplay=true&channel=" + videoID;
			else if(type == "twitch-vod") href = "http://player.twitch.tv/?autoplay=true&video=v" + videoID;
			
			$(currentPlaceHolder).html('<iframe id="tch_' +videoID+ '" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="no" src="' +href+ '"></iframe>");');
	    } else {
	     	
	     	$(currentPlaceHolder).html('<iframe id="player_'+videoID+'" src="//www.youtube.com/embed/'+videoID+'?enablejsapi=1&rel=0&autoplay=1&autohide=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');
	
	        new window.YT.Player('player_'+videoID, {
		        
	            events: {
	                'onStateChange': function (event) {
						if (event.data == window.YT.PlayerState.ENDED) {
							$('#player_'+videoID).parent().empty();
						}
					}
				}
	        });
	        
	        window.YT.playVideo();
		    window.YT.mute();
	        
	     }
	});
	
	
	//Open lightbox for Featured Livestream Video
	$("#featured-livestream-video").click(function() {
		
		var videoID		= $(this).data("videoid");
		var autoPlay	= $(this).data("autoplay");
		
		$.fancybox.open({
			padding : 0,
			href:'//www.youtube.com/embed/'+ videoID +'?enablejsapi=1&rel=0&autohide=1&showinfo=0&autoplay=' + autoPlay,
			type: 'iframe',
			beforeShow  : function() {
				// Find the iframe ID
				var id = $.fancybox.inner.find('iframe').attr('id');
				
				//If player is autoplay mute the video
				var player = new window.YT.Player(id, {
					events: {
		                'onStateChange': function () {
							if(autoPlay == 1) {
								player.mute();
							}
						}
					}
				});
				
						
			}
		});
		
	});
	
	
	// Sets the articles lists
	var articleLists = document.getElementsByClassName("article-list"),
		articles     = null,
		clearElement = null,
		clearClass   = null;
	
	for ( var i = 0; i < articleLists.length; i++ ) {
		articles = articleLists[i].getElementsByClassName("article-preview");
		for ( var j = 0; j < articles.length; j++ ) {
			clearClass = "clear " + (j%2 == 0 ? "odd" : "even") + ((j+1)%3 == 0 ? " clear-3" : "");
			
			clearElement = document.createElement("div");
			clearElement.className = clearClass;
			
			if (j+1 < articles.length)
				articleLists[i].insertBefore(clearElement, articles[j+1]);
			else
				articleLists[i].appendChild(clearElement);
		}
	}
	
	
	
	// Adds a click event on articles previews
	var articlePreviews = document.getElementsByClassName("article-preview");
	for ( i = 0; i < articlePreviews.length; i++ ) {
		if ( !(/audio\-article/).test(articlePreviews[i].className) ) {
			articlePreviews[i].onclick = function(evt) { 
				if ( !evt ) evt = new Event();
				if (evt.preventDefault) evt.preventDefault();
				evt.returnValue = false;
				
				location.href = this.getElementsByTagName("a")[0].href;
				
				return false;
			};
		}
	}
	
	
	//Digital games box click
	$(".one-per-column, .two-per-column").click(function(){
		location.href = $(this).find("a").attr("href");
	});
	

	window.ark.windowResize();

	
	//Smooth Scrolling to top
	$(function() {
		$('a[href=#page]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 500);
					return false;
					}
				}
		});
	});	


	//Back to top appear on scroll
	$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 300) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});	
	
	
	// Removes the video headers on mobile devices
	function removeVideoHeadersOnMobile() {
		if ( window.ark.isMobile() ) {
			var videoHeaders = document.querySelectorAll("video.video-header"),
				imageReplacement;
			
			for ( var i = 0; i < videoHeaders.length; i++ ) {
				imageReplacement = videoHeaders[i].getElementsByTagName("img");
				if ( imageReplacement.length ) {
					imageReplacement = imageReplacement[0];
				} else if ( videoHeaders[i].getAttribute("poster") ) {
					imageReplacement = document.createElement("img");
					imageReplacement.setAttribute("src", videoHeaders[i].getAttribute("poster"));
					imageReplacement.setAttribute("alt", "");
				} else {
					imageReplacement = null;
				}
				
				if (imageReplacement) {
					videoHeaders[i].parentNode.insertBefore(imageReplacement, videoHeaders[i]);
					videoHeaders[i].parentNode.removeChild(videoHeaders[i]);
				}
			}
		}
	}
	
	removeVideoHeadersOnMobile();
}



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */



/* !-- Handling window platform and if user is on IE -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.detectUserPlatformNavigator = function() {
	    var ua = window.navigator.userAgent;
	    var old_ie = ua.indexOf('MSIE ');
	    var new_ie = ua.indexOf('Trident/');
		
		//Windows platform
		if (navigator.appVersion.indexOf("Win")   != -1) {
			$("body").addClass("windows");
		}
	
		//IE user
	    if ((old_ie > -1) || (new_ie > -1)) {
	        $("body").addClass("ie");
	    }
}



/* !-- Carousel Box's -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.setBoxCarousel = function() {
	
	$.each($(".carousel-wrapper"), function() {
	
		var boxCarousel = $(this);
			
		boxCarousel.find(".box-carousel").carouFredSel({
			responsive	: true,
			height		: "variable",
			prev		: {
	       			button  : function(){
	       				return boxCarousel.find('.previous');
		        }
		    },
		    next    	: {
					button  : function(){
		            	return boxCarousel.find('.next');
				}
		    },
			pagination : boxCarousel.find(".pagination"),
			items      : { width: 1, height: '100%', visible: 1 },
			auto       : false,
			swipe      : { onTouch : true }
		});
	});
	
	
}



/* !-- Check Resize Window and apply class on elements -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.windowResize = function() {
	// Detect width screen
	var screenMode = {
			tabletPortrait : $(window).width() < 1023,
			mobile         : $(window).width() < 767
		}
	
	$("#submenu")[screenMode.tabletPortrait ? "addClass" : "removeClass"]("mobile");
	
	// When user click on box content enable redirection from the child link href
	$("#page-header .intro, .homepage .intro, .article-preview:not(.audio-article) .content, .media-resources article").each(function() {
		if ( $(this).find("a").length ) {
			if (screenMode.mobile) {
				$(this).click(function() {
					$(this).css({ cursor: "pointer" });
					location.href = $(this).find("a").eq(0).attr("href");
				});
			} else
				$(this).click(function() {});
		} else
			$(this)[screenMode.mobile ? "addClass" : "removeClass"]("no-link");
	});
	
	$('#submenu.mobile').removeClass('open');
	
};	


/* -- Mobile Menu Button Handler -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
(function(window){
	
	function MobileMenu() { }
	
	MobileMenu.viewport = function () { return document.getElementById("viewport"); }
	MobileMenu.cssClass = function () { return "mobile-menu-opened"; }
	
	MobileMenu.cssReg = function() {
		return RegExp(MobileMenu.cssClass(), "gi");
	};
	
	MobileMenu.isOpened = function() {
		return MobileMenu.cssReg().test(MobileMenu.viewport().className);
	}
	
	MobileMenu.open = function() {
		if (!MobileMenu.isOpened()) {
			MobileMenu.viewport().className = MobileMenu.cssClass() + " " + MobileMenu.viewport().className;
		}
	}
	
	MobileMenu.close = function() {
		MobileMenu.viewport().className = MobileMenu.viewport().className.replace(MobileMenu.cssReg(), "");
	}
	
	MobileMenu.toggle = function() {
		if (!MobileMenu.isOpened())
			MobileMenu.open();
		else
			MobileMenu.close();
	}
	
	if (!window.ark) window.ark = new Object();
	
	if (!window.ark.MobileMenu)
		window.ark.MobileMenu = MobileMenu;


}(window));




/* !-- Initializes URL shortener -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//function googleClientApiLoad() {}




/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */




/* !-- Console fallback -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
(function(window){
	
	function ConsoleFallback() { }
	
	function alertMessage(args) {
		var str = "";
		for ( var i = 0; i < args.length; i++ ) {
			str += args[i];
			if ( i < args.length - 1)
				str += "\n- - - - - - - - - - - - - - - - - - - - - -\n";
		}
		alert(str);
	}
	
	ConsoleFallback.prototype.log            = function() { alertMessage(arguments); }
	ConsoleFallback.prototype.warn           = function() { alertMessage(arguments); }
	ConsoleFallback.prototype.error          = function() { alertMessage(arguments); }
	ConsoleFallback.prototype.group          = function() { alertMessage(arguments); }
	ConsoleFallback.prototype.groupEnd       = function() { alertMessage(arguments); }
	ConsoleFallback.prototype.groupCollapsed = function() { alertMessage(arguments); }
	
	
	if (!window.console)
		window.console = new ConsoleFallback();
	
}(window));




/* !-- String trim method fallback -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
if ( !String.prototype.trim ) {
	String.prototype.trim = function () {
		return this.replace(/^\s+|\s+$/g,'');
	};
}




/* !-- Creates Website's Necessary HTML5 Tags -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.createHTML5Tags = function() {
	var aElements = ["article", "footer", "header", "nav"];
	for (var i = 0; i < aElements.length; i++)
		document.createElement(aElements[i]);
};




/* !-- Tries to activate menu items for the current page based on the body tag classes -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.activateCurrentMenuButton = function() {
	var menuPrefix = "mn_";
	
	var classes = document.documentElement.getElementsByTagName("body")[0].className.split(" ");
	for ( var i = 0; i < classes.length; i++ ) {
		if ( document.getElementById(menuPrefix + classes[i]) )
			document.getElementById(menuPrefix + classes[i]).className = "current " + document.getElementById(menuPrefix + classes[i]).className;
	}
};




/* !-- Returns 'true' if device is mobile -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.isMobile = function() {
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
};




/* !-- Universal Event Listeners -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.addEvt = function(obj, evt, func, capture) {
	if ( typeof(obj) == "object" ) {
		if ( capture != true ) capture = false;
		if ( obj.addEventListener )
			obj.addEventListener(evt, func, capture);
		else if ( obj.attachEvent )
			obj.attachEvent("on" + evt, func);
	}
};

window.ark.removeEvt = function(obj, evt, func, capture) {
	if ( typeof(obj) == "object" ) {
		if ( capture != true ) capture = false;
		if ( obj.removeEventListener )
			obj.removeEventListener(evt, func, capture);
		else if ( obj.detachEvent )
			obj.detachEvent("on" + evt, func);
	}
};




/* !-- Cookies -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
(function(window){

	function Cookies() {}
	
	// Expiration is a string with an integer that ends with a character ( d = days, m = months, y = years )
	Cookies.set = function(cookieName, cookieValue, expires, path, domain) {
		if ( cookieName ) {
			var strExpires = "";
			if (expires) {
				var duration = parseInt(expires.substring(0, expires.length - 1));
				var period = expires.substring(expires.length - 1).toLowerCase();
				
				if ( !isNaN(duration) && (period == "d" || period == "m" || period == "y" ) ) {
					var periodFunction;
					if ( period == "d" )
						periodFunction = "Date";
					else if ( period == "m" )
						periodFunction = "Month";
					else if ( period == "y" )
						periodFunction = "FullYear"
					
					var expirationDate = new Date();
					expirationDate["set" + periodFunction]( expirationDate["get" + periodFunction]() + duration );
					
					strExpires = "; expires=" + expirationDate.toGMTString();
				}
			}
			
			var strPath = "; path=" + (path ? path : "/");
			var strDomain = domain ? "; domain=" + domain : "";
			
			document.cookie = cookieName + "=" + escape(cookieValue) + strExpires + strPath + strDomain;
		}
	}
	
	
	Cookies.get = function(cookieName) {
		var allCookies = {};
		
		var cookiesValues = document.cookie.split("; ");
		for ( var i = 0; i < cookiesValues.length; i++ ) {
			var key   = cookiesValues[i].split("=")[0];
			var value = unescape(cookiesValues[i].split("=")[1]);
			allCookies[key] = value;
		}
		
		if (cookieName)
			return allCookies[cookieName];
		else
			return allCookies;
	}
	
	
	Cookies.remove = function(cookieName) {
		var allCookies = {};
		
		if ( cookieName )
			allCookies[cookieName] = "";
		else
			allCookies = Cookies.get();
		
		for ( var key in allCookies )
			Cookies.set(key, "", "-1y");
	}
	
	
	// Adds the object
	if (!window.ark) window.ark = new Object();
	
	if (!window.ark.Cookies)
		window.ark.Cookies = Cookies;

}(window));




/* !-- Location Query -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
(function(window){
	
	function LocationQuery() {
		var _convertedURL = LocationQuery.convertURL(location.href);
		var _keyValuePairs = _convertedURL.keyValuePairs;
		
		// Creates a getter for each key found
		for ( var i in _convertedURL.properties ) {
			eval('this[i] = function(){ return "' + _convertedURL.properties[i] + '"; }');
		}
		
		// Returns all the key value pairs
		this.keyValuePairs = function() { return _keyValuePairs; };
	}
	
	
	
	LocationQuery.convertURL = function(url) {
		var keyValuePairs = [];
		var properties    = {}
		
		var query = (url.indexOf("?") != -1) ? url.substring(url.indexOf("?") + 1) : "";
		
		if (query.length) {
			var pairs = query.split("&");
			var key, value;
			
			for ( var i = 0; i < pairs.length; i++ ) {
				key = pairs[i].substring(0, pairs[i].indexOf("="));
				value = pairs[i].substring(pairs[i].indexOf("=") + 1);
				
				keyValuePairs.push({ key: key, value: value });
				properties[key] = value;
			}
		}
		
		return { keyValuePairs: keyValuePairs, properties: properties };
	}
	
	// Adds the object
	if (!window.ark) window.ark = new Object();
	
	if (!window.ark.LocationQuery)
		window.ark.LocationQuery = LocationQuery;
	
	if (!window.ark.locationQuery)
		window.ark.locationQuery = new LocationQuery();
	
}(window));


/* !-- Initializes Events Carousels -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.setEventsCarousel = function() {
	
	$('.events-feature').each(function() {
		
		var eventCarousel = window.jQuery(".events-wrap", this);
		
		eventCarousel.owlCarousel({
			nav						: true,
			loop					: true,
			navText					: false,
			navRewind				: false,
			responsiveRefreshRate	: 1,
			responsive: {
				0:{ items:1 },
				480:{ items:2, dots: false },
				767:{ items:3, dots: false },
				1000:{ items:4, dots: false }
			}
		});			
	});
};


/* !-- Livestreams article -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.expandLiveSteams = function() {
	
	$(".cta-expand:not(.init)").click(function() {
			
		var container = $(this).closest("article");
		
		container.addClass("expand opened");
		$(this).addClass("init");
		
		$(this).css("display", "none");
		
		return false;
		
	});

}


window.ark.checkLiveStreamsHeight = function() {
	$(".livestream-item:not(.opened)").each(function() {
		var _contentHeight		= 0;
		var _ctaExpand			= $(".cta-expand", this);
		
		$(".content .summary", this).children().each(function(){
		    _contentHeight = _contentHeight + $(this).outerHeight(true);
		});
		
		if(_contentHeight < 150) {
			$(this).addClass("expand")
			_ctaExpand.css("display","none");
		} else {
			$(this).removeClass("expand");
			_ctaExpand.css("display","block");
		}
	});
}


/* !-- Initializes Media Galleries -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.mediasGallery = function() {
	
	var isActive = false;
	
	window.jQuery('.thumbnails').find('[data-pos="0"]').addClass("actif");
	
	
	window.jQuery(".medias-gallery").each(function() {
		
		var mediasPlaceHolder	= window.jQuery(".place-holder", this);
		var mediasThumbnails 	= window.jQuery(".thumbnails", this);
		var hideNav				= mediasPlaceHolder.children().length > 1;
		
		
		function updateTwitchSlides() {
			var context = this,
				i;
			
			setTimeout(function(){
				var currentTwitchItems = window.jQuery(".owl-item.active .vid-tch iframe:not([src])", context);
				var disabledTwitchItems = window.jQuery(".owl-item:not(.active) .vid-tch iframe[src]", context);
				
				for ( i = 0; i < currentTwitchItems.length; i++ ) {
					currentTwitchItems[i].setAttribute("src", currentTwitchItems[i].getAttribute("data-src"));
					currentTwitchItems[i].parentNode.style.setProperty("display", "block");
				}
				
				
				for ( i = 0; i < disabledTwitchItems.length; i++ ) {
					disabledTwitchItems[i].removeAttribute("src");
				}
			}, 1);
		}
		
		
		mediasPlaceHolder.on('initialized.owl.carousel', updateTwitchSlides);
		
		mediasPlaceHolder.on('initialize.owl.carousel',function(){
			
			//If there is more than one item init Thumbnails carousel
			if(hideNav) {
				mediasThumbnails.owlCarousel({
					nav				: hideNav,
					loop			: false,
					margin			: 4,
					navText			: false,
					navRewind		: false,
					responsive		: { 0:{ items:3, dots: false }, 600:{ items:5 }, 1000:{ items:7 } }
				});
			//If there is only one item hide the thumbnail
			} else {
				mediasThumbnails.hide();
				window.jQuery(this).parent().addClass("no-thumbnails");
			}
			
			// Go to the slide item with a thumbnail
			window.jQuery('a', mediasThumbnails).click(function() {
				window.jQuery(this).removeClass("actif");
				var pos = window.jQuery(this).data("pos");
				mediasPlaceHolder.trigger('to.owl.carousel', [pos,300]);
				window.jQuery(this).addClass("actif");
				return false;
			});
			
			mediasPlaceHolder.on('changed.owl.carousel', function(event) {
				
				window.jQuery('a', mediasThumbnails).removeClass("actif");
				window.jQuery(mediasThumbnails).find('[data-pos="'+event.page.index+'"]').addClass("actif");
				
				mediasThumbnails.trigger('to.owl.carousel', [event.page.index,300,true]);
				
			});

			
			mediasPlaceHolder.on('dragged.owl.carousel', function(event) {
				window.jQuery('a', mediasThumbnails).removeClass("actif");
				window.jQuery(mediasThumbnails).find('[data-pos="'+event.page.index+'"]').addClass("actif");
			});
			
			
			window.jQuery(".owl-prev", mediasPlaceHolder).click(function() {
				mediasThumbnails.trigger('prev.owl.carousel');
			});
			
			window.jQuery(".owl-next", mediasPlaceHolder).click(function() {
				mediasThumbnails.trigger('next.owl.carousel');
			});
			
		});
		
		//Init Medias carousel
		mediasPlaceHolder.owlCarousel({
			nav						: hideNav,
			autoHeight				: true,
			loop					: false,
			items					: 1,
			video					: true,
			margin					: 0,
			navText					: false,
			callbacks				: true,
			lazyLoad				: true,
			responsive				: true,
			responsiveRefreshRate	: 1,
			touchDrag				: false
		});
		
		
		mediasPlaceHolder.on('changed.owl.carousel', updateTwitchSlides);
		mediasPlaceHolder.on('changed.owl.carousel', function() {
			window.jQuery(".medias-gallery .fancybox").removeClass("active");
			isActive = false;
		});
		
		window.jQuery(".owl-controls .owl-nav div", mediasPlaceHolder).click(function() {
			window.jQuery(".medias-gallery .fancybox").removeClass("active");
			isActive = false;
		});
		
		
		//Put the video thumbnails img to the thumbnails itself
		window.jQuery(".vid, .img", mediasPlaceHolder).each(function() {
			
			var pos 		= window.jQuery(this).data("pos");
			var imgSrc		= window.jQuery(this).attr("class") == "vid" ? window.jQuery(this).find(".owl-video-tn").data("src") : window.jQuery(this).find("img").attr("src");
			
			
			window.jQuery("a", mediasThumbnails).each(function() {
				
				if(window.jQuery("img",this).attr("src")) {
					//Do nothing and let the orginal thumnal
				} else {
					if(window.jQuery(this).data("pos") == pos) {
						window.jQuery("img",this).attr("src", imgSrc);
					}
				}
				
				window.jQuery(this).show();
			});
			
		});
		window.jQuery(".place-holder .vid, .place-holder .img", this).show();
	});
	
	// Adds fancybox function if device is not mobile
	if(window.ark.isMobile()) {
					
		window.jQuery(".medias-gallery .fancybox").click(function() {
			
			if(!isActive) {
					
				window.jQuery(this).addClass("active");
				
				isActive = true;
				
				return false;
				
			} else {
				
				window.jQuery(".medias-gallery .place-holder a").attr("target", "_blank");
				
				window.jQuery(this).removeClass("active");
				isActive = false;
				
				}
			
		});
		
	} else {
			
		window.jQuery(".medias-gallery .fancybox").fancybox({});
	
	}
	
}



/* !-- Attaches the page load event handler -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
window.ark.addEvt(window, "load", globalPageLoadHandler);
window.ark.addEvt(window, "resize", window.ark.windowResize);
window.ark.addEvt(window, "resize", window.ark.checkLiveStreamsHeight);




window.jQuery(document).ready(function($) {
	$("img").unveil(800);
});