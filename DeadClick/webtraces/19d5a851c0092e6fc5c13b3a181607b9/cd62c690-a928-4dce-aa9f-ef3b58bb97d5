function theChampInitiateFB() {
    FB.init({
        appId: theChampFBKey,
        channelUrl: "//" + theChampSiteUrl + "/channel.html",
        status: !0,
        cookie: !0,
        xfbml: !0,
        version: "v2.11"
    })
}
window.fbAsyncInit = function() {
        theChampInitiateFB(), theChampFbIosLogin && theChampAuthUserFB(), "function" == typeof theChampDisplayLoginIcon && theChampDisplayLoginIcon(document, ["theChampFacebookButton", "theChampFacebookLogin"]), ((typeof theChampCommentNotification != 'undefined' && theChampCommentNotification == 1) || (typeof theChampHeateorFcmRecentComments != 'undefined' && theChampHeateorFcmRecentComments == 1)) && FB.Event.subscribe("comment.create", function(e) {
            if(typeof e.commentID != 'undefined' && e.commentID){
            	if(typeof theChampCommentNotification != 'undefined' && theChampCommentNotification == 1){
            		jQuery.ajax({
		                type: "POST",
		                dataType: "json",
		                url: theChampSiteUrl + "/index.php",
		                data: {
		                    action: "the_champ_moderate_fb_comments",
		                    data: e
		                },
		                success: function(a,b,c) {}
		            });
            	}
            	if(typeof theChampHeateorFcmRecentComments != 'undefined' && theChampHeateorFcmRecentComments == 1){
            		jQuery.ajax({
		                type: "POST",
		                dataType: "json",
		                url: theChampSiteUrl + "/index.php",
		                data: {
		                    action: "heateor_fcm_save_fb_comment",
		                    data: e
		                },
		                success: function(a,b,c) {}
		            });
            	}
            }
        }), typeof theChampFbLikeMycred != 'undefined' && theChampFbLikeMycred && (FB.Event.subscribe("edge.create", function(e) {
            heateorSsmiMycredPoints("Facebook_like_recommend", "", e ? e : "")
        }), FB.Event.subscribe("edge.remove", function(e) {
            heateorSsmiMycredPoints("Facebook_like_recommend", "", e ? e : "", "Minus point(s) for undoing Facebook like-recommend")
        })), typeof theChampSsga != 'undefined' && theChampSsga && (FB.Event.subscribe("edge.create", function(e) {
            heateorSsgaSocialPluginsTracking("Facebook", "Like", e ? e : "")
        }), FB.Event.subscribe("edge.remove", function(e) {
            heateorSsgaSocialPluginsTracking("Facebook", "Unlike", e ? e : "")
        }))
    },
    function(e) {
        var t, n = "facebook-jssdk",
            o = e.getElementsByTagName("script")[0];
        e.getElementById(n) || (t = e.createElement("script"), t.id = n, t.async = !0, t.src = "//connect.facebook.net/" + theChampFBLang + "/sdk.js", o.parentNode.insertBefore(t, o))
    }(document);