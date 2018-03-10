function cli_show_cookiebar(p) {
	
	var Cookie = {
		set: function(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		},
		read: function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') {
					c = c.substring(1,c.length);
				}
				if (c.indexOf(nameEQ) === 0) {
					return c.substring(nameEQ.length,c.length);
				}
			}
			return null;
		},
		erase: function(name) {
			this.set(name,"",-1);
		},
		exists: function(name) {
			return (this.read(name) !== null);
		}
	};
	
	var ACCEPT_COOKIE_NAME = 'viewed_cookie_policy',
		ACCEPT_COOKIE_EXPIRE = 365,
		html = p.html,
		json_payload = p.settings;
	
	// Edit 09/05:
	// Replaced eval with JSON.parse. See http://caniuse.com/json for support (sorry IE7 users but you're dinosaurs these days...)
	//var settings = eval('(' + json_payload +')');
	
	if (typeof JSON.parse !== "function") {
		console.log("CookieLawInfo requires JSON.parse but your browser doesn't support it");
		return;
	}
	var settings = JSON.parse(json_payload);
	jQuery('body').prepend(html);
	
	
	var cached_header = jQuery(settings.notify_div_id),
		cached_showagain_tab = jQuery(settings.showagain_div_id),
		btn_accept = jQuery('#cookie_hdr_accept'),
		btn_decline = jQuery('#cookie_hdr_decline'),
		btn_moreinfo = jQuery('#cookie_hdr_moreinfo'),
		btn_settings = jQuery('#cookie_hdr_settings');
	
	cached_header.hide();
	if ( !settings.showagain_tab ) {
		cached_showagain_tab.hide();
	}
	
	var hdr_args = {
		'background-color': settings.background,
		'color': settings.text,
		'font-family': settings.font_family
	};
	var showagain_args = {
		'background-color': settings.background,
		'color': l1hs(settings.text),
		'position': 'fixed',
		'font-family': settings.font_family
	};
	if ( settings.border_on ) {
		var border_to_hide = 'border-' + settings.notify_position_vertical;
		showagain_args['border'] = '1px solid ' + l1hs(settings.border);
		showagain_args[border_to_hide] = 'none';
	}
	if ( settings.notify_position_vertical == "top" ) {
		if ( settings.border_on ) {
			hdr_args['border-bottom'] = '4px solid ' + l1hs(settings.border);
		}
		showagain_args.top = '0';
	}
	else if ( settings.notify_position_vertical == "bottom" ) {
		if ( settings.border_on ) {
			hdr_args['border-top'] = '4px solid ' + l1hs(settings.border);
		}
		hdr_args['position'] = 'fixed';
		hdr_args['bottom'] = '0';
		showagain_args.bottom = '0';
	}
	if ( settings.notify_position_horizontal == "left" ) {
		showagain_args.left = settings.showagain_x_position;
	}
	else if ( settings.notify_position_horizontal == "right" ) {
		showagain_args.right = settings.showagain_x_position;
	}
	cached_header.css( hdr_args );
	cached_showagain_tab.css( showagain_args );
	
	if (!Cookie.exists(ACCEPT_COOKIE_NAME)) {
		displayHeader();
	}
	else {
		cached_header.hide();
	}
	
	// Show once code:
	if ( settings.show_once_yn ) {
		setTimeout(close_header, settings.show_once);
	}
	function close_header() {
		Cookie.set(ACCEPT_COOKIE_NAME, 'yes', ACCEPT_COOKIE_EXPIRE);
		hideHeader();
	}
	
	var main_button = jQuery('.cli-plugin-main-button');
	main_button.css( 'color', settings.button_1_link_colour );
	
	if ( settings.button_1_as_button ) {
		main_button.css('background-color', settings.button_1_button_colour);
		
		main_button.hover(function() {
			jQuery(this).css('background-color', settings.button_1_button_hover);
		},
		function() {
			jQuery(this).css('background-color', settings.button_1_button_colour);
		});
	}
	var main_link = jQuery('.cli-plugin-main-link');
	main_link.css( 'color', settings.button_2_link_colour );
	
	if ( settings.button_2_as_button ) {
		main_link.css('background-color', settings.button_2_button_colour);
		
		main_link.hover(function() {
			jQuery(this).css('background-color', settings.button_2_button_hover);
		},
		function() {
			jQuery(this).css('background-color', settings.button_2_button_colour);
		});
	}
	
	// Action event listener for "show header" event:
	cached_showagain_tab.click(function() {	
		cached_showagain_tab.slideUp(settings.animate_speed_hide, function slideShow() {
			cached_header.slideDown(settings.animate_speed_show);
		});
	});
	
	// Action event listener to capture delete cookies shortcode click. This simply deletes the viewed_cookie_policy cookie. To use:
	// <a href='#' id='cookielawinfo-cookie-delete' class='cookie_hdr_btn'>Delete Cookies</a>
	jQuery("#cookielawinfo-cookie-delete").click(function() {
		Cookie.erase(ACCEPT_COOKIE_NAME);
		return false;
	});
	
	// Action event listener for debug cookies value link. To use:
	// <a href='#' id='cookielawinfo-debug-cookie'>Show Cookie Value</a>
	jQuery("#cookielawinfo-debug-cookie").click(function() {
		alert("Cookie value: " + Cookie.read(ACCEPT_COOKIE_NAME));
		return false;
	});
	
	// action event listeners to capture "accept/continue" events:
	jQuery("#cookie_action_close_header").click(function() {
		// Set cookie then hide header:
		Cookie.set(ACCEPT_COOKIE_NAME, 'yes', ACCEPT_COOKIE_EXPIRE);
		
		if (settings.notify_animate_hide) {
			cached_header.slideUp(settings.animate_speed_hide);
		}
		else {
			cached_header.hide();
		}
		cached_showagain_tab.slideDown(settings.animate_speed_show);
		return false;
	});
	
	function displayHeader() {
		if (settings.notify_animate_show) {
			cached_header.slideDown(settings.animate_speed_show);
		}
		else {
			cached_header.show();
		}
		cached_showagain_tab.hide();
	}
	function hideHeader() {
		if (settings.notify_animate_show) {
			cached_showagain_tab.slideDown(settings.animate_speed_show);
		}
		else {
			cached_showagain_tab.show();
		}
		cached_header.slideUp(settings.animate_speed_show);
	}
};
function l1hs(str){if(str.charAt(0)=="#"){str=str.substring(1,str.length);}else{return "#"+str;}return l1hs(str);}