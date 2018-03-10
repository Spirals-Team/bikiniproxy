/*
 * js_fda_hovers.js
 * Edited 27 September 2011
 *
 * Handle replacing an image with a hover image.  The images must either be 
 * wrapped in a container with the class "hover-fade", or be explicitely 
 * defined below (currently, only #go_button and #searchButton are defined).
 *
 * This code assumes that the hover graphic is in the same location as the 
 * default graphic, and that it has the same file name with the suffix of 
 * "_over".  As long as this graphic exists, and the image is wrapped in a 
 * container with the .hover-fade class, this code will replace any image.  
 * Multiple images can be in the .hover-fade container, and they will all have
 * the hover effect.
 */ 

// wait for the document to finish loading 
$(document).ready(function(){
		
	// this is the "search" button on the top of the page
	/*$('#go_button a').hover(
		function(){
			// replace with blue (hardcoded replace)
			var img_tag = $(this).find('img:first');
			img_tag.attr('src','/ucm/groups/fdagov-public/@system/documents/system/img_fdagov_masthead_search_button_over.jpg');
		}, function(){
			// replace with red (hardcoded replace)
			var img_tag = $(this).find('img:first');
			img_tag.attr('src','/ucm/groups/fdagov-public/@system/documents/system/img_fdagov_mast_search_button.jpg');
	});
	
	// this is the "search" button that appears in the middle of a sub-page
	$('#searchButton').hover(
		function(){
			// replace with blue (hardcoded replace)
			var img_tag = $(this).find('img:first');
			img_tag.attr('src','/ucm/groups/fdagov-public/@system/documents/system/img_fdagov_section_search_box_button_over.jpg');
		}, function(){
			// replace with red (hardcoded replace)
			var img_tag = $(this).find('img:first');
			img_tag.attr('src','/ucm/groups/fdagov-public/@system/documents/system/img_fdagov_section_search_box_button.jpg');
	});*/
	
	// this handles all other images that fall in the .hover-fade container
	/*$('.hover-fade img').hover(
		function() {
			// replace (generic)
			var img_src = $(this).attr('src');
			if(img_src.indexOf('over') == -1){
				img_src = img_src.split(".")[0];
				$(this).attr('src',img_src + '_over.png');
			}
		}, function() {
			// return to normal (generic)
			var img_src = $(this).attr('src');
			if(img_src.indexOf('over') != -1){
				img_src = img_src.split("_over")[0];
				$(this).attr('src',img_src + '.png');
			}
	});*/
	
	/* davids edits */
	$(".audience").hover(
	function(){$(this).closest(".mini-feature").animate({ backgroundColor: "#71B6D3" }, 300); $(this).css("color", "#FFF");},
	function(){$(this).closest(".mini-feature").animate({ backgroundColor: "#F4F4F4" }, 200); $(this).css("color", "#486387");}	
	);
	
	
	
	
	
	
});


