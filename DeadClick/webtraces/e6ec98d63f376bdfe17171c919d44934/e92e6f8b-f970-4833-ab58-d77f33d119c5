// JavaScript for displaying Latest News through Ajax
  
function getLatestNews(path)
{ 
    var location = "#latest_news_president";
    var loadUrl=path;
    //$(location).html(""); 
   
    $.ajax({
            type: "GET",
            url:loadUrl,
            dataType: "html",
            success: function(responseText,textStatus,jqXHR){
                if(jqXHR.status==200)
                { 
                   //document.getElementById("latest_news_president").innerHTML=responseText;
                 // alert( responseText);
                     $(location).html(responseText);
                     //$(location).html("test value");

                }
                else
                  $(location).css("display","none");
            },
            error: function(data) {$(location).css("display","none");
            }
    }); 
    return true;
} 

// JavaScript for displaying Latest News through Ajax
 
function getLatestNewsAjax(newspath)
{ 

    
    var location = "#n02v10";
    var loadUrl=newspath;
 //alert("1");
    $.ajax({
            type: "GET",
            url:loadUrl,
            dataType: "html",
            success: function(responseText,textStatus,jqXHR){
                if(jqXHR.status==200)
                { 

//alert(responseText);
                     $(location).html(responseText);

                }
                else{
                
                  $(location).css("display","none");
                  }
            },
            error: function(data) {$(location).css("display","none");
            }
    }); 
    return true;
} 

//------------- Java Script for Page Tool Drop down & up -------------------//
  
 function toggler(){
    $(".toggle_container").hide();
    $("h2.expand_heading").toggle(function(){
        $(this).addClass("active"); 
    }, function () {
        $(this).removeClass("active");
    });
    $("h2.expand_heading").click(function(){
        $(this).next(".toggle_container").slideToggle("slow");
    });
    $(".expand_all").toggle(function(){
        $(this).addClass("expanded"); 
    }, function () {
        $(this).removeClass("expanded");
    });
    $(".expand_all").click(function(){
        $(".toggle_container").slideToggle("slow");
    });
}
function toggler_a(){
    $(".toggle_container_a").hide();
    $(".expand_all_a").toggle(function(){
        $(this).addClass("expanded"); 
    }, function () {
        $(this).removeClass("expanded");
    });
    $(".expand_all_a").click(function(){
        $(".toggle_container_a").slideToggle("slow");
    });
}
//------------- Java Script for opening share urls from pagetools -------------------//

var url=location.href; 

function share(shareURL) {
    window.open(shareURL+encodeURIComponent(url)
            + '&text='+encodeURIComponent(document.title),'_new');
}

function twitter() {
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)
            + '&text='+encodeURIComponent(document.title),'_new');
}

function facebook() {
    window.open('http://www.facebook.com/share.php?u='
            + encodeURIComponent(url) + '&t='
            + encodeURIComponent(document.title), '_new');
}
/*
function googlebuzz() {
    window.open('http://www.google.com/buzz/post?url='
            + encodeURIComponent(url) + '&title='
            + encodeURIComponent(document.title), '_new');
}

function linkedin() {
    window.open('http://www.linkedin.com/shareArticle?mini=true&url='
            + encodeURIComponent(url) + '&title='
            + encodeURIComponent(document.title));
}

function digg() {
    window.open('http://digg.com/submit?url=' + encodeURIComponent(url)
            + '&title=' + encodeURIComponent(document.title), '_new');
}

function stumbleUpon() {
    window.open('http://www.stumbleupon.com/submit?url='
            + encodeURIComponent(url) + '&title='
            + encodeURIComponent(document.title), '_new');
}

function delicious() {
    window.open('http://delicious.com/save?url=' + encodeURIComponent(url)
            + '&title=' + encodeURIComponent(document.title), '_new');
}

function hi5() {
    window.open('http://hi5.com/save?url=' + encodeURIComponent(url)
            + '&title=' + encodeURIComponent(document.title), '_new'); 
}

function renren() {
    window.open('http://share.renren.com/share/buttonshare.do?link='+url
            +'&title='+document.title, '_new'); 
}


function sina() {
    window.open('http://v.t.sina.com.cn/share/share.php?title='+document.title
            +'&url='+url+'&source=bookmark&appkey=', '_new');  
}

*/
/* to open mail form window */
/*
//added try/catch - SDSLA-990
try{document.domain = "worldbank.org";
}
catch(e){
window.status=e;
}
//SDSLA-990 - Ends 

var targeturl="http://web.worldbank.org/external/default/main?pagePK=50041377&piPK=50041375&theSitePK=318950";
var windowurl=window.location;
var titlevalue=document.title;

function MM_openBrWindow(){
        emailpopup=window.open('', 'emailpopup','scrollbars=no,resizable=yes,width=350,height=550');
        document.emailfrm.submit();
    }
*/
$(document).ready(function() {


    toggler();

    /*$('#mailwindow').openDOMWindow({
        height:710,
        width:700,
        anchoredClassName:'mailwindow',
        positionType:'absolute',
        positionTop:30,
        eventType:'click',
        positionLeft:300,
        windowSource:'iframe',
        windowPadding:0,
        loader:1,
        loaderHeight:16, 
        loaderWidth:17 
        });*/
    }); 
$(document).ready(function() {

    toggler_a();

    /*$('#mailwindow').openDOMWindow({
        height:710,
        width:700,
        anchoredClassName:'mailwindow',
        positionType:'absolute',
        positionTop:30,
        eventType:'click',
        positionLeft:300, 
        windowSource:'iframe',
        windowPadding:0,
        loader:1,
        loaderHeight:16, 
        loaderWidth:17 
        });*/
    }); 

//------------- Java Script for validating the user info in Email form -------------------//

function trim(str) {
    str = str.replace(/^\s*/, '').replace(/\s*$/, '');
    return str; 
}

var illegalChars = /\w/;
function validString(value){
    if (illegalChars.test(value))
        return false;
    else
        return true;
}

function isInteger(s)
{
    var i;
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is not a number.
        var c = s.charAt(i);
        if ((c >= "0") && (c <= "9") && (c != ".")) return false;
    }
//  All characters are numbers.
    return true;
}    

function validateMultiEmail(value) 
{
    var emails = value.split(',');
    for (var i = 0; i < emails.length; i++) 
    {
        var emailId=trim(emails[i]);
        if (!validateEmail(emailId)) 
        {
            return false;
        }
    }
    return true;
} 


function validateEmail(email)
{  
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(email) == false) 
    {
        return false;
    }
    else
    {
        return true;
    }    
}


function validateName(value)
{   


    if('' == value)     
        return false;
    else     
        return true;   
}


function validateKaptcha(value)
{  
    if('' == value) 
        return false;
    else    
        return true;     

}


function validateFromEmail(value)
{  
    if('' == value || validateEmail(value)==false)      
        return false;
    else
        return true;        

}


function validateToEmail(value)
{  

    if('' == value || validateMultiEmail(value)==false)     
        return false;
    else
        return true;


}

function validateMessage(value)
{   
    /*if(!validString(value))       
    return false;
 else   */ 
    return true;   
}

function sendMail(){
    captchaTimer();
    $("#message").html(email_message);
    if(''!=email_valid && 'false' ==email_valid){
        $("#kaptcha_warn").html(email_kaptchaValid_error_meesage);
    }

    if(''!=email_mailSendStatus && 'false' ==email_mailSendStatus){
    
        $("#mailerror_warn").html(email_mailSendStatus_error_meesage);  
    }
    
}

//------------- Java Script for expanding & collapsing Country Banner -------------------//
var hideText="";
var showText="";
function toggelCountryBanner(showHideDiv, switchTextDiv) {
    var ele = document.getElementById(showHideDiv);
    var text = document.getElementById(switchTextDiv);
    if(ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = '  <img src="etc/designs/worldbank/images/plus.gif" title="'+showText+'"/> ';
    }
    else {
        ele.style.display = "block";
        text.innerHTML = '  <img src="etc/designs/worldbank/images/minus.gif" title="'+hideText+'"/> ';
    }
}

//------------- Java Script for opening a particular tab in Overview page from Country Banner -------------------//

function openTab(tabNo)
{ 
    createCookie("tabNo",tabNo,2);
}

function createCookie(name,value,min) {
    if (min) {
        var date = new Date();
        date.setTime(date.getTime()+(min*60*1000));
        var expires = "; expires="+date.toGMTString();
    } 
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

//------------- Java Script for tabbed pane in Overview page -------------------//

var Spry;
if (!Spry) Spry = {};
if (!Spry.Widget) Spry.Widget = {};

Spry.Widget.TabbedPanels = function(element, opts)
{
    this.element = this.getElement(element);
    this.defaultTab = 0; // Show the first panel by default.
    this.tabSelectedClass = "TabbedPanelsTabSelected";
    this.tabHoverClass = "TabbedPanelsTabHover";
    this.tabFocusedClass = "TabbedPanelsTabFocused";
    this.panelVisibleClass = "TabbedPanelsContentVisible";
    this.partnerClass = "TabbedPanelsContentPartner";
    this.focusElement = null;
    this.hasFocus = false;
    this.currentTabIndex = 0;
    this.enableKeyboardNavigation = true;
    this.nextPanelKeyCode = Spry.Widget.TabbedPanels.KEY_RIGHT;
    this.previousPanelKeyCode = Spry.Widget.TabbedPanels.KEY_LEFT;

    Spry.Widget.TabbedPanels.setOptions(this, opts);

    // If the defaultTab is expressed as a number/index, convert
    // it to an element.

    if (typeof (this.defaultTab) == "number")
    {
        if (this.defaultTab < 0)
            this.defaultTab = 0;
        else
        {
            var count = this.getTabbedPanelCount();
            if (this.defaultTab >= count)
                this.defaultTab = (count > 1) ? (count - 1) : 0;
        }

        this.defaultTab = this.getTabs()[this.defaultTab];
    }

    // The defaultTab property is supposed to be the tab element for the tab content
    // to show by default. The caller is allowed to pass in the element itself or the
    // element's id, so we need to convert the current value to an element if necessary.

    if (this.defaultTab)
        this.defaultTab = this.getElement(this.defaultTab);

    this.attachBehaviors();
};

Spry.Widget.TabbedPanels.prototype.getElement = function(ele)
{
    if (ele && typeof ele == "string")
        return document.getElementById(ele);
    return ele;
};

Spry.Widget.TabbedPanels.prototype.getElementChildren = function(element)
{
    var children = [];
    var child = element.firstChild;
    while (child)
    {
        if (child.nodeType == 1 /* Node.ELEMENT_NODE */)
            children.push(child);
        child = child.nextSibling;
    }
    return children;
};

Spry.Widget.TabbedPanels.prototype.addClassName = function(ele, className)
{
    if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1))
        return;
    ele.className += (ele.className ? " " : "") + className;
};

Spry.Widget.TabbedPanels.prototype.removeClassName = function(ele, className)
{
    if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1))
        return;
    ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

Spry.Widget.TabbedPanels.setOptions = function(obj, optionsObj, ignoreUndefinedProps)
{
    if (!optionsObj)
        return;
    for (var optionName in optionsObj)
    {
        if (ignoreUndefinedProps && optionsObj[optionName] == undefined)
            continue;
        obj[optionName] = optionsObj[optionName];
    }
};

Spry.Widget.TabbedPanels.prototype.getTabGroup = function()
{
    if (this.element)
    {
        var children = this.getElementChildren(this.element);
        if (children.length)
            return children[0];
    }
    return null;
};

Spry.Widget.TabbedPanels.prototype.getTabs = function()
{
    var tabs = [];
    var tg = this.getTabGroup();
    if (tg)
        tabs = this.getElementChildren(tg);
    return tabs;
};

Spry.Widget.TabbedPanels.prototype.getContentPanelGroup = function()
{
    if (this.element)
    {
        var children = this.getElementChildren(this.element);
        if (children.length > 1)
            return children[1];
    }
    return null;
};

Spry.Widget.TabbedPanels.prototype.getContentPanels = function()
{
    var panels = [];
    var pg = this.getContentPanelGroup();
    if (pg)
        panels = this.getElementChildren(pg);
    return panels;
};

Spry.Widget.TabbedPanels.prototype.getIndex = function(ele, arr)
{
    ele = this.getElement(ele);
    if (ele && arr && arr.length)
    {
        for (var i = 0; i < arr.length; i++)
        {
            if (ele == arr[i])
                return i;
        }
    }
    return -1;
};

Spry.Widget.TabbedPanels.prototype.getTabIndex = function(ele)
{
    var i = this.getIndex(ele, this.getTabs());
    if (i < 0)
        i = this.getIndex(ele, this.getContentPanels());
    return i;
};

Spry.Widget.TabbedPanels.prototype.getCurrentTabIndex = function()
{
    return this.currentTabIndex;
};

Spry.Widget.TabbedPanels.prototype.getTabbedPanelCount = function(ele)
{
    return Math.min(this.getTabs().length, this.getContentPanels().length);
};

Spry.Widget.TabbedPanels.addEventListener = function(element, eventType, handler, capture)
{
    try
    {
        if (element.addEventListener)
            element.addEventListener(eventType, handler, capture);
        else if (element.attachEvent)
            element.attachEvent("on" + eventType, handler);
    }
    catch (e) {}
};

Spry.Widget.TabbedPanels.prototype.cancelEvent = function(e)
{
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;

    return false;
};

Spry.Widget.TabbedPanels.prototype.onTabClick = function(e, tab)
{
    this.showPanel(tab);
    return this.cancelEvent(e);
};

Spry.Widget.TabbedPanels.prototype.onTabMouseOver = function(e, tab)
{
    this.addClassName(tab, this.tabHoverClass);
    return false;
};

Spry.Widget.TabbedPanels.prototype.onTabMouseOut = function(e, tab)
{
    this.removeClassName(tab, this.tabHoverClass);
    return false;
};

Spry.Widget.TabbedPanels.prototype.onTabFocus = function(e, tab)
{
    this.hasFocus = true;
    this.addClassName(tab, this.tabFocusedClass);
    return false;
};

Spry.Widget.TabbedPanels.prototype.onTabBlur = function(e, tab)
{
    this.hasFocus = false;
    this.removeClassName(tab, this.tabFocusedClass);
    return false;
};

Spry.Widget.TabbedPanels.KEY_UP = 38;
Spry.Widget.TabbedPanels.KEY_DOWN = 40;
Spry.Widget.TabbedPanels.KEY_LEFT = 37;
Spry.Widget.TabbedPanels.KEY_RIGHT = 39;



Spry.Widget.TabbedPanels.prototype.onTabKeyDown = function(e, tab)
{
    var key = e.keyCode;
    if (!this.hasFocus || (key != this.previousPanelKeyCode && key != this.nextPanelKeyCode))
        return true;

    var tabs = this.getTabs();
    for (var i =0; i < tabs.length; i++)
        if (tabs[i] == tab)
        {
            var el = false;
            if (key == this.previousPanelKeyCode && i > 0)
                el = tabs[i-1];
            else if (key == this.nextPanelKeyCode && i < tabs.length-1)
                el = tabs[i+1];

            if (el)
            {
                this.showPanel(el);
                el.focus();
                break;
            }
        }

    return this.cancelEvent(e);
};

Spry.Widget.TabbedPanels.prototype.preorderTraversal = function(root, func)
{
    var stopTraversal = false;
    if (root)
    {
        stopTraversal = func(root);
        if (root.hasChildNodes())
        {
            var child = root.firstChild;
            while (!stopTraversal && child)
            {
                stopTraversal = this.preorderTraversal(child, func);
                try { child = child.nextSibling; } catch (e) { child = null; }
            }
        }
    }
    return stopTraversal;
};

Spry.Widget.TabbedPanels.prototype.addPanelEventListeners = function(tab, panel)
{
    var self = this;
    Spry.Widget.TabbedPanels.addEventListener(tab, "click", function(e) { return self.onTabClick(e, tab); }, false);
    Spry.Widget.TabbedPanels.addEventListener(tab, "mouseover", function(e) { return self.onTabMouseOver(e, tab); }, false);
    Spry.Widget.TabbedPanels.addEventListener(tab, "mouseout", function(e) { return self.onTabMouseOut(e, tab); }, false);

    if (this.enableKeyboardNavigation)
    {
        // XXX: IE doesn't allow the setting of tabindex dynamically. This means we can't
        // rely on adding the tabindex attribute if it is missing to enable keyboard navigation
        // by default.

        // Find the first element within the tab container that has a tabindex or the first
        // anchor tag.

        var tabIndexEle = null;
        var tabAnchorEle = null;

        this.preorderTraversal(tab, function(node) {
            if (node.nodeType == 1 /* NODE.ELEMENT_NODE */)
            {
                var tabIndexAttr = tab.attributes.getNamedItem("tabindex");
                if (tabIndexAttr)
                {
                    tabIndexEle = node;
                    return true;
                }
                if (!tabAnchorEle && node.nodeName.toLowerCase() == "a")
                    tabAnchorEle = node;
            }
            return false;
        });

        if (tabIndexEle)
            this.focusElement = tabIndexEle;
        else if (tabAnchorEle)
            this.focusElement = tabAnchorEle;

        if (this.focusElement)
        {
            Spry.Widget.TabbedPanels.addEventListener(this.focusElement, "focus", function(e) { return self.onTabFocus(e, tab); }, false);
            Spry.Widget.TabbedPanels.addEventListener(this.focusElement, "blur", function(e) { return self.onTabBlur(e, tab); }, false);
            Spry.Widget.TabbedPanels.addEventListener(this.focusElement, "keydown", function(e) { return self.onTabKeyDown(e, tab); }, false);
        }
    }
};

Spry.Widget.TabbedPanels.prototype.showPanel = function(elementOrIndex)
{
    var tpIndex = -1;

    if (typeof elementOrIndex == "number")
        tpIndex = elementOrIndex;
    else // Must be the element for the tab or content panel.
        tpIndex = this.getTabIndex(elementOrIndex);

    if (!tpIndex < 0 || tpIndex >= this.getTabbedPanelCount())
        return;

    var tabs = this.getTabs();
    var panels = this.getContentPanels();

    var numTabbedPanels = Math.max(tabs.length, panels.length);

    for (var i = 0; i < numTabbedPanels; i++)
    {
        if (i != tpIndex)
        {
            if (tabs[i])
                this.removeClassName(tabs[i], this.tabSelectedClass);
            if (panels[i])
            {
                this.removeClassName(panels[i], this.panelVisibleClass);
                panels[i].style.display = "none";
            }
        }
    }

 if (panels[tpIndex].className == this.partnerClass)
        $('#para').css('display','none');
    else
        $('#para').css('display','');
        
    this.addClassName(tabs[tpIndex], this.tabSelectedClass);
    this.addClassName(panels[tpIndex], this.panelVisibleClass);
    panels[tpIndex].style.display = "block";

    this.currentTabIndex = tpIndex;
};

Spry.Widget.TabbedPanels.prototype.attachBehaviors = function(element)
{
    var tabs = this.getTabs();
    var panels = this.getContentPanels();
    var panelCount = this.getTabbedPanelCount();

    for (var i = 0; i < panelCount; i++)
        this.addPanelEventListeners(tabs[i], panels[i]);

    this.showPanel(this.defaultTab);
};

//------------- Impression -------------------//
//------------- Java Script for decoding the url -------------------//

var asynchronousJSLoad = function(src){
    var doubleDelegate = function(func1, func2) {
        return function() {
            var args = Array.prototype.slice.call(arguments, 0);
            if (func1) {
                window.setTimeout(function() {
                    func1.apply(this, args);
                },1);
            }
            if (func2) {
                window.setTimeout(function() {
                    func2.apply(this, args);
                },1);
            }
        };
    };
    window.onload = doubleDelegate(window.onload,function() {
        var script = document.createElement("script");
        script.src = src;
        document.getElementsByTagName('head')[0].appendChild(script);
    });
};

var  logStats = function (encoded, path, test){
    var decoded = (encoded.substring(encoded.length-10)+encoded.substring(0,encoded.length-10)).replace("logS","http").replace("[]","//");
    asynchronousJSLoad(decoded+path);
}

//------------- SlideShow page -------------------//
//------------- Java Script for loading slide show -------------------//

var slideshow_timer=1;
function slideshow_slideSwitch() {
    var $active = $('#slideshow-comp DIV.active');

    if ( $active.length == 0 ) $active = $('#slideshow-comp DIV:last');

    // use this to pull the divs in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
            : $('#slideshow-comp DIV:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
        $active.removeClass('active last-active');
    });
}

function slideshow(speed)
{
    speed=parseInt(speed)*1000;
    $(function() { 
        slideshow_timer=setInterval( "slideshow_slideSwitch()", speed );
    });
}

//------------- Feature Story page -------------------//
//------------- Java Script for loading slide show in Featured Multimedia comp -------------------//

var c05v1_mul_entered=false;
var featuremultimedia_timer;
function featuremultimedia_slideSwitch() {
    var $active = $('#fs_slideshow-comp DIV.active');

    if ( $active.length == 0 ) $active = $('#fs_slideshow-comp DIV:last');

    // use this to pull the divs in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
            : $('#fs_slideshow-comp DIV:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
        $active.removeClass('active last-active');
    });
}

function featuremultimedia_slideshow(speed) //--VK--//
{
    speed=parseInt(speed)*1000;
    $(function() { 
        featuremultimedia_timer=setInterval( "featuremultimedia_slideSwitch()", speed );
    });
}

//---Java Script removing border bottom CSS in expert page---//
function s01v4_addremoveClass(){
    if (!c05v1_mul_entered)
    {
        $('#s01v4').removeClass("border-bottom");
    }
    else
    {
        $('#s01v4').addClass("border-bottom");
    }
}
function c05v1_addClass(){
    if (c05v1_mul_entered)
        $('#c05v1').addClass("border-bottom");
}

//------------- News & Views page -------------------//
//------------- Java Script for loading slide show in  SlideShow comp -------------------//

var news_views_timer=1;
var componentCheck=0;
var resourcePath="1";
function getMultimedia(type,path,id)
{
    var location1,location2;
    if(type==1)
    {
        $(".c05v8").removeClass('selectedvideo');
        id="#v"+id;
        $(id).addClass("selectedvideo");
        location1="#nw-video";
        
    }
    else if(type==2)
    {
        $(".c05v10").removeClass('selectedvideo');
        id="#s"+id;
        $(id).addClass("selectedvideo");
        clearInterval(news_views_timer);
        location1="#nw-slideshow";
        location2="#nw-slideshow1";
    }
    $.ajaxSetup ({
        cache: false
    });
    var ajax_load = "<img class='loading' src='etc/designs/worldbank/images/load.gif' alt='loading...' />";
    var loadUrl = resourcePath+"?type="+type+"&path="+path;
    $(location).html(ajax_load);
    $.get(
            loadUrl,
            function(responseText){
                $(location1).html(responseText);
                if(type==2){
                  $(location2).html(responseText);                 
                }
            },
            "html"
    );
    return true;
}

function nw_slideSwitch() {
    var $active = $('#nw-slideshow DIV.active');

    if ( $active.length == 0 ) $active = $('#nw-slideshow DIV:last');

    // use this to pull the divs in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
            : $('#nw-slideshow DIV:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
        $active.removeClass('active last-active');
    });
} 

function start_ss(speed){ //--VK--//
    speed=parseInt(speed)*1000;
    clearInterval(news_views_timer);
    nw_slideSwitch();
    news_views_timer= setInterval( "nw_slideSwitch()", speed );
}


//------------- Java Script for Switch conwtent -------------------//
//-------------------------------------------------------------------
//Switch Content Script- By Dynamic Drive, available at: http://www.dynamicdrive.com
//Created: Jan 5th, 2007
//April 5th, 07: Added ability to persist content states by x days versus just session only
//March 27th, 08': Added ability for certain headers to get its contents remotely from an external file via Ajax (2 variables below to customize)
//-------------------------------------------------------------------

var switchcontent_ajax_msg='<em>Loading Ajax content...</em>' //Customize message to show while fetching Ajax content (if applicable)
    var switchcontent_ajax_bustcache=true //Bust cache and refresh fetched Ajax contents when page is reloaded/ viewed again?

    function switchcontent(className, filtertag){
    this.className=className
    this.collapsePrev=false //Default: Collapse previous content each time
    this.persistType="none" //Default: Disable persistence
        //Limit type of element to scan for on page for switch contents if 2nd function parameter is defined, for efficiency sake (ie: "div")
        this.filter_content_tag=(typeof filtertag!="undefined")? filtertag.toLowerCase() : ""
            this.ajaxheaders={} //object to hold path to ajax content for corresponding header (ie: ajaxheaders["header1"]='external.htm')
}

switchcontent.prototype.setStatus=function(openHTML, closeHTML){ //PUBLIC: Set open/ closing HTML indicator. Optional
    this.statusOpen=openHTML
    this.statusClosed=closeHTML
}

switchcontent.prototype.setColor=function(openColor, closeColor){ //PUBLIC: Set open/ closing color of switch header. Optional
    this.colorOpen=openColor
    this.colorClosed=closeColor
}

switchcontent.prototype.setPersist=function(bool, days){ //PUBLIC: Enable/ disable persistence. Default is false.
    if (bool==true){ //if enable persistence
        if (typeof days=="undefined") //if session only
            this.persistType="session"
                else{ //else if non session persistent
                    this.persistType="days"
                        this.persistDays=parseInt(days)
                }
    }
    else
        this.persistType="none"
}

switchcontent.prototype.collapsePrevious=function(bool){ //PUBLIC: Enable/ disable collapse previous content. Default is false.
    this.collapsePrev=bool
}

switchcontent.prototype.setContent=function(index, filepath){ //PUBLIC: Set path to ajax content for corresponding header based on header index
    this.ajaxheaders["header"+index]=filepath
}

switchcontent.prototype.sweepToggle=function(setting){ //PUBLIC: Expand/ contract all contents method. (Values: "contract"|"expand")
    if (typeof this.headers!="undefined" && this.headers.length>0){ //if there are switch contents defined on the page
        for (var i=0; i<this.headers.length; i++){
            if (setting=="expand")
                this.expandcontent(this.headers[i]) //expand each content
                else if (setting=="contract")
                    this.contractcontent(this.headers[i]) //contract each content
        }
    }
}


switchcontent.prototype.defaultExpanded=function(){ //PUBLIC: Set contents that should be expanded by default when the page loads (ie: defaultExpanded(0,2,3)). Persistence if enabled overrides this setting.
    var expandedindices=[] //Array to hold indices (position) of content to be expanded by default
                         //Loop through function arguments, and store each one within array
                         //Two test conditions: 1) End of Arguments array, or 2) If "collapsePrev" is enabled, only the first entered index (as only 1 content can be expanded at any time)
                         for (var i=0; (!this.collapsePrev && i<arguments.length) || (this.collapsePrev && i==0); i++)
                             expandedindices[expandedindices.length]=arguments[i]
                                                                               this.expandedindices=expandedindices.join(",") //convert array into a string of the format: "0,2,3" for later parsing by script
}


//PRIVATE: Sets color of switch header.

switchcontent.prototype.togglecolor=function(header, status){
    if (typeof this.colorOpen!="undefined")
        header.style.color=status
}


//PRIVATE: Sets status indicator HTML of switch header.

switchcontent.prototype.togglestatus=function(header, status){
    if (typeof this.statusOpen!="undefined")
        header.firstChild.innerHTML=status
}


//PRIVATE: Contracts a content based on its corresponding header entered

switchcontent.prototype.contractcontent=function(header){
    var innercontent=document.getElementById(header.id.replace("-title", "")) //Reference content container for this header
    innercontent.style.display="none"
        this.togglestatus(header, this.statusClosed)
        this.togglecolor(header, this.colorClosed)
}


//PRIVATE: Expands a content based on its corresponding header entered

switchcontent.prototype.expandcontent=function(header){
    var innercontent=document.getElementById(header.id.replace("-title", ""))
    if (header.ajaxstatus=="waiting"){//if this is an Ajax header AND remote content hasn't already been fetched
        switchcontent.connect(header.ajaxfile, header)
    }
    innercontent.style.display="block"
        this.togglestatus(header, this.statusOpen)
        this.togglecolor(header, this.colorOpen)
}

//-------------------------------------------------------------------
//PRIVATE: toggledisplay(header)- Toggles between a content being expanded or contracted
//If "Collapse Previous" is enabled, contracts previous open content before expanding current
//-------------------------------------------------------------------

switchcontent.prototype.toggledisplay=function(header){
    var innercontent=document.getElementById(header.id.replace("-title", "")) //Reference content container for this header
    if (innercontent.style.display=="block")
        this.contractcontent(header)
        else{
            this.expandcontent(header)
            if (this.collapsePrev && typeof this.prevHeader!="undefined" && this.prevHeader.id!=header.id) // If "Collapse Previous" is enabled and there's a previous open content
                this.contractcontent(this.prevHeader) //Contract that content first
        }
    if (this.collapsePrev)
        this.prevHeader=header //Set current expanded content as the next "Previous Content"
}


//-------------------------------------------------------------------
//PRIVATE: collectElementbyClass()- Searches and stores all switch contents (based on shared class name) and their headers in two arrays
//Each content should carry an unique ID, and for its header, an ID equal to "CONTENTID-TITLE"
//-------------------------------------------------------------------

switchcontent.prototype.collectElementbyClass=function(classname){ //Returns an array containing DIVs with specified classname
    var classnameRE=new RegExp("(^|\\s+)"+classname+"($|\\s+)", "i") //regular expression to screen for classname within element
    this.headers=[], this.innercontents=[]
                                         if (this.filter_content_tag!="") //If user defined limit type of element to scan for to a certain element (ie: "div" only)
                                             var allelements=document.getElementsByTagName(this.filter_content_tag)
                                             else //else, scan all elements on the page!
                                                 var allelements=document.all? document.all : document.getElementsByTagName("*")
                                                         for (var i=0; i<allelements.length; i++){
                                                             if (typeof allelements[i].className=="string" && allelements[i].className.search(classnameRE)!=-1){
                                                                 if (document.getElementById(allelements[i].id+"-title")!=null){ //if header exists for this inner content
                                                                     this.headers[this.headers.length]=document.getElementById(allelements[i].id+"-title") //store reference to header intended for this inner content
                                                                     this.innercontents[this.innercontents.length]=allelements[i] //store reference to this inner content
                                                                 }
                                                             }
                                                         }
}


//PRIVATE: init()- Initializes Switch Content function (collapse contents by default unless exception is found)

switchcontent.prototype.init=function(){
    var instanceOf=this
    this.collectElementbyClass(this.className) //Get all headers and its corresponding content based on shared class name of contents
    if (this.headers.length==0) //If no headers are present (no contents to switch), just exit
        return
        //If admin has changed number of days to persist from current cookie records, reset persistence by deleting cookie
        if (this.persistType=="days" && (parseInt(switchcontent.getCookie(this.className+"_dtrack"))!=this.persistDays))
            switchcontent.setCookie(this.className+"_d", "", -1) //delete cookie
            // Get ids of open contents below. Four possible scenerios:
            // 1) Session only persistence is enabled AND corresponding cookie contains a non blank ("") string
            // 2) Regular (in days) persistence is enabled AND corresponding cookie contains a non blank ("") string
            // 3) If there are contents that should be enabled by default (even if persistence is enabled and this IS the first page load)
            // 4) Default to no contents should be expanded on page load ("" value)
            var opencontents_ids=(this.persistType=="session" && switchcontent.getCookie(this.className)!="")? ','+switchcontent.getCookie(this.className)+',' : (this.persistType=="days" && switchcontent.getCookie(this.className+"_d")!="")? ','+switchcontent.getCookie(this.className+"_d")+',' : (this.expandedindices)? ','+this.expandedindices+',' : ""
                for (var i=0; i<this.headers.length; i++){ //BEGIN FOR LOOP
                    if (typeof this.ajaxheaders["header"+i]!="undefined"){ //if this is an Ajax header
                        this.headers[i].ajaxstatus='waiting' //two possible statuses: "waiting" and "loaded"
                            this.headers[i].ajaxfile=this.ajaxheaders["header"+i]
                    }
                    if (typeof this.statusOpen!="undefined") //If open/ closing HTML indicator is enabled/ set
                        this.headers[i].innerHTML='<span class="status"></span>'+this.headers[i].innerHTML //Add a span element to original HTML to store indicator
                        if (opencontents_ids.indexOf(','+i+',')!=-1){ //if index "i" exists within cookie string or default-enabled string (i=position of the content to expand)
                            this.expandcontent(this.headers[i]) //Expand each content per stored indices (if ""Collapse Previous" is set, only one content)
                            if (this.collapsePrev) //If "Collapse Previous" set
                                this.prevHeader=this.headers[i]  //Indicate the expanded content's corresponding header as the last clicked on header (for logic purpose)
                        }
                        else //else if no indices found in stored string
                            this.contractcontent(this.headers[i]) //Contract each content by default
                            this.headers[i].onclick=function(){instanceOf.toggledisplay(this)}
                } //END FOR LOOP
            switchcontent.dotask(window, function(){instanceOf.rememberpluscleanup()}, "unload") //Call persistence method onunload
}


//-------------------------------------------------------------------
//PRIVATE: rememberpluscleanup()- Stores the indices of content that are expanded inside session only cookie
//If "Collapse Previous" is enabled, only 1st expanded content index is stored
//-------------------------------------------------------------------

//Function to store index of opened ULs relative to other ULs in Tree into cookie:
switchcontent.prototype.rememberpluscleanup=function(){
    //Define array to hold ids of open content that should be persisted
    //Default to just "none" to account for the case where no contents are open when user leaves the page (and persist that):
    var opencontents=new Array("none")
    for (var i=0; i<this.innercontents.length; i++){
        //If persistence enabled, content in question is expanded, and either "Collapse Previous" is disabled, or if enabled, this is the first expanded content
        if (this.persistType!="none" && this.innercontents[i].style.display=="block" && (!this.collapsePrev || (this.collapsePrev && opencontents.length<2)))
            opencontents[opencontents.length]=i //save the index of the opened UL (relative to the entire list of ULs) as an array element
            this.headers[i].onclick=null //Cleanup code
    }
    if (opencontents.length>1) //If there exists open content to be persisted
        opencontents.shift() //Boot the "none" value from the array, so all it contains are the ids of the open contents
        if (typeof this.statusOpen!="undefined")
            this.statusOpen=this.statusClosed=null //Cleanup code
            if (this.persistType=="session") //if session only cookie set
                switchcontent.setCookie(this.className, opencontents.join(",")) //populate cookie with indices of open contents: classname=1,2,3,etc
                else if (this.persistType=="days" && typeof this.persistDays=="number"){ //if persistent cookie set instead
                    switchcontent.setCookie(this.className+"_d", opencontents.join(","), this.persistDays) //populate cookie with indices of open contents
                    switchcontent.setCookie(this.className+"_dtrack", this.persistDays, this.persistDays) //also remember number of days to persist (int)
                }
}


//-------------------------------------------------------------------
//A few utility functions below:
//-------------------------------------------------------------------


switchcontent.dotask=function(target, functionref, tasktype){ //assign a function to execute to an event handler (ie: onunload)
    var tasktype=(window.addEventListener)? tasktype : "on"+tasktype
            if (target.addEventListener)
                target.addEventListener(tasktype, functionref, false)
                else if (target.attachEvent)
                    target.attachEvent(tasktype, functionref)
}

switchcontent.connect=function(pageurl, header){
    var page_request = false
    var bustcacheparameter=""
        if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
            try {
                page_request = new ActiveXObject("Msxml2.XMLHTTP")
            } 
            catch (e){
                try{
                    page_request = new ActiveXObject("Microsoft.XMLHTTP")
                }
                catch (e){}
            }
        }
        else if (window.XMLHttpRequest) // if Mozilla, Safari etc
            page_request = new XMLHttpRequest()
        else
            return false
            page_request.onreadystatechange=function(){switchcontent.loadpage(page_request, header)}
    if (switchcontent_ajax_bustcache) //if bust caching of external page
        bustcacheparameter=(pageurl.indexOf("?")!=-1)? "&"+new Date().getTime() : "?"+new Date().getTime()
                page_request.open('GET', pageurl+bustcacheparameter, true)
                page_request.send(null)
}

switchcontent.loadpage=function(page_request, header){
    var innercontent=document.getElementById(header.id.replace("-title", "")) //Reference content container for this header
    innercontent.innerHTML=switchcontent_ajax_msg //Display "fetching page message"
    if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1)){
        innercontent.innerHTML=page_request.responseText
        header.ajaxstatus="loaded"
    }
}

switchcontent.getCookie=function(Name){ 
    var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
    if (document.cookie.match(re)) //if cookie found
        return document.cookie.match(re)[0].split("=")[1] //return its value
                                                       return ""
}

switchcontent.setCookie=function(name, value, days){
    if (typeof days!="undefined"){ //if set persistent cookie
        var expireDate = new Date()
        var expstring=expireDate.setDate(expireDate.getDate()+days)
        document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()
    }
    else //else if this is a session only cookie
        document.cookie = name+"="+value
}

//------------- Java Script removing bottom border from s01v6 -------------------//

function s01v6_removeBorderBottom(){
    $('#s01v6').addClass("hideInPreview");
    $('#s01v6').removeClass("border-bottom");
}

//------------- Java Script adding bottom border from s01v6 -------------------//

function s01v6_addBorderBottom(){
    $('#s01v6').addClass("border-bottom");
    $('#s01v6').removeClass("hideInPreview");
}

//------------- Java Script removing complete css from s01v6 -------------------//

function s01v6_removeCompleteCSS(){
    $('#s01v6').css("display","none");
}

//------------- Java Script removing css from c10v1 -------------------//
/*
function c10v1_removeCSS(fromEdit){ 
    c10v1_isData=false;
    $('#c10v1').removeClass("c10v1-resources border-bottom clearfix padding-top17") ;
    if(!fromEdit)
    $('#c16v1').removeClass('border-bottom') ;
}
*/
//------------- Java Script adding css to c10v1 -------------------//
/*
function c10v1_addCSS(){
    $('#c10v1').addClass("c10v1-resources border-bottom clearfix padding-top17") ; 
    //$('#c10v1').removeClass('border-bottom') ;
}
*/
//------------- Java Script removing bottom-border from c16v1 -------------------//

var c10v1_entered=false;
var blogs_entered=false;

function c16v1_border(){
    if(c10v1_entered || blogs_entered){
        $('#c16v1').addClass('border-bottom') ;
    }
    else{
        $('#c16v1').removeClass('border-bottom') ;
    }
}

//------------- Java Script adding css from c10v1 -------------------//

function c10v1_addBorder(){
    
    $('#c10v1').addClass('c10v1-resources border-bottom clearfix padding-top17') ;
    //if(!blogs_entered)
    //$('#c10v1').removeClass('border-bottom') ;    
    }

//------------- Java Script removing css from c10v1 -------------------//

function c10v1_removeBorder(){
    $('#c10v1').removeClass('c10v1-resources border-bottom clearfix padding-top17') ;
    }

function c10v1_removeBorderBlogs(){
    $('#c10v1').removeClass('border-bottom') ;
}

//------------- Java Script removing css from s01v1 Related-------------------//

function s01v1_removeCSS(){
    isData_entered=false;

    $('#s01v1').removeClass("s01v1-related clearfix border-bottom") ;  
}

//------------- Java Script adding css to s01v1 Related-------------------//

function s01v1_addCSS(){
    $('#s01v1').addClass("s01v1-related clearfix border-bottom") ; 
}

//------------- Java Script removing border bottom css from s01v3 -------------------//

function s01v3_removeCSS(){
    $('#s01v3').removeClass("border-bottom") ;  
}

//------------- Java Script adding border bottom css to s01v3 -------------------//

function s01v3_addCSS(){
    $('#s01v3').addClass("border-bottom") ; 
}

//------------- Java Script removing complete css from s02v1 -------------------//

function s02v1_removeCompleteCSS(){
    $('#s02v1').css("display","none");
}

//------------- Java Script removing bottom border from s03v2 -------------------//

function s03v2_removeBorderBottom(){
    $('#s03v2').addClass("hideInPreview");
    $('#s03v2').removeClass("border-bottom");
}

//------------- Java Script adding bottom border from s03v2 -------------------//

function s03v2_addBorderBottom(){
    $('#s03v2').addClass("border-bottom");
    $('#s03v2').removeClass("hideInPreview");
}

//------------- Java Script removing complete css from s03v2 -------------------//

function s03v2_removeCompleteCSS(){
    $('#s03v2').css("display","none");
}

//------------- Java Script removing border bottom css from s06v3 -------------------//

function s06v3_removeCSS(){
    $('#s06v3').removeClass("s06v3-highlights border-bottom") ;  
}

//------------- Java Script adding border bottom css to s06v3 -------------------//

function s06v3_addCSS(){
    $('#s06v3').addClass("s06v3-highlights border-bottom") ; 
}



//------------- Java Script removing border bottom css from s07v1 -------------------//

function s07v1_removeCSS(){
    s07v1_isData = false;
    $('#s07v1').removeClass("s07v1-mediacontent clearfix border-bottom") ;  
}

//------------- Java Script adding border bottom css to s07v1 -------------------//

function s07v1_addCSS(){
    $('#s07v1').addClass("s07v1-mediacontent clearfix border-bottom") ;
}

//------------- Java Script removing margin bottom css from s07v1 -------------------//
function s07v1_removeMarginCSS(){
    s07v1_isData=false;
    $('#s07v1').removeClass("margin-bottom19") ;  
}

//------------- Java Script adding margin bottom css to s07v1 -------------------//

function s07v1_addMarginCSS(){
    $('#s07v1').addClass("margin-bottom19") ;     
}

//------------- Java Script is for H1 Country Chine Show & Hide ------------------- //

function toggle(showHideDiv, switchTextDiv) {
    var ele = document.getElementById(showHideDiv);
    var text = document.getElementById(switchTextDiv);
    if(ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "show";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "hide";
    }
} 

function toggle2(showHideDiv, switchTextDiv) {
    var ele = document.getElementById(showHideDiv);
    var text = document.getElementById(switchTextDiv);
    if(ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = '  <img src="images/plus.gif"/> '; 
    }
    else {
        ele.style.display = "block";
        text.innerHTML = '  <img src="images/minus.gif"/> '; 
    }
}

//------------- Java Script removing complete css from c00v3 -------------------//

function c00v3_removeCompleteCSS(){
    $('#c00v3').css("display","none");
}

//------------- Java Script removing html code from c05v10 -------------------//

function c05v10_clearHTML(){
    $('#nw-slideshow').html("");
}

//------------- Java Script removing complete css from c05v10 -------------------//

function c05v10_removeCompleteCSS(){
    $('#slideshow').css('display','none');
    if(componentCheck==1)
        $('#TabbedPanels1').css('display','none');
}

//------------- Java Script removing html code from c05v8 -------------------//

function c05v8_clearHTML(){
    $('#nw-video').html("");
}

//------------- Java Script removing complete css from c05v8 -------------------//

function c05v8_removeCompleteCSS(){
    $('#video').css('display','none');
    TabbedPanels1.showPanel(1);
    componentCheck=1;
}

function c05v8_Print()
{
    $('#ul-print1').html($('#ul-c05v8').html());
    $('#ul-print1').children().removeAttr('id');
    $('#ul-print1').children().removeAttr('class');
    $('#p-print1').html($('#p-c05v8').html());
}

function c05v10_Print()
{
    $('#ul-print2').html($('#ul-c05v10').html());
    $('#ul-print2').children().removeAttr('id');
    $('#ul-print2').children().removeAttr('class');
    $('#p-print2').html($('#p-c05v10').html());
}

//------------- Java Script removing border bottom css from c15v1 -------------------//

function c15v1_removeCSS(){
    $('#c15v1').removeClass("border-left border-right border-bottom1 padding-bottom26");
}

//------------- Java Script adding border bottom css to c15v1 -------------------//

function c15v1_addCSS(){
    $('#c15v1').addClass("border-left border-right border-bottom1 padding-bottom26");
}

//------------- Java Script removing option components css in Country landing -------------------//

function countrylanding_removeComponentCSS(){


   //alert( isData_entered); // this value is coming from s01v1-Related component
   //alert(photo_galery_entered); // this value is coming from s05v10_photo_gallery
    //if( !isData_entered)
    $('#s01v1_rel').removeClass("s01v1-related padding-bottom38 border-bottom") ; 
    
    //alert(experts_entered); 
    
    if(!experts_entered && !photo_galery_entered) 
        $('#s03v1').removeClass("border-bottom") ;
        
     if(!experts_entered)
     $('#s06v1').removeClass("padding-bottom39") ;  
      
    if(!photo_galery_entered)
        $('#s06v1').removeClass("border-bottom") ;
    //alert(country_data_entered); // this value is coming from d02v1_country_data
    if(!country_data_entered)
        $('#d01v1').removeClass("border-bottom") ;
    //alert(map_entered); // this value is coming from s02v1_project_map 
    //toggelCountryBanner('myContent','myHeader');
    
}

//------------- Java Script removing option components css in President landing -------------------//

function presLanding_removeComponentCSS(){ 

    if(!isData_entered_res){
        $("div").parent("#s01v1_rel").removeClass("padding-bottom38 border-bottom") ;
    }
    if(!relData){
        $("div").parent("#s01v1_rel").removeClass("s01v1-related padding-bottom38 border-bottom") ;
    }
    if(!isData_entered_res){
        $("div").parent("#s01v1_res").removeClass("s01v1-related padding-bottom38 border-bottom") ;
    }
   if(!presBlog && isData_entered_res){    
       $("div").parent("#s01v1_res").removeClass("padding-bottom38 border-bottom") ; 
    } 
    if(presBlog && relData){     
        $("div").parent("#s01v1_rel").addClass("padding-bottom38 border-bottom") ;
    }
} 

//------------- Java Script Captcha image in Email form -------------------//

var captchaStartTime = 0;

function captchaRefresh() {
    var captchakey = ("" + Math.random()).substring(3, 8);
    var captchaimg = document.getElementById("cq_captchaimg");
    var captchakeyelem = document.getElementById("cq_captchakey");
    captchaimg.src = captchaimg.src.split("?")[0] + "?id=" + captchakey;
    captchakeyelem.value = captchakey;
    captchaStartTime = new Date().getTime();
}

//------------- Java Script for changing Captcha image timer in Email form -------------------//

function captchaTimer() {
    var now = new Date().getTime();
    if ((now - captchaStartTime) > 60000) {
        captchaRefresh();
    }  
    window.setTimeout("captchaTimer()", 1000);
}

//------------- Java Script sending mail from Email form -------------------//

function submitForm(){
    
    var nameField=$.trim(document.forms['mailForm'].name.value);
    var fromAddress=$.trim(document.forms['mailForm'].fromAddress.value);
    var toAddress=$.trim(document.forms['mailForm'].toAddress.value);
    var message=$.trim(document.forms['mailForm'].message.value);
    var kaptcha=$.trim(document.forms['mailForm'].kaptcha.value);
    var validName=validateName(nameField);
    var validFrom=validateFromEmail(fromAddress);
    var validTo=validateToEmail(toAddress);
    var validkaptcha=validateKaptcha(kaptcha) ;        
    var validMessage=validateMessage(message) ;
    $("#mailerror_warn").hide();
    // validate Name
    if(!validName){           
        $("#name_warn").html(email_name_error_meesage);
    } else
        $("#name_warn").html(""); 

    //validate fromAddress
    if(!validFrom){
        $("#fromAddress_warn").html(email_fromAdd_error_meesage);           
    }else
        $("#fromAddress_warn").html("");

    //validate toAddress
    if(!validTo){
        $("#toAddress_warn").html(email_toAdd_error_meesage);         
    }else
        $("#toAddress_warn").html("");

   //validate kaptcha
    if(!validkaptcha){          
        $("#kaptcha_warn").html(email_kaptcha_error_meesage);
    }else
     $("#kaptcha_warn").html("");

    //validate Message
    if(!validMessage){          
        $("#message_warn").html(email_message_error_meesage);
    }else
     $("#message_warn").html("");
    
   if( validName && validFrom && validTo && validkaptcha){

       document.forms['mailForm'].submit();      
    
    return ;
   }

}

//------------- Java Script for closing Email form (DOM Window)-------------------//

function page_tools_closeDOMWindow()
{
    $('.closeDOM').closeDOMWindow({anchoredClassName:'',eventType:'click'});  
}

//------------- Java Script removing bottom margin css from s01v1 -------------------//

function s01v1_removeClass()
{  
    if (!isData_entered){
        $('#s01v1').removeClass("margin-bottom18");
        $('#s01v1').removeClass("padding-bottom39");
        $('#s01v1').removeClass("padding-bottom37-related");
        
      }
        
        
}

//------------- Java Script removing complete css from n04v1 -------------------//

function n04v1_removeCompleteCSS(){
    $('#n04v1').css("display","none");
}

//------------- Java Script for sizing Tabbed pane in News & Views -------------------//

function tabbedpane_sizing(){
    $(".TabbedPanelsTab").css('top','0px');
    $(".TabbedPanelsTabGroup").css('height','30px');
    $(".TabbedPanelsTabGroup").css('height','30px');
    $(".TabbedPanelsTabGroup").css('margin-top','16px');
    $(".TabbedPanelsContent").css('padding-top','14px');
}

//------------- Java Script removing border bottom from s06v1 -------------------//

function s06v1_removeClass(){
    $('#s06v1').removeClass("border-bottom padding-bottom26");                                     
}

//------------- Java Script adding border bottom to s06v1 -------------------//

function s06v1_addClass(){
    $('#s06v1').addClass("border-bottom padding-bottom26");
}

//------------- Java Script removing border bottom from s06v1x1 -------------------//

function s06v1x1_removeClass(){
    $('#s06v1x1').removeClass("s06v1-expert padding-left-right border-bottom padding-bottom26");
}

//------------- Java Script adding border bottom to s06v1x1 -------------------//

function s06v1x1_addClass(){
    $('#s06v1x1').addClass("s06v1-expert padding-left-right border-bottom padding-bottom26");
}

//------------- Java Script removing border top css from s01v3x1 -------------------//

function s06v3x1_removeCSS(){
    $('#s06v3x1').removeClass("s06v3-highlights border-top2");
}

//------------- Java Script for removing padding top for c10v1 from Press Release -------------------//

function pressRelease_remove(){
    if(!s07v1_isData)
    $('#c10v1').removeClass("padding-top17") ;  
}

//------------- Java Script for clear field from Projects Programs -------------------//

function clearField( field )
{
    if(field.value==field.defaultValue)
        field.value='';
}
//------------- Java Script removing above s03v1 MP on Project Programs-------------------//

function remomeBorderAbove_MP_PP(){
    $('#s02v1').removeClass("s02v1-projectmap border-bottom") ;  
}

//------------- Java Script removing above s03v1 MP on News & Views-------------------//
function remomeBorderAbove_MP_NV(){
    $('#s03v2').removeClass("border-bottom") ;  
}

//------------- Java Script for removing border bottom from Results -------------------//

function results_remove(){  
    if( !s06v3_result)
    $('#s01v1_res').removeClass("border-bottom") ;   
}


/*
function updatePagination(curr){
    var id = curr.attr('id');    
    $(".updatePage").text(id+ " / "+total_hero_items); 
}

function updatePagination1(curr1){
    var id1 = curr.attr('id');    
    $(".updatePage").text(id1+ " / "+total_multimedia_items); 
}
 
 

function carrousalStart() {
     //alert("Length==========>"+total_hero_items); 
     //alert("time_interval==========>"+corousal_time_interval); 
     if(total_hero_items > 1){
     
            $(".anyClass").jCarouselLite({
                
                btnNext: ".next", 
                btnPrev: ".prev" ,
                auto: corousal_time_interval,
                afterEnd: updatePagination,
                speed: 0,
                visible: 1
            });
    }
}


*/

/* this function will remove bottom line fro country office contcts */
function opinion_options_removeCSS(){ 

if(!s07v1_isData && !c05v1_mul_entered)
$('#s01v6').removeClass('border-bottom') ;


    if(!c05v1_mul_entered)
    $('#s07v1').removeClass('border-bottom') ;

}
/* this function will remove padding from the highlights component when no image is there*/
function s06v3_noImage()
{
    $(".highlight-title").css("min-height","18px");
    $(".highlight-text").css("padding-top","0px");
    $(".highlight-title").find("p").css("padding-left","0px");
}
function n04v1_blogs_research(){
    if(!s06v3_blogs)
        $('#n04v1').removeClass('border-bottom')
}

function print1(lang, path)
{
    window.open(path);
  
//window.setTimeout(replace1, 2000); 
}

function replace1()
{
    var string2="The World Bank Working for a World Free of Poverty";
$(".world-bank-logo").html(string2).css("text-indent","-9999px");
}

function c17v4CountryTabs(){
    if($('#context_label').length)
    { 
          $('.context-content').html($('#context').html()); 
    }
    else
        $('.context1').css('display','none');

    if($('#strategy_label').length)
    {
          $('.strategy-content').html($('#strategy').html());
    }
    else
        $('.strategy1').css('display','none');
    if($('#results_label').length)
    {
          $('.results-content').html($('#results').html());
    }
    else
        $('.results1').css('display','none');
  }

function c17v4HideAll()
{
 $('.printable-overview').css('display','none');
}


//------------- Java Script removing border bottom css in Speeches and Transcripts Page -------------------//

function speeches_options_removeCSS(){ 
if(!s07v1_isData && !c05v1_mul_entered)
$('#s01v6').removeClass('border-bottom') ;
    if(!c05v1_mul_entered)
    $('#s07v1').removeClass('border-bottom') ;
}

function c07v4Print(){
$('.C07v4-highlights-print').html($('#c07v4-prin').html());
}

//---Java Script removing border bottom CSS in expert page---//
var n02v10_entered=false;  
function c14v1_removeClass(){
    $('#c14v1').removeClass("border-bottom") ;
    }
function c14v1_addClass(){
    if(c14v1_entered && n02v10_entered)
        $('#c14v1').addClass("border-bottom");
}

function n02v10_removeClass(){  
    if(!c14v1_entered)
        $('#n02v10').removeClass("padding-top17") ;   
    if(!n02v10_entered)
        c14v1_removeClass();
    }

//---Java Script removing border bottom CSS in expert page of related component when blogs is not there---//
/*
var expert_blogs_value=false;
function n04v1_removeBorder(){
    if(!expert_blogs_value)
        c10v1_removeCSS();
}
function c10v1_removeCSS(){ 
    c10v1_isData=false;
    $('#c10v1').removeClass("border-bottom") ;
    }
*/

var s06v8Path="1";
var tName="1";
function getStatistics()
{
    var d=new Date();
    var location="#s06v8_stat";
    var loadUrl=s06v8Path+"?tName="+tName+"&v="+d.getTime();
    $(location).html("");
    $.ajax({
            type: "GET",
            url:loadUrl,
            dataType: "html", 
            success: function(responseText,textStatus,jqXHR){
                if(jqXHR.status==200)
                { 
                    try{
                  
                   var parText=$('.s06v8-million-accent-header',responseText).html();
                    var parText2=$('.s06v8-million-accent-text',responseText).html();
                
                
                    if((parText!=null && parText.length>0)||(parText2!=null && parText2.length>0) ||(responseText!=null && responseText.indexOf("hideInPreview")>-1))
                     $(location).html(responseText);                                       
                      else
                     $(location).css("display","none");
                     
                    }catch(err){$(location).css("display","none");}
                }
                else
                  $(location).css("display","none");
            },
            error: function(data) {$(location).css("display","none");
            }
    }); 
    return true;
}
/*
$(document).ready(function() {
 var divname = $("div.right_par div.s01v1_related  div.s01v1-related ul li:last");
                    var lastdiv = divname.attr('class');
                    //alert("lastdiv--->:"+lastdiv);
                    if(typeof lastdiv == "undefined")
                    {
                     $("div.right_par div.s01v1_related").remove();
                    }
                    var divname1 = $("div.left_par_fs div.s01v1_related  div.s01v1-related ul li:last");
                    var lastdiv1 = divname.attr('class');
                   // alert("lastdiv--->:"+lastdiv1);
                    if(typeof lastdiv1 == "undefined")
                    {
                    //alert("lastdiv--->:"+lastdiv1);
                     $("div.left_par_fs div.s01v1_related").remove();
                    }

 });
*/
//----Script to remove the div while throwing Exception in n02v8 component in Disabled mode ---//
function removeDiv(){
// $(document).ready(function() {
      $("#n02v8").remove();        
              
// });

}


//------------- Java Script To remove the last component horizontal separator from the column at optional level -------------------//

 $(document).ready(function() {
    var lastdiv = $("div.grid_5  div.highlight_par div:last").attr('class');
   while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.highlight_par div:last").remove();
        lastdiv = $("div.grid_5  div.highlight_par div:last").attr('class');
    }
    
   lastdiv = $("div.grid_5  div.right_par div:last").attr('class');
   
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.right_par div:last").remove();
        lastdiv = $("div.grid_5  div.right_par div:last").attr('class');
    }
    lastdiv = $("div.grid_5  div.left_par div:last").attr('class');
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.left_par div:last").remove();
        lastdiv = $("div.grid_5  div.left_par div:last").attr('class');
    }
    lastdiv = $("div.grid_5  div.leftPar div:last").attr('class');
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.leftPar div:last").remove();
        lastdiv = $("div.grid_5  div.leftPar div:last").attr('class');
    }
    lastdiv = $("div.grid_5  div.rightPar div:last").attr('class');
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.rightPar div:last").remove();
        lastdiv = $("div.grid_5  div.rightPar div:last").attr('class');
    }
    lastdiv = $("div.grid_5  div.left_par_fs div:last").attr('class');
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.left_par_fs div:last").remove();
        lastdiv = $("div.grid_5  div.left_par_fs div:last").attr('class');
    }
    lastdiv = $("div.grid_5  div.body_par div:last").attr('class');
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.body_par div:last").remove();
        lastdiv = $("div.grid_5  div.body_par div:last").attr('class');
    }
    lastdiv = $("div.grid_5  div.highlights div:last").attr('class');
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.highlights div:last").remove();
        lastdiv = $("div.grid_5  div.highlights div:last").attr('class');
    }
    lastdiv = $("div.grid_5  div.right_par_ed div:last").attr('class'); 
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.right_par_ed div:last").remove();
        lastdiv = $("div.grid_5  div.right_par_ed div:last").attr('class');
    }
    lastdiv = $("div.grid_10  div.left_body_par div:last").attr('class');// alert("lastdiv-->"+lastdiv);
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_10  div.left_body_par div:last").remove();
        lastdiv = $("div.grid_10  div.left_body_par div:last").attr('class');
    }
    lastdiv = $("div.grid_4  div.left_par div:last").attr('class');// alert("lastdiv-->"+lastdiv);
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_4  div.left_par div:last").remove();
        lastdiv = $("div.grid_4  div.left_par div:last").attr('class');
    }
    lastdiv = $("div.grid_5  div.body_par1 div:last").attr('class');
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.body_par1 div:last").remove();
        lastdiv = $("div.grid_5  div.body_par1 div:last").attr('class');
    }
    lastdiv = $("div.cont-rightpar  div.bottom_par2 div:last").attr('class');
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.cont-rightpar  div.bottom_par2 div:last").remove();
        lastdiv = $("div.cont-rightpar  div.bottom_par2 div:last").attr('class');
    }
    lastdiv = $("div.cont-leftpar  div.bottom_par1 div:last").attr('class');
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.cont-leftpar  div.bottom_par1 div:last").remove();
        lastdiv = $("div.cont-leftpar  div.bottom_par1 div:last").attr('class');
    }
    lastdiv = $("div.grid_5  div.middle_right_par div:last").attr('class');
    while( typeof lastdiv!="undefined" && lastdiv.indexOf('section')>-1 && lastdiv.indexOf('new section')<0 ){
        $("div.grid_5 div.middle_right_par div:last").remove();
        lastdiv = $("div.grid_5  div.middle_right_par div:last").attr('class');
    }   
     
    var divname = $("div.grid_5  div.left_par div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }

    divname = $("div.grid_5  div.right_par div:last");
    lastdiv = divname.attr('class');
    if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1 && lastdiv.indexOf('new section')<0){
        divname.addClass("noneborder");
    }
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){ 
            // if(typeof lastdiv!="undefined" && lastdiv.indexOf('bank-group')>-1){
            // break;
            // }else{
                 divname.parent().addClass("noneborder");
           //  }
         }
         divname = divname.parent();
    }

    divname = $("div.grid_5  div.highlight_par div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }

    divname = $("div.grid_5  div.leftPar div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }

    divname = $("div.grid_5  div.rightPar div:last");
    lastdiv = divname.attr('class');
    if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1 && lastdiv.indexOf('new section')<0){
        divname.addClass("noneborder");
    }
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }

    var divname = $("div.grid_5  div.left_par_fs div:last");
    lastdiv = divname.attr('class');
   // alert("lastdiv+++"+lastdiv);
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }

    divname = $("div.grid_5  div.body_par div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }
    
    divname = $("div.grid_5  div.highlights div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }
    
    divname = $("div.grid_5  div.middle_right_par div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){ //alert("lastdiv-->"+lastdiv);
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }

    divname = $("div.grid_5  div.right_par_ed div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }
    /*
    divname = $("div.grid_10  div.left_body_par div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1 && lastdiv.indexOf('n02v13-aroundtheregion')<0){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }
    */
    divname = $("div.grid_10  div.left_body_par > div").last();
    //var divlen = divname.length;
    //alert("divlen -->"+divlen);
    //divlen = divlen-1;
    lastdiv = divname.children().attr('class');
    //alert("lastdiv<-->"+lastdiv);
    if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1 && lastdiv.indexOf('n02v13-aroundtheregion')<0){
             divname.children().addClass("noneborder");
    }
    
    divname = $("div.grid_4  div.left_par div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }
    /*
    divname = $("div.grid_5  div.body_par1 div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }
    */
    
    divname = $("div.grid_5  div.body_par1 > div").last();
    lastdiv = divname.children().attr('class');
    if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.children().addClass("noneborder");
    }
    
    divname = $("div.cont-rightpar  div.bottom_par2 div:last");
    lastdiv = divname.attr('class');
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }
     divname = $("div.cont-leftpar  div.bottom_par1 div:last");
    lastdiv = divname.attr('class');
   
    while(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')<0 && lastdiv.indexOf('new section')<0){
         lastdiv = divname.parent().attr('class');

         if(typeof lastdiv!="undefined" && lastdiv.indexOf('border-bottom')>-1){
             divname.parent().addClass("noneborder");
         }
         divname = divname.parent();
    }
   
   // $("div.grid_5 div div:last-child div").addClass("noneborder");
   // div.cont-rightpar  div.bottom_par2 div:last
   
 });
 

//------------- Java Script for View less & View more -------------------//

/*
function toggleMore(element,elemMore){
    $(element).toggle();
    if($(element).is(":visible")){
        $(elemMore).html('View Less -');
        
        
    }else{
        $(elemMore).html('View More +');
    } 
}
*/

/* this function will load to run the (c05v11_multimedia_cluster)*/
/*
function MultiClusterStart() {
     //alert("Length==========>"+total_multimedia_items);  
     //alert("time_interval==========>"+multimedia_time_interval); 
     if(total_multimedia_items > 1){
            $(".c05v11-multimedia-cluster").jCarouselLite({
              
                btnNext: ".next1", 
                btnPrev: ".prev1" ,
                auto: multimedia_time_interval,                
                speed: 0,
                visible: 3
            });
    }
}/*
/*
$(document).ready(function() {alert("ext js");
 
  var lastdiv = $("div.container_24 div.grid_7 div.top_par2 div:last").attr('class');
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('c07v9_highlights')>-1){
       // $("div.container_24 div.grid_7 div.top_par2 div:last").remove();
        
    }
 
 });
 */

 /* this function is for N06v2 Feature Cluster*/
 function FeatureClusterDot(i,slidesNo){
    for(var j=1;j<=slidesNo;j++){
        document.getElementById("dot"+j).className="";
        document.getElementById("column"+j).className="";
        document.getElementById("column"+j).style.display= "none";
    }
    document.getElementById("dot"+i).className="activeSlide";
    document.getElementById("column"+i).style.display = "block";
    document.getElementById("column"+i).className="active_slide";        
}
function FeatureClusterNext(slidesNo){
    var b=getElementsByClassName(document.body,"active_slide"); 
    var j=b.charAt(b.length-1);
    document.getElementById("column"+j).className="";
    if(j==slidesNo){
        j=0;
    }
    j++;
    for(var i=1;i<=slidesNo;i++){
        document.getElementById("column"+i).style.display= "none";
        document.getElementById("column"+i).className="";   
        document.getElementById("dot"+i).className="";   
    }
    document.getElementById("column"+j).style.display= "block";
    document.getElementById("column"+j).className="active_slide";
    document.getElementById("dot"+j).className="activeSlide";
}
function FeatureClusterPrev(slidesNo){
    var a=getElementsByClassName(document.body,"active_slide");
    var j=a.charAt(a.length-1);
    document.getElementById("column"+j).className="";
    if(j==1){
        j=slidesNo+1;
    }
    j--;
    for(var i=1;i<=slidesNo;i++){
        document.getElementById("column"+i).style.display= "none";
        document.getElementById("column"+i).className="";  
        document.getElementById("dot"+i).className="";  
    }
    document.getElementById("column"+j).style.display= "block";
    document.getElementById("column"+j).className="active_slide";
    document.getElementById("dot"+j).className="activeSlide";
}

function getElementsByClassName(node,classname) {
   var a;
    var els = node.getElementsByTagName("div");
    for(var j=0;j<=els.length;j++){              
        if(classname == els[j].className){
            a=els[j].getAttribute("id");
           break;
         }         
     }
     return a;
}

// Publish -News and Views Landing Page

function publishNewsLanding(){

 $(document).ready(function() {
    var lastdiv = $("div.grid_12 div.newslanding-left-right div.cont-leftpar div:last").attr('class');
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('bottom_par1')>-1){
        $("div.grid_12 div.newslanding-left-right div.cont-leftpar").removeClass("border-top-red");
        $("div.grid_12 div.newslanding-left-right div.cont-rightpar").css("float", "right");
    }
    
    lastdiv = $("div.grid_12 div.newslanding-left-right div.cont-rightpar div:last").attr('class');
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('bottom_par2')>-1){
        $("div.grid_12 div.newslanding-left-right div.cont-rightpar").removeClass("border-top-red");
    }
    
//starts here : changes for featured and highlight component stretch
    
    lastdiv = $("div.container_24 div.grid_7 div.top_par2 div:last").attr('class');
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('c07v9_highlights')>-1){
        $("div.container_24 div.grid_7 div.top_par2 div:last").remove();
        $("div.container_24 div.grid_17").attr('class', 'grid_24');
    }
    lastdiv = $("div.container_24 div.grid_7 div:last").attr('class');
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('top_par2')>-1){
         $("div.container_24 div.grid_7").remove();
        $("div.container_24 div.grid_17").attr('class', 'grid_24');
    }
    
    lastdiv = $("div.grid_17 div.top_par1 div:last").attr('class');
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('c15v1_research_landing_hero')>-1){
        $("div.container_24 div.grid_7").attr('class', 'grid_24');
        $("div.container_24 div.grid_24 div.top_par2 div.c07v9_highlights div.c07v9-highlight").attr('class','c07v9-highlight-fw border-left border-right border-bottom1 border-top-red clearfix');
    }
    var lastdiv1 = $("div.container_24 div.grid_17 div:last").attr('class'); 
    if(typeof lastdiv1!="undefined" && lastdiv1.indexOf('top_par1')>-1){
        $("div.container_24 div.grid_24 div.top_par2 div.c07v9_highlights div.c07v9-highlight").attr('class','c07v9-highlight-fw border-left border-right border-bottom1 border-top-red clearfix');
    }
    
    
   
// ends here :changes for featured and highlight component stretch
    
//starts here : changes for n08v1linkedlist and stayconnected component stretch
   
    lastdiv = $("div.container_24 div.grid_12 div.n08v1-View-News-ByType div.middle_par1 div:last").attr('class');
    
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('n08v1_link_list')>-1){
        $("div[id^='stayconnected']").attr('class', 'grid_24');
        $("div.s03v5-connected-link ul li.icon").addClass("icon-fw");
    }
    
    lastdiv1 = $("div.container_24 div.grid_12 div.n08v1-View-News-ByType div:last").attr('class'); 
    if(typeof lastdiv1!="undefined" && lastdiv1.indexOf('middle_par1')>-1){
   
    $("div.s03v5-connected-link ul li.icon").addClass("icon-fw");
    
    }
    
    lastdiv = $("div.container_24 div.grid_12 div.s03v5-stayconnected div.middle_par3 div:last").attr('class');
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('s03v5_stay_connected_ribbon')>-1){
        $("div[id^='n08v1linklist']").attr('class', 'grid_24');
        $("div[id^='stayconnected']").remove();
        $("div.n08v1-News-By-Type ul.col li.col").addClass("col-fw");
           
         }
         lastdiv1 = $("div.container_24 div.grid_12 div.s03v5-stayconnected div:last").attr('class'); 
    if(typeof lastdiv1!="undefined" && lastdiv1.indexOf('middle_par3')>-1){
    
     $("div.n08v1-News-By-Type ul.col li.col").addClass("col-fw");
    
    
    }
    
    divname = $("div.grid_12 div.n08v1-View-News-ByType div.middle_par1 div.n08v1_link_list div.n08v1-News-By-Type").attr('class');
    if(typeof divname!="undefined" && divname.indexOf('n08v1-News-By-Type')>-1){
     var divname1 = $("div.grid_12 div.s03v5-stayconnected div.middle_par3 div.s03v5_stay_connected_ribbon div.s03v5-stay-connected").attr('class');
      if(typeof divname1!="undefined" && divname1.indexOf('s03v5-stay-connected')>-1){ 
        var pos1 = $("div[id^='tabcomp']").position();
        var pos2 = $("div[id^='n08v1linklist']").position()
        var pos = pos1.top-pos2.top-45; 
         $("div.grid_12 div.s03v5-stayconnected div.middle_par3 div.s03v5_stay_connected_ribbon div.s03v5-stay-connected").css("height",pos);
      }
    }
    
    
// ends here :changes for n08v1linkedlist and stayconnected component stretch
    
    lastdiv = $("div.grid_12 div.c05v11-multicluster div.middle_par4 div:last").attr('class');
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('c05v11_multimedia_cluster')>-1){
        $("div.grid_12 div.c05v11-multicluster").removeClass("padding-bottom18");
    }
    lastdiv = $("div.grid_12 div.c05v11-multicluster div:last").attr('class');
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('middle_par4')>-1){
        $("div.grid_12 div.c05v11-multicluster").removeClass("padding-bottom18");
    }
    lastdiv = $("div.top_par1 div.c15v1_research_landing_hero div.c15v1-news-landing").attr('class');
    if( typeof lastdiv!="undefined" && lastdiv.indexOf('c15v1-news-landing')>-1){
        newcarrousalStart();
    }
      // $("div.grid_7 div.top_par2 div.c07v9_highlights div.c07v9-highlight-header").css("padding", "5px 0px 8px 0px");
    
});

}



// added for static content ul li issue

function addId(){
var classname = "c14v1_static_content";
    var a;
    var i=1;
    var ele = document.body.getElementsByTagName("div");
    for(var j=0;j<=ele.length;j++){              
        if(ele[j].className.indexOf(classname)>-1){
            a="StaticContent"+i;
            ele[j].setAttribute("id",a);
            i=i+1;
        }  
    }
}

function removeUl(){
$(document).ready(function() {
    
    $("div[id^='StaticContent1'] div.paragraph ul").addClass("removeUL");
    $("div[id^='StaticContent1'] div.paragraph ul li.clearright").insertBefore("div[id^='StaticContent1'] div.paragraph ul.removeUL"); 
    $("div[id^='StaticContent1'] div.paragraph ul.removeUL").remove();
 
    $("div[id^='StaticContent1'] div.paragraph ol").addClass("removeOL");
    $("div[id^='StaticContent1'] div.paragraph ol li.clearright").insertBefore("div[id^='StaticContent1'] div.paragraph ol.removeOL"); 
    $("div[id^='StaticContent1'] div.paragraph ol.removeOL").remove();
  
     });
}

// To remove the parsys from Topic Overview Page while Clicking On Partners Tab
function hideParsys(){
var idd;
      $("#partners_label").click(function () {
           idd = removeParsys();
      });
      $("#context_label").click(function () {
          if(idd != ""){
              document.getElementById(idd).style.visibility="visible";
          }
      });
      $("#strategy_label").click(function () {
         if(idd != ""){
              document.getElementById(idd).style.visibility="visible";
          }
      });
      $("#results_label").click(function () {
          if(idd != ""){
              document.getElementById(idd).style.visibility="visible";
          }
      });

}
function removeParsys(){ 

    var className = "cq-editrollover-insert-container";
    var eleId,leftVal;
    var element = document.body.getElementsByTagName("div");
    for(var j=0;j<=element.length;j++){              
        if(element[j].className.indexOf(className)>-1){
            eleId= element[j].getAttribute("id");
            leftVal = document.getElementById(eleId);
            if((leftVal.offsetLeft>760 && leftVal.offsetLeft<780) || (leftVal.offsetLeft>660 && leftVal.offsetLeft<680)){
                document.getElementById(eleId).style.visibility="hidden";
                return(eleId);
            }
        }  
    }
}

// end of Changes 

// Pull Quote Width Issue
function pullqouteSetId(){
var classname = "c11v1-pullquote";
    var a;
    var i=1;
    var ele = document.body.getElementsByTagName("div");
    for(var j=0;j<=ele.length;j++){              
        if(classname == ele[j].className){
            a="pullquote"+i;
            ele[j].setAttribute("id",a);
            i=i+1;
        }  
    }
}

function pullquoteWidth(){

$(document).ready(function(){ 

    var pos1 = $("div[id^='pullquote1']").position();
    if(pos1.left==0){
        $("div[id^='pullquote1']").width(700);
    }else{
        $("div[id^='pullquote2']").width(489);
    }
    var pos2 = $("div[id^='pullquote2']").position();
    
  //  var pos3 = $("div[id^='pullquote3']").position()
  //  var pos4 = $("div[id^='pullquote4']").position()
    if(pos2.left==0){
        $("div[id^='pullquote2']").width(700);
    }else{
        $("div[id^='pullquote2']").width(489);
    }
   /* if(pos3.left==0){
        $("div[id^='pullquote3']").width(700);
    }else{
        $("div[id^='pullquote3']").width(500);
    }if(pos4.left==0){
        $("div[id^='pullquote4']").width(700);
    }else{
        $("div[id^='pullquote4']").width(500);
    }*/
});
}

function pullquoteWidthArabic(){

$(document).ready(function(){ 
var leftwidth1 = $("#pullquote1").offset().left; 
var leftwidth2 = $("#pullquote2").offset().left; 
//alert("leftwidth :::" + leftwidth1 +":::window widht ::" +$(window).width());
if(leftwidth1>600){
        $("div[id^='pullquote1']").width(700);
    }
 if(leftwidth2>600){
        $("div[id^='pullquote2']").width(700);
    }
 
});
}

// end of changes for pull quote width issue 

//fauxborder padding-bottom removal for News and Vies page
function removePaddingBottom(){
$(document).ready(function(){ 
$('#main').css("padding-bottom","0");
  
});  
}

/* F02v4dropdown component - loading people all page*/
function loadPeoples(option_id){
    var e = document.getElementById(option_id);
    var peoples_url = e.options[e.selectedIndex].value;
//    alert (peoples_url);
    window.open(peoples_url);
}

var highlights__entered = false; 
function people_colcnt_remove ()
{
    if (!highlights__entered)
        $(".cq-colctrl-lt7").css ('border-bottom','none');
}
  
function c03v1_addCSS(){
    $('.cq-colctrl-lt0').css("width","595px");
}

function c03v1_addCSScol(){
    $('.cq-colctrl-lt1').css("width","600px");
}

// Added for C05v1Multimedia cluster Component
/*
function multimediaCluster(){
  
 $(document).ready(function() {
     //alert("test");
     var multidiv = $("div.c05v1-superheader");
     for(var i=0;i<multidiv.length;i++){ 
         if($(multidiv[i]).width() > 82) {
             $(multidiv[i]).addClass("padding-bottom7");
         }
     }
     var vidCont = $("div.vid-container");
     //alert(vidCont.length);
     for(var i=0;i<vidCont.length;i++){ 
         $(vidCont[i]).attr('id','container'+(i+1));
         var vid = $(vidCont[i]).find("div.video");
         //alert(vid.length);
         for(var j=1;j<vid.length;j++){ 
             $(vid[j]).hide();
         }
         for(var j=0;j<vid.length;j++){ 
             $(vid[j]).attr('class','vid'+j);
         }
     }
     $("span.pagination-list").each(function(j){
         j=j+1;
         $(this).attr('id','pagination-container'+j);
     });
 });
    
    $("a.dot").click(function(){
        var dotid = $(this).attr('id');
        var index = $(this).parent().find("a.dot").index( this );
        $(this).parent().find("a.activeSlide").removeClass("activeSlide");
        $(this).addClass("activeSlide");
        var dots = $(this).parent().children();
        //alert(dots.length);
        var pageId = $(this).parent().attr('id');
        var vidCont = $("div.vid-container");
        for(var i=0;i<vidCont.length;i++){ 
            var vidcontId = $(vidCont[i]).attr('id');
            if(pageId.indexOf(vidcontId)>-1){
                var video = $(vidCont[i]).children();
                for(var j=0;j<video.length;j++){ 
                    var currvid = $(video[j]).attr('class');
                    if(dotid==currvid){
                        $(video[j]).show();
                    }else{
                        $(video[j]).hide();
                    }
                }
            }
        }
    });
    
    $("a.rightArrow").click(function(){
    //alert("DFGDFG");
    
    $(this).parent().find("span.pagination-list").find("a.activeSlide").removeClass("activeSlide").next().addClass("activeSlide");
    var activecls = $(this).parent().find("span.pagination-list").find("a.activeSlide").attr('class');
    if(typeof activecls=="undefined"){
    $(this).parent().find("span.pagination-list").find("a:first").addClass("activeSlide");
    }
    var dotid = $(this).parent().find("span.pagination-list").find("a.activeSlide").attr('id');
    var pageId = $(this).parent().find("span.pagination-list").attr('id');
    var vidCont = $("div.vid-container");
        for(var i=0;i<vidCont.length;i++){ 
            var vidcontId = $(vidCont[i]).attr('id');
            if(pageId.indexOf(vidcontId)>-1){
                var video = $(vidCont[i]).children();
                for(var j=0;j<video.length;j++){ 
                    var currvid = $(video[j]).attr('class');
                    if(dotid==currvid){
                        $(video[j]).show();
                    }else{
                        $(video[j]).hide();
                    }
                }
            }
        }
    
    });
    
    $("a.leftArrow").click(function(){
    //alert("DFGDFG");
    
    $(this).parent().find("span.pagination-list").find("a.activeSlide").removeClass("activeSlide").prev().addClass("activeSlide");
    var activecls = $(this).parent().find("span.pagination-list").find("a.activeSlide").attr('class');
    if(typeof activecls=="undefined"){
    $(this).parent().find("span.pagination-list").find("a:last").addClass("activeSlide");
    }
    var dotid = $(this).parent().find("span.pagination-list").find("a.activeSlide").attr('id');
    var pageId = $(this).parent().find("span.pagination-list").attr('id');
    var vidCont = $("div.vid-container");
        for(var i=0;i<vidCont.length;i++){ 
            var vidcontId = $(vidCont[i]).attr('id');
            if(pageId.indexOf(vidcontId)>-1){
                var video = $(vidCont[i]).children();
                for(var j=0;j<video.length;j++){ 
                    var currvid = $(video[j]).attr('class');
                    if(dotid==currvid){
                        $(video[j]).show();
                    }else{
                        $(video[j]).hide();
                    }
                }
            }
        }
    
    });

}
*/
/////////////////// Added for carousel enhancement

function newcarrousalStart(){
var interval = null;

    $(document).ready(function(){

        var licount = $("li.img");
        var count=licount.length;
         //var corousal_time_interval = <%= time_interval%>;
        for(var i=2;i<=count;i++){
            $("#image_"+i).hide();
            $("#image_"+i).removeClass("activeImage");
        }
   /*   var s=0;
        for(var k=1;k<=100000;k++){
            s=s+4000;
            setTimeout(function() {
            $('a.next').trigger('click');
            }, s);
        }*/
        $("ul.links").each(function(){
        $(this).children().last().removeClass("spacebar").addClass("noneborder");
        });
        interval = setInterval(carousal, corousal_time_interval);
        function carousal() {
         $("a.next").trigger('click');
        }
    });

   
    var licount = $("li.img");
    //alert(licount.length);
    var count=licount.length;
    $(".next").click(function () {
    //var corousal_time_interval = <%= time_interval%>; 
        clearInterval(interval);
        interval = setInterval(carousal, corousal_time_interval);
        function carousal() {
         $("a.next").trigger('click');
        }
    var id=$("li.activeImage").attr('id');
    //alert(id);
    
    var lastli = $("div.anyClass ul li.end").attr('class');
    //alert(lastli);
    if(typeof lastli != "undefined" && lastli.indexOf('activeImage')>-1){
        $("div.anyClass ul li:first").addClass("activeImage");
    }else{
        $("li.activeImage").next().addClass("activeImage");
    }   
    $("#"+id).removeClass("activeImage");
    
    var currentId= $("li.activeImage").attr('id');
    for(var j=1;j<=count;j++){
        if(typeof currentId != "undefined" && currentId.indexOf(j)>1){
            $("#image_"+j).show();
            $(".updatePage").text(j+" / "+count);
        }else{
            $("#image_"+j).hide();
        }
    }
    });
    
    $(".prev").click(function (){
    
        //var corousal_time_interval = <%= time_interval%>; 
        clearInterval(interval);
       interval = setInterval(carousal, corousal_time_interval);
        function carousal() {
         $("a.next").trigger('click');
        }
        var id=$("li.activeImage").attr('id');
        
        $("li.activeImage").prev().addClass("activeImage");
        $("#"+id).removeClass("activeImage");
        var activeimg = $("li.activeImage").attr('class');
        
        if(typeof activeimg=="undefined"){
            $("div.anyClass ul li.end").addClass("activeImage");
        }
        /*if(($("div.anyClass ul li:first").attr('class'))=="activeImage"){
        alert("prev");
            $("div.anyClass ul li.end").addClass("activeImage");
        }
        else{
            $("li.activeImage").prev().addClass("activeImage");
        }*/
        
        var currentId= $("li.activeImage").attr('id');
        for(var j=1;j<=count;j++){

            if(typeof currentId != "undefined" && currentId.indexOf(j)>1){
                $("#image_"+j).show();
                $(".updatePage").text(j+" / "+count);
            }else{
                $("#image_"+j).hide();
            }
        }
    });
}

//To Remove border bottom for the components placed above "Top Red Border" Components
$(document).ready(function(){
  $("div.border-top-red").each(function(){
    var prevDiv = $(this).parent().prev().children().attr('class');
    //alert(prevDiv);
    if(typeof prevDiv != "undefined" && prevDiv.indexOf("border-bottom")>-1){
        $(this).parent().prev().children().removeClass("border-bottom");  
    }
  });
});

// Fix for WCM 2858 Issue 1 

$(document).ready(function(){  
  $("div.f02v3-searchcontent").each(function(i){
      $(this).parent().addClass("searchComp"+i); 
      var currParent = $(this).parent().attr('class');
      var gridClass = $(this).parent().parent().parent().attr('class');
      if(typeof gridClass != "undefined" && gridClass.indexOf("border-top-red")>-1){
          var parentClass = $(this).parent().parent().children().first().attr('class');
          if(currParent==parentClass){
              if(typeof parentClass != "undefined" && parentClass.indexOf("search_in_site")>-1){
                 $(this).removeClass("border-top-red");  
              }
          }
      }
      if(typeof gridClass != "undefined" && (gridClass.indexOf("grid_5")>-1 || gridClass.indexOf("grid_4")>-1)){
          //$(this).removeClass("border-left");
          //$(this).removeClass("border-right");
      }
  });
});

$(document).ready(function(){
var nextComp=$("div.c15v3_featured,div.c15v1_research_landing_hero,div.c15v5_expertdetail_hero").next();
if(typeof nextComp.attr('class') != "undefined" && nextComp.attr('class').indexOf("search_in_site")>-1){
nextComp.children().addClass("margin-top20");
}
});
$(document).ready(function(){
var nextComp1=$("div.c15v3_featured,div.c15v1_research_landing_hero,div.c15v5_expertdetail_hero,div.d01v1_portfolio_projects,div.projects_tab").prev();
if(typeof nextComp1.attr('class') != "undefined" && nextComp1.attr('class').indexOf("search_in_site")>-1){
nextComp1.children().addClass("margin-bottom20");
}
});
// Fix for Jira WCM-2876
$(document).ready(function(){
  $("div.n02v10-Itemlist").each(function(i){
      $(this).parent().addClass("search"+i); 
      var currParent = $(this).parent().attr('class');
      var gridLastDiv = $(this).parent().parent().children().last().attr('class');
            if(currParent==gridLastDiv){
                if(typeof gridLastDiv!= "undefined" && gridLastDiv.indexOf("inline_search_API")>-1){
                 $(this).removeClass("border-bottom");  
             }}
  });
});