var tribe_event_tickets_plus = tribe_event_tickets_plus || {};
tribe_event_tickets_plus.meta = tribe_event_tickets_plus.meta || {};
tribe_event_tickets_plus.meta.event = tribe_event_tickets_plus.meta.event || {};

(function ( window, document, $, my ) {
	'use strict';

	/**
	 * Initializes the meta functionality
	 */
	my.init = function() {
		this.$ticket_form = $( '.tribe-events-tickets' ).closest( '.cart' );

		this.$ticket_form
			.on( 'change', '.quantity input, .quantity select', this.event.quantity_changed )
			.on( 'keyup', '.quantity input', this.event.quantity_changed )
			.on( 'submit', this.event.handle_submission );

		this.$ticket_form.find( '.quantity input:not([type="hidden"]), .quantity select' ).each( function() {
			my.set_quantity( $( this ) );
		} );

		$( '.tribe-event-tickets-plus-meta-fields' ).on( 'keydown', '.tribe-tickets-meta-number input', this.event.limit_number_field_typing );
	};

	my.render_fields = function( ticket_id, num ) {
		var $row = $( '.tribe-event-tickets-plus-meta' ).filter( '[data-ticket-id="' + ticket_id + '"]' );
		var $template = $row.find( '.tribe-event-tickets-plus-meta-fields-tpl' );
		var $fields = $row.find( '.tribe-event-tickets-plus-meta-fields' );
		var template_html = $template.html();

		if ( ! my.has_meta_fields( ticket_id ) ) {
			return;
		}

		var current_count = $fields.find( '.tribe-event-tickets-plus-meta-attendee' ).length;
		var diff = 0;

		if ( current_count > num ) {
			diff = current_count - num;

			$fields.find( '.tribe-event-tickets-plus-meta-attendee:nth-last-child(-n+' + diff + ')' ).remove();
			return;
		}

		diff = num - current_count;

		var i = 0;
		for ( ; i < diff; i++ ) {
			var tweaked_template_html = template_html;
			tweaked_template_html = template_html.replace( /tribe-tickets-meta\[\]/g, 'tribe-tickets-meta[' + ticket_id + '][' + ( current_count + i + 1 ) + ']' );
			tweaked_template_html = tweaked_template_html.replace( /tribe-tickets-meta_([a-z0-9\-]+)_/g, 'tribe-tickets-meta_$1_' + ( current_count + i + 1 ) + '_' );
			$fields.append( tweaked_template_html );
		}
	};

	my.set_quantity = function( $field ) {
		var quantity = parseInt( $field.val(), 10 );
		var ticket_id = parseInt( $field.closest( 'td' ).data( 'product-id' ), 10 );
		var template_html = $( document.getElementById( 'tribe-event-tickets-plus-meta-fields-tpl-' + ticket_id ) ).html();

		if ( quantity && my.has_meta_fields( ticket_id ) ) {
			$field.closest( 'table' ).find( '.tribe-event-tickets-plus-meta[data-ticket-id="' + ticket_id +'"]' ).show();
		} else {
			$field.closest( 'table' ).find( '.tribe-event-tickets-plus-meta[data-ticket-id="' + ticket_id +'"]' ).hide();
		}

		my.render_fields( ticket_id, quantity );
	};

	my.has_meta_fields = function( ticket_id ) {
		var template_html = $( document.getElementById( 'tribe-event-tickets-plus-meta-fields-tpl-' + ticket_id ) ).html();
		return !! $( template_html ).find( '.tribe-tickets-meta' ).length;
	};

	/**
	 * Validates the required fields for custom meta
	 */
	my.validate_submission = function() {
		var is_valid = true;
		var $fields = $( '.tribe-tickets-meta-required' );

		$fields.each( function() {
			var $el = $( this );
			var val = '';

			if ( $el.is( '.tribe-tickets-meta-radio' ) || $el.is( '.tribe-tickets-meta-checkbox' ) ) {
				val = $el.find( 'input:checked' ).length ? 'checked' : '';
			} else {
				val = $el.find( 'input, select, textarea' ).val();
			}

			if ( 0 === val.length ) {
				is_valid = false;
			}
		} );

		return is_valid;
	};

	my.event.quantity_changed = function() {
		my.set_quantity( $( this ) );
	};

	/**
	 * Ensure that only whole numbers can be entered into the number field
	 */
	my.event.limit_number_field_typing = function( e ) {
		if (
			// Allow: backspace, delete, tab, escape, and enter
			$.inArray( e.keyCode, [ 46, 8, 9, 27, 13, 110 ] ) !== -1 ||
			// Allow: Ctrl+A, Command+A
			( e.keyCode === 65 && ( e.ctrlKey === true || e.metaKey === true ) ) ||
			// Allow: Ctrl+C
			( e.keyCode === 67 && e.ctrlKey === true ) ||
			// Allow: Ctrl+V
			( e.keyCode === 86 && e.ctrlKey === true ) ||
			// Allow: Ctrl+X
			( e.keyCode === 88 && e.ctrlKey === true ) ||
			// Allow: home, end, left, right, down, up
			( e.keyCode >= 35 && e.keyCode <= 40 )
		) {
			// let it happen, don't do anything
			return;
		}
		// Ensure that it is a number and stop the keypress
		if ( ( e.shiftKey || ( e.keyCode < 48 || e.keyCode > 57 ) ) && ( e.keyCode < 96 || e.keyCode > 105 ) ) {
			e.preventDefault();
		}
	};

	/**
	 * Event to handle the submission action
	 *
	 * Validates required meta fields and stores meta data into cookies
	 */
	my.event.handle_submission = function( e ) {
		if ( ! my.validate_submission() ) {
			e.preventDefault();
			var $form = $( this ).closest( 'form' );

			$form.addClass( 'tribe-event-tickets-plus-meta-missing-required' );

			$( 'html, body').animate({
				scrollTop: $form.offset().top
			}, 300 );
			return;
		}

		var $meta_groups = $( '.tribe-event-tickets-plus-meta' );

		$meta_groups.each( function() {
			var $group = $( this );
			var ticket_id = $group.data( 'ticket-id' );
			var $attendees = $group.find( '.tribe-event-tickets-plus-meta-attendee' );

			if ( ! $attendees.length ) {
				return;
			}

			var data = $attendees.find( 'input, select, textarea' ).serialize();

			var key = 'tribe-event-tickets-plus-meta-' + ticket_id;

			var current = $.cookie( key );

			current = current ? $.deparam( current ) : null;

			if ( current && current.hasOwnProperty( 'tribe-tickets-meta' ) ) {
				data = $.deparam( data );

				if (
					current.hasOwnProperty( 'tribe-tickets-meta' )
					&& data.hasOwnProperty( 'tribe-tickets-meta' )
					&& 'undefined' !== typeof current['tribe-tickets-meta'][ ticket_id ]
					&& 'undefined' !== typeof data['tribe-tickets-meta'][ ticket_id ]
				) {
					data['tribe-tickets-meta'][ ticket_id ].forEach( function( el, index, collection ) {
						current['tribe-tickets-meta'][ ticket_id ].push( el );
					} );

					data = $.param( current );
				}
			} else {
				$.removeCookie( key );
			}

			// $.param does some weird stuff when converting a non-0 indexed array
			data = data.replace( /(tribe-tickets-meta\%5B\%5D\=\&)+/, '' );

			// $.param does some weird stuff when converting a non-0 indexed array
			data = data.replace( new RegExp( '(tribe-tickets-meta\%5B' + ticket_id + '\%5D\%5B\%5D\=\&)+' ), '' );

			$.cookie( key, data, {
				expires: 1,
				path: '/'
			} );
		} );
	};

	$( function() {
		my.init();
	} );
} )( window, document, jQuery, tribe_event_tickets_plus.meta );
