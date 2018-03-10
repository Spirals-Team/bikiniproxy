(function() {
	var speed = 'fast';
	var slides_selector = '.cycloneslider-template-dark .cycloneslider-slides';
	
	jQuery(document).on('cycle-before', slides_selector, function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
		
		/* Hide captions and readmore */
		jQuery( this ).find('.cycloneslider-caption-title').stop().fadeOut(0).end().find('.cycloneslider-caption-description').stop().fadeOut(0).end().find('.cycloneslider-caption-more').stop().fadeOut(0);
	
	});
	
    jQuery(document).on('cycle-initialized cycle-after', slides_selector, function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
		var index = (event.type == 'cycle-initialized') ? optionHash.currSlide : optionHash.nextSlide;
		var slide = jQuery( optionHash.slides[ index ] );
		
		/* Cascade effect */
		slide.find('.cycloneslider-caption-title').fadeIn(speed, function(){ 
			slide.find('.cycloneslider-caption-description').fadeIn(speed, function(){
				slide.find('.cycloneslider-caption-more').fadeIn(speed);
			});
		});
	});
	
})();

