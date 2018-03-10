/*======================================*\
|| #################################### ||
|| # Post Thank You Hack version 7.83+# ||
|| # Original version by Abe1         # ||
|| # Updated by Phaedrus & Hippy      # ||
|| #################################### ||
\*======================================*/
var post_thanks_handleSuccess = function(o)
{
	if(o.responseText !== undefined)
	{
		if (post_thanks_callback.object_name[o.tId] !== undefined)
		{
			fetch_object(post_thanks_callback.object_name[o.tId]).innerHTML = o.responseText;
		}
	}
}
var post_thanks_handleFailure = function(o)
{
	if(o.responseText !== undefined)
	{
		alert(o.responseText);
	}
}
var post_thanks_callback =
{
	success: post_thanks_handleSuccess,
	failure: post_thanks_handleFailure,
	timeout: vB_Default_Timeout,
	cache: false,
	object_name: new Array()
};
function post_thanks_give(postid, integrate)
{
	fetch_object('post_thanks_button_' + postid).style.display = 'none';
	fetch_object('post_thanks_separator_' + postid).style.display = 'none';

	if (integrate == true)
	{
		fetch_object('post_groans_button_' + postid).style.display = 'none';
	}

	var sUrl = 'post_thanks.php';
	var postData = 'do=post_thanks_add&using_ajax=1&p=' + postid + '&securitytoken=' + SECURITYTOKEN;

	var request = YAHOO.util.Connect.asyncRequest('POST', sUrl, post_thanks_callback, postData);

	post_thanks_callback.object_name[request.tId] = 'post_thanks_box_' + postid;

	fetch_object('post_thanks_box_' + postid).style.display = '';

	return false;
}
function post_thanks_remove_all(postid, integrate)
{
	var sUrl = 'post_thanks.php';
	var postData = 'do=post_thanks_remove_all&using_ajax=1&p=' + postid + '&securitytoken=' + SECURITYTOKEN;

	var request = YAHOO.util.Connect.asyncRequest('POST', sUrl, post_thanks_callback, postData);

	post_thanks_callback.object_name[request.tId] = 'post_thanks_box_' + postid;

	fetch_object('post_thanks_button_' + postid).style.display = ''
	fetch_object('post_thanks_separator_' + postid).style.display = '';

	if (integrate == true)
	{
		fetch_object('post_groans_button_' + postid).style.display = '';
	}

	fetch_object('post_thanks_box_' + postid).style.display = 'none';

	return false;
}
function post_thanks_remove_user(postid, integrate)
{
	var sUrl = 'post_thanks.php';
	var postData = 'do=post_thanks_remove_user&using_ajax=1&p=' + postid + '&securitytoken=' + SECURITYTOKEN;

	var request = YAHOO.util.Connect.asyncRequest('POST', sUrl, post_thanks_callback, postData);

	post_thanks_callback.object_name[request.tId] = 'post_thanks_box_' + postid;

	fetch_object('post_thanks_button_' + postid).style.display = ''
	fetch_object('post_thanks_separator_' + postid).style.display = '';

	if (integrate == true)
	{
		fetch_object('post_groans_button_' + postid).style.display = '';
	}

	fetch_object('post_thanks_box_' + postid).style.display = 'none';

	return false;	
}