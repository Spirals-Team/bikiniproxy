jQuery.noConflict();
jQuery(document).ready(function($){

	"use strict";
	if( mytheme_urls.loadingbar === "enable") {
		if( mytheme_urls.linkedin === "enable") {
			$(window).load(function() {
				$("#loader-wrapper").fadeOut("slow");
			});
		} else {
			Pace.on("done", function(){
				$("#loader-wrapper").fadeOut(500);
				$(".pace").remove();
			});
		}
	}

	var isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ? true : false;
	var $px, currentWidth;

	//Menu Start
	megaMenu();
	function megaMenu() {
		var screenWidth = $(document).width(),
		containerWidth = $("#header .container").width(),
		containerMinuScreen = (screenWidth - containerWidth)/2;
		if( containerWidth == screenWidth ){

			$px = mytheme_urls.scroll == "disable" ? 45 : 25;
			
			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){

				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();

				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > screenWidth ){
					var SwMinuOffset = screenWidth - ParentLeftPosition;
					var marginFromLeft = MegaMenuChildContainerWidth - SwMinuOffset;
					var marginFromLeftActual = (marginFromLeft) + $px;
					var marginLeftFromScreen = "-"+marginFromLeftActual+"px";
					$(this).css('left',marginLeftFromScreen);
				}

			});
		} else {
		
			$px = mytheme_urls.scroll == "disable" ? 40 : 20;

			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){
				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();

				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > containerWidth ){
					var marginFromLeft = ( ParentLeftPosition + MegaMenuChildContainerWidth ) - screenWidth;
					var marginLeftFromContainer = containerMinuScreen + marginFromLeft + $px;

					if( MegaMenuChildContainerWidth > containerWidth ){
						var MegaMinuContainer	= ( (MegaMenuChildContainerWidth - containerWidth)/2 ) + 10;
						var marginLeftFromContainerVal = marginLeftFromContainer - MegaMinuContainer;
						marginLeftFromContainerVal = "-"+marginLeftFromContainerVal+"px";
						$(this).css('left',marginLeftFromContainerVal);
					} else {
						marginLeftFromContainer = "-"+marginLeftFromContainer+"px";
						$(this).css('left',marginLeftFromContainer);
					}
				}

			});
		}
	}
	
	//Menu Hover Start
	function menuHover() {
		$("li.menu-item-depth-0,li.menu-item-simple-parent ul li" ).hover(
			function(){
				if( $(this).find(".megamenu-child-container").length  ){
					$(this).find(".megamenu-child-container").stop().fadeIn('fast');
				} else {
					$(this).find("> ul.sub-menu").stop().fadeIn('fast');
				}
			},
			function(){
				if( $(this).find(".megamenu-child-container").length ){
					$(this).find(".megamenu-child-container").stop(true, true).hide();
				} else {
					$(this).find('> ul.sub-menu').stop(true, true).hide(); 
				}
			}
		);
	}//Menu Hover End
	
	//Sticky Navigation
	if( navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) || 
		navigator.userAgent.match(/Android/i)||
		navigator.userAgent.match(/webOS/i) || 
		navigator.userAgent.match(/iPhone/i) || 
		navigator.userAgent.match(/iPod/i)) {
			if( mytheme_urls.stickynav === "enable") {
				$("#header").sticky({ topSpacing: 0 });
			}
	} else {
		if( mytheme_urls.stickynav === "enable") {
			$("#header").sticky({ topSpacing: 0 });
		}
	}//Sticky Navigation End

	if(navigator.userAgent.indexOf('Mac') > 0) {
		$('body').addClass('mac-os');
	}

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 90) {
			$("#header-sticky-wrapper").addClass("ha-header-color");
		} else {
			$("#header-sticky-wrapper").removeClass("ha-header-color");
		}
	});

	//NICE SCROLL...
	if( $(window).width() > 767 && ! navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && ! navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
		$('html').niceScroll({
			zindex : 9999,
			autohidemode : false,
			cursorborder : 0,
			cursorborderradius : 5,
			cursorwidth : 5,
			horizrailenabled : false,
			mousescrollstep : 40,
			scrollspeed : 60
		});
	}

	//Mobile Menu
	$("#dt-menu-toggle").click(function( event ){
		event.preventDefault();
		var $menu = $("nav#main-menu").find("ul.menu:first");
		$menu.slideToggle(function(){
			$menu.css('overflow' , 'visible');
			$menu.toggleClass('menu-toggle-open');
		});
	});

	$(".dt-menu-expand").click(function(){
		if( $(this).hasClass("dt-mean-clicked") ){
			$(this).text("+");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideUp(300);
			} else {
				$(this).prev('.megamenu-child-container').find('ul:first').slideUp(300);
			}
		} else {
			$(this).text("-");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideDown(300);
			} else{
				$(this).prev('.megamenu-child-container').find('ul:first').slideDown(300);
			}
		}
		
		$(this).toggleClass("dt-mean-clicked");
		return false;
	});

	if( !isMobile ){
		currentWidth = window.innerWidth || document.documentElement.clientWidth;
		if( currentWidth > 767 ){
			menuHover();
		}
	}	
	//Mobile Menu End
//Menu End

	//Parallax Sections...
	$('.dt-sc-parallax-section').bind('inview', function (event, visible) {
		if(visible === true) {
			$(this).parallax("50%", 0.5);
		} else {
			$(this).css('background-position', '');
		}
	});

	//Selection Box...
	$("select").each(function(){
		if($(this).css('display') != 'none') {
			$(this).wrap( '<div class="selection-box"></div>' );
		}
	});

	//To Top...
	$().UItoTop({ easingType: 'easeOutQuart' });

	//PrettyPhoto...
    var $pphoto = $('a[data-gal^="prettyPhoto[gallery]"]');
    if ($pphoto.length) {
        $pphoto.prettyPhoto({
			hook:'data-gal',
			animation_speed:'normal',
			theme:'light_square',
			slideshow:3000,
			autoplay_slideshow: false,
			social_tools: false,
			deeplinking:false
		});
    }

	// Portfolio Slider Single in Portfolio
	if( $(".portfolio-single-slider").find("li").length > 1 ) {
		$(".portfolio-single-slider").bxSlider({ auto:false, video:true, useCSS:false, pagerCustom: '#bx-pager', autoHover:true, adaptiveHeight:true, controls:true });
	}//Portfolio Slider Single in Portfolio
	
	$(window).load(function() {

		//Portfolio isotope
		var $container = $('.dt-sc-portfolio-container');
		var $gw, $width;

		if( $container.length) {

			$width = $('.dt-sc-portfolio-container .portfolio').hasClass('no-space') ? 0 : 30;
			if($('.page-with-sidebar').length) { $width = 20; }

			$(window).smartresize(function(){
				$container.css({overflow:'hidden'}).isotope({itemSelector : '.column',masonry: { gutter: $width } });
			});

			$container.isotope({
			  filter: '*',
			  masonry: { gutter: $width },
			  animationOptions: { duration: 750, easing: 'linear', queue: false  }
			});
		}

		if($("div.dt-sc-sorting-container").length){
			$("div.dt-sc-sorting-container a").click(function(){
				$width = $('.dt-sc-portfolio-container .portfolio').hasClass('no-space') ? 0 : 30;
				if($('.page-with-sidebar').length) { $width = 20; }

				$("div.dt-sc-sorting-container a").removeClass("active-sort");
				var selector = $(this).attr('data-filter');
				$(this).addClass("active-sort");
				$container.isotope({
					filter: selector,
					masonry: { gutter: $width },
					animationOptions: { duration:750, easing: 'linear',  queue: false }
				});
			return false;	
			});
		}
		//Portfolio isotope End
		
		//Fitvids...
		$("div.dt-video-wrap").fitVids();
		
		//Gallery Blog Slider...
		if( ($("ul.entry-gallery-post-slider").length) && ( $("ul.entry-gallery-post-slider li").length > 1 ) ){
		 $("ul.entry-gallery-post-slider").bxSlider({ auto:false, video:true, useCSS:false, autoHover:true, adaptiveHeight:true, pagerCustom: '#entry-gallery-pager' });
		}
		
		//Carousel Items...
		if($(".carousel_items").length) {
			$(".carousel_items .dt_carousel").each(function(){
			  $(this).carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				prev: $(this).next('.carousel-arrows').find('.prev-arrow'),
				next: $(this).next('.carousel-arrows').find('.next-arrow'),
				height: 'auto',
				scroll: 1,
				items: { width: $(this).find('.column').width(),  visible: { min: 1, max: parseInt($(this).attr('data-items')) } }
			  });
			});
		}
		dt_smartresize_block();
	});
	
	$(window).smartresize(function(){
		dt_smartresize_block();
	});
	 
	//Animate Number...
	$('.dt-sc-num-count').each(function(){
	  $(this).one('inview', function (event, visible) {
		  if(visible === true) {
			  var val = $(this).find('p').attr('data-value');
			  $(this).find('p').animateNumber({ number: val	}, 2000);
		  }
	  });
	});
	
	//BMI Form Validation...
	$('form.dt-sc-bmi-frm').each(function(){
		$(this).validate({
			rules: { 
				txtfeet: { required: true },
				txtinches: { required: true },
				txtlbs: { required: true }
			},
			errorPlacement: function(error, element) { }
		});
	});

	//BMI Calculation...
	$('form[name="frmbmi"]').submit(function(){
		var This = $(this);
		if(This.valid()) {
			var fet = This.find('input[name="txtfeet"]').val();
			var inc = This.find('input[name="txtinches"]').val();
			var tinc = ( parseInt(fet) * 12 ) + parseInt(inc);
			
			var lbs = This.find('input[name="txtlbs"]').val();
			
			var bmi = ( parseFloat(lbs) / (tinc * tinc) ) * 703;
			
			This.find('input[name="txtbmi"]').val(parseFloat(bmi).toFixed(1));
		}
		return false;
	});

	//Newsletter ajax submit...
	$('form[name="frmsubscribe"]').on('submit', function () {

		var $this = $(this);
		var $mc_fname = $this.find('#dt_mc_fname').val(),
			$mc_email = $this.find('#dt_mc_emailid').val(),
			$mc_apikey = $this.find('#dt_mc_apikey').val(),
			$mc_listid = $this.find('#dt_mc_listid').val();

		$.ajax({
			type: "POST",
			url: mytheme_urls.ajaxurl,
			data:
			{
				action: 'dt_theme_mailchimp_subscribe',
				mc_fname: $mc_fname,
				mc_email: $mc_email,
				mc_apikey: $mc_apikey,
				mc_listid: $mc_listid
			},
			success: function (response) {
				$this.parent().find('#ajax_newsletter_msg').html(response);
				$this.parent().find('#ajax_newsletter_msg').slideDown('slow');
				if (response.match('success') != null) $this.slideUp('slow');
			}
		});

		return false;

    });

	//BMI View...
	if($("a.fancyInline").length) {
		$("a.fancyInline").fancybox({
			scrolling: 'no',
			width: 'auto',
			height: 'auto'
		});
	}
	
	//Add to Whishlist...
	$('.add_to_wishlist').click(function(){
		$('body').addClass('dt-sc-product-added');
		window.setTimeout(function() {
			$('body').removeClass('dt-sc-product-added');
		}, 3000);
	});
});

//Responsive Purpose...
function dt_smartresize_block() {
	"use strict";

	//Blog
	if( jQuery(".apply-isotope").length ){
		jQuery(".apply-isotope").isotope({itemSelector : '.column',transformsEnabled:false,masonry: { gutter: 20} });
	}
}