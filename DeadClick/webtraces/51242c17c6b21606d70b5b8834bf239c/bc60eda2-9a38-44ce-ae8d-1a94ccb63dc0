(function( $ ){

  $.fn.startSlider = function() {
    
    var i = 0;
    
    this.find('div.slide').hide();
    
    var slides = this.find('div.slide');
    
    $(slides[0]).show();
    
    $('.next-slide').click(function(e){
    
    	e.preventDefault();
    
    	$(slides[i]).fadeOut(500,function(){

	    	if(i !== slides.length-1) {
	    		i++;
	    	}else{
		    	i=0;
	    	}
	
	    	$(slides[i]).fadeIn();	    	
	    	
    	});

    });

    $('.prev-slide').click(function(e){
    
        e.preventDefault();
    
        $(slides[i]).fadeOut(500,function(){

            if(i !== 0) {
                i--;
            }else{
                i=slides.length-1;
            }
    
            $(slides[i]).fadeIn();          
            
        });

    });

  };
})( jQuery );