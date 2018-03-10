(function( $ ){

	$.fn.atdSlide = function( options ) {
		if (this.length > 1){
			this.each(function() { $(this).myPlugin(options) });
			return this;
		}

		var slideshow = this;

		var settings = {
			'shown' : 1,
			'autoplay' : 0,
			'loop' : false,
			'speed' : 1000,
			'easing' : 'easeInOutExpo'
		};

		if ( options ) { 
			$.extend( settings, options );
		}

		// Some Error Stuffs
		if (settings['shown'] == 0 || settings['shown'] == null || settings['shown'] == undefined) return;
		if (settings['speed'] <= 0) settings['speed'] = 1;
		if (jQuery.easing[settings['easing']] == null) settings['easing'] = 'easeInOutExpo';

		var slides = settings['slides'];
		var total = Math.ceil(slides.length / settings['shown']) - 1;
		var current;
		var init = true;
		var animating = false;
		var direction;
		var itemWidth;
		var slideWidth;
		var pagination;
		var autoplay;

		slideshow.html('<ul class="slides" />');

		$('*[data-slideto][href="#' + this.attr('id') + '"]').live('click', function() {
			if ($(this).attr('data-slideto') == "next") {
				slideshow.nextSlide();
				clearInterval(autoplay);
				return false;
			} else if ($(this).attr('data-slideto') == "prev") {
				slideshow.prevSlide();
				clearInterval(autoplay);
				return false;
			} else {
				slideshow.jump(parseInt($(this).attr('data-slideto')));
				clearInterval(autoplay);
				return false;
			}
		});

		// Private

		function loadSlide(item, diff) {
			var image = new Image();
			image.src = item['image'];
			if (init == true) {
				var li = $('<li />');
			} else {
				var li = $('<li class="new" />');
			}
			if (diff == 0) {
				li.html('<img src="/wp-content/themes/oaklandcemetery/images/ajax-loader.gif" />').insertBefore(slideshow.find('.slides').children('li').not('.new').first());
			} else {
				li.html('<img src="/wp-content/themes/oaklandcemetery/images/ajax-loader.gif" />').appendTo(slideshow.find('.slides'));
			}
			if (slideshow.find('.slides').children('li').length >= settings['shown']) init = false;
			$(image).load(function() {
				li.html(image);
				if (item['name']) li.attr('data-name', item['name']);
				if (item['link']) li.attr('data-link', item['link']);
				if (item['description']) li.attr('data-desc', item['description']);
				if (settings['onComplete']) {
					if (settings['onComplete'] && typeof settings['onComplete'] == 'function') {
						settings['onComplete'].call(this);
					}
				}
			});

			itemWidth = parseInt(slideshow.find('.slides').children('li').outerWidth(true));
			slideWidth = itemWidth * settings['shown'];
		}

		function slide(direction, diff) {
			animating = true;
			if (diff == 0) slideshow.find('.slides').css('margin-left', '-' + slideWidth + 'px');
			if (diff < 2) {
				slideshow.find('.slides').animate(direction, settings['speed'], settings['easing'], function() {
					$(this).children('li').not('.new').remove();
					$(this).children('li').removeClass('new');
					$(this).css('margin-left', '0px');
					animating = false;
				});
			} else {
				slideshow.find('.slides').animate(direction, 1, function() {
					$(this).children('li').not('.new').remove();
					$(this).children('li').removeClass('new');
					$(this).css('margin-left', '0px');
					animating = false;
				});
			}
		}

		if (settings['autoplay'] > 0) {
			autoplay = setInterval(function() {
				slideshow.nextSlide();
			}, settings['autoplay']);
		}

		// Public

		this.jump = function(page) {
			if (!animating) {
				var sPage = page * settings['shown'];
				var i;
				if (current > page) {
					direction = {'margin-left' : '+=' + slideWidth + 'px'};
					var diff = 0;
				}
				if (current < page) {
					direction = {'margin-left' : '-=' + slideWidth + 'px'};
					var diff = 1;
				}
				if (current == page) {
					direction = {'margin-left' : '0px'};
					var diff = 2;
				}
				current = page;
				for (i = sPage; i < sPage + (settings['shown']); i++) {
					if (i == sPage && !init) slide(direction, diff);
					if (slides[i]) loadSlide(slides[i], diff);
				}
				if (pagination != null) {
					pagination.children('a').removeClass('active');
					pagination.children('a[data-slideto="' + current + '"]').addClass('active');
				}
				if (settings['onUpdate']) {
					if (settings['onUpdate'] && typeof settings['onUpdate'] == 'function') {
						settings['onUpdate'].call(this);
					}
				}
			}
		}

		this.update = function(updated) {
			if (!animating) {
				slides = updated;
				total = Math.ceil(slides.length / settings['shown']) - 1;
				if (current <= total) {
					this.jump(current);
				} else {
					this.jump(0);
				}
			}
		}

		this.current = function() {
			return current + 1;
		}

		this.total = function() {
			return total + 1;
		}

		this.nextSlide = function() {
			if (current < total) {
				this.jump(current + 1);
			} else if (settings['loop']) {
				this.jump(0);
			}
		}

		this.prevSlide = function() {
			if (current > 0) {
				this.jump(current - 1);
			} else if (settings['loop']) {
				this.jump(total);
			}
		}

		this.paginate = function(el, callback) {
			$(el).html('');
			pagination = $(el);
			for (i = 0; i < total + 1; i++) {
				var page = $('<a />');
				page
					.attr('href', '#' + slideshow.attr('id'))
					.attr('data-slideto', i)
					.text('Slide ' + (parseInt(i) + 1));
				page.appendTo(el);
			}
			pagination.children('a[data-slideto="' + current + '"]').addClass('active');
		}

		var urlCheck = window.location.toString();
		var urlSlideshow = urlCheck.split('#');
		if (urlSlideshow[1]) {
			var urlSlide = urlSlideshow[1].split('-');
			urlSlideshow = urlSlide[0];
			urlSlide = parseInt(urlSlide[1]);

			if (urlSlideshow == this.attr('id') && urlSlide != null && urlSlide <= total) {
				this.jump(urlSlide);
			} else {
				this.jump(0);
			}
		} else {
			this.jump(0);
		}

		return this;

	};

})(jQuery);