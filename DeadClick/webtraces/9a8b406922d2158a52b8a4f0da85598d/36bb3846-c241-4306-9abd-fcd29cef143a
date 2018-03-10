
function initializeMap(lat,lang,desc,showImage,imageTitle,divId) {
     var latlng = new google.maps.LatLng(lat,lang);
     var settings = {
		 zoom: 17,
		 center: latlng,
		 mapTypeControl: false,
		 scrollwheel: false,
		 draggable: true,
		 mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},     
		 navigationControl: true,
		 navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		 mapTypeId: google.maps.MapTypeId.ROADMAP};
     var map = new google.maps.Map(document.getElementById(divId), settings);
     var contentString = desc;
     var infowindow = new google.maps.InfoWindow({
          content: contentString
     });

     var companyImage = new google.maps.MarkerImage(showImage,
          new google.maps.Size(80,80),
          new google.maps.Point(0,0)
     );

     var companyPos = new google.maps.LatLng(lat,lang);

     var companyMarker = new google.maps.Marker({
		 position: companyPos,
		 map: map,
		 icon: companyImage,
		 title:imageTitle,
		 zIndex: 3
	});
	google.maps.event.addListener(companyMarker, 'click', function() {
		 infowindow.open(map,companyMarker);
	});
}


