jQuery(document).ready(function(){
	updateWidth();
	document.cookie = "touchEnabled=" + !!('ontouchstart' in window) ;
});

jQuery(window).resize(function() {
	updateWidth();	
});

var updateWidth = function() {
	document.cookie = "windowWidth=" + jQuery(window).width();
}

