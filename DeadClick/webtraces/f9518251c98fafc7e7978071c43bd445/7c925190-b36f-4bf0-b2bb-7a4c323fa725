(function(mgsjQuery){
	"use strict";

	mgsjQuery(function(){

		var Core = {

			initialized : false,

			initialize : function(){

				if(this.initialized) return;
				this.initialized = true;

				this.build();

			},

			build : function(){
				this.animations();
                                this.navMenu();
			},

			animations : function(){
				// appear animatuion
				mgsjQuery("[data-appear-animation]").each(function() {

					var self = mgsjQuery(this);

					self.addClass("appear-animation");

					if(mgsjQuery(window).width() > 767) {
						self.appear(function() {

							var delay = (self.attr("data-appear-animation-delay") ? self.attr("data-appear-animation-delay") : 1);

							if(delay > 1) self.css("animation-delay", delay + "ms");
							self.addClass(self.attr("data-appear-animation"));
                                                        self.addClass("animated");

							setTimeout(function() {
								self.addClass("appear-animation-visible");
							}, delay);

						}, {accX: 0, accY: -150});
					} else {
						self.addClass("appear-animation-visible");
					}
				});
			},
                        
                        navMenu: function() {

                                // Responsive Menu Events
                                var addActiveClass = false;

                                mgsjQuery("#mainMenu li.dropdown > a, #mainMenu li.dropdown-submenu > a").on("click", function(e) {

                                        if(mgsjQuery(window).width() > 979) return;

                                        e.preventDefault();

                                        addActiveClass = mgsjQuery(this).parent().hasClass("resp-active");

                                        mgsjQuery("#mainMenu").find(".resp-active").removeClass("resp-active");

                                        if(!addActiveClass) {
                                                mgsjQuery(this).parents("li").addClass("resp-active");
                                        }

                                        return;

                                });

                                // Submenu Check Visible Space
                                mgsjQuery("#mainMenu li.dropdown-submenu").hover(function() {

                                        if(mgsjQuery(window).width() < 767) return;

                                        var subMenu = mgsjQuery(this).find("ul.dropdown-menu");

                                        if(!subMenu.get(0)) return;

                                        var screenWidth = mgsjQuery(window).width(),
                                                subMenuOffset = subMenu.offset(),
                                                subMenuWidth = subMenu.width(),
                                                subMenuParentWidth = subMenu.parents("ul.dropdown-menu").width(),
                                                subMenuPosRight = subMenu.offset().left + subMenu.width();

                                        if(subMenuPosRight > screenWidth) {
                                                subMenu.css("margin-left", "-" + (subMenuParentWidth + subMenuWidth + 10) + "px");
                                        } else {
                                                subMenu.css("margin-left", 0);
                                        }

                                });

                                // Mega Menu
                                mgsjQuery(document).on("click", ".mega-menu .dropdown-menu", function(e) {
                                        e.stopPropagation()
                                });

                                // Mobile Redirect
                                mgsjQuery(".mobile-redirect").on("click", function() {
                                        if(mgsjQuery(window).width() < 991) {
                                                self.location = mgsjQuery(this).attr("href");
                                        }
                                });

                        }
		}

		Core.initialize();
	});

})(mgsjQuery);