jQuery(document).ready(function() {
		var bMobile;  // true if in mobile mode
		var isMobile;
		// Initiate event handlers
		function init() {
			var isMobile = {
				Android: function() {
					return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function() {
					return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function() {
					return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function() {
					return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function() {
					return navigator.userAgent.match(/IEMobile/i);
				},
				any: function() {
					return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				}
			};
			
			var oMenus = jQuery('.navbar-nav  .dropdown'),nTimer;
			if( isMobile.any() ) {									
				// Set up menu on click for Mobile and ipad mode
				oMenus.on({
				  'mouseenter touchstart': function(event) {
					event.preventDefault();
					clearTimeout(nTimer);
					oMenus.removeClass('open');
					jQuery(this).addClass('open').slideDown();
				  },				 
				});
				jQuery('ul.dropdown-menu li a').on('click touchend', function() { 
					var link = jQuery(this).attr('href');   
					window.open(link,'_self'); // opens in new window as requested
					return false; // prevent anchor click    
				});					
			} else {				
				oMenus.on({'mouseenter touchstart': function(event) {
					event.preventDefault();
					clearTimeout(nTimer);
					oMenus.removeClass('open');
					jQuery(this).addClass('open').slideDown();
					},
					'mouseleave': function() {
					nTimer = setTimeout(function() {
					  oMenus.removeClass('open');
					}, 500);
				  },				  
				});
			}
		}
		jQuery(document).ready(function() {
		  // Your other code to run on DOM ready...
		  init();
		});
		jQuery(window).resize(init);
	});  