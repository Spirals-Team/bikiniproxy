/*
Simple Image Trail script- By JavaScriptKit.com
Visit http://www.javascriptkit.com for this script and more
This notice must stay intact
 
Simple Image Trail script- By JavaScriptKit.com was originally modified by Tim Kroeger (tim@breakmyzencart.com)
for use with Image Handler 2 and better cross browser functionality
 
Later the Simple Image Trail script- By JavaScriptKit.com was further modified by
p.hailey@virgin.net in an attempt to  fix ie 6 issues see zencart forum IH2 thread
for detials
 
Image Handler Jscript
Version 4.3.2
Modified by Nigel Thomson (nigel@nigel.geek.nz) 12 June 2010
This  modified version of the Simple Image Trail script- By JavaScriptKit.com (4.1) brings in Opera
support, and fixes the webkit (Safari and Chrome) Bugs
Fix for horizontalscrollbar added 23 june 2010
http://nigeltsblog.blogspot.com/2010/06/zencart-image-handler-webkit-and-opera.html
Fix for IE9 added 16 March 2011
http://nigeltsblog.blogspot.com/2011/03/image-handler-and-internet-explorer-9.html
*/
 
var offsetfrommouse=[10,10]; //image x,y offsets from cursor position in pixels. Enter 0,0 for no offset
var displayduration=0; //duration in seconds image should remain visible. 0 for always.
var currentimageheight = 400;    // maximum image size.
var padding=10; // padding must by larger than specified div padding in stylessheet
 
// Global variables for sizes of hoverimg
// Defined in "showtrail()", used in "followmouse()"
var zoomimg_w=0;
var zoomimg_h=0;
var vpos;
//Detect IE
var stIsIE = /*@cc_on!@*/false;
//detect opera
var isOpera =
window.opera?1:0;
// Detect Webkit browsers
var isWebKit =
navigator.userAgent.indexOf("AppleWebKit") > -1;
 
if (document.getElementById || document.all){
document.write('<div id="trailimageid"></div>');
}
 
function getObj(name) {
if (document.getElementById) {
this.obj = document.getElementById(name);
this.style = document.getElementById(name).style;
} else if (document.all) {
this.obj = document.all[name];
this.style = document.all[name].style;
} else if (document.layers) {
this.obj = document.layers[name];
this.style = document.layers[name];
}
}
 
function gettrail(){
return new getObj("trailimageid");
}
 
function truebody(){
if (isWebKit){
return document.body;
}else if (isOpera) {
return document.documentElement;
}else{
 
return (!window.opera && document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}
}
 
function showtrail(imagename,title,oriwidth,oriheight,zoomimgwidth,zoomimgheight, image, startx, starty, startw, starth){
zoomimg_w=zoomimgwidth;
zoomimg_h=zoomimgheight;
if (zoomimgheight > 0){ currentimageheight = zoomimgheight; }
trailobj = gettrail().obj;
trailobj.style.width=(zoomimgwidth+(2*padding))+"px";
trailobj.style.height=(zoomimgheight+(2*padding))+"px";
trailobj.setAttribute("startx", startx);
trailobj.setAttribute("starty", starty);
trailobj.setAttribute("startw", startw);
trailobj.setAttribute("starth", starth);
trailobj.setAttribute("imagename", imagename);
trailobj.setAttribute("imgtitle", title);
document.onmousemove=followmouse;
}
 
function hidetrail(){
trailstyle = gettrail().style;
trailstyle.visibility = "hidden";
document.onmousemove = "";
trailstyle.left = "-2000px";
trailstyle.top = "-2000px";
}
 
function followmouse(e){
 
var xcoord=offsetfrommouse[0];
var ycoord=offsetfrommouse[1];
if (stIsIE){
var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth-15;
var docheight=document.all? Math.min(truebody().scrollHeight, truebody().clientHeight) : Math.min(window.innerHeight);
}
else
{
var docwidth=pageXOffset+window.innerWidth-15;
var docheight=Math.min(window.innerHeight);
 
}
var relativeX = null;
var relativeY = null;
if ((typeof e != "undefined") && !(stIsIE)){ // This forces IE9 to go to the else option
if ((typeof e.layerX != "undefined") && (typeof e.layerY != "undefined")) {
relativeX = e.layerX;
relativeY = e.layerY;
} else if ((typeof e.x != "undefined") && (typeof e.y != "undefined")) {
//      relativeX = e.x; // original code replaced to work with Opera
//      relativeY = e.y; // original code replaced to work with Opera
relativeX = event.offsetX;
relativeY = event.offsetX;
}
if (docwidth - e.pageX < zoomimg_w + (3 * padding)) {
xcoord = e.pageX - xcoord - zoomimg_w - (2 * offsetfrommouse[0]);
} else {
xcoord += e.pageX;
}
if (docheight - e.pageY < zoomimg_h + (2 * padding)){
ycoord += e.pageY - Math.max(0,(0 + zoomimg_h + (5 * padding) + e.pageY - docheight - truebody().scrollTop));
// returning different values for ff and (opera and webkit) - fixed 12th june 2010
} else {
ycoord += e.pageY;
}
 
} else if (typeof window.event != "undefined"){ // This works for IE
 
if ((typeof event.x != "undefined") && (typeof event.y != "undefined")) {
relativeX = event.x;
relativeY = event.y;
}
else if ((typeof event.offsetX != "undefined") && (event.offsetY != "undefined")) {
relativeX = event.offsetX;
relativeY = event.offsetY;
}
 
if (docwidth - event.clientX < zoomimg_w + (3 * padding)) {
xcoord = event.clientX - xcoord - zoomimg_w - (2 * offsetfrommouse[0]);
} else {
xcoord += truebody().scrollLeft+event.clientX;
}
/* event.clientY is not valid in firefox netscape or opera, but ie has to use it */
var ie_offset = -20;
if ( docheight - event.clientY < zoomimg_h + (2 * padding) ){
/*
ycoord += event.clientY - Math.max(0,(0 + zoomimg_h + (5 * padding) - (docheight + truebody().scrollTop -event.clientY) ) );
*/
ycoord += ie_offset + truebody().scrollTop + event.clientY - Math.max(0,(0 + zoomimg_h + (2 * padding) - (docheight - event.clientY) ) );
} else {
ycoord += ie_offset + truebody().scrollTop + event.clientY;
}
}
 
trail = gettrail();
startx    = trail.obj.getAttribute("startx");
starty    = trail.obj.getAttribute("starty");
startw    = trail.obj.getAttribute("startw");
starth    = trail.obj.getAttribute("starth");
imagename = trail.obj.getAttribute("imagename");
title     = trail.obj.getAttribute("imgtitle");
 
// calculate and set position BEFORE switching to visible
if (stIsIE){
var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth-15;
var docheight=document.all? Math.max(truebody().scrollHeight, truebody().clientHeight) : Math.max(document.body.offsetHeight, window.innerHeight);
}else{
var docwidth=pageXOffset+window.innerWidth-15;
var docheight=Math.max(document.body.offsetHeight, window.innerHeight);
}
 
if(ycoord < 0) { ycoord = ycoord*-1; }
if ((trail.style.left == "-2000px") || (trail.style.left == "")) { trail.style.left=xcoord+"px"; }
if ((trail.style.top == "-2000px") || (trail.style.top == "")) { trail.style.top=ycoord+"px"; }
trail.style.left=xcoord+"px";
trail.style.top=ycoord+"px";
 
if (trail.style.visibility != "visible") {
if (((relativeX == null) || (relativeY == null)) ||
((relativeX >= startx) && (relativeX <= (startx + startw))
&& (relativeY >= starty) && (relativeY <= (starty + starth)))){
newHTML = '<div><h1>' + title + '</h1>';
newHTML = newHTML + '<img src="' + imagename + '"></div>';
trail.obj.innerHTML = newHTML;
trail.style.visibility="visible";
}
}
}