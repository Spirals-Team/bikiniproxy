/*
 This file is part of ITRO Popup Plugin. (email : support@itroteam.com)
 */

/* init variables */
var itro_is_preview;
var itro_cookie_expiration;
var itro_age_restriction;

/**
 * Manage popup appearing
 * 
 *
 * @since 1.0
 *
 */
function itro_enter_anim(auto_margin)
{
    if (document.cookie.indexOf("popup_cookie") == -1 || itro_is_preview === true)
    {
	//align the popup before fadein
	if (auto_margin == 'yes') {
	    itro_margin_refresh(50);
	}

	jQuery("#itro_popup").css('display', 'none');
	jQuery("#itro_popup").css('opacity', 1);
	jQuery("#itro_popup").css('visibility', 'visible');

	jQuery("#itro_opaco").fadeIn(function ()
	{
	    jQuery("#itro_popup").fadeIn();
	    if (itro_age_restriction === false)
	    {
		itro_set_cookie("popup_cookie", "one_time_popup", itro_cookie_expiration);
	    }
	    // refresh every 0.5 second the popup top margin (needed for browser window resizeing)
	    if (auto_margin == 'yes') {
		setInterval(function () {
		    itro_margin_refresh();
		}, 500);
	    }
	});
    } else {
	jQuery("#itro_popup").css('display', 'none');
    }

}

/**
 * Manage popup closing
 * 
 *
 * @since 1.0
 *
 */
function itro_exit_anim() {
    jQuery('#itro_popup').fadeOut(function () {
	jQuery('#popup_content').remove();
	jQuery('#itro_opaco').fadeOut();
    });
}


/**
 * Center the popup vertically
 * 
 * @param {int} speed : the milesec speed fo the alignment animation
 *
 * @since 1.0
 *
 */
function itro_margin_refresh(speed) {
    if (typeof (speed) == undefined) {
	speed = 200;
    }

    if (typeof (window.innerWidth) == 'number')
    {
	/* Non-IE */
	browserWidth = window.innerWidth;
	browserHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
    {
	/* IE 6+ in 'standards compliant mode' */
	browserWidth = document.documentElement.clientWidth;
	browserHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight))
    {
	/* IE 4 compatible */
	browserWidth = document.body.clientWidth;
	browserHeight = document.body.clientHeight;
    }
    popupHeight = document.getElementById('itro_popup').offsetHeight;	//get the px size of popup div
    parentOffset = jQuery('#itro_popup').position().top;
    docOffset = jQuery('#itro_popup').offset().top;

    desTopWindowMargin = Math.round((browserHeight - popupHeight) / 2); 		//desired top margin of popup (window related)
    desTopWindowMargin = desTopWindowMargin < 0 ? 0 : desTopWindowMargin; 	//avoid that negative top position will hide the popup 
    popupTopMargin = desTopWindowMargin - docOffset + parentOffset;

    if (jQuery('#itro_popup').css('position') == 'absolute') {
	//set a tollerance to avoid flickering
	if (Math.abs(popupTopMargin - parentOffset) > 2) {
	    jQuery('#itro_popup').animate({top: popupTopMargin}, speed);
	}
    } else {
	if (Math.abs(popupTopMargin - parentOffset) > 2) {
	    jQuery('#itro_popup').animate({top: desTopWindowMargin}, speed);
	}
    }

}

/**
 * Invert an hex color with the # char
 * 
 * @param string hexTripletColor: the hex string
 *
 * @since 4.9
 *
 */
function itro_invert_color(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = "#" + color;                  // prepend #
    return color;
}

/**
 * Convert an rgb string like rgb(255, 255, 255) to an hex code
 * 
 * @param string rgbString: the rgb string
 *
 * @since 4.9
 *
 */
function itro_rgb2hex(rgbString) {
    var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete (parts[0]);
    for (var i = 1; i <= 3; ++i) {
	parts[i] = parseInt(parts[i]).toString(16);
	if (parts[i].length == 1)
	    parts[i] = '0' + parts[i];
    }
    return '#' + parts.join('').toUpperCase();
}

/* function for countdown to show popup when the delay is set */
function popup_delay(auto_margin) {
    delay--;
    if (delay <= 0)
    {
	clearInterval(interval_id_delay);
	itro_enter_anim(auto_margin);
    }
}


/**
 * Countdown for automatic closing
 *
 * @since 1.0
 *
 */
function popTimer() {
    if (popTime > 0) {
	document.getElementById("timer").innerHTML = popTime;
	popTime--;
    } else {
	clearInterval(interval_id);
	itro_exit_anim();
    }
}

/* function use to set the cookie for next visualization time */
function itro_set_cookie(c_name, value, exhours) {
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + (exhours * 3600 * 1000));
    var c_value = escape(value) + ((exhours == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
}