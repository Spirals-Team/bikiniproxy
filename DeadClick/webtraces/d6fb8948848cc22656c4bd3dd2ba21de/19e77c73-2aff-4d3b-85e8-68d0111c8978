document.documentElement.className += ' js_active ';
document.documentElement.className += 'ontouchstart' in document.documentElement ? ' vc_mobile ' : ' vc_desktop ';
(function () {
	var prefix = [
		'-webkit-',
		'-moz-',
		'-ms-',
		'-o-',
		''
	];
	for ( var i = 0;
		  i < prefix.length;
		  i ++ ) {
		if ( prefix[ i ] + 'transform' in document.documentElement.style ) {
			document.documentElement.className += " vc_transform ";
		}
	}
})();
/*
 On document ready jQuery will fire set of functions.
 If you want to override function behavior then copy it to your theme js file
 with the same name.
 */

jQuery( window ).load( function () {

} );
function vc_js() {
	vc_twitterBehaviour();
	vc_toggleBehaviour();
	vc_tabsBehaviour();
	vc_accordionBehaviour();
	vc_teaserGrid();
	vc_carouselBehaviour();
	vc_slidersBehaviour();
	vc_prettyPhoto();
	vc_googleplus();
	vc_pinterest();
	vc_progress_bar();
	vc_plugin_flexslider();
	vc_google_fonts();
	vc_gridBehaviour();
	vc_rowBehaviour();
	vc_ttaActivation(); // @since 4.5
	jQuery( document ).trigger( 'vc_js' );
	window.setTimeout( vc_waypoints, 500 );
}
jQuery( document ).ready( function ( $ ) {
	window.vc_js();
} );

if ( 'function' !== typeof(window[ 'vc_plugin_flexslider' ]) ) {
	window.vc_plugin_flexslider = function ( $parent ) {
		var $slider = $parent ? $parent.find( '.wpb_flexslider' ) : jQuery( '.wpb_flexslider' );
		$slider.each( function () {
			var this_element = jQuery( this );
			var sliderSpeed = 800,
				sliderTimeout = parseInt( this_element.attr( 'data-interval' ) ) * 1000,
				sliderFx = this_element.attr( 'data-flex_fx' ),
				slideshow = true;
			if ( 0 === sliderTimeout ) {
				slideshow = false;
			}

			this_element.is( ':visible' ) && this_element.flexslider( {
				animation: sliderFx,
				slideshow: slideshow,
				slideshowSpeed: sliderTimeout,
				sliderSpeed: sliderSpeed,
				smoothHeight: true
			} );
		} );
	};
}

/* Twitter
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_twitterBehaviour' ]) ) {
	window.vc_twitterBehaviour = function () {
		jQuery( '.wpb_twitter_widget .tweets' ).each( function ( index ) {
			var this_element = jQuery( this ),
				tw_name = this_element.attr( 'data-tw_name' ),
				tw_count = this_element.attr( 'data-tw_count' );

			this_element.tweet( {
				username: tw_name,
				join_text: "auto",
				avatar_size: 0,
				count: tw_count,
				template: "{avatar}{join}{text}{time}",
				auto_join_text_default: "",
				auto_join_text_ed: "",
				auto_join_text_ing: "",
				auto_join_text_reply: "",
				auto_join_text_url: "",
				loading_text: '<span class="loading_tweets">loading tweets...</span>'
			} );
		} );
	};
}

/* Google plus
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_googleplus' ]) ) {
	window.vc_googleplus = function () {
		if ( 0 < jQuery( '.wpb_googleplus' ).length ) {
			(function () {
				var po = document.createElement( 'script' );
				po.type = 'text/javascript';
				po.async = true;
				po.src = 'https://apis.google.com/js/plusone.js';
				var s = document.getElementsByTagName( 'script' )[ 0 ];
				s.parentNode.insertBefore( po, s );
			})();
		}
	}
}

/* Pinterest
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_pinterest' ]) ) {
	window.vc_pinterest = function () {
		if ( 0 < jQuery( '.wpb_pinterest' ).length ) {
			(function () {
				var po = document.createElement( 'script' );
				po.type = 'text/javascript';
				po.async = true;
				po.src = 'http://assets.pinterest.com/js/pinit.js';
				var s = document.getElementsByTagName( 'script' )[ 0 ];
				s.parentNode.insertBefore( po, s );
			})();
		}
	}
}

/* Progress bar
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_progress_bar' ] ) ) {
	window.vc_progress_bar = function () {
		if ( 'undefined' !== typeof(jQuery.fn.waypoint) ) {

			jQuery( '.vc_progress_bar' ).waypoint( function () {
				jQuery( this ).find( '.vc_single_bar' ).each( function ( index ) {
					var $this = jQuery( this ),
						bar = $this.find( '.vc_bar' ),
						val = bar.data( 'percentage-value' );

					setTimeout( function () {
						bar.css( { "width": val + '%' } );
					}, index * 200 );
				} );
			}, { offset: '85%' } );
		}
	}
}

/* Waypoints magic
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_waypoints' ] ) ) {
	window.vc_waypoints = function () {
		if ( 'undefined' !== typeof(jQuery.fn.waypoint ) ) {
			jQuery( '.wpb_animate_when_almost_visible:not(.wpb_start_animation)' ).waypoint( function () {
				jQuery( this ).addClass( 'wpb_start_animation' );
			}, { offset: '85%' } );
		}
	}
}

/* Toggle/FAQ
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_toggleBehaviour' ] ) ) {
	window.vc_toggleBehaviour = function ( $el ) {
		function event( e ) {
			e && e.preventDefault && e.preventDefault();
			var title = jQuery( this );
			var element = title.closest( '.vc_toggle' );
			var content = element.find( '.vc_toggle_content' );
			if ( element.hasClass( 'vc_toggle_active' ) ) {
				content.slideUp( {
					duration: 300,
					complete: function () {
						element.removeClass( 'vc_toggle_active' );
					}
				} );
			} else {
				content.slideDown( {
					duration: 300,
					complete: function () {
						element.addClass( 'vc_toggle_active' );
					}
				} );
			}
		}

		if ( $el ) {
			if ( $el.hasClass( 'vc_toggle_title' ) ) {
				$el.unbind( 'click' ).click( event );
			} else {
				$el.find( ".vc_toggle_title" ).unbind( 'click' ).click( event );
			}
		} else {
			jQuery( ".vc_toggle_title" ).unbind( 'click' ).on( 'click', event );
		}
	}
}

/* Tabs + Tours
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_tabsBehaviour' ] ) ) {
	window.vc_tabsBehaviour = function ( $tab ) {
		if ( jQuery.ui ) {
			var $call = $tab || jQuery( '.wpb_tabs, .wpb_tour' ),
				ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split( '.' ) : '1.10',
				old_version = 1 === parseInt( ver[ 0 ] ) && 9 > parseInt( ver[ 1 ] );
			$call.each( function ( index ) {
				var $tabs,
					interval = jQuery( this ).attr( "data-interval" ),
					tabs_array = [];
				//
				$tabs = jQuery( this ).find( '.wpb_tour_tabs_wrapper' ).tabs( {
					show: function ( event, ui ) {
						wpb_prepare_tab_content( event, ui );
					},
					beforeActivate: function ( event, ui ) {
						1 !== ui.newPanel.index() && ui.newPanel.find( '.vc_pie_chart:not(.vc_ready)' );
					},
					activate: function ( event, ui ) {
						wpb_prepare_tab_content( event, ui );
					}
				} );
				if ( interval && 0 < interval ) {
					try {
						$tabs.tabs( 'rotate', interval * 1000 );
					} catch ( e ) {
						// nothing.
						window.console && window.console.log && console.log( e );
					}
				}

				jQuery( this ).find( '.wpb_tab' ).each( function () {
					tabs_array.push( this.id );
				} );

				jQuery( this ).find( '.wpb_tabs_nav li' ).click( function ( e ) {
					e.preventDefault();
					if ( old_version ) {
						$tabs.tabs( "select", jQuery( 'a', this ).attr( 'href' ) );
					} else {
						$tabs.tabs( "option", "active", jQuery( this ).index() );
					}
					return false;
				} );

				jQuery( this ).find( '.wpb_prev_slide a, .wpb_next_slide a' ).click( function ( e ) {
					e.preventDefault();
					if ( old_version ) {
						var index = $tabs.tabs( 'option', 'selected' );
						if ( jQuery( this ).parent().hasClass( 'wpb_next_slide' ) ) {
							index ++;
						}
						else {
							index --;
						}
						if ( 0 > index ) {
							index = $tabs.tabs( "length" ) - 1;
						}
						else if ( index >= $tabs.tabs( "length" ) ) {
							index = 0;
						}
						$tabs.tabs( "select", index );
					} else {
						var index = $tabs.tabs( "option", "active" ),
							length = $tabs.find( '.wpb_tab' ).length;

						if ( jQuery( this ).parent().hasClass( 'wpb_next_slide' ) ) {
							index = (index + 1) >= length ? 0 : index + 1;
						} else {
							index = 0 > index - 1 ? length - 1 : index - 1;
						}

						$tabs.tabs( "option", "active", index );
					}

				} );

			} );
		}
	}
}

/* Tabs + Tours
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_accordionBehaviour' ]) ) {
	window.vc_accordionBehaviour = function () {
		jQuery( '.wpb_accordion' ).each( function ( index ) {
			var $this = jQuery( this );
			var $tabs,
				interval = $this.attr( "data-interval" ),
				active_tab = ! isNaN( jQuery( this ).data( 'active-tab' ) ) && 0 < parseInt( $this.data( 'active-tab' ) ) ? parseInt( $this.data( 'active-tab' ) ) - 1 : false,
				collapsible = false === active_tab || 'yes' === $this.data( 'collapsible' );
			$tabs = $this.find( '.wpb_accordion_wrapper' ).accordion( {
				header: "> div > h3",
				autoHeight: false,
				heightStyle: "content",
				active: active_tab,
				collapsible: collapsible,
				navigation: true,

				activate: vc_accordionActivate,
				change: function ( event, ui ) {
					if ( 'undefined' !== typeof(jQuery.fn.isotope) ) {
						ui.newContent.find( '.isotope' ).isotope( "layout" );
					}
					vc_carouselBehaviour( ui.newPanel );
				}
			} );
			if ( true === $this.data( 'vcDisableKeydown' ) ) {
				$tabs.data( 'uiAccordion' )._keydown = function () {
				};
			}
		} );
	}
}

/* Teaser grid: isotope
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_teaserGrid' ]) ) {
	window.vc_teaserGrid = function () {
		var layout_modes = {
			fitrows: 'fitRows',
			masonry: 'masonry'
		};
		jQuery( '.wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)' ).each( function () {
			var $container = jQuery( this );
			var $thumbs = $container.find( '.wpb_thumbnails' );
			var layout_mode = $thumbs.attr( 'data-layout-mode' );
			$thumbs.isotope( {
				// options
				itemSelector: '.isotope-item',
				layoutMode: ('undefined' === typeof(layout_modes[ layout_mode ]) ? 'fitRows' : layout_modes[ layout_mode ])
			} );
			$container.find( '.categories_filter a' ).data( 'isotope', $thumbs ).click( function ( e ) {
				e.preventDefault();
				var $thumbs = jQuery( this ).data( 'isotope' );
				jQuery( this ).parent().parent().find( '.active' ).removeClass( 'active' );
				jQuery( this ).parent().addClass( 'active' );
				$thumbs.isotope( { filter: jQuery( this ).attr( 'data-filter' ) } );
			} );
			jQuery( window ).bind( 'load resize', function () {
				$thumbs.isotope( "layout" );
			} );
		} );
	}
}

if ( 'function' !== typeof(window[ 'vc_carouselBehaviour' ]) ) {
	window.vc_carouselBehaviour = function ( $parent ) {
		var $carousel = $parent ? $parent.find( ".wpb_carousel" ) : jQuery( ".wpb_carousel" );
		$carousel.each( function () {
			var $this = jQuery( this );
			if ( true !== $this.data( 'carousel_enabled' ) && $this.is( ':visible' ) ) {
				$this.data( 'carousel_enabled', true );
				var visible_count = getColumnsCount( jQuery( this ) ),
					carousel_speed = 500;
				if ( jQuery( this ).hasClass( 'columns_count_1' ) ) {
					carousel_speed = 900;
				}
				/* Get margin-left value from the css grid and apply it to the carousele li items (margin-right), before carousele initialization */
				var carousele_li = jQuery( this ).find( '.wpb_thumbnails-fluid li' );
				carousele_li.css( { "margin-right": carousele_li.css( "margin-left" ), "margin-left": 0 } );

				jQuery( this ).find( '.wpb_wrapper:eq(0)' ).jCarouselLite( {
					btnNext: jQuery( this ).find( '.next' ),
					btnPrev: jQuery( this ).find( '.prev' ),
					visible: visible_count,
					speed: carousel_speed
				} )
					.width( '100%' );

				var fluid_ul = jQuery( this ).find( 'ul.wpb_thumbnails-fluid' );
				fluid_ul.width( fluid_ul.width() + 300 );

				jQuery( window ).resize( function () {
					var before_resize = screen_size;
					screen_size = getSizeName();
					if ( before_resize != screen_size ) {
						window.setTimeout( 'location.reload()', 20 );
					}
				} );
			}

		} );
	}
}

if ( 'function' !== typeof(window[ 'vc_slidersBehaviour' ]) ) {
	window.vc_slidersBehaviour = function () {
		jQuery( '.wpb_gallery_slides' ).each( function ( index ) {
			var this_element = jQuery( this );
			var $imagesGrid;

			if ( this_element.hasClass( 'wpb_slider_nivo' ) ) {
				var sliderSpeed = 800,
					sliderTimeout = this_element.attr( 'data-interval' ) * 1000;

				if ( 0 === sliderTimeout ) {
					sliderTimeout = 9999999999;
				}

				this_element.find( '.nivoSlider' ).nivoSlider( {
					effect: 'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse', // Specify sets like: 'fold,fade,sliceDown'
					slices: 15, // For slice animations
					boxCols: 8, // For box animations
					boxRows: 4, // For box animations
					animSpeed: sliderSpeed, // Slide transition speed
					pauseTime: sliderTimeout, // How long each slide will show
					startSlide: 0, // Set starting Slide (0 index)
					directionNav: true, // Next & Prev navigation
					directionNavHide: true, // Only show on hover
					controlNav: true, // 1,2,3... navigation
					keyboardNav: false, // Use left & right arrows
					pauseOnHover: true, // Stop animation while hovering
					manualAdvance: false, // Force manual transitions
					prevText: 'Prev', // Prev directionNav text
					nextText: 'Next' // Next directionNav text
				} );
			}
			else if ( this_element.hasClass( 'wpb_image_grid' ) ) {
				if ( jQuery.fn.imagesLoaded ) {
					$imagesGrid = this_element.find( '.wpb_image_grid_ul' ).imagesLoaded( function () {
						$imagesGrid.isotope( {
							// options
							itemSelector: '.isotope-item',
							layoutMode: 'fitRows'
						} );
					} );
				} else {
					this_element.find( '.wpb_image_grid_ul' ).isotope( {
						// options
						itemSelector: '.isotope-item',
						layoutMode: 'fitRows'
					} );
				}
			}
		} );
	}
}

if ( 'function' !== typeof(window[ 'vc_prettyPhoto' ]) ) {
	window.vc_prettyPhoto = function () {
		try {
			// just in case. maybe prettyphoto isn't loaded on this site
			if ( jQuery && jQuery.fn && jQuery.fn.prettyPhoto ) {
				jQuery( 'a.prettyphoto, .gallery-icon a[href*=".jpg"]' ).prettyPhoto( {
					animationSpeed: 'normal', /* fast/slow/normal */
					padding: 15, /* padding for each side of the picture */
					opacity: 0.7, /* Value betwee 0 and 1 */
					showTitle: true, /* true/false */
					allowresize: true, /* true/false */
					counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
					//theme: 'light_square', /* light_rounded / dark_rounded / light_square / dark_square */
					hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
					deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
					modal: false, /* If set to true, only the close button will close the window */
					callback: function () {
						var url = location.href;
						var hashtag = (url.indexOf( '#!prettyPhoto' )) ? true : false;
						if ( hashtag ) {
							location.hash = "!";
						}
					} /* Called when prettyPhoto is closed */,
					social_tools: ''
				} );
			}
		} catch ( err ) {
			window.console && window.console.log && console.log( err );
		}
	}
}

if ( 'function' !== typeof(window[ 'vc_google_fonts' ]) ) {
	window.vc_google_fonts = function () {
		return false; // TODO: check this for what this is needed
	}
}
window.vcParallaxSkroll = false;
if ( 'function' !== typeof(window[ 'vc_rowBehaviour' ]) ) {
	window.vc_rowBehaviour = function () {
		var $ = window.jQuery;

		function localFunction() {
			var $elements = $( '[data-vc-full-width="true"]' );
			$.each( $elements, function ( key, item ) {
				var $el = $( this );
				$el.addClass( 'vc_hidden' );

				var $el_full = $el.next( '.vc_row-full-width' );
				var el_margin_left = parseInt( $el.css( 'margin-left' ), 10 );
				var el_margin_right = parseInt( $el.css( 'margin-right' ), 10 );
				var offset = 0 - $el_full.offset().left - el_margin_left;
				var width = $( window ).width();
				$el.css( {
					'position': 'relative',
					'left': offset,
					'box-sizing': 'border-box',
					'width': $( window ).width()
				} );
				if ( ! $el.data( 'vcStretchContent' ) ) {
					var padding = (- 1 * offset);
					if ( 0 > padding ) {
						padding = 0;
					}
					var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
					if ( 0 > paddingRight ) {
						paddingRight = 0;
					}
					$el.css( { 'padding-left': padding + 'px', 'padding-right': paddingRight + 'px' } );
				}
				$el.attr( "data-vc-full-width-init", "true" );
				$el.removeClass( 'vc_hidden' );
			} );
		}

		/**
		 * @todo refactor as plugin.
		 * @returns {*}
		 */
		function parallaxRow() {
			var vcSkrollrOptions, vcParallaxSkroll,
				callSkrollInit = false;
			if ( vcParallaxSkroll ) {
				vcParallaxSkroll.destroy();
			}
			$( '.vc_parallax-inner' ).remove();
			$( '[data-5p-top-bottom]' ).removeAttr( 'data-5p-top-bottom data-30p-top-bottom' );
			$( '[data-vc-parallax]' ).each( function () {
				var skrollrSpeed,
					skrollrSize,
					skrollrStart,
					skrollrEnd,
					$parallaxElement,
					parallaxImage,
					youtubeId;
				callSkrollInit = true; // Enable skrollinit;
				if ( 'on' === $( this ).data( 'vcParallaxOFade' ) ) {
					$( this ).children().attr( 'data-5p-top-bottom', 'opacity:0;' ).attr( 'data-30p-top-bottom',
						'opacity:1;' );
				}

				skrollrSize = $( this ).data( 'vcParallax' ) * 100;
				$parallaxElement = $( '<div />' ).addClass( 'vc_parallax-inner' ).appendTo( $( this ) );
				$parallaxElement.height( skrollrSize + '%' );

				parallaxImage = $( this ).data( 'vcParallaxImage' );

				youtubeId = vcExtractYoutubeId( parallaxImage );

				if ( youtubeId ) {
					insertYoutubeVideoAsBackground( $parallaxElement, youtubeId );
				} else if ( 'undefined' !== typeof(parallaxImage) ) {
					$parallaxElement.css( 'background-image', 'url(' + parallaxImage + ')' );
				}

				skrollrSpeed = skrollrSize - 100;
				skrollrStart = - skrollrSpeed;
				skrollrEnd = 0;

				$parallaxElement.attr( 'data-bottom-top', 'top: ' + skrollrStart + '%;' ).attr( 'data-top-bottom',
					'top: ' + skrollrEnd + '%;' );
			} );

			if ( callSkrollInit && window.skrollr ) {
				vcSkrollrOptions = {
					forceHeight: false,
					smoothScrolling: false,
					mobileCheck: function () {
						return false;
					}
				};
				vcParallaxSkroll = skrollr.init( vcSkrollrOptions );
				return vcParallaxSkroll;
			}
			return false;
		}

		/**
		 * @todo refactor as plugin.
		 * @returns {*}
		 */
		function fullHeightRow() {
			$( '.vc_row-o-full-height:first' ).each( function () {
				var $window,
					windowHeight,
					offsetTop,
					fullHeight;
				$window = $( window );
				windowHeight = $window.height();
				offsetTop = $( this ).offset().top;
				if ( offsetTop < windowHeight ) {
					fullHeight = 100 - offsetTop / (windowHeight / 100);
					$( this ).css( 'min-height', fullHeight + 'vh' );
				}
			} );

			$( '.vc_row-o-full-height.vc_row-o-content-middle' ).each( function () {
				var elHeight = $( this ).height();
				$( '<div><!-- IE flexbox min height vertical align fixer --></div>' )
					.addClass( 'vc_row-full-height-fixer' )
					.height( elHeight )
					.prependTo( $( this ) );
			} );
		}

		$( window ).unbind( 'resize.vcRowBehaviour' ).bind( 'resize.vcRowBehaviour', localFunction );
		$( window ).bind( 'resize.vcRowBehaviour', fullHeightRow );
		localFunction();
		fullHeightRow();
		initVideoBackgrounds(); // must be called before parallax
		parallaxRow();
	}
}

if ( 'function' !== typeof(window[ 'vc_gridBehaviour' ]) ) {
	window.vc_gridBehaviour = function () {
		jQuery.fn.vcGrid && jQuery( '[data-vc-grid]' ).vcGrid();
	}
}
/* Helper
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'getColumnsCount' ]) ) {
	window.getColumnsCount = function ( el ) {
		var find = false,
			i = 1;

		while ( false === find ) {
			if ( el.hasClass( 'columns_count_' + i ) ) {
				find = true;
				return i;
			}
			i ++;
		}
	}
}

var screen_size = getSizeName();
function getSizeName() {
	var screen_w = jQuery( window ).width();

	if ( 1170 < screen_w ) {
		return 'desktop_wide';
	}

	if ( 960 < screen_w && 1169 > screen_w ) {
		return 'desktop';
	}

	if ( 768 < screen_w && 959 > screen_w ) {
		return 'tablet';
	}

	if ( 300 < screen_w && 767 > screen_w ) {
		return 'mobile';
	}

	if ( 300 > screen_w ) {
		return 'mobile_portrait';
	}

	return '';
}

function loadScript( url, $obj, callback ) {

	var script = document.createElement( "script" );
	script.type = "text/javascript";

	if ( script.readyState ) {  //IE
		script.onreadystatechange = function () {
			if ( "loaded" === script.readyState ||
				"complete" === script.readyState ) {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		//Others
	}

	script.src = url;
	$obj.get( 0 ).appendChild( script );
}

if ( 'function' !== typeof(window[ 'wpb_prepare_tab_content' ]) ) {
	/**
	 * Prepare html to correctly display inside tab container
	 *
	 * @param event - ui tab event 'show'
	 * @param ui - jquery ui tabs object
	 */
	window.wpb_prepare_tab_content = function ( event, ui ) {
		var panel = ui.panel || ui.newPanel,
			$pie_charts = panel.find( '.vc_pie_chart:not(.vc_ready)' ),
			$round_charts = panel.find( '.vc_round-chart' ),
			$line_charts = panel.find( '.vc_line-chart' ),
			$carousel = panel.find( '[data-ride="vc_carousel"]' ),
			$ui_panel, $google_maps;
		vc_carouselBehaviour();
		vc_plugin_flexslider( panel );
		if ( ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).length ) {
			ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).each( function () {
				var grid = jQuery( this ).data( 'vcGrid' );
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
			} );
		}
		if ( panel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).length ) {
			panel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).each( function () {
				var grid = jQuery( this ).data( 'vcGrid' );
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
			} );
		}
		$pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat();
		$round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart( { reload: false } );
		$line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart( { reload: false } );
		$carousel.length && jQuery.fn.carousel && $carousel.carousel( 'resizeAction' );
		$ui_panel = panel.find( '.isotope, .wpb_image_grid_ul' ); // why var name '$ui_panel'?
		$google_maps = panel.find( '.wpb_gmaps_widget' );
		if ( 0 < $ui_panel.length ) {
			$ui_panel.isotope( "layout" );
		}
		if ( $google_maps.length && ! $google_maps.is( '.map_ready' ) ) {
			var $frame = $google_maps.find( 'iframe' );
			$frame.attr( 'src', $frame.attr( 'src' ) );
			$google_maps.addClass( 'map_ready' );
		}
		if ( panel.parents( '.isotope' ).length ) {
			panel.parents( '.isotope' ).each( function () {
				jQuery( this ).isotope( "layout" );
			} );
		}
	}
}
function vc_ttaActivation() {
	jQuery( '[data-vc-accordion]' ).on( 'show.vc.accordion', function ( e ) {
		var $ = window.jQuery, ui = {};
		ui.newPanel = $( this ).data( 'vc.accordion' ).getTarget();
		window.wpb_prepare_tab_content( e, ui );
	} );
}

function vc_accordionActivate( event, ui ) {
	if ( ui.newPanel.length && ui.newHeader.length ) {
		var $pie_charts = ui.newPanel.find( '.vc_pie_chart:not(.vc_ready)' ),
			$round_charts = ui.newPanel.find( '.vc_round-chart' ),
			$line_charts = ui.newPanel.find( '.vc_line-chart' ),
			$carousel = ui.newPanel.find( '[data-ride="vc_carousel"]' );
		if ( 'undefined' !== typeof(jQuery.fn.isotope) ) {
			ui.newPanel.find( '.isotope, .wpb_image_grid_ul' ).isotope( "layout" );
		}
		if ( ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).length ) {
			ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).each( function () {
				var grid = jQuery( this ).data( 'vcGrid' );
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
			} );
		}
		vc_carouselBehaviour( ui.newPanel );
		vc_plugin_flexslider( ui.newPanel );
		$pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat();
		$round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart( { reload: false } );
		$line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart( { reload: false } );
		$carousel.length && jQuery.fn.carousel && $carousel.carousel( 'resizeAction' );
		if ( ui.newPanel.parents( '.isotope' ).length ) {
			ui.newPanel.parents( '.isotope' ).each( function () {
				jQuery( this ).isotope( "layout" );
			} );
		}
	}
}

/**
 * Reinitialize all video backgrounds
 */
function initVideoBackgrounds() {
	jQuery( '.vc_row' ).each( function () {
		var $row = jQuery( this ),
			youtubeUrl,
			youtubeId;

		if ( $row.data( 'vcVideoBg' ) ) {
			youtubeUrl = $row.data( 'vcVideoBg' );
			youtubeId = vcExtractYoutubeId( youtubeUrl );

			if ( youtubeId ) {
				$row.find( '.vc_video-bg' ).remove();
				insertYoutubeVideoAsBackground( $row, youtubeId );
			}

			jQuery( window ).on( 'grid:items:added', function ( event, $grid ) {
				if ( ! $row.has( $grid ).length ) {
					return;
				}

				vcResizeVideoBackground( $row );
			} );
		} else {
			$row.find( '.vc_video-bg' ).remove();
		}
	} );
}

/**
 * Insert youtube video into element.
 *
 * Video will be w/o controls, muted, autoplaying and looping.
 */
function insertYoutubeVideoAsBackground( $element, youtubeId, counter ) {
	if ( 'undefined' === typeof( YT.Player ) ) {
		// wait for youtube iframe api to load. try for 10sec, then abort
		counter = 'undefined' === typeof( counter ) ? 0 : counter;
		if ( 100 < counter ) {
			console.warn( 'Too many attempts to load YouTube api' );
			return;
		}

		setTimeout( function () {
			insertYoutubeVideoAsBackground( $element, youtubeId, counter ++ );
		}, 100 );

		return;
	}

	var $container = $element.prepend( '<div class="vc_video-bg"><div class="inner"></div></div>' ).find( '.inner' );

	new YT.Player( $container[ 0 ], {
		width: '100%',
		height: '100%',
		videoId: youtubeId,
		playerVars: {
			playlist: youtubeId,
			iv_load_policy: 3, // hide annotations
			enablejsapi: 1,
			disablekb: 1,
			autoplay: 1,
			controls: 0,
			showinfo: 0,
			rel: 0,
			loop: 1
		},
		events: {
			onReady: function ( event ) {
				event.target.mute().setLoop( true );
			}
		}
	} );

	vcResizeVideoBackground( $element );

	jQuery( window ).bind( 'resize', function () {
		vcResizeVideoBackground( $element );
	} );
}

/**
 * Resize background video iframe so that video content covers whole area
 */
function vcResizeVideoBackground( $element ) {
	var iframeW,
		iframeH,
		marginLeft,
		marginTop,
		containerW = $element.innerWidth(),
		containerH = $element.innerHeight(),
		ratio1 = 16,
		ratio2 = 9;

	if ( ( containerW / containerH ) < ( ratio1 / ratio2 ) ) {
		iframeW = containerH * (ratio1 / ratio2);
		iframeH = containerH;

		marginLeft = - Math.round( ( iframeW - containerW ) / 2 ) + 'px';
		marginTop = - Math.round( ( iframeH - containerH ) / 2 ) + 'px';

		iframeW += 'px';
		iframeH += 'px';
	} else {
		iframeW = containerW;
		iframeH = containerW * (ratio2 / ratio1);

		marginTop = - Math.round( ( iframeH - containerH ) / 2 ) + 'px';
		marginLeft = - Math.round( ( iframeW - containerW ) / 2 ) + 'px';

		iframeW += 'px';
		iframeH += 'px';
	}

	$element.find( '.vc_video-bg iframe' ).css( {
		maxWidth: '1000%',
		marginLeft: marginLeft,
		marginTop: marginTop,
		width: iframeW,
		height: iframeH
	} );
}

/**
 * Extract video ID from youtube url
 */
function vcExtractYoutubeId( url ) {
	if ( 'undefined' === typeof(url) ) {
		return false;
	}

	var id = url.match( /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/ );

	if ( null !== id ) {
		return id[ 1 ];
	}

	return false;
}