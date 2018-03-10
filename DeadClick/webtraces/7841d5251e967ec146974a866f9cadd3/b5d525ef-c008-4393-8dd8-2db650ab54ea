(function($){

	$.et_simple_slider = function(el, options) {
		var settings = $.extend( {
			slide         			: '.et-slide',				 	// slide class
			arrows					: '.et-slider-arrows',			// arrows container class
			prev_arrow				: '.et-arrow-prev',				// left arrow class
			next_arrow				: '.et-arrow-next',				// right arrow class
			controls 				: '.et-controllers a',			// control selector
			control_active_class	: 'et-active-control',			// active control class name
			previous_text			: 'Previous',					// previous arrow text
			next_text				: 'Next',						// next arrow text
			fade_speed				: 500,							// fade effect speed
			use_arrows				: true,							// use arrows?
			use_controls			: true,							// use controls?
			manual_arrows			: '',							// html code for custom arrows
			append_controls_to		: '',							// controls are appended to the slider element by default, here you can specify the element it should append to
			controls_class			: 'et-controllers',				// controls container class name
			slideshow				: false,						// automattic animation?
			slideshow_speed			: 7000,							// automattic animation speed
			show_progress_bar		: true,							// show progress bar if automattic animation is active
			tabs_animation			: false
		}, options );

		var $et_slider 			= $(el),
			$et_slide			= $et_slider.find( settings.slide ),
			et_slides_number	= $et_slide.length,
			et_fade_speed		= settings.fade_speed,
			et_active_slide		= 0,
			$et_slider_arrows,
			$et_slider_prev,
			$et_slider_next,
			$et_slider_controls,
			et_slider_timer,
			controls_html = '',
			$progress_bar = null,
			progress_timer_count = 0;

			$et_slider.et_animation_running = false;

			$.data(el, "et_simple_slider", $et_slider);

			$et_slide.eq(0).addClass( 'et-active-slide' );

			if ( settings.use_arrows && et_slides_number > 1 ) {
				if ( settings.manual_arrows == '' )
					$et_slider.append( '<div class="et-slider-arrows"><a class="et-arrow-prev" href="#">' + settings.previous_text + '</a><a class="et-arrow-next" href="#">' + settings.next_text + '</a></div>' );
				else
					$et_slider.append( settings.manual_arrows );

				$et_slider_arrows 	= $( settings.arrows );
				$et_slider_prev 	= $et_slider.find( settings.prev_arrow );
				$et_slider_next 	= $et_slider.find( settings.next_arrow );

				$et_slider_next.click( function(){
					if ( $et_slider.et_animation_running )	return false;

					$et_slider.et_slider_move_to( 'next' );

					return false;
				} );

				$et_slider_prev.click( function(){
					if ( $et_slider.et_animation_running )	return false;

					$et_slider.et_slider_move_to( 'previous' );

					return false;
				} );
			}

			if ( settings.use_controls && et_slides_number > 1 ) {
				for ( var i = 1; i <= et_slides_number; i++ ) {
					controls_html += '<a href="#"' + ( i == 1 ? ' class="' + settings.control_active_class + '"' : '' ) + '>' + i + '</a>';
				}

				controls_html =
					'<div class="' + settings.controls_class + '">' +
						controls_html +
					'</div>';

				if ( settings.append_controls_to == '' )
					$et_slider.append( controls_html );
				else
					$( settings.append_controls_to ).append( controls_html );

				$et_slider_controls	= $et_slider.find( settings.controls ),

				$et_slider_controls.click( function(){
					if ( $et_slider.et_animation_running )	return false;

					$et_slider.et_slider_move_to( $(this).index() );

					return false;
				} );
			}

			if ( settings.slideshow && et_slides_number > 1 && settings.show_progress_bar ) {
				$et_slider.append( '<div id="featured-progress-bar"><div id="progress-time"></div></div>' );
				$progress_bar = $( '#progress-time' );

				$et_slider.hover( function() {
					$et_slider.addClass( 'et_slider_hovered' );
				}, function() {
					$et_slider.removeClass( 'et_slider_hovered' );
					$progress_bar.animate( { 'width' : '100%' }, parseInt( settings.slideshow_speed - progress_timer_count ) );
				} );
			}

			et_slider_auto_rotate();

			function et_slider_auto_rotate(){
				if ( settings.slideshow && et_slides_number > 1 ) {
					$progress_bar.css( 'width', '0%' ).animate( { 'width' : '100%' }, parseInt( settings.slideshow_speed - progress_timer_count ) );

					if ( $et_slider.hasClass( 'et_slider_hovered' ) && $progress_bar.length && settings.slideshow && et_slides_number > 1 )
						$progress_bar.stop();

					et_slider_timer = setInterval( function() {
						if ( ! $et_slider.hasClass( 'et_slider_hovered' ) ) progress_timer_count += 100;

						if ( $et_slider.hasClass( 'et_slider_hovered' ) && $progress_bar.length && settings.slideshow && et_slides_number > 1 )
						$progress_bar.stop();

						if ( progress_timer_count >= parseInt( settings.slideshow_speed ) ) {
							progress_timer_count = 0;
							clearInterval( et_slider_timer );

							$et_slider.et_slider_move_to( 'next' );
						}
					}, 100 );
				}
			}

			$et_slider.et_slider_move_to = function ( direction ) {
				var $active_slide = $et_slide.eq( et_active_slide ),
					$next_slide;

				$et_slider.et_animation_running = true;

				if ( direction == 'next' || direction == 'previous' ){

					if ( direction == 'next' )
						et_active_slide = ( et_active_slide + 1 ) < et_slides_number ? et_active_slide + 1 : 0;
					else
						et_active_slide = ( et_active_slide - 1 ) >= 0 ? et_active_slide - 1 : et_slides_number - 1;

				} else {

					if ( et_active_slide == direction ) {
						$et_slider.et_animation_running = false;
						return;
					}

					et_active_slide = direction;

				}

				if ( typeof et_slider_timer != 'undefined' )
					clearInterval( et_slider_timer );

				if ( $progress_bar !== null && $progress_bar.length != 0 ) {
					progress_timer_count = 0;
					$progress_bar.stop( true ).css( 'width', '0%' );
				}

				$next_slide	= $et_slide.eq( et_active_slide );

				$et_slide.each( function(){
					$(this).css( 'zIndex', 1 );
				} );
				$active_slide.css( 'zIndex', 2 ).removeClass( 'et-active-slide' );
				$next_slide.css( { 'display' : 'block', opacity : 0 } ).addClass( 'et-active-slide' );

				if ( settings.use_controls )
					$et_slider_controls.removeClass( settings.control_active_class ).eq( et_active_slide ).addClass( settings.control_active_class );

				if ( ! settings.tabs_animation ) {
					$next_slide.delay(400).animate( { opacity : 1 }, et_fade_speed );
					$active_slide.addClass( 'et_slide_transition' ).css( { 'display' : 'block', 'opacity' : 1 } ).delay(400).animate( { opacity : 0 }, et_fade_speed, function(){
						$(this).css('display', 'none').removeClass( 'et_slide_transition' );
						$et_slider.et_animation_running = false;
					} );
				} else {
					$next_slide.css( { 'display' : 'none', opacity : 0 } );

					$active_slide.addClass( 'et_slide_transition' ).css( { 'display' : 'block', 'opacity' : 1 } ).animate( { opacity : 0 }, et_fade_speed, function(){
								$(this).css('display', 'none').removeClass( 'et_slide_transition' );

								$next_slide.css( { 'display' : 'block', 'opacity' : 0 } ).animate( { opacity : 1 }, et_fade_speed, function() {
									$et_slider.et_animation_running = false;
								} );
							} );
				}

				et_slider_auto_rotate();
			}
	}

	$.fn.et_simple_slider = function( options ) {
		return this.each(function() {
			new $.et_simple_slider(this, options);
		});
	}

	$.fn.et_carousel_slider = function( options ) {
		var settings = $.extend( {
			slide 					: 'li',				 			// slide class
			arrows					: '.et-slider-arrows',			// arrows container class
			prev_arrow				: '.et-arrow-prev',				// left arrow class
			next_arrow				: '.et-arrow-next',				// right arrow class
			scroll_speed			: 500,							// fade effect speed
			use_arrows				: true,							// use arrows?
			manual_arrows			: ''							// html code for custom arrows
		}, options );

		return this.each( function() {
			var $et_slider 				= $(this),
				$et_slider_wrapper		= $et_slider.find( 'ul' ),
				$et_slide				= $et_slider.find( settings.slide ),
				et_slides_number		= $et_slide.length,
				et_scroll_speed			= settings.scroll_speed,
				et_active_slide			= 1,
				et_slider_total_width	= $et_slide.innerWidth() * et_slides_number,
				modifier				= 3,
				container_width			= $('#container').width(),
				et_is_animated			= false;

			$et_slider_wrapper.width( et_slider_total_width );

			if ( settings.use_arrows && et_slides_number > 1 ) {
				if ( settings.manual_arrows == '' )
					$et_slider.append( '<div class="et-slider-arrows"><a class="et-arrow-prev" href="#">' + settings.previous_text + '</a><a class="et-arrow-next" href="#">' + settings.next_text + '</a></div>' );
				else
					$et_slider.append( settings.manual_arrows );

				// show slider arrows on mobile devices only, if we have less than 4 slides
				if ( et_slides_number < 4 ) $et_slider.addClass( 'et_only_mobile_arrows' );

				$et_slider_arrows 	= $( settings.arrows );
				$et_slider_prev 	= $et_slider.find( settings.prev_arrow );
				$et_slider_next 	= $et_slider.find( settings.next_arrow );

				$et_slider_next.click( function(){
					if ( et_is_animated ) return false;

					et_slider_move_to( 'next' );

					return false;
				} );

				$et_slider_prev.click( function(){
					if ( et_is_animated ) return false;

					et_slider_move_to( 'previous' );

					return false;
				} );
			}

			function et_slider_move_to( direction ) {
				var $cloned_element,
					$left_modifier;

				et_is_animated = true;

				if ( direction == 'next' ){
					// clone the first item
					$cloned_element = $et_slide.eq(0).clone();

					// extend the container width temporarily and add the first cloned slide as new last element
					$et_slider_wrapper.css( 'width', et_slider_total_width + $et_slide.innerWidth() ).append( $cloned_element );

					// slide one item at a time
					$et_slider_wrapper.animate( { 'left' : '-=' + $et_slide.innerWidth() }, 500, function(){
						// remove the original first item that was cloned previously
						$et_slide.eq(0).remove();

						// now that the first slide was removed - change the slider offset to 0px and restore the slider width
						$et_slider_wrapper.css( { 'left' : '0px', 'width' : et_slider_total_width } );

						// update cached variable to apply new slides order
						$et_slide = $et_slider.find( settings.slide );

						// animation is finished
						et_is_animated = false;
					} );
				}

				if ( direction == 'previous' ){
					$cloned_element = $et_slide.filter(':last').clone();
					$et_slider_wrapper.css( { 'width' : et_slider_total_width + $et_slide.innerWidth(), 'left' : '-' + $et_slide.innerWidth() + 'px' } ).prepend( $cloned_element );

					$et_slider_wrapper.animate( { 'left' : 0 }, 500, function(){
						$et_slide.filter(':last').remove();
						$et_slider_wrapper.css( { 'left' : '0px', 'width' : et_slider_total_width } );

						$et_slide = $et_slider.find( settings.slide );

						et_is_animated = false;
					} );
				}
			}

			$(window).resize( function(){
				et_slider_total_width 	= $et_slide.innerWidth() * et_slides_number;

				$et_slider_wrapper.width( et_slider_total_width );
			} );
		} );
	}


	var $featured_slider 	= $( '#featured' ),
		$home_tabs_slider 	= $( '#home-tab-area' ),
		$et_product_slider 	= $( '#et-product-slider' );

	$(document).ready( function(){
		var $et_top_menu 	= $( 'ul.nav' ),
			$comment_form	= $( '#commentform' ),
			$et_service		= $( '.service' );

		if ( $et_service.length ) {
			$et_service.find( 'h3' ).each( function() {
				var $this_el = $(this);
				$this_el.html( $this_el.html().replace("&amp;", "<span>&amp;</span>") );
			} );
		}


		$et_top_menu.superfish({
			delay		: 500, 										// one second delay on mouseout
			animation	: { opacity : 'show', height : 'show' },	// fade-in and slide-down animation
			speed		: 'fast', 									// faster animation speed
			autoArrows	: true, 									// disable generation of arrow mark-up
			dropShadows	: false										// disable drop shadows
		});

		if ( $('ul.et_disable_top_tier').length ) $("ul.et_disable_top_tier > li > ul").prev('a').attr('href','#');

		$('#top-navigation > ul.nav > li, .bottom-nav > li').each( function(){
			var $this_li = $(this),
				li_text = $this_li.find('> a').html();

			$this_li.find('> a').html( '<span class="main_text">' + li_text + '</span>' + '<span class="menu_slide">' + li_text + '</span>' );
		} );

		$( '#top-navigation' ).css( { 'visibility' : 'visible' } );

		$('#top-navigation > ul.nav > li > a, .bottom-nav > li > a').hover(
			function(){
				var link_top = 44;
				if ( $(this).closest( '.bottom-nav' ).length ) link_top = 62;

				$(this).find('span.main_text').css( { 'display' : 'inline-block', 'opacity' : 1 } ).stop(true,true).animate( { 'top' : '-59px', 'opacity' : 0 }, 400 );
				$(this).find('span.menu_slide').stop(true,true).animate( { 'top' : '-' + link_top + 'px' }, 400 );
			}, function(){
				$(this).find('span.main_text').stop(true,true).animate( { 'top' : '0', opacity : 1 }, 400 );
				$(this).find('span.menu_slide').stop(true,true).animate( { 'top' : '0' }, 400 );
			}
		);

		(function et_search_bar(){
			var $searchinput = $(".et-search-form .search_input, .search_input_text"),
				searchvalue = $searchinput.val();

			$searchinput.focus(function(){
				if (jQuery(this).val() === searchvalue) jQuery(this).val("");
			}).blur(function(){
				if (jQuery(this).val() === "") jQuery(this).val(searchvalue);
			});
		})();

		et_duplicate_menu( $('#top-navigation > ul.nav'), $('.mobile_nav'), 'mobile_pages_menu', 'et_mobile_menu' );

		function et_duplicate_menu( menu, append_to, menu_id, menu_class ){
			var $cloned_nav;

			menu.clone().attr('id',menu_id).removeClass().attr('class',menu_class).appendTo( append_to );
			$cloned_nav = append_to.find('> ul');
			$cloned_nav.find('.menu_slide').remove();
			$cloned_nav.find('li:first').addClass('et_first_mobile_item');

			append_to.find('>ul').addClass( 'closed' );

			append_to.click( function(){
				if ( $(this).find('ul').hasClass('closed') ){
					$(this).find('ul').removeClass( 'closed' ).addClass( 'opened' );
					$cloned_nav.slideDown( 500 );
				} else {
					$(this).find('ul').removeClass( 'opened' ).addClass( 'closed' );
					$cloned_nav.slideUp( 500 );
				}
				return false;
			} );

			append_to.find('a').click( function(event){
				event.stopPropagation();
			} );
		}

		$comment_form.find('input:text, textarea').each(function(index,domEle){
			var $et_current_input = jQuery(domEle),
				$et_comment_label = $et_current_input.siblings('label'),
				et_comment_label_value = $et_current_input.siblings('label').text();
			if ( $et_comment_label.length ) {
				$et_comment_label.hide();
				if ( $et_current_input.siblings('span.required') ) {
					et_comment_label_value += $et_current_input.siblings('span.required').text();
					$et_current_input.siblings('span.required').hide();
				}
				$et_current_input.val(et_comment_label_value);
			}
		}).bind('focus',function(){
			var et_label_text = jQuery(this).siblings('label').text();
			if ( jQuery(this).siblings('span.required').length ) et_label_text += jQuery(this).siblings('span.required').text();
			if (jQuery(this).val() === et_label_text) jQuery(this).val("");
		}).bind('blur',function(){
			var et_label_text = jQuery(this).siblings('label').text();
			if ( jQuery(this).siblings('span.required').length ) et_label_text += jQuery(this).siblings('span.required').text();
			if (jQuery(this).val() === "") jQuery(this).val( et_label_text );
		});

		// remove placeholder text before form submission
		$comment_form.submit(function(){
			$comment_form.find('input:text, textarea').each(function(index,domEle){
				var $et_current_input = jQuery(domEle),
					$et_comment_label = $et_current_input.siblings('label'),
					et_comment_label_value = $et_current_input.siblings('label').text();

				if ( $et_comment_label.length && $et_comment_label.is(':hidden') ) {
					if ( $et_comment_label.text() == $et_current_input.val() )
						$et_current_input.val( '' );
				}
			});
		});
	});

	$(window).load( function(){
		if ( $featured_slider.length ){
			et_slider_settings = {
				fade_speed 		: 700,
				slide			: '.slide',
				use_controls	: false
			}

			if ( $featured_slider.hasClass('et_slider_auto') ) {
				var et_slider_autospeed_class_value = /et_slider_speed_(\d+)/g;

				et_slider_settings.slideshow = true;

				et_slider_autospeed = et_slider_autospeed_class_value.exec( $featured_slider.attr('class') );

				et_slider_settings.slideshow_speed = et_slider_autospeed[1];
			}

			$featured_slider.et_simple_slider( et_slider_settings );
		}

		if ( $et_product_slider.length ) {
			$et_product_slider.et_carousel_slider( {
				manual_arrows : '<div class="et-slider-arrows"><a class="et-arrow-prev" href="#">' + '<span>' + 'Previous' + '</span>' + '</a><a class="et-arrow-next" href="#">' + '<span>' + 'Next' + '</span>' + '</a></div>'
			} );
		}

		if ( $home_tabs_slider.length ) {
			$home_tabs_slider.et_simple_slider( {
				use_controls 	: false,
				use_arrows		: false,
				slide			: '.home-tab-slide',
				tabs_animation	: true
			} );

			$home_tabs_slider.find( '> ul > li' ).click( function() {
				var $this_el 	= $(this),
					$home_tabs 	= $home_tabs_slider.data('et_simple_slider');

				if ( $home_tabs.et_animation_running ) return;

				$this_el.addClass( 'home-tab-active' ).siblings().removeClass( 'home-tab-active' );

				$home_tabs.data('et_simple_slider').et_slider_move_to( $this_el.index() );
			} );

			$home_tabs_slider.find( '> ul' ).append( function() {
				var $this_el = $(this),
					$home_tabs = $home_tabs_slider.data('et_simple_slider');

				$this_el.append( '<li id="et_home_tabs_prev"></li>' + '<li id="et_home_tabs_next"></li>' );

				$this_el.find( '#et_home_tabs_prev' ).click( function() {
					if ( $home_tabs.et_animation_running ) return;

					$home_tabs.data('et_simple_slider').et_slider_move_to( 'previous' );
				} );

				$this_el.find( '#et_home_tabs_next' ).click( function() {
					if ( $home_tabs.et_animation_running ) return;

					$home_tabs.data('et_simple_slider').et_slider_move_to( 'next' );
				} );
			} );
		}
	} );
})(jQuery)