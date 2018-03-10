/****************************************************************************************
 * Dynamic advert rotation for AdRotate													*
 * Arnan de Gans from AJdG Solutions (http://meandmymac.net, https://ajdg.solutions/)	*
 * Version: 0.8.1														   				*
 * With help from: Mathias Joergensen (http://www.moofy.me), Fraser Munro				*
 * Original code: Arnan de Gans															*
 ****************************************************************************************/

/* ------------------------------------------------------------------------------------
*  COPYRIGHT AND TRADEMARK NOTICE
*  Copyright 2008-2015 Arnan de Gans. All Rights Reserved.
*  ADROTATE is a trademark of Arnan de Gans.

*  COPYRIGHT NOTICES AND ALL THE COMMENTS SHOULD REMAIN INTACT.
*  By using this code you agree to indemnify Arnan de Gans from any
*  liability that might arise from it's use.
------------------------------------------------------------------------------------ */

/* == Settings ==
groupid : PHP Group ID [integer, defaults to 0]
speed : Time each slide is shown [integer: milliseconds, defaults to 3000]
*/

(function($) {
	$.fn.gslider = function(settings) {
		var config = {groupid:0,speed:3000};
		if(settings) $.extend(true, config, settings)

		this.each(function(i) {
			var $cont = $(this);
			var gallery = $(this).children();
			var length = gallery.length;
			var timer = 0;
			var counter = 1;

			if(length == 1) {
				// Impression tracker (Single ad)
	            var tracker = $cont.find(".c-1 a").attr("data-track");
				if(typeof tracker !== 'undefined') {
					impressiontracker(tracker);
				}
			}
			
			if(length > 1) {
				$cont.find(".c-1").show();
				for(n = 2; n <= length; n++) {
					$cont.find(".c-" + n).hide();
				}
				
				timer = setInterval(function(){ play(); }, config.speed);
			}

			function transitionTo(gallery, index) {
				if((counter >= length) || (index >= length)) { 
					counter = 1;
				} else { 
					counter++;
				}

				$cont.find(".c-" + counter).fadeIn(300);

				// Impression tracker (Multiple ads)
	            var tracker = $cont.find(".c-" + counter + ' a').attr("data-track");
				if(typeof tracker !== 'undefined') {
					impressiontracker(tracker);
				}
				$cont.find(".c-" + index).fadeOut(300);
			}
			
			function play() {
				transitionTo(gallery, counter);
			}

			function impressiontracker(tracker) {
	            admeta = atob(tracker).split(',');
				var now = Math.round(Date.now()/1000);
				var unixtime = now - admeta[3];

				cookietime = readCookie('adrotate-'+admeta[0]);
				if(cookietime <= unixtime) {
					$.post(
						impression_object.ajax_url, 
						{'action': 'adrotate_impression','track': tracker}
					);
					createCookie('adrotate-'+admeta[0], now);
					delete tracker;
				}
			}

			function createCookie(name, value) {
			    var expires;
		        var date = new Date();

		        date.setTime(date.getTime() + 86400000);
		        expires = "; expires=" + date.toGMTString();
			    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
			}
			
			function readCookie(name) {
			    var nameEQ = escape(name) + "=";
			    var ca = document.cookie.split(';');
			    for (var i = 0; i < ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
			        if (c.indexOf(nameEQ) === 0) return unescape(c.substring(nameEQ.length, c.length));
			    }
			    return 0;
			}
		});
		return this;
	};
}(jQuery));