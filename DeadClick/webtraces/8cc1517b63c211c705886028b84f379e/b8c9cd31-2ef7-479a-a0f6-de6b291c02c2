jQuery(document).ready(function($) {
   // Show comment source
    $('a.ShowSource').livequery('click', function() {
      var btn = this;
      var container = $(btn).parents('li.ItemComment');
      var parent = $(container).find('div.Comment');
      var msg = $(parent).find('div.Message');
	var src = $(parent).find('div.CommentSource');
	if ($(msg).is(':visible')) {
	    if ($(src).is(':visible')) {
		$('.CommentSource').hide();
		$(src).hide();
	    } else {
		$('.CommentSource').hide();
		$(src).show();
	    }
	} else {
	    $(parent).find('div.EditCommentForm').remove();
            $(msg).show();
	    $(src).show();
	}
       return false;
    });
    $('a.CopyLink').livequery('click', function(e) {
	var btn = this;
	var container = $(btn).parents('li.ItemComment');
	var link = $(container).find('a.Permalink');
	var opts = $(container).find('span.OptionsMenu');
	var url = link.attr('href');
	$('#copylink').text(window.location.protocol + '//' + window.location.host + url);
	$('#copylinkctr').css({position:"absolute", height:"auto", width:"auto", whiteSpace:"nowrap", visibility:"hidden"});
	var xpos = $(opts).offset().left - $('#copylinkctr').width();
	var ypos = $(opts).offset().top + $(opts).height() + $(opts).css('padding-top');
	$('#copylinkctr').css({position:"absolute", left:xpos,top:ypos, display:"block", visibility:"visible"});
	selectElementText($('#copylink').get(0));
	return false;
    });
    $('#copylinkdis').livequery('click', function() {
	$('#copylinkctr').hide();
	return false;
    });
    $('a.EditComment').livequery('click',function () {
	$('.CommentSource').hide();
	return false;
    });
});

function selectElementText(el, win) {
    win = win || window;
    var doc = win.document, sel, range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}
