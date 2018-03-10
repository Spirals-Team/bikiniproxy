    
/* ======================================================= 
 *
 *  	Media Boxes     
 *  	Version: 2.0
 *  	By David Blanco
 *
 *  	Contact: http://codecanyon.net/user/davidbo90
 *  	Created: March 11, 2014
 *
 *  	Copyright (c) 2013, David Blanco. All rights reserved.
 *  	Available only in http://codecanyon.net/
 *      
 *  	---------------------------------
 *  	CONTENTS
 *  	---------------------------------
 *
 *  	[1] SETUP
 *  	[2] GRID METHODS
 *  	[3] EXTENGIN ISOTOPE
 *  	[4] FILTERING ISOTOPE
 *      [5] FILTER
 *      [6] SEARCH
 *      [7] SORT
 *  	[8] LOAD MORE BOXES
 *      [9] THUMBNAIL OVERLAY EFFECT
 *  	[10] MAGNIFIC POPUP
 *      [11] DEEP LINKING
 *      
 * ======================================================= */


// convert divs into images
(function( window, $, undefined ){

    var MediaBoxes = function(container, options){
        
    /* ====================================================================== *
            [1] SETUP
     * ====================================================================== */

        /* SETTINGS */
        var settings = $.extend({}, $.fn.mediaBoxes.defaults, options);

        /* VARS */
        var $container                  = $(container).addClass('media-boxes-container');        
        var itemSelector                = '.media-box';
        var boxImageSelector            = '.media-box-image';
        var itemClass                   = 'media-box'; /* same as itemSelector but without the '.' */
        var itemHiddenClass             = 'media-box-hidden';
        var animation                   = Modernizr.csstransitions?'transition':'animate'; /* CSS3 transition or jQuery animate depending on the browser support */
        var filters                     = {};

        if( settings.overlayEasing == 'default' ){
            settings.overlayEasing = (animation=='transition')?'_default':'swing'; /* 'default' is for CSS3 and 'swing' for jQuery animate */
        }
        
        /* LOAD MORE BUTTON */
        var loadMoreButton              = $('<div class="media-boxes-load-more media-boxes-load-more-button"></div>').insertAfter($container);

        /* Sort the resolutions from lower to higher */
        settings.resolutions.sort(function(a,b){ return a.maxWidth - b.maxWidth; });

        /* Save the settings in the container */
        $container.data('settings', settings);
        
        /* Fix the margins for the container (for horizontal and vertical space)  */
        $container
			.css({
					'margin-left' : -settings.horizontalSpaceBetweenBoxes,
					//'margin-top'  : -settings.verticalSpaceBetweenBoxes,
				});

        /* Hide all boxes */
        $container.find(itemSelector).removeClass(itemClass).addClass(itemHiddenClass);

        var filterContainer = $(settings.filterContainer);

        /* default filter selected */
        var defFilter = filterContainer.find(settings.filter).filter('.selected').attr('data-filter');
        filters[ 'filter' ] = defFilter;

        /* default search  selected */
        search( $(settings.search).val() );

        /* default sort selected */
        var defSortElem = $(settings.sortContainer).find(settings.sort).filter('.selected');
        var defSort     = defSortElem.attr('data-sort-by');
        var defAsc      = getSortDirection(defSortElem);

        /* Add the sizer for defining the width of isotope */
        $container.append('<div class="media-boxes-grid-sizer"></div>');

        /* Initialize isotope plugin */
        $container.isotopeMB({
            itemSelector    : itemSelector,  
            //transitionDuration: '0.3s',  
            filter: combineFilters(filters),     
            masonry: {
                columnWidth: '.media-boxes-grid-sizer'
            },
            getSortData: settings.getSortData,
            sortBy: defSort, 
            sortAscending: defAsc,     
        }); 

        updateFilterClasses(); /* this is used for the popup, so it does show the images depending on the filter */

    /* ====================================================================== *
            [2] GRID METHODS
     * ====================================================================== */

        /* ****** Add the trigger for the magnific popup ****** */
        function addPopupTrigger(container){

            container.find(itemSelector+', .'+itemHiddenClass).find(boxImageSelector+':not([data-popupTrigger])').each(function(){
                var boxImage        = $(this);
                var popupDiv        = boxImage.find('div[data-popup]').eq(0); /* only one popup allowed */

                boxImage.attr('data-popupTrigger', 'yes');
                
                var type = 'mfp-image';
                if(popupDiv.data('type') == 'iframe'){
                    type = 'mfp-iframe';
                }else if(popupDiv.data('type') == 'inline'){
                    type = 'mfp-inline';
                }else if(popupDiv.data('type') == 'ajax'){
                    type = 'mfp-ajax';
                }

                var popupTrigger = boxImage.find('.mb-open-popup');
                popupTrigger.addBack('.mb-open-popup').attr('data-mfp-src', popupDiv.data('popup')).addClass(type);
                if(popupDiv.attr('title') != undefined){
                    popupTrigger.attr('title', popupDiv.attr('title'));
                }
            });

        }

        /* ****** Convert the divs with the URL specified to real images ****** */
        function convertDivsIntoImages(container, imagesWithDimensions){
        	container.find(itemSelector).find(boxImageSelector+':not([data-imageconverted])').each(function(){
     			var boxImage        = $(this);
                var thumbnailDiv    = boxImage.find('div[data-thumbnail]').eq(0); /* only one thumb allowed */
                var popupDiv        = boxImage.find('div[data-popup]').eq(0); /* only one popup allowed */
                var thumbSrc        = thumbnailDiv.data('thumbnail');

                if(thumbnailDiv[0] == undefined){ /* if you haven't sepcified a thumbnail then take the image */
                    thumbnailDiv   = popupDiv;
                    thumbSrc    = popupDiv.data('popup');
                }
                
                if( imagesWithDimensions == false && container.data('settings').waitForAllThumbsNoMatterWhat == false ){
                	if( thumbnailDiv.data('width') == undefined && thumbnailDiv.data('height') == undefined ){
                		/* Then we are good to go since we don't want images with dimenssions specified */
                	}else{
                        return;
                        /* If you are here then nothing after this will be executed */
                    }
                }

                boxImage.attr('data-imageconverted', 'yes');
                
                var thumbTitle = thumbnailDiv.attr('title');
                if(thumbTitle == undefined){
                    thumbTitle = thumbSrc;
                }
                var imgHTML   = $('<img title="'+ thumbTitle +'" src="'+ thumbSrc +'" />');

                if(imagesWithDimensions == true){
                    /* If the dmienssions are specified in the images then ignore them in the imagesLoaded plugin when you insert new items */
                    imgHTML.attr('data-dont-wait-for-me', 'yes');

                    thumbnailDiv.addClass('image-with-dimensions');

                    if( container.data('settings').waitUntilThumbLoads ){
                        imgHTML.hide();
                    }
                }

                thumbnailDiv.addClass('media-box-thumbnail-container').prepend(imgHTML);
     		});

            if(imagesWithDimensions == true){

                    /* FadeIn the thumbnail or show broken thumbnail */
                    function fadeInOrBroken(image){
                        var $image          = $(image.img);
                        var thumbnailDiv    = $image.parents('.image-with-dimensions');
                        
                        if(thumbnailDiv[0] == undefined){ /* If is undefined it means that it has already been loaded or broken so skip it */
                            return;
                        }

                        if( image.isLoaded ){
                            $image.fadeIn(400, function(){ /* This will only be trigger if you hide the image above (if the "waitUntilThumbLoads" settings is true) */
                                thumbnailDiv.removeClass('image-with-dimensions'); 
                            }); 
                        }else{
                            thumbnailDiv.removeClass('image-with-dimensions');
                            $image.hide(); /* hide image since you are going to show a broken logo */
                            thumbnailDiv.addClass('broken-image-here');
                        }
                    }

                    /* FadeIn thumbnails that have dimensions specified if you want to show them after they have been loaded */
                    container.find('.image-with-dimensions').imagesLoadedMB()
                        .always(function(instance){
                            
                            /* In case the progress event don't get to show the images (this happens sometimes when you refresh the page) */
                            for(index in instance.images){
                                var image = instance.images[index];
                                fadeInOrBroken(image);
                            }

                        })
                        .progress(function(instance, image) {
                            
                            fadeInOrBroken(image);

                        });

            }

     	}

        function setDimensionsToImageContainer(container){
            container.find(itemSelector).each(function(){
                var box             = $(this);

                var boxImage        = box.find(boxImageSelector);
                var thumbnailDiv    = boxImage.find('div[data-thumbnail]').eq(0); /* only one thumb allowed */
                var popupDiv        = boxImage.find('div[data-popup]').eq(0); /* only one popup allowed */

                if(thumbnailDiv[0] == undefined){ /* if you haven't sepcified a thumbnail then take the image */
                    thumbnailDiv   = popupDiv;
                }

                var display = box.css('display');
                if(display == 'none'){// If it is hidden, display to 'none' wont give you the right height so you need to do this trick
                    box.css('margin-top', 99999999999999).show();
                }

                boxImage.width( thumbnailDiv.width() );
                boxImage.height( thumbnailDiv.height() );

                if(display == 'none'){
                    box.css('margin-top', 0).hide();
                }
            });
        }

        /* ****** Calculate the right dimensions for the thumbnails ****** */
        function setStaticDimensionsOfThumbnails(container){
        	
        	container.find(itemSelector).find(boxImageSelector).each(function(){
        		var boxImage 	    = $(this);
        		var thumbnailDiv 	= boxImage.find('div[data-thumbnail]').eq(0); /* only one thumb allowed */
                var popupDiv        = boxImage.find('div[data-popup]').eq(0); /* only one popup allowed */

                if(thumbnailDiv[0] == undefined){ /* if you haven't sepcified a thumbnail then take the image */
                    thumbnailDiv = popupDiv;
                }
        		
        		var imgWidth 	= parseFloat( thumbnailDiv.data('width') );
        		var imgHeight 	= parseFloat( thumbnailDiv.data('height') );

        		var newWidth    = boxImage.parents(itemSelector).width() - container.data('settings').horizontalSpaceBetweenBoxes;
                var newHeight   = (imgHeight * newWidth)/imgWidth;
                
                thumbnailDiv.css('width', newWidth);

                /* Set the height only to those thumbs with width and height specified */ 
                if( thumbnailDiv.data('width') != undefined || thumbnailDiv.data('height') != undefined ){
                    thumbnailDiv.css('height', Math.floor(newHeight));
                }
        	});

        }
        
        /* ****** Set the width of the columns according to the settings specified ****** */
        function setColumnWidth(container, columnWidth, columns){
            var mediaBoxes = container.find(itemSelector);
            var newWidth;

            if( columnWidth == 'auto' ){
                //newWidth = 100/columns+'%';
            	newWidth = Math.floor( (container.width()-1)/columns ); // minus 1px because some resolutions don't fit perfectly
            }else{
                newWidth = columnWidth;
            }

            /* the width that the isotope logic will use for each column of the grid */
            container.find('.media-boxes-grid-sizer').css( 'width' , newWidth );
            
            mediaBoxes.each(function(index){
                var $this       = $(this);
                var boxColumns  = $this.data('columns');
                
                /* check for the number of columns on each box */
                if(boxColumns != undefined && parseInt(columns)>=parseInt(boxColumns)){
                    $this.css( 'width' , newWidth*parseInt(boxColumns) );
                }else{
                    $this.css( 'width' , newWidth );
                }
            });
        }
        
        /* ****** Get viewport dimensions ****** */
        function viewport() {
            var e = window, a = 'inner';
            if (!('innerWidth' in window )) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
        }
        
        /* ****** Get and set the correct columnWidth for the current resolution ****** */
        function getAndSetColumnWidth(container){
            var resolutionFound = false;
            for (var key in container.data('settings').resolutions) {
                var value = container.data('settings').resolutions[key];
            	
                if( value.maxWidth >= viewport().width ){
                	setColumnWidth(container, value.columnWidth, value.columns);
                	resolutionFound = true;
                	break;
                }
            }
            
            /* If there wasn't a match then use the default one */
            if( resolutionFound == false ){
            	setColumnWidth(container, container.data('settings').columnWidth, container.data('settings').columns);
            }
        }

        /* ****** Add div with margins (for horizontal and vertical space) ****** */
        function addWrapperForMargins(container){
            var wrapper = $('<div class="media-box-container"></div')
            				.css({
            						'margin-left' : container.data('settings').horizontalSpaceBetweenBoxes,
            						'margin-bottom'  : container.data('settings').verticalSpaceBetweenBoxes
            					});

            var boxes = container.find(itemSelector+':not([data-wrapper-added])').attr('data-wrapper-added', 'yes');
            
            boxes.wrapInner( wrapper );
        }

        /* ****** Set the overlay depending on the overlay effect before the hover event is trigger ****** */
        function setupOverlayForHoverEffect(container){
            if( container.data('settings').thumbnailOverlay == false ) return;

            var boxes = container.find(itemSelector+':not([data-set-overlay-for-hover-effect])').attr('data-set-overlay-for-hover-effect', 'yes');

            /* Add extra divs for vertical aliognment */
            boxes.find('.thumbnail-overlay').wrapInner( "<div class='aligment'><div class='aligment'></div></div>" );

            boxes.each(function(){

                var box         = $(this);
                var boxImage    = box.find(boxImageSelector);
                var effect      = container.data('settings').overlayEffect;
                if(boxImage.data('overlay-effect') != undefined){
                    effect = boxImage.data('overlay-effect');
                }

                    /* Add wrapper for some effects */
                    if( effect == 'push-up' || effect == 'push-down' || effect == 'push-up-100%' || effect == 'push-down-100%'  ){
                        
                            var thumbnailDiv        = boxImage.find('.media-box-thumbnail-container');
                            var thumbnailOverlay    = boxImage.find('.thumbnail-overlay').css('position', 'relative');
                            if( effect == 'push-up-100%' || effect == 'push-down-100%' ){/* set the height of the overlay to the same of the thumbnail */
                                thumbnailOverlay.outerHeight( thumbnailDiv.outerHeight() );
                            }
                            var heightOverlay       = thumbnailOverlay.outerHeight();
                            


                            var wrapper             = $('<div class="wrapper-for-some-effects"></div');

                            if( effect == 'push-up' || effect == 'push-up-100%' ){
                                thumbnailOverlay.appendTo(boxImage);    
                            }else if( effect == 'push-down' || effect == 'push-down-100%'  ){
                                thumbnailOverlay.prependTo(boxImage);    
                                wrapper.css('margin-top', -heightOverlay);
                            }
                    
                            boxImage.wrapInner( wrapper );

                    }
                    /* Set some CSS style for this effects */
                    else if( effect == 'reveal-top' || effect == 'reveal-top-100%' ){
                        
                        box.addClass('position-reveal-effect');
                        
                        var overlay = box.find('.thumbnail-overlay').css('top', 0);
                        if( effect == 'reveal-top-100%' ){
                            overlay.css('height', '100%');
                        }

                    }else if( effect == 'reveal-bottom' || effect == 'reveal-bottom-100%' ){
                        
                        box.addClass('position-reveal-effect').addClass('position-bottom-reveal-effect');
                        
                        var overlay = box.find('.thumbnail-overlay').css('bottom', 0);
                        if( effect == 'reveal-bottom-100%' ){
                            overlay.css('height', '100%');
                        }

                    }else if( effect.substr(0, 9) == 'direction'){ // 'direction-aware', 'direction-aware-fade', 'direction-right', 'direction-left', 'direction-top', 'direction-bottom'

                        /* Set the height to 100% if not it would be just the default height of the overlay */
                        box.find('.thumbnail-overlay').css('height', '100%');

                    }else if( effect == 'fade' ){
                        
                        var thumbOverlay = box.find('.thumbnail-overlay').hide();
                        thumbOverlay.css({
                                            'height' : '100%',
                                            'top'    : '0',
                                            'left'   : '0',
                                        });
                        thumbOverlay.find('.fa').css({ scale : 1.4 });

                    }

            });

        }

        function hideOverlaysOnResize(container){
            var boxes = container.find(itemSelector);

            boxes.each(function(){
                var box         = $(this);
                var boxImage    = box.find(boxImageSelector);
                var effect      = container.data('settings').overlayEffect;
                if(boxImage.data('overlay-effect') != undefined){
                    effect = boxImage.data('overlay-effect');
                }

                if( effect.substr(0, 9) == 'direction' ){
                    boxImage.find('.thumbnail-overlay').hide();
                }
            });

            /* reload isotope for the new width */
            container.isotopeMB('layout');
        }

    /* ====================================================================== *
            [3] EXTENDING ISOTOPE
     * ====================================================================== */

        /* ****** Extending Isotope on resize event ****** */
        $.extend( IsotopeMB.prototype, {
            resize : function() {
                /* Hack for setting the right sizes of the column */
                var container = $(this.element);
                getAndSetColumnWidth(container);
                setStaticDimensionsOfThumbnails(container);
                setDimensionsToImageContainer(container);
                hideOverlaysOnResize(container);
                /* End hack */
                
                // don't trigger if size did not change
                // or if resize was unbound. See #9
                if ( !this.isResizeBound || !this.needsResizeLayout() ) {
                    return;
                }

                this.layout();
            }
        });
        
        /* ****** Extending Isotope so when it does set the container width the plugin can refresh the lazy load feature ****** */
        $.extend( IsotopeMB.prototype, {
        	_setContainerMeasure : function( measure, isWidth ) {
        		  if ( measure === undefined ) {
        		    return;
        		  }

        		  var elemSize = this.size;
        		  // add padding and border width if border box
        		  if ( elemSize.isBorderBox ) {
        		    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
        		      elemSize.borderLeftWidth + elemSize.borderRightWidth :
        		      elemSize.paddingBottom + elemSize.paddingTop +
        		      elemSize.borderTopWidth + elemSize.borderBottomWidth;
        		  }

        		  measure = Math.max( measure, 0 );
        		  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
        		  
        		  /* Hack to refresh the waypoint */
                  var container = $(this.element);
        		  $.waypoints('refresh');
        		  container.addClass('lazy-load-ready');
        		  /* End hack */

                  /* Remove this class since the grid has been resized due to the filtering system */
                  container.removeClass('filtering-isotope');
                  /* End Remove this class */
        	}
        });

        /* ****** Extending Isotope so when you insert items they got the right settings (like columnWidth, staticDimensions, convertDivsIntoImages, etc.) ****** */
        $.extend( IsotopeMB.prototype, {
            insert : function( elems, callback ) {
                var items = this.addItems( elems );
                if ( !items.length ) {
                  return;
                }   

                /* Snippet (the insertBefore method so it is always ordered) */
                var container   = $(this.element);
                var firstHiddenBox = container.find('.'+itemHiddenClass)[0];
                // append item elements
                var i, item;
                var len = items.length;
                for ( i=0; i < len; i++ ) {
                  item = items[i];
                  if(firstHiddenBox != undefined){
                    this.element.insertBefore( item.element, firstHiddenBox );
                  }else{
                    this.element.appendChild( item.element );
                  }
                } 
                /* End Snippet */

                var isotopeDefaultLogic = function(){
                    // filter new stuff
                    /*
                    // this way adds hides new filtered items with NO transition
                    // so user can't see if new hidden items have been inserted
                    var filteredInsertItems;
                    this._noTransition( function() {
                      filteredInsertItems = this._filter( items );
                      // hide all new items
                      this.hide( filteredInsertItems );
                    });
                    // */
                    // this way hides new filtered items with transition
                    // so user at least sees that something has been added
                    var filteredInsertItems = this._filter( items );
                    // hide all newitems
                    this._noTransition( function() {
                      this.hide( filteredInsertItems );
                    });
                    // */
                    // set flag
                    for ( i=0; i < len; i++ ) {
                      items[i].isLayoutInstant = true;
                    }
                    this.arrange();
                    // reset flag
                    for ( i=0; i < len; i++ ) {
                      delete items[i].isLayoutInstant;
                    }
                    this.reveal( filteredInsertItems );
                }

                /* ======== Hack when inserting new boxes so they are properly converted ======== */
                var checkForBrokenImages = function(image){
                    var $image          = $(image.img);
                    var thumbnailDiv    = $image.parents('div[data-thumbnail], div[data-popup]');

                    if( image.isLoaded == false ){
                        $image.hide();
                        thumbnailDiv.addClass('broken-image-here');
                    }
                }



                var instance 	= this;
                
                /* Set the vertical and horizontal space between boxes */
                addWrapperForMargins(container);
                
                /* Set the columnWidth and set the static dimensions of the images that have it specified */
                getAndSetColumnWidth(container);
                setStaticDimensionsOfThumbnails(container);

                addPopupTrigger(container);
                
                convertDivsIntoImages(container, false); /* only the ones that have NO width and height */

                container.find('img:not([data-dont-wait-for-me])').imagesLoadedMB()
                    .always(function(){
                        if( settings.waitForAllThumbsNoMatterWhat == false ){
                            convertDivsIntoImages(container, true); /* the ones left that have width and height */                  
                        }

                        /* Add the class to show the box */
                        container.find(itemSelector).addClass('media-box-loaded');

                        /* Now you can call the default logic of the insert method from Isotope */
                        isotopeDefaultLogic.call(instance);

                        setDimensionsToImageContainer(container); /* set the same dimensions of the thumbnail to the container (for caption purposes) */

                        setupOverlayForHoverEffect(container);

                        /* Callback for inserting items */
                        if (typeof callback === 'function'){
                            callback();
                        }

                        /* In case the progress event don't get to check for broken images (this happens sometimes when you refresh the page) */
                        for(index in instance.images){
                            var image = instance.images[index];
                            checkForBrokenImages(image);
                        }
                    })
                    .progress(function( instance, image ) {
                        /* For broken images */
                        checkForBrokenImages(image);
                    });
                
                /* ======== End Hack ======== */
            }                  
        });

    /* ====================================================================== *
            [4] FILTERING ISOTOPE
     * ====================================================================== */

        function updateFilterClasses(){
            var boxes         = $container.find(itemSelector+', .'+itemHiddenClass);   
            
            var filter = getCurrentFilter();
            boxes.filter( filter ).removeClass('hidden-media-boxes-by-filter').addClass('visible-media-boxes-by-filter');
            boxes.not( filter ).addClass('hidden-media-boxes-by-filter').removeClass('visible-media-boxes-by-filter');
        }

        function filterIsotope( filterValue, filterGroup ){
            /* Add a class until it resizes the grid */
            $container.addClass('filtering-isotope');

            // set filter for group
            filters[ filterGroup ] = filterValue;

            // set filters for Isotope
            $container.isotopeMB({ filter: combineFilters(filters) });

            // update some CSS classes 
            updateFilterClasses();
            
            // fix load more button
            if( checkMinBoxesPerFilter()  ){
                /* it will load the missing boxes */
            }else{
                if( getLoadingBoxesInCurrentFilter().length > 0 ){
                    loading();
                }else{
                    fixLoadMoreButton();
                }
            }
        }

        function combineFilters( filters ) {
            var longerFilter = ''; // i.e. navigation-bar 
            for ( var prop in filters ) {
                var filter = filters[ prop ];

                if(longerFilter == ''){
                    longerFilter = prop;
                }else if( longerFilter.split(',').length < filter.split(',').length ){
                    longerFilter = prop;
                }
            }

            var combinedFilters = filters[longerFilter]; // i.e. .images, .sounds
            for ( var prop in filters ) {
                if(prop == longerFilter)continue;

                var filterSplit = filters[ prop ].split(',');
                for(var i=0; i<filterSplit.length; i++){

                    var largerFilterSplit   = combinedFilters.split(',');
                    var newFilter           = [];
                    for(var j=0; j<largerFilterSplit.length; j++){
                        if(largerFilterSplit[j] == '*' && filterSplit[i] == '*'){
                            filterSplit[i] = '';
                        }else{
                            if(filterSplit[i] == '*'){
                                filterSplit[i] = '';
                            }   
                            if(largerFilterSplit[j] == '*'){
                                largerFilterSplit[j] = '';
                            }
                        }
                        
                        
                        newFilter.push( largerFilterSplit[j]+filterSplit[i] );
                    }
                    combinedFilters = newFilter.join(',');
                }
            }

            return combinedFilters;
        }

    /* ====================================================================== *
            [5] FILTER
     * ====================================================================== */     

        filterContainer.find(settings.filter).on('click', function(){
            var $this = $(this);
            
            /* Remove selected class from others */
            $this.parents(settings.filterContainer).find(settings.filter).removeClass('selected');
            
            /* Add class of selected */
            $this.addClass('selected');

            /* Filter isotope */
            var filterValue = $this.attr('data-filter');
            filterIsotope( filterValue , 'filter' );

            return false;
        });

    /* ====================================================================== *
            [6] SEARCH
     * ====================================================================== */     

        function search(value){
            if(value == undefined) return;

            $container.find(settings.searchTarget).each(function(){
                var $this = $(this);
                var box   = $this.parents('.'+itemClass+', .'+itemHiddenClass);
                if( $this.text().toLowerCase().indexOf(value.toLowerCase()) !== -1 ){
                    box.addClass('search-match');
                }else{
                    box.removeClass('search-match');
                }
            });

            setTimeout( function() {
                filterIsotope('.search-match', 'search');
            }, 100 );
        }

        $(settings.search).on('keyup', function(){
            var value = $(this).val();

            search( value );
        });

    /* ====================================================================== *
            [7] SORTING
     * ====================================================================== */     

        function getSortDirection($this){
            var direction = $this.data('sort-ascending');
            if(direction == undefined){
                direction = true;
            }

            if($this.data('sort-toggle') && $this.data('sort-toggle') == true){
                $this.data('sort-ascending', !direction);
            }

            return direction;
        }

        $(settings.sortContainer).find(settings.sort).on('click', function(){
            var $this = $(this);

            /* Remove selected class from others */
            $this.parents(settings.sortContainer).find(settings.sort).removeClass('selected');
            
            /* Add class of selected */
            $this.addClass('selected');

            /* Sort isotope */
            var sortValue = $this.attr('data-sort-by');
            $container.isotopeMB({ sortBy: sortValue, sortAscending: getSortDirection($this) });

            return false;
        });


    /* ====================================================================== *
            [8] LOAD MORE BOXES
     * ====================================================================== */

        function checkMinBoxesPerFilter(){

            var boxesInCurrentCategory = getBoxesInCurrentFilter().length;

            /* Also check if there's boxes waiting to get load from that category, because maybe there isn't and there's no case to try to load them */
            if( boxesInCurrentCategory < settings.minBoxesPerFilter && hiddenBoxesWaitingToLoad().length > 0 ){
                /* Load the boxes that are missing */
                loadMore( settings.minBoxesPerFilter - boxesInCurrentCategory );

                return true;
            }

            return false;
        }

        function getBoxesInCurrentFilter(){
            var boxes = $container.find(itemSelector);   

            var filter = getCurrentFilter();
            if( filter != '*' ){
                boxes = boxes.filter( filter );
            }

            return boxes;
        }

        function getLoadingBoxesInCurrentFilter(){
            var boxes = getBoxesInCurrentFilter().not('.media-box-loaded');   

            return boxes;
        }

        function getCurrentFilter(){
            var filter = $container.data('isotopeMB').options.filter;
            if( filter == '' || filter == undefined ){
                filter = '*';
            }

            return filter;
        }

        function hiddenBoxesWaitingToLoad(ignoreFilter){ /* Number of hidden boxes waiting to get load, depending on the filter */
            var boxes = $container.find('.'+itemHiddenClass);   

            var filter = getCurrentFilter();
            if( filter != '*' && ignoreFilter == undefined){
                boxes = boxes.filter( filter );
            }

            return boxes;
        }

        function loading(){
            loadMoreButton.html(settings.LoadingWord);
            loadMoreButton.removeClass('media-boxes-load-more');
            loadMoreButton.addClass('media-boxes-loading');
        }

        var loadingsCounter = 0; /* When there's more than one loading at the same time */

        function startLoading(){
            loadingsCounter++;

            loading();
        }

        function finishLoading(){
            loadingsCounter--;

            if(loadingsCounter == 0){
                fixLoadMoreButton();
            }
        }

        function fixLoadMoreButton(){
            loadMoreButton.removeClass('media-boxes-load-more');
            loadMoreButton.removeClass('media-boxes-loading');
            loadMoreButton.removeClass('media-boxes-no-more-entries');

            if( hiddenBoxesWaitingToLoad().length > 0 ){
                loadMoreButton.html(settings.loadMoreWord);
                loadMoreButton.addClass('media-boxes-load-more'); 
            }else{
                loadMoreButton.html(settings.noMoreEntriesWord); 
                loadMoreButton.addClass('media-boxes-no-more-entries');
            }
        }

        function loadMore( boxesToLoad, ignoreFilter ){
            if( loadMoreButton.hasClass('media-boxes-load-more') == false ){ /* Only if it is the "load more" button, no the "loading..." nor the "no more entries" button */
                return;
            }

            /* Loading... */
            startLoading();

            /* The new boxes */
            var newBoxes = [];

            /* Boxes that will be loaded as part of isotope */
            hiddenBoxesWaitingToLoad(ignoreFilter).each(function(index){
                var $this = $(this);
                if( (index+1) <=  boxesToLoad){ 
                    $this.removeClass(itemHiddenClass).addClass(itemClass);
                    $this.hide();
                    newBoxes.push(this);
                }
            }); 
            
            $container.isotopeMB( 'insert', $(newBoxes), function(){
                /* Fix Load More Button */   
                finishLoading();
            });
        }

        loadMore( settings.boxesToLoadStart, true );
        
        /* Load more boxes when you click the button */
        loadMoreButton.on('click', function(){
            loadMore( settings.boxesToLoad );
        });
        

        if( settings.lazyLoad ){

            /* Load more boxes when you reach the bottom of the grid */
            $container.waypoint(function(direction) {
            	if( $container.hasClass('lazy-load-ready') ){
                    if( direction == 'down' && $container.hasClass('filtering-isotope') == false){
                        $container.removeClass('lazy-load-ready');
                        loadMore( settings.boxesToLoad );
                    }
                }
             }, {
    			context: window,
    			continuous: true,
    			enabled: true,
    			horizontal: false,
    			offset: 'bottom-in-view',
    			triggerOnce: false,   
             });

        }
    
    /* ====================================================================== *
            [9] THUMBNAIL OVERLAY EFFECT
     * ====================================================================== */    

        function hideWhenDone(element){
            if( element.attr('data-stop') != undefined ){
                element.hide();
                element.removeAttr('data-stop');
            }
        }

        $container.on( 'mouseenter.hoverdir, mouseleave.hoverdir', boxImageSelector, function(event){
            if( settings.thumbnailOverlay == false ) return;

            var boxImage            = $(this);
            var effect              = settings.overlayEffect;
            if(boxImage.data('overlay-effect') != undefined){
                effect = boxImage.data('overlay-effect');
            }
            
            var eventType           = event.type;
            var thumbnailDiv        = boxImage.find('.media-box-thumbnail-container');
            var thumbnailOverlay    = boxImage.find('.thumbnail-overlay') ;
            var heightOverlay       = thumbnailOverlay.outerHeight();
            
            /* The effects */
            if( effect == 'push-up' || effect == 'push-up-100%' ){
                var wrapper = boxImage.find('div.wrapper-for-some-effects');

                if( eventType === 'mouseenter' ) {
                    wrapper.stop().show()[animation]({ 'margin-top': -heightOverlay }, settings.overlaySpeed, settings.overlayEasing); 
                }else{
                    wrapper.stop()[animation]({ 'margin-top': 0 }, settings.overlaySpeed, settings.overlayEasing); 
                }
            }

            else if( effect == 'push-down' || effect == 'push-down-100%' ){
                var wrapper = boxImage.find('div.wrapper-for-some-effects');

                if( eventType === 'mouseenter' ) {
                    wrapper.stop().show()[animation]({ 'margin-top': 0 }, settings.overlaySpeed, settings.overlayEasing); 
                }else{
                    wrapper.stop()[animation]({ 'margin-top': -heightOverlay }, settings.overlaySpeed, settings.overlayEasing); 
                }
            }

            else if( effect == 'reveal-top' || effect == 'reveal-top-100%' ){
                if( eventType === 'mouseenter' ) {
                    thumbnailDiv.stop().show()[animation]({ 'margin-top': heightOverlay }, settings.overlaySpeed, settings.overlayEasing); 
                }else{
                    thumbnailDiv.stop()[animation]({ 'margin-top': 0 }, settings.overlaySpeed, settings.overlayEasing); 
                }   
            }

            else if( effect == 'reveal-bottom' || effect == 'reveal-bottom-100%' ){
                if( eventType === 'mouseenter' ) {
                    thumbnailDiv.stop().show()[animation]({ 'margin-top': -heightOverlay }, settings.overlaySpeed, settings.overlayEasing); 
                }else{
                    thumbnailDiv.stop()[animation]({ 'margin-top': 0 }, settings.overlaySpeed, settings.overlayEasing); 
                }   
            }

            else if( effect.substr(0, 9) == 'direction' ){ // 'direction-aware', 'direction-aware-fade', 'direction-right', 'direction-left', 'direction-top', 'direction-bottom'
                var direction   = _getDir( boxImage, { x : event.pageX, y : event.pageY } );
                
                if( effect == 'direction-top' ){
                    direction   = 0;
                }else if( effect == 'direction-bottom' ){
                    direction   = 2;
                }else if( effect == 'direction-right' ){
                    direction   = 1;
                }else if( effect == 'direction-left' ){
                    direction   = 3
                }

                var cssPos      = _getPosition( direction, boxImage );

                if( eventType == 'mouseenter' ){
                    thumbnailOverlay.css( { 'left' : cssPos.from, 'top' : cssPos.to } );

                    thumbnailOverlay.stop().show().fadeTo(0, 1, function(){
                                                                    $(this).stop()[animation]({ 'left' : 0, 'top' : 0 }, settings.overlaySpeed, settings.overlayEasing); 
                                                                });
                }else{
                    if( effect == 'direction-aware-fade' ){
                        thumbnailOverlay.fadeOut(700);
                    }else{
                        thumbnailOverlay.stop()[animation]({ 'left' : cssPos.from, 'top' : cssPos.to }, settings.overlaySpeed, settings.overlayEasing ); 
                    }
                }
            }

            else if( effect == 'fade' ){

                if( eventType == 'mouseenter' ){
                    thumbnailOverlay.stop().fadeOut(0);
                    thumbnailOverlay.fadeIn( settings.overlaySpeed );
                }else{
                    thumbnailOverlay.stop().fadeIn(0);
                    thumbnailOverlay.fadeOut( settings.overlaySpeed );
                }

                /* Effect of the icons */
                var icons = thumbnailOverlay.find('.fa');
                if( eventType == 'mouseenter' ){
                    icons.css({ scale: 1.4 }); 
                    icons[animation]({ scale: 1 }, 200); 
                }else{
                    icons.css({ scale: 1 }); 
                    icons[animation]({ scale: 1.4 }, 200); 
                }
            }


        });   


        /* ****** Methods for the direction-aware hover effect ****** */

        var _getDir = function( $el, coordinates ) {
            /** the width and height of the current div **/
            var w = $el.width(),
                h = $el.height(),

                /** calculate the x and y to get an angle to the center of the div from that x and y. **/
                /** gets the x value relative to the center of the DIV and "normalize" it **/
                x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
                y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
            
                /** the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);**/
                /** first calculate the angle of the point, 
                add 180 deg to get rid of the negative values
                divide by 90 to get the quadrant
                add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
                direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;
            
            return direction;
            
        };

        var _getPosition = function( direction, $el ) {
            var fromLeft, fromTop;
            switch( direction ) {
                case 0:
                    // from top
                    if ( !settings.reverse ) { 
                            fromLeft = 0, fromTop = - $el.height() 
                    }else {  
                            fromLeft = 0, fromTop = - $el.height()  
                    }
                    break;
                case 1:
                    // from right
                    if ( !settings.reverse ) { 
                            fromLeft = $el.width()  , fromTop = 0
                    }else {  
                            fromLeft = - $el.width() , fromTop = 0 
                    }
                    break;
                case 2:
                    // from bottom
                    if ( !settings.reverse ) { 
                            fromLeft = 0 , fromTop = $el.height() 
                    }
                    else {  
                            fromLeft = 0, fromTop = - $el.height()  
                    }
                    break;
                case 3:
                    // from left
                    if ( !settings.reverse ) {
                            fromLeft = -$el.width()  , fromTop = 0
                    }
                    else {  
                            fromLeft =  $el.width(), fromTop = 0 
                    }
                    break;
            };
            return { from : fromLeft, to: fromTop };
        }; 


    /* ====================================================================== *
            [10] MAGNIFIC POPUP
     * ====================================================================== */

        var delegate = '.mb-open-popup[data-mfp-src]';
        
        if(settings.considerFilteringInPopup){
            delegate = itemSelector+':not(.hidden-media-boxes-by-filter) .mb-open-popup[data-mfp-src], .'+itemHiddenClass+':not(.hidden-media-boxes-by-filter) .mb-open-popup[data-mfp-src]';
        }
        if(settings.showOnlyLoadedBoxesInPopup){
            delegate = itemSelector+':visible .mb-open-popup[data-mfp-src]';
        }

        $container.magnificPopup({
            delegate: delegate, // child items selector, by clicking on it popup will open
            type: 'image',
            removalDelay : 200,
            closeOnContentClick : true,
            mainClass : 'my-mfp-slide-bottom',
            gallery:{
                enabled:settings.gallery
            },
            closeMarkup : '<button title="%title%" class="mfp-close"></button>',
            titleSrc: 'title',
            iframe : {
                patterns : {
                    youtube: {
                      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                      id: 'v=', // String that splits URL in a two parts, second part should be %id%
                      // Or null - full URL will be returned
                      // Or a function that should return %id%, for example:
                      // id: function(url) { return 'parsed id'; } 

                      src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
                    },
                    vimeo: {
                      index: 'vimeo.com/',
                      id: '/',
                      src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                    },
                },
                markup : '<div class="mfp-iframe-scaler">'+
                                '<div class="mfp-close"></div>'+
                                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                                '<div class="mfp-bottom-bar" style="margin-top:4px;"><div class="mfp-title"></div><div class="mfp-counter"></div></div>'+
                         '</div>'                      
            },
            callbacks : {
                change : function() {
                    var item    = $(this.currItem.el);
                    setTimeout(function(){ 
                        if(item.attr('title') != undefined){
                            $('.mfp-title').html(item.attr('title'));    
                        }else{
                            $('.mfp-title').html('');
                        }
                    }, 5);   

                    if(settings.deepLinking){
                        location.hash   = '#!' + item.attr('data-mfp-src') + '||' + item.parents('.media-boxes-container').attr('id'); /* with the "src" of the image and the "id" of the container */
                    }
                },
                beforeOpen: function() {
                    this.container.data('scrollTop', parseInt($(window).scrollTop()));
                },
                open: function(){
                    $('html, body').scrollTop( this.container.data('scrollTop') );
                },
                close: function () {
                    if(settings.deepLinking){
                        window.location.hash = '#!';
                    }
                },
            },
        });


    /* ====================================================================== *
            [11] DEEP LINKING
     * ====================================================================== */

        if(settings.deepLinking){
        
                function urlFromHash() {
                    if (location.hash.substr(0, 2) != '#!') {
                        return null;
                    }
                    // why not location.hash? => http://stackoverflow.com/q/4835784/298479
                    var hash    = location.href.split('#!')[1];
                    var id      = hash.split('||')[1];
                    var src     = hash.split('||')[0];
                    return {
                        hash: hash,
                        id: id,
                        src: src
                    };
                }

                var hashUrl = urlFromHash();
                if (hashUrl) {
                    $container.filter('[id="' + hashUrl.id + '"]').find('.mb-open-popup[data-mfp-src="' + hashUrl.src + '"]').trigger('click');
                }

                function doHash() {
                    var mp = $.magnificPopup.instance;
                    if (!mp) {
                        // this check is not needed in this example, but in some cases you might delay everything before
                        // this event e.g. until something else finished loading - in that case hashchange might trigger before
                        return;
                    }
                    
                    var url = urlFromHash();
                    if (!url && mp.isOpen) {
                        // no url => close popup
                        mp.close();
                    } else if (url) {
                        if ( mp.isOpen && mp.currItem && mp.currItem.el.parents('.media-boxes-container').attr('id') == url.id ) {
                            if( mp.currItem.el.attr('data-mfp-src') != url.src ){
                                // open => only update if necessary
                                var index = null;
                                $.each(mp.items, function (i, item) {
                                    var jqItem = item.parsed ? item.el : $(item);
                                    if (jqItem.attr('data-mfp-src') == url.src) {
                                        index = i;
                                        return false;
                                    }
                                });
                                if (index !== null) {
                                    mp.goTo(index);
                                }
                            }else{
                                // is already in the correct one
                            }
                        }else{
                            // not open or doesn't match the right one => simply click the matching link
                            $container.filter('[id="' + url.id + '"]').find('.mb-open-popup[data-mfp-src="' + url.src + '"]').trigger('click');
                        }
                    }
                }

                if (window.addEventListener) {
                    window.addEventListener("hashchange", doHash, false);
                } else if (window.attachEvent) {
                    window.attachEvent("onhashchange", doHash);  
                }

        }

        return this;

    };//END OF FUSION OBJECT
    

     $.fn.mediaBoxes = function(options) {
    
        return this.each(function(key, value){
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('mediaBoxes')) return element.data('mediaBoxes');
            // Pass options to plugin constructor
            var mediaBoxes = new MediaBoxes(this, options);
            // Store plugin object in this element's data
            element.data('mediaBoxes', mediaBoxes);
        });

    };
    
    //Default settings
    $.fn.mediaBoxes.defaults = {
        boxesToLoadStart: 8,
        boxesToLoad: 4,
        minBoxesPerFilter: 0,
        lazyLoad: true,
        horizontalSpaceBetweenBoxes: 15,
        verticalSpaceBetweenBoxes: 15,
        columnWidth: 'auto',
        columns: 4,
        resolutions: [
            {
            	maxWidth: 960,
            	columnWidth: 'auto',
                columns: 3,
            },
            {
                maxWidth: 650,
                columnWidth: 'auto',
                columns: 2,
            },
            {
            	maxWidth: 450,
            	columnWidth: 'auto',
                columns: 1,
            },
        ],
        filterContainer: '#filter',
        filter: 'a',
        search: '', // i.e. #search
        searchTarget: '.media-box-title',
        sortContainer: '', // i.e. #sort
        sort: 'a',
        getSortData: {
          title: '.media-box-title',
          text: '.media-box-text',
        }, 
        waitUntilThumbLoads: true, // When they have dimensions specified
        waitForAllThumbsNoMatterWhat: false, // Wait for all the thumbnails to load even if they got dimensions specified
        thumbnailOverlay: true, //Show the overlay on mouse over
        overlayEffect: 'fade', // 'push-up', 'push-down', 'push-up-100%', 'push-down-100%', 'reveal-top', 'reveal-bottom', 'reveal-top-100%', 'reveal-bottom-100%', 'direction-aware', 'direction-aware-fade', 'direction-right', 'direction-left', 'direction-top', 'direction-bottom', 'fade'
        overlaySpeed: 200,
        overlayEasing: 'default',
        showOnlyLoadedBoxesInPopup: false,
        considerFilteringInPopup: true,
        deepLinking: true,
        gallery: true,
        LoadingWord: 'Loading...',
        loadMoreWord: 'Load More',
        noMoreEntriesWord: 'No More Entries',
    };




    /* DROP DOWN PLUGIN */

    (function(){

        function start($wrapper){
            var $menu           = $wrapper.find('.media-boxes-drop-down-menu');
            var $header         = $wrapper.find('.media-boxes-drop-down-header');
            
            function mouseout(){
                $menu.hide(); 
            };

            function mouseover(){
                $menu.show();
            };

            function updateHeader(){
                var $selectedDefault    = $menu.children( '.selected' );
                var $selected           = $selectedDefault.length ? $selectedDefault : $menu.children().first();

                
                $header.html( $selected.clone().find('a').append('<span class="fa fa-sort-desc"></span>').end().html() );
            }
            updateHeader();

            function click(e){
                e.preventDefault();
                
                $(this).parents('li').siblings('li').removeClass('selected').end().addClass('selected');
                updateHeader();
            }

            $header
                .bind('mouseout blur', mouseout)
                .bind('mouseover focus', mouseover);

            $menu.find('> li > *')
                .bind('mouseout blur', mouseout)
                .bind('mouseover focus', mouseover)
                .bind('click', click);


            $header.on('click', 'a', function(e){
                e.preventDefault();
                return false;
            });

        }


        $('.media-boxes-drop-down').each(function(){
            start($(this));
        });

    })();


    
})( window, jQuery );