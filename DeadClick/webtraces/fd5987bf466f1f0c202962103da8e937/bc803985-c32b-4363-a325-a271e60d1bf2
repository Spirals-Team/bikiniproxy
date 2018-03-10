;(function($){
	jQuery.fn.posttabs=function(args){
		var defaults= {
			tabname		: '',
			fade		: '0',
			active		: '',
			reload		: '',
			nav		: '0',
			nexttext	: '',
			prevtext	: '',
			enablecookie	: '0'
		}
		options=jQuery.extend({},defaults,args);
		var tabreload = '0',tabname=options.tabname;
		jQuery(this).tabs().addClass( "ui-tabs-horizontal-top ui-helper-clearfix" );
		if(options.fade == '1')
			jQuery(this).tabs({ fx: { opacity: "toggle" } });
	
		// Enable cookie for last active tab
		if(options.enablecookie == '1') {
			jQuery(this).tabs({
				    activate: function( event, ui ) {
					jQuery.cookie(tabname, jQuery(this).tabs("option","active"));
				    },
				    active: jQuery.cookie(tabname)
				});
		}
		if( options.reload.length > 0 && options.reload=='1') {	
			tabreload = '1';
			var anchor=jQuery(document).attr("location").hash;
			if(anchor){
				var index = jQuery("#"+options.tabname+" > div.ui-tabs-panel").index(jQuery(anchor));
				if(index != -1)	jQuery(this).tabs("option", "active", index);
			}
			else
			{
				//Set default tab on load
				if(options.active.length > 0)
				jQuery(this).tabs("option", "active",  options.active );
			}
		
		}
		else
		{
			//Set default tab on load
			if(options.active.length > 0 )
			jQuery(this).tabs("option", "active",  options.active );
		}
		jQuery(this).on("tabsactivate", function(event, ui){
			// Tab reload
			if(tabreload.length > 0 && tabreload == '1')
			{
				var currid = "#"+ui.newPanel.attr("id");
				window.location.hash = "#"+ui.newPanel.attr("id");
				jQuery("body,html").animate({"scrollTop":jQuery(currid).parents(".wordpress-post-tabs").offset().top}, 1000);
			}
		});
		// Prev & Next arrows
		if(options.nav.length > 0 && options.nav=='1') {
		   var wpts_j=0;
			jQuery("#"+options.tabname+" > .ui-tabs-panel").each(function(wpts_j){
				 var totalSize = jQuery("#"+tabname+" .ui-tabs-panel").size();
				  if (wpts_j < (totalSize-1)) {
					  var wpts_next = wpts_j + 1;
						  jQuery(this).append("<a href='#' class='wpts-next-tab wpts-mover' rel='" + wpts_next + "'>"+options.nexttext+"</a>");
				  }
				  if (wpts_j >= 1) {
					  var wpts_prev = wpts_j - 1;
						  jQuery(this).append("<a href=\'#\' class=\'wpts-prev-tab wpts-mover\' rel=\'" + wpts_prev + "\'>"+options.prevtext+"</a>");
				  }
			});
			jQuery(".wpts-next-tab, .wpts-prev-tab").click(function() {
				   jQuery("#"+tabname).tabs("option", "active", jQuery(this).attr("rel"));
				   return false;
			});
		} 
		return this;
	}
})(jQuery);
