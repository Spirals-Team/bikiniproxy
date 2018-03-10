jQuery(document).ready(function($) {
	
		 /*
		 *	Check if the like box has loaded. If yes then remove loader and add animation class!
		 */

	
		  if ($(".efbl_feed_wraper .efbl_custom_likebox")[0] || $(".widget_easy_facebook_page_plugin .efbl-like-box")[0] ){
		  	
		  	if (typeof FB === 'undefined' || FB === null) {
		  			setTimeout(function(){ $('.efbl-loader').remove(); }, 3000);
		  		
			}
			else{

				FB.Event.subscribe('xfbml.render', function(response) {
			    	var animclasses = $('.efbl-like-box .fb-page').data('animclass');
			    	
			    	$('.efbl-loader').remove();

			    	$('.efbl-like-box iframe').addClass('animated ' + animclasses);
			    	
			    });	
			}
			    

		    }
 		
 		// Magic function that will prepare and render markup.
 		function efbl_render_poup_markup(object){
 					
 		
 					var $story_link			= object.data('storylink'),
						$story_link_text 	= object.data('linktext'),
						$caption			= object.data('caption'),
						$image_url			= object.data('imagelink'),
						$iframe_vid_url 	= object.data('videolink'),
						$video_url 			= object.data('video'),
						$itemnumber 		= object.data('itemnumber'),
						$windowWidth 		= window.innerWidth,
						$windowHeight 		= window.innerHeight - 200;

						$('.white-popup .efbl_popup_left_container').css({
										      "width": "auto",
										      "height": "auto",
										    });

						$('.efbl_popup_image').css('height', 'auto');

					if($image_url){
						$('#efblcf_holder .efbl_popup_image').attr('src', $image_url);
						$('#efblcf_holder .efbl_popup_image').css('display', 'block');
					}
					
					if($iframe_vid_url){
						$('#efblcf_holder .efbl_popup_if_video').attr('src', $iframe_vid_url);
						$('#efblcf_holder .efbl_popup_if_video').css({
																	   'display' : 'block',
																	   'width' : '720px',
																	   'height' : '400px'
																	});
						
					}
						
					if($video_url){
						$('#efblcf_holder .efbl_popup_video').attr('src', $video_url);
						$('#efblcf_holder .efbl_popup_video').css('display', 'block');
						setTimeout(function(){
											$('#efblcf_holder .efbl_popup_video')[0].play();
 						}, 500);
						
						 
					}

					//$('.efbl-popup-next').attr('data-itemnumber', $itemnumber+1);
					//$('.efbl-popup-prev').attr('data-itemnumber', $itemnumber-1);

					
					
					$('.efbl_feed_wraper #item_number').val($itemnumber);

					if($caption){
						$('#efblcf_holder .efbl_popupp_footer').html('<p>'+$caption+' <br> <a class="efbl_popup_readmore" href="'+$story_link+'" target="_blank">'+$story_link_text+'</a></p>');
						$('#efblcf_holder .efbl_popupp_footer').css('display', 'block');
					}

 		}

 		function reset_popup_holder(){
			//Clear the container for new instance
			$('#efblcf_holder .efbl_popup_image').attr('src', '');
			$('#efblcf_holder .efbl_popup_image').css('display', 'none');
			
			$('#efblcf_holder .efbl_popup_if_video').attr('src', '');
			$('#efblcf_holder .efbl_popup_if_video').css('display', 'none');
			
			$('#efblcf_holder .efbl_popup_video').attr('src', '');
			$('#efblcf_holder .efbl_popup_video').css('display', 'none');
			
			$('#efblcf_holder .efbl_popupp_footer').html('');
			$('#efblcf_holder .efbl_popupp_footer').css('display', 'none');
 		}

		 $('.efbl_feed_popup').magnificPopup({
			type: 'ajax',
			tLoading: 'Loading...',
          	preloader: false,
			mainClass: 'mfp-fade',
			
			callbacks: {

				ajaxContentAdded: function() {
				    // Ajax content is loaded and appended to DOM

				    efbl_render_poup_markup(this.st.el);
				  },

				  beforeOpen: function() {
					// console.log(this.st.el);

					
					// efbl_render_poup_markup(this.st.el);
					
				  },

				  beforeClose: function (){
					   	
					reset_popup_holder();
					  
				  }
			}
						
			
			
 		  });
		 
		 $('.efbl_share_links').click(function(){
 				$(this).next('.efbl_links_container').slideToggle("slow");			   
		 });
		 
		 $('.efbl_info').click(function(){
 				$(this).siblings('.efbl_comments_wraper').slideToggle("slow");		   
		 });
		 
		 $('body').on('click','.efbl-popup-next',function(){

		 	//reset the existing content
		 	reset_popup_holder();


		 	var $next_pre_itemnumber = $('.efbl_feed_wraper #item_number').val();
		 	
		 	$next_pre_itemnumber = parseInt ($next_pre_itemnumber) + 1; 
		 	//var	$next_pre_itemnumber = $self.data('itemnumber');

		 	var feed_wraper_id = $(this).parents( "#efblcf_holder" ).data('rand_id');
		 		

		 	var numItems = $( "#efbl_feed_"+feed_wraper_id + " .efbl_feed_popup" ).length

		

		 	if($next_pre_itemnumber > numItems){
		 		
		 		$next_pre_itemnumber = 1;
		 	}	
	
			efbl_render_poup_markup($('.efbl-cff-item_number-' + $next_pre_itemnumber));
		
			//$('.mfp-close').trigger('click');

		 	// setTimeout(function(){
		 	// 	$('.efbl-cff-item_number-'+$next_pre_itemnumber).trigger('click');
		 	// }, 320)
		 	

		 });

		 $('body').on('click','.efbl-popup-prev',function(){

		 	//reset the existing content
		 	reset_popup_holder();

		 	var $next_pre_itemnumber = $('.efbl_feed_wraper #item_number').val();
		 	
		 	var feed_wraper_id = $(this).parents( "#efblcf_holder" ).data('rand_id');
		 	var numItems = $( "#efbl_feed_"+feed_wraper_id + " .efbl_feed_popup" ).length

 		 	if($next_pre_itemnumber == 1){
		 		$next_pre_itemnumber = numItems;
		 	}else{
		 		$next_pre_itemnumber = parseInt($next_pre_itemnumber) - 1; 

		 	}

		 	efbl_render_poup_markup($('.efbl-cff-item_number-'+$next_pre_itemnumber));			 	

		 });
});