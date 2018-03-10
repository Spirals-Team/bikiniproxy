( function ( $ ) {

	$( document ).on( 'ready' + rlArgs.customEvents, function () {

		// initialise event
		$.event.trigger( {
			type: 'doResponsiveLightbox',
			script: rlArgs.script,
			selector: rlArgs.selector,
			args: rlArgs
		} );
	} );

	// this is similar to the WP function add_action();
	$( document ).on( 'doResponsiveLightbox', function ( event ) {

		var script = event.script,
			selector = event.selector,
			args = event.args;

		if ( typeof script === 'undefined' || typeof selector === 'undefined' ) {
			return false;
		}

		var observe_script_dom = ( function () {
			var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
				eventListenerSupported = window.addEventListener;

			return function ( obj, only_added, callback ) {
				if ( MutationObserver ) {
					// define a new observer
					var obs = new MutationObserver( function ( mutations, observer ) {
						if ( only_added ) {
							if ( mutations[0].addedNodes.length )
								callback();
						} else {
							if ( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
								callback();
						}
					} );

					// have the observer observe for changes in children
					obs.observe( obj, { childList: true, subtree: true } );
				} else if ( eventListenerSupported ) {
					obj.addEventListener( 'DOMNodeInserted', callback, false );

					if ( !only_added ) {
						obj.addEventListener( 'DOMNodeRemoved', callback, false );
					}
				}
			}
		} )();

		rl_view_image = function ( script, url ) {
			$.event.trigger( {
				type: 'doLightboxViewImage',
				script: script,
				url: url
			} );
		}

		rl_hide_image = function ( script, url ) {
			$.event.trigger( {
				type: 'doLightboxHideImage',
				script: script,
				url: url
			} );
		}

		// WooCommerce 3.0+ compatibility
		setTimeout( function () {
			var flex = $( '.flex-viewport' );

			if ( rlArgs.woocommerce_gallery === '1' && flex.length ) {
				$( '.zoomImg' ).css( 'cursor', 'pointer' );

				$( document ).on( 'click', '.flex-active-slide .zoomImg', function ( e ) {
					e.preventDefault();
					e.stopPropagation();

					flex.find( '.flex-active-slide a[data-rel]' ).trigger( 'click' );
				} );
			}
		}, 10 );

		switch ( script ) {

			case 'swipebox':

				var slide = $( '#swipebox-overlay' ).find( '.slide.current' ),
					image_source = '',
					allow_hide = false,
					close_executed = false;

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).swipebox( {
					useCSS: ( rlArgs.animation === '1' ? true : false ),
					useSVG: ( rlArgs.useSVG === '1' ? true : false ),
					hideCloseButtonOnMobile: ( rlArgs.hideCloseButtonOnMobile === '1' ? true : false ),
					removeBarsOnMobile: ( rlArgs.removeBarsOnMobile === '1' ? true : false ),
					hideBarsDelay: ( rlArgs.hideBars === '1' ? parseInt( rlArgs.hideBarsDelay ) : 0 ),
					videoMaxWidth: parseInt( rlArgs.videoMaxWidth ),
					loopAtEnd: ( rlArgs.loopAtEnd === '1' ? true : false ),
					afterOpen: function () {
						close_executed = false;

						// update current slide container
						slide = $( '#swipebox-overlay' ).find( '.slide.current' );

						// get image source
						var image = slide.find( 'img' ).attr( 'src' );

						// valid image source?
						if ( typeof image !== 'undefined' ) {
							image_source = image;

							// trigger image view
							rl_view_image( script, image_source );
						} else {
							image_source = '';
						}

						// add current slide observer
						observe_script_dom( document.getElementById( 'swipebox-slider' ), false, function () {
							if ( image_source === '' ) {
								// get image source
								var image = slide.find( 'img' ).attr( 'src' );

								// valid image source?
								if ( typeof image !== 'undefined' ) {
									image_source = image;

									// trigger image view
									rl_view_image( script, image_source );
								} else {
									image_source = '';
								}
							}
						} );
					},
					nextSlide: function () {
						// update current slide container
						slide = $( '#swipebox-overlay' ).find( '.slide.current' );

						// get image source
						var image = slide.find( 'img' ).attr( 'src' );

						// valid image source?
						if ( typeof image !== 'undefined' ) {
							image_source = image;

							// trigger image view
							rl_view_image( script, image_source );
						} else {
							image_source = '';
						}
					},
					prevSlide: function () {
						// update current slide container
						slide = $( '#swipebox-overlay' ).find( '.slide.current' );

						// get image source
						var image = slide.find( 'img' ).attr( 'src' );

						// valid image source?
						if ( typeof image !== 'undefined' ) {
							image_source = image;

							// trigger image view
							rl_view_image( script, image_source );
						} else {
							image_source = '';
						}
					},
					afterClose: function () {
						// afterClose event executed
						close_executed = true;

						// allow to hide image?
						if ( allow_hide ) {
							// trigger image hide
							rl_hide_image( script, image_source );

							allow_hide = false;
						}
					}
				} );

				// additional event to prevent rl_hide_image to execure while opening modal
				$( window ).on( 'resize', function () {
					if ( !close_executed ) {
						allow_hide = true;
					}
				} );

				break;

			case 'prettyphoto':

				var view_disabled = false,
					last_image = '';

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).prettyPhoto( {
					hook: 'data-rel',
					animation_speed: rlArgs.animationSpeed,
					slideshow: ( rlArgs.slideshow === '1' ? parseInt( rlArgs.slideshowDelay ) : false ),
					autoplay_slideshow: ( rlArgs.slideshowAutoplay === '1' ? true : false ),
					opacity: rlArgs.opacity,
					show_title: ( rlArgs.showTitle === '1' ? true : false ),
					allow_resize: ( rlArgs.allowResize === '1' ? true : false ),
					allow_expand: ( rlArgs.allowExpand === '1' ? true : false ),
					default_width: parseInt( rlArgs.width ),
					default_height: parseInt( rlArgs.height ),
					counter_separator_label: rlArgs.separator,
					theme: rlArgs.theme,
					horizontal_padding: parseInt( rlArgs.horizontalPadding ),
					hideflash: ( rlArgs.hideFlash === '1' ? true : false ),
					wmode: rlArgs.wmode,
					autoplay: ( rlArgs.videoAutoplay === '1' ? true : false ),
					modal: ( rlArgs.modal === '1' ? true : false ),
					deeplinking: ( rlArgs.deeplinking === '1' ? true : false ),
					overlay_gallery: ( rlArgs.overlayGallery === '1' ? true : false ),
					keyboard_shortcuts: ( rlArgs.keyboardShortcuts === '1' ? true : false ),
					social_tools: ( rlArgs.social === '1' ? '<div class="pp_social"><div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href=' + location.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' : '' ),
					ie6_fallback: true,
					changepicturecallback: function () {
						// is view disabled?
						if ( view_disabled ) {
							// enable view
							view_disabled = false;

							return;
						}

						last_image = $( '#pp_full_res' ).find( 'img' ).attr( 'src' );

						// trigger image view
						rl_view_image( script, last_image );

						// is expanding allowed?
						if ( rlArgs.allowExpand === '1' ) {
							// disable changepicturecallback event after expanding
							$( 'a.pp_expand' ).on( 'click', function () {
								view_disabled = true;
							} );
						}
					},
					callback: function () {
						// trigger image hide
						rl_hide_image( script, last_image );
					}
				} );

				break;

			case 'fancybox':

				var last_image = '';

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).fancybox( {
					modal: ( rlArgs.modal === '1' ? true : false ),
					overlayShow: ( rlArgs.showOverlay === '1' ? true : false ),
					showCloseButton: ( rlArgs.showCloseButton === '1' ? true : false ),
					enableEscapeButton: ( rlArgs.enableEscapeButton === '1' ? true : false ),
					hideOnOverlayClick: ( rlArgs.hideOnOverlayClick === '1' ? true : false ),
					hideOnContentClick: ( rlArgs.hideOnContentClick === '1' ? true : false ),
					cyclic: ( rlArgs.cyclic === '1' ? true : false ),
					showNavArrows: ( rlArgs.showNavArrows === '1' ? true : false ),
					autoScale: ( rlArgs.autoScale === '1' ? true : false ),
					scrolling: rlArgs.scrolling,
					centerOnScroll: ( rlArgs.centerOnScroll === '1' ? true : false ),
					opacity: ( rlArgs.opacity === '1' ? true : false ),
					overlayOpacity: parseFloat( rlArgs.overlayOpacity / 100 ),
					overlayColor: rlArgs.overlayColor,
					titleShow: ( rlArgs.titleShow === '1' ? true : false ),
					titlePosition: rlArgs.titlePosition,
					transitionIn: rlArgs.transitions,
					transitionOut: rlArgs.transitions,
					easingIn: rlArgs.easings,
					easingOut: rlArgs.easings,
					speedIn: parseInt( rlArgs.speeds ),
					speedOut: parseInt( rlArgs.speeds ),
					changeSpeed: parseInt( rlArgs.changeSpeed ),
					changeFade: parseInt( rlArgs.changeFade ),
					padding: parseInt( rlArgs.padding ),
					margin: parseInt( rlArgs.margin ),
					width: parseInt( rlArgs.videoWidth ),
					height: parseInt( rlArgs.videoHeight ),
					onComplete: function () {
						last_image = $( '#fancybox-content' ).find( 'img' ).attr( 'src' );

						// trigger image view
						rl_view_image( script, last_image );
					},
					onClosed: function () {
						// trigger image hide
						rl_hide_image( script, last_image );
					}
				} );

				break;

			case 'nivo':

				$.each( $( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ), function () {
					var attr = $( this ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr === 'undefined' || attr == false ) {
						// if not found then try to check rel attribute for backward compatibility
						attr = $( this ).attr( 'rel' );
					}

					// for some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
					if ( typeof attr !== 'undefined' && attr !== false ) {
						var match = attr.match( new RegExp( rlArgs.selector + '\\-(gallery\\-(?:[\\da-z]{1,4}))', 'ig' ) );

						if ( match !== null ) {
							$( this ).attr( 'data-lightbox-gallery', match[0] );
						}
					}

				} );

				var observer_initialized = false,
					change_allowed = true,
					last_image = '';

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).nivoLightbox( {
					effect: rlArgs.effect,
					clickOverlayToClose: ( rlArgs.clickOverlayToClose === '1' ? true : false ),
					keyboardNav: ( rlArgs.keyboardNav === '1' ? true : false ),
					errorMessage: rlArgs.errorMessage,
					afterShowLightbox: function ( lightbox ) {
						var content = $( lightbox )[0].find( '.nivo-lightbox-content' );

						// is observer initialized?
						if ( !observer_initialized ) {
							// turn it off
							observer_initialized = true;

							// add content observer
							observe_script_dom( document.getElementsByClassName( 'nivo-lightbox-content' )[0], true, function () {
								if ( change_allowed ) {
									last_image = content.find( '.nivo-lightbox-image img' ).attr( 'src' );

									// trigger image view
									rl_view_image( script, last_image );

									// disallow observer changes
									change_allowed = false;
								}
							} );
						}
					},
					afterHideLightbox: function () {
						// allow observer changes
						change_allowed = true;

						// trigger image hide
						rl_hide_image( script, last_image );
					},
					onPrev: function ( element ) {
						// disallow observer changes
						change_allowed = false;

						last_image = element[0].attr( 'href' );

						// trigger image view
						rl_view_image( script, last_image );
					},
					onNext: function ( element ) {
						// disallow observer changes
						change_allowed = false;

						last_image = element[0].attr( 'href' );

						// trigger image view
						rl_view_image( script, last_image );
					}
				} );

				break;

			case 'imagelightbox':

				var selectors = [ ],
					last_image = '';

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).each( function ( i, item ) {
					var attr = $( item ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
						selectors.push( attr );
					// if not found then try to check rel attribute for backward compatibility
					else {
						attr = $( item ).attr( 'rel' );

						if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
							selectors.push( attr );
					}
				} );

				if ( selectors.length > 0 ) {

					// make unique
					selectors = $.unique( selectors );

					$( selectors ).each( function ( i, item ) {
						$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).imageLightbox( {
							animationSpeed: parseInt( rlArgs.animationSpeed ),
							preloadNext: ( rlArgs.preloadNext === '1' ? true : false ),
							enableKeyboard: ( rlArgs.enableKeyboard === '1' ? true : false ),
							quitOnEnd: ( rlArgs.quitOnEnd === '1' ? true : false ),
							quitOnImgClick: ( rlArgs.quitOnImageClick === '1' ? true : false ),
							quitOnDocClick: ( rlArgs.quitOnDocumentClick === '1' ? true : false ),
							onLoadEnd: function () {
								last_image = $( '#imagelightbox' ).attr( 'src' );

								// trigger image view
								rl_view_image( script, last_image );
							},
							onEnd: function () {
								// trigger image hide
								rl_hide_image( script, last_image );
							}
						} );
					} );
				}

				break;

			case 'tosrus':

				var selectors = [ ],
					last_image = '';

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).each( function ( i, item ) {
					var attr = $( item ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
						selectors.push( attr );
					// if not found then try to check rel attribute for backward compatibility
					else {
						attr = $( item ).attr( 'rel' );

						if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
							selectors.push( attr );
					}
				} );

				if ( selectors.length > 0 ) {

					// make unique
					selectors = $.unique( selectors );

					$( selectors ).each( function ( i, item ) {
						var tos = $( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).tosrus( {
							infinite: ( rlArgs.infinite === '1' ? true : false ),
							autoplay: {
								play: ( rlArgs.autoplay === '1' ? true : false ),
								pauseOnHover: ( rlArgs.pauseOnHover === '1' ? true : false ),
								timeout: rlArgs.timeout
							},
							effect: rlArgs.effect,
							keys: {
								prev: ( rlArgs.keys === '1' ? true : false ),
								next: ( rlArgs.keys === '1' ? true : false ),
								close: ( rlArgs.keys === '1' ? true : false )
							},
							pagination: {
								add: ( rlArgs.pagination === '1' ? true : false ),
								type: rlArgs.paginationType
							},
							// forced
							show: false,
							buttons: true,
							caption: {
								add: true,
								attributes: [ "title" ]
							},
							wrapper: {
								onClick: rlArgs.closeOnClick === '1' ? 'close' : 'toggleUI'
							}
						} );

						tos.bind( 'sliding.tos', function ( event, number ) {
							last_image = $( $( event.target ).find( '.tos-slider .tos-slide' )[number] ).find( 'img' ).attr( 'src' );

							// trigger image view
							rl_view_image( script, last_image );
						} );

						tos.bind( 'closing.tos', function () {
							// trigger image hide
							rl_hide_image( script, last_image );
						} );

					} );
				}

				break;

			case 'featherlight':

				var selectors = [ ],
					last_image = '';

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).each( function ( i, item ) {
					var attr = $( item ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
						selectors.push( attr );
					// if not found then try to check rel attribute for backward compatibility
					else {
						attr = $( item ).attr( 'rel' );

						if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
							selectors.push( attr );
					}
				} );

				if ( selectors.length > 0 ) {
					// make unique
					selectors = $.unique( selectors );

					// set defaults
					$.extend( $.featherlight.defaults, {
						openSpeed: parseInt( rlArgs.openSpeed ),
						closeSpeed: parseInt( rlArgs.closeSpeed ),
						closeOnClick: rlArgs.closeOnClick,
						closeOnEsc: ( rlArgs.closeOnEsc === '1' ? true : false ),
						afterOpen: function ( event ) {
							last_image = event.currentTarget.href;

							// trigger image view
							rl_view_image( script, last_image );
						},
						afterClose: function () {
							// trigger image hide
							rl_hide_image( script, last_image );
						}
					} );

					$( selectors ).each( function ( i, item ) {

						// gallery?
						if ( /-gallery-/.test( item ) ) {
							$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).featherlightGallery( {
								galleryFadeIn: parseInt( rlArgs.galleryFadeIn ),
								galleryFadeOut: parseInt( rlArgs.galleryFadeOut ),
								previousIcon: '&#10094;',
								nextIcon: '&#10095;'
							} );
							// video?
						} else if ( /-video-/.test( item ) ) {
							$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).featherlight();
							// single image?
						} else {
							$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).featherlight();
						}
					} );

				}

				break;
		}

	} );

} )( jQuery );