function s5_lazyload_all() {

	if (s5_lazyload  == "all") {

		if (document.getElementById("s5_top_row1_area_inner")) {
			var s5_lazy_load_imgs = document.getElementById("s5_top_row1_area_inner").getElementsByTagName("IMG");
			for (var s5_lazy_load_imgs_y=0; s5_lazy_load_imgs_y<s5_lazy_load_imgs.length; s5_lazy_load_imgs_y++) {
				if (s5_lazy_load_imgs[s5_lazy_load_imgs_y].className == "") {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = "s5_lazyload";
				}
				else {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = s5_lazy_load_imgs[s5_lazy_load_imgs_y].className + " s5_lazyload";
				}
			}
		}
		if (document.getElementById("s5_top_row2_area_inner")) {
			var s5_lazy_load_imgs = document.getElementById("s5_top_row2_area_inner").getElementsByTagName("IMG");
			for (var s5_lazy_load_imgs_y=0; s5_lazy_load_imgs_y<s5_lazy_load_imgs.length; s5_lazy_load_imgs_y++) {
				if (s5_lazy_load_imgs[s5_lazy_load_imgs_y].className == "") {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = "s5_lazyload";
				}
				else {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = s5_lazy_load_imgs[s5_lazy_load_imgs_y].className + " s5_lazyload";
				}
			}
		}
		if (document.getElementById("s5_top_row3_area_inner")) {
			var s5_lazy_load_imgs = document.getElementById("s5_top_row3_area_inner").getElementsByTagName("IMG");
			for (var s5_lazy_load_imgs_y=0; s5_lazy_load_imgs_y<s5_lazy_load_imgs.length; s5_lazy_load_imgs_y++) {
				if (s5_lazy_load_imgs[s5_lazy_load_imgs_y].className == "") {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = "s5_lazyload";
				}
				else {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = s5_lazy_load_imgs[s5_lazy_load_imgs_y].className + " s5_lazyload";
				}
			}
		}
		if (document.getElementById("s5_center_area_inner")) {
			var s5_lazy_load_imgs = document.getElementById("s5_center_area_inner").getElementsByTagName("IMG");
			for (var s5_lazy_load_imgs_y=0; s5_lazy_load_imgs_y<s5_lazy_load_imgs.length; s5_lazy_load_imgs_y++) {
				if (s5_lazy_load_imgs[s5_lazy_load_imgs_y].className == "") {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = "s5_lazyload";
				}
				else {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = s5_lazy_load_imgs[s5_lazy_load_imgs_y].className + " s5_lazyload";
				}
			}
		}
		if (document.getElementById("s5_bottom_row1_area_inner")) {
			var s5_lazy_load_imgs = document.getElementById("s5_bottom_row1_area_inner").getElementsByTagName("IMG");
			for (var s5_lazy_load_imgs_y=0; s5_lazy_load_imgs_y<s5_lazy_load_imgs.length; s5_lazy_load_imgs_y++) {
				if (s5_lazy_load_imgs[s5_lazy_load_imgs_y].className == "") {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = "s5_lazyload";
				}
				else {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = s5_lazy_load_imgs[s5_lazy_load_imgs_y].className + " s5_lazyload";
				}
			}
		}
		if (document.getElementById("s5_bottom_row2_area_inner")) {
			var s5_lazy_load_imgs = document.getElementById("s5_bottom_row2_area_inner").getElementsByTagName("IMG");
			for (var s5_lazy_load_imgs_y=0; s5_lazy_load_imgs_y<s5_lazy_load_imgs.length; s5_lazy_load_imgs_y++) {
				if (s5_lazy_load_imgs[s5_lazy_load_imgs_y].className == "") {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = "s5_lazyload";
				}
				else {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = s5_lazy_load_imgs[s5_lazy_load_imgs_y].className + " s5_lazyload";
				}
			}
		}
		if (document.getElementById("s5_bottom_row3_area_inner")) {
			var s5_lazy_load_imgs = document.getElementById("s5_bottom_row3_area_inner").getElementsByTagName("IMG");
			for (var s5_lazy_load_imgs_y=0; s5_lazy_load_imgs_y<s5_lazy_load_imgs.length; s5_lazy_load_imgs_y++) {
				if (s5_lazy_load_imgs[s5_lazy_load_imgs_y].className == "") {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = "s5_lazyload";
				}
				else {
					s5_lazy_load_imgs[s5_lazy_load_imgs_y].className = s5_lazy_load_imgs[s5_lazy_load_imgs_y].className + " s5_lazyload";
				}
			}
		}
			
	}

}


(function($){

	
	window.JqLazyLoader = function(){
		this.options={
			container: $(window),
			items: '.s5_lazyload'
			};
		this.loaded=[];
	}
	JqLazyLoader.prototype.initialize=function(options){
		this.options=$.extend(this.options,options);
		if(this.options.items) {
			this.images = $(this.options.items);
		} else {
			throw 'no pictures to lazyload';
		}
		this.containerHeight = this.options.container.height();
		this.images.each($.proxy(function( id,item) {
			$(item).css('opacity', 0);
			//if(!$(item).attr('src')) $(item).attr('src', this.options.loader);
		},this));
		this.options.container.bind('scroll', $.proxy(function() {
			this.display(this.images, this.options.container.scrollTop());
		},this));
        this.options.container.trigger("scroll");
	};
	
	JqLazyLoader.prototype.display=function(images, scrollPosition) {
		bottom = scrollPosition + this.containerHeight; 
    	images.each($.proxy(function(id,item) { 
    		if(this.loaded.indexOf(id)>-1) return; 
    		if($(item).offset().top < bottom && $(item).offset().top > scrollPosition) { 
    			this.loaded.push(id); 
    			$(item).attr('src', $(item).attr('src')); 
    			setTimeout(function(){$(item).animate({'opacity':1},400,'easeOutExpo');},150);
    		} 
       },this));
	};
}
)(jQuery);


	jQuery(document).ready(function() {
		s5_lazyload_all();
		var lazy = new JqLazyLoader();
		lazy.initialize({
			items: '.s5_lazyload' //pass the class name of the images to lazy load
		});
	});
