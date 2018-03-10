jQuery(function($){
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>50 ){
			$('#sp-top-wrapper').addClass('menu-fixed');
		} else {
			$('#sp-top-wrapper').removeClass('menu-fixed');
		}
	});

	$('.sp-main-menu-toggler').on('click', function(e){
		e.preventDefault();
	});

	$('.sp-main-menu-toggler').appendTo('#sp-menu');
	$('.sp-mobile-menu').appendTo('#menu');


	//Inview
    $('.sp-animation').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
      if (visible) {
      	$(this).addClass('sp-inview');
      } else {
      	$(this).removeClass('sp-inview').removeClass('sp-animation');
      }
    });

});