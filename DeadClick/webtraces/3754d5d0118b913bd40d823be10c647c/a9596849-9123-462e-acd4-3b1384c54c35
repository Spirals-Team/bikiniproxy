jQuery(document).ready(function(){
/** lb_l_ret */

/* pre-construct code! */
jQuery('body').append(construct_code());

	if (lb_l_ret.show_once>0 && readCookie("arevico_lb")==1)
	{

	} else {

		window.setTimeout(show_facebox, lb_l_ret.delay)
	}

});

function show_facebox(){
	if (lb_l_ret.show_once>0){
		createCookie("arevico_lb", "1", lb_l_ret.show_once);
	}
$jarevico('a#inline').arevicofancy({
	'modal': false,
	'padding' : 0,
	'autoDimensions':false,
	'width' : '400',
	'height': 'auto',
	'scrolling'          : 'no',
	'centerOnScroll' : true,
	'hideOnOverlayClick' : (lb_l_ret.coc == 1)
	}).trigger('click');
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

/**
 *
 * @access public
 * @return void
 **/
function construct_code(){
fbl_otp='<a id="inline" href="#arvlbdata" style="display: none;">Show</a><div style="display:none"><div id="arvlbdata" style="overflow:hidden;' + '' + '">';
fbl_otp += '<iframe src="//www.facebook.com/plugins/likebox.php?id=' + lb_l_ret.fb_id +'&amp;width=' + '400' + '&amp;height=' + '255' +'&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=false&amp;header=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:' + '400' + 'px; height:' + '255' + 'px;" allowTransparency="true"></iframe>';
fbl_otp +='</div></div>';
return fbl_otp;
}
