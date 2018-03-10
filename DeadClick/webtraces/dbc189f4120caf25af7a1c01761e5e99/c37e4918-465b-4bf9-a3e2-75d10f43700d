/* Init AddToAny when an AddToAny WordPress Widget is selectively refreshed for customizer preview. */
jQuery( function() {
	// Short-circuit selective refresh events if not in customizer preview or pre-4.5.
	if ( 'undefined' === typeof wp || ! wp.customize || ! wp.customize.selectiveRefresh ) {
		return;
	}
	
	function addtoany_init() {
		if ( window.a2a ) {
			a2a.init_all( 'page' );
		}
	}
	
	// Init AddToAny when a partial is rendered.
	wp.customize.selectiveRefresh.bind( 'partial-content-rendered', function( placement ) {
		if ( placement.container ) {
			addtoany_init();
		}
	} );
} );