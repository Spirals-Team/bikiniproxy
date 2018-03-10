/*globals ajax, WPSC_GoldCart*/
(function($){
	var searching = false,
		cache = {};
	
	function adjust_item_width() {
		var container_width = $('.product_grid_display').width(),
			dummy_item = $('.product_grid_item').eq(0),
			border, margin, padding, width;

		function toInt(s) {
			s = s || '';
			return + s.replace(/[^\d\.]/g, '');
		}

		if (dummy_item) {
			border = toInt(dummy_item.css('borderLeftWidth')) + toInt(dummy_item.css('borderRightWidth'));
			margin = toInt(dummy_item.css('marginLeft')) + toInt(dummy_item.css('marginRight'));
			padding = toInt(dummy_item.css('paddingLeft')) + toInt(dummy_item.css('paddingRight'));
			width = Math.floor(container_width / WPSC_GoldCart.itemsPerRow - border - margin - padding);

			$('.product_grid_item').css('width', width + 'px');
		}
	}
	
	function thickboxPreviewFix() {
		$('.thickbox.preview_link').each(function(){
			var t = $(this),
				r = t.attr('rel');
				t.siblings('.wpcart_gallery').find('.thickbox').attr('rel', r);
		});
	}
	
	$('.wpsc_live_search_embed').live('keyup', function(){
		var t = $(this),
			str = $.trim(t.val()),
			list = $('.' + WPSC_GoldCart.productListClass);
		
		function replaceItems(str) {
			list.html(cache[str]);

			if ( WPSC_GoldCart.displayMode == 'grid' ) {
				adjust_item_width();
			}
			
			if (WPSC_GoldCart.thickboxFix) {
				thickboxPreviewFix();
			}
		}
		
		function fetchItems() {
			searching = false;
			var data = {
					wpsc_gc_action : 'live_search_embed',
					product_search : str
				};
			$.query.SET('product_search', str);
			$('#wpsc-main-search .wpsc-products-view-mode').find('a').each(function(){
				var t = $(this),
					href = t.attr('href');
				
				t.attr('href', $.query.load(href).SET('product_search', str));
			});
			$('#wpsc-main-search select').each(function(){
				var t = $(this);
				if (t.val() !== '') {
					data[t.attr('name')] = t.val();
				}
			});
			
			$.get(
				location.href,
				data,
				function(response) {
					var results = $(response);
					cache[str] = results.find('.' + WPSC_GoldCart.productListClass).html();
					replaceItems(str);
				}
			);
		}
		
		// not so fast, touch typers!
		if (searching) {
			clearTimeout(searching);
			searching = false;
		}
		
		if (cache[str]) {
			replaceItems(str);
		} else {
			searching = setTimeout(fetchItems, 500);
		}
	});
	
	$('#wpsc-main-search select').live('change', function(){
		var t = $(this), qs;
		if (t.val() !== '') {
			location.search = $.query.SET(t.attr('name'), t.val());
		}
	});
	
	var widgetCache = {},
		widgetSearch = false;
	
	$('.wpsc_live_search').live('keyup', function(){
		var t = $(this),
			str = $.trim(t.val());
		
		function displayResults(str) {
			var e = t.parent().parent().find('.blind_down');
			if (str === '') {
				e.slideUp();
			} else {
				e.html(widgetCache[str]).slideDown(200);
			}
		}
			
		function widgetFetchItems() {
			$.post(
				location.href,
				{
					wpsc_live_search : 'true',
					wpsc_search_widget : 'true',
					product_search : str
				},
				function(response) {
					var results = $(response);
					widgetCache[str] = results;
					displayResults(str);
				}
			);
		}
		
		if (widgetSearch) {
			clearTimeout(widgetSearch);
			widgetSearch = false;
		}
		
		if (widgetCache[str] || str === '') {
			displayResults(str);
		} else {
			widgetSearch = setTimeout(widgetFetchItems, 500);
		}
	});
	
	jQuery(document).ready(function($){
		// detect whether the current theme is not compatible with the new live search embed feature
		// if not, revert to the good ol' drop down live search
		if ($('.' + WPSC_GoldCart.productListClass).length === 0){
			$('.wpsc_live_search_embed').removeClass('.wpsc_live_search_embed').addClass('.wpsc_live_search');
		}		

		if ( WPSC_GoldCart.displayMode == 'grid' ) {
			adjust_item_width();
		}
		
		if (WPSC_GoldCart.thickboxFix) {
			thickboxPreviewFix();
		}
	});
})(jQuery);