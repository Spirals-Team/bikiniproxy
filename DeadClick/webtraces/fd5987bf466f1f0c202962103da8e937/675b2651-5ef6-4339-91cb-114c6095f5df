jQuery.noConflict()(function($){
	$('.in_container .wpb_wrapper').css('width',$('.oi_page_holder').width()/2);
	$('.in_container .wpb_wrapper').css('padding-right','10%');
	$('.in_container').css('padding-left',($(window).width() - $('.oi_page_holder').width())/2);
	
	$('.in_container_right .wpb_wrapper').css('width',$('.oi_page_holder').width()/2);
	
	
	if ($('.oi_head_feat_image_holder').length){
		myPos = $('.oi_head_feat_image_holder').css("background-position").split(" ");
		var y= myPos[1];
		$(window).scroll(function(){
			var st = $(this).scrollTop();
			$('.oi_head_feat_image_holder').css({ 
				'background-position' : 'center calc('+y+' + '+(-st/2)+'px)'
			});
			$('.oi_standard_tagline').css({
				'margin-top' : -parseInt(-st/2)+'px',
				'opacity' :(1 - st/($(window).height()-700)),
			});
			$('.oi_fh_f_image').css({
				'margin-top' : -parseInt(-st/2)+'px',
				'opacity' :(1 - st/($(window).height()-700)),
			});
		});
		$('.oi_head_feat_image_holder').css('margin-top',-$('.oi_logo_holder').outerHeight())
		$('.oi_standard_tagline').css('margin-top','0')
	}
	
	
	$('.oi_burger_normal_holder').click(function(){
		$('a.oi_burger_normal').toggleClass('active');
		$('body').toggleClass('oi_active_burger_menu');
		return false;
	});
	
	$('.oi_layout_standard').css('margin-top',$('.oi_logo_holder').outerHeight())
	
	/*INSERT CONTENT AFTER PORTFOLIO*/
	$('.insert_after_portfolio').insertAfter('.potfolio_container_holder');
	/*END*/
	$('.oi_layout_standard').css('margin-bottom',$('.fixed_footer').outerHeight())
	
	$('.oi_strange_portfolio_item').css('opacity',0);
	$(function() {
		$('.oi_strange_portfolio_item').each(function(index) {
			setTimeout(function(el) {
				el.animate({'opacity': 1}, 1000);
			}, index * 300, $(this));
		});
	});
	

$('#menu_slide_xs').click(function(e) {
	e.preventDefault();
	$('#nav-toggle').toggleClass("active");
	$('body').toggleClass("show_xs_menu");
})


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.oi_logo_holder').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 0);

function hasScrolled() {
    var st = $(this).scrollTop();
	var header_h = $('.oi_logo_holder').outerHeight();

    
	if(st>navbarHeight){
		$('.oi_logo_holder').addClass('oi_scrolled')
		$('.oi_logo_holder').removeClass('background--dark')
	}else{
		$('.oi_logo_holder').removeClass('oi_scrolled')
	}
};


});