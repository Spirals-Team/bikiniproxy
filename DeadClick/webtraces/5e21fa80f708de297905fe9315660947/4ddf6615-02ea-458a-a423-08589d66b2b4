jQuery(function() {
	var $ = jQuery;

    $('#wsite-header-search-form input').css({'width': '0px', 'display': 'none'});
	$('#wsite-header-search-form').append( '<span class="wsite-search-cover"></span>');
	$('#header .wsite-search').css('border', '2px transparent');
	$('#header .wsite-search').css('background', 'transparent');

	$('.wsite-search-cover').live('click', function(e){
		e.preventDefault();
		$('#nav, #logo').fadeOut('slow', function() {
			$('#header .wsite-search').css('border', '2px solid #fff');
			$('#header .wsite-search').css('background', '#fff');
			$('#header .search').css('margin-left', '0px');
			$('#wsite-header-search-form input').css({'display': 'block'});
			$('#wsite-header-search-form input').css({'border-left': '1px solid #292929'});
			$('#wsite-header-search-form input').animate({width: '900px'}, 1000, function() {
				$(this).focus();
				$('.wsite-search-cover').remove();
			});
		});
	});

	$('#wsite-header-search-form input').live('blur', function(e) {
		$('#wsite-header-search-form input').animate({width: '0px'}, 1000, function() {
			$(this).css({'display': 'none'});
			$('#header .wsite-search').css('border', '2px transparent');
			$('#header .wsite-search').css('background', 'transparent');
			$('#nav, #logo').fadeIn('slow');
			$('#wsite-header-search-form').append( '<span class="wsite-search-cover"></span>');
		});
	});
});