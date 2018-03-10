"use strict";
jQuery(document).ready(function($){
	var $leftSidebar = $('#left-sidebar-wrap');
	var $rightSidebar = $('#sidebar-right');
	var hasRightSidebar = false;
	if($rightSidebar.length > 0) {
		hasRightSidebar = true;
	}
	var $brickWrap = $('#brick-wrap');
	var hasBricks = false;
	if($brickWrap.length > 0){
		hasBricks = true;
	}
	var $window = $(window);
	
	// these two are set in ubergrid.theme.class.php
	//var brickWidth = 250;
	//var brickMargin = 5;
	
	if(hasBricks && hasRightSidebar){
		$window.resize(function(e){
			checkColumns();
		});
		
		checkColumns();
	}
	
	function checkColumns(){
		if(hasRightSidebar){
			var maxColumns = Math.floor(($window.width() - $leftSidebar.outerWidth(true) - $rightSidebar.outerWidth(true)) / (brickWidth + 2*brickMargin));
			if(hasColumns && maxColumns > numColumns){
				maxColumns = numColumns;
			}			
			var maxWidth = maxColumns * (brickWidth + 2*brickMargin);
			if(maxColumns < 2) {
				maxWidth = '100%';
			}
			
			if(2 * (brickWidth + 2*brickMargin) + $rightSidebar.outerWidth(true) + $leftSidebar.outerWidth(true) > $window.width()) {
				$rightSidebar.css('display', 'none');
				$brickWrap.css('padding-right', '0').addClass('no-sidebar');
			}else{
				$rightSidebar.css('display', '');
				$brickWrap.css('padding-right', '').removeClass('no-sidebar');
			}
			
			$brickWrap.css('width', maxWidth);
		}
	}
	

	// Sidebar gets fixed when logo is not in viewport
	setSidebar();
	$(window).scroll(function(){
		setSidebar();
	});
	
	function setSidebar(){
		var logoHeight = $('#sidebar-top').height();
		if(($(window).scrollTop() >= logoHeight + 20 && !$("#sidebar-wrap").hasClass('fixed')) 
				|| ($(window).scrollTop() < logoHeight + 20 && $("#sidebar-wrap").hasClass('fixed'))
			){
				//console.log('toggle sidebar class: fixed');
				$("#sidebar-wrap").toggleClass('fixed');
			}
	}

	/*
	*   Right sidebar responsive trigger check
	***********************************/
	// sidebarWidth is defined in ubergrid.theme.class.php file
	var isActive = false;
	$(window).resize(function(e){
			masonryToggle();
	});

	function masonryToggle(){
		if(($(window).width() < 2*sidebarWidth || $rightSidebar.width() == sidebarWidth) && isActive){
			$('.widget-area').masonry('destroy');
			isActive = false;
		}else if($(window).width() >= 2*sidebarWidth && $rightSidebar.width() != sidebarWidth && !isActive){
			$('.widget-area').masonry({
				columnWidth: 5,
				isAnimated: !Modernizr.csstransitions,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});            
			isActive = true;
		}
	}
	
	masonryToggle();

	/*
	*   Slider
	******************************************/
	if( $(".slider").length > 0 ){
		var $slider = $('.slider').flexslider({
							animation: "slide",
							controlNav: true,
							directionNav: false,
							smoothHeight: true
						  });
	}

	/*
	*   Lightbox
	******************************************/
	if( typeof($(".swipebox").swipebox) === "function") {
		swipeboxInstance = $(".swipebox").swipebox();
	}

	function masonry_loaded(){

		// attach lightbox to new content
		if( typeof($(".swipebox").swipebox) === "function" && swipeboxInstance !== undefined ) {
			if( swipeboxInstance != null ){
				swipeboxInstance.refresh();
			}
			else{
				swipeboxInstance = $(".swipebox").swipebox();
			}
		}

		// attach flowplayer to new content
		if( $(".flowplayer").length > 0 && typeof($(".flowplayer").flowplayer) === "function"){
			$(".flowplayer").flowplayer({});

		}
	}
	$("#wrapper").on("content-loaded", masonry_loaded);
	
	
	// Font effects
	
	if(typeof(fontEffects) != 'undefined' && fontEffects.length > 0){
		for(var i = 0; i < fontEffects.length; i++){
			$(fontEffects[i].target).addClass('font-effect-' + fontEffects[i].effect);
		}
	}

	/*
	*  Scroll to top link
	******************************************/
	$('#top-link').click(function(e){
		e.preventDefault();
		$("html,body").animate({ scrollTop: 0 }, "slow");
	});

	$(window).scroll(function() {
		if( $(this).scrollTop() > $(window).height() ){
			$('#top-link:hidden').stop(true, true).fadeIn().css("display","block");
		}else{
			$('#top-link').stop(true, true).fadeOut();
		}
	});

}); // jQuery(document).ready(function($)

var swipeboxInstance;