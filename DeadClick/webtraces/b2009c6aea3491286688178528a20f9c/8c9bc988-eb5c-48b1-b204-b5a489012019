( function( $ ) {
	'use strict';
	$( document ).ready( function() {

		$( '.astm-search-menu a' ).on( 'click', function( e ) {

			 // Cancels the default actions.
			e.stopPropagation();
			e.preventDefault();

			if ( 'static' === $( this ).parent().parent().css( 'position' ) ) {
				$( this ).parent().parent().css( 'position', 'relative' );
			}

			if ( $( this ).parent().hasClass( 'dropdown' ) ) {
				$( this ).parent().find( 'form' ).fadeToggle();
			} else if ( $( this ).parent().hasClass( 'sliding' ) ) {
				$( this ).parent().find( 'form' ).animate( { width: '300' } );
				$( this ).parent().find( 'form input[type="search"], form input[type="text"]' ).focus();
				$( this ).parent().addClass( 'open' );
			} else if ( $( this ).parent().hasClass( 'full-width-menu' ) ) {
				$( this ).parent().addClass( 'active-search' );
				$( this ).parent().find( 'form' ).animate( { width: '100%' } );
				$( this ).parent().addClass( 'open' );
				$( this ).parent().find( 'form input[type="search"], form input[type="text"]' ).focus();
			}

			$( '.astm-search-menu form input[type="search"], .astm-search-menu form input[type="text"]' ).focus();
		} );
	} );

	$( '.astm-search-menu form input[type="search"], .astm-search-menu form input[type="text"]' ).on( 'click', function( e ) {
		 e.stopPropagation();
		return false;
	} );

	$( window ).click( function() {
		if ( $( '.astm-search-menu' ).hasClass( 'open' ) ) {
			$( '.astm-search-menu form' ).animate(
				{ width: '0' },
				400,
				function() {
					$( '.astm-search-menu' ).removeClass( 'active-search' );
					$( '.astm-search-menu' ).removeClass( 'open' );
				}
			);
		} else if ( $( '.astm-search-menu' ).hasClass( 'dropdown' ) ) {
			$( '.astm-search-menu form' ).fadeOut();
		}
	});

} )( jQuery );
