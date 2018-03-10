var tribe_attendees_list = {};
(function ( window, document, $, my ) {
	'use strict';

	my.selector = {
		container: '.tribe-attendees-list-container',
		title: '.tribe-attendees-list-title',
		list: '.tribe-attendees-list',
		items: '.tribe-attendees-list-item',
		hidden: '.tribe-attendees-list-hidden',
		shown: '.tribe-attendees-list-shown',
		showall: '.tribe-attendees-list-showall'
	};

	/**
	 * Initializes the attendees functionality
	 */
	my.init = function() {

		$( my.selector.showall ).on( 'click', my.toggle_items );
	};

	my.toggle_items = function( event ) {
		event.preventDefault();

		var $this = $( this ),
			$container = $this.parents( my.selector.container );

		$container.toggleClass( 'tribe-attendees-list-showjs' );

		return;
	};

	$( document ).ready( my.init );
} )( window, document, jQuery, tribe_attendees_list );
