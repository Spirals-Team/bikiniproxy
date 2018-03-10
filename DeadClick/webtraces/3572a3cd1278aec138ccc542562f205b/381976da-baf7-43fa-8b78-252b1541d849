			// Isotope blog
			var jQueryenigma_blog_2col = jQuery('#isotope-blog-container');
			var jQueryenigma_blog_3col = jQuery('#isotope-blog-container');
			var jQueryenigma_blog_4col = jQuery('#isotope-blog-container');
			var jQueryenigma_blog_2col_right_sidebar = jQuery('#isotope-blog-container');
			var jQueryenigma_blog_2col_left_sidebar = jQuery('#isotope-blog-container');
			var jQueryservice_style1 = jQuery('#isotope-service-container');
			
			// Isotope Portfolio
            var jQueryportfolio = jQuery('#isotope-portfolio-container');
            var jQueryfilter = jQuery('.portfolio-filter');
			var jQueryenigma_gallery = jQuery('#isotope-gallery-container');
			
            jQuery(window).load(function () {
                // Initialize Isotope
				
                jQueryenigma_blog_2col.isotope({
                    itemSelector: '.enigma_thumb_blog'
                });
				
				jQueryenigma_blog_3col.isotope({
                    itemSelector: '.enigma_thumb_blog'
                });
				
				jQueryenigma_blog_4col.isotope({
                    itemSelector: '.enigma_thumb_blog'
                });
				
				jQueryenigma_blog_2col_right_sidebar.isotope({
                    itemSelector: '.enigma_thumb_blog'
                });
				
				jQueryenigma_blog_2col_left_sidebar.isotope({
                    itemSelector: '.enigma_thumb_blog'
                });
				
				jQueryservice_style1.isotope({
                    itemSelector: '.service'
                });
				
				//portfolio
				jQueryportfolio.isotope({
                    itemSelector: '.portfolio-item-wrapper'
                });
                jQuery('.portfolio-filter a').click(function () {
                    var selector = jQuery(this).attr('data-filter');
                    jQueryportfolio.isotope({ filter: selector });
                    return false;
                });
                jQueryfilter.find('a').click(function () {
                    var selector = jQuery(this).attr('data-filter');
                    jQueryfilter.find('a').parent().removeClass('active');
                    jQuery(this).parent().addClass('active');
                });
				
				
				jQueryenigma_gallery.isotope({
                    itemSelector: '.enigma_gallery-sellector'
                });
                
            });
            jQuery(window).smartresize(function () {
                jQueryenigma_blog_2col.isotope('reLayout');
				jQueryenigma_blog_3col.isotope('reLayout');
				jQueryenigma_blog_4col.isotope('reLayout');
				jQueryenigma_blog_2col_right_sidebar.isotope('reLayout');
				jQueryenigma_blog_2col_left_sidebar.isotope('reLayout');
				jQueryservice_style1.isotope('reLayout');
				jQueryportfolio.isotope('reLayout');
				jQueryenigma_gallery.isotope('reLayout');
            }); 

//scroll js			
jQuery().waypoint && jQuery("body").imagesLoaded(function () {
         jQuery(".animate_afc, .animate_afl, .animate_afr, .animate_aft, .animate_afb, .animate_wfc, .animate_hfc, .animate_rfc, .animate_rfl, .animate_rfr").waypoint(function () {
             if (!jQuery(this).hasClass("animate_start")) {
                var e = jQuery(this);
                 setTimeout(function () {
                     e.addClass("animate_start")
                 }, 20)
             }
        }, {
             offset: "85%",
             triggerOnce: !0
         })
     });
		
		
		