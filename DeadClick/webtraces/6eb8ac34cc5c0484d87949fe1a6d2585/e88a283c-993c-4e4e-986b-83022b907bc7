jQuery.noConflict();
jQuery(document).ready(function(){
		/*	here we loop through and hide any element
			which has the classname .aj_hidden
		*/
		jQuery(".aj-hidden").hide();
		/*	now that the element is hidden, we add a
			class which tells it to set its visibility 
			to visible.
			
			We do this because we set the visibility
			of any aj_hidden to "hidden" in our CSS.  
			This helps prevent the contents of any collapsible
			element from being visible for a spilt second
			during the initial page load.
		*/
		jQuery(".aj-hidden").addClass("aj-visible");
		jQuery(".aj-collapse").click(function() {
		  rel = jQuery(this).attr('rel');
		  jQuery("#" + rel).slideToggle('fast');
		});
});