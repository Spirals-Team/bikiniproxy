(function($) {

/* jQuery Peek
Like each, except you're guaranteed that the target element is js-visible.

If you want to do a bunch of changes and continue chaining, you want the 
following syntax:
$(".targets").peek(function() {
    var $e = $(this);
    $e.children().height($e.height() - 10);
}).continueChaining();

If a value is returned in the callback function, then peek returns that 
value instead of chaining. It uses the first return value it encounters.
If you wanted to get the largest height of a hidden element's children, you
could use:
$("#target").peek(function() { return $(this).children().maxHeight(); });

For simpler one liners, peek also supports jquery functions in string format, 
with the arguments following normally:

    $("#target").peek("height");
    $("#target").peek("outerHeight", true);
    $("#target").peek("offset").left;
*/  
$.fn.peek = function(callback) {
    var r,
        ret,
        args = arguments,
        aps = Array.prototype.slice,
        me = "peek" + Math.floor(Math.random()*999999);
    
    // saving must be done before peek so that an element's visibility doesn't affect its descendants
    function save() {
        var $e = $(this);
        $e.data(me + "-visibility", $e.css("visibility"));
        $e.data(me + "-display", $e.css("display"));
    }
    
    // show the element, but make it so it isn't visible
    function peek() {
        $(this).css({ visibility: "hidden" }).show();
    }
    
    // restore the element to its previous state
    function aboo() {
        var $e = $(this);
        $e.css({
          display: $e.data(me + "-display"),
          visibility: $e.data(me + "-visibility")
        });
        $e.removeData(me + "-display");
        $e.removeData(me + "-visibility");
    }
    
    // peek this element and any hidden ancestors--they need to be visible too
    // execute the callback on the target elements
    if(!$.isFunction(callback) && $.isFunction($.fn[callback])) { 
        callback = $.fn[callback];
    }
    $(this).each(function() {
        var $e = $(this),
            $all = $e.parents(":hidden").andSelf();
        $all.each(save).each(peek);
        if(callback) {
            r = callback.apply($e, aps.call(args, 1));
            if(ret === undefined && r !== undefined) { 
              ret = r;
            }
        }
        $all.each(aboo);
    });
    
    // if a return value is specified for the callback, return that
    if(ret !== undefined) {
        return ret;
    }
    
    // otherwise chain
    return $(this);
};

}(jQuery));

/*!
 * jQuery imagesLoaded plugin v2.0.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */

/*jshint curly: true, eqeqeq: true, noempty: true, strict: true, undef: true, browser: true */
/*global jQuery: false */

;(function($, undefined) {
'use strict';

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
				el.src = src;
			}
		});
	}

	return deferred ? deferred.promise( $this ) : $this;
};

})(jQuery);

/*!
 * touchSwipe - jQuery Plugin
 * http://plugins.jquery.com/project/touchSwipe
 * http://labs.skinkers.com/touchSwipe/
 *
 * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * $version: 1.2.3
 */
 /* 
 */

(function($) 
{
	
	$.fn.swipe = function(options) 
	{
		if (!this) return false;
		
		// Default thresholds & swipe functions
		var defaults = {
					
			fingers 		: 1,								// int - The number of fingers to trigger the swipe, 1 or 2. Default is 1.
			threshold 		: 75,								// int - The number of pixels that the user must move their finger by before it is considered a swipe. Default is 75.
			
			swipe 			: null,		// Function - A catch all handler that is triggered for all swipe directions. Accepts 2 arguments, the original event object and the direction of the swipe : "left", "right", "up", "down".
			swipeLeft		: null,		// Function - A handler that is triggered for "left" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeRight		: null,		// Function - A handler that is triggered for "right" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeUp			: null,		// Function - A handler that is triggered for "up" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeDown		: null,		// Function - A handler that is triggered for "down" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeStatus		: null,		// Function - A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start�, "move�, "end� or "cancel�. direction : The swipe direction, either "up�, "down�, "left " or "right�.distance : The distance of the swipe.
			click			: null,		// Function	- A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.
			
			triggerOnTouchEnd : true,	// Boolean, if true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
			allowPageScroll : "auto" 	/* How the browser handles page scrolls when the user is swiping on a touchSwipe object. 
											"auto" : all undefined swipes will cause the page to scroll in that direction.
 											"none" : the page will not scroll when user swipes.
 											"horizontal" : will force page to scroll on horizontal swipes.
 											"vertical" : will force page to scroll on vertical swipes.
										*/
		};
		
		
		//Constants
		var LEFT = "left";
		var RIGHT = "right";
		var UP = "up";
		var DOWN = "down";
		var NONE = "none";
		var HORIZONTAL = "horizontal";
		var VERTICAL = "vertical";
		var AUTO = "auto";
		
		var PHASE_START="start";
		var PHASE_MOVE="move";
		var PHASE_END="end";
		var PHASE_CANCEL="cancel";
				
		var phase="start";
		
		if (options.allowPageScroll==undefined && (options.swipe!=undefined || options.swipeStatus!=undefined))
			options.allowPageScroll=NONE;
		
		if (options)
			$.extend(defaults, options);
		
		
		/**
		 * Setup each object to detect swipe gestures
		 */
		return this.each(function() 
		{
			var $this = $(this);
			
			var triggerElementID = null; 	// this variable is used to identity the triggering element
			var fingerCount = 0;			// the current number of fingers being used.	
			
			//track mouse points / delta
			var start={x:0, y:0};
			var end={x:0, y:0};
			var delta={x:0, y:0};
			
			
			/**
			* Event handler for a touch start event. 
			* Stops the default click event from triggering and stores where we touched
			*/
			function touchStart(event) 
			{
				phase = PHASE_START;
		
				// get the total number of fingers touching the screen
				fingerCount = event.touches.length;
				
				//clear vars..
				distance=0;
				direction=null;
				
				// check the number of fingers is what we are looking for
				if ( fingerCount == defaults.fingers ) 
				{
					// get the coordinates of the touch
					start.x = end.x = event.touches[0].pageX;
					start.y = end.y = event.touches[0].pageY;
					
					if (defaults.swipeStatus)
						triggerHandler(event, phase);
				} 
				else 
				{
					//touch with more/less than the fingers we are looking for
					touchCancel(event);
				}
			}

			/**
			* Event handler for a touch move event. 
			* If we change fingers during move, then cancel the event
			*/
			function touchMove(event) 
			{
				if (phase == PHASE_END || phase == PHASE_CANCEL)
					return;
				
				end.x = event.touches[0].pageX;
				end.y = event.touches[0].pageY;
					
				direction = caluculateDirection();
				fingerCount = event.touches.length;
				
				phase = PHASE_MOVE
				
				//Check if we need to prevent default evnet (page scroll) or not
				validateDefaultEvent(event, direction);
		
				if ( fingerCount == defaults.fingers ) 
				{
					distance = caluculateDistance();
					
					if (defaults.swipeStatus)
						triggerHandler(event, phase, direction, distance);
					
					//If we trigger whilst dragging, not on touch end, then calculate now...
					if (!defaults.triggerOnTouchEnd)
					{
						// if the user swiped more than the minimum length, perform the appropriate action
						if ( distance >= defaults.threshold ) 
						{
							phase = PHASE_END;
							triggerHandler(event, phase);
							touchCancel(event); // reset the variables
						}
					}
				} 
				else 
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase); 
					touchCancel(event);
				}
			}
			
			/**
			* Event handler for a touch end event. 
			* Calculate the direction and trigger events
			*/
			function touchEnd(event) 
			{
				event.preventDefault();
				
				distance = caluculateDistance();
				direction = caluculateDirection();
						
				if (defaults.triggerOnTouchEnd)
				{
					phase = PHASE_END;
					// check to see if more than one finger was used and that there is an ending coordinate
					if ( fingerCount == defaults.fingers && end.x != 0 ) 
					{
						// if the user swiped more than the minimum length, perform the appropriate action
						if ( distance >= defaults.threshold ) 
						{
							triggerHandler(event, phase);
							touchCancel(event); // reset the variables
						} 
						else 
						{
							phase = PHASE_CANCEL;
							triggerHandler(event, phase); 
							touchCancel(event);
						}	
					} 
					else 
					{
						phase = PHASE_CANCEL;
						triggerHandler(event, phase); 
						touchCancel(event);
					}
				}
				else if (phase == PHASE_MOVE)
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase); 
					touchCancel(event);
				}
			}
			
			/**
			* Event handler for a touch cancel event. 
			* Clears current vars
			*/
			function touchCancel(event) 
			{
				// reset the variables back to default values
				fingerCount = 0;
				
				start.x = 0;
				start.y = 0;
				end.x = 0;
				end.y = 0;
				delta.x = 0;
				delta.y = 0;
			}
						
			/**
			* Trigger the relevant event handler
			* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
			*/
			function triggerHandler(event, phase) 
			{
				//update status
				if (defaults.swipeStatus)
					defaults.swipeStatus.call($this,event, phase, direction || null, distance || 0);
				
				
				if (phase == PHASE_CANCEL)
				{
					if (defaults.click && fingerCount==1 && (isNaN(distance) || distance==0))
						defaults.click.call($this,event, event.target);
				}
				
				if (phase == PHASE_END)
				{
					//trigger catch all event handler
					if (defaults.swipe)
				{
						
						defaults.swipe.call($this,event, direction, distance);
						
				}
					//trigger direction specific event handlers	
					switch(direction)
					{
						case LEFT :
							if (defaults.swipeLeft)
								defaults.swipeLeft.call($this,event, direction, distance);
							break;
						
						case RIGHT :
							if (defaults.swipeRight)
								defaults.swipeRight.call($this,event, direction, distance);
							break;

						case UP :
							if (defaults.swipeUp)
								defaults.swipeUp.call($this,event, direction, distance);
							break;
						
						case DOWN :	
							if (defaults.swipeDown)
								defaults.swipeDown.call($this,event, direction, distance);
							break;
					}
				}
			}
						
			/**
			 * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
			 * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
			 */
			function validateDefaultEvent(event, direction)
			{
				if( defaults.allowPageScroll==NONE )
				{
					event.preventDefault();
				}
				else 
				{
					var auto=defaults.allowPageScroll==AUTO;
					
					switch(direction)
					{
						case LEFT :
							if ( (defaults.swipeLeft && auto) || (!auto && defaults.allowPageScroll!=HORIZONTAL))
								event.preventDefault();
							break;
						
						case RIGHT :
							if ( (defaults.swipeRight && auto) || (!auto && defaults.allowPageScroll!=HORIZONTAL))
								event.preventDefault();
							break;

						case UP :
							if ( (defaults.swipeUp && auto) || (!auto && defaults.allowPageScroll!=VERTICAL))
								event.preventDefault();
							break;
						
						case DOWN :	
							if ( (defaults.swipeDown && auto) || (!auto && defaults.allowPageScroll!=VERTICAL))
								event.preventDefault();
							break;
					}
				}
				
			}
			
			
			
			/**
			* Calcualte the length / distance of the swipe
			*/
			function caluculateDistance()
			{
				return Math.round(Math.sqrt(Math.pow(end.x - start.x,2) + Math.pow(end.y - start.y,2)));
			}
			
			/**
			* Calcualte the angle of the swipe
			*/
			function caluculateAngle() 
			{
				var X = start.x-end.x;
				var Y = end.y-start.y;
				var r = Math.atan2(Y,X); //radians
				var angle = Math.round(r*180/Math.PI); //degrees
				
				//ensure value is positive
				if (angle < 0) 
					angle = 360 - Math.abs(angle);
					
				return angle;
			}
			
			/**
			* Calcualte the direction of the swipe
			* This will also call caluculateAngle to get the latest angle of swipe
			*/
			function caluculateDirection() 
			{
				var angle = caluculateAngle();
				
				if ( (angle <= 45) && (angle >= 0) ) 
					return LEFT;
				
				else if ( (angle <= 360) && (angle >= 315) )
					return LEFT;
				
				else if ( (angle >= 135) && (angle <= 225) )
					return RIGHT;
				
				else if ( (angle > 45) && (angle < 135) )
					return DOWN;
				
				else
					return UP;
			}
			
			// Add gestures to all swipable areas if supported
			try
			{
				this.addEventListener("touchstart", touchStart, false);
				this.addEventListener("touchmove", touchMove, false);
				this.addEventListener("touchend", touchEnd, false);
				this.addEventListener("touchcancel", touchCancel, false);
			}
			catch(e)
			{
				//touch not supported
			}
				
		});
	};
	
})(jQuery);

/*!
 * Spin.js
 * http://fgnass.github.com/spin.js#v1.2.5
 *
 * $version: 1.2.5
 */

(function(window, document, undefined) {

/**
 * Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
 * Licensed under the MIT license
 */

  var prefixes = ['webkit', 'Moz', 'ms', 'O']; /* Vendor prefixes */
  var animations = {}; /* Animation rules keyed by their name */
  var useCssAnimations;

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div');
    var n;

    for(n in prop) {
      el[n] = prop[n];
    }
    return el;
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++) {
      parent.appendChild(arguments[i]);
    }
    return parent;
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = function() {
    var el = createEl('style');
    ins(document.getElementsByTagName('head')[0], el);
    return el.sheet || el.styleSheet;
  }();

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-');
    var start = 0.01 + i/lines*100;
    var z = Math.max(1-(1-alpha)/trail*(100-start) , alpha);
    var prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase();
    var pre = prefix && '-'+prefix+'-' || '';

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:'+z+'}' +
        start + '%{opacity:'+ alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail)%100 + '%{opacity:'+ alpha + '}' +
        '100%{opacity:'+ z + '}' +
        '}', 0);
      animations[name] = 1;
    }
    return name;
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   **/
  function vendor(el, prop) {
    var s = el.style;
    var pp;
    var i;

    if(s[prop] !== undefined) return prop;
    prop = prop.charAt(0).toUpperCase() + prop.slice(1);
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop;
      if(s[pp] !== undefined) return pp;
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n)||n] = prop[n];
    }
    return el;
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i];
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n];
      }
    }
    return obj;
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = {x:el.offsetLeft, y:el.offsetTop};
    while((el = el.offsetParent)) {
      o.x+=el.offsetLeft;
      o.y+=el.offsetTop;
    }
    return o;
  }

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // rotation offset
    color: '#000',        // #rgb or #rrggbb
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto'          // center horizontally
  };

  /** The constructor */
  var Spinner = function Spinner(o) {
    if (!this.spin) return new Spinner(o);
    this.opts = merge(o || {}, Spinner.defaults, defaults);
  };

  Spinner.defaults = {};
  merge(Spinner.prototype, {
    spin: function(target) {
      this.stop();
      var self = this;
      var o = self.opts;
      var el = self.el = css(createEl(0, {className: o.className}), {position: 'relative', zIndex: o.zIndex});
      var mid = o.radius+o.length+o.width;
      var ep; // element position
      var tp; // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null);
        tp = pos(target);
        ep = pos(el);
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : o.left+mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : o.top+mid)  + 'px'
        });
      }

      el.setAttribute('aria-role', 'progressbar');
      self.lines(el, self.opts);

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0;
        var fps = o.fps;
        var f = fps/o.speed;
        var ostep = (1-o.opacity)/(f*o.trail / 100);
        var astep = f/o.lines;

        !function anim() {
          i++;
          for (var s=o.lines; s; s--) {
            var alpha = Math.max(1-(i+s*astep)%f * ostep, o.opacity);
            self.opacity(el, o.lines-s, alpha, o);
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps));
        }();
      }
      return self;
    },
    stop: function() {
      var el = this.el;
      if (el) {
        clearTimeout(this.timeout);
        if (el.parentNode) el.parentNode.removeChild(el);
        this.el = undefined;
      }
      return this;
    },
    lines: function(el, o) {
      var i = 0;
      var seg;

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.width>>1) + 'px'
        });
      }
      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, i, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        });
        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}));
        ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')));
      }
      return el;
    },
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val;
    }
  });

  /////////////////////////////////////////////////////////////////////////
  // VML rendering for IE
  /////////////////////////////////////////////////////////////////////////

  /**
   * Check and init VML support
   */
  !function() {

    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr);
    }

    var s = css(createEl('group'), {behavior: 'url(#default#VML)'});

    if (!vendor(s, 'transform') && s.adj) {

      // VML support detected. Insert CSS rule ...
      sheet.addRule('.spin-vml', 'behavior:url(#default#VML)');

      Spinner.prototype.lines = function(el, o) {
        var r = o.length+o.width;
        var s = 2*r;

        function grp() {
          return css(vml('group', {coordsize: s +' '+s, coordorigin: -r +' '+-r}), {width: s, height: s});
        }

        var margin = -(o.width+o.length)*2+'px';
        var g = css(grp(), {position: 'absolute', top: margin, left: margin});

        var i;

        function seg(i, dx, filter) {
          ins(g,
            ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
              ins(css(vml('roundrect', {arcsize: 1}), {
                  width: r,
                  height: o.width,
                  left: o.radius,
                  top: -o.width>>1,
                  filter: filter
                }),
                vml('fill', {color: o.color, opacity: o.opacity}),
                vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
              )
            )
          );
        }

        if (o.shadow) {
          for (i = 1; i <= o.lines; i++) {
            seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)');
          }
        }
        for (i = 1; i <= o.lines; i++) seg(i);
        return ins(el, g);
      };
      Spinner.prototype.opacity = function(el, i, val, o) {
        var c = el.firstChild;
        o = o.shadow && o.lines || 0;
        if (c && i+o < c.childNodes.length) {
          c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild;
          if (c) c.opacity = val;
        }
      };
    }
    else {
      useCssAnimations = vendor(s, 'animation');
    }
  }();

  window.Spinner = Spinner;

})(window, document);

/*

You can now create a spinner using any of the variants below:

$("#el").spin(); // Produces default Spinner using the text color of #el.
$("#el").spin("small"); // Produces a 'small' Spinner using the text color of #el.
$("#el").spin("large", "white"); // Produces a 'large' Spinner in white (or any valid CSS color).
$("#el").spin({ ... }); // Produces a Spinner using your custom settings.

$("#el").spin(false); // Kills the spinner.

*/
(function($) {
	$.fn.spin = function(opts, color) {
		var presets = {
			"psp": {  
				lines: 11, // The number of lines to draw
				length: 7, // The length of each line
				width: 3, // The line thickness
				radius: 5, // The radius of the inner circle
				rotate: 51, // The rotation offset
				speed: 1.2, // Rounds per second
				trail: 68, // Afterglow percentage
				hwaccel: true, // Whether to use hardware acceleration
				className: 'spinner', // The CSS class to assign to the spinner
				zIndex: 2e9, // The z-index (defaults to 2000000000)
				top: 'auto', // Top position relative to parent in px
				left: 'auto' // Left position relative to parent in px
			 }
		};
		if (Spinner) {
			return this.each(function() {
				var $this = $(this),
					data = $this.data();
				
				if (data.spinner) {
					data.spinner.stop();
					delete data.spinner;
				}
				if (opts !== false) {
					if (typeof opts === "string") {
						if (opts in presets) {
							opts = presets[opts];
						} else {
							opts = {};
						}
						if (color) {
							opts.color = color;
						}
					}
					data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
				}
			});
		} else {
			throw "Spinner class not available.";
		}
	};
})(jQuery);

/*!
 * Portfolio Slideshow Pro
 */
 
(function ($) {
	$(window).load(function() {
	
		var psHash, psFancyBox, psInfoTxt, psFluid, psTouchSwipe, psKeyboarNav, disableAutoScroll, psBackgroundImages;
		var psNoWrap = new Array();
		currSlide = new Array(); tabSlide = new Array();
		psFluid = portfolioSlideshowOptions.psFluid;
		psHash = portfolioSlideshowOptions.psHash;
		psFancyBox = portfolioSlideshowOptions.psFancyBox;
		psTouchSwipe = portfolioSlideshowOptions.psTouchSwipe;
		psKeyboardNav = portfolioSlideshowOptions.psKeyboardNav;
		psBackgroundImages = portfolioSlideshowOptions.psBackgroundImages;
		psInfoTxt = portfolioSlideshowOptions.psInfoTxt;
		disableAutoScroll = false;
	
		if ( navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/8/) ) { //sets ie var to true if IE is 8 or below. Necessary for some style & functionality issues.
			$('.slideshow-wrapper').addClass('psp-ie'); 
		}
			
		//load our Fancybox scripts
		if (psFancyBox === true) {
			function formatTitle (title, currentArray, currentIndex, currentOpts) {
				if ( currentArray.length > 1 ) { 
					return '<div id="image-caption">' + (title && title.length ? '<b>' + title + '</b>' : '' ) + '<span class="fb-info"> Image ' + (currentIndex + 1) + ' of ' + currentArray.length + '</span></div>'; 
				} else {
					return '<div id="image-caption">' + (title && title.length ? '<b>' + title + '</b>' : '' ) + '</div>';
				}
			}
			
			$("a.fancybox").fancybox({
				'titlePosition' : 'inside',
				'titleFormat' : formatTitle
			});

		}
		
		if ( $('.showloader').length ) { //if we're supposed to show a loader
			$('.showloader').spin("psp");
			$('.slideshow-wrapper').delay(1000).queue(function() {
				$('.slideshow-content, .slideshow-nav, .pager').css('visibility', 'visible');
				$('.showloader').spin(false).removeClass("showloader");
			});	
		} else {
			$('.slideshow-content, .slideshow-nav, .pager').css('visibility', 'visible');
		}
										
		$("div[id^=portfolio-slideshow]").each(function () {
				
			var num = this.id.match(/portfolio-slideshow(\d+)/)[1];
			if ( psLoop[num] == true ) { psNoWrap[num] = 0 } else { psNoWrap[num] = true };
					
			/* Cache our jQuery objects*/
			
			/* Main slideshow elements */
			var slideshowwrapper = $('#slideshow-wrapper' + num);
			var slideshownav = $('#slideshow-nav' + num);
			var slideshow = $('#portfolio-slideshow' + num);
			var slideshowmeta = $('#slideshow-meta' + num);
			var slideimage = $('.psp-active');
			var fancygrid = $('#slideshow-wrapper'+num+'.fancygrid');
			var fancygridOpen = $('#slideshow-wrapper'+num+'.fancygrid.toggle-open');
			var fancygridClosed = $('#slideshow-wrapper'+num+'.fancygrid.toggle-closed');
			
			/*Toggles*/
			var toggleshow = slideshowwrapper.find('.show');
			var togglehide = slideshowwrapper.find('.hide');
			var carousel = slideshowwrapper.find('.pscarousel');
			var thumbs = slideshowwrapper.find('.psthumbs'); 
			
			/*Nav elements*/
			var playbutton = slideshownav.find('.play');
			var pausebutton = slideshownav.find('.pause');
			var restartbutton = slideshownav.find('.restart');
			
			//load our scrollable carousel
			if ( $('.scrollable').length ) {
				$('#scrollable' + num).scrollable({keyboard:false,next:".ps-next",prev:".ps-prev"}).navigator({navi: "#carouselnav" + num, naviItem: 'a'});
				$('.ps-prev.browse').removeClass('hidden');
			}
			
			/* Pause the carousel autoscroll function for 15 seconds if the carousel nav is clicked */
			
			slideshowwrapper.find('.browse').click(function() {
				if ( disableAutoScroll != true ) {
					disableAutoScroll = true;
					setTimeout( function() { disableAutoScroll=false;
					} , 15000 );	
				}		
			});
									
			/* Toggle actions */
			
			$('.toggle-open').find(togglehide).addClass('active');
			$('.toggle-closed').find(toggleshow).addClass('active');

			toggleshow.click(function() {
				$(this).removeClass('active');
				togglehide.addClass('active');
				thumbs.fadeIn('fast');
				carousel.fadeIn('fast');
			});		
			
			togglehide.click(function() {
				$(this).removeClass('active');
				toggleshow.addClass('active');
				thumbs.fadeOut('fast');
				carousel.fadeOut('fast');
			});		
			
			/* End toggles */
			
			/* Fancygrid */

			fancygridOpen.find('.portfolio-slideshow').hide();
			fancygridOpen.find(slideshowmeta).hide();
			fancygridOpen.find('.psthumbs').show();
		
			fancygrid.find('.pager img').click(function() {
				
				slideshow.fadeIn('fast', function() {
					slideshow.css('width','').css('height','');	
					slideshowmeta.css('width','').css('height','');	
					var $h, $w, $mch;
					$h = slideshow.find('.slideshow-content').eq(currSlide[num]).outerHeight();
					$w = slideshow.find('.slideshow-content').eq(currSlide[num]).width();
					slideshow.css("height", $h).css("width", $w);
					slideshowmeta.show().css("width", $w).find('.meta-content').eq(currSlide[num]).css("width", $w);
					$mch = slideshowmeta.find('.meta-content').eq(currSlide[num]).peek("outerHeight");
					slideshowmeta.show().css("height", $mch).find('.meta-content').eq(currSlide[num]).css("height", $mch);
					slideshow.fadeTo('fast',1);
				});
							
				fancygrid.find('.slideshow-nav').show();
				fancygrid.find('.pager').hide();
				fancygrid.find('a.hide').removeClass('active');
				fancygrid.find('a.show').addClass('active');
			});		
			
			fancygrid.find('.thumb-toggles a').click(function() {
				fancygrid.find('.portfolio-slideshow').hide();
				slideshowmeta.hide();
				fancygrid.find('.slideshow-nav').hide();
				fancygrid.find('.pager').fadeIn('fast');
				fancygrid.find('.psthumbs').show();	
				fancygrid.find('a.hide').removeClass('active');
				fancygrid.find('a.show').addClass('active');
			});			
		
			/* End Fancygrid */
				
				$(function () {
					var index = 0, hash = window.location.hash;
					if (/\d+/.exec(hash)) {
					index = /\d+/.exec(hash)[0];
					index = (parseInt(index) || 1) - 1; // slides are zero-based
				}
	
				// Set up active pager links for the two slideshow configurations
				if ( psPagerStyle[num] === 'thumbs' || psPagerStyle[num] === 'carousel') {
					$.fn.cycle.updateActivePagerLink = function(pager, currSlideIndex) { 
						$('#pager' + num + ' img').removeClass('activeSlide');
						$('#pager' + num + ' img:eq('+currSlideIndex+')').addClass('activeSlide'); 
					};
				} else {
					$.fn.cycle.updateActivePagerLink = function(pager, currSlideIndex) { 
						$('#pager' + num + ' a').removeClass('activeSlide');
						$('#pager' + num + ' a:eq('+currSlideIndex+')').addClass('activeSlide'); 
					};
				}

				function psCycle() {
					slideshow.cycle({
						fx: psTrans[num],
						speed: psSpeed[num],
						timeout: psTimeout[num],
						delay: psDelay[num],
						nowrap: psNoWrap[num],
						next: '#slideshow-nav' + num + ' a.slideshow-next, #slideshow-wrapper' + num + ' #psnext' + num + ', #slideshow-wrapper' + num + ' a.slideshow-next',
						startingSlide: index,
						prev: '#slideshow-nav' + num + ' a.slideshow-prev , #slideshow-wrapper' + num + ' #psprev' + num,
						before:	onBefore,
						after:	onAfter,
						end:	onEnd,
						slideExpr:	'.slideshow-content',
						manualTrump: true,
						slideResize: false,
						pager:  '#pager' + num,
						cleartypeNoBg: true,
						pagerAnchorBuilder: buildAnchors
					});

					slideshowmeta.cycle({
						fx: psTrans[num],
						speed: psSpeed[num],
						timeout: psTimeout[num],
						delay: psDelay[num],
						nowrap: psNoWrap[num],
						next: '#slideshow-nav' + num + ' a.slideshow-next, #slideshow-wrapper' + num + ' #psnext' + num + ', #slideshow-wrapper' + num + ' a.slideshow-next',
						startingSlide: index,
						prev: '#slideshow-wrapper' + num + ' a.slideshow-prev , #slideshow-wrapper' + num + ' #psprev' + num,
						manualTrump: true,
						before:	onBeforeMeta,
						slideExpr:	'.meta-content',
						cleartypeNoBg: true,
						pagerAnchorBuilder: buildAnchors,
						pager:  '#pager' + num
					});
				}	

				psCycle();	
				
				/* Loads images in the background */
				if ( psBackgroundImages === true ) {
					slideimage.each(function(i) {
					  $(this).delay(1000*i).queue(function() {
					    	$(this).attr('src',$(this).attr('data-img'));
						});
					});
				}
				
				//pause the slideshow right away if autoplay is off
				if ( psAutoplay[num] === false ) {
					slideshow.cycle('pause');
					slideshowmeta.cycle('pause');
				} else {
			
					if ( psAudio[num] === true ) {
						slideshow.delay(1000).queue(function() {
							slideshowmeta.cycle('resume');	
							slideshow.cycle('resume');	
							playbutton.fadeOut(100, function(){
							pausebutton.fadeIn(10);});	
							slideshow.parent().nextAll('.haiku-text-player:first').jPlayer('play');
						});
					} else {
						playbutton.fadeOut(100, function(){
						pausebutton.fadeIn(10);});	
					}	
				}
	
				
				//pause
				pausebutton.click(function() { 
					$(this).fadeOut(100, function(){
						playbutton.fadeIn(10);});
					if (psAudio[num] === true) {
						$(this).parent().parent().nextAll('.haiku-text-player:first').jPlayer('pause');
					}
					slideshow.cycle('pause');
					slideshowmeta.cycle('pause');
				});
			
				//play
				playbutton.click(function() { 
					slideshow.cycle('resume');
					slideshowmeta.cycle('resume');
					$(this).fadeOut(100, function(){
						pausebutton.fadeIn(10);});
					if ( psAudio[num] === true ) {
						$(this).parent().parent().nextAll('.haiku-text-player:first').jPlayer('play');
					}	
				});
	
				//restart
				restartbutton.click(function() { 
					$('#pager' + num + ' .numbers').empty();
					$(this).fadeOut(100, function(){
						pausebutton.fadeIn(10);});
					if ( psAudio[num] === true ) {
						$(this).parent().parent().nextAll('.haiku-text-player:first').jPlayer('play');	
					}
	
					psCycle();							
		
				});	
	
				if ( psFluid === true ) {		

					function responsiveSlides() {
						$ww = slideshowwrapper.width();
						slideshow.find('img').css('max-height', $ww * 0.75);
						slideshow.css('width','').css('height','');	
						slideshowmeta.css('width','').css('height','');
						var $h, $w, $mch;
						$h = slideshow.find('.slideshow-content').eq(currSlide[num]).outerHeight();
						$w = slideshow.find('.slideshow-content').eq(currSlide[num]).width();
						slideshow.css("height", $h).css("width", $w);
						slideshowmeta.css("width", $w).find('.meta-content').eq(currSlide[num]).css("width", $w);
						$mch = slideshowmeta.find('.meta-content').eq(currSlide[num]).peek("outerHeight");
						console.log($mch);
						slideshowmeta.css("height", $mch);
					}		
					
					responsiveSlides();

					$(window).resize(function() { //on window resize, force resize of the slideshows
						responsiveSlides();
					});
			
				}	
	
				if ( psKeyboardNav === true ) {

					/*
					 * cleaned up code from before. still a bit inefficient but MUCH
					 * more robust than first commit. 	
					 */ 
					var $noPhotoswipeSlideshow = $("body:not(.ps-active) div.slideshow-wrapper");

					$(document).keydown(function(e){

						if( $("body").is(".ps-active") ) {
							// do nothing
							e.preventDefault();
						} else {

							if(e.which == 37){
								$noPhotoswipeSlideshow.children('#psprev' + num).click();
							} else if(e.which == 39) {
								$noPhotoswipeSlideshow.children('#psnext' + num).click();
							}

						}
					});
				}	
		
				if ( psTouchSwipe === true ) {

				 	var $touchswipeimgs = slideshow.find(slideimage);

					$touchswipeimgs.each(function(){
							var $these = $(this);

							$these.swipe({ 
								swipeLeft:function() { $('#psnext' + num).click()},
								swipeRight:function() { $('#psprev' + num).click()},
								allowPageScroll:"auto"
							});
					});

				}	
				
				$('.ps-video').on( 'hover', function() {
					slideshow.cycle('pause');
					slideshowmeta.cycle('pause');
					pausebutton.hide();
					playbutton.show();
				});
				
				$('.slideshow-content a').not('.psp-no-click').not('._blank').on('click', function() {
					slideshow.cycle('pause');
					slideshowmeta.cycle('pause');
					pausebutton.hide();
					playbutton.show();
				});

				if ( psAutoplay[num] === true ) {
					$('#fancybox-close').on( 'click', function() {
						slideshow.cycle('resume');
						slideshowmeta.cycle('resume');
						pausebutton.show();
						playbutton.hide();
					});
				}
	
				//build anchors
				function buildAnchors(idx, slide) { 
					if (psPagerStyle[num] === 'thumbs' || psPagerStyle[num] === 'carousel') {
						return '#pager' +num+ ' img:eq(' + (idx) + ')'; 
					}
					if (psPagerStyle[num] === "bullets" || psPagerStyle[num] === "numbers" || psPagerStyle[num] === "titles" ) {
						return '#pager' +num+ ' a:eq(' + (idx) + ')'; 
					}	 
				}
										
				function onBefore(curr,next,opts) {

					var slide = $(this);
					var mainImg = slide.find('img'); 
					var nextImg = slide.next().find('img'); 
					
					if ( mainImg.attr("src") == "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==") {
						mainImg.attr("src", mainImg.attr("data-img"));
					}			
					
					if ( nextImg.attr("src") == "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==") {
						nextImg.attr("src", nextImg.attr("data-img"));
					}
													
					slideshow.find('.slideshow-content').removeClass('active-slide');
					slide.addClass('active-slide');
					$('.ps-video').not($('.active-slide .ps-video')).each(function(){
						$(this).prependTo($(this).parent()).hide();
					});
					
					slide.find('.ps-video').show();
					dataSrc = slide.find('iframe').attr('data-src');
					slide.find('iframe').attr('src', dataSrc);
					
					//This drives the tabs
					tabSlide[num] = opts.nextSlide + 1;
					var psTabs = Math.ceil( ( ( tabSlide[num] ) / psCarouselSize[num] ) -1 );
					if ( disableAutoScroll != true ) {
						$('#carouselnav' + num + ' a').eq(psTabs).click();
					} 
					
					mainImg.load(function () {
						var $h,$w;
						$h = slide.peek("outerHeight");
						$w = slide.peek("width"); //slideshow content width								
						slideshow.height($h).width($w);
					});
					
					mainImg.imagesLoaded(function () {
						var $h,$w;
						$h = slide.peek('outerHeight'); //slideshow content height
						$w = slide.peek('width'); //slideshow content width								
						slideshow.height($h).width($w);
					});
				}
					
				function onAfter(curr,next,opts) {
					var slide = $(this);
					var mainImg = slide.find('img'); 
					var nextImg = slide.next().find('img'); 
					
					currSlide[num] = opts.currSlide;		
											
					if ( psNoWrap[num] === true ) { //if wrapping is disabled, fade out the controls at the appropriate time
						if (opts.currSlide === 0 ) {
							slideshownav.find('.slideshow-prev, .sep').addClass('inactive');
						} else {
							slideshownav.find('.slideshow-prev, .sep').removeClass('inactive');
						}
							
						if (opts.currSlide === opts.slideCount-1) {
							slideshownav.find('.slideshow-next, .sep').addClass('inactive');
						} else {
							slideshownav.find('.slideshow-next').removeClass('inactive');
						}
					} 
	
					if (psHash === true) { 
						window.location.hash = opts.currSlide + 1;
					}
	
					var caption = (opts.currSlide + 1) + ' ' + psInfoTxt + ' ' + opts.slideCount;
					$('.slideshow-info' + num).html(caption);
				} 

				function onBeforeMeta(curr,next,opts) {
					var slide = $(this);
					var $h = slide.peek("outerHeight");
					slideshowmeta.height($h);
				}
	
				function onEnd() {
					slideshownav.find('.slideshow-next, .sep').addClass('inactive');
					pausebutton.hide();
					playbutton.hide();
					restartbutton.show();	
				}
				
				/* Photoswipe */
				if ( $('.photoswipe').length ) {

					if( slideshowwrapper.is('.photoswipe') ) {

						var photoswipe_slides, photoswipe_button;

						photoswipe_slides = slideshowwrapper.find('.ps-photoswipe');
						photoswipe_button = slideshowwrapper.find('.activate-fullscreen');


						photoswipe_slides.on('click',function(){

							var instance = photoswipe_slides.photoSwipe({ 
								allowUserZoom:false, 
								fadeInSpeed: '0', 
								zIndex:'10000', 
								captionAndToolbarShowEmptyCaptions:false 
							});

							slideshow.cycle('pause');
							slideshowmeta.cycle('pause');
							pausebutton.hide();
							playbutton.show();
							if (currSlide[num]) {
								instance.show(currSlide[num]);
							} else {
								instance.show(0);
							}

							return false;

						});

						photoswipe_button.on('click', function() {

							var instance = photoswipe_slides.photoSwipe({ 
								allowUserZoom:false, 
								fadeInSpeed: '0', 
								zIndex:'10000', 
								captionAndToolbarShowEmptyCaptions:false 
							});

							slideshow.cycle('pause');
							slideshowmeta.cycle('pause');
							pausebutton.hide();
							playbutton.show();
							if (currSlide[num]) {
								instance.show(currSlide[num]);
							} else {
								instance.show(0);
							}

						});


					}

				} /* End Photoswipe */
				
			});
		});

		$(function(){
        // Fancybox: IFRAME
        var fancybox_iframe = $('.slideshow-popup');
        if (fancybox_iframe.length > 0){
            fancybox_iframe.each(function(index){
                // Inline frame width param
                if( $(this).attr('href').match(/ww=[0-9]+/i) ){
                    var fWidth = parseInt($(this).attr('href').match(/ww=[0-9]+/i)[0].replace('ww=',''));
                } else {
                    var fWidth = '625';
                }
                // Inline frame height param
                if( $(this).attr('href').match(/wh=[0-9]+/i) ){
                    var fHeight = parseInt($(this).attr('href').match(/wh=[0-9]+/i)[0].replace('wh=',''));
                } else {
                    var fHeight = '625';
                }
                 $(this).fancybox({
                    'type'              : 'iframe',
                    'autoScale'         : false,
                    'scrolling'					: "no",
                    'width'             : fWidth,
                    'height'            : fHeight

                });
            });
	        }
	    });			
	}); 	
})(jQuery);