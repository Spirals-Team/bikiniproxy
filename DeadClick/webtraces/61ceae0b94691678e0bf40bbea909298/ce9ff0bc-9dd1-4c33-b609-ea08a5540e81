_satellite.pushBlockingScript(function(event, target, $variables){
  function loadJs( src, callback, name) {
	if(typeof jQuery != 'undefined'){
		var $script = $('script[src*="'+src+'"]'),
			head = document.getElementsByTagName("head")[0];

		if ( $script.length ) {
			$script.attr('pending') ? $script.bind('scriptload',callback) : callback();
			return;
		};

		var s = document.createElement('script');
		s.setAttribute("type","text/javascript");
		s.setAttribute('charset', 'UTF-8');
		s.setAttribute("src", src);
		s.setAttribute('id', name);
		s.setAttribute('pending', 1);


		$(s).bind('scriptload',function(){
			$(this).removeAttr('pending');
			callback();
			 //unbind load event
			 //timeout because of pending callbacks
			setTimeout(function(){
				$(s).unbind('scriptload');
			},10);
		});

		// jQuery doesn't handles onload event special for script tag,
		var done = false;
		s.onload = s.onreadystatechange = function() {
			if ( !done && ( !this.readyState || /loaded|complete/.test(this.readyState) ) ) {
				done = true;
				// Handle memory leak in IE
				s.onload = s.onreadystatechange = null;
				$(s).trigger('scriptload');
			};
		};
		head.appendChild(s);
	}
};
loadJs('//native.sharethrough.com/assets/sfp.js', function(){$(document).trigger('sfpLoaded');},'sharethrough');
});
