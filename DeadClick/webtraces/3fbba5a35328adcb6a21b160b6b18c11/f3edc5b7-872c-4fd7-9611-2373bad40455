/*
 * jScroller 0.2 - Scroller Script
 *
 * Copyright (c) 2007 Markus Bordihn (markusbordihn.de)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * $Date: 2007-08-05 18:00:00 +0100 (Sun, 05 Aug 2007) $
 * $Rev: 0.2 $
 */
 
jQuery(document).ready(function(){
   this.defaults = {
     scroller: {
       interval:     0,
       refresh:      300,  // Refresh Time in ms
       direction:    "left", // down,right,left,up
       speed:        2,
       id:           "#scroller",
       cont_id:      "#scroller_container",
       height:       30,
       width:        160,
       min_height:   15,
       min_width:    80
     }
   }
   
   var config = jQuery.extend(this.defaults);
   var scroller = jQuery(config.scroller.id);
   var scroller_cont = jQuery(config.scroller.cont_id);
   
   detectSizes();
   scroller_init(); 

   function startScroll() {
     if(!config.scroller.interval){
       config.scroller.interval=setInterval(doScroll,config.scroller.refresh);
     }
   }
   
   function stopScroll() {
     window.clearInterval(config.scroller.interval);
     config.scroller.interval=0;
   }
 
   function detectSizes() {
     config.scroller.width=((scroller.width())||config.scroller.width);
     config.scroller.height=((scroller.height())||config.scroller.height);
     config.scroller.min_height=((scroller_cont.height())||config.scroller.min_height);
     config.scroller.min_width=((scroller_cont.width())||config.scroller.min_width);
   }
 

   
   function scroller_init() {
     jQuery("#scroller a").click(function(){
      window.open(this.href);
      return false;
     });
     scroller_cont.css('overflow','hidden');
     if(!config.scroller.interval) {
      window.onfocus=startScroll;
      /* window.onblur=stopScroll; */
        startScroll();  
       if (jQuery.browser.msie && !config.scroller.interval) {window.focus}
     }
   }
   

   
   function doScroll() {
     var 
      p_top= Number((/[0-9-,.]+/.exec(scroller.css('top'))||0)),
      p_left=Number((/[0-9-,.]+/.exec(scroller.css('left'))||0));
 
     switch(config.scroller.direction) {
       case 'up':
         if (p_top <= -1*config.scroller.height) {p_top=config.scroller.min_height;}
         scroller.css('top',p_top-config.scroller.speed+'px');
       break;
       case 'right':
         if (p_left >= config.scroller.min_width) {p_left=-1*config.scroller.width;}
         scroller.css('left',p_left+config.scroller.speed+'px');
       break;
       case 'left':
         if (p_left <= -1*config.scroller.width) {p_left=config.scroller.min_width;}
         scroller.css('left',p_left-config.scroller.speed+'px');
       break;
       case 'down':
         if (p_top >= config.scroller.min_height) {p_top=-1*config.scroller.height;}
         scroller.css('top',p_top+config.scroller.speed+'px');
       break;
     }
   }
});