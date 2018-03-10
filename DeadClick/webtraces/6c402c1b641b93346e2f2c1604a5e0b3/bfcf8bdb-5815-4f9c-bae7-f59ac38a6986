jQuery(document).ready(function($){
	/*
	*	Accordion
	************************************/

	$('.acc-box-title').click(function(e){
		var $boxWrap = $(this).closest('.acc-box-wrap');
		
		if($boxWrap.hasClass('open')){
			$boxWrap.removeClass('open');
			$boxWrap.find('.acc-box-content').slideUp(500);
		}else{
			$boxWrap.addClass('open');
			$boxWrap.find('.acc-box-content').slideDown(500);
		}
	});

	/*
	*	Tabs
	************************************/
	$('.tabs-title li').click(function(e){
		var parent = $(this).closest('.dm-tabs').get(0);
		var list = $(parent).find('.tabs-title li').get();
		var index = $.inArray(this, list);

		$(parent).find('.tabs-title .current').removeClass('current');
		$(this).addClass('current');

		$(parent).find('.tabs-body .current').removeClass('current');
		var content = $(parent).find('.tabs-body li').get();
		$(content[index]).addClass('current');
	});

	$('.tabs-title h4').click(function(e){
		$(this).closest('li').click();
	});


	/*
	*	Contact form
	***********************************/

	$('.dm-contact-form').submit(function(e){
			e.preventDefault();
			var form = $(this);
			$.post($(form).attr('action'), $(form).serialize() , function(response){
				if( response.error != "false" ){
				   $(form).get(0).reset();
				   alert(response.message);
				}
				else{
				   alert('Error: ' + response.message);
				}
			}, "json");

			return false;
	   });

});

