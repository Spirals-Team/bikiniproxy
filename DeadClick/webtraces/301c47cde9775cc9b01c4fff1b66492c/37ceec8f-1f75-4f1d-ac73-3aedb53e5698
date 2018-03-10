/*
FontSizer v2.2
Javascript to dynamically change font sizes on a web page.
Coded by Phil Nash of www.unintentionallyblank.co.uk
Cookies script courtesy of http://www.quirksmode.org/js/cookies.html
Measuring the current font size courtesy of http://www.alistapart.com/articles/fontresizing

** Please don't remove this notice **

See http://www.unintentionallyblank.co.uk/2007/11/09/fontsizer-reloaded-changing-font-sizes-with-javascript/ for full details
  
*/

addDOMLoadEvent=(function(){var e=[],t,s,n,i,o,d=document,w=window,r='readyState',c='onreadystatechange',x=function(){n=1;clearInterval(t);while(i=e.shift())i();if(s)s[c]=''};return function(f){if(n)return f();if(!e[0]){d.addEventListener&&d.addEventListener("DOMContentLoaded",x,false);/*@cc_on@*//*@if(@_win32)d.write("<script id=__ie_onload defer src=//0><\/scr"+"ipt>");s=d.getElementById("__ie_onload");s[c]=function(){s[r]=="complete"&&x()};/*@end@*/if(/WebKit/i.test(navigator.userAgent))t=setInterval(function(){/loaded|complete/.test(d[r])&&x()},10);o=w.onload;w.onload=function(){x();o&&o()}}e.push(f)}})();


var s5_font_adjuster_cookie_name = window.location;

s5_font_adjuster_cookie_name = s5_font_adjuster_cookie_name.toString(); 

if (s5_font_adjuster_cookie_name.indexOf("index") > 0) {

	var s5_font_adjuster_cookie_name_array = s5_font_adjuster_cookie_name.split("index");
	s5_font_adjuster_cookie_name = s5_font_adjuster_cookie_name_array[0];

}

var fS={
  iFS:null,
  cFS:null,
  init: function (fC) {
    if (!document.getElementById || !document.createTextNode) { return; }
    if (UBCookie.read(s5_font_adjuster_cookie_name)) {
      var sizes = UBCookie.read(s5_font_adjuster_cookie_name).split(",");
      fS.iFS = sizes[0]*1; 
      fS.cFS = sizes[1]*1;
      fS.setBodySize();
    } else {
      var el = document.createElement('span');
      el.innerHTML = "&nbsp;";
      el.style.position = "absolute";
      el.style.left = "-9999px";
      el.style.lineHeight = "1em";
      document.body.insertBefore(el,document.body.firstChild);
      fS.iFS = el.offsetHeight/16;
      fS.cFS = fS.iFS;
      UBCookie.create(s5_font_adjuster_cookie_name,fS.iFS+","+fS.cFS,30);
    }
	fS.addJSLink(fC,fS.decFS,"A","decreaseSize");
	fS.addJSLink(fC,fS.rFS,"A","resetSize");
    fS.addJSLink(fC,fS.incFS,"A","increaseSize");
  },
  incFS: function () {
    fS.cFS = fS.cFS*1.1;
    fS.setBodySize();
    return false;
  },
  decFS: function () {
    fS.cFS = fS.cFS*0.9;
    fS.setBodySize();
    return false;
  },
  rFS: function () {
    fS.cFS = fS.iFS;
    fS.setBodySize();
    return false;
  },
  setBodySize: function() {
		document.body.style.fontSize = fS.cFS + 'em';
    UBCookie.create(s5_font_adjuster_cookie_name,fS.iFS+","+fS.cFS,30);
  },
  addJSLink: function (elementId, onClickFunction, linkText, className) {
	var element = document.getElementById(elementId);
	var link = document.createElement("a");
	link.className = className;
	var linkText = document.createTextNode(linkText);
	link.appendChild(linkText);
	link.onclick = onClickFunction;
	link.href="javascript:;"+elementId;
	element.appendChild(link);
  }
}

var UBCookie={
  create: function (name,value,days) {
	if (days) {
	  var date = new Date();
	  date.setTime(date.getTime()+(days*24*60*60*1000));
	  var expires = "; expires="+date.toGMTString();
	} else { var expires = ""; }
	document.cookie = name+"="+value+expires+"; path=/";
  },
  read: function (name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
	  var c = ca[i];
	  while (c.charAt(0)==' ') c = c.substring(1,c.length);
	  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
  },
  erase: function(name) { createCookie(name,"",-1); }
}

addDOMLoadEvent(function() {fS.init("fontControls")});