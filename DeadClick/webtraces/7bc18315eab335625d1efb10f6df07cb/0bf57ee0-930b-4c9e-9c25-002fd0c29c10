/**
* Sliderman.js 
* Version: 1.2.0
* Author: Taras Ozarko (tozarko@gmail.com)
*
* (c) 2010 Devtrix. All rights reserved. http://www.devtrix.net/sliderman/
**/

var Sliderman = new function(){
	var Sliderman = this;
	
	function random(l){
		r = Math.round(Math.random()*(l+1));
		if(r > 0 && r < l+1) r--;
		else r = random(l);
		return r;
	}//random
	
	function foreach(o, f){
		for(var k in o){
			if(o.hasOwnProperty(k) && f(k,o[k],o)) return;
		}
	}//foreach
	
	function addElementEvent(o,e,f){
		var of = o[e];
		o[e] = typeof of != 'function' ? f : function(){of();f();};
	}//addElementEvent
	
	var _loadImage = [];
	function loadImage(s,f,always_show_loading){
		var l = function(){if(_loadImage[s]){if(f)f(s);}else{var i=newElement('IMG');i.onload=function(){_loadImage[s]=true;if(f)f(s);};i.src=s;}}
		if(always_show_loading) setTimeout(l, typeof(always_show_loading) == 'number' ? always_show_loading : 1000);
		else l();
	}//loadImage
	
	function array_copy(a){
		if(a.constructor == Array) var r = [];
		else var r = {};
		
		foreach(a, function(i){
			r[i] = typeof(a[i]) != 'object' ? a[i] : array_copy(a[i]);
		});
		
		return r;
	}//array_copy
	
	function now(){
		return (new Date()).getTime();
	}//now
	
	function eq(a, b){
		return String(a).replace(/^\s+/, '').replace(/\s+$/, '').toLowerCase() == String(b).replace(/^\s+/, '').replace(/\s+$/, '').toLowerCase();
	}//eq
	
	function array_search(arr, a, b){
		var result = false;
		if(!b){
			foreach(arr, function(i){
				if(eq(arr[i], b)){
					result = i;
					return true;
				}
			});
		}
		else{
			foreach(arr, function(i){
				if(eq(arr[i][a], b)){
					result = i;
					return true;
				}
			});
		}
		return result;
	}//array_search
	
	function validateOption(a, b){
		b = b.split(',');
		var result;
		foreach(b, function(i){
			result = b[i];
			if(eq(a, b[i])) return true;
		});
		return result;
	}//validateOption
	
	var setOpacity;
	function setOpacityInit(){
		if(setOpacity) return;
		var p, b = document.body, s = b.style;
		if (typeof s.opacity == 'string') p = 'opacity';
	  else if (typeof s.MozOpacity == 'string') p = 'MozOpacity';
	  else if (typeof s.KhtmlOpacity == 'string') p = 'KhtmlOpacity';
	  else if (b.filters && navigator.appVersion.match(/MSIE ([\d.]+);/)[1]>=5.5) p = 'filter';
	  if(p == 'filter'){
			setOpacity = function(style, v){
				if(v > 1) v = 1;
				else if(v < 0) v = 0;
			  style[p] = "alpha(opacity=" + Math.round(v*100) + ")";
			}
		}else if(p){
			setOpacity = function(style, v){
				if(v > 1) v = 1;
				else if(v < 0) v = 0;
			  style[p] = v.toFixed(2);
			}
		}else setOpacity = ef
	}//setOpacityInit
	
	function setStyle(style, property, value){
		if(typeof(value) == 'string') style[property] = value;
		else if(property == 'clip') style[property] = 'rect('+Math.round(value[0])+'px, '+Math.round(value[1])+'px, '+Math.round(value[2])+'px, '+Math.round(value[3])+'px)';
		else if(property == 'opacity') setOpacity(style, value);
		else style[property] = Math.round(value)+'px';
	}//setStyle
	function setStyles(style, properties){
		foreach(properties, function(property){
			setStyle(style, property, properties[property]);
		});
	}
	function hide(style){style.display = 'none';}
	function show(style){style.display = '';}
	
	function newElement(tagName, styles){
		var e = document.createElement(tagName);
		if(styles) setStyles(e.style, styles);
		return e;
	}//newElement

	var EffectsArr = [];
	function Effects(parameters){
		var effect = parameters.effect,	display = parameters.display;
		if(!effect) effect = {};
		if(parameters.contentmode) effect.zoom = false;
		effect.interval = effect.interval || 40;
		effect.duration = effect.duration || 200;
		effect.delay = effect.delay || 0;
		var framesCount = Math.round(effect.duration / effect.interval);
		var index, piece, r, image, startStylesArr = [], AnimateArr = [], needAnimate = [], AnimateItemsArr = [], styleStart, styleEnd, styleDif;
		
		var container = newElement('div', {width: display.width, height: display.height, position: 'absolute', top: 0, left: 0, overflow: 'hidden'})
		parameters.container.appendChild(container);
		
		var pieces = {cols: effect.cols ? effect.cols : 1, rows: effect.rows ? effect.rows : 1};
		pieces.count = pieces.cols*pieces.rows;
		pieces.width = display.width / pieces.cols, pieces.height = display.height / pieces.rows;
		for(var c = 0; c < pieces.cols; c++) for(var r = 0; r < pieces.rows; r++) pieces[c+','+r] = [r*pieces.height, c*pieces.width+pieces.width, r*pieces.height+pieces.height, c*pieces.width];
		
		var optionsCopy = array_copy(effect);
		var effectsInvers = array_copy(effect);
		effectsInvers.top = optionsCopy.bottom;
		effectsInvers.bottom = optionsCopy.top;
		effectsInvers.left = optionsCopy.right;
		effectsInvers.right = optionsCopy.left;
		
		effect.order = validateOption(effect.order, 'straight,swirl,snake,straight_stairs,random');
		var orderArr = doOrder(pieces.cols, pieces.rows, effect.order, effect.road, effect.reverse);
		
		var effectsOptStr = effect.order == 'random' ? now() : [
			effect.interval, effect.duration, effect.delay, effect.cols, effect.rows,
			effect.top, effect.right, effect.bottom, effect.left,
			effect.fade, effect.zoom, effect.move, effect.chess,
			effect.order, effect.road, effect.reverse
		].join(',');
		
		if(EffectsArr[effectsOptStr]){
			startStylesArr = EffectsArr[effectsOptStr].startStylesArr;
			AnimateArr = EffectsArr[effectsOptStr].AnimateArr;
			needAnimate = EffectsArr[effectsOptStr].needAnimate;
		}else{
			for(r = 0; r < pieces.rows; r++) for(c = 0; c < pieces.cols; c++){
				index = orderArr[c+','+r];
				
				if(effect.chess && index % 2 == 1) effect = effectsInvers;
				else effect = optionsCopy;
				
				styleStart = {top: 0, left: 0, opacity: 1, width: display.width, height: display.height, overflow: 'hidden'};
				styleEnd = array_copy(styleStart); piece = array_copy(pieces[c+','+r]);
				
				if(effect.fade) styleStart.opacity = 0;
				
				if(effect.top && effect.bottom) piece[0] = piece[2] = (piece[0] + piece[2]) / 2;
				else if(effect.top) piece[2] -= pieces.height;
				else if(effect.bottom) piece[0] += pieces.height;
				if(effect.left && effect.right) piece[1] = piece[3] = (piece[1] + piece[3]) / 2;
				else if(effect.left) piece[1] -= pieces.width;
				else if(effect.right) piece[3] += pieces.width;
				
				if(effect.zoom){
					styleStart.left = pieces[c+','+r][3];
					styleStart.top = pieces[c+','+r][0];
					if(effect.left && effect.right) styleStart.left += pieces.width / 2;
					else if(effect.right) styleStart.left += pieces.width;
					else if(!effect.left) styleStart.left = 0;
					if(effect.top && effect.bottom) styleStart.top += pieces.height / 2;
					else if(effect.bottom) styleStart.top += pieces.height;
					else if(!effect.top) styleStart.top = 0;
					if(effect.left || effect.right) piece[1] = piece[3] = 0;
					if(effect.top || effect.bottom) piece[0] = piece[2] = 0;
					styleStart.width = effect.left || effect.right ? 0 : display.width;
					styleStart.height = effect.top || effect.bottom ? 0 : display.height;
				}
				
				if(effect.move){
					if(effect.top){
						styleStart.top = parseInt(styleStart.top)-pieces.height;
						piece[0] += pieces.height; piece[2] += pieces.height;
					}
					if(effect.bottom){
						styleStart.top = parseInt(styleStart.top)+pieces.height;
						piece[0] -= pieces.height; piece[2] -= pieces.height;
					}
					if(effect.left){
						styleStart.left = parseInt(styleStart.left)-pieces.width;
						piece[1] += pieces.width; piece[3] += pieces.width;
					}
					if(effect.right){
						styleStart.left = parseInt(styleStart.left)+pieces.width;
						piece[1] -= pieces.width; piece[3] -= pieces.width;
					}
				}
				
				styleStart.clip = piece;
				styleEnd.clip = pieces[c+','+r];
				
				styleDif = [];
				foreach(styleEnd, function(property){
					if(styleStart[property].toString() != styleEnd[property].toString()){
						styleDif[property] = [];
						if(property == 'clip'){
							foreach(styleStart[property], function(n){
								styleDif[property][n] = styleEnd[property][n] - styleStart[property][n];
							});
						}else styleDif[property] = styleEnd[property] - styleStart[property];
						needAnimate[index] = true;
					}
				});
				
				startStylesArr[index] = styleStart; AnimateArr[index] = [];
				if(effect.delay) for(var n = 0; n < Math.round(index*effect.delay/effect.interval); n++) AnimateArr[index].push(null);
				
				var frameN;
				if(!needAnimate[index]) AnimateArr[index].push({display: ''});
				else for(frameN = 1; frameN <= framesCount; frameN++){
					progress = frameN/framesCount;
					progress = -Math.cos(progress*Math.PI)/2 + 0.5;
					var style_c = [];
					if(frameN == framesCount) style_c = styleEnd;
					else{
						foreach(styleDif, function(property){
							value = [];
							if(property == 'clip'){
								foreach(styleDif[property], function(n){
									value[n] = styleStart[property][n]+styleDif[property][n]*progress;
								});
							}else value = styleStart[property]+styleDif[property]*progress;
							style_c[property] = value;
						});
					}
					AnimateArr[index].push(style_c);
				}
				
			}//for
			EffectsArr[effectsOptStr] = {startStylesArr: startStylesArr, AnimateArr: AnimateArr, needAnimate: needAnimate};
		}
		
		for(r = 0; r < pieces.rows; r++) for(c = 0; c < pieces.cols; c++){
			index = orderArr[c+','+r];
			if(parameters.contentmode){
				image = newElement('DIV', startStylesArr[index]);
				image.appendChild(parameters.src.cloneNode(true));
			}else{
				image = newElement('IMG', startStylesArr[index]);
				image.src = parameters.src;
			}
			var style = image.style;
			style.position = 'absolute';
			container.appendChild(image);
			AnimateItemsArr[index] = style;
			if(!needAnimate[index]) hide(AnimateItemsArr[index]);
		}
		
		//ANIMATE
		var time_s = now();
		var framesCountAll = AnimateArr[AnimateArr.length-1].length;
		var AnimateItem, AnimateItemsComplete = [], timerFuncStatus = true, timerFunc = function(){
			if(timerFuncStatus){
				var frameC = Math.ceil((now() - time_s) / effect.interval);
				frameC = frameC >= framesCountAll ? framesCountAll-1 : frameC-1;
				foreach(AnimateArr, function(index){
					AnimateItem = frameC > AnimateArr[index].length-1 ? AnimateArr[index].length-1 : frameC;
					if(AnimateArr[index][AnimateItem] && !AnimateItemsComplete[index+','+AnimateItem]){
						setStyles(AnimateItemsArr[index], AnimateArr[index][AnimateItem]);
						AnimateItemsComplete[index+','+AnimateItem] = true;
					}
				});
				if(frameC == framesCountAll-1){
					if(pieces.count > 1){
						container.innerHTML = '';
						if(parameters.contentmode) container.appendChild(parameters.src);
						else container.innerHTML = '<img src="'+parameters.src+'" width="'+display.width+'" height="'+display.height+'" />';
					}
					parameters.callback(container);
					timerFuncStatus = false;
				}
			}
			return timerFuncStatus;
		};
		var animateInterval = setInterval(function(){
			if(!timerFunc()) clearInterval(animateInterval);
		}, effect.interval);
		
		
}//Effects

	var OrderArr = [];
	function doOrder(cols, rows, order, road, reverse){
		cols = parseInt(cols); rows = parseInt(rows);
		var arr = [], tmp = [], i = 0, c = 0, r = 0, count = cols*rows, cl = cols - 1, rl = rows - 1, il = count - 1, func;
		if(!road) road = 'RB';
		function map(f){for(r = 0; r < rows; r++) for(c = 0; c < cols; c++) f();}
		
		var OrderOptStr = [cols, rows, order, road, reverse].join(',');
		if(!OrderArr[OrderOptStr]){
			if(count > 1){
				
				switch(order){
					case 'straight':
						switch(road){
							case 'BL': func = function(){arr[c+','+r] = il-(c*rows+(rl-r));}; break;
							case 'RT': func = function(){arr[c+','+r] = il-(r*cols+(cl-c));}; break;
							case 'TL': func = function(){arr[c+','+r] = il-(c*rows+r);};
							case 'LT': func = function(){arr[c+','+r] = il-(r*cols+c);}; break;
							case 'BR': func = function(){arr[c+','+r] = c*rows+r;}; break;
							case 'LB': func = function(){arr[c+','+r] = r*cols+(cl-c);}; break;
							case 'TR': func = function(){arr[c+','+r] = c*rows+(rl-r);}; break;
							default: func = function(){arr[c+','+r] = r*cols+c;}; break;//'RB'
						}
						map(func);
					break;
					case 'swirl':
						var courses, course = 0;
						switch(road){
							case 'BL': c = cl; r = 0; courses = ['r+', 'c-', 'r-', 'c+']; break;
							case 'RT': c = 0; r = rl; courses = ['c+', 'r-', 'c-', 'r+']; break;
							case 'TL': c = cl; r = rl; courses = ['r-', 'c-', 'r+', 'c+']; break;
							case 'LT': c = cl; r = rl; courses = ['c-', 'r-', 'c+', 'r+']; break;
							case 'BR': c = 0; r = 0; courses = ['r+', 'c+', 'r-', 'c-']; break;
							case 'LB': c = cl; r = 0; courses = ['c-', 'r+', 'c+', 'r-']; break;
							case 'TR': c = 0; r = rl; courses = ['r-', 'c+', 'r+', 'c-']; break;
							default: c = 0; r = 0; courses = ['c+', 'r+', 'c-', 'r-']; break;//'RB'
						}
						i = 0;
						while(i < cols*rows){
							if(c >= 0 && c < cols && r >= 0 && r < rows && typeof(arr[c+','+r]) == 'undefined') arr[c+','+r] = i++;
							else switch(courses[course++%courses.length]){case 'c+': c--; break; case 'r+': r--; break; case 'c-': c++; break; case 'r-': r++; break;}
							switch(courses[course%courses.length]){case 'c+': c++; break; case 'r+': r++; break; case 'c-': c--; break; case 'r-': r--; break;}
						}
					break;
					case 'snake':
						var courses, course = 0;
						switch(road){
							case 'BL': c = cl; r = 0; courses = ['r+', 'c-', 'r-', 'c-']; break;
							case 'RT': c = 0; r = rl; courses = ['c+', 'r-', 'c-', 'r-']; break;
							case 'TL': c = cl; r = rl; courses = ['r-', 'c-', 'r+', 'c-']; break;
							case 'LT': c = cl; r = rl; courses = ['c-', 'r-', 'c+', 'r-']; break;
							case 'BR': c = 0; r = 0; courses = ['r+', 'c+', 'r-', 'c+']; break;
							case 'LB': c = cl; r = 0; courses = ['c-', 'r+', 'c+', 'r+']; break;
							case 'TR': c = 0; r = rl; courses = ['r-', 'c+', 'r+', 'c+']; break;
							default: c = 0; r = 0; courses = ['c+', 'r+', 'c-', 'r+']; break;//'RB'
						}
						i = 0;
						while(i < cols*rows){
							if(c >= 0 && c < cols && r >= 0 && r < rows && typeof(arr[c+','+r]) == 'undefined'){
								arr[c+','+r] = i++;
								switch(courses[course%courses.length]){case 'c+': c++; break; case 'r+': r++; break; case 'c-': c--; break; case 'r-': r--; break;}
							}
							else{
								switch(courses[course++%courses.length]){case 'c+': c--; break; case 'r+': r--; break; case 'c-': c++; break; case 'r-': r++; break;}
								switch(courses[course++%courses.length]){case 'c+': c++; break; case 'r+': r++; break; case 'c-': c--; break; case 'r-': r--; break;}
							}
						}
					break;
					case 'straight_stairs':
						switch(road){
							case 'BL': case 'TR': case 'TL': case 'BR': var C = 0, R = 0; break;
							case 'LB': case 'RT': case 'LT': case 'RB': default: var C = cl, R = 0; break;
						}
						c = C; r = R;
						while(i < count){
							if(road.indexOf('T') == 1 || road.indexOf('R') == 1) arr[c+','+r] = il - i++;
							else arr[c+','+r] = i++;
							switch(road){
								case 'BL': case 'TR': c--; r++; break;
								case 'TL': case 'BR': c++; r--; break;
								case 'LB': case 'RT': c--; r--; break;
								case 'RB': case 'LT': default: c++; r++; break;
							}
							if(c < 0 || r < 0 || c > cl || r > rl){
								switch(road){
									case 'BL': case 'TR': C++; break;
									case 'LB': case 'RT': case 'TL': case 'BR': R++; break;
									case 'RB': case 'LT': default: C--; break;
								}
								if(C < 0 || R < 0 || C > cl || R > rl){
									switch(road){
										case 'BL': case 'TR': C = cl; R++; break;
										case 'TL': case 'BR': R = rl; C++; break;
										case 'LB': case 'RT': R = rl; C--; break;
										case 'RB': case 'LT': default: C = 0; R++; break;
									}
									if(R > rl) R = rl; else if(R < 0) R = 0; else if(C > cl) C = cl; else if(C < 0) C = 0;
								}
								r = R; c = C;
							}
						}
					break;
				}
				
				if(reverse) foreach(arr, function(i){arr[i] = il - arr[i];});
				
			}else arr['0,0'] = 0;
				
			OrderArr[OrderOptStr] = arr;
		}
		
		if(order == 'random'){
			map(function(){tmp.push(c+','+r)});
			tmp.sort(function(a,b){return Math.random() > 0.5;});
			for(var i = 0; i < cols*rows; i++) arr[tmp[i]] = i;
			OrderArr[OrderOptStr] = arr;
		}
		return OrderArr[OrderOptStr];
	}//doOrder
	
	var _effectName = 0;
	function effectName(){
		return 'Sliderman-nameless-effect-'+_effectName++;
	}//effectName
	
	var globalEffects = [];
	Sliderman.effect = function(e){
		if(e){
			var n = -1;
			if(e.name){
				var globalEffectsId = array_search(globalEffects, 'name', e.name);
				if(globalEffectsId) n = globalEffectsId;
			}else e.name = effectName();
			if(n >= 0) globalEffects[n] = e;
			else globalEffects.push(e);
		}
	}//Sliderman.effect
	
	Sliderman.effect({name: 'fade', fade: true, duration: 400});
	Sliderman.effect({name: 'move', left: true, move: true, duration: 400});
	Sliderman.effect({name: 'stairs', cols: 7, rows: 5, delay: 30, order: 'straight_stairs', road: 'BL', fade: true});
	Sliderman.effect({name: 'blinds', cols: 10, delay: 100, duration: 400, order: 'straight', right: true, zoom: true, fade: true});
	Sliderman.effect({name: 'rain', cols: 10, delay: 100, duration: 400, order: 'straight', top: true, fade: true});
	
	Sliderman.slider = function(parameters){
		setOpacityInit();
		
		var Slider = {}, current, previous, prevImg, status = 'free', isHover = false, images = [], descriptions = [], links = [], ef = function(){};
		
		//EVENTS
		var events = parameters.events, eventCall = events ? function(e){if(events[e] && typeof(events[e]) == 'function') events[e](Slider);} : ef;
		var contentmode = parameters.contentmode;
		
		//SLIDER EFECTS		
		var effects = [];
		var previousEffect = -1;
		var addEffect = function(e){
			if(typeof(e) == 'string'){
				e = e.split(',');
				if(e.length == 1){
					var globalEffectsId = array_search(globalEffects, 'name', e);
					if(globalEffectsId) addEffect(globalEffects[globalEffectsId])
				}else for(var i  = 0; i < e.length; i++) addEffect(e[i]);
			}else if(e){
				if(!e.name) e.name = effectName();
				var effectsId = array_search(effects, 'name', e.name);
				if(!effectsId) effectsId = effects.length;
				effects[effectsId] = array_copy(e);
			}
		}//addEffect
		var getEffect = function(){
			var n = 0;
			if(effects.length > 1){
				n = random(effects.length);
				if(previousEffect == n) n++;
				n %= effects.length;
				previousEffect = n;
			}
			return effects[n];
		}//getEffect
		if(parameters.effects){
			if(parameters.effects.constructor == Array) for(var i = 0; i < parameters.effects.length; i++) addEffect(parameters.effects[i]);
			else addEffect(parameters.effects);
		}
		if(!effects.length) effects = array_copy(globalEffects);
		
		//OPTIONS
		var display = parameters.display || {};
		display.width = parameters.width;
		display.height = parameters.height;
		var loading = display.loading || {};
		var description = display.description || null;
		var navigation = display.navigation || null;
		var buttons = display.buttons || null;
		
		var styleDef = {width: display.width, height: display.height, position: 'absolute', top: 0, left: 0, display: 'block'};
		
		var mainCont = document.getElementById(parameters.container);
		addElementEvent(mainCont, 'onmouseover', function(){isHover = true;
			if(buttons && buttons.hide) show(buttonsCont.style);
			if(description && description.hide && !contentmode) show(descriptionCont.style);
			if(display.pause) autoplay(false);
		});
		addElementEvent(mainCont, 'onmouseout', function(){isHover = false;
			if(buttons && buttons.hide) hide(buttonsCont.style);
			if(description && description.hide && !contentmode) hide(descriptionCont.style);
			if(display.pause) autoplay(true);
		});
		
		//GET CONTENT
		if(contentmode){
			for(var i = 0; i < mainCont.childNodes.length; i++){
				if(mainCont.childNodes[i].nodeType == 1){
					images.push(mainCont.childNodes[i].cloneNode(true));
					hide(mainCont.childNodes[i].style);
				}
			}
		}else{
			for(var i = 0; i < mainCont.childNodes.length; i++){
				if(mainCont.childNodes[i].nodeType == 1){
					if(mainCont.childNodes[i].tagName == 'A'){
						var img = mainCont.childNodes[i].getElementsByTagName('IMG');
						if(img.length){
							images.push(img[0].src);
							links[images.length-1] = mainCont.childNodes[i];
						}else descriptions[images.length-1] = mainCont.childNodes[i];
					}else if(mainCont.childNodes[i].tagName == 'IMG'){
						images.push(mainCont.childNodes[i].src);
						if(mainCont.childNodes[i].useMap){
							var maps = document.getElementsByTagName('MAP'), map;
							if(maps.length){
								for(var m = 0; m < maps.length; m++){
									if(maps[m].name && mainCont.childNodes[i].useMap.replace(/^[^#]*#/, '') == maps[m].name) map = maps[m];
								}
							}
							if(map) links[images.length-1] = map;
						}
					}else if(mainCont.childNodes[i].tagName == 'MAP') continue;
					else descriptions[images.length-1] = mainCont.childNodes[i];
					hide(mainCont.childNodes[i].style);
				}
			}
			for(var i = 0; i < images.length; i++) loadImage(images[i]);
		}
		
		//CONTAINERS
		var sliderCont = newElement('DIV', {width: display.width, height: display.height, position: 'relative'}); mainCont.appendChild(sliderCont);
		var imagesCont = newElement('DIV', styleDef); sliderCont.appendChild(imagesCont);
		//var partsCont = newElement('DIV', styleDef); sliderCont.appendChild(partsCont);
		partsCont = sliderCont;
		
		//LINKS
		if(contentmode) var linkUpd = ef;
		else{
			var lnk = newElement('DIV', styleDef); partsCont.appendChild(lnk);
			var linkUpd = function(){
				lnk.innerHTML = '';
				value = links[current];
				if(value){
					if(value.tagName == 'MAP'){
						var a = newElement('IMG', styleDef);
						a.src = images[current];
						a.useMap = '#'+value.name;
					}else{
						var a = newElement('A', styleDef);
						a.href = value.href;
						a.target = value.target;
					}
					setStyles(a.style, {opacity: 0, background: '#000000'})
					a.onfocus = function(){this.blur();};
					lnk.appendChild(a);
				}
			}
		}
		
		//LOADING
		if(contentmode) var showLoading = ef;
		else{
			var loadingCont = newElement('DIV'); partsCont.appendChild(loadingCont);
			if(loading.background){
				var loadingBgStyle = array_copy(styleDef);
				loadingBgStyle.background = loading.background;
				if(loading.opacity) loadingBgStyle.opacity = loading.opacity;
				loadingCont.appendChild(newElement('DIV', loadingBgStyle));
			}
			if(loading.image){
				var loadingImgStyle = array_copy(styleDef);
				loadingImgStyle.background = 'url('+(loading.image)+') no-repeat center center';
				loadingCont.appendChild(newElement('DIV', loadingImgStyle));
			}
			var showLoading = function(a){
				if(a) show(loadingCont.style);
				else hide(loadingCont.style);
				status = a ? 'loading' : 'free';
			}
		}
		
		//DESCRIPTION
		if(description && !contentmode){
			var descriptionCont = newElement('DIV'); partsCont.appendChild(descriptionCont);
			if(description.hide) hide(descriptionCont.style);
			
			var descriptionStl = {position: 'absolute', overflow: 'hidden', textAlign: 'left'};
			if(!description) description = [];
			description.position = validateOption(description.position, 'top,left,right,bottom')
			descriptionStl.background = description.background || 'white';
			descriptionStl.opacity = description.opacity || 0.5;
			descriptionStl.width = description.position == 'top' || description.position == 'bottom' ? display.width : description.width || display.width*0.2;
			descriptionStl.height = description.position == 'left' || description.position == 'right' ? display.height : description.height || display.height*0.2;
			descriptionStl[description.position == 'bottom'?'bottom':'top'] = 0;
			descriptionStl[description.position == 'right'?'right':'left'] = 0;
				
			var descBg = newElement('DIV', descriptionStl); descriptionCont.appendChild(descBg);
			descriptionStl.opacity = 1; descriptionStl.background = '';
			var desc = newElement('DIV', descriptionStl); descriptionCont.appendChild(desc);
			
			var descriptionShow = function(){
				desc.innerHTML = '';
				setStyle(descriptionCont.style, 'visibility', 'hidden');
				var value = descriptions[current];
				if(value){
					setStyle(descriptionCont.style, 'visibility', 'visible');
					value = value.cloneNode(true);
					show(value.style);
					desc.appendChild(value);
					if(isHover) show(descriptionCont.style);
				}
			}
		}else var descriptionShow = ef
		
		//BUTTONS
		if(buttons){
			var buttonsCont = newElement('DIV'); partsCont.appendChild(buttonsCont);
			if(buttons.hide) hide(buttonsCont.style);
			var btnPrev = newElement('A'); buttonsCont.appendChild(btnPrev);
			btnPrev.href = 'javascript:void(0);';
			var btnNext = btnPrev.cloneNode(true); buttonsCont.appendChild(btnNext);
			btnPrev.onfocus = function(){this.blur();}
			btnNext.onfocus = function(){this.blur();}
			btnPrev.onclick = function(){Slider.prev();}
			btnNext.onclick = function(){Slider.next();}
			if(buttons.prev.label) btnPrev.innerHTML = typeof(buttons.prev.label) == 'string' ? buttons.prev.label : 'prev';
			if(buttons.prev.label) btnNext.innerHTML = typeof(buttons.next.label) == 'string' ? buttons.next.label : 'next';
			if(buttons.prev.className) btnPrev.className = buttons.prev.className;
			if(buttons.next.className) btnNext.className = buttons.next.className;
			if(buttons.opacity || buttons.prev.opacity) setOpacity(btnPrev.style, buttons.opacity || buttons.prev.opacity);
			if(buttons.opacity || buttons.next.opacity) setOpacity(btnNext.style, buttons.opacity || buttons.next.opacity);
		}
		
		//NAVIGATION
		if(navigation){
			var navigationCont = document.getElementById(navigation.container);
			var a;
			
			if(navigation.prev){
				a = newElement('A');
				if(navigation.prev.label) a.innerHTML = typeof(navigation.prev.label) == 'string' ? navigation.prev.label : 'Prev';
				if(navigation.prev.className) a.className = navigation.prev.className;
				a.href = 'javascript:void(0);';
				a.onfocus = function(){this.blur();};
				a.onclick = function(){Slider.prev();};
				navigationCont.appendChild(a);
			}
			
			var navigationLinks = [];
			for(var i = 0; i < images.length; i++){
				a = newElement('A');
				if(navigation.label) a.innerHTML = typeof(navigation.label) == 'string' ? navigation.label : i+1;
				if(navigation.className) a.className = navigation.className;
				a.href = 'javascript:void(0);';
				a.id = parameters.container+'_SliderNavigation'+i;
				a.onfocus = function(){this.blur();};
				a.onclick = function(){Slider.go(this.id.replace(/[^\d]+/g, ''));};
				navigationLinks.push(a);
				navigationCont.appendChild(a);
			}
			
			if(navigation.next){
				a = newElement('A');
				if(navigation.next.label) a.innerHTML = typeof(navigation.next.label) == 'string' ? navigation.next.label : 'Next';
				if(navigation.next.className) a.className = navigation.next.className;
				a.href = 'javascript:void(0);';
				a.onfocus = function(){this.blur();};
				a.onclick = function(){Slider.next();};
				navigationCont.appendChild(a);
			}
			
			var navigationUpd = function(){
				for(var i = 0; i < navigationLinks.length; i++) navigationLinks[i].className = navigationLinks[i].className.replace(/\bactive\b/g, '');
				navigationLinks[current].className += ' active';
			}
		}else var navigationUpd = ef
		
		//AUTOPLAY
		if(display.autoplay){
			var autoplayTimeout;
			var autoplay = function(a){
				if(autoplayTimeout) clearTimeout(autoplayTimeout);
				if(a && !(isHover && display.pause)) autoplayTimeout = setTimeout(Slider.next, display.autoplay);
			}//autoplay
		}else var autoplay = ef
		
		var doEffect = function(src){
			eventCall('before');
			showLoading(false); status = 'busy'; descriptionShow(); linkUpd(); navigationUpd();
			Effects({effect: getEffect(), display: display, container: imagesCont, src: src, callback: function(img){
				if(prevImg) prevImg.parentNode.removeChild(prevImg);
				prevImg = img; status = 'free'; autoplay(true);
				eventCall('after');
			}, contentmode: contentmode});
		};
		
		Slider.next = function(){Slider.go(current + 1);}
		Slider.prev = function(){Slider.go(current - 1);}
		Slider.go = function(index){
			index = (images.length + index) % images.length;
			autoplay(false);
			if(status != 'free' || current == index) return;
			previous = current;
			current = index;
			eventCall('loading');
			showLoading(true);
			if(contentmode) doEffect(images[current]);
			else loadImage(images[current], doEffect, display.always_show_loading);
		}//go
		Slider.get = function(a){
			switch(a){
				case 'length': return images.length; break;
				case 'current': return current; break;
				case 'previous': return previous; break;
				case 'images': return images; break;
				case 'links': return links; break;
				case 'descriptions': return descriptions; break;
			}
		}//get
		
		if(display.mousewheel){
			onmousewheel = function(d){
				if(d > 0) Slider.prev();
				else if(d < 0) Slider.next();
				return true;
			};
			function wheel(event){
				var d = 0;
				if(!event) event = window.event;
				if(event.wheelDelta){
					d = event.wheelDelta/120;
					if(window.opera) d = -d;
				}else if(event.detail) d = -event.detail/3;
				if(d && onmousewheel(d)){
					if(event.preventDefault) event.preventDefault();
					event.returnValue = false;
				}
			}//wheel
			if(mainCont.addEventListener){
				mainCont.addEventListener("DOMMouseScroll",wheel,false);
				mainCont.addEventListener("mousewheel",wheel,false);
			}else addElementEvent(mainCont, 'onmousewheel', wheel);
		}
		
		Slider.go(0);
		return Slider;
	}//Sliderman.slider
	
}