/* 
	User Submitted Posts > JavaScript > Core
	@ https://perishablepress.com/user-submitted-posts/
*/
jQuery(document).ready(function($) {
	
	$('#usp_add-another').removeClass('usp-no-js');
	$('#usp_add-another').addClass('usp-js');
	
	// captcha check
	$('#usp_form').submit(function(e) {
		usp_captcha_check(e);
	});
	$('.usp-captcha .usp-input').change(function() { 
		usp_captcha_check();
	});
	function usp_captcha_check(e) {
		if (usp_case_sensitivity === 'true') var usp_casing = '';
		else var usp_casing = 'i';
		var usp_response = new RegExp(usp_challenge_response + '$', usp_casing);
		var usp_captcha = $('.user-submitted-captcha').val();
		if (typeof usp_captcha != 'undefined') {
			if (usp_captcha.match(usp_response)) {
				$('.usp-captcha-error').remove();
				$('.usp-captcha .usp-input').removeClass('parsley-error');
				$('.usp-captcha .usp-input').addClass('parsley-success');
			} else {
				if (e) e.preventDefault();
				$('.usp-captcha-error').remove();
				$('.usp-captcha').append('<ul class="usp-captcha-error parsley-errors-list filled"><li class="parsley-required">Incorrect response.</li></ul>');
				$('.usp-captcha .usp-input').removeClass('parsley-success');
				$('.usp-captcha .usp-input').addClass('parsley-error');
			}
		}
	}
	
	// remember input values
	function remember(selector){
		$(selector).each(function(){
			var name = $(this).attr('name');
			if($.cookie(name)){ $(this).val($.cookie(name)); }
			$(this).change(function(){$.cookie(name, $(this).val(), { path: '/', expires: 365 });});
		});
	}
	remember('[name=user-submitted-name]');
	remember('[name=user-submitted-url]');
	remember('[name=user-submitted-email]');
	remember('[name=user-submitted-title]');
	remember('[name=user-submitted-tags]');
	remember('[name=user-submitted-captcha]');
	remember('[name=user-submitted-category]');
	remember('[name=user-submitted-content]');
	
	// forget input values
	var re = /[?&]success=/;
	if (re.test(location.href)) {
		$.removeCookie('user-submitted-name', { path: '/' });
		$.removeCookie('user-submitted-url', { path: '/' });
		$.removeCookie('user-submitted-email', { path: '/' });
		$.removeCookie('user-submitted-title', { path: '/' });
		$.removeCookie('user-submitted-tags', { path: '/' });
		$.removeCookie('user-submitted-captcha', { path: '/' });
		$.removeCookie('user-submitted-category', { path: '/' });
		$.removeCookie('user-submitted-content', { path: '/' });
	}
	
	// parsely
	/*
	$.listen('parsley:field:validate', function() {
		validateFront();
	});
	*/
	$('#user-submitted-post').on('click', function() {
		// $('#usp_form').parsley().validate();
		validateFront();
	});
	$('.usp-callout-failure').addClass('usp-hidden').hide();
	var validateFront = function() {
		if (true === $('#usp_form').parsley().isValid()) {
			$('.usp-callout-failure').addClass('usp-hidden').hide();
		} else {
			$('.usp-callout-failure').removeClass('usp-hidden').show();
		}
	};
	// add another image
	var x = parseInt($('#usp-min-images').val());
	var y = parseInt($('#usp-max-images').val());
	if (x === 0) x = 1;
	if (x >= y) $('#usp_add-another').hide();
	$('#usp_add-another').click(function(e) {
		e.preventDefault();
		x++;
		var $this = $(this);
		var $new = $('#user-submitted-image').find('input:visible:last').clone().val('').attr('style', 'display:block;');;
		$('#usp-min-images').val(x);
		if (x < y) {
			$this.before($new.fadeIn(300));
		} else if (x = y) {
			$this.before($new.fadeIn(300));
			$this.hide();
		} else {
			$this.hide();
		}
		$new.removeClass('usp-required-file');
	});
});
