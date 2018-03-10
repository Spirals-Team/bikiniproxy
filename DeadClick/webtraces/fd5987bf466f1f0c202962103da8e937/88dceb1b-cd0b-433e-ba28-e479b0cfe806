jQuery.noConflict()(function($){
	"use strict";
	
		if (oi_theme.menu_type == '0'){
			if ($('body').hasClass('home')){	
				$('.oi_main_menu').onePageNav({
					currentClass: 'current-menu-item',
					changeHash: false,
					scrollSpeed: 750,
					scrollThreshold: 0.5,
					filter: ':not(.external)',
					easing: 'swing',
				});
			}else{
				$('.oi_main_menu > li').removeClass('current-menu-item');
				if ($('body').hasClass('single-post') || $('body').hasClass('blog')){
					$('li.blogpage').addClass('current-menu-item')
				}else if($('body').hasClass('single-portfolio') || $('body').hasClass('portfolio')){
					$('li.portfoliopage').addClass('current-menu-item')
				}
				$('.oi_main_menu > li > a ').each(function() {
					var hash = $( this ).attr('href');
					$( this ).attr('href',oi_theme.home_url+hash);
				});
			
			}
		}
	
	jQuery(document).ready(function($) {
		if ($('#rev_slider_2_1_wrapper').length){
		   revapi2.bind("revolution.slide.onafterswap",function (e) {
			BackgroundCheck.init({
			  targets: '.oi_logo_holder',
			  images: '.active-revslide .tp-bgimg'
			});
			BackgroundCheck.refresh();});
		};
	
		if ($('.oi_head_feat_image_holder').length){
			BackgroundCheck.init({
			  targets: '.oi_logo_holder',
			  images: '.oi_head_feat_image_holder'
			});
		};
		
		$('a[data-rel^=lightcase]').lightcase();
		lightcase.resize();
	});	
		


function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#000'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        //words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 0)
    } else if (letterCount === words[0].length + 1 && waiting === false && words.length>1) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 500)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 60)
}
	
	

$('.glitch_holder').append('<div class="glitch"></div>')
	
/*************************************/		
/*POSTS CATEGORIES*/		
	if($('.oi_list_cats').find('.current-cat').length > 1 ){
		$('.oi_all_cats.current-cat').removeClass('current-cat')
	}
/*END ---- POSTS CATEGORIES*/	
/*************************************/		
/*************************************/		
	if($('body').outerWidth()< 1100){
		var ws = $('.oi_header_side').outerWidth()
	}else{
		var ws = $('.oi_header_side').outerWidth()/4;
	}
	
	$('.oi_slide_header_side').click(function(e) {
		if (!$('.oi_header_side').hasClass('oi_h_open')){
		$('.oi_header_side').animate({width: $(window).width()}, 600);
		}else{$('.oi_header_side').animate({width: ws	}, 600);}
		$('.oi_header_side').toggleClass('oi_h_open')
		$(this).find('i').toggleClass('fa-chevron-right fa-chevron-left')
		return false;
	});

			

	$('#oi_gallery_slider').unslider({infinite: true});
	
	
	

	$.fn.equalizeHeights = function () {
		return this.height(Math.max.apply(this, $(this).map(function (i, e) {
			return $(e).height()
		}).get()))
	};


	
	





	

	
$('.wp-smiley').removeClass('img-responsive')
$('.wp-caption img').removeAttr('height');
$('.wp-caption img').removeAttr('width')
$('.wp-caption').removeAttr('style');
$('.oi_widget img').addClass('img-responsive');
$('.alignnone').addClass('img-responsive');
$('.alignnone img').addClass('img-responsive')
$('table:not(#wp-calendar)').addClass('table table-striped table-bordered');
$('.oi_blog_post_content_holder a').addClass('colored');
$('.oi_single_post_content_holder a').addClass('colored');	








});
