jQuery(document).ready(function(e) {
    jQuery("#sfsi_floater").attr("data-top",jQuery(document).height());
});

function showErrorSuc(s, i, e) {
    if ("error" == s) var t = "errorMsg"; else var t = "sucMsg";
    return SFSI(".tab" + e + ">." + t).html(i), SFSI(".tab" + e + ">." + t).show(), 
    SFSI(".tab" + e + ">." + t).effect("highlight", {}, 5e3), setTimeout(function() {
        SFSI("." + t).slideUp("slow");
    }, 5e3), !1;
}

function beForeLoad() {
    SFSI(".loader-img").show(), SFSI(".save_button >a").html("Saving..."), SFSI(".save_button >a").css("pointer-events", "none");
}

function sfsi_make_popBox() {
    var s = 0;
    SFSI(".sfsi_sample_icons >li").each(function() {
        "none" != SFSI(this).css("display") && (s = 1);
    }), 0 == s ? SFSI(".sfsi_Popinner").hide() :SFSI(".sfsi_Popinner").show(), "" != SFSI('input[name="sfsi_popup_text"]').val() ? (SFSI(".sfsi_Popinner >h2").html(SFSI('input[name="sfsi_popup_text"]').val()), 
    SFSI(".sfsi_Popinner >h2").show()) :SFSI(".sfsi_Popinner >h2").hide(), SFSI(".sfsi_Popinner").css({
        "border-color":SFSI('input[name="sfsi_popup_border_color"]').val(),
        "border-width":SFSI('input[name="sfsi_popup_border_thickness"]').val(),
        "border-style":"solid"
    }), SFSI(".sfsi_Popinner").css("background-color", SFSI('input[name="sfsi_popup_background_color"]').val()), 
    SFSI(".sfsi_Popinner h2").css("font-family", SFSI("#sfsi_popup_font").val()), SFSI(".sfsi_Popinner h2").css("font-style", SFSI("#sfsi_popup_fontStyle").val()), 
    SFSI(".sfsi_Popinner >h2").css("font-size", parseInt(SFSI('input[name="sfsi_popup_fontSize"]').val())), 
    SFSI(".sfsi_Popinner >h2").css("color", SFSI('input[name="sfsi_popup_fontColor"]').val() + " !important"), 
    "yes" == SFSI('input[name="sfsi_popup_border_shadow"]:checked').val() ? SFSI(".sfsi_Popinner").css("box-shadow", "12px 30px 18px #CCCCCC") :SFSI(".sfsi_Popinner").css("box-shadow", "none");
}

function sfsi_stick_widget(s) {
	0 == initTop.length && (SFSI(".sfsi_widget").each(function(s) {
        initTop[s] = SFSI(this).position().top;
    }), console.log(initTop));
    var i = SFSI(window).scrollTop(), e = [], t = [];
    SFSI(".sfsi_widget").each(function(s) {
        e[s] = SFSI(this).position().top, t[s] = SFSI(this);
    });
    var n = !1;
    for (var o in e) {
        var a = parseInt(o) + 1;
        e[o] < i && e[a] > i && a < e.length ? (SFSI(t[o]).css({
            position:"fixed",
            top:s
        }), SFSI(t[a]).css({
            position:"",
            top:initTop[a]
        }), n = !0) :SFSI(t[o]).css({
            position:"",
            top:initTop[o]
        });
    }
    if (!n) {
        var r = e.length - 1, c = -1;
        e.length > 1 && (c = e.length - 2), initTop[r] < i ? (SFSI(t[r]).css({
            position:"fixed",
            top:s
        }), c >= 0 && SFSI(t[c]).css({
            position:"",
            top:initTop[c]
        })) :(SFSI(t[r]).css({
            position:"",
            top:initTop[r]
        }), c >= 0 && e[c] < i);
    }
}

function sfsi_float_widget(s) {
    function i() {
        r = "Microsoft Internet Explorer" === navigator.appName ? a - document.documentElement.scrollTop :a - window.pageYOffset, 
        Math.abs(r) > 0 ? (window.removeEventListener("scroll", i), a -= r * o, SFSI("#sfsi_floater").css({
            top:(a + t).toString() + "px"
        }), setTimeout(i, n)) :window.addEventListener("scroll", i, !1);
	}
    function e() {
		var documentheight = SFSI("#sfsi_floater").attr("data-top");
		var fltrhght = parseInt(SFSI("#sfsi_floater").height());
		var fltrtp = parseInt(SFSI("#sfsi_floater").css("top"));
		if(parseInt(fltrhght)+parseInt(fltrtp) <=documentheight)
		{
			window.addEventListener("scroll", i, !1);
		}
		else
		{
			window.removeEventListener("scroll", i);
			SFSI("#sfsi_floater").css("top",documentheight+"px");
		}
	}
    if ("center" == s)
	{
		var t = ( jQuery(window).height() - SFSI("#sfsi_floater").height() ) / 2;
	}
	else if ("bottom" == s)
	{
		var t = window.innerHeight - SFSI("#sfsi_floater").height();
	}
	else
	{
		var t = parseInt(s);
	}
	var n = 50, o = .1, a = 0, r = 0;
    SFSI("#sfsi_floater"), window.onscroll = e;
}

function sfsi_shuffle() {
    var s = [];
    SFSI(".sfsi_wicons ").each(function(i) {
        SFSI(this).text().match(/^\s*$/) || (s[i] = "<div class='" + SFSI(this).attr("class") + "'>" + SFSI(this).html() + "</div>", 
        SFSI(this).fadeOut("slow"), SFSI(this).insertBefore(SFSI(this).prev(".sfsi_wicons")), 
        SFSI(this).fadeIn("slow"));
    }), s = Shuffle(s), $("#sfsi_wDiv").html("");
    for (var i = 0; i < testArray.length; i++) $("#sfsi_wDiv").append(s[i]);
}

function Shuffle(s) {
    for (var i, e, t = s.length; t; i = parseInt(Math.random() * t), e = s[--t], s[t] = s[i], 
    s[i] = e) ;
    return s;
}

function sfsi_setCookie(s, i, e) {
    var t = new Date();
    t.setTime(t.getTime() + 1e3 * 60 * 60 * 24 * e);
    var n = "expires=" + t.toGMTString();
    document.cookie = s + "=" + i + "; " + n;
}

function sfsfi_getCookie(s) {
    for (var i = s + "=", e = document.cookie.split(";"), t = 0; t < e.length; t++) {
        var n = e[t].trim();
        if (0 == n.indexOf(i)) return n.substring(i.length, n.length);
    }
    return "";
}

function sfsi_hideFooter() {}

window.onerror = function() {}, SFSI = jQuery.noConflict(), SFSI(window).load(function() {
    SFSI("#sfpageLoad").fadeOut(2e3);
});

var global_error = 0;

SFSI(document).ready(function(s) {

	//changes done {Monad}
	
    SFSI("head").append('<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />'), 
    SFSI("head").append('<meta http-equiv="Pragma" content="no-cache" />'), SFSI("head").append('<meta http-equiv="Expires" content="0" />'), 
    SFSI(document).click(function(s) {
        var i = SFSI(".sfsi_FrntInner"), e = SFSI(".sfsi_wDiv"), t = SFSI("#at15s");
		i.is(s.target) || 0 !== i.has(s.target).length || e.is(s.target) || 0 !== e.has(s.target).length || t.is(s.target) || 0 !== t.has(s.target).length || i.fadeOut();
    }), SFSI(".sfsi_outr_div").find(".addthis_button").mousemove(function() {
        var s = SFSI(".sfsi_outr_div").find(".addthis_button").offset().top + 10;
        SFSI("#at15s").css({
            top:s + "px",
            left:SFSI(".sfsi_outr_div").find(".addthis_button").offset().left + "px"
        });
    }), SFSI("div#sfsiid_linkedin").find(".icon4").find("a").find("img").mouseover(function() {
        SFSI(this).attr("src", ajax_object.plugin_url + "images/visit_icons/linkedIn_hover.svg");
    }), SFSI("div#sfsiid_linkedin").find(".icon4").find("a").find("img").mouseleave(function() {
        SFSI(this).attr("src", ajax_object.plugin_url + "images/visit_icons/linkedIn.svg");
    }), SFSI("div#sfsiid_youtube").find(".icon1").find("a").find("img").mouseover(function() {
        SFSI(this).attr("src", ajax_object.plugin_url + "images/visit_icons/youtube_hover.svg");
    }), SFSI("div#sfsiid_youtube").find(".icon1").find("a").find("img").mouseleave(function() {
        SFSI(this).attr("src", ajax_object.plugin_url + "images/visit_icons/youtube.svg");
    }), SFSI("div#sfsiid_facebook").find(".icon1").find("a").find("img").mouseover(function() {
        SFSI(this).css("opacity", "0.9");
    }), SFSI("div#sfsiid_facebook").find(".icon1").find("a").find("img").mouseleave(function() {
        SFSI(this).css("opacity", "1");
		/*{Monad}*/
    }), SFSI("div#sfsiid_twitter").find(".cstmicon1").find("a").find("img").mouseover(function() {
        SFSI(this).css("opacity", "0.9");
    }), SFSI("div#sfsiid_twitter").find(".cstmicon1").find("a").find("img").mouseleave(function() {
        SFSI(this).css("opacity", "1");
    }), SFSI(".pop-up").on("click", function() {
        ("fbex-s2" == SFSI(this).attr("data-id") || "googlex-s2" == SFSI(this).attr("data-id") || "linkex-s2" == SFSI(this).attr("data-id")) && (SFSI("." + SFSI(this).attr("data-id")).hide(), 
        SFSI("." + SFSI(this).attr("data-id")).css("opacity", "1"), SFSI("." + SFSI(this).attr("data-id")).css("z-index", "1000")), 
        SFSI("." + SFSI(this).attr("data-id")).show("slow");
    }), /*SFSI("#close_popup").live("click", function() {*/SFSI(document).on("click", '#close_popup', function () {
        SFSI(".read-overlay").hide("slow");
    });
    var e = 0; 
    sfsi_make_popBox(), SFSI('input[name="sfsi_popup_text"] ,input[name="sfsi_popup_background_color"],input[name="sfsi_popup_border_color"],input[name="sfsi_popup_border_thickness"],input[name="sfsi_popup_fontSize"],input[name="sfsi_popup_fontColor"]').on("keyup", sfsi_make_popBox), 
    SFSI('input[name="sfsi_popup_text"] ,input[name="sfsi_popup_background_color"],input[name="sfsi_popup_border_color"],input[name="sfsi_popup_border_thickness"],input[name="sfsi_popup_fontSize"],input[name="sfsi_popup_fontColor"]').on("focus", sfsi_make_popBox), 
    SFSI("#sfsi_popup_font ,#sfsi_popup_fontStyle").on("change", sfsi_make_popBox), 
    /*SFSI(".radio").live("click", function() {*/
	SFSI(document).on("click", '.radio', function () {
        var s = SFSI(this).parent().find("input:radio:first");
        "sfsi_popup_border_shadow" == s.attr("name") && sfsi_make_popBox();
    }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? SFSI("img.sfsi_wicon").on("click", function(s) {
        s.stopPropagation();
        var i = SFSI("#sfsi_floater_sec").val();
        SFSI("div.sfsi_wicons").css("z-index", "0"), SFSI(this).parent().parent().parent().siblings("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide(), 
        SFSI(this).parent().parent().parent().parent().siblings("li").length > 0 && (SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_tool_tip_2").css("z-index", "0"), 
        SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide()), 
        SFSI(this).parent().parent().parent().css("z-index", "1000000"), SFSI(this).parent().parent().css({
            "z-index":"999"
        }), SFSI(this).attr("effect") && "fade_in" == SFSI(this).attr("effect") && (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("effect") && "scale" == SFSI(this).attr("effect") && (SFSI(this).parent().addClass("scale"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("effect") && "combo" == SFSI(this).attr("effect") && (SFSI(this).parent().addClass("scale"), 
        SFSI(this).parent().css("opacity", "1"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        })), ("top-left" == i || "top-right" == i) && SFSI(this).parent().parent().parent().parent("#sfsi_floater").length > 0 && "sfsi_floater" == SFSI(this).parent().parent().parent().parent().attr("id") ? (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").addClass("sfsi_plc_btm"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").addClass("top_big_arow"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show()) :(SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").removeClass("top_big_arow"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").removeClass("sfsi_plc_btm"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":1e3
        }), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show());
    }) :SFSI("img.sfsi_wicon").on("mouseenter", function() {
        var s = SFSI("#sfsi_floater_sec").val();
        SFSI("div.sfsi_wicons").css("z-index", "0"), SFSI(this).parent().parent().parent().siblings("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide(), 
        SFSI(this).parent().parent().parent().parent().siblings("li").length > 0 && (SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_tool_tip_2").css("z-index", "0"), 
        SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide()), 
        SFSI(this).parent().parent().parent().css("z-index", "1000000"), SFSI(this).parent().parent().css({
            "z-index":"999"
        }), SFSI(this).attr("effect") && "fade_in" == SFSI(this).attr("effect") && (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("effect") && "scale" == SFSI(this).attr("effect") && (SFSI(this).parent().addClass("scale"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("effect") && "combo" == SFSI(this).attr("effect") && (SFSI(this).parent().addClass("scale"), 
        SFSI(this).parent().css("opacity", "1"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        })), ("top-left" == s || "top-right" == s) && SFSI(this).parent().parent().parent().parent("#sfsi_floater").length > 0 && "sfsi_floater" == SFSI(this).parent().parent().parent().parent().attr("id") ? (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").addClass("sfsi_plc_btm"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").addClass("top_big_arow"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show()) :(SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").removeClass("top_big_arow"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").removeClass("sfsi_plc_btm"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show());
    }), SFSI("div.sfsi_wicons").on("mouseleave", function() {
        SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && "fade_in" == SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && SFSI(this).children("div.inerCnt").find("a.sficn").css("opacity", "0.6"), 
        SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && "scale" == SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && SFSI(this).children("div.inerCnt").find("a.sficn").removeClass("scale"), 
        SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && "combo" == SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && (SFSI(this).children("div.inerCnt").find("a.sficn").css("opacity", "0.6"), 
        SFSI(this).children("div.inerCnt").find("a.sficn").removeClass("scale")), "sfsiid_google" == SFSI(this).children("div.inerCnt").find("a.sficn").attr("id") ? SFSI("body").on("click", function() {
            SFSI(this).children(".inerCnt").find("div.sfsi_tool_tip_2").hide();
        }) :(SFSI(this).css({
            "z-index":"0"
        }), SFSI(this).children(".inerCnt").find("div.sfsi_tool_tip_2").hide());
    }), SFSI("body").on("click", function() {
        SFSI(".inerCnt").find("div.sfsi_tool_tip_2").hide();
    }), SFSI(".adminTooltip >a").on("hover", function() {
        SFSI(this).offset().top, SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").css("opacity", "1"), 
        SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").show();
    }), SFSI(".adminTooltip").on("mouseleave", function() {
        "none" != SFSI(".gpls_tool_bdr").css("display") && 0 != SFSI(".gpls_tool_bdr").css("opacity") ? SFSI(".pop_up_box ").on("click", function() {
            SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").css("opacity", "0"), SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").hide();
        }) :(SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").css("opacity", "0"), 
        SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").hide());
    }), SFSI(".expand-area").on("click", function() {
        "Read more" == SFSI(this).text() ? (SFSI(this).siblings("p").children("label").fadeIn("slow"), 
        SFSI(this).text("Collapse")) :(SFSI(this).siblings("p").children("label").fadeOut("slow"), 
        SFSI(this).text("Read more"));
    }), SFSI(".sfsi_wDiv").length > 0 && setTimeout(function() {
        var s = parseInt(SFSI(".sfsi_wDiv").height()) + 15 + "px";
        SFSI(".sfsi_holders").each(function() {
            SFSI(this).css("height", s);
			SFSI(".sfsi_widget").css("min-height", "auto");
        });
    }, 200);
});

//hiding popup on close button
function sfsihidemepopup()
{
	SFSI(".sfsi_FrntInner_chg").fadeOut();
}
var initTop = new Array();