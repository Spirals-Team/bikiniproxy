var isPopUpOpened = false;
var bwg_overflow_initial_value = false;
var bwg_overflow_x_initial_value = false;
var bwg_overflow_y_initial_value = false;

function spider_createpopup(url, current_view, width, height, duration, description, lifetime, lightbox_ctrl_btn_pos) {
  url = url.replace(/&#038;/g, '&');
  if (isPopUpOpened) { return };
  isPopUpOpened = true;
  if (spider_hasalreadyreceivedpopup(description) || spider_isunsupporteduseragent()) {
    return;
  }
  bwg_overflow_initial_value = jQuery("html").css("overflow");
  bwg_overflow_x_initial_value = jQuery("html").css("overflow-x");
  bwg_overflow_y_initial_value = jQuery("html").css("overflow-y");
  jQuery("html").attr("style", "overflow:hidden !important;");
  jQuery("#bwg_spider_popup_loading_" + current_view).css({display: "block"});
  jQuery("#spider_popup_overlay_" + current_view).css({display: "block"});

  jQuery.get(url, function(data) {
		var popup = jQuery(
    '<div id="spider_popup_wrap" class="spider_popup_wrap" style="' + 
          ' width:' + width + 'px;' +
          ' height:' + height + 'px;' + 
          ' margin-top:-' + height / 2 + 'px;' + 
          ' margin-left: -' + width / 2 + 'px; ">' +    
    data + 
    '</div>')
			.hide()
			.appendTo("body");
		spider_showpopup(description, lifetime, popup, duration, lightbox_ctrl_btn_pos);
	}).success(function(jqXHR, textStatus, errorThrown) {
    jQuery("#bwg_spider_popup_loading_" + current_view).css({display: "none !important;"});
  });
}

function spider_showpopup(description, lifetime, popup, duration, lightbox_ctrl_btn_pos) {
  isPopUpOpened = true;
  popup.show();
	spider_receivedpopup(description, lifetime, lightbox_ctrl_btn_pos);
}

function spider_hasalreadyreceivedpopup(description) {
  if (document.cookie.indexOf(description) > -1) {
    delete document.cookie[document.cookie.indexOf(description)];
  }
	return false; 
}

function spider_receivedpopup(description, lifetime, lightbox_ctrl_btn_pos) { 
	var date = new Date(); 
	date.setDate(date.getDate() + lifetime);
	document.cookie = description + "=true;expires=" + date.toUTCString() + ";path=/"; 
  if (lightbox_ctrl_btn_pos == 'bottom') {
    jQuery(".bwg_toggle_container").css("bottom", jQuery(".bwg_ctrl_btn_container").height() + "px");
  }
  else if (lightbox_ctrl_btn_pos == 'top') {
    jQuery(".bwg_toggle_container").css("top", jQuery(".bwg_ctrl_btn_container").height() + "px");
  }
}

function spider_isunsupporteduseragent() {
	return (!window.XMLHttpRequest);
}

function spider_destroypopup(duration) {
  if (document.getElementById("spider_popup_wrap") != null) {
    if (typeof jQuery().fullscreen !== 'undefined' && jQuery.isFunction(jQuery().fullscreen)) {
      if (jQuery.fullscreen.isFullScreen()) {
        jQuery.fullscreen.exit();
      }
    }
    if (typeof enable_addthis != "undefined" && enable_addthis) {
      jQuery(".at4-share-outer").hide();
    }
    setTimeout(function () {
      jQuery(".spider_popup_wrap").remove();
      jQuery(".bwg_spider_popup_loading").css({display: "none"});
      jQuery(".spider_popup_overlay").css({display: "none"});
      jQuery(document).off("keydown");
      if (bwg_overflow_initial_value) {
        jQuery("html").css("overflow", bwg_overflow_initial_value);
      }
      if (bwg_overflow_x_initial_value) {
        jQuery("html").css("overflow-x", bwg_overflow_x_initial_value);
      }
      if (bwg_overflow_y_initial_value) {
        jQuery("html").css("overflow-y", bwg_overflow_y_initial_value);
      }
    }, 20);
  }
  isPopUpOpened = false;
  var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
  var viewportmeta = document.querySelector('meta[name="viewport"]');
  if (isMobile && viewportmeta) {
    viewportmeta.content = 'width=device-width, initial-scale=1';
  }
  clearInterval(bwg_playInterval);
}

// Submit popup.
function spider_ajax_save(form_id) {
  var post_data = {};
  post_data["bwg_name"] = jQuery("#bwg_name").val();
  post_data["bwg_comment"] = jQuery("#bwg_comment").val();
  post_data["bwg_email"] = jQuery("#bwg_email").val();
  post_data["bwg_captcha_input"] = jQuery("#bwg_captcha_input").val();
  post_data["ajax_task"] = jQuery("#ajax_task").val();
  post_data["image_id"] = jQuery("#image_id").val();
  post_data["comment_id"] = jQuery("#comment_id").val();
    post_data["bwg_tag_id_" + id] = jQuery("#bwg_tag_id_" + id).val();

  // Loading.
  jQuery("#ajax_loading").css('height', jQuery(".bwg_comments").css('height'));
  jQuery("#opacity_div").css('width', jQuery(".bwg_comments").css('width'));
  jQuery("#opacity_div").css('height', jQuery(".bwg_comments").css('height'));
  jQuery("#loading_div").css('width', jQuery(".bwg_comments").css('width'));
  jQuery("#loading_div").css('height', jQuery(".bwg_comments").css('height'));
  document.getElementById("opacity_div").style.display = '';
  document.getElementById("loading_div").style.display = 'table-cell';
	jQuery.ajax({
        type: "POST",
        url: jQuery('#' + form_id).attr('action'),
        data: post_data,
        success: function (data) {
			var str = jQuery(data).find('.bwg_comments').html();
			jQuery('.bwg_comments').html(str);
        },
        beforeSend: function(){
        },
        complete:function(){
            document.getElementById("opacity_div").style.display = 'none';
            document.getElementById("loading_div").style.display = 'none';
            // Update scrollbar.
            jQuery(".bwg_comments").mCustomScrollbar({scrollInertia: 150});
            // Bind comment container close function to close button.
            jQuery(".bwg_comments_close_btn").on("click", bwg_comment);
        }
	});
	return false;
}

// Submit rating.
function spider_rate_ajax_save(form_id) {
  var post_data = {};
	  post_data["image_id"] = jQuery("#" + form_id + " input[name='image_id']").val();
	  post_data["rate"] = jQuery("#" + form_id + " input[name='score']").val();
	  post_data["ajax_task"] = jQuery("#rate_ajax_task").val();
	jQuery.ajax({
        type: "POST",
        url: jQuery('#' + form_id).attr('action'),
        data: post_data,
        success: function (data) {
			var str = jQuery(data).find('#' + form_id).html();
			jQuery('#' + form_id).html(str);
        },
        beforeSend: function(){
        },
        complete:function(){
        }
	});
	return false;
}

// Set value by ID.
function spider_set_input_value(input_id, input_value) {
  if (document.getElementById(input_id)) {
    document.getElementById(input_id).value = input_value;
  }
}

// Submit form by ID.
function spider_form_submit(event, form_id) {
  if (document.getElementById(form_id)) {
    document.getElementById(form_id).submit();
  }
  if (event.preventDefault) {
    event.preventDefault();
  }
  else {
    event.returnValue = false;
  }
}

// Check if required field is empty.
function spider_check_required(id, name) {
  if (jQuery('#' + id).val() == '') {
    alert(name + '* ' + bwg_objectL10n.bwg_field_required);
    jQuery('#' + id).attr('style', 'border-color: #FF0000;');
    jQuery('#' + id).focus();
    return true;
  }
  else {
    return false;
  }
}

// Check Email.
function spider_check_email(id) {
  if (jQuery('#' + id).val() != '') {
    var email = jQuery('#' + id).val().replace(/^\s+|\s+$/g, '');
    if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1) {
      alert(bwg_objectL10n.bwg_mail_validation);
      return true;
    }
    return false;
  }
}

// Refresh captcha.
function bwg_captcha_refresh(id) {
	if (document.getElementById(id + "_img") && document.getElementById(id + "_input")) {
		srcArr = document.getElementById(id + "_img").src.split("&r=");
		document.getElementById(id + "_img").src = srcArr[0] + '&r=' + Math.floor(Math.random() * 100);
		document.getElementById(id + "_img").style.display = "inline-block";
		document.getElementById(id + "_input").value = "";
	}
}
