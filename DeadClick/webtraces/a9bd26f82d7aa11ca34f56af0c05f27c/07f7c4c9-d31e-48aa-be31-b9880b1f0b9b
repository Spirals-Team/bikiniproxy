$(function(){
	
	var note = $('#note'),
		ts = new Date(2016, 3, 24, 22),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "&nbsp;&nbsp;";
			
			message += "Day" + ( days==1 ? '':'s' ) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			message += " Hour" + ( hours==1 ? '':'s' ) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			message += " Minute" + ( minutes==1 ? '':'s' ) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			message += " Second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			
			
			note.html(message);
		}
	});
	
});
