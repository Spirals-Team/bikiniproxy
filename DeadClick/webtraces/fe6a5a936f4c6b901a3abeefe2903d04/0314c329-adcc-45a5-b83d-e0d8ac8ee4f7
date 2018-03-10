jQuery(document).ready(function($){

/*-----------------------------------------------------------------------------------*/
/* Feedback slide/fade setup. */
/*-----------------------------------------------------------------------------------*/
	if ( jQuery( '.feedback' ).length ) {
		jQuery( '.feedback' ).each( function () {
			var effect = 'none';
			
			if ( jQuery( this ).hasClass( 'fade' ) ) { effect = 'fade'; }
			
			if ( effect != 'none' ) {
				jQuery( this ).slides({
					container: 'feedback-list', 
					next: 'btn-next', 
					prev: 'btn-prev', 
					effect: effect, 
					play: 5000, 
					fadeSpeed: 350, 
					autoHeight: true, 
					generatePagination: false, 
					hoverPause: true, 
					animationComplete: function () { jQuery( this ).stop(); }, 
					slidesLoaded: function () { jQuery( '.feedback-list .slides_control' ).css( 'height', jQuery( '.feedback-list .quote:first' ).height() ); }
				});
			}
		});
	}				

/*-----------------------------------------------------------------------------------*/
/* Make sure feedback widgets have the correct width on each feedback item. */
/*-----------------------------------------------------------------------------------*/

	if ( jQuery( '.widget_woo_feedback .feedback-list' ).length ) {
		jQuery('.widget_woo_feedback .feedback-list' ).each( function () {
			var width = jQuery( this ).parent().width();
			if ( width ) {
				jQuery( this ).find( '.quote' ).css( 'width', width + 'px' );
			}	
		});
	}
							
}); // End jQuery()