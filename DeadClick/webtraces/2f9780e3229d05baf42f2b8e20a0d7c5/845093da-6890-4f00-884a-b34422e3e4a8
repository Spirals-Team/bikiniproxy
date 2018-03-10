(function ($) {
    $(document).ready(function () {

        if ($.cookie("ClearCookies") == "true") {
            clearCookiesButtonClicked();
        }
        else {
            allowCookiesButtonClicked();
        }

        if ($(".ClearCookiesButton").length > 0) {
            $(".ClearCookiesButton").click(function () {
                clearCookiesButtonClicked();
            });
        }

        if ($(".AllowCookiesButton").length > 0) {
            $(".AllowCookiesButton").click(function () {
                allowCookiesButtonClicked();
            });
        }
    });

function clearAllCookies(){

	var domain = "." + document.domain;
	var path = '/';
	var e = document.cookie.split(/;\s*/);
	var c;
	
	for (c = 0; c < e.length; c++) {
		var b = e[c];
		var f = b.indexOf("=");
		var a = f > -1 ? b.substr(0, f) : b;
		if(a != "ClearCookies")
		{
			$.removeCookie(a, { path: path });
		}
	}
	
	for (c = 0; c < e.length; c++) {
		var b = e[c];
		var f = b.indexOf("=");
		var a = f > -1 ? b.substr(0, f) : b;
		if(a != "ClearCookies")
		{
			$.removeCookie(a, { path: path, domain: domain });
		}
	}
}

function clearCookiesButtonClicked() {
	$(".AllowCookiesButton").show();
	$(".ClearCookiesButton").hide();
	createClearCookiesCookie();
	clearAllCookies();
}

function allowCookiesButtonClicked() {
	$(".AllowCookiesButton").hide();
	$(".ClearCookiesButton").show();
	deleteClearCookiesCookie();
}

function createClearCookiesCookie() {
	var domain = document.domain;
	var path = '/';
	
	$.cookie("ClearCookies", "true", { path: path, domain: domain, expires: new Date(2030, 1, 1, 01, 00, 00) });
}

function deleteClearCookiesCookie() {
	var domain = document.domain;
	var path = '/';
	
	$.removeCookie("ClearCookies", { path: path, domain: domain, secure: true });
}
})(jQuery);