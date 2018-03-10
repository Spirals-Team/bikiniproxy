"use strict";
var gl;
jQuery(document).ready(function($) {

		if( $("#brick-wrap").length == 0 ){
			return;
		}

		var $container = $("#brick-wrap");
		var loading = false;
		// Masonry
		$container.imagesLoaded( function() {
			// This is masonry fix for webkit browsers, so boxes wouldn't reflow
			// again after page loads. We just disable transition duration, and enable
			// it again after 1s.
			$('#brick-wrap .brick, #brick-wrap').css('transition-duration', '0s');
			$container.masonry({
				// options
				columnWidth: 5,
				itemSelector: '.brick',
				isAnimated: !Modernizr.csstransitions,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			setTimeout(function(e){
				$('#brick-wrap .brick, #brick-wrap').css('transition-duration', '');
			}, 1000);
		});

		if( (Pukka.grid_layout.infinite_scroll == "on" && Pukka.grid_layout.current_page == "home") 
			|| (Pukka.grid_layout.inner_grid.use_inner_grid == 'on' && Pukka.grid_layout.current_page != "home") )
		{
			$(window).bind('mousewheel wheel', function(e){
				$(window).scroll();
			});
			//IE compatibility
			var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
			if(document.attachEvent){ //if IE (and Opera depending on user setting)
				document.attachEvent("on"+mousewheelevt, function(){ $(window).scroll(); });
			}

			/*
			* had to change this because scroll was not firing if scrollbar was not visible
			*/
			$(window).scroll(function(){
							if  ($(window).scrollTop() >= $(document).height() - $(window).height() - 200){
								 if ( !Pukka.grid_layout.infinite_more || loading){
											return false;
								 }else{
										loading = true;
										loadPosts(Pukka.grid_layout.infinite_page);
								 }
								 Pukka.grid_layout.infinite_page++;
							}
			});
		}
		

		function loadPosts(pageNumber){
						showLoader();
						$.ajax({
								url: Pukka.ajaxurl,
								type:'GET',
								dataType: "json",
								data: "action=pukka_infinite_scroll&page_no="+ pageNumber +"&grid_params="+ $.param(Pukka.grid_layout),
								success: function(response){
										Pukka.grid_layout.infinite_more = response.load_more;
										
										//masonry
										var div = document.createElement('div');
										$(div).html(response.content);
										var bricks = $(div).find('.brick');
										$container.append( bricks ).masonry( 'appended', bricks );

										hideLoader();
										loading = false;

										// layout Masonry again after all images have loaded
										$container.imagesLoaded( function() {
										  $container.masonry();
										});
										
										$('#wrapper').trigger('content-loaded');
								},
								complete: hideLoader
						});
				
				return false;
			}
	
	function showLoader(){
		var loader = '<div class="brick-loader-wrap"><div class="brick-loader-bg"><div class="brick-loader"></div></div></div>';
		$('#brick-wrap').append(loader);
	}
	
	function hideLoader(){
		$('.brick-loader-wrap').fadeOut(300, function(e){
			$('.brick-loader-wrap').remove();
		});
	}
});