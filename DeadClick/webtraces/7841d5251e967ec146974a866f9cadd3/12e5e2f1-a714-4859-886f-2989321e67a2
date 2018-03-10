/* <![CDATA[ */
jQuery(document).ready(function() {
	// remove autoplay from all videos, except the first one, in the slider
	jQuery( '.et_embedded_videos iframe' ).each( function( index ) {
		var $this_frame = jQuery(this),
			frame_src	= $this_frame.attr( 'src' );

		if ( -1 !== frame_src.indexOf( 'autoplay=1' ) ) {
			frame_src = frame_src.replace( /autoplay=1/g, '' );
			$this_frame
				.addClass( 'et_autoplay_removed' )
				.attr( 'src', '' )
				.attr( 'src', frame_src );
		}
	} );

	jQuery("a[class*=fancybox]").fancybox({
		'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack',
		'speedIn' 			: '700',
		'centerOnScroll'	: true,
		'onComplete'		: function( currentArray, currentIndex, currentOpts ) {
			if ( currentOpts.type == 'image' ) return;

			var $this_frame 	= jQuery( '#fancybox-wrap' ).find( 'iframe' ),
				this_frame_src 	= $this_frame.attr( 'src' );

			$this_frame.data( 'et_video_embed', $this_frame.attr( 'src' ) );

			// if we removed autoplay previously, let's add it back
			if ( jQuery( currentOpts.href ).find( 'iframe' ).hasClass( 'et_autoplay_removed' ) )
				$this_frame.attr( 'src', this_frame_src + '&autoplay=1' );
		},
		'onClosed'			: function( currentArray, currentIndex, currentOpts ) {
			if ( currentOpts.type == 'image' ) return;

			var $this_frame = jQuery( currentOpts.href ).find( 'iframe.et_autoplay_removed' ),
				this_frame_src,
				$frame = jQuery( currentOpts.href ).find( 'iframe' );

			$frame.attr( 'src', $frame.data( 'et_video_embed' ) )

			if ( $this_frame.length ) {
				// delete autoplay after closing the fancybox window to prevent videos from playing in background
				frame_src = $this_frame.attr( 'src' ).replace( /autoplay=1/g, '' );
				$this_frame
					.attr( 'src', '' )
					.attr( 'src', frame_src );
			}
		}
	});

	jQuery("a[class*='et_video_lightbox']").click(function(){
		var et_video_href = jQuery(this).attr('href'),
			et_video_link;

		et_vimeo = et_video_href.match(/vimeo.com\/(.*)/i);
		if ( et_vimeo != null )	et_video_link = 'http://player.vimeo.com/video/' + et_vimeo[1];
		else {
			et_youtube = et_video_href.match(/watch\?v=([^&]*)/i);
			if ( et_youtube != null ) et_video_link = 'http://youtube.com/embed/' + et_youtube[1];
		}

		jQuery.fancybox({
			'overlayOpacity'	:	0.7,
			'overlayColor'		:	'#000000',
			'autoScale'		: false,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic',
			'easingIn'      : 'easeOutBack',
			'easingOut'     : 'easeInBack',
			'type'			: 'iframe',
			'centerOnScroll'	: true,
			'speedIn' 			: '700',
			'href'			: et_video_link
		});
		return false;
	});

	var $portfolioItem = jQuery('.et_pt_gallery_entry');
	$portfolioItem.find('.et_pt_item_image').css('background-color','#000000');
	jQuery('.zoom-icon, .more-icon').css({'opacity':'0','visibility':'visible'});

	$portfolioItem.hover(function(){
		jQuery(this).find('.et_pt_item_image').stop(true, true).animate({top: -10}, 500).find('img.portfolio').stop(true, true).animate({opacity: 0.7},500);
		jQuery(this).find('.zoom-icon').stop(true, true).animate({opacity: 1, left: 43},400);
		jQuery(this).find('.more-icon').stop(true, true).animate({opacity: 1, left: 110},400);
	}, function(){
		jQuery(this).find('.zoom-icon').stop(true, true).animate({opacity: 0, left: 31},400);
		jQuery(this).find('.more-icon').stop(true, true).animate({opacity: 0, left: 128},400);
		jQuery(this).find('.et_pt_item_image').stop(true, true).animate({top: 0}, 500).find('img.portfolio').stop(true, true).animate({opacity: 1},500);
	});


	//contact page
	var $et_contact_container = jQuery('#et-contact'),
		$et_contact_form = $et_contact_container.find('form#et_contact_form'),
		$et_contact_submit = $et_contact_container.find('input#et_contact_submit'),
		$et_inputs = $et_contact_form.find('input[type=text],textarea'),
		et_email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
		et_contact_error = false,
		$et_contact_message = jQuery('#et-contact-message'),
		et_message = '';

	$et_inputs.live('focus', function(){
		if ( jQuery(this).val() === jQuery(this).siblings('label').text() ) jQuery(this).val("");
	}).live('blur', function(){
		if (jQuery(this).val() === "") jQuery(this).val( jQuery(this).siblings('label').text() );
	});

	$et_contact_form.live('submit', function() {
		et_contact_error = false;
		et_message = '<ul>';

		$et_inputs.removeClass('et_contact_error');

		$et_inputs.each(function(index, domEle){
			if ( jQuery(domEle).val() === '' || jQuery(domEle).val() === jQuery(this).siblings('label').text() ) {
				jQuery(domEle).addClass('et_contact_error');
				et_contact_error = true;

				var default_value = jQuery(this).siblings('label').text();
				if ( default_value == '' ) default_value = et_ptemplates_strings.captcha;

				et_message += '<li>' + et_ptemplates_strings.fill + ' ' + default_value + ' ' + et_ptemplates_strings.field + '</li>';
			}
			if ( (jQuery(domEle).attr('id') == 'et_contact_email') && !et_email_reg.test(jQuery(domEle).val()) ) {
				jQuery(domEle).removeClass('et_contact_error').addClass('et_contact_error');
				et_contact_error = true;

				if ( !et_email_reg.test(jQuery(domEle).val()) ) et_message += '<li>' + et_ptemplates_strings.invalid + '</li>';
			}
		});

		if ( !et_contact_error ) {
			$href = jQuery(this).attr('action');

			$et_contact_container.fadeTo('fast',0.2).load($href+' #et-contact', jQuery(this).serializeArray(), function() {
				$et_contact_container.fadeTo('fast',1);
			});
		}

		et_message += '</ul>';

		if ( et_message != '<ul></ul>' )
			$et_contact_message.html(et_message);

		return false;
	});

	var $et_searchinput = jQuery('#et-searchinput');
		etsearchvalue = $et_searchinput.val();

	$et_searchinput.focus(function(){
		if (jQuery(this).val() === etsearchvalue) jQuery(this).val("");
	}).blur(function(){
		if (jQuery(this).val() === "") jQuery(this).val(etsearchvalue);
	});

	var $et_template_portfolio_thumb = jQuery('.et_pt_portfolio_entry');
	$et_template_portfolio_thumb.hover(function(){
		jQuery(this).find('img').fadeTo('fast', 0.8);
		jQuery(this).find('.et_portfolio_more_icon,.et_portfolio_zoom_icon').fadeTo('fast', 1);
	}, function(){
		jQuery(this).find('img').fadeTo('fast', 1);
		jQuery(this).find('.et_portfolio_more_icon,.et_portfolio_zoom_icon').fadeTo('fast', 0);
	});

});
/* ]]> */