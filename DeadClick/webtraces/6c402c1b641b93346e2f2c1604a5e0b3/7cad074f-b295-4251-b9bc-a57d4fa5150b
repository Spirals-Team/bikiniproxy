"use strict";


jQuery(document).ready(function($){
    var map;
    var infoWindows = new Array();
    var infoLoc = null
    var pl; 
    var markers = [];
    var cityCircle = null;
    var maxRadius = 5000;


    function initialize(box) {
        var content = $(box).find('.map-box-content').data('content');
        var data = content.data[0];
        var mapOptions = {
			scrollwheel: false,
            zoom: parseInt(data.map_zoom),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($(box).find('.map-box-content').get(0), mapOptions);
        var pos = new google.maps.LatLng(data.map_lat, data.map_lnt);

        var options = {
            map: map,
            position: pos,
            content: 'something something'
        };
    
        map.setCenter(options.position);

        var markerOpts = {
            map: map,
            title: "Click to view Description",
            position: pos
        };
        
        if(data.map_marker != ''){
            markerOpts.image = data.map_marker;
			markerOpts.icon = data.map_marker;
        }
        var marker = new google.maps.Marker(markerOpts);
        marker.setMap(map);
        if(data.map_desc != ''){
            var infowindow = new google.maps.InfoWindow({
                content: data.map_desc,
                maxWidth: data.desc_width
            });

            google.maps.event.addListener(marker, 'click', function() {
                  infowindow.open(map, marker);
            });
			
			google.maps.event.addListenerOnce(map, 'idle', function(){
				setTimeout(function(){google.maps.event.trigger(marker, 'click')}, 1000);
			});
        }        
    }
    
    $('.map-box').each(function(index){
        initialize(this);
    });

});

