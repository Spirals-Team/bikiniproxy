var RemoteLogger = new Object();

if (typeof(REMOTE_LOGGER_REGEXP) == "undefined") {
  REMOTE_LOGGER_REGEXP = /\.(pdf|xls|xlsx|doc|docx|ppt|pptx|mp3|mp4|txt|zip|tiff)$/;
}

RemoteLogger.isLoggable = function(url) {

  return (url.match(REMOTE_LOGGER_REGEXP)) ? true : false;
}

RemoteLogger.addClickHandlers = function() {

  var links = document.body.getElementsByTagName("A");

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var href = null;
    try {
      href = link.href;
    } catch (e) {}
    if (! href || ! RemoteLogger.isLoggable(href)) { continue; }
    if (link.attachEvent) {
      link.attachEvent("onclick", RemoteLogger.linkClicked);
    } else { 
      link.addEventListener('click', RemoteLogger.linkClicked, false);
    }
  }
}

RemoteLogger.linkClicked = function(event) {
  
  var link = event.srcElement ? event.srcElement : event.target;
  while (link && link.tagName != "A") {
    link = link.parentNode;
  }
  if (! link) { return; }
  
  if (window.dcsMultiTrack) {
    // WebTrends.
    dcsMultiTrack('DCS.dcsuri', link.href ,'WT.ti', link.title);
  } else if (window.urchinTracker) {
    // Old google analytics.
    urchinTracker(link.href);
  } else if (window.pageTracker) {
    // New google analytics.
    var linkPath = getPath(link.href);
    pageTracker._trackPageview(linkPath);
  }
}

//Find pathname from url
//http://hostnema/path/something will return /path/something
function getPath(url) {
 var a = document.createElement('a');
 a.href = url;
 return a.pathname.substr(0,1) === '/' ? a.pathname : '/' + a.pathname;
}


if (window.attachEvent) {
  window.attachEvent("onload", RemoteLogger.addClickHandlers);
} else { 
  window.addEventListener('load', RemoteLogger.addClickHandlers, false);
}
