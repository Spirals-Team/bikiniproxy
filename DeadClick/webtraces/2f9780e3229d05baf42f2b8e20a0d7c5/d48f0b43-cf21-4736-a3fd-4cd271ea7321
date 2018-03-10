$(document).ready(function(){

/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
var $event = $.event,
$special,
resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 0
};

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
	var $this = this,
		deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
		hasNotify = $.isFunction(deferred.notify),
		$images = $this.find('img').add( $this.filter('img') ),
		loaded = [],
		proper = [],
		broken = [];

	// Register deferred callbacks
	if ($.isPlainObject(callback)) {
		$.each(callback, function (key, value) {
			if (key === 'callback') {
				callback = value;
			} else if (deferred) {
				deferred[key](value);
			}
		});
	}

	function doneLoading() {
		var $proper = $(proper),
			$broken = $(broken);

		if ( deferred ) {
			if ( broken.length ) {
				deferred.reject( $images, $proper, $broken );
			} else {
				deferred.resolve( $images );
			}
		}

		if ( $.isFunction( callback ) ) {
			callback.call( $this, $images, $proper, $broken );
		}
	}

	function imgLoaded( img, isBroken ) {
		// don't proceed if BLANK image, or image is already loaded
		if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
			return;
		}

		// store element in loaded images array
		loaded.push( img );

		// keep track of broken and properly loaded images
		if ( isBroken ) {
			broken.push( img );
		} else {
			proper.push( img );
		}

		// cache image and its state for future calls
		$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

		// trigger deferred progress method if present
		if ( hasNotify ) {
			deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
		}

		// call doneLoading and clean listeners if all images are loaded
		if ( $images.length === loaded.length ){
			setTimeout( doneLoading );
			$images.unbind( '.imagesLoaded' );
		}
	}

	// if no images, trigger immediately
	if ( !$images.length ) {
		doneLoading();
	} else {
		$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
			// trigger imgLoaded
			imgLoaded( event.target, event.type === 'error' );
		}).each( function( i, el ) {
			var src = el.src;

			// find out if this image has been already checked for status
			// if it was, and src has not changed, call imgLoaded on it
			var cached = $.data( el, 'imagesLoaded' );
			if ( cached && cached.src === src ) {
				imgLoaded( el, cached.isBroken );
				return;
			}

			// if complete is true and browser supports natural sizes, try
			// to check for image status manually
			if ( el.complete && el.naturalWidth !== undefined ) {
				imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
				return;
			}

			// cached images don't fire load sometimes, so we reset src, but only when
			// dealing with IE, or image is complete (loaded) and failed manual check
			// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
			if ( el.readyState || el.complete ) {
				el.src = BLANK;
				setTimeout(function() { el.src = src; }, 1);
			}
		});
	}

	return deferred ? deferred.promise( $this ) : $this;
};

var Grid = (function() {

		// list of items
	var $grid = $( '.content-grid' ),
		// the items
		$items = $grid.children( 'li:not(.clickthrough)' ),
		// current expanded item's index
		current = -1,
		// position (top) of the expanded item
		// used to know if the preview will expand in a different row
		previewPos = -1,
		// extra amount of pixels to scroll the window
		scrollExtra = 0,
		// extra margin when expanded (between preview overlay and the next items)
		marginExpanded = 3,
		$window = $( window ), winsize,
		$body = $( 'html, body' ),
		// transitionend events
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support for csstransitions
		support = Modernizr.csstransitions,
		// default settings
		settings = {
			minHeight : 0,
			speed : 350,
			easing : 'ease'
		},
		animating = false,
		hasAlreadyOpened = false;
	
	function init( config ) {
		
		// the settings..
		settings = $.extend( true, {}, settings, config );

		// preload all images
		$grid.imagesLoaded( function() {
			// save item´s size and offset
			saveItemInfo( true );
			// get window´s size
			getWinSize();
			// initialize some events
			initEvents();
		} );
	}

	// add more items to the grid.
	// the new items need to appended to the grid.
	// after that call Grid.addItems(theItems);
	function addItems( $newitems ) {

		$items = $items.add( $newitems );

		$newitems.each( function() {
			var $item = $( this );
			$item.data( {
				offsetTop : $item.offset().top,
				height : $item.height()
			} );
		} );
		
		initItemsEvents( $newitems );

	}

	// saves the item´s offset top and height (if saveheight is true)
	function saveItemInfo( saveheight ) {
		$items.each( function() {
			var $item = $( this );
			$item.data( 'offsetTop', $item.offset().top );
			if( saveheight ) {
				$item.data( 'height', $item.height() );
			}
		} );
	}

	function initEvents() {
		
		// when clicking an item, show the preview with the item´s info and large image.
		// close the item if already expanded.
		// also close if clicking on the item´s cross
		initItemsEvents( $items );
		
		// on window resize get the window´s size again
		// reset some values..
		$window.on( 'debouncedresize', function() {
			scrollExtra = 0;
			previewPos = -1;
			// save item´s offset
			saveItemInfo();
			getWinSize();
			var preview = $.data( this, 'preview' );
			if( typeof preview != 'undefined' ) {
				hidePreview();
			}

		} );

	}

	function initItemsEvents( $items ) {
		// Events
		$items.on( 'click', 'span.close', function() {
			hidePreview();
			return false;
		} ).children( 'div.item' ).on( 'click', function(e) {
			var $item = $( this ).parent();
			// check if item already opened
			current === $item.index() ? hidePreview() : showPreview( $item );
			return false;
		} );
		
		
		$items.eq(0).find(".item").eq(0).trigger("click");
	}

	function getWinSize() {
		winsize = { width : $window.width(), height : $window.height() };
	}

	function showPreview( $item ) {
		if (!animating) {
			animating = true;
			
			var preview = $.data( this, 'preview' ),
				// item´s offset top
				position = $item.data( 'offsetTop' );
	
			scrollExtra = 0;
	
			// if a preview exists and previewPos is different (different row) from item´s top then close it
			if( typeof preview != 'undefined' ) {
	
				// not in the same row
				if( previewPos !== position ) {
					// if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
					if( position > previewPos ) {
						scrollExtra = preview.height;
					}
					animating = false;
					hidePreview();
				}
				// same row
				else {
					animating = false;
					preview.update( $item );
					return false;
				}
			}
			
			
			$item.css( { height: $item.find(".item").eq(0).height() } );
			
			setTimeout(function() {
				// update previewPos
				previewPos = position;
				// initialize new preview for the clicked item
				preview = $.data( this, 'preview', new Preview( $item ) );
				// expand preview overlay
				preview.open();
			}, 1);
		}
	}

	function hidePreview() {
		if (!animating) {
			animating = true;
			
			current = -1;
			var preview = $.data( this, 'preview' );
			preview.close();
			$.removeData( this, 'preview' );
		}
	}

	// the preview obj / overlay
	function Preview( $item ) {
		this.$item = $item;
		this.expandedIdx = this.$item.index();
		this.create();
		this.update();
	}
	
	// Converst an integer to a separator (default, ",") seperated string
	function convertIntToString(integer, separator) {
		if (!separator) separator = ",";
		
		var str = String(parseInt(integer)),
			newStr = "",
			count = 0;
		
		while(str.length) {
			newStr = str.charAt(str.length - 1) + newStr;
			count++;
			
			str = str.substring(0, str.length - 1);
			
			if ( ((count)%3 == 0) && str.length )
				newStr = String(separator) + String(newStr);
		}
		
		return newStr;
	}

	Preview.prototype = {
		create : function() {
			// create Preview structure:
			this.$closePreview = $( '<span class="close"></span>' );
			
			this.$nav = $( '<div class="nav"></div>' )
			this.$previous = $( '<span class="button previous"></span>' );
			this.$next = $( '<span class="button next"></span>' );
			this.$nav.append(this.$previous, this.$next);
			
			// Adds social media links
			this.$social = $('<div class="social"></div>');
			this.$facebookLink = $('<a class="facebook" target="_blank" onclick="return !window.open(this.href, \'Facebook\', \'width=640,height=300\')" data-base-uri="http://www.facebook.com/sharer/sharer.php?u={URL}" href="javascript:void(0);"><span class="count"></span>' + ($grid.data("facebook-share-label") ? $grid.data("facebook-share-label") : "Share") + '</a>');
			//this.$social.append( this.$facebookLink );
			
			this.$contentWrapper = $( '<div class="content-wrapper"></div>' );
			
			this.$previewInner = $( '<div class="expander-inner"></div>' ).append( this.$contentWrapper );
			this.$previewEl = $( '<div class="expander"></div>' ).append( this.$closePreview, this.$nav, this.$social, this.$previewInner );
			
			// append preview element to the item
			this.$item.append( this.getEl() );
			
			// Next and previous buttons
			this.$previous.bind("click", function() {
					if ($(this).data("previousItem"))
						$(this).data("previousItem").find("a").eq(0).trigger("click");
				});
			this.$next.bind("click", function() {
					if ($(this).data("nextItem"))
						$(this).data("nextItem").find("a").eq(0).trigger("click");
				});
			
			// set the transitions for the preview and the item
			if( support ) {
				this.setTransition();
			}
		},
		update : function( $item ) {
			if( $item ) {
				this.$item = $item;
			}
			
			var previousItem = this.$item.prev().not(".clickthrough");
			this.$previous.data("previousItem", previousItem);
			this.$previous.css({display: (previousItem.length ? "block" : "none")});
			
			var nextItem = this.$item.next().not(".clickthrough");
			this.$next.data("nextItem", nextItem);
			this.$next.css({display: (nextItem.length ? "block" : "none")});
			
			
			// Social media links
			var item = this.$item,
				fbButtonCount = this.$facebookLink.find(".count").eq(0);
			
			this.$facebookLink[0].href = this.$facebookLink.data("base-uri").replace(/\{URL\}/gi, encodeURIComponent(this.$item.find("a.cta-button").eq(0)[0].href));
			
			if (this.$item.data("shares-facebook") != null) {
				if (this.$item.data("shares-facebook") > 0)
					fbButtonCount.text(convertIntToString(this.$item.data("shares-facebook")) + " ");
			} else {
				var linkURL = this.$item.find("a.cta-button").eq(0)[0].href;
				
				$.ajax({
					url:"http://api.facebook.com/restserver.php?method=links.getStats&urls=" + linkURL
				}).done(function(response) {
					var count = 0;
					
					if ( $(response).find("share_count").length )
						count = parseInt($(response).find("share_count").eq(0).text());
					
					item.data("shares-facebook", count);
					
					if (count > 0)
						fbButtonCount.text(convertIntToString(count) + " ");
				});
			}
			
			
			// if already expanded remove class "expanded" from current item and add it to new item
			if( current !== -1 ) {
				var $currentItem = $items.eq( current );
				$currentItem.removeClass( 'expanded' );
				this.$item.addClass( 'expanded' );
				// position the preview correctly
				this.positionPreview();
			}

			// update current value
			current = this.$item.index();

			// update preview´s content
			var $itemEl = this.$item.children( 'a' ),
				eldata = {
					href : $itemEl.attr( 'href' ),
					largesrc : $itemEl.data( 'largesrc' ),
					title : $itemEl.data( 'title' ),
					description : $itemEl.data( 'description' )
				};
			
			this.$previewEl.css( { "background-image": "url(" + this.$item.find("img").eq(0).data("background") + ")" } );
			this.$contentWrapper.empty();
			this.$contentWrapper.html( this.$item.find(".item-content").clone() );
		},
		open : function() {
			setTimeout( $.proxy( function() {	
				// set the height for the preview and the item
				this.setHeights();
				// scroll to position the preview in the right place
				this.positionPreview();
			}, this ), 25 );
		},
		close : function() {
			var self = this,
				onEndFn = function() {
					if( support ) {
						$( this ).off( transEndEventName );
						self.unsetTransition();
					}
					self.$previewEl.remove();
					
					self.$item.css({height: "auto"});
					animating = false;
				};

			setTimeout( $.proxy( function() {
				if( typeof this.$largeImg !== 'undefined' ) {
					this.$largeImg.fadeOut( 'fast' );
				}
				this.$previewEl.css( 'height', 0 );
				// the current expanded item (might be different from this.$item)
				var $expandedItem = $items.eq( this.expandedIdx );
				$expandedItem.css( 'height', $expandedItem.find(".item").eq(0).height() ).on( transEndEventName, onEndFn );
				self.$item.removeClass( 'expanded' );
				if( !support ) {
					onEndFn.call();
				}

			}, this ), 25 );
			
			return false;

		},
		calcHeight : function() {
			var heightPreview = this.$item.find(".expander-inner").eq(0).height() - marginExpanded /* winsize.height - this.$item.data( 'height' ) - marginExpanded */,
				itemHeight = this.$item.find(".item").eq(0).height() + this.$item.find(".expander-inner").eq(0).height()/* winsize.height */;
			
			if( heightPreview < settings.minHeight ) {
				heightPreview = settings.minHeight;
				itemHeight = settings.minHeight + this.$item.data( 'height' ) + marginExpanded;
			}
			
			this.height = heightPreview;
			this.itemHeight = itemHeight;

		},
		setHeights : function() {
			var self = this,
				onEndFn = function() {
					if( support ) {
						self.$item.off( transEndEventName );
					}
					self.$item.addClass( 'expanded' );
					animating = false;
				};
			
			this.calcHeight();
			
			this.$previewEl.css( 'height', this.height );
			this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );

			if( !support ) {
				onEndFn.call();
			}
		},
		positionPreview : function() {
			// scroll page
			// case 1 : preview height + item height fits in window´s height
			// case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
			// case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
			var position = this.$item.data( 'offsetTop' ),
				previewOffsetT = this.$previewEl.offset().top - scrollExtra,
				scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;
			
			if (hasAlreadyOpened)
				$body.animate( { scrollTop : scrollVal }, settings.speed );
			else
				hasAlreadyOpened = true;

		},
		setTransition : function() {
			this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
			this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
		},
		unsetTransition : function() {
			this.$previewEl.css( 'transition', '');
			this.$item.css( 'transition', '');
			animating = false;
		},
		getEl : function() {
			return this.$previewEl;
		}
	}

	return { 
		init : init,
		addItems : addItems
	};

})();



Grid.init();
});