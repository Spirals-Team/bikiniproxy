/*!
 * responsiveNavigation.js v1
 * Created by Ben Gillbanks <http://www.binarymoon.co.uk/>
 * Available under GPL2 license
 */
(function ($) {
	$.fn.responsiveNavigation = function (options) {

		var defaults, options, display, resized;

		defaults = {
			min_menu_size: 4,
			prefix: '-',
			ignore_children: false,
			breakpoint: 1080
		};

		options = $.extend(defaults, options);

		display = function() {
			var window_width = $(window).width ();
			if (window_width < options.breakpoint) {
				$('.rn_nav').hide ();
				$('.rn_select').show ();
			}

			if (window_width > options.breakpoint) {
				$('.rn_nav').show ();
				$('.rn_select').hide ();
			}
		};

		$ (window).resize (function () {
			resized = true;
		});

		// super simple debounce
		// fires once every half second to do the work if needed
		setInterval( function() {
			if ( resized ) {
				display ();
			}
			resized = false;
		}, 500 );

		return this.each(function () {
			var $this, select, navDepth;

			$this = $(this);

			if ($this.find ('a').length > options.min_menu_size) {
				$this.addClass ('rn_nav');
				select = $ ('<select class="rn_select"></select>');
				navDepth = $this.parents ().length;
				$this.find ('a').each (function () {
					var depth, i, optionText, navOptions;

					depth = (($ (this).parents ().length - navDepth) / 2) - 1;

					if (depth === 0 || (depth > 0 && options.ignore_children === false)) {

						optionText = $ (this).text ();
						if (depth > 0) {
							optionText = ' ' + optionText;
						}
						for (i = 0; i < depth; i ++) {
							optionText = options.prefix + optionText;
						}
						navOptions = $('<option></option>');
						navOptions.attr ('value', $(this).attr('href'));
						if (document.location === $(this).attr('href')) {
							navOptions.attr ('selected', 'selected');
						}
						navOptions.text (optionText);
						select.append (navOptions);

					}

				});

				select.change (function () {
					document.location = this.value;
				});
			}

			$this.after (select);
			display ();
		});

	};

})(jQuery);