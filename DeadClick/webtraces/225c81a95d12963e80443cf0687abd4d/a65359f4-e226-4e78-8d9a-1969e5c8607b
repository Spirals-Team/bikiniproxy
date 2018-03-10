var viewabilityLoadTimes;
$(document).ready(function(){
var templateNameValue= document.getElementById('templateName').value;
var pageTypeValue = document.getElementById('pageType').value;
var bannerTimerEnd;
var mpuAdTimerEnd;
var endOfSkyscraper;
if($('.adbanner iframe')){
     bannerTimerEnd = Date.now();
}
if($('.admpu iframe')){
     mpuAdTimerEnd= Date.now();
}
if($('.adsky iframe')){
     endOfSkyscraper= Date.now();
}
var pageParameters = {};
pageParameters.templateNameValue =templateNameValue;
pageParameters.pageTypeValue = pageTypeValue;
pageParameters.startOfPage = pageStartTime;
pageParameters.endOfHeader = tmgHeaderTimerEnd;
pageParameters.endOfContentArea = contentEndTimer;
pageParameters.endOfFooter = footerEndTimer;

if(typeof rightHandTimer!= 'undefined'){
pageParameters.endOfRightCol = rightHandTimer;
}

if(typeof bannerTimerStart!= 'undefined'){
pageParameters.startOfHeaderAd = bannerTimerStart;
pageParameters.endOfHeaderAd = bannerTimerEnd;
}

if(typeof mpuAdTimerStart!= 'undefined'){
pageParameters.startOfMPU = mpuAdTimerStart;
pageParameters.endOfMPU = mpuAdTimerEnd;
}

if(typeof startOfSkyscraper != 'undefined'){
pageParameters.startOfSkyscraper= startOfSkyscraper;
pageParameters.endOfSkyscraper= endOfSkyscraper;
}

viewabilityLoadTimes = pageParameters;
});