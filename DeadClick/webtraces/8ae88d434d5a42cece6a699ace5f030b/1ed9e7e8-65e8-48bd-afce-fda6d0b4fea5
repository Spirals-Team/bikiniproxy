_satellite.pushAsyncScript(function(event, target, $variables){
  var pathname = document.location.pathname;
var tags = {
    'business_events': {
        'cat': 'event0',
        'id': '6260248',
        'type': 'event00g'
    },
    'events': {
        'cat': 'event0',
        'id': '6260248',
        'type': 'event0'
    }, 
  	'business_festival_homepage': {
        'cat': 'event0',
        'id': '6260248',
        'type': 'event00m'
    },
  	'kirsty': {	
        'cat': 'event0',
        'id': '6260248',
        'type': 'kirst0'
    },
  	'whiskey': {	
        'cat': 'whisk0',
        'id': '6260248',
        'type': 'whisk0'
    }
};

var fireTag = function(tagName, tags) {
    var iframe = document.createElement('iframe');
    iframe.src = '//' + tags[tagName].id + '.fls.doubleclick.net/activityi;src=' + tags[tagName].id + ';type=' + tags[tagName].type + ';cat=' + tags[tagName].cat + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + String(Math.random()).slice(2) + '?';
    iframe.width = '1';
    iframe.height = '1';
    iframe.style.display = 'none';
    document.getElementsByTagName('body')[0].appendChild(iframe);
};

if (/^\/business\/events\/$/.test(pathname)) {
    fireTag('business_events', tags);
} else if (/^\/events\/$/.test(pathname)) {
    fireTag('events', tags);
} else if (/^\/business\/festival\-of\-business\/$/.test(pathname)) {
    fireTag('business_festival_homepage', tags);
}

if (pathname.indexOf("/events/telegraphbespoke/an-evening-with-kirstie-allsopp/") > -1){
     fireTag('kirsty', tags);
} 

if (pathname.indexOf("/events/the-telegraph-whisky-experience/") > -1){
     fireTag('whiskey', tags);
}

});
