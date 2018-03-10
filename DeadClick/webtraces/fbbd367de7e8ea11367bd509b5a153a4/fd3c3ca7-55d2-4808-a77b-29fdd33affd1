jQuery(document).ready(function($) {
"use strict";


	// iosslider Featured Slider

	$(document).ready(function() {

	$('.iosslider').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		infiniteSlider: true,
		snapSlideCenter: true,
		onSlideChange: slideChange,
		navNextSelector: $('.next'),
		navPrevSelector: $('.prev'),
		autoSlide: true,
		autoSlideTimer: 5000,
		autoSlideHoverPause: true
		});

	});

	function slideChange(args) {

		try {
			console.log('changed: ' + (args.currentSlideNumber - 1));
		} catch(err) {
		}

	}

	$(window).bind('orientationchange load', function(event) {
setTimeout(function() {

$('.iosslider').iosSlider('update');
}, 1000);

});


  	// Sticky Navigation

  	$(window).load(function(){
	var aboveHeight = $('#header-top-wrapper').outerHeight();
	    $(window).scroll(function(){
	    	if ($(window).scrollTop() > aboveHeight){
	    	$('#nav-wrapper').addClass('fixed').css('top','0').next()
	    	.css('margin-top','50px');
	    	} else {
	    	$('#nav-wrapper').removeClass('fixed').next()
	    	.css('margin-top','0');
	    	}
		});
	});


	// Tabs

	//When page loads...
	$('.tabber-container').each(function() {
		$(this).find(".tabber-content").hide(); //Hide all content

		$(this).find(".tabber-content:first").show(); //Show first tab content
	});

	//On Click Event
	$("#score-nav-wrapper select").change(function(e) {
		$(this).parents('.tabber-container').find(".tabber-content").hide(); //Hide all tab content

		var activeTab = $(this).find("option:selected").val(); //Find the href attribute value to identify the active tab + content
		$(this).parents('.tabber-container').find(activeTab).fadeIn(); //Fade in the active ID content

		e.preventDefault();
	});

	$("select.tabs option a").change(function(e) {
		e.preventDefault();
	})


	// Sticky Sidebar

$(window).load(function(){
$('#sidebar-wrapper').stickyMojo({
	footerID: '#footer-wrapper',
	contentID: '#content-main'
	});
});


	// Mobi nav menu

  	$("#mobi-nav select").change(function() {
	 window.location = $(this).find("option:selected").val();
	});


	// Search Toggle
	$("#search-button").click(function(){
	  $("#search-bar").slideToggle();
  	});


});