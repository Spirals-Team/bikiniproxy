if(undefined == Function.prototype.bind){
	Function.prototype.bind=function(that){
		var self = this,
			args = arguments.length > 1 ? Array.slice(arguments, 1) : null,
			F = function(){};

		var bound = function(){
			var context = that, length = arguments.length;
			if (this instanceof bound){
				F.prototype = self.prototype;
				context = new F;
			}
			var result = (!args && !length)
				? self.call(context)
				: self.apply(context, args && length ? args.concat(Array.slice(arguments)) : args || arguments);
			return context == that ? result : context;
		};
		return bound;
	}
}

/**************************************************************

	Script		: Overlay
	Version		: 2.0.4
	Authors		: Samuel Birch
	Desc		: Covers the window with a semi-transparent layer.
	Licence		: Open Source MIT Licence
	Modified	: Liam Smart (liam_smart@hotmail.com) - MooTools 1.2 upgrade

**************************************************************/
(function($){
//start overlay class
	window.Overlay = function(options){
		//options
		this.options=$.extend({
			colour: '#000',//background color of overlay
			opacity: 0.7,//opacity of overlay
			zIndex: -1,//the z-index of the overlay (needs to lower than multiBox pop-up)
			onClick: function(){}//make sure new class is loaded
		},options);
		
		//start building overlay
		this.container=$('<div id="OverlayContainer"></div>').css({
			'position':'absolute','left':0,'height':'100%',
			'top':0,'width':'100%','opacity':0,
			'overflow':'hidden','background':'black',
			'zIndex':this.options.zIndex,'opacity':0
		}).appendTo(this.options.container).click(this.options.onClick);
	}

	//initialization
	Overlay.prototype.initialize=function(options){
		this.container.css('zIndex',100);
		//set options
		this.options=$.extend($this.options,options);
		this.iframe=$('<iframe id="OverlayIframe" name="OverlayIframe" src="javascript:void(0)" frameborder=0 scrolling="no"></iframe>').css(
			{'position':'asbolute','top':0,'left':0,'width':'100%','height':'100%',
				'filter':'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)',
				'opacity':0,'zIndex':101
			}).appendTo(this.container);

		
		this.overlay = $('<div id="Overlay"></div>').css({
			'position':'asbolute','top':0,'left':0,'width':'100%','height':'100%','zIndex':102,'backgroundColor':this.options.colour
			}).appendTo(this.container);
		
		this.container.addEvent('click', $.proxy(function(){
			this.options.onClick();
		},this));
		
		this.position();
		//make sure overlay is resized when browser is
		$(window).addEvent('resize',$.proxy(this.position,this));
	},
	
	Overlay.prototype.position=function(){
		if(this.options.container == document.body){
			this.container.setStyles({
				height: $(window).scrollTop(),
				width:  $(window).scrollLeft()
			});
		}else{
			this.container.setStyles({
				top: this.options.container.offset().top,
				height: this.options.container.height(),
				left: this.options.container.offset().left,
				width: this.options.container.width()
			});
		}
	};
	
	Overlay.prototype.show= function(){
		this.container.css({'zIndex':100,'visibility':'visible'});
	//	console.log(this.container);
		this.container.animate({
			'opacity': this.options.opacity
		},'slow','easeOutExpo',(function(){
			//this.container.css({'visibility': 'visible'});
		}).bind(this));
	};
	
	Overlay.prototype.hide= function(){
		
		this.container.animate({
			display: 'none',
			opacity: 0
		},'slow','easeOutExpo',(function() {
			this.container.css({'visibility': 'hidden'});
			this.container.css('zIndex',-1);
		}).bind(this));
		
	};
})(jQuery);

function s5_resize_overlay() {
if (document.getElementById("OverlayContainer")) {
document.getElementById("OverlayContainer").style.height = document.body.offsetHeight + "px";
document.getElementById("OverlayContainer").style.width = document.body.offsetWidth + "px";
}
}

jQuery(window).bind('resize',function(){s5_resize_overlay();});
