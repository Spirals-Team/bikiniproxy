/*
 * Thickbox 2.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2006 cody lindley
 * Licensed under the MIT License:
 *http://www.opensource.org/licenses/mit-license.php
 * Thickbox is built on top of the very light weight jQuery library.
 * Modified for SPIP <www.spip.net> by Fil <fil@rezo.net>:
 * Modified by BoOz@rezo.net
 * - added recognition of images based on a.type
 * - added an image gallery
 * - added keyboard navigation ('n'ext (->), 'p'revious (<-), 'q'uit (esc))
 * - customize path to the css and wheel image
 * - default size for thickbox links that have no width x height indicated ??
 * - don't load css when not needed ??
 * - TODO: don't load js when not needed!!
 
 */
 
 
//on page load call TB_init
//
// init
//
var DELAI = 7000 ; //nombre de secondes entre deux images
var imageArray = [];
var FULL_S = false;
var DIAPO = false;

if(typeof TB_chemin_css == 'undefined') { TB_chemin_css = 'thickbox.css'; }
if(typeof TB_chemin_animation == 'undefined') { TB_chemin_animation = 'circle_animation.gif'; }
//add thickbox to href elements that have a class of .thickbox

function TB_image() {
	var t = this.title || this.name ;
	TB_show(t,this.href,'image');
	return false;
}

//add thickbox to href elements that have a class of .thickbox
function TB_init(root) {
	$("a.thickbox",root).each(
		function(i) {
			this.onclick = TB_image;
			var t = this.alt || this.name || null;
			this.alt = t + " - view bigger version";
			if (
				(this.type && this.type.match(/^image[\/](jpeg|gif|png)$/i))
				|| (this.href && this.href.match(/\.(jpeg|jpg|png|gif)$/i))
			) {

				// we store image links in an array (for a gallery)
				imageArray.push ([
					this.href,
					this.title || this.name
				]);

			}
		}
	);
//console.log(imageArray);
}

function TB_show(caption, url) {//function called when the user clicks on a thickbox link
	try {
		if (document.getElementById("TB_HideSelect") == null) {
		$("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay' title='Fermer'></div><div id='TB_window'></div>");
		$("#TB_overlay").click(TB_remove);
	}
	$(".TB_hide").hide();

	if(caption==null){caption=""};

	if(!FULL_S){
		$(window).scroll(TB_position);
	}

	TB_overlaySize();

	$("body").append("<div id='TB_load'><img src='"+TB_chemin_animation+"' alt='loading' /></div>");
	TB_load_position();

	if(url.indexOf("?")!==-1){ //If there is a query string involved
		var baseURL = url.substr(0, url.indexOf("?"));
	}else{
		var baseURL = url;
	}
	var urlString = /\.jpg|\.jpeg|\.png|\.gif|\.bmp/g;
	var urlType = baseURL.toLowerCase().match(urlString);

	if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images

	TB_PrevCaption = "";
	TB_PrevURL = "";
	TB_PrevHTML = "";
	TB_NextCaption = "";
	TB_NextURL = "";
	TB_NextHTML = "";
	TB_imageCount = "";
	TB_Full_Size = "";
	TB_FoundURL = false;
	
	if(imageArray.length > 0){
		TB_TempArray = imageArray ;
		for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML == "")); TB_Counter++) {
			var urlTypeTemp = TB_TempArray[TB_Counter][0].toLowerCase().match(urlString);
			if (!(TB_TempArray[TB_Counter][0] == url)) {
				if (TB_FoundURL) {
					TB_NextCaption = TB_TempArray[TB_Counter][1];
					TB_NextURL = TB_TempArray[TB_Counter][0];
					TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#' title='Image suivante'><strong> &gt;</strong></a></span>";
				} else {
					TB_PrevCaption = TB_TempArray[TB_Counter][1];
					TB_PrevURL = TB_TempArray[TB_Counter][0];
					TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#' title='Image precedente'><strong>&lt; </strong></a></span>";
				}
			} else {
				TB_FoundURL = true;
				TB_imageCount =(TB_Counter + 1) +" / "+ (TB_TempArray.length);
			}
		}
	}
	if (!(TB_NextHTML == "")) { //preload de la prochaine image
		imageSuivante = new Image();
		imageSuivante.src = TB_NextURL ;
	}

	imgPreloader = new Image();
	imgPreloader.onload = function(){
	imgPreloader.onload = null;
	//console.log("loaded" + url);
	// Resizing large images - orginal by Christian Montoya edited by me.
	TB_Big_Image = false ;
	var pagesize = TB_getPageSize();
	var x = pagesize[0] - 150;
	var y = pagesize[1] - 150;
	var imageWidth = imgPreloader.width;
	var imageHeight = imgPreloader.height;
	IMAGE_WIDTH = imageWidth ;
		IMAGE_HEIGHT = imageHeight ;

	if (imageWidth > x) {
		TB_Big_Image = true ;
		imageHeight = imageHeight * (x / imageWidth); 
		imageWidth = x; 

		if (imageHeight > y) { 
			TB_Big_Image = true ;
			imageWidth = imageWidth * (y / imageHeight); 
			imageHeight = y; 
		}
	} else if (imageHeight > y) {
		TB_Big_Image = true ;
		imageWidth = imageWidth * (y / imageHeight);
		imageHeight = y;
	
		if (imageWidth > x) {
			TB_Big_Image = true ;
			imageHeight = imageHeight * (x / imageWidth); 
			imageWidth = x;
		}
	}
	// End Resizing
	if(!DIAPO){
		TB_Diapo = "<span id='TB_Diapo'>&nbsp;&nbsp;<a href='#'><strong>[Diaporama]</strong></a></span>";
	}else{
		TB_Diapo = "<span id='TB_Diapo'>&nbsp;&nbsp;<a href='#' title='Stop'><strong>[Stop]</strong></a></span>";
	}
	if (TB_Big_Image)
		TB_Full_Size = "<span id='TB_Full'>&nbsp;&nbsp;<a href='#'><strong>[Zoom]</strong></a></span>";
		TB_WIDTH = imageWidth + 20;
		TB_HEIGHT = imageHeight + 20;

		$("#TB_window").append("<a href='#' id='TB_ImageOff'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+" - next picture'/></a>" + "<div id='TB_legend' style='background-color:#fff'><div id='TB_caption'>"+caption+"</div><div id='TB_secondLine'>" + TB_imageCount + TB_Full_Size + TB_PrevHTML + TB_NextHTML + TB_Diapo +"</div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton'><img src='"+TB_chemin_close+"' alt='Fermer' /></a></div></div>"); 

		$("#TB_closeWindowButton").click(TB_remove);
		$("#TB_load").remove();
		$("#TB_window").fadeIn("slow");
		//setTimeout('$("#TB_legend").slideDown(800);',1600);

	if (!(TB_NextHTML == "")) {
		function goNext(){
			FULL_S = false ;
			$("#TB_window").remove();
			$("body").append("<div id='TB_window'></div>");
			TB_show(TB_NextCaption, TB_NextURL); 
			return false;
		}
		$("#TB_next").click(goNext);
	}

	if (!(TB_PrevHTML == "")) {
		function goPrev(){
			FULL_S = false ;
			if($(document).unbind('click',goPrev)){$(document).unbind('click',goPrev)};
			$("#TB_window").remove();
			$("body").append("<div id='TB_window'></div>");
			TB_show(TB_PrevCaption, TB_PrevURL);
			return false;
		}
		$("#TB_prev").click(goPrev);
	}

	if (!(TB_Full_Size == "")) {
		function fullSize(){
			var arrayPageScroll = TB_getPageScrollTop();
			var pagesize = TB_getPageSize();
	
			if(!FULL_S){
				FULL_S = true ;
				TB_TOP = arrayPageScroll[1];

				if( (arrayPageScroll[0] + (pagesize[0] - IMAGE_WIDTH)/2) > 0 ){
					TB_LEFT = arrayPageScroll[0] + (pagesize[0] - IMAGE_WIDTH)/2 ;
				}else{
					TB_LEFT = 50 ;
				}

				$("#TB_window").animate({top:TB_TOP,left:TB_LEFT,width:(IMAGE_WIDTH+20),height:(IMAGE_HEIGHT+20)},1500);
		 		$("#TB_Image").animate({top:20,left:20,width:IMAGE_WIDTH,height:IMAGE_HEIGHT},1500, TB_recadre);
				}
	 		else{
	 			FULL_S = false ;
	 			$("#TB_window").animate({top: (arrayPageScroll[1] + (pagesize[1]-TB_HEIGHT)/2),left:(arrayPageScroll[0] + (pagesize[0] - TB_WIDTH)/2), width:TB_WIDTH,height:TB_HEIGHT},1500);
	 			$("#TB_Image").animate({top:20,left:20,width:(TB_WIDTH - 20),height:(TB_HEIGHT - 20)},1500,TB_recadre);
	 		}
			return false;
		}
		$("#TB_Full").click(fullSize);
	 }

	if(!(TB_NextHTML == "")){
		$("#TB_ImageOff").click(goNext);
	}else{
		$("#TB_ImageOff").click(TB_remove);
	}

	$("#TB_Diapo").click(diaporama);

	document.onkeydown = function(e){
		if (e == null) { // ie
			keycode = event.keyCode;
		} else { // mozilla
			keycode = e.which;
		}
		if(keycode == 27 | keycode == 67 | keycode == 70){ // close
			TB_remove();
		} else if(keycode == 190 | keycode == 39){ // display previous image <-
			if(!(TB_NextHTML == "")){
				document.onkeydown = "";
				goNext();
			}
		} else if(keycode == 188| keycode == 37){ // display next image ->
			if(!(TB_PrevHTML == "")){
				document.onkeydown = "";
				goPrev();
			}
		}
	}

	TB_position() ;
	 
	$("#TB_load").remove();
	$("#TB_window").css({display:"block"}); //for safari using css instead of show


	//diapo
	//console.log("deb " + DELAI); 
	if(DIAPO)
		setTimeout('diapo();',DELAI);
		$("#TB_ImageOff")[0].focus();
	}

	imgPreloader.src = url;
	//console.log("hop" + url);

	}else{//code to show html pages
		//console.log(url);
		var queryString = url.replace(/^[^\?]+\?+/,'');
		//rhooooo, c'est pas du boulot ce thickbox
		queryString = queryString.replace(/^[^\?]+\?+/,'');
		//console.log(queryString);
		var params = TB_parseQuery( queryString );
		//console.log(params);

		TB_WIDTH = (params['width']*1) + 30;
		TB_HEIGHT = (params['height']*1) + 40;

		ajaxContentW = TB_WIDTH - 30;
		ajaxContentH = TB_HEIGHT - 45;

		if(url.indexOf('TB_iframe') != -1){
			urlNoQuery = url.split('TB_');
			$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='Close'>close</a></div></div><iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' onload='TB_showIframe()'> </iframe>");
		}else{
			$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'>close</a></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
		}

		$("#TB_closeWindowButton").click(TB_remove);

		if(url.indexOf('TB_inline') != -1){
			$("#TB_ajaxContent").html($('#' + params['inlineId']).html());
			TB_position();
			$("#TB_load").remove();
			$("#TB_window").css({display:"block"}); 
		}else if(url.indexOf('TB_iframe') != -1){
			TB_position();
			if(frames['TB_iframeContent'] == undefined){//be nice to safari
				$("#TB_load").remove();
				$("#TB_window").css({display:"block"});
				$(document).keyup( function(e){ var key = e.keyCode; if(key == 27){TB_remove()} });
			}
		}else{
			$("#TB_ajaxContent").load(url, function(){
				TB_position();
				$("#TB_load").remove();
				$("#TB_window").css({display:"block"}); 
			});
		}

	}

	$(window).resize(TB_position);

	document.onkeyup = function(e){
		if (e == null) { // ie
			keycode = event.keyCode;
		} else { // mozilla
			keycode = e.which;
		}

		if(keycode == 27){ // close
			TB_remove();
		}
	}

	} catch(e) {
		alert( e );
	}
}

//helper functions below
function diaporama(){
	//alert("diapo");
	if(!DIAPO){
		DIAPO = true ;
		//console.log("deb"); 
		diapo();
		//$("TB_secondLine").html(TB_imageCount + TB_Full_Size + TB_PrevHTML + TB_NextHTML + "[Stop]");
	} else {
		DIAPO = false ;
	}
}

function diapo(){
	//console.log(DIAPO);
	if(DIAPO){
		if(TB_NextURL !=""){
			$("#TB_window").remove();
			$("body").append("<div id='TB_window'></div>");
			//console.log("hop");
			TB_show(TB_NextCaption, TB_NextURL); 
		}else DIAPO = false ;
	}
	return false;
}

function TB_showIframe(){
	$("#TB_load").remove();
	$("#TB_window").css({display:"block"});
}

function TB_remove() {
	DIAPO = false ;
	FULL_S = false ;
	$("#TB_imageOff").unbind('click');
	$("#TB_overlay").unbind('click');
	$("#TB_closeWindowButton").unbind('click');
	$("#TB_window").fadeOut("fast",function(){$('#TB_window,#TB_overlay,#TB_HideSelect').remove();});
	$("#TB_load").remove();
	$(".TB_hide").show();
	
	return false;
}

function TB_position() {
	var pagesize = TB_getPageSize();
	var arrayPageScroll = TB_getPageScrollTop();
	var legendHeight = $("#TB_legend").height() ;	

	if(FULL_S && DIAPO){
		FULL_S = false ;
		$("#TB_window").animate({top: (arrayPageScroll[1] + (pagesize[1]-TB_HEIGHT)/2),left:(arrayPageScroll[0] + (pagesize[0] - TB_WIDTH)/2), width:TB_WIDTH,height:TB_HEIGHT},1500);
		$("#TB_Image").animate({top:20,left:20,width:(TB_WIDTH - 20),height:(TB_HEIGHT - 20)},1500,TB_recadre);
	}

	if(!FULL_S || DIAPO){
		$("#TB_window").css({width:TB_WIDTH+"px",left: (arrayPageScroll[0] + (pagesize[0] - TB_WIDTH)/2)+"px", top: (arrayPageScroll[1] + (pagesize[1]-TB_HEIGHT)/2 - legendHeight/2)+"px" });
	}
}

function TB_overlaySize(){
	if (window.innerHeight && window.scrollMaxY || window.innerWidth && window.scrollMaxX) {
		yScroll = window.innerHeight + window.scrollMaxY;
		xScroll = window.innerWidth + window.scrollMaxX;
		var deff = document.documentElement;
		var wff = (deff&&deff.clientWidth) || document.body.clientWidth || window.innerWidth || self.innerWidth;
		var hff = (deff&&deff.clientHeight) || document.body.clientHeight || window.innerHeight || self.innerHeight;
		xScroll -= (window.innerWidth - wff);
		yScroll -= (window.innerHeight - hff);
	} else if (document.body.scrollHeight > document.body.offsetHeight || document.body.scrollWidth > document.body.offsetWidth){ // all but Explorer Mac
		yScroll = document.body.scrollHeight;
		xScroll = document.body.scrollWidth;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		yScroll = document.body.offsetHeight;
		xScroll = document.body.offsetWidth;
	}
	$("#TB_overlay").css({"height":yScroll +"px", "width":xScroll +"px"});
	$("#TB_HideSelect").css({"height":yScroll +"px","width":xScroll +"px"});
}

function TB_load_position() {
	var pagesize = TB_getPageSize();
	var arrayPageScroll = TB_getPageScrollTop();
	$("#TB_load")
	.css({left: (arrayPageScroll[0] + (pagesize[0] - 100)/2)+"px", top: (arrayPageScroll[1] + ((pagesize[1]-100)/2))+"px" })
	.css({display:"block"});
}

function TB_parseQuery ( query ) {
	var Params = new Object ();
	if ( ! query ) return Params; // return empty object
		var Pairs = query.split(/[;&]/);
	
	for ( var i = 0; i < Pairs.length; i++ ) {
		var KeyVal = Pairs[i].split('=');

		if ( ! KeyVal || KeyVal.length != 2 ) continue;
			var key = unescape( KeyVal[0] );
			var val = unescape( KeyVal[1] );
			val = val.replace(/\+/g, ' ');
			Params[key] = val;
	}
	return Params;
}

function TB_getPageScrollTop(){
	var yScrolltop;
	var xScrollleft;

	if (self.pageYOffset || self.pageXOffset) {
		yScrolltop = self.pageYOffset;
		xScrollleft = self.pageXOffset;
	
	} else if (document.documentElement && document.documentElement.scrollTop || document.documentElement.scrollLeft ){// Explorer 6 Strict
		yScrolltop = document.documentElement.scrollTop;
		xScrollleft = document.documentElement.scrollLeft;
	
	} else if (document.body) {// all other Explorers
		yScrolltop = document.body.scrollTop;
		xScrollleft = document.body.scrollLeft;
	}
	arrayPageScroll = new Array(xScrollleft,yScrolltop) 
	return arrayPageScroll;
}

function TB_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight
	arrayPageSize = new Array(w,h) 
	return arrayPageSize;
}

function TB_recadre(){
	TB_overlaySize();
	TB_position();
}
