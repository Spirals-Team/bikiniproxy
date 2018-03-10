// newsi 1.29
var newsi = {
name:"newsi",
dom:false,
isIpAdvertiseCombined:false,
isGB:undefined
};
newsi.ENV=function(){
newsi.global={};
newsi.global.platform="other";
if(navigator.appVersion.indexOf("Windows") != -1){newsi.global.platform="Windows";}
}
newsi.getDomain=function(){return document.domain;}
newsi.getURL=function(){return window.location.href;}
newsi.getServeLoc=function(){
newsi.serverlocation=_SERVERLOC;
return newsi.serverlocation;
}
newsi.setIsIpAdvertiseCombined = function(isAdvertise){
this.isIpAdvertiseCombined = isAdvertise;
}
newsi.getIsIpAdvertiseCombined = function(){
return this.isIpAdvertiseCombined;
}
newsi.setIsGB = function(isGB){
this.isGB = isGB;
}
newsi.getIsGB = function(){
return this.isGB;
}
newsi.getPlatform=function(){return newsi.global.platform;}
newsi.env=new newsi.ENV();
newsi.Event=function(){this.o=[];}
newsi.Event.prototype=newsi;
newsi.Event.prototype.addListener=function(evt,id,obj,method,returns){
var i=5;
var x=0;
while(i<arguments.length){this.o[x]=arguments[i];i++;x++;}
var o=this.o;
var m=method;
if(this.dom)document.getElementById(id)[evt] = function(e){
if(!e){
e=window.event;
}
o[o.length]=e;
obj[m](o);
var arr=[];
for(var i=0;i<(o.length-1);i++){
arr[i]=o[i];
}
o=arr;
return returns;
}
}
newsi.Client=function(){
if(document.getElementById){newsi.dom={};newsi.dom.w3c=true;}else {newsi.dom.w3c=false;}
if(!window.Error){window.Error="error";}
if(window.Error != "error"){newsi.true1_5=true;}else{newsi.true1_5=false;}
if(window.ActiveXObject){newsi.hasAX = true;}
this.maxVersion = 9;
this.minVersion = 1;
var fullVersion = {major:null, minor:null, build:null};
var actualVersion;
if(newsi.hasAX && newsi.getPlatform() == "Windows"){
fullVersion = this._detectActiveXFlash();
}
if(navigator.plugins){
if(navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]){
var isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
var flashDescription = navigator.plugins["Shockwave Flash" + isVersion2].description;
flashDescription = flashDescription.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
fullVersion["major"] = parseInt(flashDescription.replace(/^(.*)\..*$/, "$1"), 10);
fullVersion["minor"] = parseInt(flashDescription.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
fullVersion["build"] = 0;
}
}
if(navigator.userAgent.indexOf("WebTV") != -1){
fullVersion = {major:3, minor:0, build:0};
}
newsi._fullFlashVersion = fullVersion;
newsi._flashVersion = fullVersion.major;
}
newsi.Client.prototype._detectActiveXFlash = function() {
var actualVersion;
var a = null;
var fp6Crash = false;
var playerVersion = []
var fullVersion = {major:null, minor:null, build:null}
var SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash";
var detectionScript = ""
+	  "try {"
+		  "a = new ActiveXObject(\"ShockwaveFlash.ShockwaveFlash.7\");"
+	  "} catch(e) {"
+		  "try {"
+			"a = new ActiveXObject(\"ShockwaveFlash.ShockwaveFlash.6\");"
+			"playerVersion = [6,0,21];"
+			"a.AllowScriptAccess = \"always\";"
+		  "} catch(e) {"
+			"if (playerVersion[0] == 6) {"
+				"fp6Crash = true;"
+			"}"
+		  "}"
+		  "if (!fp6Crash) {"
+			"try {"
+				"a = new ActiveXObject(\"ShockwaveFlash.ShockwaveFlash\");"
+			"} catch(e) {}"
+		  "}"
+	  "};"
eval(detectionScript);
if (!fp6Crash && typeof a == "object") {
var getVersionScript = ""
+	"try {"
+		"d = a.GetVariable(\"$version\");"
+		"if (d) {"
+			"d = d.split(\" \")[1].split(\",\");"
+			"playerVersion = [parseInt(d[0]), parseInt(d[1]), parseInt(d[2])];"
+		"}"
+	"} catch(e) {}"
eval(getVersionScript);
}
fullVersion["major"] = typeof playerVersion[0] == "number" ? playerVersion[0] : null;
fullVersion["minor"] = typeof playerVersion[1] == "number" ? playerVersion[1] : null;
fullVersion["build"] = typeof playerVersion[2] == "number" ? playerVersion[2] : null;
return fullVersion;
}
newsi.clnt=new newsi.Client();
newsi.hasActiveX=function(){if(newsi.hasAX){return true;}return false;}
newsi.hasDOM=function(){if(newsi.dom){return true;}return false;}
newsi.isW3C=function(){if(newsi.dom.w3c){return true;}return false;}
function trace(){};
newsi.getFlashVersion=function(){
if(newsi._flashVersion){
return newsi._flashVersion;
}
return false;
}
newsi.getFullFlashVersion=function(){
if(newsi._fullFlashVersion) {
return newsi._fullFlashVersion;
}
return false;
}
newsi.EventBroadcaster = function(obj){
this.obj = obj;
this.obj._listeners=[];
this.obj.broadcastMessage = this._broadcastMessage;
this.obj.addListener = this._addListener;
this.obj.removeListener = this._removeListener;
}
newsi.EventBroadcaster.prototype=newsi;
newsi.EventBroadcaster.prototype._broadcastMessage=function(){
var eventName = arguments[0];
var list = this._listeners;
var maximum = list.length;
for (var i = 0; i<maximum; ++i) {
if(typeof list[i][eventName] == "function") {
list[i][eventName](arguments[1]);
}
}
function returnArgs(args){
var rt="";
x=1;
while(x<args.length){rt=rt+=","+args[x];x++;}
return rt;
}
returnArgs(arguments);
}
newsi.EventBroadcaster.prototype._addListener=function(obj){
this._listeners.push(obj);
return (true);
}
newsi.EventBroadcaster.prototype._removeListener=function(obj){
var list = this._listeners;
var i = list.length;
while(i--){
if(list[i] == obj){
list.splice(i, 1);
return (true);
}
}
return (false);
}
newsi.HTML=function(){}
newsi.HTML.prototype=newsi;
newsi.HTML.prototype.showHide=function(data){
if(arguments.length==1){if(typeof data=="string")this._getStateFromElement(data);else this._showHideByEvent(data);}
else{this._showHideByCodeCall(arguments[0],arguments[1]);}
}
newsi.HTML.prototype._showHideByEvent=function(data){
var e=data[data.length-1];
var data1=[];
for(var i=0;i<(data.length-1);i++){
data1[i]=data[i];
}
this.obj=data1[0];
this.id=data1[1];
switch(data1.length){
case 3:
this.obj.state=data1[2];
this._doShowHide();
break;
default:
this._getStateFromElement(this.id);
break;
}
}
newsi.HTML.prototype._showHideByCodeCall=function(id,state){
this.obj={};
this.id=id;
this.obj.state=state;
this._doShowHide();
}
newsi.HTML.prototype.showHideUsingClasses=function(contentId,state,showClass,hideClass){
for(var i=0;i<this.arr.length;i++){
if(this.arr[i].linkId!=linkId){this.changeStack('hide',this.arr[i].linkId,this.arr[i][str]);}
}
}
newsi.HTML.prototype._getStateFromElement=function(id){
this.obj={};
this.id=id;
if(this.dom){
var state = document.getElementById(this.id).style.display;
if(state=="block"||state=="")this.obj.state="hide";else this.obj.state="show";
}
this._doShowHide();
}
newsi.HTML.prototype._doShowHide=function(){
if(this.dom){
if(this.obj.state=='hide'){
document.getElementById(this.id).style.display="none";
this.obj.state='show';
}
else{
document.getElementById(this.id).style.display="block";
this.obj.state='hide';
}
}
}
newsi.HTML.prototype.gebid=function(id){
return this.getElementById(id);
}
newsi.HTML.prototype.getElementById=function(id){
if(this.hasDOM()){return document.getElementById(id);}
return;
}
newsi.HTML.prototype.refreshPage=function(){
var loc=String(this.getURL());
loc=loc.replace(/news.bbc.co.uk/,"newsimg.bbc.co.uk");
location.href=loc+"?refresh";
}
newsi.HTML.prototype.setClass=function(obj){
if(!obj.id){
obj.element.setAttribute("class",obj.className);
obj.element.className=obj.className
return;
}
this.gebid(obj.id).setAttribute("class",obj.className);
this.gebid(obj.id).className=obj.className;
return;
}
newsi.HTML.prototype.removeClass=function(obj){
if(!obj.id){
obj.element.removeAttribute("class");
obj.element.removeAttribute("className");
return;
}
this.gebid(obj.id).removeAttribute("class");
this.gebid(obj.id).removeAttribute("className");
return;
}
newsi.html=new newsi.HTML();
newsi.HTML.DOM=function(o){
if(o){
for(var prop in o){
this[prop]=this.e_gebid(o[prop]);
};
};
};
newsi.HTML.DOM.prototype=newsi.html;
newsi.HTML.DOM.prototype.iH=function(o){o.el.innerHTML=o.text;return;}
newsi.HTML.DOM.prototype.e_gebid=function(id){if(this.gebid(id)){return this.gebid(id);}return;}
newsi.HTML.DOM.prototype.gebtn=function(o){var arr=o.parent.getElementsByTagName(o.el);if(arr){return arr;}return;}
newsi.HTML.DOM.prototype.setId=function(o){o.el.setAttribute("id",o.id);o.el.id=o.id;}
newsi.HTML.DOM.prototype.setClass=function(o){o.el.setAttribute("class",o.className);o.el.className=o.className;}
newsi.HTML.DOM.prototype.removeClass=function(o){o.el.setAttribute("class","");o.el.className="";}
newsi.HTML.DOM.prototype.getClass=function(o){
if(o.el.getAttribute("className")!=null&&this.hasActiveX()){return o.el.getAttribute("className");}
return o.el.getAttribute("class");
}
newsi.HTML.DOM.prototype.cE=function(o){return document.createElement(o.el);}
newsi.HTML.DOM.prototype.iB=function(o){o.parent.insertBefore(o.el,o.existing);}
newsi.HTML.DOM.prototype.pN=function(o){return o.el.parentNode;}
newsi.HTML.DOM.prototype.rC=function(o){o.parent.removeChild(o.el);}
newsi.HTML.DOM.prototype.aC=function(o){o.parent.appendChild(o.el);}
newsi.HTML.Flash=function(){
this._swfVersion=6;
this._maxVersion=-1;
this._userFlashVersion=0;
this._userHasRightVersion=false;
this._alernativeContent="default";
this._swfPath="";
this._width;
this._height;
this._flashVars;
this._htmlStrings={};
this._flashParams={};
this._flashParams.name="flash_app";
this._flashParams.bgcolor="#FFFFFF";
this._flashParams.quality="high";
this._flashParams.id="flashapp";
this._flashParams.scale="noscale";
this._flashParams.salign = "tl";
this._flashParams.menu = "false";
this._flashParams.pluginspage="http://www.adobe.com/products/flashplayer/";
}
newsi.HTML.Flash.prototype=newsi;
newsi.HTML.Flash.prototype.placeMovie=function(obj){
if(!obj)return false;
this._setGlobalProperties(obj);
var o = new Object();
o = {
width:this._width,
height:this._height,
swf:this._swfPath,
id:this._flashParams.id,
quality:this._flashParams.quality,
bgcolor:this._flashParams.bgcolor,
menu:this._flashParams.menu,
scale:this._flashParams.scale,
salign:this._flashParams.salign,
pluginspage:this._flashParams.pluginspage,
flashvars:this._flashVars};
if(this._clientHasRightVersion(this._getRequiredVersion())){
this.hasRightVersion = true;
document.write(this.getObjEmbString(o));
return true;
}else{
if((this._alternativeContent=="default") || (!this._alternativeContent)){
document.write(this._getDefaultHTML());
}else if(this._alternativeContent!="none"){
document.write(this._alternativeContent);
this._alternativeContent = "default";
}
return false;
}
}
newsi.HTML.Flash.prototype._clientHasRightVersion=function(requiredVersion){
if(!requiredVersion){
requiredVersion = this._getRequiredVersion();
}
if(newsi.getFlashVersion() >= requiredVersion){
return true;
}
return false;
}
newsi.HTML.Flash.prototype._getDefaultHTML=function(){
var nonFlash='<table cellspacing="0" cellpadding="0" border="0" width="352" align="center">'
+ '<tr>'
+ '<td>'
+ '<table cellspacing="1" cellpadding="30" border="0" bgcolor="#cccccc" width="100%" height="33">'
+ '<tr>'
+ '<td bgcolor="#fafafa"><div class="font-family:Verdana;color:#666666;font-size:11px;"><span style="font-family:Verdana;color:#333333;font-size:18px;font-weight:800;"><strong>Flash plug-in required</strong></span>'
+ '<P>To view the advanced features of this page you need to have the Adobe Flash plugin installed on your system.'
+ '<P><a target="_blank" href="'
+ this._flashParams.pluginspage
+ '"><b>Click here to download the Flash plugin from the Adobe website</b></a></div></td>'
+ '</tr>'
+ '</table></td>'
+ '</tr>'
+ '</table>';
return nonFlash;
}
newsi.HTML.Flash.prototype.getObjEmbString=function(o){
var tag_str = '<object id="'+ o.id+'_obj" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'
+ o.width +'" height="'+ o.height +'"> \n'
+ '<param name="movie" value="'+ o.swf +'" /> \n';
for(var i in o) {
if(i!="id"&&i!="height"&&i!="width"&&i!="swf"&&i!="pluginspage"){
tag_str += '<param name="'+ i +'" value="'+ o[i] +'" /> \n';
}
}
tag_str+= '<embed type="application/x-shockwave-flash" src="'+ o.swf
+'" width="'+ o.width +'" height="'+ o.height +'"'
+ ' id="'+ o.id +'_emb" name="'+ o.name +'" ';
for(var i in o) {
if(i!="id"&&i!="height"&&i!="width"&&i!="swf"&&i!="pluginspage"){
tag_str += ' '+ i +'="'+ o[i] + '"';
}
}
tag_str += "/></object>";
return tag_str;
}
newsi.HTML.Flash.prototype.doDetectAndWriteSwfToElement=function(o){
if(!o){
return false;
};
if(!o.swfVer){
o.swfVer = this._getRequiredVersion();
};
if(!this._clientHasRightVersion(o.swfVer)){
return false
};
var elm=newsi.gebid(o.id);
this._htmlStrings[o.id]={html:elm.innerHTML,swf:this.getObjEmbString(o.flashArgs)};
this.show({id:o.id, swf:true});
return true;
}
newsi.HTML.Flash.prototype.show=function(o){
if(!o){return false};
var elm=newsi.gebid(o.id);
if(!elm){return false};
var contType;
if(!o.swf){contType="html"}else{contType="swf"};
if(!this._htmlStrings[o.id][contType]){return false};
elm.innerHTML=this._htmlStrings[o.id][contType];
return true;
}
newsi.HTML.Flash.prototype.showHTML=function(o){
this.show({id:o.id ,swf:false});
}
newsi.HTML.Flash.prototype.showSWF=function(o){
this.show({id:o.id ,swf:true});
}
newsi.HTML.Flash.prototype._setGlobalProperties=function(obj){
var legGlobPrps=[
{leg:'noFlashContent',p:"_alternativeContent"},
{leg:'getString',p:"_flashVars"},
{leg:'flName',p:"_swfPath"},
{leg:'flVersion',p:"_swfVersion"},
{leg:'flWidth',p:"_width"},
{leg:'flHeight',p:"_height"},
{leg:'requiredVersion',p:"_swfVersion"},
{leg:'maxVersion',p:"_maxVersion"}];
for(var j in legGlobPrps){
if(obj[legGlobPrps[j].leg]){
this[legGlobPrps[j].p]=obj[legGlobPrps[j].leg];
}
}
if(obj.path){
this._swfPath = obj.path + this._swfPath;
}
var legParams=[
{leg:'menu',p:"menu"},
{leg:'flColor',p:"bgcolor"},
{leg:'flQuality',p:"quality"},
{leg:'flScale',p:"scale"},
{leg:'id',p:"id"},
{leg:'flSalign',p:"align"},
{leg:'flGetFlashPlayerURL',p:"pluginspage"}
];
for(var param in legParams){
if(obj[legParams[param].leg]){
this._flashParams[legParams[param].p] = obj[legParams[param].leg];
}
}
}
newsi.HTML.Flash.prototype._getRequiredVersion=function(){
return this._swfVersion;
}
newsi.HTML.Flash.prototype._getFlashParams=function(){
return this._flashParams;
}
newsi.html.flash=new newsi.HTML.Flash();
newsi.HTML.Stacker=function(){this._dom=new newsi.HTML.DOM();}
newsi.HTML.Stacker.prototype=new newsi.HTML();
newsi.HTML.Stacker.prototype.doInit=function(arr){
this.arr=arr;
}
newsi.HTML.Stacker.prototype.changeStack=function(o){
if(this.gebid(o.contentId)){
if(o.showClass!=null){this.showHideUsingClasses(o);return;}
this.showHide(o.contentId,o.state);
}
}
newsi.HTML.Stacker.prototype.showHideUsingClasses=function(o){
if(o.state=="hide"){this._dom.setClass({el:this.gebid(o.contentId),className:o.hideClass});return;}
this._dom.setClass({el:this.gebid(o.contentId),className:o.showClass});
return;
}
newsi.HTML.Stacker.prototype.loopAndHide=function(o){
for(var i=0;i<this.arr.length;i++){
if(this.arr[i].linkId!=o.linkId){this.changeStack({state:'hide',linkId:this.arr[i].linkId,contentId:this.arr[i][o.str],hideClass:o.hideClass,showClass:o.showClass});}
}
}
newsi.Cookie=function(obj){
this._content=obj.content;
this._document=document;
this._name=obj.name;
if(obj.hours){this._expiration=new Date(new Date()).getTime()+obj.hours*3600000}else{this._expiration=null;}
if(obj.path){this._path=obj.path;}else{this._path=null;}
if(obj.domain){this._domain=obj.domain}else{this._domain=null;}
if(obj.secure){this._secure=true}else{this._secure=false;}
}
newsi.Cookie.prototype = newsi;
newsi.Cookie.prototype.store = function(){
var cookieval="";
var str=new String();
cookieval=str.stringify(this._content);
var cookie=this._name+"="+cookieval;
if(this._expiration){
this._expiration=new Date(this._expiration);
cookie += '; expires='+this._expiration.toUTCString();
}
if(this._path){cookie += '; path='+this._path;}
if(this._domain){cookie += '; domain='+this._domain;}
if(this._secure){cookie += '; secure';}
this._document.cookie=cookie;
}
newsi.Cookie.prototype.load = function(cookieName){
if(cookieName){this._name=cookieName;}
var allcookies=this._document.cookie;
if(allcookies=="")return false;
var start=allcookies.indexOf(this._name+'=');
if(start==-1)return false;
start += this._name.length+1;
var end=allcookies.indexOf(';',start);
if(end==-1)end=allcookies.length;
var cookieval=unescape(allcookies.substring(start,end));
var a=cookieval.split('&');
var _isObj=false;
for(var i=0;i<a.length;i++){if(a[i].search(/:/i)!=-1){a[i]=a[i].split(':');_isObj=true;}else{this.content=a;}}
if(_isObj){
this.content={};
for(var i=0;i<a.length;i++){
var prop = unescape(a[i][1]);
if(prop=="false"){prop=false;}
else if(prop=="true"){prop=true;}
else if(prop.indexOf("[")!=-1){
prop = prop.substring(1, prop.length-1 );
if(prop){prop = prop. split(",");}
else prop = new Array();
}
this.content[a[i][0]] = prop;
}
}
return true;
}
newsi.Cookie.prototype.remove = function(){
var cookie;
cookie=this._name+'=';
if(this._path)cookie+='; path='+this._path;
if(this._domain)cookie+='; domain='+this._domain;
cookie+='; expires=Fri, 02-Jan-1970 00:00:00 GMT';
this._document.cookie=cookie;
}
newsi.QueryString=function(){
this._queryString;
this._query = window.location.search.substring(1);
this._isArray = false;
this._returnAnArray = false;
this._arrayReturned = new Array();
this._objectReturned = new Object();
this._pair = new Array();
this._typeOfError = new Array(
"Wrong number of arguments passed to the makeQueryString method - This method: 'makeQueryString' requires 2 arguments - the url (string) and an object. (Array or object)",
"Second argument passed to the makeQueryString method should be either an object or an Array.",
"The method: 'getQueryString' requires either no arguments or a string : 'Array' if an array is required. An object is returned by default."
);
}
newsi.QueryString.prototype=newsi;
newsi.QueryString.prototype.makeQueryString = function(url,obj){
if(arguments.length != 2){alert(this.error(0));}
this._url = url;
this._obj = obj;
if(typeof this._obj == "object"){
if(this._obj!="[object Object]"){this._isArray = true;}
this._queryString = "?";
for(var prop in this._obj){
if(this._isArray){property = "item"+prop;}else{property=prop;}
if(typeof this._obj[prop]!='function'){this._queryString = String(this._queryString) + property + '=' + this._obj[prop] + "&";}
}
this._isArray = false;
this._queryString = this._queryString.substring(0,(this._queryString.length-1));
return(String(this._url+this._queryString));
}
else{
return this.error(1);
}
}
newsi.QueryString.prototype.getQueryString = function(arg){
if(!arg){arg='';}
arg=String(arg.toLowerCase())
if(arguments.length >1){alert(this.error(2));}
if(arg == "array"){this._returnAnArray = true}
if(this._query!=''){
this.vars = this._query.split("&");
for(var i=0;i<this.vars.length;i++){
this._pair[i] = new Array();
this._pair[i] = this.vars[i].split("=");
this._arrayReturned[i] = this._pair[i][1];
this._objectReturned[this._pair[i][0]] = this._pair[i][1];
}
}
if(this._returnAnArray){return(this._arrayReturned);}else{return(this._objectReturned);}
}
newsi.QueryString.prototype.error = function(type){
return this._typeOfError[type];
}
String.prototype.stringify=function(obj){
var divider=":";
if(arguments[1]){if(arguments[1]=="="){divider="=";}}
this._obj = obj;
if(typeof this._obj == "object"){
if(this._obj!="[object Object]"){this._isArray = true;}
this._str = "";
for(var prop in this._obj){
if(this._isArray){property = "";}else{property=prop+divider;}
if(typeof this._obj[prop]!='function'){this._str=String(this._str) + property + this._obj[prop] + "&";}
}
this._isArray = false;
this._str = escape(this._str.substring(0,(this._str.length-1)));
return(String(this._str));
}
if(typeof this._obj == "string"){
this._str=escape(this._obj);
return(String(this._str));
}
}
newsi.Utils=function(){}
newsi.Utils.prototype=newsi;
newsi.Utils.prototype.Refresh=function(lapse){
x=this;
window.setInterval('refreshPage(x)',lapse);
};
newsi.Utils.prototype._refreshPage=function(){
var loc=String(this.getURL());
loc=loc.replace(/news.bbc.co.uk/,"newsimg.bbc.co.uk");
var url=String(this.getURL());
if(url.search(/\?refresh/i)==-1){location.href=loc+"?refresh";}else{location.href=loc;}
}
newsi.utils=new newsi.Utils();
function refreshPage(x){x._refreshPage();}
newsi.Utils.AV=function(){}
newsi.Utils.AV.prototype=newsi;
newsi.Utils.AV.prototype.launch=function(obj){
if(!obj.el){return this._doLegacy(obj);}
this.el=obj.el;
o={name:"clickmain",
height:440,
width:671,
url:this.el.href};
if(this.el.href.search("asb=1")!=-1){o.height=600;}
this._doLaunch(o);
return false;
}
newsi.Utils.AV.prototype._doLegacy=function(obj){
if(!obj.storyId){obj.storyId=0;}
obj.storyId=Number(obj.storyId);
if(!obj.returnString){obj.returnString=false;}
if(!obj.preURL){obj.preURL="";}
if(!obj.section){obj.section="";}
if(!obj.bb){obj.bb=false;}
if(!obj.fileLoc){obj.fileLoc="x";}
if(!obj.height){obj.height=440;}
if(!obj.width){obj.width=671;}
if(!obj.name){obj.name="clickmain";}
if(!obj.redirect){obj.redirect=obj.storyId;}
if(!obj.nbram){obj.nbram=0;}
if(!obj.bbram){obj.bbram=0;}
if(!obj.nbwm){obj.nbwm=0;}
if(!obj.bbwm){obj.bbwm=0;}
if(!obj.site){obj.site=this.getSite(obj.storyId)}
if(obj.edition=="ifs"){obj.bbwm=0;obj.bbrm=0;obj.nbwm=1;obj.nbrm=1;}
if(!obj.url){
if(obj.fileLoc.charAt(obj.fileLoc.length-1)=="/"){obj.fileLoc=obj.fileLoc.substring(0,(obj.fileLoc.length-1));}
obj.url=obj.preURL+"http://www.bbc.co.uk/mediaselector/check"+obj.fileLoc;
obj.url+="?"
+"redirect="+obj.redirect+".stm"
+"&"+"bbwm="+obj.bbwm
+"&"+"bbram="+obj.bbram
+"&"+"nbwm="+obj.nbwm
+"&"+"nbram="+obj.nbram;
obj.url+="&news=1";
if(obj.section!=""){obj.url+="&"+"nol_index="+obj.section;}
}
return this._doLaunch(obj);
}
newsi.Utils.AV.prototype._doLaunch=function(o){
if(!o.returnString){var console=eval(o.name+"=newsi.window.popup(o)");return false;}else{return o.url;}
if(console){console.focus();}
return false;
}
newsi.Utils.AV.prototype.getFileLoc=function(storyId){
if(this.getSite()=="sport"){site="sol";}else{site="nol";}
var parentFolder=parseInt(storyId/10000)*10000;
var childFolder=parseInt(storyId/100)*100;
return "/player/"+site+"/newsid_"+parentFolder+"/newsid_"+childFolder;
}
newsi.Utils.AV.prototype.getSite=function(){
if(this.getURL().search("co.uk/sport")!=-1||this.getURL().search("co.uk/sol")!=-1){return "sport";}
return "news";
}
newsi.Utils.AV.prototype.openAggregation=function(){
if(newsi.utils.av.getSite()=="sport"){newsi.window.opener({url:"http://news.bbc.co.uk/sport1/hi/video_and_audio/default.stm"})}else{newsi.window.opener({url:"http://news.bbc.co.uk/1/hi/video_and_audio/default.stm"})}
}
newsi.utils.av=new newsi.Utils.AV();
function launch_main_player(){newsi.utils.av.openAggregation();}
function launchAVConsoleStory(){
isBB=false;
if(arguments.length==1){storyId=arguments[0];isBB=false;}
if(arguments.length==2){storyId=arguments[0];isBB=arguments[1];}
if(arguments.length==3){storyId=arguments[0];site=arguments[1];edition=arguments[2];}
var fileLoc=newsi.utils.av.getFileLoc(storyId);
if(newsi.hasDOM()){
if(isBB){var clickmain=newsi.utils.av.launch({"storyId":storyId,"bb":isBB,"fileLoc":fileLoc,bbram:1,bbwm:1,nbram:0,nbwm:0});}
else{var clickmain=newsi.utils.av.launch({"storyId":storyId,"bb":isBB,"fileLoc":fileLoc,bbram:1,bbwm:1,nbram:1,nbwm:1});}
}
else{newsi.window.href({url:"http://news.bbc.co.uk/sport2/hi/3791877.stm"});}
}
function launchAVConsoleStoryV3(){
newsi.utils.av.openAggregation();
}
function launchAVConsoleV3Banner(){newsi.utils.av.openAggregation();}
function request_launch(){newsi.utils.av.openAggregation();}
function launchAVConsoleV3(section,isBB){newsi.utils.av.openAggregation();}
function launchAVConsoleV3sport(section,isBB){launchAVConsoleV3(section,isBB);}
newsi.Window = function(){}
newsi.Window.prototype = newsi;
newsi.Window.prototype.popup=function(obj){
if(!obj.url){obj.url="";}
if(!obj.toolbar){obj.toolbar=0;}
if(!obj.scrollbars){obj.scrollbars=0;}
if(!obj.location){obj.location=0;}
if(!obj.status){obj.status=0;}
if(!obj.menubar){obj.menubar=0;}
if(!obj.resizable){obj.resizable=0;}
if(!obj.top){obj.top=100;}
if(!obj.left){obj.left=100;}
if(!obj.width){obj.width=671;}
if(!obj.height){obj.height=373;}
if(!obj.name){obj.name="win"+new Date().getTime();}
if(!obj.parameters){obj.parameters="toolbar="+obj.toolbar+",scrollbars="+obj.scrollbars+",location="+obj.location+",status="+obj.status+",menubar="+obj.menubar+",resizable="+obj.resizable+",width="+obj.width+",height="+obj.height+",top="+obj.top+",left="+obj.left;}
return window.open(obj.url,obj.name,obj.parameters);
}
newsi.Window.prototype.resizeTo=function(obj){
window.resizeTo(obj.x,obj.y);
}
newsi.Window.prototype.href=function(obj){
if(obj.url){window.location.href=obj.url;return;}
return;
}
newsi.Window.prototype.opener=function(obj){
if(obj.url){window.open(obj.url);return;}
return;
}
newsi.window=new newsi.Window();