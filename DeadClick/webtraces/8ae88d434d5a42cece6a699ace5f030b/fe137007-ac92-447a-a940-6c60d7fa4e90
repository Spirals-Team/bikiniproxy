_satellite.pushAsyncScript(function(event, target, $variables){
  var shareBtnList = document.querySelectorAll('.social-share__list a');
var trackShareButton = function() {
    var socialMedia = this.getAttribute('data-social-share-button');
    s.eVar25 = socialMedia ? socialMedia : 'NA';
    s.events = 'event25';
    s.linkTrackEvents = 'event25';
    s.linkTrackVars = 'eVar25' + _satellite.getVar('TMG linkTrackVars');
    s.tl(true, 'o', 'Social sharing');
};
for (var i = 0; i < shareBtnList.length; i++) {
    shareBtnList[i].addEventListener('click', trackShareButton);
}

});
