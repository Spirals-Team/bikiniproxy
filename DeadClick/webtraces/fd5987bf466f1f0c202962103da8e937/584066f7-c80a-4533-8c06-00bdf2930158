/*requestAnimationFrame*/
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}; 
	if (!window.requestAnimationFrame){
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}; 
	if (!window.cancelAnimationFrame){
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	};	
/*requestAnimationFrame*/

/*check IE & Safari*/
	function checkIeSafari(){
		if(window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			return true;					
		}else{
			return false;			
		};
	};
/*check IE & Safari*/

/*check number*/
	function isNumber(n) {return !isNaN(parseFloat(n)) && isFinite(n);};
/*check number*/

/*Background Video*/
	;(function($){
		$.fn.extCallVide = function(){
			var $this = $(this);
			var $mp4 = $this.attr('data-video-mp4'), $webm = $this.attr('data-video-webm'), $ogv = $this.attr('data-video-ogv'), $poster = $this.attr('data-poster');
			
			$this.vide(	{
							mp4: 	(typeof $mp4 !='undefined' && $mp4!='')?$mp4:'',
							webm: 	(typeof $webm !='undefined' && $webm!='')?$webm:'',
							ogv: 	(typeof $ogv !='undefined' && $ogv!='')?$ogv:'',
							//poster: (typeof $poster !='undefined' && $poster!='')?$poster:'',
						},
						
						//options
						{
							posterType:'none',
						});
		}
	}(jQuery));
/*Background Video*/

/*Trigger Resize*/
	;(function($){
		$.fn.triggerWR = function(){
			if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
				return;
			}
			var $this=$(this), $timeOutClear = null;
			$this.off('.destroyResize').on('resize.destroyResize', function(){
				if($timeOutClear!=null){return};
				$timeOutClear=setTimeout(function(){				
					$this.trigger('resize');
					$timeOutClear=null;				
					console.log('resize');
				},368);
			});
		};
		$(document).ready(function(e){
			if($('.html5-background-vd').length>0 || $('.youtube-background-vd').length>0){
				$(window).triggerWR();			
			};
		});
	}(jQuery));
/*Trigger Resize*/