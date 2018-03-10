/**
 * Callback for map initialization, called by the Google Maps API script after
 * it has been loaded.
 */
function calp_load_map()
{
	var options = {
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map( document.getElementById( 'calp-gmap-canvas' ), options );
	var marker = new google.maps.Marker({ map: map });
	var geocoder = new google.maps.Geocoder();

	geocoder.geocode(
		{ 
			'address': document.getElementById( 'calp-gmap-address' ).value,
		},
		function( results, status ) {
			if( status == google.maps.GeocoderStatus.OK ) {
				map.setCenter( results[0].geometry.location );
				marker.setPosition( results[0].geometry.location );
			}
		}
	);
}

// jQuery-less onready
var orig_onload = window.onload;
window.onload = function()
{
	if( typeof( orig_onload ) == 'function' )
		orig_onload();

	// Check if map container exists, and if so, load map into it
	if( document.getElementById( 'calp-gmap-canvas' ) ) {
		// Include Google Maps API to display embedded map, triggering callback
		// when script has loaded.
		var script = document.createElement( 'script' );
		script.type = 'text/javascript';
		script.src = 'http://maps.google.com/maps/api/js?sensor=false&callback=calp_load_map&language=' + calp_event.language;
		document.body.appendChild( script );
	}
}

jQuery( function( $ ) {
	$( '.calp-gmap-placeholder:first' ).click( function() {
		var map_el = $( '.calp-gmap-container-hidden:first');
		// delete placeholder
		$( this ).remove();
		// hide map
		map_el.hide();
		map_el.removeClass( 'calp-gmap-container-hidden' );
		map_el.fadeIn();
	});

	// Calendar widget navigation.
	$( '#calp-widget-calendar .calp-widget-nav ' ).live( 'click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var offset = $(this).attr('offset');
		var query = {
			'action': 'calp_widget_navigation',
			'calp_offset':  offset
		};
        
        var $container = $('.calp-agenda-widget-view');
        var $loading =   $('.calp-widget-loading');

        $loading.height( $container.height() );
        $loading.width( $container.width() );
        $loading.fadeIn('slow', function() {
			$.post( calp_event.ajaxurl, query, function( data ) {
	            $container.html( data.html );
			},'json');
		 });
	});
});