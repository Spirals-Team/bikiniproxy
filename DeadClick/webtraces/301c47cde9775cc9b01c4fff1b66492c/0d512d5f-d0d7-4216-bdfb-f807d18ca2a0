if (s5_responsive_layout == "dropdowns" || s5_responsive_layout == "") {
	//Size the active menu area based on screen size, hide if too small
	function s5_responsive_mobile_active_show() {
		if (document.body.offsetWidth <= 750) {
			var s5_responsive_mobile_menu_width = 0;
			if (document.getElementById("s5_responsive_mobile_toggle_click_menu").style.display == "block") {
				s5_responsive_mobile_menu_width = document.getElementById("s5_responsive_mobile_toggle_click_menu").offsetWidth;
			}
			var s5_responsive_mobile_search_width = 0;
			if (document.getElementById("s5_responsive_mobile_toggle_click_search").style.display == "block") {
				s5_responsive_mobile_search_width = document.getElementById("s5_responsive_mobile_toggle_click_search").offsetWidth;
			}
			var s5_responsive_mobile_login_width = 0;
			if (document.getElementById("s5_responsive_mobile_toggle_click_login").style.display == "block") {
				s5_responsive_mobile_login_width = document.getElementById("s5_responsive_mobile_toggle_click_login").offsetWidth;
			}
			var s5_responsive_mobile_register_width = 0;
			if (document.getElementById("s5_responsive_mobile_toggle_click_register").style.display == "block") {
				s5_responsive_mobile_register_width = document.getElementById("s5_responsive_mobile_toggle_click_register").offsetWidth;
			}
			var s5_responsive_mobile_body_width = document.body.offsetWidth;
			var s5_responsive_mobile_combined_widths = s5_responsive_mobile_menu_width + s5_responsive_mobile_login_width + s5_responsive_mobile_register_width + s5_responsive_mobile_search_width;
			document.getElementById("s5_responsive_mobile_bar_active").style.width = ((s5_responsive_mobile_body_width - s5_responsive_mobile_combined_widths) - 35) + "px";
			if (document.getElementById("s5_responsive_mobile_bar_active").offsetWidth <= 50) {
				document.getElementById("s5_responsive_mobile_bar_active").style.display = "none";
			}
			else {
				document.getElementById("s5_responsive_mobile_bar_active").style.display = "block";
			}
		}
	}

	//Store the inner html of login and register modules
	var s5_responsive_mobile_login_innerhtml = "";
	var s5_responsive_mobile_register_innerhtml = "";
	function s5_responsive_mobile_login_register_innerhtml() {
		if (document.getElementById("s5box_login")) {
			if(navigator.appVersion.indexOf('MSIE 7.')!=-1 || navigator.appVersion.indexOf('MSIE 8.')!=-1){
			document.getElementById("s5box_login").childNodes[0].childNodes[0].childNodes[0].childNodes[0].id = "s5box_login_inner";
			}
			else {
			document.getElementById("s5box_login").childNodes[1].childNodes[1].childNodes[1].childNodes[1].id = "s5box_login_inner";
			}
			s5_responsive_mobile_login_innerhtml = document.getElementById("s5box_login_inner").innerHTML;
		}
		if (document.getElementById("s5box_register")) {
			if(navigator.appVersion.indexOf('MSIE 7.')!=-1 || navigator.appVersion.indexOf('MSIE 8.')!=-1){
			document.getElementById("s5box_register").childNodes[0].childNodes[0].childNodes[0].childNodes[0].id = "s5box_register_inner";
			}
			else {
			document.getElementById("s5box_register").childNodes[1].childNodes[1].childNodes[1].childNodes[1].id = "s5box_register_inner";
			}
			s5_responsive_mobile_register_innerhtml = document.getElementById("s5box_register_inner").innerHTML;
		}
		s5_responsive_mobile_login_register();
	}

	//Load the login and register modules if s5 box is published
	var s5_responsive_mobile_register_switched = "no";
	var s5_responsive_mobile_login_switched = "no";
	function s5_responsive_mobile_login_register() {
		if (document.getElementById("s5_responsive_mobile_bar_active")) {
			s5_responsive_mobile_active_show();
		}
		if (document.getElementById("s5box_login") || document.getElementById("s5box_register")) {
			if (document.body.offsetWidth <= 733) {
				if (s5_responsive_mobile_login_switched == "no" && s5_responsive_login_url == "" && document.getElementById("s5box_login")) {
					document.getElementById("s5_responsive_mobile_drop_down_login_inner").innerHTML = s5_responsive_mobile_login_innerhtml;
					document.getElementById("s5box_login_inner").innerHTML = "";
					s5_responsive_mobile_login_switched = "yes";
				}
				if (s5_responsive_mobile_register_switched == "no" && s5_responsive_register_url == "" && document.getElementById("s5box_register")) {
					document.getElementById("s5_responsive_mobile_drop_down_register_inner").innerHTML = s5_responsive_mobile_register_innerhtml;
					document.getElementById("s5box_register_inner").innerHTML = "";
					s5_responsive_mobile_register_switched = "yes";
				}
			}
			else {
				if (s5_responsive_mobile_login_switched == "yes" && document.getElementById("s5box_login") && s5_responsive_login_url == "") {
					document.getElementById("s5box_login_inner").innerHTML = s5_responsive_mobile_login_innerhtml;
					document.getElementById("s5_responsive_mobile_drop_down_login_inner").innerHTML = "";
					s5_responsive_mobile_login_switched = "no";
				}
				if (s5_responsive_mobile_register_switched == "yes" && document.getElementById("s5box_register") && s5_responsive_register_url == "") {
					document.getElementById("s5box_register_inner").innerHTML = s5_responsive_mobile_register_innerhtml;
					document.getElementById("s5_responsive_mobile_drop_down_register_inner").innerHTML = "";
					s5_responsive_mobile_register_switched = "no";
				}
			}
		}
	}

	//Override the onclick if a custom login or register url is entered
	function s5_responsive_mobile_login_link() {
		window.location = s5_responsive_login_url;
	}
	function s5_responsive_mobile_register_link() {
		window.location = s5_responsive_register_url;
	}
	function s5_responsive_mobile_clicks() {
		if (s5_responsive_login_url != "") {
			document.getElementById("s5_responsive_mobile_toggle_click_login").onclick = s5_responsive_mobile_login_link;
		}
		if (s5_responsive_register_url != "") {
			document.getElementById("s5_responsive_mobile_toggle_click_register").onclick = s5_responsive_mobile_register_link;
		}
	}

	//Clear the inside classes to stylize the drop down modules
	var s5_responsive_mobile_login_inner = "";
	var s5_responsive_mobile_register_inner = "";
	function s5_responsive_mobile_clear_classes() {
		if (document.getElementById("s5_responsive_mobile_login_wrap")) {
			var s5_responsive_mobile_login_content = document.getElementById("s5_responsive_mobile_login_wrap").getElementsByTagName("DIV");
			for (var s5_responsive_mobile_login_content_y=0; s5_responsive_mobile_login_content_y<s5_responsive_mobile_login_content.length; s5_responsive_mobile_login_content_y++) {
				if (s5_responsive_mobile_login_content[s5_responsive_mobile_login_content_y].className == "s5_module_box_2") {
					s5_responsive_mobile_login_inner = s5_responsive_mobile_login_content[s5_responsive_mobile_login_content_y].innerHTML;
				}
			}
			document.getElementById("s5_responsive_mobile_drop_down_login_inner").innerHTML = s5_responsive_mobile_login_inner;
		}
		if (document.getElementById("s5_responsive_mobile_register_wrap")) {
			var s5_responsive_mobile_register_content = document.getElementById("s5_responsive_mobile_register_wrap").getElementsByTagName("DIV");
			for (var s5_responsive_mobile_register_content_y=0; s5_responsive_mobile_register_content_y<s5_responsive_mobile_register_content.length; s5_responsive_mobile_register_content_y++) {
				if (s5_responsive_mobile_register_content[s5_responsive_mobile_register_content_y].className == "s5_module_box_2") {
					s5_responsive_mobile_register_inner = s5_responsive_mobile_register_content[s5_responsive_mobile_register_content_y].innerHTML;
				}
			}
			document.getElementById("s5_responsive_mobile_drop_down_register_inner").innerHTML = s5_responsive_mobile_register_inner;
		}
	}
	(function($){
	//Drop down toggles
	$(document).ready(function() {

	// If the login and register modules are present but not s5 box remove its class names and surrounding divs for correct styling
	s5_responsive_mobile_clear_classes();

	var s5_responsive_mobile_status_menu = "open";
	var s5_responsive_mobile_status_search = "open";
	var s5_responsive_mobile_status_login = "open";
	var s5_responsive_mobile_status_register = "open";

	s5_responsive_mobile_slide_menu_complete=function() {
	if (s5_responsive_mobile_status_menu == "open") {
		s5_responsive_mobile_status_menu = "closed";
	}
	else {
		s5_responsive_mobile_status_menu = "open";
	}
	}

	s5_responsive_mobile_slide_search_complete=function() {
	if (s5_responsive_mobile_status_search == "open") {
		s5_responsive_mobile_status_search = "closed";
	}
	else {
		s5_responsive_mobile_status_search = "open";
	}
	};

	s5_responsive_mobile_slide_login_complete=function() {
	if (s5_responsive_mobile_status_login == "open") {
		s5_responsive_mobile_status_login = "closed";
	}
	else {
		s5_responsive_mobile_status_login = "open";
	}
	};

	s5_responsive_mobile_slide_register_complete=function() {
	if (s5_responsive_mobile_status_register == "open") {
		s5_responsive_mobile_status_register = "closed";
	}
	else {
		s5_responsive_mobile_status_register = "open";
	}
	}

	MySlide=function(options){
		this.options=$.extend({elm:'#s5_responsive_mobile_drop_down_menu',
													statusvar:'s5_responsive_mobile_status_menu',
													duration:500,
													complete:function(){}},
												options);
		$(this.options.elm).wrap($('<div></div>').css({'margin':0,'position':'static','overflow':'hidden','height':0}));
		
	}
	MySlide.prototype.toggle=function(){
		if(eval(this.options.statusvar)=='open') {
			$(this.options.elm).animate({'marginTop':-($(this.options.elm).outerHeight())},{'duration':this.options.duration,'easing':'linear','complete':this.options.complete,'queue':false});
			$(this.options.elm).parent().animate({'height':0},{'duration':this.options.duration,'easing':'linear','queue':false});
		}else {
			$(this.options.elm).animate({'marginTop':0},{'duration':this.options.duration,'easing':'linear','complete':this.options.complete,'queue':false});
			$(this.options.elm).parent().animate({'height':$(this.options.elm).outerHeight()},{'duration':this.options.duration,'easing':'linear','queue':false});
		}
	}
	var s5_responsive_mobile_slide_menu = new MySlide({elm:'#s5_responsive_mobile_drop_down_menu',statusvar:'s5_responsive_mobile_status_menu',duration:500,complete:s5_responsive_mobile_slide_menu_complete});
	var s5_responsive_mobile_slide_login = new MySlide({elm:'#s5_responsive_mobile_drop_down_login',statusvar:'s5_responsive_mobile_status_login',duration:500,complete:s5_responsive_mobile_slide_login_complete});
	var s5_responsive_mobile_slide_register = new MySlide({elm:'#s5_responsive_mobile_drop_down_register',statusvar:'s5_responsive_mobile_status_register',duration:500,complete:s5_responsive_mobile_slide_register_complete});
	var s5_responsive_mobile_slide_search = new MySlide({elm:'#s5_responsive_mobile_drop_down_search',statusvar:'s5_responsive_mobile_status_search',duration:500,complete:s5_responsive_mobile_slide_search_complete});

	function s5_responsive_mobile_show_visible() {
		if (document.getElementById("s5_responsive_mobile_login_wrap")) {
		document.getElementById("s5_responsive_mobile_login_wrap").innerHTML = "";
		}
		if (document.getElementById("s5_responsive_mobile_register_wrap")) {
		document.getElementById("s5_responsive_mobile_register_wrap").innerHTML = "";
		}
		document.getElementById("s5_responsive_mobile_drop_down_wrap").className = "";
	}

	function s5_responsive_mobile_close_toggles() {
		if (s5_responsive_mobile_status_menu == "open") {
			document.getElementById("s5_responsive_mobile_toggle_click_menu").className = "s5_responsive_mobile_closed";
			s5_responsive_mobile_slide_menu.toggle();
		}
		if (s5_responsive_mobile_status_search == "open") {
			document.getElementById("s5_responsive_mobile_toggle_click_search").className = "s5_responsive_mobile_closed";
			s5_responsive_mobile_slide_search.toggle();
		}
		if (s5_responsive_mobile_status_login == "open") {
			document.getElementById("s5_responsive_mobile_toggle_click_login").className = "s5_responsive_mobile_closed";
			s5_responsive_mobile_slide_login.toggle();
		}
		if (s5_responsive_mobile_status_register == "open") {
			document.getElementById("s5_responsive_mobile_toggle_click_register").className = "s5_responsive_mobile_closed";
			s5_responsive_mobile_slide_register.toggle();
		}
	}

	function s5_responsive_mobile_toggle_menu() {
		//These line is here to fix an IE8 issue
		document.getElementById("s5_responsive_mobile_drop_down_search").style.display = "none";
		document.getElementById("s5_responsive_mobile_drop_down_login").style.display = "none";
		document.getElementById("s5_responsive_mobile_drop_down_register").style.display = "none";
		document.getElementById("s5_responsive_mobile_drop_down_menu").style.display = "block";
		s5_responsive_mobile_slide_menu.toggle();
	}

	function s5_responsive_mobile_toggle_search() {
		//These line is here to fix an IE8 issue
		document.getElementById("s5_responsive_mobile_drop_down_search").style.display = "block";
		document.getElementById("s5_responsive_mobile_drop_down_login").style.display = "none";
		document.getElementById("s5_responsive_mobile_drop_down_register").style.display = "none";
		document.getElementById("s5_responsive_mobile_drop_down_menu").style.display = "none";
		s5_responsive_mobile_slide_search.toggle();
	}

	function s5_responsive_mobile_toggle_login() {
		//These line is here to fix an IE8 issue
		document.getElementById("s5_responsive_mobile_drop_down_search").style.display = "none";
		document.getElementById("s5_responsive_mobile_drop_down_login").style.display = "block";
		document.getElementById("s5_responsive_mobile_drop_down_register").style.display = "none";
		document.getElementById("s5_responsive_mobile_drop_down_menu").style.display = "none";
		s5_responsive_mobile_slide_login.toggle();
	}

	function s5_responsive_mobile_toggle_register() {
		//These line is here to fix an IE8 issue
		document.getElementById("s5_responsive_mobile_drop_down_search").style.display = "none";
		document.getElementById("s5_responsive_mobile_drop_down_login").style.display = "none";
		document.getElementById("s5_responsive_mobile_drop_down_register").style.display = "block";
		document.getElementById("s5_responsive_mobile_drop_down_menu").style.display = "none";
		s5_responsive_mobile_slide_register.toggle();
	}

	$('#s5_responsive_mobile_toggle_click_menu').bind('click', function(event){
		event.preventDefault();
		s5_responsive_mobile_close_toggles();
		if (s5_responsive_mobile_status_menu == "closed") {
		document.getElementById("s5_responsive_mobile_toggle_click_menu").className = "s5_responsive_mobile_open";
		window.setTimeout(s5_responsive_mobile_toggle_menu,500);
		}
	});

	$('#s5_responsive_mobile_toggle_click_search').bind('click', function(event){
		event.preventDefault();
		s5_responsive_mobile_close_toggles();
		if (s5_responsive_mobile_status_search == "closed") {
		document.getElementById("s5_responsive_mobile_toggle_click_search").className = "s5_responsive_mobile_open";
		window.setTimeout(s5_responsive_mobile_toggle_search,500);
		}
	});

	$('#s5_responsive_mobile_toggle_click_login').bind('click', function(event){
		event.preventDefault();
		s5_responsive_mobile_close_toggles();
		if (s5_responsive_mobile_status_login == "closed") {
		document.getElementById("s5_responsive_mobile_toggle_click_login").className = "s5_responsive_mobile_open";
		window.setTimeout(s5_responsive_mobile_toggle_login,500);
		}
	});

	$('#s5_responsive_mobile_toggle_click_register').bind('click', function(event){
		event.preventDefault();
		s5_responsive_mobile_close_toggles();
		if (s5_responsive_mobile_status_register == "closed") {
		document.getElementById("s5_responsive_mobile_toggle_click_register").className = "s5_responsive_mobile_open";
		window.setTimeout(s5_responsive_mobile_toggle_register,500);
		}
	});



	// Close all the s5_responsive_mobile_toggles by default
	s5_responsive_mobile_close_toggles();

	// Set the wrapper div to visible after all is loaded
	window.setTimeout(s5_responsive_mobile_show_visible,1400);

	// Calculate the widths of the active menu area if enabled
	if (document.getElementById("s5_responsive_mobile_bar_active")) {
		s5_responsive_mobile_active_show();
	}

	// Override onclick if custom urls are entered
	s5_responsive_mobile_clicks();

	// If the s5 box is present store it's values
	if (document.getElementById("s5box_login") || document.getElementById("s5box_register")) {
	s5_responsive_mobile_login_register_innerhtml();
	}

	});

	$(window).bind('resize',s5_responsive_mobile_login_register);
	})(jQuery);
}

else if (s5_responsive_layout == "sidebar") {

	var s5_responsive_mobile_sidebar_click = "0";
	var s5_responsive_mobile_sidebar_first_click = "0";
	
	function s5_responsive_mobile_sidebar_resize_inner1() {
		if (document.body.offsetWidth >= 733) {
			s5_responsive_mobile_sidebar_close();
		}
		if (s5_responsive_mobile_sidebar_click == "1") {
		document.getElementById("s5_responsive_mobile_sidebar_body_wrap").style.height = document.getElementById("s5_responsive_mobile_sidebar").offsetHeight + "px";
		document.getElementById("s5_responsive_mobile_sidebar_body_wrap").style.overflow = "hidden";
		}
		document.getElementById("s5_responsive_mobile_sidebar_inner1").style.width = "auto";
		document.getElementById("s5_responsive_mobile_sidebar_inner1").style.width = (document.body.offsetWidth * 0.8) + "px";
		document.getElementById("s5_responsive_mobile_sidebar_inner1").style.height = "auto";
		document.getElementById("s5_responsive_mobile_sidebar_inner1").style.height = document.getElementById("s5_responsive_mobile_sidebar").offsetHeight + "px";
		window.setTimeout(s5_responsive_mobile_sidebar_double_check_width,300);
		window.setTimeout(s5_responsive_mobile_sidebar_double_check_width,500);
		window.setTimeout(s5_responsive_mobile_sidebar_double_check_width,700);
	}
	
	function s5_responsive_mobile_sidebar_double_check_width() {
		if (document.getElementById("s5_responsive_mobile_sidebar_inner1").offsetWidth != document.getElementById("s5_responsive_mobile_sidebar").offsetWidth) {
			document.getElementById("s5_responsive_mobile_sidebar_inner1").style.width = document.getElementById("s5_responsive_mobile_sidebar").offsetWidth + "px";
		}
	}
	
	function s5_responsive_mobile_sidebar_body_wrap_set_width() {
		if (s5_responsive_mobile_sidebar_click == "1") {
			document.getElementById("s5_responsive_mobile_sidebar_body_wrap").style.width = window.innerWidth - document.getElementById("s5_responsive_mobile_sidebar").offsetWidth + "px";
			document.getElementById("s5_responsive_mobile_sidebar_body_wrap_inner").style.width = window.innerWidth + "px";
		} else {
			document.getElementById("s5_responsive_mobile_sidebar_body_wrap").style.width = "100%";
			document.getElementById("s5_responsive_mobile_sidebar_body_wrap_inner").style.width = "100%";
		}
	}

	function s5_responsive_mobile_sidebar_open() {
		window.setTimeout(s5_responsive_mobile_sidebar_body_wrap_set_width,1000);
		document.getElementById("s5_responsive_mobile_sidebar_body_wrap").style.height = document.getElementById("s5_responsive_mobile_sidebar").offsetHeight + "px";
		document.getElementById("s5_responsive_mobile_sidebar_body_wrap").style.overflow = "hidden";
		s5_responsive_mobile_sidebar_resize_inner1();
		document.getElementById("s5_responsive_mobile_sidebar").className = "s5_responsive_mobile_sidebar_show"+s5_responsive_layout_direction;
		document.getElementById("s5_responsive_mobile_sidebar_body_wrap").className = "s5_responsive_mobile_sidebar_body_wrap_show"+s5_responsive_layout_direction;
		if (document.getElementById("s5_responsive_mobile_bottom_bar_outer")) {
			document.getElementById("s5_responsive_mobile_bottom_bar_outer").className = "s5_responsive_mobile_bottom_bar_outer_sidebar";
		}
		if (document.getElementById("s5box_register") && document.getElementById("s5_responsive_mobile_sidebar_register_bottom")) {
			document.getElementById("s5box_register").childNodes[1].childNodes[1].childNodes[1].childNodes[1].id = "s5box_register_inner";
			document.getElementById("s5_responsive_mobile_sidebar_register_bottom").innerHTML = document.getElementById("s5box_register_inner").innerHTML;
			document.getElementById("s5box_register_inner").innerHTML = "";
			document.getElementById("s5_responsive_mobile_sidebar_register_wrap").style.display = "block";
		}
		if (document.getElementById("s5box_login") && document.getElementById("s5_responsive_mobile_sidebar_login_bottom")) {
			document.getElementById("s5box_login").childNodes[1].childNodes[1].childNodes[1].childNodes[1].id = "s5box_login_inner";
			document.getElementById("s5_responsive_mobile_sidebar_login_bottom").innerHTML = document.getElementById("s5box_login_inner").innerHTML;
			document.getElementById("s5box_login_inner").innerHTML = "";
			document.getElementById("s5_responsive_mobile_sidebar_login_wrap").style.display = "block";
		}
		if (s5_responsive_mobile_sidebar_first_click == "0" && s5_responsive_menu_auto_open == "open") {
			var s5_responsive_mobile_sidebar_menu_auto_open = document.getElementById("s5_responsive_mobile_sidebar_menu_wrap").getElementsByTagName("A");
			for (var s5_responsive_mobile_sidebar_menu_auto_open_y=0; s5_responsive_mobile_sidebar_menu_auto_open_y<s5_responsive_mobile_sidebar_menu_auto_open.length; s5_responsive_mobile_sidebar_menu_auto_open_y++) {
				if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].className == "s5_mobile_sidebar_active") {
					if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode) {
						if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.className == "s5_responsive_mobile_sidebar_sub") {
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.style.display = "block";
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.previousSibling.className = "s5_mobile_sidebar_h3_open";
						}
					}
					else if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode) {
						if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.className == "s5_responsive_mobile_sidebar_sub") {
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.style.display = "block";
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.previousSibling.className = "s5_mobile_sidebar_h3_open";
						}
					}
					else if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode) {
						if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.className == "s5_responsive_mobile_sidebar_sub") {
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.className = "s5_mobile_sidebar_h3_open";
						}
					}
					else if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode) {
						if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "s5_responsive_mobile_sidebar_sub") {
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.className = "s5_mobile_sidebar_h3_open";
						}
					}
					else if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode) {
						if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "s5_responsive_mobile_sidebar_sub") {
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.className = "s5_mobile_sidebar_h3_open";
						}
					}
					else if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode) {
						if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "s5_responsive_mobile_sidebar_sub") {
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.className = "s5_mobile_sidebar_h3_open";
						}
					}
					else if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode) {
						if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "s5_responsive_mobile_sidebar_sub") {
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.className = "s5_mobile_sidebar_h3_open";
						}
					}
					else if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode) {
						if (s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "s5_responsive_mobile_sidebar_sub") {
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";
							s5_responsive_mobile_sidebar_menu_auto_open[s5_responsive_mobile_sidebar_menu_auto_open_y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.className = "s5_mobile_sidebar_h3_open";
						}
					}
				}
			}
		}
		s5_responsive_mobile_sidebar_click = "1";
		s5_responsive_mobile_sidebar_first_click = "1";
	}
	
	function s5_responsive_mobile_sidebar_close() {
		window.setTimeout(s5_responsive_mobile_sidebar_body_wrap_set_width,400);
		document.getElementById("s5_responsive_mobile_sidebar_body_wrap").style.height = "auto";
		document.getElementById("s5_responsive_mobile_sidebar_body_wrap").style.overflow = "visible";
		window.setTimeout(s5_responsive_mobile_sidebar_close_delay,400);
		document.getElementById("s5_responsive_mobile_sidebar").className = "s5_responsive_mobile_sidebar_hide"+s5_responsive_layout_direction;
		document.getElementById("s5_responsive_mobile_sidebar_body_wrap").className = "s5_responsive_mobile_sidebar_body_wrap_hide" + s5_responsive_layout_direction;
		if (document.getElementById("s5box_register_inner") && document.getElementById("s5_responsive_mobile_sidebar_register_bottom") && document.getElementById("s5box_register_inner").innerHTML == "") {
			document.getElementById("s5box_register_inner").innerHTML = document.getElementById("s5_responsive_mobile_sidebar_register_bottom").innerHTML;
			document.getElementById("s5_responsive_mobile_sidebar_register_bottom").innerHTML = "";
		}
		if (document.getElementById("s5box_login_inner") && document.getElementById("s5_responsive_mobile_sidebar_login_bottom") && document.getElementById("s5box_login_inner").innerHTML == "") {
			document.getElementById("s5box_login_inner").innerHTML = document.getElementById("s5_responsive_mobile_sidebar_login_bottom").innerHTML;
			document.getElementById("s5_responsive_mobile_sidebar_login_bottom").innerHTML = "";
		}
		s5_responsive_mobile_sidebar_click = "0";
	}

	function s5_responsive_mobile_sidebar_close_delay() {
		document.getElementById("s5_responsive_mobile_sidebar_body_wrap").className = "";
		if (document.getElementById("s5_responsive_mobile_bottom_bar_outer")) {
			document.getElementById("s5_responsive_mobile_bottom_bar_outer").className = "";
		}
	}

	
	function s5_responsive_mobile_sidebar() {
		if (s5_responsive_mobile_sidebar_click == "0") {
			s5_responsive_mobile_sidebar_open();
		}
		else {
			s5_responsive_mobile_sidebar_close();
		}
		jQuery(window).resize(s5_responsive_mobile_sidebar_resize_inner1);
		var s5_responsive_mobile_sidebar_menu_h3_load = document.getElementById("s5_responsive_mobile_sidebar_menu_wrap").getElementsByTagName("H3");
		for (var s5_responsive_mobile_sidebar_menu_h3_load_y=0; s5_responsive_mobile_sidebar_menu_h3_load_y<s5_responsive_mobile_sidebar_menu_h3_load.length; s5_responsive_mobile_sidebar_menu_h3_load_y++) {
			s5_responsive_mobile_sidebar_menu_h3_load[s5_responsive_mobile_sidebar_menu_h3_load_y].id = "s5_mobile_sidebar_h3_"+[s5_responsive_mobile_sidebar_menu_h3_load_y];
		}
	}
	
	function s5_responsive_mobile_sidebar_hide_h3_divs() {
		var s5_responsive_mobile_sidebar_menu_h3_click = document.getElementById("s5_responsive_mobile_sidebar_menu_wrap").getElementsByTagName("H3");
		for (var s5_responsive_mobile_sidebar_menu_h3_click_y=0; s5_responsive_mobile_sidebar_menu_h3_click_y<s5_responsive_mobile_sidebar_menu_h3_click.length; s5_responsive_mobile_sidebar_menu_h3_click_y++) {
			if (s5_responsive_mobile_sidebar_menu_h3_click[s5_responsive_mobile_sidebar_menu_h3_click_y].nextSibling.tagName == "DIV") {
				s5_responsive_mobile_sidebar_menu_h3_click[s5_responsive_mobile_sidebar_menu_h3_click_y].nextSibling.style.display = "none";
				s5_responsive_mobile_sidebar_menu_h3_click[s5_responsive_mobile_sidebar_menu_h3_click_y].className = "";
			}
		}
	}
	
	function s5_responsive_mobile_sidebar_h3_click(clicked_id) {
		if (document.getElementById(clicked_id).nextSibling.tagName == "DIV") {
			if (document.getElementById(clicked_id).nextSibling.style.display == "block") {
				document.getElementById(clicked_id).nextSibling.style.display = "none";
				document.getElementById(clicked_id).className = "";
			} else {
				s5_responsive_mobile_sidebar_close_links();
				document.getElementById(clicked_id).nextSibling.style.display = "block";
				document.getElementById(clicked_id).className = "s5_mobile_sidebar_h3_open";
			}
		}
	}
	
	function s5_responsive_mobile_sidebar_login() {
	if (document.getElementById("s5_responsive_mobile_sidebar_login_bottom")) {
		if (document.getElementById("s5_responsive_mobile_sidebar_login_bottom").className == "s5_responsive_mobile_sidebar_login_active") {
		document.getElementById("s5_responsive_mobile_sidebar_title_wrap_login_open").id = "s5_responsive_mobile_sidebar_title_wrap_login";
		s5_responsive_mobile_sidebar_close_links();
		}
		else {
		s5_responsive_mobile_sidebar_close_links();
		document.getElementById("s5_responsive_mobile_sidebar_login_bottom").className = "s5_responsive_mobile_sidebar_login_active";
		document.getElementById("s5_responsive_mobile_sidebar_title_wrap_login").id = "s5_responsive_mobile_sidebar_title_wrap_login_open";
		}
	}
	}
	
	function s5_responsive_mobile_sidebar_register() {
	if (document.getElementById("s5_responsive_mobile_sidebar_register_bottom")) {
		if (document.getElementById("s5_responsive_mobile_sidebar_register_bottom").className == "s5_responsive_mobile_sidebar_register_active") {
		document.getElementById("s5_responsive_mobile_sidebar_title_wrap_register_open").id = "s5_responsive_mobile_sidebar_title_wrap_register";
		s5_responsive_mobile_sidebar_close_links();
		}
		else {
		s5_responsive_mobile_sidebar_close_links();
		document.getElementById("s5_responsive_mobile_sidebar_register_bottom").className = "s5_responsive_mobile_sidebar_register_active";
		document.getElementById("s5_responsive_mobile_sidebar_title_wrap_register").id = "s5_responsive_mobile_sidebar_title_wrap_register_open";
		}
	}
	}
	
	function s5_responsive_mobile_sidebar_close_links() {
		if (document.getElementById("s5_responsive_mobile_sidebar_title_wrap_register_open")) {
		document.getElementById("s5_responsive_mobile_sidebar_title_wrap_register_open").id = "s5_responsive_mobile_sidebar_title_wrap_register";
		}
		if (document.getElementById("s5_responsive_mobile_sidebar_title_wrap_login_open")) {
		document.getElementById("s5_responsive_mobile_sidebar_title_wrap_login_open").id = "s5_responsive_mobile_sidebar_title_wrap_login";
		}
		if (document.getElementById("s5_responsive_mobile_sidebar_register_bottom")) {
		document.getElementById("s5_responsive_mobile_sidebar_register_bottom").className = "s5_responsive_mobile_sidebar_register_inactive";
		}
		if (document.getElementById("s5_responsive_mobile_sidebar_login_bottom")) {
		document.getElementById("s5_responsive_mobile_sidebar_login_bottom").className = "s5_responsive_mobile_sidebar_login_inactive";
		}
		s5_responsive_mobile_sidebar_hide_h3_divs();
	}

}