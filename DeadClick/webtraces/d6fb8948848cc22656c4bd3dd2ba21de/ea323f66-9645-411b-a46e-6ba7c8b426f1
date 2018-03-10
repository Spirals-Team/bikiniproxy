;
(function($, window, undefined){
	'use strict';
	/*---------------------------------
	Correct OS & Browser Check
	-----------------------------------*/

	if (window.checker==undefined) {
		window.ua = navigator.userAgent;
		window.checker = {
			os: {
				iphone: ua.match(/iPhone/),
				ipod: ua.match(/iPod/),
				ipad: ua.match(/iPad/),
				blackberry: ua.match(/BlackBerry/),
				android: ua.match(/(Android|Linux armv6l|Linux armv7l)/),
				linux: ua.match(/Linux/),
				win: ua.match(/Windows/),
				mac: ua.match(/Macintosh/)
			},
			ua: {
				ie: ua.match(/MSIE/),
				ie6: ua.match(/MSIE 6.0/),
				ie7: ua.match(/MSIE 7.0/),
				ie8: ua.match(/MSIE 8.0/),
				ie9: ua.match(/MSIE 9.0/),
				ie10: ua.match(/MSIE 10.0/),
				opera: ua.match(/Opera/),
				firefox: ua.match(/Firefox/),
				chrome: ua.match(/Chrome/),
				safari: ua.match(/(Safari|BlackBerry)/)
			}
		};
	}
})(jQuery, window);