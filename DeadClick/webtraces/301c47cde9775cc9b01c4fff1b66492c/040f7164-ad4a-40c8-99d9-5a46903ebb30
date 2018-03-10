if(!Array.prototype.from ) Array.prototype.from = function(item){
	if (item == null) return [];
	return (typeof(item) == 'array') ? item :   [item];
};

	Function.prototype.passx=function(args, bind){
		var self = this;
		if (args != null) args = Array.prototype.from(args);
		return function(){
			return self.apply(bind, args || arguments);
		};
	};

if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function(fn, scope) {
    for(var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope || this, this[i], i, this);
    }
  }
}

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

if(!String.prototype.contains) String.prototype.contains=function(n){return this.indexOf(n)>-1;};
if(!Array.prototype.contains) Array.prototype.contains=function(n){return this.indexOf(n)>-1;};

var Eventx = {
	

    addEvent:function(elem, type, func){
        if (document.addEventListener) {
            elem.addEventListener(type, func, false);
        }
        else {
            elem.attachEvent('on' + type, func);
        }
    },
	

	onResizend:function(onResizend){
		

		var actionState = 'normal',
			taskPtr = null,
			timeOutTask = function(){
				taskPtr && clearTimeout(taskPtr);
				taskPtr = setTimeout(function(){
					onResizend && onResizend();
					actionState = 'normal';
				},500)
			};	
							
		this.addEvent(
			window, 
			'resize', 
			function(){
				actionState = 'resizing';			
				timeOutTask();
			}
		);
	},
	

	onResizestart :function(onResizestart){
		var isExecuted = false;	
		this.onResizend(function(){isExecuted = false;});				
		this.addEvent(
			window, 
			'resize', 
			function(){				
				if(!isExecuted){
					onResizestart && onResizestart();
					isExecuted = true;
				}
			}
		);
	}	
};
// For IE8 and earlier version.
if (!Date.now) {
  Date.now = function() {
    return new Date().valueOf();
  }
}
if(!Array.prototype.indexOf){	
	Array.prototype.indexOf = function(obj, start) {
     for (var i = (start || 0), j = this.length; i < j; i++) {
         if (this[i] === obj) { return i; }
     }
     return -1;
}
}
var UID = Date.now();
String.prototype.test=function(n){
	return this.match(n)==null?false:true;
}
String.prototype.uniqueID= function(){
	return (UID++).toString(36);
};
Array.prototype.includex=function(n){
	if(this.indexOf(n)==-1)this.push(n);
}
Object.toInt=function(){return parseInt(this);}
/*Object.append=function (z){for(var y=1,w=arguments.length;
y<w;y++){var v=arguments[y]||{};for(var x in v){z[x]=v[x];}}return z;};*/
/*Object.prototype.each=function(fn, bind){
		Array.prototype.forEach(this, fn, bind);
		return this;
	};*/
Object.toQueryString=function (b,c){
	var d=[];
	for(g in b){
		h=b[g];
	//Object.each(b,function(h,g){
		if(c){
			g=c+"["+g+"]";
		}
		var f;
		switch(typeof(h)){
			case "object":f=Object.toQueryString(h,g);break;
			case "array":var e={};h.forEach(function(k,j){e[j]=k;});f=Object.toQueryString(e,g);break;
			default:f=g+"="+encodeURIComponent(h);}if(h!=null){d.push(f);}
	//});
	}
	return d.join("&");
};

/**************************************************************

	Script		: multiBox
	Version		: 2.0.6
	Authors		: Samuel Birch
	Desc		: Supports jpg, gif, png, flash, flv, mov, wmv, mp3, html, iframe
	Licence		: Open Source MIT Licence
	Modified	: Liam Smart (liam_smart@hotmail.com) - MooTools 1.2 upgrade
	Usage		: window.bind('domready', function(){
					  //call multiBox
					  var initMultiBox = new multiBox({
						  mbClass: '.mb',//class you need to add links that you want to trigger multiBox with (remember and update CSS files)
						  container: $(document.body),//where to appendTo multiBox
						  descClassName: 'multiBoxDesc',//the class name of the description divs
						  path: './Files/',//path to mp3 and flv players
						  useOverlay: true,//use a semi-transparent background. default: false;
						  maxSize: {w:600, h:400},//max dimensions (width,height) - set to null to disable resizing
						  addDownload: true,//do you want the files to be downloadable?
						  pathToDownloadScript: './Scripts/forceDownload.asp',//if above is true, specify path to download script (classicASP and ASP.NET versions included)
						  addRollover: true,//add rollover fade to each multibox link
						  addOverlayIcon: true,//adds overlay icons to images within multibox links
						  addChain: true,//cycle through all images fading them out then in
						  recalcTop: true,//subtract the height of controls panel from top position
						  addTips: true,//adds MooTools built in 'Tips' class to each element (see: http://mootools.net/docs/Plugins/Tips)
						  autoOpen: 0//to auto open a multiBox element on page load change to (1, 2, or 3 etc)
					  });
				  });

**************************************************************/
(function($){

	$.fn.getLast=function(n){
		return $(this).children().last();
	};
	$.fn.getElements=$.fn.children;
	$.fn.getElement=function(elm){
		return $(elm,$(this));
	};
	$.fn.getPrevious=$.fn.prev;
	$.fn.getFirst=function(n){
		return $(this).children().first();
	};
	$.fn.getNext=$.fn.next;

var $chk=function (i){return !!(i||i===0);};

function Tips(elm, options){
	//window.complete=true;
	this.options={
		onShow:function(){},
		onHide:function(){},
		offsets:{'x':0,'y':0},
		className:'mbTips'
	};
	this.options=$.extend(this.options,options);
	$(elm).bind('mouseenter',function(e){
		if($(elm).data('tips')==undefined) {
			var titleAttr=$(elm).attr('title')?$(elm).attr('title'):$(elm).attr('oldtitle');
				var content=$('<div class="tip"></div>').append($('<div class="tip-title"></div>').html(titleAttr)).append($('<div class="tip-text"></div>').html($(elm).attr('rel')));
				var tips=$('<div class="mbTips"></div>').css({'position':'absolute'})
				.append($('<div class="tip-top"></div>'))
				.append(content).append($('<div class="tip-bottom"></div>')).appendTo($('body'))
				;
				$(elm).data('tips',tips);
				
				$(elm).attr('oldtitle',$(elm).attr('title'));
				$(elm).removeAttr('title');
				
		}
		 $(elm).data('tips').css({'left':$(window).scrollLeft()+e.clientX+options.offsets.x,'top':$(window).scrollTop()+e.clientY+options.offsets.y}).fadeIn('slow');
		
	}).bind('mouseleave',function(){
			if($(elm).data('tips'))$(elm).data('tips').fadeOut();
	}).bind('mousemove',function(e){ 
			if($(elm).data('tips'))$(elm).data('tips').css({'left':$(window).scrollLeft()+e.clientX+options.offsets.x,'top':$(window).scrollTop()+e.clientY+options.offsets.y});
	}).bind('click',function(e){
			$(elm).data('tips').remove();
			$(elm).removeData('tips');
	});
	
}

function Swiff(path,options){


	this.options={
		id: null,
		height: 1,
		width: 1,
		container: null,
		properties: {},
		params: {
			quality: 'high',
			allowScriptAccess: 'always',
			wMode: 'window',
			swLiveConnect: true
		},
		callBacks: {},
		vars: {}
	};
	this.instance = 'Swiff_' + String.prototype.uniqueID();

		this.options=$.extend(this.options,options);
		options = this.options;
		var id = this.id = options.id || this.instance;
		var container = this.options.container;

		Swiff.CallBacks[this.instance] = {};

		var params = options.params, vars = options.vars, callBacks = options.callBacks;
		var properties = $.extend(options.properties,{height: options.height, width: options.width});

		var self = this;

		for (var callBack in callBacks){
			Swiff.CallBacks[this.instance][callBack] = (function(option){
				return function(){
					return option.apply(self.object, arguments);
				};
			})(callBacks[callBack]);
			vars[callBack] = 'Swiff.CallBacks.' + this.instance + '.' + callBack;
		}

		params.flashVars = Object.toQueryString(vars);
		if (jQuery.browser.msie){
			properties.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
			params.movie = path;
		} else {
			properties.type = 'application/x-shockwave-flash';
		}
		properties.data = path;

		var build = '<object id="' + id + '"';
		for (var property in properties) build += ' ' + property + '="' + properties[property] + '"';
		build += '>';
		for (var param in params){
			if (params[param]) build += '<param name="' + param + '" value="' + params[param] + '" />';
		}
		build += '</object>';
		this.object = ((container.length<=0) ? container.empty() : jQuery('<div></div>').html( build).appendTo(container));
		
}

	Swiff.prototype.toElement=function(){
		return this.object;
	},


	Swiff.prototype.replaces= function(element){
		element = document.getElementById(element);
		element.parentNode.replaceChild(this.toElement(), element);
		return this;
	},

	Swiff.prototype.inject= function(element){
		document.getElementById(element).appendChild(this.toElement());	
		return this;
	},

	Swiff.prototype.remote= function(){
		return Swiff.remote.apply(Swiff, [this.toElement()].append(arguments));
	}



Swiff.CallBacks = {};

Swiff.remote = function(obj, fn){
	var rs = obj.CallFunction('<invoke name="' + fn + '" returntype="javascript">' + __flash__argumentsToXML(arguments, 2) + '</invoke>');
	return eval(rs);
};


function Chain(){

	this.$chain= [];
}
Chain.prototype.chain=function(){
	this.$chain.append(Array.flatten(arguments));
	return this;
};

Chain.prototype.callChain=function(){
	return (this.$chain.length) ? this.$chain.shift().apply(this, arguments) : false;
};

Chain.prototype.clearChain=function(){
		this.$chain.empty();
		return this;
};

//start multiBox class
	window.multiBox = function(options){

	
	//options
	this.options={
		initialSize: {w:250, h:250},//initial width/height the box will open at before resizing
		useOverlay: false,//do you want to use a semi-transparent background?
		contentColor: '#fff',//background colour of the content holder within the pop-up
		showNumbers: true,//show numbers such as "4 of 12"
		showControls: true,//show the previous/next, title, download etc
		descClassName: false,//class of description box
		movieSize: {w:400, h:300},//default width/height of movie
		offset: {x:0, y:0},//offset multiBox position
		fixedTop: false,//force multiBox to open at top of page
		path: './Files/',//path to mp3player and flvplayer etc
		openFromLink: true,//pop-up will slide in from the position of the element clicked
		useKeyboard: true//allow keyboard shortcuts (esc: close, spacebar & right arrow: next, left arrow: previous)
	};
		this.openClosePos = {};
		this.contentToLoad = {};
		this.contentObj = {};
		this.containerDefaults = {};
		this.multiBox = [];
		this.families = [];
		this.content = [];
		this.timer = 0;
		this.index = 0;
		this.opened = false;
		this.currentGallery = null;
			//initialization
				//set options
		this.options=$.extend(this.options,options);
		//set variables

		//start multiBox
		if($(this.options.mbClass).length > 0){this.start();};
		
	}


	
	//start multiBox
	multiBox.prototype.start= function(){
		//there will be no next/previous buttons unless you specify them to a group
		$(this.options.mbClass).each($.proxy(function(index,el){
			//we must store original rel & title values to use later
			if($chk($(el).attr('rel'))){
				$(el).data('origRel',$(el).attr('rel'));
			};
			if($chk($(el).attr('title'))){
				$(el).data('origTitle',$(el).attr('title'));
			};
			//check if it has a rel="[group]"
			if($(el).attr('rel').toString().test(/\[*?]/i)){
				//if there are more than 1 rel value, we need to split them to find our group
				if($(el).attr('rel').indexOf(',')>-1){
					//split then loop through each array instance of the split rel's
					var tempArr = $(el).attr('rel').split(',');
					tempArr.forEach($.proxy(function(temp,i){
						if(temp.contains('[')){//only take out the rel relating to a [group]
							//change this links relation to the temp variable
							$(el).attr('rel',temp);
						};
					},this));
				};
				//if rel isnt already in fanilies then create a new instance for it
				this.families.includex($(el).attr('rel'));
			};
			//finally now we have put them into families, push each link with 'mbClass' into multiBox array
			this.multiBox.push(el);
		},this));
		//loop through each mb link seperating content into groups of families
		this.multiBox.forEach((function(el){
			//check rel contains a group
			if($(el).attr('rel').toString().test(/\[*?]/i)){
				//we know the link has a group so loop through each family to find where it belongs
				this.families.forEach((function(fam,i){
					//if the rel belongs to a family we make sure its pushed into correct family array within content array
					if($(el).attr('rel') == fam){
						//if there isnt a family array within content array to hold this family create one
						if(!this.content[i]){
							//create new gallery
							this.content[i] = [];
						};
						//finally push link into appropriate family within content array
						this.content[i].push(el);
					};
				}).bind(this));
			}
		}).bind(this));
		//loop through each mb link seperating content into groups of families
		this.multiBox.forEach((function(el){
			//check rel DOESNT contain a group
			if($(el).attr('rel').toString().test(/\[*?]/i) == false){
				//add link into content array as a single array as it doesnt belong to a family
				this.content.push([el]);
			};
		}).bind(this));
		
		this.container = $('<div class="MultiBoxContainer"></div>').appendTo(this.options.container);
		
		this.iframe = $('<iframe id="multiBoxIframe" name="mulitBoxIframe" src="javascript:void(0);" frameborder=0 scrolling="no"></iframe>').css(
		{		'position': 'absolute',
				'top': 0,
				'left': 0,
				'width': '100%',
				'height': '100%',
				'filter': 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)',
				'opacity': 0
		}).appendTo(this.container);
		this.box = $('<div></div>').addClass('MultiBoxContent').appendTo(this.container);
		this.closeButton = $('<div></div>').addClass('MultiBoxClose').appendTo(this.container).bind('click', this.close.bind(this));
		this.controlsContainer = $('<div></div>').addClass('MultiBoxControlsContainer').appendTo(this.container);
		this.controls = $('<div></div>').addClass('MultiBoxControls').appendTo(this.controlsContainer);
		this.previousButton = $('<div></div>').addClass('MultiBoxPrevious').appendTo(this.controls).bind('click', this.previous.bind(this));
		this.nextButton = $('<div></div>').addClass('MultiBoxNext').appendTo(this.controls).bind('click', this.next.bind(this));
		this.title = $('<div></div>').addClass('MultiBoxTitle').appendTo(this.controls);
		this.number = $('<div></div>').addClass('MultiBoxNumber').appendTo(this.controls);
		this.description = $('<div></div>').addClass('MultiBoxDescription').appendTo(this.controls);
		
		//check user options and call functions accordingly
		if(this.options.useKeyboard){
			$(window.document).bind('keydown',(function(e){
				if(e.key == 'right' || e.key == 'space'){
					this.next();
				}else if(e.key == 'left'){
					this.previous();
				}else if(e.key == 'esc'){
					this.close();
				};
			}).bind(this));
		};
		if(this.options.useOverlay){
			this.overlay = new Overlay({
				container:this.options.container,
				onClick:this.close.bind(this)
			});
			//console.log(this.overlay);
			//this.overlay.style.width='%100';
			//this.overlay.style.height='%100';
		};
		if(this.options.addOverlayIcon == true){
			this.addOverlayIcon(this.multiBox);
		};
		if(this.options.addRollover == true){
			this.addRollover(this.multiBox);
		};
		if(this.options.addChain == true){
			this.addChain(this.multiBox);
		};
		if(this.options.descClassName){
			this.descriptions = $('.'+this.options.descClassName);
		};
		if(this.options.addDownload == true){
			this.addDownload(this.multiBox);
		};
		if(this.options.addTips == true){
			this.addTips(this.multiBox);
		};

		//if there is only one multiBox link don't show unneccesary buttons
		if(this.multiBox.length == 1){
			this.title.css('marginLeft',0);
			this.description.css('marginLeft',0);
			this.previousButton.css('display','none');
			this.nextButton.css('display','none');
			this.number.css('display','none');
		};
		
		$('<div></div>').css('clear','both').appendTo(this.controls);
		
		//start breaking into content array to add event listeners to each link within each group
		this.content.forEach((function(el,i){
			//now we are left with each group as arrays
			$(el).each((function(i,group){
				//add event listener
				$(group).bind('click', (function(e){
					var myTarget = ($(e.target).attr('href')) ? $(e.target) : $(e.target).parent('a');
				//	console.log(myTarget);
					e.preventDefault();
					this.open($(el).index(myTarget),el);
				}).bind(this));
				//check to see if link is an HTML element
				if(group.href.indexOf('#') > -1){
					//grab it as an object
					group.content = $(group.href.substr(group.href.indexOf('#')+1));
					//hide the object
					if(group.content){
						group.content.css('display','none');
					};
				};
			}).bind(this));
		}).bind(this));
		
		//this.containerEffects = new Fx.Morph(this.container,{duration:400});
		//this.controlEffects = new Fx.Morph(this.controlsContainer,{duration:300});
		this.reset();
		
		//auto open a multiBox element
		if(this.options.autoOpen > 0){
			this.autoOpen(this.multiBox);
		};
	};
	
	multiBox.prototype.setContentType= function(element){
		var str = element.href.substr(element.href.lastIndexOf('.')+1).toLowerCase();
		var myRel = $(element).data('origRel');
		var contentOptions = {};
		//retrieve original rel values and make sure there was one
		if($chk(myRel)){
			//split the options just incase there are more than 1
			var optArr = myRel.split(',');
			
			optArr.forEach(function(el,i){
				//make sure the group is ignored
				if(el.test(/\[*?]/i) != true){
					var ta = el.split(':');
					contentOptions[ta[0]] = ta[1];
				};
			});
		};
		
		if(contentOptions.type != undefined){
			str = contentOptions.type;
		};
		
		this.contentObj.url = element.href;
		this.contentObj.xH = 0;
		
		if(contentOptions.width){
			this.contentObj.width = contentOptions.width;
		}else{
			this.contentObj.width = this.options.movieSize.w;
		};
		if(contentOptions.height){
			this.contentObj.height = contentOptions.height;
		}else{
			this.contentObj.height = this.options.movieSize.h;
		};
		if(contentOptions.panel){
			this.panelPosition = contentOptions.panel;
		}else{
			this.panelPosition = this.options.panel;
		};
		switch(str){
			case 'jpg':
			case 'gif':
			case 'png':
				this.type = 'image';
				break;
			case 'swf':
				this.type = 'flash';
				break;
			case 'flv':
				this.type = 'flashVideo';
				this.contentObj.xH = 70;
				break;
			case 'mov':
				this.type = 'quicktime';
				break;
			case 'wmv':
				this.type = 'windowsMedia';
				break;
			case 'rv':
			case 'rm':
			case 'rmvb':
				this.type = 'real';
				break;
			case 'mp3':
				this.type = 'flashMp3';
				this.contentObj.width = 320;
				this.contentObj.height = 70;
				break;
			case 'element':
				this.type = 'htmlelement';
				this.elementContent = $(element.content);
				this.elementContent.css({
					'display': 'block',
					'opacity': 0,
					'width': 'auto'//added this to get htmlElement to behave
				});
				
				//check and see if styles are being applied to HTML content section
				if(this.elementContent.css('width') != 'auto'){
					this.contentObj.width = this.elementContent.getWidth();
				};
				
				this.contentObj.height = this.elementContent.getHeight();
				this.elementContent.css({
					'display': 'none',
					'opacity': 1
				});
				break;
			default:
				this.type = 'iframe';
				if(contentOptions.req){
					this.type = 'req';
				};
				break;
		}
	};
	
	multiBox.prototype.reset= function(){
		this.container.css({
			'opacity': 0,
			'display': 'none'
		});
		this.controlsContainer.css('height',0);
		this.removeContent();
		this.previousButton.removeClass('MultiBoxButtonDisabled');
		this.nextButton.removeClass('MultiBoxButtonDisabled');
		this.opened = false;
	},
	
	multiBox.prototype.getOpenClosePos= function(element){
		var border=this.container.css('border')?this.container.css('border'):0;
		element=$(element);
		if(this.options.openFromLink){
			if(element.getFirst().length>0){
				var w = element.getFirst().width() - (parseInt(border) * 2);
				if(w < 0){
					w = 0;
				};
				var h = element.getFirst().height() - (parseInt(border) * 2);
				if(h < 0){
					h = 0;
				};
				if(element.find('img').length>0) var l=element.children(0).offset().left;
				else var l=element.offset().left;
				this.openClosePos = {
					width: w,
					height: h,
					top: element.offset().top,
					left: l
				};
			}else{
				
				var w = element.width() - (parseInt(border) * 2);
				if(w < 0){
					w = 0;
				};
				var h = element.height() - (parseInt(border) * 2);
				if(h < 0){
					h = 0;
				};
				if(element.find('img').length>0) var l=element.children(0).offset().left;
				else var l=element.offset().left;
				this.openClosePos = {
					width: w,
					height: h,
					top: element.offset().top,
					left: l
				};
			};
		}else{
			if(this.options.fixedTop){
				var top = this.options.fixedTop;
			}else{
				var top = $(window).scrollTop()+ (($(window).height()/2)-(this.options.initialSize.h/2)-parseInt(border))+this.options.offset.y;
			};

			this.openClosePos = {
				width: this.options.initialSize.w,
				height: this.options.initialSize.h,
				top: top,
				left: (($(window).width()/2)-(this.options.initialSize.w/2)-parseInt(border))+this.options.offset.x
			};
		};
		return this.openClosePos;
	},
	
	multiBox.prototype.open= function(index,currGal){
		this.overlay.container.css({'zIndex':100,'visible':'visible'});
		//need to store current gallery and index of the object in gallery
		this.currentGallery = currGal;
		this.index = index;
		//grab id so description can be matched
		this.openId = $(this.currentGallery[this.index]).attr('id');
		//check to see if mb is already open
		if(!this.opened){
			this.opened = true;
			//console.log(this.overlay);
			if(this.options.useOverlay){
				this.overlay.show();
			};
			
			this.container.css(this.getOpenClosePos(this.currentGallery[this.index]));
			this.container.css({
				'opacity': 0,
				'display': 'block'
				});
			
			if(this.options.fixedTop){
				var top = parseInt(this.options.fixedTop);
			}else{
				var top = parseInt($(window).scrollTop())+parseInt(($(window).height()/2)-parseInt(this.options.initialSize.h/2)-parseInt(this.container.css('border')?this.container.css('border'):0))+parseInt(this.options.offset.y);
			};
			var left=(($(window).width()/2)-(this.options.initialSize.w/2)-parseInt(this.container.css('border')?this.container.css('border'):0))+this.options.offset.x;
			
			//console.log($(window).width()/2,this.options.initialSize.w/2,parseInt(this.container.css('border')),this.options.offset.x);
			this.container.animate({
				'width': this.options.initialSize.w,
				'height': this.options.initialSize.h,
				'top': top,
				'left': left,
				'opacity': 1
			},{duration:400,easing:'easeOutExpo',complete:(function(){}).bind(this)});
			
			this.load(this.currentGallery[this.index]);
		}else{
			if(this.options.showControls){
				this.hideControls();
			};
			this.getOpenClosePos(this.currentGallery[this.index]);
			this.timer = setTimeout(this.hideContent.bind(this),500);
			this.timer = setTimeout(function(){this.load.passx(this.currentGallery[this.index],this);},1100);
		}
	},
	
	multiBox.prototype.getContent= function(element){
		this.setContentType(element);
		var desc = {};
		if(this.options.descClassName){
			this.descriptions.each((function(i,el){
				if($(el).hasClass(this.openId)){
					desc = $(el).clone();
				};
			}).bind(this));
		};
		this.contentToLoad = {
			title: $(element).data('origTitle') || '&nbsp;',
			desc: desc,
			number: this.index+1
		};
	},
	
	multiBox.prototype.close= function(){
		if(this.options.useOverlay){
			this.overlay.hide();
		};
		if(this.options.showControls){
			this.hideControls();
		};
		this.hideContent();
		this.container.stop();
		setTimeout(this.zoomOut.bind(this),500);
	},
	
	multiBox.prototype.zoomOut= function(){
		this.container.animate({
			'width': this.openClosePos.width,
			'height': this.openClosePos.height,
			'top': this.openClosePos.top,
			'left': this.openClosePos.left,
			'opacity': 0
		});
		setTimeout(this.reset.bind(this),500);
	},
	
	multiBox.prototype.load= function(element){
		//console.log(this.box[0]);
		this.box.addClass('MultiBoxLoading');
		this.getContent(element);
		//this.type='image';
		//console.log(this.type);
		if(this.type == 'image'){
			var xH = this.contentObj.xH;
			
			if($.browser.msie) this.contentObj = $('<img/>').attr('src',element.href).load(setTimeout(this.resize.bind(this),100));
			else this.contentObj = $('<img/>').attr('src',element.href).load(/*setTimeout(*/this.resize.bind(this)/*,100)*/);
			//new Asset.image(element.href,{onload:this.resize.bind(this)});
			this.contentObj.xH = xH;
		}else{
			this.resize();
			
		};
		if (document.getElementById("OverlayContainer")) {
			document.getElementById("OverlayContainer").style.height = document.body.offsetHeight + "px";
			document.getElementById("OverlayContainer").style.width = document.body.offsetWidth + "px";
			}
	},
	
	multiBox.prototype.resize= function(){
	var s5_mult_tooltips = document.getElementById("s5_body").getElementsByTagName("DIV");
	for (var s5_mult_tooltips_y=0; s5_mult_tooltips_y<s5_mult_tooltips.length; s5_mult_tooltips_y++) {
		if (s5_mult_tooltips[s5_mult_tooltips_y].className == "mbTips") {
			s5_mult_tooltips[s5_mult_tooltips_y].style.left = "0px";
		}
	}

	if (document.getElementById("OverlayContainer")) {
		//only resize if values have been set to resize to
		var ii = new Image();
		if(this.type=='image' || this.type=='flash' || this.type=='flashVideo' || this.type=='flashMp3' || this.type=='iframe'){
			var maxW = parseInt(this.options.maxSize.w);//declare max width at top of script
			var maxH = parseInt(this.options.maxSize.h);//declare max height at top of script
			var w = dW = 0;//set initial final width to 0
			var h = dH = 0;//set initial final height to 0
			if(this.type=='image'){
				 ii = document.createElement('img');
				//var h = dH =  Number(ii.height);//this.contentObj.height;//retrieve image height
				//var w = dW = Number(ii.width);//this.contentObj.width;//retrieve image width

			}else if(this.type=='flash' || this.type=='flashVideo' || this.type=='iframe' || this.type=='real' || this.type=='windowsMedia' ){
				var m2=$(this.currentGallery[this.index]).attr('rel').match(/width:(\d+),height:(\d+)/);
				if(m2!=null){
					var w = dW =  Number(m2[1]);
					var h = dH =  Number(m2[2]);
				}else{
					var w = dW =  this.options.movieSize.w;
					var h = dH = this.options.movieSize.h;
				}
				//console.log(w);
				//console.log(h);
			}else if(this.type=='flashMp3'){
				var w = dW =  320;
				var h = dH = 70;
			}
			if(this.type == 'image'){
				var that = this;
				ii.onload=function(){
					//console.log(this.height,this.width);
						h = dH = this.height;
						w = dW = this.width;
						if((Number(w) +40) > $(window).width()){
							dW = that.contentObj.width=$(window).width()-60-30;
							dH=parseInt((h * dW) / w);
							if(dH>h) dH=h;
						}
						that.contentObj.height = dH;//resize image height
						that.contentObj.width = dW;//resize image width
						that.resize2();
						//console.log(that.contentObj.width, that.contentObj.height);
				}
				ii.src = that.contentObj.attr('src');
				ii = null;
			}else{
				this.contentObj.height = dH;
				this.contentObj.width = dW;
				this.resize2();
			}
		}
	  }
	}
	multiBox.prototype.resize2 = function(){
		//console.log(this.contentObj.height,this.contentObj.width);
		if(this.options.fixedTop){
				var top = this.options.fixedTop;
		}else{
			var top = (($(window).height() / 2) - ((Number(this.contentObj.height) + this.contentObj.xH) / 2) - parseInt(this.container.css('borderBottomWidth')) + $(window).scrollTop()) + this.options.offset.y;
			
		};
		var left = (($(window).width() / 2) - (this.contentObj.width / 2) - parseInt(this.container.css('borderBottomWidth'))) + this.options.offset.x;

		if(top < 0){
			top = 0;
		};
		if(left < 0){
			left = 0;
		};
		//console.log(top,left);
		this.container.stop();
		this.container.animate({
			'width': Number(this.contentObj.width),
			'height':Number(this.contentObj.height),
			'top': top,'left': left,
			'opacity': 1
		},400,'linear',(function(){this.container.css('overflow','visible');}).bind(this));
		this.timer = setTimeout(this.showContent.bind(this),0);
	}
	multiBox.prototype.showContent= function(){//alert('show');
		this.box.removeClass('MultiBoxLoading');
		this.removeContent();
		this.contentContainer = $('<div id="MultiBoxContentContainer"></div>').css({
				'opacity': 0,
				'width': this.contentObj.width,
				'height': (Number(this.contentObj.height)+this.contentObj.xH)
			}).appendTo(this.box);

		if(this.type == 'image'){
			//console.log(this.contentObj,this.contentContainer);
			this.contentObj.clone().appendTo(this.contentContainer);
		}else if(this.type == 'iframe'){
			$('<iframe frameborder=0 scrolling="auto" id="iFrame'+new Date().getTime()+'"></iframe>').width(this.contentObj.width).height(this.contentObj.height).attr('src',this.contentObj.url).appendTo(this.contentContainer);
		}else if(this.type == 'htmlelement'){
			this.elementContent.clone().css('display','block').appendTo(this.contentContainer);
		}/*else if(this.type == 'req'){
			var req = new Request.HTML({
				url: this.contentObj.url,
				method: 'get',
				evalScripts: true,
				onSuccess= function(responseTree,responseElements,responseHTML,responseJavaScript){
					$('MultiBoxContentContainer').adopt(responseElements);
				},
				onFailure= function() {
					$('MultiBoxContentContainer').attr('text','The request failed.');
				}
			}).send();
		}*/else{
			
			this.obj = $('<div id="MultiBoxMediaObject"></div>').appendTo(this.contentContainer);
			this.createEmbedObject();
			//if its a movie appendTo the object string into obj
			if(this.str){
			//	this.obj.attr('html',this.str);
			this.obj.html(this.str);
				this.str = null;//clear the value after using it
			};
		};
		

		this.contentContainer.animate({opacity:1},500,'easeOutExpo');
		
		this.title.html(this.contentToLoad.title);
		if (this.currentGallery) {
		this.number.html(this.contentToLoad.number+' of '+this.currentGallery.length);
		if(this.options.descClassName){
			//check to see if there is a desc override
			
			if($(this.currentGallery[this.index]).data('origRel')){
				//declare variables
				var ignoreDesc = false;
				var myRel = $(this.currentGallery[this.index]).data('origRel');
				var optArr = myRel.split(',');
				//loop through each split looking for 'noDesc'
				optArr.forEach(function(el){
					if(el.test('noDesc') == true){
						ignoreDesc = true;
					};
				});
			};
			//check and see if user wants to override default description setting for this element
			if(ignoreDesc != true){
				if(this.description.getFirst()){
					//this.description.getFirst().destroy();
					this.description.getFirst().remove();
				};
				if (this.contentToLoad.desc.appendTo) {
				this.contentToLoad.desc.appendTo(this.description).css('display','block');
				}
			};
		}
		}
		;

		if(this.options.showControls){
			this.timer = setTimeout($.proxy(this.showControls,this),600);
		};
		
		if(this.options.addDownload){
			var filePath = this.currentGallery[this.index].href;
			var fileName = this.currentGallery[this.index].href.substring(this.currentGallery[this.index].href.lastIndexOf('/')+1);
			this.download.html('<a href="'+this.options.pathToDownloadScript+'?FilePath='+filePath+'" title="Download File '+fileName+'">Download File</a>');
			//empty download if its not an image
			if(this.type != 'image'){
				this.download.empty();
			};
		};
	},
	
	multiBox.prototype.hideContent= function(){
		this.box.addClass('MultiBoxLoading');
		this.contentContainer.animate({
			opacity: 0
		},500,'easeOutExpo');
		setTimeout($.proxy(this.removeContent,this),500);
	},
	
	multiBox.prototype.removeContent= function(){ 
		if($('#MultiBoxMediaObject')){
			$('#MultiBoxMediaObject').empty();//so sound doesnt keep playing in IE
			$('#MultiBoxMediaObject').remove();//dispose() instead of destroy() as IE 6&7 crashes
		};
		if($('#MultiBoxContentContainer')){
			$('#MultiBoxContentContainer').remove();//dispose() instead of destroy() as IE 6&7 crashes
		};
		//if(this.type=='image') this.contentObj.removeAttr('src');
		if(this.description){
			this.description.empty();//empty description incase next element doesnt want to have one
		};
	},
	
	multiBox.prototype.showControls= function(){
		if(this.container.css('height') != 'auto'){
			this.containerDefaults.height = this.container.css('height');
			this.containerDefaults.backgroundColor = this.options.contentColor;
			//controls box isnt taken into consideration when positioning the container from the top so correct this
			if(this.options.recalcTop == true){
				if(parseInt(this.container.css('top')) > parseInt(this.controls.css('height'))/2){
					this.container.animate({'top':parseInt(this.container.css('top'))-parseInt(this.controls.css('height'))/2},400,'easeOutExpo'/*,(function(){this.container.css('overflow','visible');}).bind(this)*/);
				};
			};
		};
		
		this.container.css('height','auto');

		if(this.contentToLoad.number == 1){
			this.previousButton.addClass('MultiBoxPreviousDisabled');
		}else{
			this.previousButton.removeClass('MultiBoxPreviousDisabled');
		};
		if (this.currentGallery) {
		if(this.contentToLoad.number == this.currentGallery.length){
			this.nextButton.addClass('MultiBoxNextDisabled');
		}else{
			this.nextButton.removeClass('MultiBoxNextDisabled');
		}
		}
		;
		
		this.controlsContainer.animate({
			'height': this.controls.css('height')
		},300,'easeOutExpo');
		//this.resize.bind(this).delay(500);
	};
	
	multiBox.prototype.hideControls= function(num){
		this.controlsContainer.animate({'height': 0},300,(function(){
			this.container.css(this.containerDefaults);
		}).bind(this));
	};
	
	multiBox.prototype.next= function(){
		if(this.index < this.currentGallery.length-1){
			this.index++;
			this.openId = $(this.currentGallery[this.index]).attr('id');
			if(this.options.showControls){
				this.hideControls();
			};
			this.getOpenClosePos(this.currentGallery[this.index]);
			this.timer = setTimeout(this.hideContent.bind(this),500);
			this.timer = setTimeout(this.load.passx(this.currentGallery[this.index],this),1100);
		};
	},
	
	multiBox.prototype.previous= function(){
		if(this.index > 0){
			this.index--;
			this.openId = $(this.currentGallery[this.index]).attr('id');
			if(this.options.showControls){
				this.hideControls();
			};
			this.getOpenClosePos(this.currentGallery[this.index]);
			this.timer = setTimeout(this.hideContent.bind(this),500);
			this.timer = setTimeout(this.load.passx(this.currentGallery[this.index],this),1000);
		};
	},
	
	multiBox.prototype.createEmbedObject= function(){
		if(this.type == 'flash'){
			var url = this.contentObj.url;
			var swfHolder = $('<div></div>').attr({id: 'swfHolder'}).appendTo(this.obj);
			var flashObj = new Swiff(url, {
				id: url,
				container: swfHolder,
				width: this.contentObj.width,
				height: this.contentObj.height
			});
		}else if(this.type == 'flashVideo'){
			var url = this.contentObj.url;
			var swfHolder = $('<div></div>').attr({id: 'swfHolder'}).appendTo(this.obj);
			var flashObj = new Swiff(this.options.path+'flvplayer.swf', {
				id: url,
				container: swfHolder,
				width: this.contentObj.width,
				height: (Number(this.contentObj.height)+this.contentObj.xH),
				vars: {
					path: url
				}
			});
		}else if(this.type == 'flashMp3'){
			var url = this.contentObj.url;
			var swfHolder = $('<div id="swfHolder"></div>').appendTo(this.obj);
			var flashObj = new Swiff(this.options.path+'mp3player.swf', {
				id: url,
				container: swfHolder,
				width: this.contentObj.width,
				height: (Number(this.contentObj.height)+this.contentObj.xH),
				vars: {
					path: url
				}
			});
		}else if(this.type == 'quicktime'){
			var url = this.contentObj.url;
			this.str = '<object  type="video/quicktime" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab"';
			this.str += ' width="'+this.contentObj.width+'" height="'+this.contentObj.height+'">';
			this.str += '<param name="src" value="'+url+'" />';
			this.str += '<param name="autoplay" value="true" />';
			this.str += '<param name="controller" value="true" />';
			this.str += '<param name="enablejavascript" value="true" />';
			this.str += '<embed src="'+url+'" autoplay="true" pluginspage="http://www.apple.com/quicktime/download/" width="'+this.contentObj.width+'" height="'+this.contentObj.height+'"></embed>';
			this.str += '</object>';
		}else if(this.type == 'windowsMedia'){
			var url = this.contentObj.url;
			this.str = '<object  type="application/x-oleobject" classid="CLSID:22D6f312-B0F6-11D0-94AB-0080C74C7E95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,7,1112"';
			this.str += ' width="'+this.contentObj.width+'" height="'+this.contentObj.height+'">';
			this.str += '<param name="filename" value="'+url+'" />';
			this.str += '<param name="Showcontrols" value="true" />';
			this.str += '<param name="autoStart" value="true" />';
			this.str += '<embed type="application/x-mplayer2" src="'+url+'" Showcontrols="true" autoStart="true" width="'+this.contentObj.width+'" height="'+this.contentObj.height+'"></embed>';
			this.str += '</object>';
		}else if(this.type == 'real'){
			var url = this.contentObj.url;
			this.str = '<object classid="clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA"';
			this.str += ' width="'+this.contentObj.width+'" height="'+this.contentObj.height+'">';
			this.str += '<param name="src" value="'+url+'" />';
			this.str += '<param name="controls" value="ImageWindow" />';
			this.str += '<param name="autostart" value="true" />';
			this.str += '<embed src="'+url+'" controls="ImageWindow" autostart="true" width="'+this.contentObj.width+'" height="'+this.contentObj.height+'"></embed>';
			this.str += '</object>';
		};
	};

	multiBox.prototype.addOverlayIcon=function(element){
		//loop through each instance
		$(element).each(function(i,el){
			//if link contains an image ad overlay
			if($(el).getElement('img')){
				//add position:relative to them so that icon is contained
				$(el).css('position','relative');
				//appendTo a new div that is the overlay icon
				var overlayIcon = $('<div></div>').appendTo(el);
				overlayIcon.addClass('OverlayIcon');
				//IE6 causes too many issues due to lack of PNG support
				if(!Browser.Engine.trident4 && 0){
					overlayIcon.css('opacity',0);
					overlayIcon.attr('tween',{duration:3000,transition:Fx.Transitions.Expo.easeIn}).tween('opacity',1);
				};
			};
		});
	},
	
	multiBox.prototype.addRollover=function(element){
		$(element).each(function(i,el){
			//if link contains an image ad overlay
			
			var tmp=$('img',el).eq(0);
			if(tmp.length>0){
				//add event listeners
				$(el).bind(
					'mouseenter', function(){
						tmp.data('tween',{'duration':200,'easing':'linear'}).animate({'opacity':0.5,'duration':0,'easing':'linear','queue':false});
						//tmp.animate({'width':0},0,'linear');
					});
				$(el).bind(
					'mouseleave', function(){
						tmp.data('tween',{'duration':400,'easing':'linear'}).animate({'opacity':1,'duration':0,'easing':'linear','queue':false});
						//tmp.animate({'width':0},0,'linear');
					});
			};
		});
		//console.log(2);
	},
	
	multiBox.prototype.addChain=function(element){
		//create new array to hold all links with images to chain through
		var chainArray = [];
		//push link into chainArray if it contains an image
		$(element).each(function(i,el){
			//detect whether link contains image
			if($(el).getElement('img')){
				chainArray.push(el);
			};
		});
		//now chain through each item in the new array
		chainArray.forEach(function(el,i){
			//detect whether link contains image
			if($(el).getElement('img')){
				//chain through each multibox link that contains an image
				var HoverMe = new Chain();
				var hoverOn = function(){
					$(el).getElement('img').data('tween',{duration:200,'easing':'linear'}).animate({'opacity':0.5},0);
				};
				var hoverOff = function(){
					$(el).getElement('img').data('tween',{duration:400,'easing':'linear'}).animate({'opacity':1},0);
				};
				HoverMe.chain(hoverOn);
				HoverMe.chain(hoverOff);
				HoverMe.callChain.delay(2000+(i+1)*1000,HoverMe);
				HoverMe.callChain.delay((i+2)*1000,HoverMe);
			};
		});
	},
	
	multiBox.prototype.addDownload=function(element){
		this.download = $('<div></div>').addClass('MultiBoxDownload').appendTo(this.controls).css('marginLeft',0);
	},
	
	multiBox.prototype.addTips=function(element){
		$(element).each(function(i,el){
			//add MooTools tips
			if($(el).attr('title')){
				var toolTips = new Tips($(el), {
					offsets: {'x':16,'y':5},
					className: 'mbTips'
				});
			};
			//remove title so dont get duplication of title and MooTools tips
			if($(el).getElement('img')){
				if($(el).getElement('img').attr('title')){
					$(el).getElement('img').removeAttr('title');
				};
				if($(el).getElement('img').attr('alt')){
					$(el).getElement('img').removeAttr('alt');
				};
			};
		});
	},
	
	multiBox.prototype.autoOpen=function(element){
		//make sure element number is valid
		if(this.options.autoOpen > $(this.options.mbClass).length){
			this.options.autoOpen = $(this.options.mbClass).length;
		};
		//auto open multiBox on page
		this.open(this.options.autoOpen-1,element);
	}
})(jQuery);
