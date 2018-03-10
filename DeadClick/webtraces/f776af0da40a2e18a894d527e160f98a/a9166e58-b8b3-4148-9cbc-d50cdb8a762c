jQuery(document).ready(function(){ 

	jQuery('ul.menu').superfish({
		animation:   {height:'show'},
		speed:         'fast',
		autoArrows:  true,
		dropShadows: true
		});
				
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({
		theme:'dark_square',
		opacity: 0.9,
		show_title: false,
		social_tools: false
	});
	
	jQuery('#main-portfolio-carousel').tinycarousel({duration: 300});
		
	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	jQuery("h4.trigger").click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("fast");
		return false;
	});
	jQuery('h4.trigger').trigger('click');
	
	jQuery("#main-portfolio-carousel .preload").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".portfolio-image-holder").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".thumbnail-image").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".pictureframe").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".filter-image-holder").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	
	jQuery('.tips-north').tipsy({gravity: 'n'});
    
});

jQuery(function() {
	jQuery("ul.tabs").tabs("div.panes > div");
	jQuery(".accordion-tabs").tabs(".pane", {tabs: 'h5', effect: 'slide'});
	
});