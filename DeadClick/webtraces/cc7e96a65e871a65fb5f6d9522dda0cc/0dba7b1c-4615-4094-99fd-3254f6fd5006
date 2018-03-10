(function() {
	var main = '.cycloneslider-template-thumbnails';
	
	jQuery(document).on('cycle-initialized', main+' .cycloneslider-slides', function( event, optionHash ) {
		
		jQuery(this).parent().next().find('li').eq(optionHash.currSlide).addClass('current'); /* Highlight first thumb */
		
	});
	
	jQuery(document).on('cycle-before', '.cycloneslider-template-thumbnails .cycloneslider-slides', function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
		var i = optionHash.nextSlide;
		
		jQuery(this).parent().next().find('li').removeClass('current').eq(i).addClass('current');
		
	});
	
	jQuery(document).on('click', '.cycloneslider-thumbnails li', function(){
		var i = jQuery(this).index();
		
		jQuery(this).parents('.cycloneslider-thumbnails').prev().find('.cycloneslider-slides').cycle('goto', i);
	});
	
})();