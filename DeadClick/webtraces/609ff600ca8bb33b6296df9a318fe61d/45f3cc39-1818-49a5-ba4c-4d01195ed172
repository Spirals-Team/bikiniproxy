(function($){

// function needs revision (gt)

$(document).ready(function() {
  
  $('body').addClass('offcanvas');
  
  var $menu = $('#menu'),				// why the dollar-signs in the var names?
    $menulink = $('.menu-link'),
    $button = $('#sidebarButton'),
    $wrap = $('#wrap');
    $oc = $('.oc');
  
	$button.click(function(e) {
		$menulink.toggleClass('active');
		$wrap.toggleClass('active');
		// document.getElementById("#menu").style.display = "block";  // use jquery st 
		$("#menu").css('display', 'block');
		//return false;
		e.stopPropagation();
		e.preventDefault();
  });
  
});

})(jQuery);			// end jQuery Wrapper
