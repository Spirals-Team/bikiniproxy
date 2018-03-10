/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: map_overwrite_default_me.js                                                                                                                _
 _ last modified: 04/06/15 19.49                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

var miniAudioPlayer_defaults = miniAudioPlayer_defaults || {};

function replaceDefault(){

	var me = jQuery(".mejs-container").not(".wp-audio-playlist .mejs-container");
	me.each(function(){
		var audioUrl = jQuery("audio", jQuery(this)).attr("src");
		var title = audioUrl.split("/").pop();
		title = miniAudioPlayer_replaceDefault_show_title ? title.split("?")[0] : "";
		var id = new Date().getTime();
		var map = jQuery("<a/>").attr({href:audioUrl, id: id }).html(title);
		jQuery(this).replaceWith(map);
		jQuery("#" + id).mb_miniPlayer(miniAudioPlayer_defaults);
	});

	/* Playlist */
	var me_pl = jQuery(".wp-audio-playlist");
	me_pl.each(function(){

		var el = jQuery(this);
		var pl = jQuery("<div/>").addClass("map_pl_container");

		var albumInfo = jQuery(".wp-playlist-current-item .wp-playlist-caption", el);
		var infoBox = jQuery("<div/>").addClass("map_album_infobox");

		albumInfo.find("span").each(function(){
			var meta = jQuery(this);
			var span = jQuery("<span/>").html(meta.html());

			if(meta.is(".wp-playlist-item-title"))
				span.addClass("map_item_title").append(", ");

			if(meta.is(".wp-playlist-item-artist"))
				span.addClass("map_item_artist");

			if(meta.is(".wp-playlist-item-album"))
				span.addClass("map_item_album");

			infoBox.append(span);
		});

		el.before(pl);
		pl.append(infoBox);

		var audioUrl = jQuery("audio", jQuery(this)).attr("src");
		var title = audioUrl.split("/").pop();

		var id = new Date().getTime();
		var map = jQuery("<a/>").attr({href:audioUrl, id: id }).html(title);
		pl.append(map);

		var opt = {};
		jQuery.extend(opt, miniAudioPlayer_defaults, {width: "100%"} );
		var pl_player = jQuery("#" + id).mb_miniPlayer(opt);

		var me_pl_elements = jQuery(".wp-playlist-item", jQuery(this));

		var me_pl_container = jQuery("<div/>").addClass("pl_items_container");
		pl.append(me_pl_container);

		var counter = 0;
		me_pl_elements.each(function(){
			counter ++;
			var elementsUrl = jQuery("a",this).attr("href");
			var title = jQuery(".wp-playlist-item-title", this).html() || "";
			var author = jQuery(".wp-playlist-item-artist", this).html() || "";

			var pl_el = jQuery("<div/>").addClass("pl_item").html( counter + ". " + title + author).css({cursor: "pointer"});

			pl_el.data("title", title).data("author", author);

			if(counter == 1){
				pl_el.addClass("sel");
				jQuery("#" + id).mb_miniPlayer_changeFile({mp3: elementsUrl}, title  +  author);

			}

			if(miniAudioPlayer_defaults.downloadable){
				var dwnload = pl_player[0].player.createDownload(elementsUrl, title);
				pl_el.append(dwnload);

				jQuery(".mbMiniPlayer .map_download", pl).remove();
			}

			pl_el.on("click", function(){

				jQuery(".sel", pl).removeClass("sel");

				jQuery(this).addClass("sel");
				var player = jQuery("#" + id);

				jQuery(".map_item_title", pl).html(pl_el.data("title"));
				jQuery(".map_item_artist", pl).html(pl_el.data("author"));
				jQuery(".map_item_album", pl).html("");

				player.mb_miniPlayer_changeFile({mp3: elementsUrl}, title  +  author);
				player.mb_miniPlayer_play();
			});

			me_pl_container.append(pl_el);
		});

		el.remove();

	})

}
