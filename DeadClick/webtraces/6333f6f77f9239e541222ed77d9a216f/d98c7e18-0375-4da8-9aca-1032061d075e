//credits James Padolsey http://james.padolsey.com/
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
            onComplete: function () {},
            onUpdate: function () {},
            debug: false
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.$element = $(element);
        this.settings = $.extend({}, defaults, options);
        if(!this.settings.gridSize)
            this.settings.gridSize = 5;
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
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
	    print : function (text) {
		    if(this.settings.debug)
		    	console.log(text);
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
            this.print("current image size factor: " + this.currentImageSizeFactor + " (" + ww + ")");
        },
        init: function () {
            var instance = this;
            this.$element.find(".ftg-items").css({
                position: 'relative',
                minWidth: instance.settings.minTileWidth
            });
            this.tiles = this.$element.find('.tile').not('.ftg-hidden');

            this.tiles.css({
                transition: 'all .3s'
            });
            this.currentWidth = this.$element.width();
            this.print("this.currentWidth: " + this.currentWidth);
            

            this.$loadingBar = this.$element.find(".ftg-items .loading-bar i");
            
            if(instance.$element.filter(":visible").length == 0) {
	            instance.print('cannot initialize the gallery, container is hidden. Retrying in 500ms.');
	            setTimeout(function () {
		            instance.init();
	            }, 500);
	            return;
            }

            var _resizeTo = 0;
            this.setCurrentImageSizeFactor();
            $(window).resize(function () {
                _resizeTo = setTimeout(function () {
                    if (instance.currentWidth != instance.$element.width()) {
                        clearTimeout(_resizeTo);                        
                        instance.print("this.currentWidth", this.currentWidth);
                        instance.currentWidth = instance.$element.width();
                        instance.setCurrentImageSizeFactor();
                        instance.refresh();
                    }
                }, 500);
            });
			
			instance.isLoading = true;
			if(instance.settings.autoLoadURL) {
				$(window).scroll(function () {					
					if(!instance.ajaxComplete && !instance.isLoading) {
	                    if ($(window).scrollTop() >= $(document).height() - $(window).height() - instance.settings.autoLoadOffset) {
	                        instance.isLoading = true;
	                        $.get(instance.settings.autoLoadURL, { page: ++instance.currentPage }, function (html) {
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
            this.loadImage();
        },
        setupFilters: function() {
	        var instance = this;
	        instance.$element.find(".ftg-filters a").click(function(e) {
		        e.preventDefault();
		        
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
            $e.append("<b>"+ edge.index + " " + edge.case + "</b><br>");
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
	        this.$element.find(".edge").remove();            
            this.edges = [
                { left: 0, top: 0, width: this.currentWidth }
            ];
            this.tiles.removeClass("ftg-loaded ftg-enlarged");
            this.tiles = this.$element.find('.tile').not('.ftg-hidden');
            this._loadedImages = 0;
            this.loadImage();
        },
        increaseLoadingProgress: function() {
	        this.print("loaded " + this._loadedImages + " / " + this.tiles.length);
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
            var $tile = this.tiles.eq(this._loadedImages);

            if($tile.find("iframe").length)
                $tile.find("iframe:first").addClass("item");

            var $item = $tile.find('.item');
            
            function next() {	            
                instance.add(instance._loadedImages);

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
                    var img = new Image();
                    img.onload = function () {
                        var iFactor = instance.currentImageSizeFactor;
                        if ($tile.data("ftg-ignore-size-factor"))
                            iFactor = 1;
						
                        $item.attr("src", this.src);
                        $item.data("width", img.width * iFactor );
                        $item.data("height", img.height * iFactor);
                        $item.data("owidth", img.width);
                        $item.data("oheight", img.height);
                        instance.increaseLoadingProgress();
                        next();
                    }
                    img.onerror = function() {
	                    instance.print("error loading image: " + img.src);
	                    instance.increaseLoadingProgress();
	                    next();
                    }
                    img.src = $item.data("ftg-src");
                    $item.removeAttr("width");
                    $item.removeAttr("height");
                    $tile.data("ftg-type", "image");
                    break;
                case "iframe":
                    $item.data("width", $item.attr("width"));
                    $item.data("height", $item.attr("height"));
                    $item.data("owidth", $item.attr("width"));
                    $item.data("oheight", $item.attr("height"));
                    $tile.data("ftg-type", "iframe");
                    instance.increaseLoadingProgress();
                    next();
                    break;
                default:
                    $item.data("width", $item.data("width"));
                    $item.data("height", $item.data("height"));
                    $item.data("owidth", $item.data("width"));
                    $item.data("oheight", $item.data("height"));
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
            var $t = this.tiles.eq(tileIndex);

            var $item = $t.find('.item');
            var w = $item.data('width');
            var h = $item.data('height');

            var hEdge = this.higherEdge();
            this.print(hEdge);
            hEdge.tileIndex = tileIndex;

            this.print(tileIndex + " [" + $t.data("ftg-type") + "] (" + w + "x" + h + ")");

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
	            hEdge.case = 'Te';
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
                if (hEdge.width - w >= this.settings.minTileWidth) {
	                hEdge.case = 'tE';
                    this.print('tE1', hEdge.width, hEdge.left, this.currentWidth);

                    var newEdge = {
                        left: hEdge.left + w + this.settings.margin,
                        top: hEdge.top - (hEdge.top > 0 ? this.settings.margin : 0),
                        width: hEdge.width - w - this.settings.margin,
                        marginLeft: true,
                        case: 'NEW',
                        index: hEdge.index + 1
                    }
                    						
                    //console.log("newEdge", newEdge);
                    this.edges.push(newEdge);
                    //this.printEdge(newEdge);
                } else {
	                hEdge.case = 'tE2';
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
	                    $t.find(".item").css({
		                    width: w,
		                    height: h
	                    });
                    }
                    
                    w = w2;
                    h = h2;                    
                }
            }
            
            hEdge.top += h;
            var diff = hEdge.top % this.settings.gridSize;	            
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

            $t.css({
                width: w,
                height: h
            });
            
            var ratio = w / $item.data("width");
            
			var hdiff = ($item.data("height") * ratio) - h;
			if(hdiff > 0) {
				$item.css({
					top: 0 - (hdiff / 2)
				});
			}
            $t.addClass("ftg-loaded");
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
				image = $tile.find(".item").attr("src");
				
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