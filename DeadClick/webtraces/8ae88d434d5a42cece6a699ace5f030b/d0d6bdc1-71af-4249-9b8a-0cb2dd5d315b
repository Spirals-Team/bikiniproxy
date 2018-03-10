_satellite.pushAsyncScript(function(event, target, $variables){
  var pathname = document.location.pathname;
var tags = {
    'music': {
        'cat': 'brand00',
        'id': '6260248',
        'type': 'brand0'
    },
  	'amazon': {
        'cat': 'premi00',
        'id': '6260248',
        'type': 'premi0'
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


if (pathname.indexOf("/music/artists/wretch-32-making-dont-go-first-thing-thought-music/") > -1){
     fireTag('music', tags);
} else if (pathname.indexOf("/music/artists/kodaline-making-want-definitely-felt-special-wrote/") > -1){
     fireTag('music', tags);
} else if (pathname.indexOf("/music/artists/story-behind-girls-alouds-sound-underground-inspired-wheels/") > -1){
     fireTag('music', tags);
} else if (pathname.indexOf("/music/what-to-listen-to/jessie-ware-making-alone-admitting-husband-arent-perfect/") > -1){
     fireTag('music', tags);
} else if (pathname.indexOf("/music/artists/charli-xcx-making-boom-clap-boys-wanted-toflip-male-gaze-head/") > -1){
     fireTag('music', tags);
} else if (pathname.indexOf("/music/artists/craig-david-making-7-days-mum-would-never-have-allowed-really/") > -1){
     fireTag('music', tags);
} else if (pathname.indexOf("/premium/prime/") > -1){
     fireTag('amazon', tags);
} 
});
