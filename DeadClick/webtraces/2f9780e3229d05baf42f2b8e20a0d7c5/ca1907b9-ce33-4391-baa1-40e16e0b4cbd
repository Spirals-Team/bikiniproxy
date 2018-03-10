(function(window){


/* !-- Static Properties -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	MainMenu.mobileWidth = 1024;
	MainMenu.defaultMenuOffsetTop = null;




/* !-- Static Methods -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	
	/* -- Initializes the menu and the mobile menu -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	MainMenu.init = function() {
		// Sets the offset position of the main menu (MainMenu.defaultMenuOffsetTop)
		setDefaultMenuOffsetTop();
		
		//Sticks the main menu to the top of the page when scrolling
		stickMenuToTop();
		stickSubMenuToTop();
				
		// Adds scroll and resize events
		ark.addEvt(window, "scroll", function() {
			stickMenuToTop();
			stickSubMenuToTop();
		});
		
		ark.addEvt(window, "resize", function() {
			setDefaultMenuOffsetTop();
			stickMenuToTop();
			stickSubMenuToTop();
		});
	};
	
	
	
	/* -- Returns the page element -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	MainMenu.getPage = function() {
		return document.getElementById("page");
	};
	
	



/* !-- Constructor -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function MainMenu() {}





/* !-- Private Methods -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	
	/* -- Sets the offset position of the main menu (MainMenu.defaultMenuOffsetTop) -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function setDefaultMenuOffsetTop() {
		if ( jQuery("header .page-width").width() >= MainMenu.mobileWidth && !jQuery("#page").hasClass("snap-menu") && MainMenu.defaultMenuOffsetTop === null ) {
			MainMenu.defaultMenuOffsetTop = jQuery("#menu").offset().top;
		}
	}
	
	
	
	
	/* -- Sticks the main menu to the top of the page when scrolling -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function stickMenuToTop() {
		if ( jQuery(window).scrollTop() >= MainMenu.defaultMenuOffsetTop && jQuery("header .page-width").width() >= MainMenu.mobileWidth )
			jQuery("#page").addClass("snap-menu");
		else
			jQuery("#page").removeClass("snap-menu");
	}
	
	
	
	
	/* -- Sticks the MGTO menu to the top of the page when scrolling -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function stickSubMenuToTop() {
		var menu = jQuery('nav#submenu');
		var menuMobile = jQuery('nav#submenu.mobile');
		
		if ( menuMobile.length ) {
			
			var menuOffSetTop 	   = jQuery("#page-header");
			var menuMgtoHeight     = (menuOffSetTop.height() - menu.height());
			window.contentPadding  = window.contentPadding != null ? window.contentPadding : parseInt(jQuery("#content").css("padding-top"));
			
			if ( jQuery("#page-header").height() - jQuery(window).scrollTop() <= 0 ) {
				
				menu.addClass("snap-menu");
				jQuery("#content").css("padding-top", menu.height() + window.contentPadding);
				
			} else {
				menu.removeClass("snap-menu");
				jQuery("#content").css("padding-top", window.contentPadding);
			}
			
		}
		
		else {
			var menuOffSetTop 	   = jQuery("#page-header");
			var menuMgtoHeight     = (menuOffSetTop.height() - menu.height());
			window.contentPadding  = window.contentPadding != null ? window.contentPadding : parseInt(jQuery("#content").css("padding-top"));
			
			if ( jQuery(window).scrollTop() >= ((menuOffSetTop.length ? menuOffSetTop.offset().top : 0) + menuMgtoHeight) ) {
				
				menu.addClass("snap-menu");
				jQuery("#content").css("padding-top", menu.height() + window.contentPadding);
				
			} else {
				menu.removeClass("snap-menu");
				jQuery("#content").css("padding-top", window.contentPadding);
			}
			
		}
		
	}
	
	
	

/* -- Adds the object -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	if (!window.ark) window.ark = new Object();
	
	if (!window.ark.MainMenu)
		window.ark.MainMenu = MainMenu;
	
	
	ark.addEvt(window, "load", function() {
		// Initializes the menu and the mobile menu
      	ark.MainMenu.init();
	})


}(window));