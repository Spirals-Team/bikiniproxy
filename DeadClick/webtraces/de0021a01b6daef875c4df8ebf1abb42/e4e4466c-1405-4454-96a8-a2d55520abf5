jQuery(function($) {
    $.widget("ncbi.preloaderWidget", {
    
        options: {
            url: '/static/header_footer_ajax/',
            //url: '/sites/NCBI_SSI_Components@2.29/header_footer_ajax/',
            footerSelector: '.subfooter',
            footerPreloadPos: 500,
            menuSelectors: {
                '#resource-menu': 'resources-menu',
                '#all-howtos-menu': 'howto-menu'
            }
        },
        
        /**
            Private variables
         */
        _browserHeight: null,
        _footerOffset:  null,

        
        _init: function() 
        {
            var self = this;
            
            // Only one instance of this plugin is allowed
            if (this.instance())
            {
                return false;
            }
            
            this.updateUrlFromMeta();
                        
            /*$.each(self.options.menuSelectors, function(selector, url) {
                self.initMenu(selector, url);
            });*/
            
            self.initFooter();
        },
        
        /**
         * Check for instance of the plugin
         */
        instance: function()
        {
            var instance = this.element.data('headerFooterAjaxInstance'); 
            if (typeof instance != "undefined")
            {
                return instance;
            }

            this.element.data('headerFooterAjaxInstance', this);
            return false;
        },
        
        updateUrlFromMeta: function()
        {
            var newUrl = $('meta[name="headerFooterUrl"]').attr('content');
            if (typeof newUrl == "undefined")
            {
                return false;
            }
            
            this.options.url = newUrl;
            return true;
        },
        
        initMenu: function(element, url) 
        {
            var menuitem = $(element).find('a');                        
            
            // Do not redirect if top level menu item clicked
            menuitem.on('click', function(e) {
                e.preventDefault(); 
                e.stopPropagation();
            });
    
            // Preload menu          
            menuitem.on('mouseenter.preload focus.preload', { element: menuitem, url: this.options.url + url }, this.preloadMenu);
            
        },
        
        preloadMenu: function(event) 
        {            
            var element = event.data.element;                        
    
            /**
                Load menu items and add them after main link
             */
            $.get(event.data.url + '?p$debugoutput=off', function(data) {
                element.after(data);
            }, 'html');
                            
            /**
                Once submenu is loaded - we are done, disconnect events
             */
            element.off('mouseenter.preload focus.preload');
            
            /**
                Menu is supposed to appear when keyboard focus is received.
                But it has just been loaded, so trigger "focus" again
             */
            if (event.type == 'focus')
            {
                element.trigger('focus');
            }
        },
        
        initFooter: function() 
        {
            var footer = $(this.options.footerSelector);
            var scrollTop = $(document).scrollTop();
            
            // Footer not found
            if (footer.length < 1)
            {
                return false;
            }
            
            this._browserHeight = $(window).height();
            this._footerOffset = footer.offset().top;
        
            /**
                Load footer if it is visible 
                (page height is less than browser height or page is scrolled to the footer) 
             */
        	if(this._footerOffset < scrollTop + this._browserHeight + 500)
        	{
        		this.loadFooter(footer);
        	}
        	/* Otherwise wait for user to scroll to the bottom */
        	else
        	{
        		$(window).on('scroll', { self: this, container: footer }, this.lazyLoadFooter);
        	}        
        },
        
    	loadFooter: function(container)
    	{
    		container.load(this.options.url + "footer-menu" + '?p$debugoutput=off', function() {
    		    /* Add popup for external links (facebook, twitter, youtube) */
    		    container.find('a').ncbiexternallink();
/*    		    jQuery.ui.jig.scan('body', {
    		        widgets: ['ncbiexternallink']
    		    
    		    });*/
    		});            
    	},
    
    	lazyLoadFooter: function(event)
    	{
    	    var self = event.data.self;
            var scrollTop = $(document).scrollTop();
            if(scrollTop + self._browserHeight > self._footerOffset - self.options.footerPreloadPos)
            {
    			self.loadFooter(event.data.container);
    			$(window).unbind("scroll", self.lazyLoadFooter);
    		}         
    	}
    


    });
    
    // Initialize widget
    $(document).preloaderWidget();    
});



