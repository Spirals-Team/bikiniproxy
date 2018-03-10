function spider_frontend_ajax(form_id, current_view, id, album_gallery_id, cur_album_id, type, srch_btn, title, sortByParam, load_more) {
  var masonry_loaded = 0;
  var mosaic_loaded = 0;
  if (typeof load_more == "undefined") {
    var load_more = false;
  }
  var page_number = jQuery("#page_number_" + current_view).val();
  var bwg_load_more = jQuery("#bwg_load_more_" + current_view).val();
  var bwg_previous_album_ids = jQuery('#bwg_previous_album_id_' + current_view).val();
  var bwg_previous_album_page_numbers = jQuery('#bwg_previous_album_page_number_' + current_view).val();
  var post_data = {};
  if (album_gallery_id == 'back') { // Back from album.
    var bwg_previous_album_id = bwg_previous_album_ids.split(",");
    album_gallery_id = bwg_previous_album_id[1];
    jQuery('#bwg_previous_album_id_' + current_view).val(bwg_previous_album_ids.replace(bwg_previous_album_id[0] + ',', ''));
    var bwg_previous_album_page_number = bwg_previous_album_page_numbers.split(",");
    page_number = bwg_previous_album_page_number[0];
    jQuery('#bwg_previous_album_page_number_' + current_view).val(bwg_previous_album_page_numbers.replace(bwg_previous_album_page_number[0] + ',', ''));
  }
  else if (cur_album_id != '') { // Enter album (not change the page).
    jQuery('#bwg_previous_album_id_' + current_view).val(album_gallery_id + ',' + bwg_previous_album_ids);
    if (page_number) {
      jQuery('#bwg_previous_album_page_number_' + current_view).val(page_number + ',' + bwg_previous_album_page_numbers);
    }
    page_number = 1;
  }
  if (srch_btn) { // Start search.
    page_number = 1; 
  }
  if (typeof title == "undefined" || title == '') {
    var title = "";
  }
  if (typeof sortByParam == "undefined" || sortByParam == '') {
    var sortByParam = jQuery(".bwg_order_" + current_view).val();
  }
  post_data["page_number_" + current_view] = page_number;
  post_data["bwg_load_more_" + current_view] = bwg_load_more;
  post_data["album_gallery_id_" + current_view] = album_gallery_id;
  post_data["bwg_previous_album_id_" + current_view] = jQuery('#bwg_previous_album_id_' + current_view).val();
  post_data["bwg_previous_album_page_number_" + current_view] = jQuery('#bwg_previous_album_page_number_' + current_view).val();
  post_data["type_" + current_view] = type;
  post_data["title_" + current_view] = title;
	post_data["sortImagesByValue_" + current_view] = sortByParam;
  if (jQuery("#bwg_search_input_" + current_view).length > 0) { // Search box exists.
    post_data["bwg_search_" + current_view] = jQuery("#bwg_search_input_" + current_view).val();
  }
  post_data["bwg_tag_id_" + id] = jQuery("#bwg_tag_id_" + id).val();
  // Loading.
  jQuery("#ajax_loading_" + current_view).css('display', '');
  jQuery.ajax({
        type: "POST",
        url: window.location,
        data: post_data,
        success: function (data) {
			masonry_loaded = jQuery(data).find('#' + form_id).find(".bwg_masonry_thumb_spun_" + current_view + " img").length;
			mosaic_loaded = jQuery(data).find('#' + form_id).find(".bwg_mosaic_thumb_spun_" + current_view + " img").length;
			if (load_more) {
				var strr = jQuery(data).find('#' + id).html();
				jQuery('#' + id).append(strr);

				jQuery("div[id^='bwg_container1_'] form").each(function () {
				  if (jQuery(this).data("current") == current_view) {
					var str = jQuery(data).find('.bwg_nav_cont_' + current_view).html();
					jQuery('.bwg_nav_cont_' + current_view).html(str);
				  }
				  else {
					var str = jQuery(this).find('span[class^="bwg_nav_cont_"]').html();
					jQuery(this).find('span[class^="bwg_nav_cont_"]').html(str);
				  }
				});
			}
			else {
				var str = jQuery(data).find('#' + form_id).html();
				jQuery('#' + form_id).html(str);
			}
			// There are no images.
			if (jQuery("#bwg_search_input_" + current_view).length > 0 && album_gallery_id == 0) { // Search box exists and not album view.
				var bwg_images_count = jQuery('#bwg_images_count_' + current_view).val();
				if (bwg_images_count == 0) {
				  var cont = jQuery("#" + id).parent().html();
				  var error_msg = '<div style="width:95%"><div class="wd_error"><p><strong>' + bwg_objectL10n.bwg_search_result + '</strong></p></div></div>';
				  jQuery("#" + id).parent().html(error_msg + cont)
				}
			}
        },
        beforeSend: function(){
        },
        complete:function(){
			jQuery("div[id^='bwg_container1_'] img").each(function () {
			  if (jQuery(this).attr("data-lazy-src") != '') {
				jQuery(this).attr("src", jQuery(this).attr("data-lazy-src"));
			  }
			  else if (jQuery(this).attr("data-src") != '') {
				jQuery(this).attr("src", jQuery(this).attr("data-src"));
			  }
			});
			jQuery(".blog_style_image_buttons_conteiner_" + current_view).find(jQuery(".bwg_blog_style_img_" + current_view)).on('load', function(){
			  jQuery(".bwg_blog_style_img_" + current_view).closest(jQuery(".blog_style_image_buttons_conteiner_" + current_view)).show();
			});
			jQuery("#ajax_loading_" + current_view).css('display', 'none');
			jQuery("#bwg_tags_id_" + id).val(jQuery("#bwg_tag_id_" + id).val());

			if (jQuery(".pagination-links_" + current_view).length) {
			  jQuery("html, body").animate({scrollTop: jQuery('#' + form_id).offset().top - 150}, 500);
			}
			/* For all*/
			window["bwg_document_ready_" + current_view]();
			/* For masonry view.*/
			if (id == "bwg_masonry_thumbnails_" + current_view || id == "bwg_album_masonry_" + current_view) {
			  window["bwg_masonry_ajax_"+ current_view](masonry_loaded);
			}
			/* For mosaic view.*/
			if (id == "bwg_mosaic_thumbnails_" + current_view) {
			  window["bwg_mosaic_ajax_" + current_view](mosaic_loaded);
			}
			/* For Blog style view.*/
			jQuery(".blog_style_images_conteiner_" + current_view + " .bwg_embed_frame_16x9_" + current_view).each(function (e) {
			  jQuery(this).width(jQuery(this).parent().width());
			  jQuery(this).height(jQuery(this).width() * 0.5625);
			});
			jQuery(".blog_style_images_conteiner_" + current_view + " .bwg_embed_frame_instapost_" + current_view).each(function (e) {
			  jQuery(this).width(jQuery(this).parent().width());
			  /* 16 is 2*padding inside iframe */
			  /* 96 is 2*padding(top) + 1*padding(bottom) + 40(footer) + 32(header) */
			  jQuery(this).height((jQuery(this).width() - 16) * jQuery(this).attr('data-height') / jQuery(this).attr('data-width') + 96);
			});
			/* For Image browser view.*/
			jQuery('#bwg_embed_frame_16x9_' + current_view).width(jQuery('#bwg_embed_frame_16x9_' + current_view).parent().width());
			jQuery('#bwg_embed_frame_16x9_' + current_view).height(jQuery('#bwg_embed_frame_16x9_' + current_view).width() * 0.5625);
			jQuery('#bwg_embed_frame_instapost_' + current_view).width(jQuery('#bwg_embed_frame_16x9_' + current_view).parent().width());
			/* 16 is 2*padding inside iframe */
			/* 96 is 2*padding(top) + 1*padding(bottom) + 40(footer) + 32(header) */
			jQuery('.bwg_embed_frame_instapost_' + current_view).height((jQuery('.bwg_embed_frame_instapost_' + current_view).width() - 16) * jQuery('.bwg_embed_frame_instapost_' + current_view).attr('data-height') / jQuery('.bwg_embed_frame_instapost_' + current_view).attr('data-width') + 96);
        }
	});
  return false;
}

function bwg_select_tag(current_view, form_id, cur_gal_id, album_gallery_id, type, reset) {
  if (reset) {
    jQuery("#bwg_tag_id_" + cur_gal_id).val('');
  }
  spider_frontend_ajax(form_id, current_view, cur_gal_id, album_gallery_id, '', type, 1);
}
