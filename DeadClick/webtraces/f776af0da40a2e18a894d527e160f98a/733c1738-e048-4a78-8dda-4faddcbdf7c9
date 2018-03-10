jQuery(function () {
	jQuery('.portfolio-thumbnail-block').hide();
	jQuery('.filter-thumbnail-block').hide();
});

var i = 0;//initialize
var int=0;//Internet Explorer Fix
jQuery(window).bind("load", function() {
	var int = setInterval("doThis(i)",500);

	jQuery('.filter-thumbnail-loader').hide();
	jQuery('.filter-thumbnail-block:hidden').fadeIn(500);

});

function doThis() {
	var images = jQuery('.portfolio-image-holder').length;
	if (i >= images) {
		clearInterval(int);
	}
	jQuery('.thumbnail-loader').eq(i).fadeOut(0);
	jQuery('.portfolio-thumbnail-block:hidden').eq(0).fadeIn(500);
	i++;
}