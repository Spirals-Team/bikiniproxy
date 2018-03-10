// Extends the Google Analytics Tokenizer module by capturing referrer and landing pages
// at three different levels:
// 1. First Visit - 5-year expiration.
// 2. Current Visit - 30 minute session expiration.
// 3. Most Recent Page Load

// Cookie Names
var gatFirst = 'gat_first'; 
var gatCur = 'gat_cur';
var gatRecent = 'gat_recent'; 

// Capture referring and landing pages.
function gatCapture() {
  if (gatReadCookie(gatFirst) == null) {
    // capture the referrer
    var gatFirstData = { referrer: document.referrer, landing: document.location.href };
    gatCreateCookie(gatFirst, JSON.stringify(gatFirstData), 5*365*24*60*60) //5-year expiration
  }
  if (gatReadCookie(gatCur) == null) {
    // capture the referrer
    var gatCurData = { referrer: document.referrer, landing: document.location.href };
    gatCreateCookie(gatCur, JSON.stringify(gatCurData), 1800) //30 minute expiration
  }

  // Refresh expiration date of last session.
  gatRefreshCookie(gatCur, 1800); //Rolling 30 Minute expiration.

  // With each page request, keep track of the most recent referrer and landing page.
  var gatRecentData = { referrer: document.referrer, landing: document.location.href };
  gatCreateCookie(gatRecent, JSON.stringify(gatRecentData), 1800) //30 minute expiration

  var gatRecentVisit = JSON.parse(gatReadCookie(gatRecent));
  //alert('document.referrer: ' + document.referrer + ' document.location.href: ' + document.location.href);
}


// For debugging purposes.
function printCapture() {
  var gatFirstVisit = JSON.parse(gatReadCookie(gatFirst));
  alert('First Refer: ' + gatFirstVisit.referrer + '  First Landing: ' + gatFirstVisit.landing);

  var gatCurVisit = JSON.parse(gatReadCookie(gatCur));
  alert('Current Refer: ' + gatCurVisit.referrer + ' Current Landing: ' + gatCurVisit.landing);

  var gatRecentVisit = JSON.parse(gatReadCookie(gatRecent));
  alert('Most Recent Refer: ' + gatRecentVisit.referrer + ' Most Recent Landing: ' + gatRecentVisit.landing);
}


// Helper functions to handle cookies.
// Create cookie
function gatCreateCookie(name,value,seconds) {
	if (seconds) {
		var date = new Date();
		date.setTime(date.getTime()+(seconds*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

// Extend expiration date of cookie
function gatRefreshCookie(name, seconds) {
	if (seconds) {
		var date = new Date();
		date.setTime(date.getTime()+(seconds*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+gatReadCookie(name)+expires+"; path=/";
}

// Read value of cookie
function gatReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

// Erase cookie
function gatEraseCookie(name) {
	gatCreateCookie(name,"",-1);
}