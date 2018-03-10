/*
Plugin Name: WP-GPX-Maps
Plugin URI: http://www.devfarm.it/
Description: Draws a gpx track with altitude graph
Version: 1.3.15
Author: Bastianon Massimo
Author URI: http://www.pedemontanadelgrappa.it/
*/

(function ( $ ) {

	var infowindow;
	var CustomMarker;

	CustomMarker = function( map, latlng, src, img_w, img_h) {
		this.latlng_ = latlng;
		this.setMap(map);
		this.src_ = src;
		this.img_w_ = img_w;
		this.img_h_ = img_h;
	}

	CustomMarker.prototype = new google.maps.OverlayView();

	CustomMarker.prototype.draw = function() {
	
		var me = this;

		// Check if the el has been created.
		var el = this.img_;
		if (!el) {

			this.img_ = document.createElement('img');
			el = this.img_;
			el.style.cssText = "width:"+(this.img_w_/3)+"px;height:"+(this.img_h_/3)+"px;";
			el.setAttribute("class", "myngimages");
			el.setAttribute("lat",this.latlng_.lat());
			el.setAttribute("lon",this.latlng_.lng());
			el.src=this.src_;

			google.maps.event.addDomListener(el, "click", function(event) {
				google.maps.event.trigger(me, "click", el);
			});	
			
			google.maps.event.addDomListener(el, "mouseover", function(event) {
				var _t = el.style.top.replace('px','');
				var _l = el.style.left.replace('px','');
				jQuery(el).animate({
					height: me.img_h_,
					width : me.img_w_,
					top   : _t - (me.img_h_ / 3),
					left  : _l - (me.img_w_ / 3),
					'z-index' : 100
				  }, 100);
			});

			google.maps.event.addDomListener(el, "mouseout", function(event) {
				jQuery(el).animate({
					height: me.img_h_ / 3,
					width: me.img_w_ / 3,
					top   : me.orig_top,
					left  : me.orig_left,
					'z-index' : 1
				  }, 100);
			});	

			// Then add the overlay to the DOM
			var panes = this.getPanes();
			panes.overlayImage.appendChild(el);
		}

		// Position the overlay 
		var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);
			if (point) {
			  el.style.left = point.x + 'px';
			  el.style.top = point.y + 'px';
			  this.orig_left = point.x;
			  this.orig_top = point.y;
			}
	};

	CustomMarker.prototype.remove = function() {
		// Check if the overlay was on the map and needs to be removed.
		if (this.img_) {
		  this.img_.parentNode.removeChild(this.img_);
		  this.img_ = null;
		}
	};
 
    $.fn.wpgpxmaps = function( params ) {

		var targetId = params.targetId;
		var mapType = params.mapType;
		var mapData = params.mapData;
		var graphDist = params.graphDist;
		var graphEle = params.graphEle;
		var graphSpeed = params.graphSpeed;
		var graphHr = params.graphHr;
		var graphAtemp = params.graphAtemp;
		var graphCad = params.graphCad;
		var graphGrade = params.graphGrade;
		var waypoints = params.waypoints;
		var unit = params.unit;
		var unitspeed = params.unitspeed;
		var color1 = params.color1;
		var color2 = params.color2;
		var color3 = params.color3;
		var color4 = params.color4;
		var color5 = params.color5;
		var color6 = params.color6;
		var color7 = params.color7;
		var chartFrom1 = params.chartFrom1;
		var chartTo1 = params.chartTo1;
		var chartFrom2 = params.chartFrom2;
		var chartTo2 = params.chartTo2;
		var startIcon = params.startIcon;
		var waypointIcon = params.waypointIcon;
		var endIcon = params.endIcon;
		var currentIcon = params.currentIcon;
		var zoomOnScrollWheel = params.zoomOnScrollWheel;
		var lng = params.langs;
		var pluginUrl = params.pluginUrl;
		var usegpsposition = params.usegpsposition;
		var currentpositioncon= params.currentpositioncon;
		var ThunderforestApiKey = params.TFApiKey;
		
		var hasThunderforestApiKey = (ThunderforestApiKey + '').length > 0;

		// Unit of measure settings
		var l_s;
		var l_x;
		var l_y;
		var l_grade = { suf : "%", dec : 1 };
		var l_hr = { suf : "", dec : 0 };
		var l_cad = { suf : "", dec : 0 };
		
		var el = document.getElementById("wpgpxmaps_" + targetId);
		var el_map = document.getElementById("map_" + targetId);
		var el_chart = document.getElementById("chart_" + targetId);
		var el_report = document.getElementById("report_" + targetId);
		var el_osm_credits = document.getElementById("wpgpxmaps_" + targetId + "_osm_footer");
		
		var mapWidth = el_map.style.width;
		
		var mapTypeIds = [];
		for(var type in google.maps.MapTypeId) {
			mapTypeIds.push(google.maps.MapTypeId[type]);
		}
		mapTypeIds.push("OSM1");
		mapTypeIds.push("OSM2");
		mapTypeIds.push("OSM3");
		mapTypeIds.push("OSM4");
		mapTypeIds.push("OSM5");
		mapTypeIds.push("OSM6");
		
		var ngImageMarkers = [];
		
		switch (mapType)
		{
			case 'TERRAIN': { mapType = google.maps.MapTypeId.TERRAIN; break;}
			case 'SATELLITE': { mapType = google.maps.MapTypeId.SATELLITE; break;}
			case 'ROADMAP': { mapType = google.maps.MapTypeId.ROADMAP; break;}
			case 'OSM1': { mapType = "OSM1"; break;}
			case 'OSM2': { mapType = "OSM2"; break;}
			case 'OSM3': { mapType = "OSM3"; break;}
			case 'OSM4': { mapType = "OSM4"; break;}
			case 'OSM5': { mapType = "OSM5"; break;}
			case 'OSM6': { mapType = "OSM6"; break;}
			default: { mapType = google.maps.MapTypeId.HYBRID; break;}
		}
		
		if ( mapType == "TERRAIN" || mapType == "SATELLITE" || mapType == "ROADMAP" )
		{
			// google maps
		} else {
			// Show OpenStreetMaps credits
			$(el_osm_credits).show();
		}
		
		var map = new google.maps.Map(el_map, {
			mapTypeId: mapType,
			scrollwheel: (zoomOnScrollWheel == 'true'),
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
				mapTypeIds: mapTypeIds
			}
		}); 
			
		map.mapTypes.set("OSM1", new google.maps.ImageMapType({
			getTileUrl: function(coord, zoom) {
				return "https://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
			},
			tileSize: new google.maps.Size(256, 256),
			name: "OSM",
			alt : "Open Street Map",
			maxZoom: 18
		}));
		
		map.mapTypes.set("OSM2", new google.maps.ImageMapType({
			getTileUrl: function(coord, zoom) {
				if (hasThunderforestApiKey)
					return "https://a.tile.thunderforest.com/cycle/" + zoom + "/" + coord.x + "/" + coord.y + ".png?apikey=" + ThunderforestApiKey;
				else
					return "http://a.tile.opencyclemap.org/cycle/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
			},
			tileSize: new google.maps.Size(256, 256),
			name: "OCM",
			alt : "Open Cycle Map",
			maxZoom: 18
		}));
		
		map.mapTypes.set("OSM4", new google.maps.ImageMapType({
			getTileUrl: function(coord, zoom) {
				if (hasThunderforestApiKey)
					return "https://a.tile.thunderforest.com/transport/" + zoom + "/" + coord.x + "/" + coord.y + ".png?apikey=" + ThunderforestApiKey;
				else
					return "http://a.tile2.opencyclemap.org/transport/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
			},
			tileSize: new google.maps.Size(256, 256),
			name: "OCM-Tran",
			alt : "Open Cycle Map - Transport",
			maxZoom: 18
		}));
		
		map.mapTypes.set("OSM5", new google.maps.ImageMapType({
			getTileUrl: function(coord, zoom) {
				if (hasThunderforestApiKey)
					return "https://a.tile.thunderforest.com/landscape/" + zoom + "/" + coord.x + "/" + coord.y + ".png?apikey=" + ThunderforestApiKey;
				else
					return "http://a.tile3.opencyclemap.org/landscape/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
			},
			tileSize: new google.maps.Size(256, 256),
			name: "OCM-Land",
			alt : "Open Cycle Map - Landscape",
			maxZoom: 18
		}));
		
		map.mapTypes.set("OSM6", new google.maps.ImageMapType({
			getTileUrl: function(coord, zoom) {
				return "https://tile2.maptoolkit.net/terrain/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
			},
			tileSize: new google.maps.Size(256, 256),
			name: "MTK-Terr",
			alt : "MapToolKit - Terrain",
			maxZoom: 18
		}));
			
		// FULL SCREEN BUTTON
		var controlDiv = document.createElement('div');
		controlDiv.style.padding = '5px';

		// Set CSS for the control border
		var controlUI = document.createElement('img');
		controlUI.src = pluginUrl + "/wp-gpx-maps/img/goFullScreen.png";
		controlUI.style.cursor = 'pointer';
		controlUI.title = lng.goFullScreen;
		controlDiv.appendChild(controlUI);

		// Setup the click event listeners
		google.maps.event.addDomListener(controlUI, 'click', function(event) {
			var isFullScreen = (controlUI.isfullscreen == true);
			var mapDiv = [ map.getDiv(), map.getDiv().parentNode ];
			var center = map.getCenter();
			
			if (isFullScreen)
			{
				map.setOptions( { scrollwheel : (zoomOnScrollWheel == 'true') } );
				jQuery(mapDiv).css("position", 'relative').
				  css('top', 0).
				  css("width", controlUI.googleMapWidth).
				  css("height", controlUI.googleMapHeight).
				  css("z-index", '');
				google.maps.event.trigger(map, 'resize');
				map.setCenter(center);
				controlUI.src = pluginUrl + "/wp-gpx-maps/img/goFullScreen.png";	
				controlUI.title = lng.gofullscreen;
			}
			else
			{
				map.setOptions( { scrollwheel : true } );		
				controlUI.googleMapWidth = jQuery(mapDiv).css('width');
				controlUI.googleMapHeight = jQuery(mapDiv).css('height');		
				jQuery(mapDiv).css("position", 'fixed').
				  css('top', 0).
				  css('left', 0).
				  css("width", '100%').
				  css("height", '100%').
				  css("z-index", '100');
				jQuery("#wpadminbar").each(function(){
					jQuery(mapDiv).css('top', jQuery(this).height());
				});
				google.maps.event.trigger(map, 'resize');
				map.setCenter(center);
				controlUI.src = pluginUrl + "/wp-gpx-maps/img/exitFullFcreen.png";
				controlUI.title = lng.exitFullFcreen;
			}
			controlUI.isfullscreen = !isFullScreen;
			return false;			
		});
		
		
		controlDiv.index = 1;
		map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv);
		
		var bounds = new google.maps.LatLngBounds();
		
		var markerCurrentPosition = null;
		
		if ( usegpsposition == "true" )
		{

			// Try HTML5 geolocation
			if(navigator.geolocation) {

				navigator.geolocation.getCurrentPosition(function(position) {
				
					// user position
					var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				
					// draw current position marker
					markerCurrentPosition = new google.maps.Marker({
										  position: pos,
										  map: map,
										  title: "you",
										  animation: google.maps.Animation.DROP,
										  zIndex: 10
									  });
									  
					if (currentpositioncon)
					{
						markerCurrentPosition.setIcon(currentpositioncon);
					}
					bounds.extend(pos);
					
					map.setCenter(bounds.getCenter()); 
					map.fitBounds(bounds);
					
					
				}, function() {});
				
				navigator.geolocation.watchPosition(function(position){
														// move current position marker
														if (markerCurrentPosition != null)
														{
															markerCurrentPosition.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
														}
													}, 
													function(e){
														// some errors
													}, 
													{
													  enableHighAccuracy: false,
													  timeout: 5000,
													  maximumAge: 0
													});
			}
		
		}
		
		
		// Print WayPoints
		if (!jQuery.isEmptyObject(waypoints))
		{

			var image = new google.maps.MarkerImage('https://maps.google.com/mapfiles/ms/micons/flag.png',
				new google.maps.Size(32, 32),
				new google.maps.Point(0,0),
				new google.maps.Point(16, 32)
			);
			var shadow = new google.maps.MarkerImage('https://maps.google.com/mapfiles/ms/micons/flag.shadow.png',
				new google.maps.Size(59, 32),
				new google.maps.Point(0,0),
				new google.maps.Point(16, 32)
			);
			
			if (waypointIcon!='')
			{
				image = new google.maps.MarkerImage(waypointIcon);
				shadow = '';
			}
			
			jQuery.each(waypoints, function(i, wpt) {
				
				var lat= wpt.lat;
				var lon= wpt.lon;
				var sym= wpt.sym;
				var typ= wpt.type;
				var wim= image;
				var wsh= shadow;

				if (wpt.img) {
					wim = new google.maps.MarkerImage(wpt.img);
					wsh = '';
				}

				addWayPoint(map, wim, wsh, lat, lon, wpt.name, wpt.desc);
				bounds.extend(new google.maps.LatLng(lat, lon));
				
			});
		}
		
		// Print Images
		
		jQuery("#ngimages_" + targetId).attr("style","display:block;position:absolute;left:-50000px");
		jQuery("#ngimages_" + targetId + " span").each(function(){
		
			var imageLat  = jQuery(this).attr("lat");
			var imageLon  = jQuery(this).attr("lon");
			
			jQuery("img",this).each(function() {
			
				jQuery(this).load(function(){

					var imageUrl  = jQuery(this).attr("src");
					var img_w = jQuery(this).width();
					var img_h = jQuery(this).height();
					
					imageLat = imageLat.replace(",", ".");
					imageLon = imageLon.replace(",", ".");
					
					var p = new google.maps.LatLng(imageLat, imageLon);
					bounds.extend(p);

					var mc = new CustomMarker(map, p, imageUrl, img_w, img_h );
					
					ngImageMarkers.push(mc);
					
					google.maps.event.addListener(mc, "click", function(div) {
						var lat = div.getAttribute("lat");
						var lon = div.getAttribute("lon");
						var a = getClosestImage(lat,lon,targetId).childNodes[0];			
						if (a)
						{
							a.click();
						}
					});

				});
			
				if (jQuery(this).width() + jQuery(this).height() > 0)
				{
					jQuery(this).trigger("load");
				}

			});
		
		});
		
		/*
		
		// Nextgen Pro Lightbox FIX
		var _xx = jQuery("#ngimages_" + targetId + " .nextgen_pro_lightbox");
		if (_xx.length > 0)
		{
		
			var rnd1 = Math.random().toString(36).substring(7);
			var rnd2 = Math.random().toString(36).substring(7);
		
			//get first gallery without images
			for (var _temp in galleries) {  
				var _gal = galleries[_temp];
				
				if (_gal.source == "random_images" && _gal.wpgpxmaps != true )
				{
				
					_gal.source == "galleries";
					_gal.wpgpxmaps = true;
					_transient_id = _temp.replace("gallery_","")
					_gal["entity_ids"] = [];
					_gal["image_ids"] = [];
					_gal["gallery_ids"] = [96];
					for (var i=0;i<_xx.length;i++)
					{ 
						var __xx = jQuery(_xx[i]);
						__xx.attr("data-nplmodal-gallery-id", _transient_id);
						_gal["image_ids"].push(__xx.attr("data-image-id"));			
					}
					break;
				}
			}
		}
		*/
		
		if ( jQuery("#ngimages_" + targetId + " span").length > 0 )
		{
		
			// Set CSS for the control border
			var controlUIhi = document.createElement('img');
			controlUIhi.src = pluginUrl + "/wp-gpx-maps/img/hideImages.png";
			controlUIhi.style.cursor = 'pointer';
			controlUIhi.title = lng.hideImages;
			controlDiv.appendChild(controlUIhi);

			// Setup the click event listeners
			google.maps.event.addDomListener(controlUIhi, 'click', function(event) {
				var isImagesHidden = (controlUIhi.isImagesHidden == true);
				var mapDiv = map.getDiv();
				var center = map.getCenter();
				
				if (isImagesHidden)
				{
					for (var i=0; i<ngImageMarkers.length; i++) {
						ngImageMarkers[i].setMap(map);
					}			
					controlUIhi.src = pluginUrl + "/wp-gpx-maps/img/hideImages.png";	
					controlUIhi.title = lng.hideImages;
				}
				else
				{
					for (var i=0; i<ngImageMarkers.length; i++) {
						ngImageMarkers[i].setMap(null);
					}			
					controlUIhi.src = pluginUrl + "/wp-gpx-maps/img/showImages.png";
					controlUIhi.title = lng.showImages;
				}
				controlUIhi.isImagesHidden = !isImagesHidden;
				return false;			
			});

		}
		
		
		// Print Track
		if (mapData != '')		
		{
			var points = [];
			var lastCut=0;
			var polylinenes = [];
			var polyline_number=0;
			var color=0;
			for (i=0; i < mapData.length; i++) 
			{	
				if (mapData[i] == null)
				{
				

						color=color1[polyline_number % color1.length];


					var poly = new google.maps.Polyline({
						path: points.slice(lastCut,i),
						strokeColor: color,
						strokeOpacity: .7,
						strokeWeight: 4,
						map: map
					});
					polylinenes.push(poly);
					lastCut=i;
					polyline_number= polyline_number +1;
					//var p = new google.maps.LatLng(mapData[i-1][0], mapData[i-1][1]);
					//points.push(p);
					//bounds.extend(p);
				}
				else
				{
					var p = new google.maps.LatLng(mapData[i][0], mapData[i][1]);
					points.push(p);
					bounds.extend(p);			
				}
			}
			
			if (points.length != lastCut)
			{
					if ( polyline_number < color1.length)
					{
						color=color1[polyline_number];
					}
					else
					{
						color=color1[color1.length-1];
					}
				var poly = new google.maps.Polyline({
					path: points.slice(lastCut),
					strokeColor: color,
					strokeOpacity: .7,
					strokeWeight: 4,
					map: map
				});
				polylinenes.push(poly);			
				currentPoints = [];
				polyline_number= polyline_number +1;
			}
			
			if (startIcon != '')
			{
				var startIconImage = new google.maps.MarkerImage(startIcon);
				var startMarker = new google.maps.Marker({
						  position: points[0],
						  map: map,
						  title: "Start",
						  animation: google.maps.Animation.DROP,
						  icon: startIconImage,
						  zIndex: 10
					  });

			}

			if (endIcon != '')
			{
				var endIconImage = new google.maps.MarkerImage(endIcon);
				var startMarker = new google.maps.Marker({
						  position: points[ points.length -1 ],
						  map: map,
						  title: "Start",
						  animation: google.maps.Animation.DROP,
						  icon: endIconImage,
						  zIndex: 10
					  });
			
			}

			var first = getItemFromArray(mapData,0)
			
			if (currentIcon == '')
			{
				currentIcon = "https://maps.google.com/mapfiles/kml/pal4/icon25.png";
			}
			
			var current = new google.maps.MarkerImage(currentIcon,
				new google.maps.Size(32, 32),
				new google.maps.Point(0,0),
				new google.maps.Point(16, 16)
			);
			
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(first[0], first[1]),
				title:"Start",
				icon: current,
				map: map,
				zIndex: 10
			});
			
			for (i=0; i < polylinenes.length; i++) 
			{	

				google.maps.event.addListener(polylinenes[i],'mouseover',function(event){
					if (marker)
					{
						marker.setPosition(event.latLng);	
						marker.setTitle(lng.currentPosition);
						if (hchart)
						{
							var tooltip = hchart.tooltip;
							var l1 = event.latLng.lat();
							var l2 = event.latLng.lng();
							var ci = getClosestIndex(mapData,l1,l2);
							var items = [];
							var seriesLen = hchart.series.length;
							for(var i=0; i<seriesLen;i++)
							{
								items.push(hchart.series[i].data[ci]);
							}
							if (items.length > 0)
								tooltip.refresh(items);
						}
					}
				});		
			}
		}
		
		map.setCenter(bounds.getCenter()); 
		map.fitBounds(bounds);
		
		// FIX post tabs	
		var $_tab = $(el).closest(".wordpress-post-tabs").eq(0);	
		if ($_tab)
		{
			$("div > ul > li > a", $_tab).click(function(e){		
				setTimeout(function(e){		
					google.maps.event.trigger(map, 'resize');
					//map.setCenter(bounds.getCenter());
					map.fitBounds(bounds);
					tabResized = true;
				},10);
			});
		}	
		
		var controlUIcenter = null;
		var idFirstCenterChanged = true;
		
		google.maps.event.addListener(map, 'center_changed', function() {

			if (idFirstCenterChanged == true)
			{
				idFirstCenterChanged = false;
				return;
			}
		
			if (controlUIcenter == null)
			{
				// Set CSS for the control border
				controlUIcenter = document.createElement('img');
				controlUIcenter.src = pluginUrl + "/wp-gpx-maps/img/backToCenter.png";
				controlUIcenter.style.cursor = 'pointer';
				controlUIcenter.title = lng.backToCenter;
				controlDiv.appendChild(controlUIcenter);

				// Setup the click event listeners
				google.maps.event.addDomListener(controlUIcenter, 'click', function(event) {
					map.setCenter(bounds.getCenter()); 
					map.fitBounds(bounds);
					controlDiv.removeChild(controlUIcenter);
					controlUIcenter = null;
					return false;			
				});		
			}

		});
		
		var graphh = jQuery('#hchart_' + params.targetId).css("height");
		
		if (graphDist != '' && (graphEle != '' || graphSpeed != '' || graphHr != '' || graphAtemp != '' || graphCad != '') && graphh != "0px")
		{

			var valLen = graphDist.length;
		
			var l_y_arr = [];
			
			if (unit=="1")
			{
				l_x = { suf : "mi", dec : 1 };
				l_y = { suf : "ft", dec : 0 };
			}
			else if (unit=="2")
			{
				l_x = { suf : "km", dec : 1 };
				l_y = { suf : "m", dec : 0 };
			}
			else if (unit=="3")
			{
				l_x = { suf : "NM", dec : 1 };
				l_y = { suf : "m", dec : 0 };
			}		
			else if (unit=="4")
			{
				l_x = { suf : "mi", dec : 1 };
				l_y = { suf : "m", dec : 0 };
			}
			else if (unit=="5")
			{
				l_x = { suf : "NM", dec : 1 };
				l_y = { suf : "ft", dec : 0 };
			}
			else
			{
				l_x = { suf : "m", dec : 0 };
				l_y = { suf : "m", dec : 0 };
			}
			
			var nn = 1111.1;
			var _nn = nn.toLocaleString();
			var _nnLen = _nn.length;
			var decPoint = _nn.substring(_nnLen - 2, _nnLen - 1);
			var thousandsSep = _nn.substring(1, 2);
			
			if (decPoint == "1")
				decPoint = ".";
				
			if (thousandsSep == "1")
				thousandsSep = "";		
				
			// define the options
			var hoptions = {
				chart: {
					renderTo: 'hchart_' + params.targetId,
					type: 'area',
					events: {
						selection: function(event) {

							if (event.xAxis) {
							
								el_report.innerHTML = 'Zoom: '+ (event.xAxis[0].min).toFixed(l_x.dec) + ' ' + l_x.suf + ' -> '+ (event.xAxis[0].max).toFixed(decPoint) + ' ' + l_x.suf + '<br />';						
							
								var seriesLength = event.currentTarget.series.length;
							
								for (var i = 0; i < seriesLength; i++) {
								
									var dataX = {value: 0, count: 0};
									
									var serie = event.currentTarget.series[i];
									var points = serie.points;
									var min = event.xAxis[0].min, max = event.xAxis[0].max;
									
									for (var j = 0; j < points.length; j++) {
										if (points[j].x >= min && points[j].x <= max) {
											dataX.value += points[j].y;
											dataX.count +=1;
										}
									}
									
									var name = serie.name;
									
									if (name == lng.altitude) {
										el_report.innerHTML += name + ' avg: ' + (dataX.value / dataX.count).toFixed(l_y.dec) + " " + l_y.suf + "<br />";
									} else if (name == lng.speed) {
										el_report.innerHTML += name + ' avg: ' + (dataX.value / dataX.count).toFixed(l_s.dec) + " " + l_s.suf + "<br />";
									} else if (name == lng.grade) {
										el_report.innerHTML += name + ' avg: ' + (dataX.value / dataX.count).toFixed(l_grade.dec) + " " + l_grade.suf + "<br />";
									} else if (name == lng.cadence) {
										el_report.innerHTML += name + ' avg: ' + (dataX.value / dataX.count).toFixed(l_cad.dec) + " " + l_cad.suf + "<br />";
									} else if (name == lng.heartRate) {
										el_report.innerHTML += name + ' avg: ' + (dataX.value / dataX.count).toFixed(l_hr.dec) + " " + l_hr.suf + "<br />";
									} else
									{
										el_report.innerHTML += serie.name + ' avg: ' + dataX.value / dataX.count + "<br />";
									}

								}

								el_report.innerHTML += "<br />"
								
							} else {
								el_report.innerHTML = '';
							}
						}
					},
					zoomType: 'x'
				},
				title: {
					text: null
				},
				xAxis: {
					type: 'integer',
					//gridLineWidth: 1,
					//tickInterval: 1000,
					labels: {
						formatter: function() {
							return Highcharts.numberFormat(this.value, l_x.dec,decPoint,thousandsSep) + l_x.suf;
						}
					}
				},
				yAxis: [],
				legend: {
					align: 'center',
					verticalAlign: 'top',
					y: -5,
					floating: true,
					borderWidth: 0
				},
				tooltip: {
					shared: true,
					crosshairs: true,
					formatter: function() {
						if (marker)
						{
							var hchart_xserie = hchart.xAxis[0].series[0].data;
							for(var i=0; i<hchart_xserie.length;i++){
								var item = hchart_xserie[i];
								if(item.x == this.x)
								{
									var point = getItemFromArray(mapData,i)
									if (point)
									{
										marker.setPosition(new google.maps.LatLng(point[0],point[1]));
									}
									marker.setTitle(lng.currentPosition);
									i+=10000000;
								}
							}			
						}
						var tooltip = "<b>" + Highcharts.numberFormat(this.x, l_x.dec,decPoint,thousandsSep) + l_x.suf + "</b><br />"; 
						for (i=0; i < this.points.length; i++)
						{
							tooltip += this.points[i].series.name + ": " + Highcharts.numberFormat(this.points[i].y, l_y_arr[i].dec,decPoint,thousandsSep) + l_y_arr[i].suf + "<br />"; 					
						}
						return tooltip;
					}
				},
				plotOptions: {
					area: {
						fillOpacity: 0.1,
						connectNulls : true,
						marker: {
							enabled: false,
							symbol: 'circle',
							radius: 2,
							states: {
								hover: {
									enabled: true
								}
							}
						}					
					}
				},
				credits: {
					enabled: false
				},	
				series: []
			};
		
			if (graphEle != '')
			{
				
				var eleData = [];
				var myelemin = 99999;
				var myelemax = -99999;
		
				for (i=0; i<valLen; i++) 
				{
					if (graphDist[i] != null)
					{
						var _graphEle = graphEle[i];
						eleData.push([graphDist[i],_graphEle]);
						if (_graphEle > myelemax) 
							myelemax = _graphEle; 
						if (_graphEle < myelemin) 
							myelemin = _graphEle;
					}
				}

				var yaxe = { 
					title: { text: null },
					labels: {
						align: 'left',
						formatter: function() {
							return Highcharts.numberFormat(this.value, l_y.dec,decPoint,thousandsSep) + l_y.suf;
						}
					}
				}
		
				if ( chartFrom1 != '' )
				{
					yaxe.min = chartFrom1;
					yaxe.startOnTick = false;
				}
				else { 
					yaxe.min = myelemin; 
				}
				
				if ( chartTo1 != '' )
				{
					yaxe.max = chartTo1;
					yaxe.endOnTick = false;
				}
				else { 
					yaxe.max = myelemax; 
				}
									
				hoptions.yAxis.push(yaxe);
				hoptions.series.push({
										name: lng.altitude,
										lineWidth: 1,
										marker: { radius: 0 },
										data : eleData,
										color: color2,
										yAxis: hoptions.series.length
									});			
				
				l_y_arr.push(l_y);
			}
			
			if (graphSpeed != '')			{
				if (unitspeed == '6') /* min/100m */				{					l_s = { suf : "min/100m", dec : 2 };				} 
				else if (unitspeed == '5') /* knots */
				{
					l_s = { suf : "knots", dec : 2 };
				} 
				else if (unitspeed == '4') /* min/miles */
				{
					l_s = { suf : "min/mi", dec : 2 };
				} 
				else if (unitspeed == '3') /* min/km */
				{
					l_s = { suf : "min/km", dec : 2 };
				} 
				else if (unitspeed == '2') /* miles/h */
				{
					l_s = { suf : "mi/h", dec : 0 };
				} 
				else if (unitspeed == '1') /* km/h */
				{
					l_s = { suf : "km/h", dec : 0 };
				} 
				else
				{
					l_s = { suf : "m/s", dec : 0 };
				}
				
				var speedData = [];
			
				for (i=0; i<valLen; i++) 
				{
					if (graphDist[i] != null)
						speedData.push([graphDist[i],graphSpeed[i]]);
				}

				var yaxe = { 
					title: { text: null },
					labels: {
						//align: 'right',
						formatter: function() {
							return Highcharts.numberFormat(this.value, l_s.dec,decPoint,thousandsSep) + l_s.suf;
						}
					},
					opposite: true
				}
							
				if ( chartFrom2 != '' )
				{
					yaxe.min = chartFrom2;
					yaxe.startOnTick = false;				
				}
				
				if ( chartTo2 != '' )
				{
					yaxe.max = chartTo2;
					yaxe.endOnTick = false;				
				}
									
				hoptions.yAxis.push(yaxe);
				hoptions.series.push({
										name: lng.speed,
										lineWidth: 1,
										marker: { radius: 0 },
										data : speedData,
										color: color3,
										yAxis: hoptions.series.length
									});			
				
				l_y_arr.push(l_s);
			}
			
			if (graphHr != '')
			{
				
				var hrData = [];
			
				for (i=0; i<valLen; i++) 
				{
					if (graphDist[i] != null)
					{
						var c = graphHr[i];
						if (c==0)
							c = null;
						hrData.push([graphDist[i],c]);				
					}
				}

				var yaxe = { 
					title: { text: null },
					labels: {
						//align: 'right',
						formatter: function() {
							return Highcharts.numberFormat(this.value, l_hr.dec,decPoint,thousandsSep) + l_hr.suf;
						}
					},
					opposite: true
				}

				hoptions.yAxis.push(yaxe);
				hoptions.series.push({
										name: lng.heartRate,
										lineWidth: 1,
										marker: { radius: 0 },
										data : hrData,
										color: color4,
										yAxis: hoptions.series.length
									});			
				
				l_y_arr.push(l_hr);
			}
			
			
			if (graphAtemp != '')
			{
				
				var atempData = [];
			
				for (i=0; i<valLen; i++) 
				{
					if (graphDist[i] != null)
					{
						var c = graphAtemp[i];
						if (c==0)
							c = null;
						atempData.push([graphDist[i],c]);				
					}
				}

				var yaxe = { 
					title: { text: null },
					labels: {
						//align: 'right',
						formatter: function() {
							return Highcharts.numberFormat(this.value, 1, decPoint,thousandsSep) + " °C";
						}
					},
					opposite: true
				}

				hoptions.yAxis.push(yaxe);
				hoptions.series.push({
										name: lng.atemp,
										lineWidth: 1,
										marker: { radius: 0 },
										data : atempData,
										color: color7,
										yAxis: hoptions.series.length
									});			
				
				l_y_arr.push({ suf : "°C", dec : 1 });
			}
			
			
			if (graphCad != '')
			{
				
				var cadData = [];
			
				for (i=0; i<valLen; i++) 
				{
					if (graphDist[i] != null)
					{
						var c = graphCad[i];
						if (c==0)
							c = null;
						cadData.push([graphDist[i],c]);
					}
				}

				var yaxe = { 
					title: { text: null },
					labels: {
						//align: 'right',
						formatter: function() {
							return Highcharts.numberFormat(this.value, l_cad.dec,decPoint,thousandsSep) + l_cad.suf;
						}
					},
					opposite: true
				}
									
				hoptions.yAxis.push(yaxe);
				hoptions.series.push({
										name: lng.cadence,
										lineWidth: 1,
										marker: { radius: 0 },
										data : cadData,
										color: color5,
										yAxis: hoptions.series.length
									});			
				
				l_y_arr.push(l_cad);
			}

			if (graphGrade != '')
			{
				
				var cadData = [];
			
				for (i=0; i<valLen; i++) 
				{
					if (graphDist[i] != null)
					{
						var c = graphGrade[i];
						if (c==0)
							c = null;
						cadData.push([graphDist[i],c]);
					}
				}

				var yaxe = { 
					title: { text: null },
					labels: {
						//align: 'right',
						formatter: function() {
							return Highcharts.numberFormat(this.value, l_grade.dec,decPoint,thousandsSep) + l_grade.suf;
						}
					},
					opposite: true
				}
									
				hoptions.yAxis.push(yaxe);
				hoptions.series.push({
										name: lng.grade,
										lineWidth: 1,
										marker: { radius: 0 },
										data : cadData,
										color: color6,
										yAxis: hoptions.series.length
									});			
				
				l_y_arr.push(l_grade);
			}

			var hchart = new Highcharts.Chart(hoptions);
		
		}
		else  {
			jQuery("#hchart_" + params.targetId).css("display","none");
		}
	
        return this;
    };
	
	function addWayPoint(map, image, shadow, lat, lon, title, descr)
	{
		var p = new google.maps.LatLng(lat, lon);
		var m = new google.maps.Marker({
							  position: p,
							  map: map,
							  title: title,
							  animation: google.maps.Animation.DROP,
							  shadow: shadow,
							  icon: image,
							  zIndex: 5
						  });
						  
		google.maps.event.addListener(m, 'click', function() {
			if (infowindow)
			{
				infowindow.close(); 		
			}
			var cnt = '';	
			
			if (title=='')
			{
				cnt = "<div>" + unescape(descr) + "</div>";
			}
			else
			{
				cnt = "<div><b>" + title + "</b><br />" + unescape(descr) + "</div>";
			}
			
			cnt += "<br /><p><a href='https://maps.google.com?daddr=" + lat + "," + lon + "' target='_blank'>Itin&eacute;raire</a></p>";
			
			infowindow = new google.maps.InfoWindow({ content: cnt});
			infowindow.open(map,m);
		});	
		/*
		google.maps.event.addListener(m, "mouseout", function () {
			if (infowindow)
			{
				infowindow.close();
			}
		});
		*/
	}

	function getItemFromArray(arr,index)
	{
		try
		{
		  return arr[index];
		}
		catch(e)
		{
			return [0,0];
		}
	}


	function getClosestIndex(points,lat,lon)
	{
		var dd=10000;
		var ii=0;
		for (i=0; i < points.length; i++) 
		{
			if (points[i]==null)
				continue;
		
			var d = dist(points[i][0], points[i][1], lat, lon);
			if ( d < dd )
			{
				ii = i;
				dd = d;
			}
		}
		return ii;
	}

	function getClosestImage(lat,lon,targetId)
	{
		var dd=10000;
		var img;
		var divImages = document.getElementById("ngimages_"+targetId);
		var img_spans = divImages.getElementsByTagName("span");   
		for (var i = 0; i < img_spans.length; i++) {   
			var imageLat = img_spans[i].getAttribute("lat");
			var imageLon = img_spans[i].getAttribute("lon");	
						
			imageLat = imageLat.replace(",", ".");
			imageLon = imageLon.replace(",", ".");
			
			var d = dist(imageLat, imageLon, lat, lon);
			if ( d < dd )
			{
				img = img_spans[i];
				dd = d;
			}		
		}
		return img;
	}

	function isNumeric(input){
		var RE = /^-{0,1}\d*\.{0,1}\d+$/;
		return (RE.test(input));
	}

	function dist(lat1,lon1,lat2,lon2)
	{
		// mathematically not correct but fast
		var dLat = (lat2-lat1);
		var dLon = (lon2-lon1);
		return Math.sqrt(dLat * dLat + dLon * dLon);
	}
	
}( jQuery ));