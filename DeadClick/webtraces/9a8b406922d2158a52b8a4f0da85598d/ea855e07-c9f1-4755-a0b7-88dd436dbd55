//credits James Padolsey http://james.padolsey.com/

function ftg_getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

var qualifyURL = function (url) {
    var img = document.createElement('img');
    img.src = url; // set string url
    url = img.src; // get qualified url
    img.src = null; // no server request
    return url;
};

(function ($, window, document, undefined) {
	    
    $.fn.visible = function (partial) {

        if (!$(this).offset())
            return true;

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    var pluginName = "finalTilesGallery",
        defaults = {
            margin: 10,
            layout: 'final', // final | columns
            loadMethod: 'sequential', // sequential | lazy
            columns: [
	            [4000, 5],
	            [1024, 4],
	            [800, 3],
	            [480, 2],
	            [320, 1]
            ],
            minTileWidth: 200,
            ignoreImageAttributes: true,
            imageSizeFactor: [
                [4000, .9],
                [1024, .8],
                [800, .7],
                [600, .6],
                [480, .5],
                [320, .3]
            ],            
            gridSize: 10,
            allowEnlargement: true,
            autoLoadURL: null,
            autoLoadOffset: 50,
            pageSize: 20,
            selectedFilter: '',
            onComplete: function () {},
            onUpdate: function () {},
            nonce: null,
            galleryId: 0,
            debug: false
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.$element = $(element);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.tiles = [];
        this._loadedImages = 0;
        this.edges = [];
        this.currentWidth = 0;
        this.currentImageSizeFactor = 1;
        this.ajaxComplete = false;
        this.isLoading = false;
        this.$loadingBar = null;
        this.currentPage = 1;
        this.currentColumnsCount = 0;
        this.imagesData = {};
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
	    print : function (text) {
		    if(this.settings.debug)
		    	console.log(text);
	    },
        warn : function (text) {
            console.warn(text);
        },
    	setCurrentImageSizeFactor : function () {
            this.currentImageSizeFactor = 1;
            var ww = $(window).width();
            for (var i = 0; i < this.settings.imageSizeFactor.length; i++) {
                if (this.settings.imageSizeFactor[i][0] >= ww)
                    this.currentImageSizeFactor = this.settings.imageSizeFactor[i][1];
            }
            if(!this.currentImageSizeFactor)
            	this.currentImageSizeFactor = 1;
            this.print(".. current image size factor: " + this.currentImageSizeFactor + " (" + ww + ")");
        },
        setCurrentColumnSize: function () {
	        
	        var ww = $(window).width();
            for (var i = 0; i < this.settings.columns.length; i++) {
                if (this.settings.columns[i][0] >= ww)
                    this.currentColumnsCount = this.settings.columns[i][1];
            }
	        
            this._columnSize = Math.floor((this.currentWidth - (this.settings.margin * (this.currentColumnsCount - 1))) / this.currentColumnsCount);
        
            this.print(this.currentWidth + " | " + this._columnSize + " | " + this.currentColumnsCount);
        },
        init: function () {
            this.print("== initializing plugin ==");
            var current_filter = this.settings.selectedFilter;
            var filter_url = ftg_getURLParameter('ftg-set');
                if(filter_url)
                    current_filter = filter_url;

            var instance = this;           

            if(current_filter != null)
            {
                instance.print(".. found filter (" + current_filter + ")");
                instance.$element.find(".ftg-filters a").removeClass('selected');
                instance.$element.find(".ftg-filters a").each(function(){
                  
                    if($(this).data('filter') == current_filter)
                    {
                        instance.print(".. selecting filter");
                        $(this).addClass('selected');
                    }
                })
            }                     
          
            var hash = window.location.hash;

            this.$element.find(".ftg-items").css({
                position: 'relative',
                minWidth: instance.settings.minTileWidth
            });

            if((hash && hash != "#ftg-set-ftgall" && hash.substr(0, 8) == '#ftg-set') ||
                    instance.settings.selectedFilter)
            {
                var ft = '#ftg-set-' + instance.settings.selectedFilter;
                if(hash)
                    ft = hash;

                var hash_class = ft.replace('#','.');
                var filters = [];

                 instance.$element.find(".ftg-filters a").each(function(){
                    filters.push($(this).attr('href'));
                 });

                 if($.inArray(ft, filters) >= 0)
                 {
                   hash_class = hash_class.substring(1);       

                    instance.$element.find(".ftg-filters a").each(function(){

                       if($(this).attr('href') != ft){

                         instance.$element.find('[data-class="item"]').each(function(){
                            var img = $(this).parent().parent();

                            if(img.hasClass(hash_class) == false)
                            {                                
                                img.addClass('ftg-hidden');
                            }                          
                         })


                         $(this).removeClass('selected');
                         };
                     });

                     $('a[href="' + ft + '"]').addClass('selected');
                }                
            }             

            this.tiles = this.$element.find('.tile').not('.ftg-hidden').not(".ftg-hidden-tile");
            this.tiles.css({
                transition: 'all .3s'
            });
            this.currentWidth = this.$element.width();
            this.print(".. gallery width: " + this.currentWidth);
            
            this.$loadingBar = this.$element.find(".ftg-items .loading-bar i");
            
            if(instance.$element.filter(":visible").length == 0) {
	            instance.warn('cannot initialize the gallery, container is hidden. Retrying in 500ms.');
	            setTimeout(function () {
		            instance.init();
	            }, 500);
	            return;
            }
            
            if(this.settings.layout != 'columns' && this.settings.layout != 'rows' && 
				this.settings.layout != 'final') {
					instance.warn("unknown layout, falling back to 'final'.")
				}
				
            if(this.settings.layout == 'columns') {
                this.setCurrentColumnSize();
            }

            var _resizeTo = 0;
            this.setCurrentImageSizeFactor();
            $(window).resize(function () {
                _resizeTo = setTimeout(function () {
                    if (instance.currentWidth != instance.$element.width()) {
                        clearTimeout(_resizeTo);                        
                        instance.print("this.currentWidth", this.currentWidth);
                        instance.currentWidth = instance.$element.width();
                        instance.setCurrentColumnSize();
                        instance.setCurrentImageSizeFactor();
                        instance.refresh();
                    }
                }, 500);
            });
			
			instance.isLoading = true;
			if(instance.settings.autoLoadURL && instance.settings.pageSize > 0) {
				$(window).scroll(function () {					
					if(!instance.ajaxComplete && !instance.isLoading) {
                        console.log(instance.tiles.last().visible());
	                    if (instance.tiles.last().visible()) {
	                        instance.isLoading = true;
	                        $.post(
                                    instance.settings.autoLoadURL, 
                                    { 
                                        page: ++instance.currentPage,
                                        action: 'load_chunk',
                                        pageSize: instance.settings.pageSize,
                                        finaltilesgallery: instance.settings.nonce,
                                        gallery: instance.settings.galleryId
                                    }, function (html) {
	                            if ($.trim(html).length == 0) {
	                                instance.ajaxComplete = true;
	                            } else {
		                            instance.$element.find(".ftg-items").append(html);
		                            instance.tiles = instance.$element.find('.tile')
	                                instance.loadImage();
	                            }
	                        });
	                	}
	                }
	            });	            
			}
			
			this.setupFilters();
            this.edges.push({ left: 0, top: 0, width: this.currentWidth, index: 0 });

            if(this.settings.layout == 'columns')
                this.edges[0].width = this._columnSize * this.currentColumnsCount + 
                    (this.settings.margin * (this.currentColumnsCount - 1));
        
			this.isImageLoading = false;
						
			/*! init lazyLoad */
			if(instance.settings.loadMethod == 'lazy') {				
				$(window).scroll(function(event) {  
					instance.loadImage();
				});				
			}
			this.loadImage();
        },
        setupFilters: function() {
            this.print("== setup filters ==");
	        var instance = this;
	        instance.$element.find(".ftg-filters a").click(function(e) {		        	
		        instance.$element.find(".ftg-filters a").removeClass("selected");
		        $(this).addClass("selected");
		        
		        var ft = $(this).attr("href").replace("#ftg-set-", "");
		        if(ft == "ftgall") {
			    	instance.$element.find(".tile").removeClass("ftg-hidden");
		        } else {
			        instance.$element
			        			.find(".tile")			        			
			        			.not(".ftg-set-" + ft)
			        			.addClass("ftg-hidden")
			        			.end()
			        			.filter(".ftg-set-" + ft)
			        			.removeClass("ftg-hidden");
			    }
		        instance.refresh();
	        });
        },
        printEdges: function () {
            this.$element.find(".edge").remove();
            for (i = 0; i < this.edges.length; i++) {
                var $e = $("<div class='edge' />");
                $e.append("top: " + this.edges[i].top + "<br>");
                $e.append("left: " + this.edges[i].left + "<br>");
                $e.append("width: " + this.edges[i].width + "<br>");                
                $e.css({
                    left: this.edges[i].left,
                    top: this.edges[i].top,
                    marginTop: -25,
                    marginLeft: 20
                });
                this.$element.append($e);
            }
        },
        printEdge: function (edge) {
            var $e = $("<div class='edge enlarged-"+edge.enlarged+"' />");
            $e.append("<b>"+ edge.index + " " + edge.ecase + "</b><br>");
            $e.append("t: " + Math.round(edge.top) + " l: " + edge.left + "<br>");
            $e.append("width: " + edge.width + "<br>");
            $e.append("idx: " + edge.tileIndex + "<br>");
            
            $e.css({
                left: edge.left,
                top: edge.top,
                marginTop: -25,
                marginLeft: 20
            });
            this.$element.append($e);
        },
        refresh: function () {
            this.print("-- refreshing gallery --");
	        this.$element.find(".edge").remove();            
            this.edges = [
                { left: 0, top: 0, width: this.currentWidth }
            ];
            if(this.settings.layout == 'columns')
                this.edges[0].width = this._columnSize * this.currentColumnsCount + 
                    (this.settings.margin * (this.currentColumnsCount - 1));
            this.tiles.removeClass("ftg-loaded ftg-enlarged");
            this.tiles = this.$element.find('.tile').not('.ftg-hidden').not(".ftg-hidden-tile");
            this._loadedImages = 0;
            this.loadImage();
        },
        increaseLoadingProgress: function() {	        
            var perc = ( this._loadedImages + 1 ) / this.tiles.length * 100;
            this.$loadingBar.css({
                width: perc + "%",
                opacity: (100 - perc) / 100
            });
            if (perc >= 100)
                this.$loadingBar.parent().fadeOut();
        },
        loadImage: function () {
            var instance = this;
            
            if(instance.isImageLoading || this.tiles.not(".ftg-loaded").length == 0) {
	            return;
            }
            
            instance.isImageLoading = true;
            var $tile = this.tiles.not(".ftg-loaded").first();
            
            if(instance._loadedImages > 0) {
	            var $last = this.tiles.filter(".ftg-loaded").last();
	            
	            if(instance.settings.loadMethod == 'lazy' && !$last.visible(true)) {
		            instance.isImageLoading = false;
		            return;
	            }
            }

            if($tile.find("iframe").length)
                $tile.find("iframe:first").addClass("item").attr("data-class", "item");

            var $item = $tile.find('[data-class="item"]');
            
            function next() {
                instance.add(instance._loadedImages);
				instance.isImageLoading = false;
                if (++instance._loadedImages < instance.tiles.length) {
	                instance.loadImage();
                } else {
					var height = instance.lowerEdgeTop();
					instance.print("lower edge top: " + height);
					instance.$element.find(".ftg-items").height(height);
					instance.isLoading = false;
                    instance.settings.onComplete();
                }
            }

            switch ($item.get(0).tagName.toLowerCase()) {
                case "img":
	                var iFactor = instance.currentImageSizeFactor;
                	if(instance.settings.ignoreImageAttributes || (!$item.attr("width") || !$item.attr("height"))) {
	                	var img = new Image();
	                    img.onload = function () {	                        
	                        if ($tile.data("ftg-ignore-size-factor"))
	                            iFactor = 1;
							
	                        var size = {};
	                        var addImage = true;
	                        if(instance.settings.layout == "final") {
	                            size.width = img.width * iFactor;
	                            size.height = img.height * iFactor;
	                        }
	                        if(instance.settings.layout == "columns") {
	                            size.width = instance._columnSize;
	                            size.height = (size.width * img.height) / img.width;
	                        }
	                        
	                        $item.attr("src", this.src);
	                        instance.imagesData["tile" + instance._loadedImages] = {
								width: size.width,
								height: size.height,
								owidth: img.width,
								oheight: img.height,
								src: img.src
							};
                            //$tile.addClass("ftg-loaded");
	                        instance.increaseLoadingProgress();
                            instance.print("loaded image + " + instance._loadedImages);
	                        next();
	                    }
	                    img.onerror = function() {
		                    instance.warn("error loading image: " + img.src);
		                    instance.increaseLoadingProgress();
		                    next();
	                    }
	                    img.src = $item.data("ftg-src");
                	} else {
	                	$item.attr("src", $item.data("ftg-src"));
	                	
	                	var size = {};
                        var addImage = true;
                        if(instance.settings.layout == "final") {
                            size.width = parseInt($item.attr("width")) * iFactor;
                            size.height = parseInt($item.attr("height")) * iFactor;
                        }
                        if(instance.settings.layout == "columns") {
                            size.width = instance._columnSize;
                            size.height = (size.width * parseInt($item.attr("height"))) / parseInt($item.attr("width"));
                        }
	                	
	                	instance.imagesData["tile" + instance._loadedImages] = {
							width: size.width,
							height: size.height,
							owidth: parseInt($item.attr("width")),
							oheight: parseInt($item.attr("height")),
							src: $item.data("ftg-src")
						};

                        var img = new Image();
                        img.onload = function () {
                            $tile.addClass("ftg-img-loaded");
                        }
                        img.src = $item.data("ftg-src");

                        $tile.addClass("ftg-loaded");
                        $item.css("opacity", 0);
                        instance.increaseLoadingProgress();
                        next();
                	}
                    
                    $item.removeAttr("width");
                    $item.removeAttr("height");
                    $tile.data("ftg-type", "image");
                    break; 
                case "iframe":
                	var w = $item.attr("width") ? parseInt($item.attr("width")) : $item.data('width');
                	var h = $item.attr("height") ? parseInt($item.attr("height")) : $item.data('height');
                	
                    var size = {};
                    if(instance.settings.layout == "columns") {
                        size.width = instance._columnSize;
                        size.height = (size.width * h) / w;
                    } else {
                        size.width = w;
                        size.height = h;
                    }
                    instance.imagesData["tile" + instance._loadedImages] = {
	                	width: size.width,
						height: size.height,
						owidth: size.width,
						oheight: size.height
	                };
                    $tile.data("ftg-type", "iframe");
                    instance.increaseLoadingProgress();
                    next();
                    break;
                default:
                    instance.imagesData["tile" + instance._loadedImages] = {
	                	width: parseInt($item.data("width")),
						height: parseInt($item.data("height")),
						owidth: parseInt($item.data("width")),
						oheight: parseInt($item.data("height"))
	                };
                    $tile.data("ftg-type", "generic");
                    instance.increaseLoadingProgress();
                    next();
                    break;
            }
        },
        higherEdge: function () {
            var left = 0;
            var _top = 100000;
            var _left = 0;
            var found = 0;

            for (var i = 0; i < this.edges.length; i++) {
                if (this.edges[i].top < _top) {
                    found = i;
                    _top = this.edges[i].top;
                }
            }

            return this.edges[found];
        },
        lowerEdgeTop: function () {
	        var min = 0;
            for (var i = 0; i < this.edges.length; i++) {
                if (this.edges[i].top > min) {
                    min = this.edges[i].top;
                }
            }

            return min;
        },
        alignEdge: function (edge, index) {
            //look left
            for (var i = 0; i < this.edges.length; i++) {
                if (this.edges[i].left + this.edges[i].width + this.settings.margin == edge.left) {
                    this.print("found edge on left", i);
                    //adjust edge
                    if (edge.top == this.edges[i].top) {
                        this.print("edges can be aligned [1]");
                        return { side: 'left', edge: this.edges[i] };
                    }
                }
            }
            //TODO look right
            for (var i = 0; i < this.edges.length; i++) {
                if (this.edges[i].left - this.settings.margin == edge.left + edge.width) {
                    this.print("found edge on right", i);
                    //adjust edge
                    if (edge.top == this.edges[i].top) {
                        this.print("edges can be aligned [2]");
                        return { side: 'right', edge: this.edges[i] };
                    }
                }
            }

            return null;
        },
        removeEdge: function (edge) {
            var tmp = [];
            for (var i = 0; i < this.edges.length; i++) {
                if (this.edges[i] != edge)
                    tmp.push(this.edges[i]);
            }
            this.edges = tmp;
        },
        add: function (tileIndex) {
            this.print("== adding new tile ==");
            var instance = this;
            var $t = this.tiles.eq(tileIndex);

            var $item = $t.find('[data-class="item"]');
            var key = "tile" + tileIndex;
            var w = this.imagesData[key].width;
            var h = this.imagesData[key].height;

            var hEdge = this.higherEdge();
            this.print(hEdge);
            hEdge.tileIndex = tileIndex;

            this.print("Index: " + tileIndex + " [" + $t.data("ftg-type") + "] (" + w + "x" + h + ")");

            if (hEdge.top > 0) {
                hEdge.top += this.settings.margin;
            }

            $t.css({
                left: hEdge.left,
                top: hEdge.top,
                position: 'absolute'
            });

			hEdge.enlarged = false;
			
			//is the tile wider than the current edge?
            if (hEdge.width < w + this.settings.margin) {
	            hEdge.ecase = 'Te';
                this.print('Te', hEdge.width);
                //edge smaller than the image
                var w2 = hEdge.width;
                var h2 = (h / w) * w2;

                if (w2 + hEdge.left - this.settings.margin == this.currentWidth) {
                    this.print("END");
                    w2 -= this.settings.margin;
                    h2 = (h / w) * w2;
                }

                w = w2;
                h = h2;
            } else if (hEdge.width > w) {
                this.print('tE');                
                //break the edge
                //is the new edge wider than minTileWidth?
                if (this.settings.layout == 'columns' || hEdge.width - w >= this.settings.minTileWidth) {
	                hEdge.ecase = 'tE';
                    this.print('tE1', hEdge.width, hEdge.left, this.currentWidth);

                    var newEdge = {
                        left: hEdge.left + w + this.settings.margin,
                        top: hEdge.top - (hEdge.top > 0 ? this.settings.margin : 0),
                        width: hEdge.width - w - this.settings.margin,
                        marginLeft: true,
                        ecase: 'NEW',
                        index: hEdge.index + 1
                    }
                    
                    //console.log("newEdge", newEdge);
                    this.edges.push(newEdge);
                    //this.printEdge(newEdge);
                } else {
	                hEdge.ecase = 'tE2';
                    this.print('tE2');
                    //not enough space for the next tile
                    //enlargement
                    this.print("enlargement", hEdge.width, hEdge.left, this.currentWidth);
                    var m = hEdge.left + hEdge.width == this.currentWidth ?  0 : this.settings.margin;
                    //var w2 = hEdge.width - m;
                    var w2 = hEdge.width;
                    var h2 = this.settings.allowEnlargement ? (h / w) * w2 : h;
                    
                    if (this.settings.allowEnlargement) {
                        $t.addClass("ftg-enlarged");
                        hEdge.enlarged = true;                                               
                    } else {
	                    $t.find('[data-class="item"]').css({
		                    width: w,
		                    height: h
	                    });
                    }
                    
                    w = w2;
                    h = h2;                    
                }
            }
                        
            hEdge.top += h;
            var diff = 0;
            if(this.settings.gridSize)
            	diff = hEdge.top % this.settings.gridSize;
            hEdge.top -= diff;
            h -= diff;
            
            hEdge.left = hEdge.left;
            hEdge.width = w;
            //hEdge.index = tileIndex + 1;

			var printEdge = true;
			
            var aligned = this.alignEdge(hEdge, tileIndex);
            if (aligned) {
	            if(aligned.side == 'left') {
	                this.removeEdge(hEdge);
	                aligned.edge.width += w + this.settings.margin;
	                h = h - (hEdge.top - aligned.edge.top);
					hEdge.top -= h;
	                printEdge = false;
				} else {
	                this.removeEdge(aligned.edge);
	                hEdge.width += this.settings.margin + aligned.edge.width;
	                printEdge = false;
	            }
	                                
                $t.height(h);
            }
                
            if (this.$element.find(".ftg-items").height() < hEdge.top)
                this.$element.find(".ftg-items").height(hEdge.top);

			if(this.settings.debug && printEdge) {
				this.printEdge(hEdge);				
			}

            if ($t.data("ftg-type") == "iframe") {
                $t.find("iframe").height(h);
            }

            this.print(w + "x" + h);
            this.print("----");
			
			/*! outside captions */            
            $t.css({
                width: w,
                height: h// + 1000
            });
            $t.find(".tile-inner").css({
	            width: w,
                height: h,
                visibility: 'hidden'
            });
            var transition = $t.css('transition');
            $t.css({
	            display: 'block',
	            opacity: 1,
	            transform: 'scale(1)'
	            //transition: 'none'
            });

            var captionHeight = $t.find(".caption-outside").height();
            var pt = $t.find(".caption-outside").css('padding-top');
            if(pt)
            	captionHeight += parseInt(pt.replace(/px/, ''));
            var pb = $t.find(".caption-outside").css('padding-bottom');
            if(pb)
            	captionHeight += parseInt(pb.replace(/px/, ''));

            $t.css({
	            height: h + captionHeight,
	            transition: transition
            });
            hEdge.top += captionHeight;
            
            var ratio = w / $item.data("width");
            
			var hdiff = ($item.data("height") * ratio) - h;
			if(hdiff > 0) {
				$item.css({
					top: 0 - (hdiff / 2)
				});
			}
            $t.addClass("ftg-loaded");
            $t.find(".tile-inner").css({
                visibility: 'visible'
            });
        }
    });

    $.fn[pluginName] = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });

        // chain jQuery functions
        return this;
    };
	
	$(function () {
		$(".ftg-social a").click(function(e) {

			e.preventDefault();
			var social = $(this).data("social");
			var $tile = $(this).parents(".tile").first();
			var image = $tile.data("big");
			if(! image) 
				image = $tile.find('[data-class="item"]').attr("src");
				
			var text = $.trim($tile.find(".caption").text());
			if(! text.length) 
				text = document.title;
				
			if(social == "facebook") {
				var url = "https://www.facebook.com/dialog/feed?app_id=1447224948871585&"+
                            "link="+encodeURIComponent(location.href)+"&" +
                            "display=popup&"+
                            "name="+encodeURIComponent(document.title)+"&"+
                            "caption=&"+
                            "description="+encodeURIComponent(text)+"&"+
                            "picture="+encodeURIComponent(qualifyURL(image))+"&"+
                            "ref=share&"+
                            "actions={%22name%22:%22View%20the%20gallery%22,%20%22link%22:%22"+encodeURIComponent(location.href)+"%22}&"+
                            "redirect_uri=http://final-tiles-gallery.com/facebook_redirect.html";
                
                var w = window.open(url, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
			}
			
			if(social == "twitter") {
				var w = window.open("https://twitter.com/intent/tweet?url=" + encodeURI(location.href.split('#')[0]) + "&text=" + encodeURI(text), "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
			}
			
			if(social == "pinterest") {
				var url = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(location.href) + "&description=" + encodeURI(text);

                url += ("&media=" + encodeURIComponent(qualifyURL(image)));

                var w = window.open(url, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
			}
			
			if(social == "google-plus") {
				var url = "https://plus.google.com/share?url=" + encodeURI(location.href);

                var w = window.open(url, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
			}
		});
	});
})(jQuery, window, document);