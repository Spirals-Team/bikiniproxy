/*
Copyright 2014-2015, Oracle and/or its affiliates. All rights reserved.
Author: Matt Heimer
ohc-inline-videos.js 0.2.4 (2015.06.26), based on ohc-videos.js Version: 0.2.2 (2015.06.23)
*/

if (!window.console) {
    window.console = {
        log: function() {
        }
    };
}

window.jjb = {
  fetchVideos: function() {}
};


if (!String.prototype.endsWith) {
  Object.defineProperty(String.prototype, 'endsWith', {
    value: function(searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }
  });
}

(function($) {
	
	var dcommon = "../dcommon";
	for(var i = 0; i < document.scripts.length; i++) { 
		if(document.scripts[i].src.endsWith("ohc-inline-videos.js")) {
			var scriptDir = document.scripts[i].src.substring(0, document.scripts[i].src.lastIndexOf("/"));
			dcommon = scriptDir.substring(0, scriptDir.lastIndexOf("/"));
		}
	}	
	
    function OhcvCommon() {

    }
    OhcvCommon.prototype.getVideo = function(id) {
        return jQuery.getJSON(this.videoPrefix + id + this.videoPostfix);
    };
    OhcvCommon.prototype.getChannelVideos = function(id) {
        return jQuery.getJSON(this.channelPrefix + id + this.channelPostfix);
    };
    OhcvCommon.prototype.getPlaylistVideos = function(id) {
        return jQuery.getJSON(this.playlistPrefix + id + this.playlistPostfix);
    };

	OhcvCommon.prototype.iframeTemplate = $("<iframe class='ohc-iframe' type='text/html' src='' allowfullscreen frameborder='0' />");

    OhcvCommon.prototype.applyiframeTemplate = function(template, video) {
	    var vlink = video.link;
		if(this.settings.autoplay) {
			vlink += "?autoplay=1";
		}
        template.attr("src", vlink);
    };

    OhcvCommon.prototype.videoTemplate = $(
		"<div id='' data-product-id='' class='video-container col3'>" +
		"<a class='ohc-video' href=''><img src='' alt=''></a>" +
		"<div class='video-information'>" +
		"<div class='video-title' id=''><h4></h4></div>" +
		"<div class='video-video-description' id=''></div>" +
		"</div>" +
		"</div");
	
	OhcvCommon.prototype.inlineVideoTemplate = $(	
		"<a class='ohc-video' href=''>" +
		"<span class='video-title'></span>" +
		"<img src='" + dcommon + "/img/icn-video.png' alt='video icon'/>" +
		"</a>");

    OhcvCommon.prototype.applyVideoTemplate = function(template, video) {
        template.attr("id", "container-" + video.content_id);
        template.attr("data-product-id", video.product_id);
		var vlink = video.link;
		if(this.settings.autoplay) {
			vlink += "?autoplay=1";
		}
        template.attr("src", vlink);
        template.find("> a").attr("href", vlink);
        template.find("> a > img").attr("src", video.thumbnail_link);
        template.find("> a > img").attr("alt", video.title);
        template.find(".video-title").attr("id", "title-" + video.content_id);
        template.find(".video-title > h4").text(video.title);
        template.find(".video-video-description").attr("id", "description-" + video.content_id);
        template.find(".video-video-description").html($.trim(video.description.replace(/(\r\n|\n|\r)/gm, "")));
    };
	
	OhcvCommon.prototype.applyInlineVideoTemplate = function(template, video) {
		var vlink = video.link;
		if(this.settings.autoplay) {
			vlink += "?autoplay=1";
		}
        template.attr("href", vlink);
        template.find(".video-title").text(video.title);;
    };

    OhcvCommon.prototype.insertVideos = function(json) {
        //oll format is our native json format, no converting
        if (!json.items) {
            json = {items: [json]};
        }
		var category = false;
		var categories = {};
		for (i = 0; i < json.items.length; i++) {
			if(json.items[i].category) {
				categories[json.items[i].category.toLowerCase()] = true;
			}
		}
        for (i = 0; i < json.items.length; i++) {
            if(this.settings.category) {
				if(!json.items[i].category) {
					if(!categories["general"]) {						
						json.items[i].category = "General";
					} else if(!categories["Other"]) {						
						json.items[i].category = "Other";
					} else if(!categories["Misc"]) {						
						json.items[i].category = "Misc";
					}
				}
				if(category !== json.items[i].category) {
					category = json.items[i].category;
					if(i > 0) {
						this.node.append("<br/>");
					}
					this.node.append("<h3>" + category + "</h3><hr/>");
				}
			}
			if(this.settings.iframe) {
				var h = this.iframeTemplate.clone();
				this.applyiframeTemplate(h, json.items[i]);
				h.appendTo(this.node);
			} else if(this.settings.thumbnail) {
				var h = this.videoTemplate.clone();
				this.applyVideoTemplate(h, json.items[i]);
				h.appendTo(this.node);
			} else {
				var h = this.inlineVideoTemplate.clone();
				this.applyInlineVideoTemplate(h, json.items[i]);
				if(json.items.length > 1) {
					this.node.append("<p>");
				}
				h.appendTo(this.node);
				if(json.items.length > 1) {
					this.node.append("</p>");
				}
			}
			if(this.settings.category && i === json.items.length - 1) {
				this.node.append("<br/>");
			}
        }
    };

    OhcvCommon.prototype.carouselTemplate = $(
            "<h3>Featured Videos</h3><hr/><br/>" +
            "<div class='carousel-container'>" +
            "<div id='' class='carousel slide' data-ride='carousel'>" +
            "<ol class='carousel-indicators'></ol>" +
            "<div class='carousel-inner'>" +
            "</div>" +
            "<a class='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'><span class='glyphicon glyphicon-chevron-left'></span></a>" +
            "<a class='right carousel-control' href='#carousel-example-generic' role='button' data-slide='next'><span class='glyphicon glyphicon-chevron-right'></span></a>" +
            "</div>" +
            "</div>");

    OhcvCommon.prototype.carouselTemplatePartA = $("<li data-target='' data-slide-to=''></li>");

    OhcvCommon.prototype.carouselTemplatePartB = $(
            "<div class='item carousel-video' v-id=''>" +
            "<a class='ohc-video' href=''>" +
            "<img src='' alt=''>" +
            "</a>" +
            "<div class='carousel-caption'>" +
            "<h3></h3>" +
            "<div></div>" +
            "</div>" +
            "</div>");

    OhcvCommon.prototype.applyCarouselTemplate = function(id, template, videos) {
        template.attr("id", "carousel-" + id);
        var ol = template.find("> ol.carousel-indicators");
        for (i = 0; i < videos.length; i++) {
            var li = this.carouselTemplatePartA.clone();
            li.attr("data-target", "#" + "carousel-" + id);
            li.attr("data-slide-to", i);
            if (i === 0) {
                li.addClass("active");
            }
            ol.append(li);
        }
        var div = template.find("> div.carousel-inner");
        for (i = 0; i < videos.length; i++) {
            var vid = this.carouselTemplatePartB.clone();
            vid.attr("v-id", videos[i].content_id);
            if (i === 0) {
                vid.addClass("active");
            }
            vid.find("> a").attr("href", videos[i].link + "?autoplay=1");
            vid.find("> a > img").attr("src", videos[i].thumbnail_link);
            vid.find("> a > img").attr("alt", videos[i].title);
            vid.find("> div.carousel-caption > h3").text(videos[i].title);
            vid.find("> div.carousel-caption > div").html($.trim(videos[i].description.replace(/(\r\n|\n|\r)/gm, "")));

            div.append(vid);
        }
        template.find("> a").attr("href", "#" + "carousel-" + id);
    };

    OhcvCommon.prototype.insertCarousel = function(id, json) {
        //oll format is our native json format, no converting
        if (!json.items) {
            json = {items: [json]};
        }
        if (json.items.length < 1) {
            return;
        }
        var template = this.carouselTemplate.clone();
        this.applyCarouselTemplate(id, template.find(".carousel"), json.items);
        template.appendTo(this.node);
    };

    function OhcvOLL(n) {
		this.node = n;
    };
    OhcvOLL.prototype = new OhcvCommon();
    OhcvOLL.prototype.constructor = OhcvOLL;
    OhcvOLL.prototype.getAllVideos = function() {
        return jQuery.getJSON(this.allvideos);
    };
    

    function OhcvYouTube(n) {
        this.node = n;
    }
    OhcvYouTube.prototype = new OhcvCommon();
    OhcvYouTube.prototype.constructor = OhcvYouTube;
    OhcvYouTube.prototype.convertData = function(json) {
        var ollJson;
        var regex = /((https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
		ollJson = {"items": []};
		for (var i = 0; i < json.items.length; i++) {
			var video = {};
			video.content_id = json.items[i].id ? json.items[i].id : json.items[i].snippet.resourceId.videoId;
			video.product_id = json.items[i].snippet.channelId;
			video.product_name = json.items[i].snippet.channelTitle;
			video.title = json.items[i].snippet.title;
			video.link = "https://www.youtube.com/embed/" + video.content_id;
			if(json.items[i].snippet.thumbnails && json.items[i].snippet.thumbnails.maxres && json.items[i].snippet.thumbnails.maxres.url) {
				video.thumbnail_link = json.items[i].snippet.thumbnails.maxres.url;
			} else {
				video.thumbnail_link = "https://i.ytimg.com/vi/" + video.content_id + "/mqdefault.jpg";
			}
			video.description = json.items[i].snippet.description.split("\n").join("<br />").replace(regex, "<a href='$1'>$1</a>");
			ollJson.items.push(video);
		}
        return ollJson;
    };
    OhcvYouTube.prototype.insertVideos = function(json) {
        if (json.items) {
            OhcvCommon.prototype.insertVideos.call(this, this.convertData(json));
        }
    };
    OhcvYouTube.prototype.insertCarousel = function(id, json) {
        if (json.items) {
            OhcvCommon.prototype.insertCarousel.call(this, id, this.convertData(json));
        }
    };

    $.fn.ohcv = function(options) {
        var node = this;
        if (!options.id) {
			if (this.attr('id') && this.attr('id').length > 0) {
				options.id = this.attr('id');
			} else {
				console.log("Invalid id");
				return this;
			}
        }
        // set default options
        var settings;
		
		if(options.iframe) {		
			settings = $.extend({
				source: "oll",
				carousel: false,
				autoplay: false,
				thumbnail: false,
				categories: false
			}, options);
            settings.thumbnail = false; //iframes are their own thumbnail
		} else {
			settings = $.extend({
				source: "oll",
				carousel: false,
				autoplay: true,
				thumbnail: true,
				categories: false
			}, options);
		}

        var ohcv;
        if (settings.source === "oll") {
            ohcv = new OhcvOLL(this);
			if(options.iframe) {
				var apexServicesUrl = "https://apexapps.oracle.com/pls/apex/oll_rest/oll/docsv1";
			} else {
				var apexServicesUrl = "https://apexapps.oracle.com/pls/apex/oll_rest/oll/docsv2";
			}
			ohcv.videoPrefix = apexServicesUrl + "/content/";
			ohcv.videoPostfix = "?callback=?";
			ohcv.channelPrefix = apexServicesUrl + "/product/videos/";
			ohcv.channelPostfix = "?callback=?";
			ohcv.playlistPrefix = apexServicesUrl + "/playlist/";
			ohcv.playlistPostfix = "?callback=?";
			ohcv.allvideos = apexServicesUrl + "/allvideostst?callback=?";
        } else if (settings.source === "youtube") {
            if(!settings.key) {
				console.log("YouTube v3 key missing");
				return this;
			} else if (settings.display === "channel") {
				console.log("YouTube v3 channels are not supported, use the playlist that corresponds to your channel");
				console.log("To get your playlistId go to:");
				console.log("https://www.googleapis.com/youtube/v3/channels?forUsername=" + settings.id + "&key=" + settings.key + "&part=contentDetails&fields=items(id,contentDetails(relatedPlaylists(uploads)))");
				return this;
			}
			
			ohcv = new OhcvYouTube(this);
			ohcv.videoPrefix = "https://www.googleapis.com/youtube/v3/videos?id=";
			ohcv.videoPostfix = "&key=" + settings.key + "&part=snippet&fields=items(id,snippet(description,channelId,channelTitle,title,thumbnails(maxres(url))))";
			ohcv.playlistPrefix = "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=";
			ohcv.playlistPostfix = "&key=" + settings.key + "&part=snippet&maxResults=50&fields=nextPageToken,items(snippet(title,description,channelId,channelTitle,resourceId(videoId),thumbnails(maxres(url))))";
			
        } else {
            console.log("Invalid source");
            return this;
        }
		ohcv.settings = settings;

        var jqXHR;

        if (settings.display === "video") {
            jqXHR = ohcv.getVideo(settings.id);
        } else if (settings.display === "channel") {
            if (settings.source === "oll" && settings.id === "all") {
                jqXHR = ohcv.getAllVideos();
            } else {
                jqXHR = ohcv.getChannelVideos(settings.id);
            }
        } else if (settings.display === "playlist") {
            jqXHR = ohcv.getPlaylistVideos(settings.id);
        } else {
            console.log("Invalid display");
            return this;
        }
		jqXHR.fail(function(data) {
			console.log(data.responseText);
		});
        jqXHR.done(function(data) {
            console.log(data);

            if (settings.carousel) {
                ohcv.insertCarousel(settings.display + "-" + settings.id, data);
            } else {
                ohcv.insertVideos(data);
            }
			
			if($.fn.fancybox && window.innerWidth > 640 && window.innerHeight > 640) {
				node.find(".ohc-video").fancybox({
					type: 'iframe',
					maxWidth	: 800,
					maxHeight	: 600,
					fitToView	: false,
					width		: '70%',
					height		: '70%',
					autoSize	: false,
					closeClick	: false,
					openEffect	: 'none',
					closeEffect	: 'none',
					helpers: {
						overlay: {
							locked: false
						},
						media: true
					},
					afterShow : function () {
						$(".fancybox-wrap").focus();	
					},
					afterClose: function() {
						node.focus(); 
					}
				});
			}
			
			if($.fn.matchHeight && settings.thumbnail) {
				$('.video-container').matchHeight();
			}

        });
    };
}(jQuery));

$(document).ready(function() {
	$(".video-container").each(function() {
	        $(this).ohcv({iframe:true,display:"video"});
	});
});