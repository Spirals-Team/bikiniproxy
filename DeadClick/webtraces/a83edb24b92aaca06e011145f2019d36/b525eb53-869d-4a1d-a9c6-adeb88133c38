
(function($) {
	$.fn.nltobr = function(){
		return this.each(function() {
		    str = escape( $(this).html() );
		    if(str.indexOf('%0D%0A') > -1){
		    	repl = /%0D%0A/g ;
				$(this).html( unescape( str.replace(repl,'<br />') ) );
		    }else if(str.indexOf('%0A') > -1){
		    	repl = /%0A/g ;
				$(this).html( unescape( str.replace(repl,'<br />') ) );
		    }else if(str.indexOf('%0D') > -1){
		    	repl = /%0D/g ;
				$(this).html( unescape( str.replace(repl,'<br />') ) );
		    }
		});
	}
})(jQuery);