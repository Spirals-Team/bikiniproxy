var $j = jQuery.noConflict();

function likeThisSetCookie(c_name,value,exdays)
{
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; path=/; expires="+exdate.toUTCString());
  document.cookie=c_name + "=" + c_value;
}


function likeThisGetCookie(c_name)
{
  var i,x,y,ARRcookies=document.cookie.split(";");
  for (i=0;i<ARRcookies.length;i++)
  {
    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x=x.replace(/^\s+|\s+$/g,"");
    if (x==c_name) {
      return unescape(y);
    }
  }
}

$j(document).ready(function () {
  function reloadLikes(resp, $element) {
    $element.replaceWith(resp.element);
    if(resp.add) {
      likeThisSetCookie("like_" + resp.id, resp.id, 365);
    } else {
      likeThisSetCookie("like_" + resp.id, "", -1);
    }
  } //reloadLikes

  var requestInProgress = false;
  $j(document).on("click", ".likeThis", function (e) {
    if(requestInProgress) {
      return false;
    }

    requestInProgress = true;
    e.preventDefault();
    e.stopPropagation();
    $element = $j(e.target);
    $element.toggleClass("done");
    var id = e.target.getAttribute("data-post-id");
    var direction = likeThisGetCookie("like_" + id);

    $j.ajax({
      type: "POST",
      url: like_this_ajax_object.ajax_url,
      data: {
        action: "like_this_like_post",
        likepost: id,
        direction: direction ? -1 : 1
      },
      success: function (resp) {
        reloadLikes(resp, $element);
        requestInProgress = false;
      }
    });
  });
});
