/*
	reflection.js for mootools v1.5
	(c) 2006-2011 Christophe Beyls <http://www.digitalia.be>
	MIT-style license.
*/
Element.implement({reflect:function(b){var a=this;if(a.get("tag")=="img"){b=Object.append({height:1/3,opacity:0.5},b);a.unreflect();function c(){var f=a.width,d=a.height,k,h,l,g,j;h=Math.floor((b.height>1)?Math.min(d,b.height):d*b.height);k=new Element("canvas");if(k.getContext){try{g=k.setProperties({width:f,height:h}).getContext("2d");g.save();g.translate(0,d-1);g.scale(1,-1);g.drawImage(a,0,0,f,d);g.restore();g.globalCompositeOperation="destination-out";j=g.createLinearGradient(0,0,0,h);j.addColorStop(0,"rgba(255, 255, 255, "+(1-b.opacity)+")");j.addColorStop(1,"rgba(255, 255, 255, 1.0)");g.fillStyle=j;g.rect(0,0,f,h);g.fill()}catch(i){return}}else{if(!Browser.ie){return}k=new Element("img",{src:a.src,styles:{width:f,height:d,marginBottom:h-d,filter:"FlipV progid:DXImageTransform.Microsoft.Alpha(Opacity="+(b.opacity*100)+", FinishOpacity=0, Style=1, StartX=0, StartY=0, FinishX=0, FinishY="+(h/d*100)+")"}})}k.setStyles({display:"block",border:0});l=new Element(($(a.parentNode).get("tag")=="a")?"span":"div").inject(a,"after").adopt(a,k);l.className=a.className;a.store("reflected",l.style.cssText=a.style.cssText);l.setStyles({width:f,height:d+h,overflow:"hidden"});a.style.cssText="display: block; border: 0px";a.className="reflected"}if(a.complete){c()}else{a.onload=c}}return a},unreflect:function(){var b=this,a=this.retrieve("reflected"),c;b.onload=function(){};if(a!==null){c=b.parentNode;b.className=c.className;b.style.cssText=a;b.eliminate("reflected");c.parentNode.replaceChild(b,c)}return b}});

// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
window.addEvent("domready", function() {
	$$("img").filter(function(img) { return img.hasClass("reflect"); }).reflect({/* Put custom options here */});
});
