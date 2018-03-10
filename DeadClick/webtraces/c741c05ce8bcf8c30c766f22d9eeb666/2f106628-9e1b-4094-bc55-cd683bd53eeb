/* ------- Generic pop up code - please use this only unless you really need something different -------*/
function popUpPage(url, parameters, name)
{
	var day = new Date();
	var pageName = name ? name : day.getTime()

	eval("bbc"+pageName+" = window.open('"+url+"','"+pageName+"','"+parameters+"')");

	if (eval("bbc"+pageName) && window.focus) eval("bbc"+pageName).focus();
}

/* Radio Player tag for PodCasting */
window.name="main";
function aodpopup(URL){
window.open(URL,'aod','width=693,height=525,toolbar=no,personalbar=no,location=no,directories=no,statusbar=no,menubar=no,status=no,resizable=yes,left=60,screenX=60,top=100,screenY=100');
}
if(location.search.substring(1)=="focuswin"){
	window.focus();
}


/* launch code for avconsole */
function NO_launch_main_player(site)
{
	
	if (site == null) //no site name passed in - have to leave this check in
	{
		clickmain=window.open("http://news.bbc.co.uk/broadband/news_console.stm","clickmain","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,top=100,left=100,width=671,height=405");
	}
	else
	{
		if (site == 'ukfs')
		{
			clickmain=window.open("http://news.bbc.co.uk/broadband/news_console.stm","clickmain","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,top=100,left=100,width=671,height=405");

		}
		else if (site == 'ifs')
		{
			clickmain=window.open("/narrowband/static/audio_video/avconsole/ifs/f_news_console.stm","clickmain","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,top=100,left=100,width=671,height=405");
		}
	}
}


function NOlaunchAVConsoleStory(storyid)
{
	if(bbcV2Tst())
	{
		consoleurl = "http://www.bbc.co.uk/mediaselector/check/sol/ukfs_sport/hi/av?redirect=fs.stm&nbram=1&bbram=1&nbwm=1&bbwm=1&news=1&nol_storyid=" + storyid;
		clickmain=window.open(consoleurl,"console","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=681,height=527");
	}
	else
	{
		self.location.href="http://news.bbc.co.uk/sport2/hi/3791877.stm";
	}
}

function NO_launchAVConsoleV3()
{
	if(bbcV2Tst())
	{
		clickmain=window.open("http://www.bbc.co.uk/mediaselector/check/sol/ukfs_sport/hi/av?redirect=fs.stm&nbram=1&bbram=1&nbwm=1&bbwm=1&news=1","console","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=681,height=527");
	}
	else
	{
		self.location.href="http://news.bbc.co.uk/sport2/hi/3791877.stm";
	}
}


function NO_launchAVConsoleV3sport(section,isBB)
{
	if(bbcV2Tst())
	{
	
	if (section)
	{
		//var url = "http://www.bbc.co.uk/mediaselector/check/sol/ukfs_sport/hi/av?redirect=fs_fp.stm&bbram=1&bbwm=1&news=1";
		var url = "http://www.bbc.co.uk/go/sport/int/av1/-/http://www.bbc.co.uk/mediaselector/check/sol/ukfs_sport/hi/av?redirect=fs_fp.stm&bbram=1&bbwm=1&news=1";
	}
	else
	{
		//var url = "http://www.bbc.co.uk/mediaselector/check/sol/ukfs_sport/hi/av?redirect=fs_fp.stm&bbram=1&bbwm=1&news=1";
		var url = "http://www.bbc.co.uk/go/sport/int/av1/-/http://www.bbc.co.uk/mediaselector/check/sol/ukfs_sport/hi/av?redirect=fs_fp.stm&bbram=1&bbwm=1&news=1";
	}
	
	if(!isBB)
	{
	url = url + "&nbram=1&nbwm=1";
	}
	
	if (section)
	{
		url = url + "&nol_index=" + section;
	}
		clickmain=window.open(url,"console","toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=0,width=681,height=527");
}
	else
	{
		self.location.href="http://news.bbc.co.uk/sport2/hi/3791877.stm";
	}
}





function bbcV2Tst(){

	var type = getBrowserType();
	
	return (type  != "other" &&(type == "ie5" || type == "nav6" || type == "domCompliant"));
}

function getPlatform()
{
	var myUserAgent;
	myUserAgent = navigator.userAgent.toLowerCase();

	if ((myUserAgent.indexOf("win") != -1) ||  (myUserAgent.indexOf("16bit") != -1))
	{
		return "win";
	}
	
	if (myUserAgent.indexOf("mac") != -1)
	{
		return "mac";
	}  
	
	if (myUserAgent.indexOf("x11") != -1)
	{
		return "unx";
	}  
	
	return "other";
}

function getBrowserType()
{
	var myUserAgent;

	var myMajor;
	myUserAgent= navigator.userAgent.toLowerCase();
	myMajor= parseInt(navigator.appVersion);
	if( (myUserAgent.indexOf('mozilla')!= -1) &&(myUserAgent.indexOf('spoofer')== -1) &&(myUserAgent.indexOf('compatible') == -1) &&(myUserAgent.indexOf('opera') == -1) &&(myUserAgent.indexOf('webtv')  == -1) )
	{  
		if (myMajor > 4 )
			{
				return "nav6";
			} 
		else if ((myMajor == 4 ) || (myMajor == 5 ))
			{
				return "nav4";
			}
	}
	
	if (myUserAgent.indexOf("msie") == 4)
		{
			return "ie4";
			
	}
	else if (myUserAgent.indexOf("msie") == 5)
		{
			return "ie5";
		}	
// dom compliant browsers are allowed
	if(document.body.firstChild) 
	return "domCompliant";
	return "other";
}


function getBrowserVersion() //this is for the ticker to identify between mac IE4 and IE5
{
	var s = navigator.appVersion;
	s = s.substr(s.indexOf("("),s.length);
	while (isNaN(parseInt(s)))
	{
		s = s.substr(1,s.length);
	}
	return parseInt(s);
}

function request_launch(site)
{
	if (getPlatform() != "other" &&(getBrowserType() == "ie4" || getBrowserType() == "nav4" || getBrowserType() == "nav6" || getBrowserType() == "domCompliant"))
	{
		launch_main_player(site);
	} 
	else 
	{
		self.location.href="/1/shared/bsp/hi/services/help/html/av_console_browsers.stm";
	}
	
	return;
}



function openWindow(){
	var mywin = null;var unLoad;
	var surl = "http://news.bbc.co.uk/hi/english/static/business/data_desktop/mardata/ftse.stm";
	if (!mywin){mywin = window.open(surl,'BBCNewsOnline','toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=370,height=292');
		mywin.location = surl;
		if (mywin.opener == null) mywin.opener = window; 
		mywin.opener.name = "opener";
	}else{
		if (mywin.closed){	
			mywin = null;openWindow();
		}
		if (mywin.focus) mywin.focus();
		mywin.location.href = surl;
	}
}



function popup(url) {
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(url, '" + id + "', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=370,height=220');");
} 


function popUp(pageurl,width,height,scroll){
	day = new Date();
	id = day.getTime();
	if (window.screen) {  
		lpos = (screen.width/2)-(width/2);  
		hpos = (screen.height/2)-(height/2);
	}else	{
		lpos = 1;
		hpos = 1;		
	}		 		
	eval("bbcnews"+id+" = window.open('"+pageurl+"','"+id+"','toolbar=0,scrollbars="+scroll+",location=0,status=0,menubar=0,resizable=0,width="+width+",height="+height+",left="+lpos+",top="+hpos+"')");
}

//RSS
function getArgs() { 
	var Args = new Object(); 
	var query = location.search.substring(1); 
	var pairs = query.split("&"); 
	for (var i = 0; i < pairs.length; i++) 
	{ 
		var pos = pairs[i].indexOf('='); 
		if (pos == -1) continue; 
		var argname = pairs[i].substring(0,pos); 
		var value = pairs[i].substring(pos+1); 
		Args[argname] = unescape(value); 
	} 
	return Args;
}


function getRssUrl() {
var metaTags = document.getElementsByTagName("meta");
var metaName;
	for (var i = 0; i < metaTags.length; i++) 
	{
	if (metaTags[i].getAttribute('content') == "INDEX")
		{getRssUrlIndex();}	
	}
}

function getRssUrlIndex() { 
if (document.getElementsByTagName)
{
	var url = "http://news.bbc.co.uk/1/hi/help/3223484.stm";
	var linkTags = document.getElementsByTagName("link");
	var rssURI;
	for (var i = 0; i < linkTags.length; i++) {if (linkTags[i].getAttribute('type') == "application/rss+xml") {rssURI = linkTags[i].getAttribute('href');}}
	if (rssURI){document.write('<div class="feedslink"><a href="'+rssURI+'"><img height="16" hspace="0" vspace="0" border="0" width="16" alt="News feeds" src="http://newsimg.bbc.co.uk/shared/img/v3/feed.gif" title="News feeds" align="right" /></a><a href="'+url+'" title="News feeds help">News feeds</a><span class="feedbar">&nbsp;|&nbsp;</span></div>')}
}
}

function getRssUrlStory(rssURI) { 

if (document.getElementsByTagName)
{
	var url = "http://news.bbc.co.uk/1/hi/help/3223484.stm";
	if (rssURI){document.write('<span class="feedslink"><a href="http://newsrss.bbc.co.uk'+rssURI+'"><img height="16" hspace="7" vspace="2" border="0" width="16" alt="News feeds" src="http://newsimg.bbc.co.uk/shared/img/v3/feed.gif" title="News feeds" align="left" /></a><span class="feedbar">|</span> <a href="'+url+'?rss='+rssURI+'" title="News feeds help">News feeds</a></span><br clear="all"/>')}
}
}

// picture Gallery background colours
var currentPicColor = '#665f6e';//6A6dbe
var unselectedColor = '#1F527B';//009
var deadLinkColor = '#979797';//ccc


function goToOtherBandwidth(theLink)
{
 var foundLink = false;
 var links = document.getElementsByTagName("link");
 
 for (var i = 0; i < links.length; i++) {
  if (links[i].getAttribute("title") == "Low Graphics" || links[i].getAttribute("title") == "High Graphics") {
  foundLink = true;
  window.location.href = links[i].getAttribute("href");
  }
 }
  
 if (!foundLink) {
  window.location.href = theLink.getAttribute("href");
 }
 
 return false;
}

/* Media Selector pop up code for WS AV links */
function popwin(aPage, aTarget, w, h, var1, var2){
	        window.open (aPage,aTarget,'status=no,scrollbars=no,resizable=yes,width='+w+',height='+h);
}

function toggleCollapsable(linkId, contentId) {
	
	if (document.getElementById(contentId).style.display == "none") {
		
		for (var i = 2; i < arguments.length; i+=2) {	
			document.getElementById(arguments[i]).innerHTML = collapsableShowText ;
			document.getElementById(arguments[i]).className = 'show'; 
			document.getElementById(arguments[i+1]).style.display = "none";
		}
		document.getElementById(linkId).innerHTML = collapsableHideText ;
		document.getElementById(linkId).className = 'hide'; 
		document.getElementById(contentId).style.display = "";
	} else {
		document.getElementById(linkId).innerHTML = collapsableShowText;
		document.getElementById(linkId).className = 'show'; 
		document.getElementById(contentId).style.display = "none";
	}
}

//   --------------------------------- TABNAV
function Navselect(navtype){
	if(newsi.hasDOM()){	
		this.navtype = navtype;
		this.dom = new newsi.HTML.DOM();
		this.ULs = this.dom.gebtn({parent:document.body, el:"ul"});
		this.pageurl = document.location.href.split("?")[0]; /* remove any query string or # on url */
		if(this.pageurl.charAt(this.pageurl.length-1)=="#")this.pageurl = document.location.href.split("#")[0];
		this.linksInList = [];
		this.navUL;
		this.tabToHighlight
		/* Methods */
		this._findTabOnPage();
		
	}
}
Navselect.prototype._findTabOnPage = function() {
	var _ul, _lis, _li, _i=_j= -1;
	while( _ul = this.ULs[++_i] ){/* Loop stops when ULs[n]--> null */
		if(_ul.id == this.navtype){
			this.navUL =_ul;
			_j = -1;
			_lis=this.dom.gebtn({parent:_ul, el:"li"});
			while( _li=_lis[++_j] ){/* loop through hrefs in li to see which tab matches this url */

				this.linksInList[_j] = _li.childNodes.item(0);/* make array of all the links on the list */

				if (compareUrlBothVersions(_li.childNodes.item(0).toString(), this.pageurl))		
				{
					this.tabToHighlight=_li;/* selected LI that matches page location */
					this._makeChangesToTab();
				}
			}
		}
	} 
}
Navselect.prototype._makeChangesToTab=function(){
	var _thisTagTxt=this.tabToHighlight.firstChild.firstChild.data;
	/* Remove Link and replace with text */
	this.dom.setClass({el:this.tabToHighlight, "className":"activetab"});
	var _myTextNode=document.createTextNode(_thisTagTxt);
	this.tabToHighlight.removeChild(this.tabToHighlight.firstChild);
	this.tabToHighlight.appendChild(_myTextNode);
}
function whichTab () {
	new Navselect( "tabnav3" );
};

function compareUrlBothVersions(tabUrl, pageUrl){
	
	//first try to match on the CPS ID file name
	var pageID = pageUrl.match(/http:\/\/.+\/([\w\d]*)\.stm/); 
	var tabID = tabUrl.match(/http:\/\/.+\/([\w\d]*)\.stm/);
	
	//then try to match the whole URL after the UKFS/IFS switch if either one of those is null
	var urlPartRegex = new RegExp("http:\/\/.+\/((sport)*[12]\/hi|local)\/(world\/)*(.+)", "i");  
	var pageUrlParts = pageUrl.match(urlPartRegex);
	var tabUrlParts = tabUrl.match(urlPartRegex);
	
	if(pageUrl == tabUrl){
		return true;
	}else if (pageID != null && tabID != null){
		return pageID[1] == tabID[1];
	}else if (pageUrlParts != null && tabUrlParts != null){
		var lastMatch = pageUrlParts.length-1;
		return pageUrlParts[lastMatch].split("default.stm")[0] == tabUrlParts[lastMatch].split("default.stm")[0];
	}else{
		return false;
	}
}

















