// JavaScript Document
jQuery(document).ready(function($){
	
	$('.ap_allowed_pages').on('change', function(){
		var num = $(this).val();
		var obj = $('input[name="ap_query['+num+']"]');
		obj.parent().find('input[type="number"]').attr('class', 'hide');
		obj.removeAttr('class');
		
		obj.parent().find('select.ap_post_types').hide();
		obj.parent().find('select#ap_post_types_'+num).show();
		//console.log(num);
		//console.log(obj);
	});

								
	var ap_methods = {
		load_sub_items: function(type){
			
			$.post(ajaxurl, {action: 'ap_tax_types',"type":type}, function(response) {
				response = jQuery.parseJSON(response);	
																			
				if(response.msg){
					var data = response.data;
					var selected = response.selected;
					var selected_x = response.selected_x;
					var items = '';
					var items_x = '';
					//console.log(typeof selected=='object');
					//console.log(typeof selected_x=='boolean');
					$.each(data, function(i, v){
						var is_selected = false;	
						var is_selected_x = false;											   
						if(typeof selected=='object'){
							$.each(selected, function(is, vs){
								//console.log(is+' > '+vs+' > '+i+' > '+v);								
								if(vs==i)
								is_selected = 'selected="selected"';							
							});
						}
						if(typeof selected_x=='object'){
							$.each(selected_x, function(is, vs){	
							//console.log(is+' > '+vs+' > '+i+' > '+v);							
								if(vs==i)
								is_selected_x = 'selected="selected"';							
							});
						}
						
						items+='<option value="'+i+'" '+is_selected+'>'+(i==0?v+'Include':v)+'</option>';
						
						items_x+='<option value="'+i+'" '+is_selected_x+'>'+(i==0?v+'Exclude':v)+'</option>';
					
						
					});
					//return;
					$('#tax_types_selector').html(items);
					$('#tax_types_selector_x').html(items_x);
					$('div.ap_tax_types').show();

				}																
				
			});
		}
	}
	
	
	$('#tax_selector').change(function(){
		//console.log($(this));
		var type = $(this).val();	
			
		if(type!='')
		ap_methods.load_sub_items(type);

	  
   	});
	
	$('div.ap_shortcode code, div.ap_shortcode div').click(function(){
		
		var o = $( "div.ap_shortcode.hide > a" );
		
		
	});
	
	
    setInterval(highlightBlock, 10000); 

    function highlightBlock() {        
          $('.ap_video_tutorial').css('color', 'red').fadeIn(10000);
          setTimeout(function() {
                 $('.ap_video_tutorial').css('color', 'blue').fadeOut(10000);
          }, 10000); 
    }	
	
	$('.ap_video_tutorial').click(function(){
		 $('.ap_video_slide').fadeIn('slow');
	});
	
	$('.ap_slide_close').click(function(){
		 $('.ap_video_slide').hide();
	});
	
	setTimeout(function(){ jQuery('#tax_selector').change(); jQuery('.ap_allowed_pages').change(); }, 3000);
	
	$('#ap_lang_selector').on('change', function(){
		var val = $(this).val().toLowerCase();
		var sel = 'ul.ap_pagination';
		$(sel).hide();

		$(sel+'.ap_'+val).fadeIn();
	});
});
function disable_ap_letters(obj){
	//console.log(obj);
	if(jQuery(obj).length>0){
		var obj = jQuery(obj);
		
		var letter = obj.find('a').html();
		//obj.html(letter); 
	}
}