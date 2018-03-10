$('#tracery').bind('input propertychange', function() {
	generate();
	unsaved = true;
	changeSaveButtonColour();
});

$('#frequency').change(function() {
	unsaved = true;
	changeSaveButtonColour();
});


$('#public_source').change(function() {
	unsaved = true;
	changeSaveButtonColour();
});


$('#does_replies').change(function() {
	unsaved = true;
	changeSaveButtonColour();

	console.log($('#does_replies').val() );
	if ($('#does_replies').val() == 0)
	{
		$('#reply_rules_container').addClass('hidden');
		$("#reply_rules").expanding('destroy');
		$("#test_mention").expanding('destroy');
	}
	else
	{
		$('#reply_rules_container').removeClass('hidden');
		$("#reply_rules").expanding();
		$("#test_mention").expanding();

		generate_reply();
	}
});

if ($("#reply_rules").is(":visible"))
{
	$("#reply_rules").expanding();
	$("#test_mention").expanding();
}


$('#reply_rules').bind('input propertychange', function() {
	unsaved = true;
	changeSaveButtonColour();

	generate_reply();
});



$('#test_mention').bind('input propertychange', function() {

	generate_reply();
});

$( "#refresh-generated-reply" ).bind( "click", function() {
  generate_reply();
});



$( "#refresh-generated-tweet" ).bind( "click", function() {
  generate();
});


$(window).bind('beforeunload', function(e){
	if (unsaved) return "This page is asking you to confirm that you want to leave - data you have entered may not be saved";
});



$(window).load(function() {
	if (tracery.createGrammar)
	{
		generate();
	}
	else
	{
		_.defer(generate, 500);
	}
  
});

var valid = true;
var replyrules_valid = true;

nl2br = function (str, is_xhtml) {   
	var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';    
	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
};


// this is much more complex than i thought it would be
// but this function will find our image tags 
// full credit to BooDooPerson - https://twitter.com/BooDooPerson/status/683450163608817664
// Reverse the string, check with our fucked up regex, return null or reverse matches back
var matchBrackets = function(text) {
  
  // simple utility function
  function reverseString(s) {
    return s.split('').reverse().join('');
  }

  // this is an inverstion of the natural order for this RegEx:
  var bracketsRe = /(\}(?!\\)(.+?)\{(?!\\))/g;

  text = reverseString(text);
  var matches = text.match(bracketsRe);
  if(matches === null) {
    return null;
  }
  else {
    return matches.map(reverseString).reverse();
  }
};


//see matchBrackets for why this is like this
function removeBrackets (text) {
  
  // simple utility function
  var reverseString = function(s) {
    return s.split('').reverse().join('');
  }

  // this is an inverstion of the natural order for this RegEx:
  var bracketsRe = /(\}(?!\\)(.+?)\{(?!\\))/g;

  text = reverseString(text);
  return reverseString(text.replace(bracketsRe, ""));
}


var validate_reply_rules = function()
{
	var string = $('textarea#reply_rules').val();
	try
	{
		var parsed = jQuery.parseJSON(string); 

		var regexes_valid = _.all(parsed, function(val, key, index)
		{
			try
			{
				var regex = new RegExp(key);
				return true;
			}
			catch (e)
			{
				$('#replyrules-validator').removeClass('hidden').html("RegExp parse error for rule " + key + ":  <pre>" + _.escape(e) + "</pre>");
				return false;
			}
		})

		if (regexes_valid)
		{
			$('#replyrules-validator').addClass('hidden').text("Parsed successfully");
			replyrules_valid = true;
		}
		else
		{
			replyrules_valid = true;
		}

	}
	catch (e) {


		try {
			var result = jsonlint.parse(string);
			if (result) {
				//valid via jsonlint?!
				$('#replyrules-validator').removeClass('hidden').text("Unknown JSON parse error: " + _.escape(e));
			}
		} catch(e) {
			$('#replyrules-validator').removeClass('hidden').html("JSON parse error:  <pre>" + _.escape(e) + "</pre>");
		}

		replyrules_valid = false;
	}


	$('#save-button').toggleClass('disabled', !(valid && replyrules_valid));
};

var generate_reply = function()
{
	validate_reply_rules();
	if (replyrules_valid && processedGrammar != null)
	{
		var mention = $('textarea#test_mention').val();

		if (mention.indexOf("@" + screen_name) == -1) //if we're not @ed
		{
			$('#generated-reply').html("<i>Not mentioned</i>" + "<div id=\"reply-media\"></div>");
		}
		else
		{
			var reply_rules = jQuery.parseJSON($('textarea#reply_rules').val()); //could be quicker if we only parse this once
			var origin = _.find(reply_rules, function(origin,rule) {
				return (new RegExp(rule)).test(mention);
			});
			var reply = processedGrammar.flatten(origin);



			var media = matchBrackets(reply);
			var just_text_tweet = removeBrackets(reply);

			if (reply == "")
			{
				$('#generated-reply').html("<i>No reply</i>" + "<div id=\"reply-media\"></div>");
			}
			else
			{
				$('#generated-reply').html(nl2br(_.escape(just_text_tweet)) + "<div id=\"reply-media\"></div>");
			}


			if (twttr.txt.getTweetLength(just_text_tweet) > 280)
			{
				$('#generated-reply').addClass('too-long');
			}
			else
			{
				$('#generated-reply').removeClass('too-long');
			}


			_.each(media, function(media){

				var unescapeOpenBracket = /\\{/g;
				var unescapeCloseBracket = /\\}/g;
				media = media.replace(unescapeOpenBracket, "{");
				media = media.replace(unescapeCloseBracket, "}");

				if (media.indexOf("svg ") === 1)
				{
					var actualSVG = media.substr(5,media.length - 6);

					var parser = new DOMParser();
					var doc = parser.parseFromString(actualSVG, "image/svg+xml");
					

				    validateSVG(doc, actualSVG);


					$('#reply-media').append("<div class=\"svg-media\">" + actualSVG + "</div>");
				}
				else if (media.indexOf("img ") === 1)
				{
					fetch_img, media.substr(5)
				}
				else
				{
					$('#replyrules-validator').removeClass('hidden').text("Unknown media type " + media.substr(1,4));
				}
			});
		}

	}
	else
	{
		$('#generated-reply').html("---").attr('disabled','disabled').addClass('disabled');
	}
};

generate_reply = _.throttle(generate_reply, 500);


var tweet; //global so we can see it when we press the tweet button
var processedGrammar; //global so it can be used for replies
var generate = function()
{
	processedGrammar = null;
	var string = $('textarea#tracery').val();
	try{
		var parsed = jQuery.parseJSON(string);
		try
		{

			$('#tracery-validator').addClass('hidden').text("Parsed successfully");


			processedGrammar = tracery.createGrammar(parsed);

			processedGrammar.addModifiers(tracery.baseEngModifiers);
			tweet = processedGrammar.flatten("#origin#");

			var media = matchBrackets(tweet);
			var just_text_tweet = removeBrackets(tweet);
			$('#generated-tweet').html(nl2br(_.escape(just_text_tweet)) + "<div id=\"tweet-media\"></div>");

			if (twttr.txt.getTweetLength(just_text_tweet) > 280)
			{
				$('#generated-tweet').addClass('too-long');

				$('#tweet-generated-tweet').attr('disabled','disabled').addClass('disabled');
			}
			else
			{
				$('#generated-tweet').removeClass('too-long');
				$('#tweet-generated-tweet').removeAttr('disabled').removeClass('disabled');
			}
 

			_.each(media, function(media){

				var unescapeOpenBracket = /\\{/g;
				var unescapeCloseBracket = /\\}/g;
				media = media.replace(unescapeOpenBracket, "{");
				media = media.replace(unescapeCloseBracket, "}");

				if (media.indexOf("svg ") === 1)
				{
					var actualSVG = media.substr(5,media.length - 6);

					var parser = new DOMParser();
					var doc = parser.parseFromString(actualSVG, "image/svg+xml");
					

				    validateSVG(doc, actualSVG);


					$('#tweet-media').append("<div class=\"svg-media\">" + actualSVG + "</div>");
				}
				else if (media.indexOf("img ") === 1)
				{
					fetch_img, media.substr(5)
				}
				else
				{
					$('#tracery-validator').removeClass('hidden').text("Unknown media type " + media.substr(1,4));
				}
			});

			valid = true;

		}
		catch (e)
		{



			$('#tracery-validator').removeClass('hidden').text("Tracery parse error: " + _.escape(e));
			valid = false;
		}
	}
	catch (e) {


		try {
			var result = jsonlint.parse(string);
			if (result) {
				//valid via jsonlint?!
				$('#tracery-validator').removeClass('hidden').text("Unknown JSON parse error: " + _.escape(e));
			}
		} catch(e) {
			$('#tracery-validator').removeClass('hidden').html("JSON parse error:  <pre>" + _.escape(e) + "</pre>");
		}

		valid = false;
	}

	$('#save-button').toggleClass('disabled', !(valid && replyrules_valid));

	if ($("#reply_rules").is(":visible"))
	{
		generate_reply();
	} 
};

generate = _.throttle(generate, 500);

var unsaved = false;

$( window ).unload(function() {
	if (unsaved)
	{
		return "Unsaved changes";
	}
});

var validateSVG = function(doc, actualSVG)
{
	var parser = new DOMParser();
	var parsererrorNS = parser.parseFromString('INVALID', 'text/xml').getElementsByTagName("parsererror")[0].namespaceURI;


    if (doc.documentElement.getAttribute("width") === null)
    {
    	$('#tracery-validator').removeClass('hidden').html("SVG element must specify a <code>width</code>");
    }
    if (doc.documentElement.getAttribute("height") === null)
    {
    	$('#tracery-validator').removeClass('hidden').html("SVG element must specify a <code>height</code>");
    }
/*
    if (doc.documentElement.getAttribute("xmlns") === null)
    {
    	$('#tracery-validator').removeClass('hidden').html("SVG element should probably specify a <code>xmlns</code> attribute.");
    }
    if (doc.documentElement.getAttribute("xmlns:xlink") === null)
    {
    	$('#tracery-validator').removeClass('hidden').html("SVG element should probably specify a <code>xmlns:xlink</code> attribute.");
    }*/


	if(doc.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0) {

	var excerpt = "";
	//chrome
	var bracketsRe = /line (\d+) at column (\d+)/;
	var errorText = new XMLSerializer().serializeToString(doc.documentElement);
	var matches = errorText.match(bracketsRe);
	if(matches !== null) {
	var line = matches[1];
	var col = matches[2];
		excerpt = excerptAtLineCol(actualSVG, matches[1] - 1, matches[2] - 1, 1);
	}

	


        $('#tracery-validator').removeClass('hidden').html("SVG parsing error<br><pre>" + _.escape(excerpt) + "</pre><span class=\"parsererror\">" + nl2br(doc.getElementsByTagName('parsererror')[0].innerHTML) + "</span>");
    }

}

//from https://github.com/smallhelm/excerpt-at-line-col/blob/master/index.js

var excerptAtLineCol = function(text, line_n, col_n, n_surrounding_lines){
  n_surrounding_lines = n_surrounding_lines || 0;

  return text.split("\n").map(function(line, line_i){
    return {
      line: line,
      line_n: line_i
    };
  }).filter(function(l){
    return Math.abs(l.line_n - line_n) <= n_surrounding_lines;
  }).map(function(l){
    if(l.line_n !== line_n){
      return l.line;
    }
    var col_position_whitespace = '';
    var j;
    for(j=0; j<Math.min(col_n, l.line.length); j++){
      col_position_whitespace += l.line[j].replace(/[^\s]/g, " ");
    }
    return l.line + "\n" + col_position_whitespace + '^';
  }).join("\n");
};


var changeSaveButtonColour = function()
{
	if (unsaved) $('#save-button').removeClass('btn-default').addClass('btn-primary');
	else $('#save-button').removeClass('btn-primary').addClass('btn-default');
};

$('#tweet-generated-tweet').click(function()
{
	$.ajax({
	  url: "tweet.php",
	  method : "POST",
	  data : {"tweet": tweet},
	  dataType: "json"	  
	})
	  .done(function( data ) {
		if (data.hasOwnProperty('success') && data['success'])
		{

			$('#tweet-generated-tweet').attr('disabled','disabled').addClass('disabled');
			$('#tracery-validator').addClass('hidden');
		}
		else {
			$('#tracery-validator').removeClass('hidden').text("Failed to tweet: " + (data.hasOwnProperty('reason') && data['reason']));
		}
	  })
	  .fail( function( jqXHR, textStatus ) {
			$('#tracery-validator').removeClass('hidden').text("Failed to tweet: " + textStatus);
		});
});


$(window).bind('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        switch (String.fromCharCode(event.which).toLowerCase()) {
        case 's':
            event.preventDefault();
            save();
            break;
        }
    }
});


$( "#tracery-form" ).submit(function( event ) {
  event.preventDefault();
  save();
});

var save = function()
{
  if (valid && replyrules_valid)
  {
	var freq = $('#frequency').val();
	var tracery = $('#tracery').val();
	var public_source = $('#public_source').val();
	var does_replies = $('#does_replies').val();
	var reply_rules = $('#reply_rules').val();
	$.ajax({
	  url: "update.php",
	  method : "POST",
	  data : {"frequency": freq , "tracery" : tracery, "public_source" : public_source, "does_replies" : does_replies, "reply_rules" : reply_rules},
	  dataType: "json"
	})
	  .done(function( data ) {
		if (data.hasOwnProperty('success') && data['success'])
		{
			$('#tracery-validator').addClass('hidden');
			unsaved = false;
			changeSaveButtonColour();
		}
		else {
			$('#tracery-validator').removeClass('hidden').text("Failure uploading: " + (data.hasOwnProperty('reason') && data['reason']));
		}
	  }) 
	  .fail( function( jqXHR, textStatus ) {
			$('#tracery-validator').removeClass('hidden').text("Failure uploading: " + textStatus);
		});
	
  }
}

$(document).delegate('#tracery', 'keydown', function(e) {
  var keyCode = e.keyCode || e.which;

  if (keyCode == 9) {
	e.preventDefault();
	var start = $(this).get(0).selectionStart;
	var end = $(this).get(0).selectionEnd;

	// set textarea value to: text before caret + tab + text after caret
	$(this).val($(this).val().substring(0, start)
				+ "\t"
				+ $(this).val().substring(end));

	// put caret at right position again
	$(this).get(0).selectionStart =
	$(this).get(0).selectionEnd = start + 1;
  }
});


$(document).delegate('#reply_rules', 'keydown', function(e) {
  var keyCode = e.keyCode || e.which;

  if (keyCode == 9) {
	e.preventDefault();
	var start = $(this).get(0).selectionStart;
	var end = $(this).get(0).selectionEnd;

	// set textarea value to: text before caret + tab + text after caret
	$(this).val($(this).val().substring(0, start)
				+ "\t"
				+ $(this).val().substring(end));

	// put caret at right position again
	$(this).get(0).selectionStart =
	$(this).get(0).selectionEnd = start + 1;
  }
});


