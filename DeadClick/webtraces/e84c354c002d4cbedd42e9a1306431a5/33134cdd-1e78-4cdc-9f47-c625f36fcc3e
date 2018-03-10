function change_fontsize(id, type){
	
	var minimum_size = '10';
	var maximum_size = '25;';
	var fontarea = document.getElementById(id);
	var font_size = fontarea.style.fontSize.replace("px","");
	if(!font_size){ font_size = '12'; }
	
	if(type == 'increase' && font_size < maximum_size){
			
		font_size++;
		
	}
	
	
	if(type == 'decrease' && font_size > minimum_size){
	
		font_size--;
		
	}
		
	document.getElementById(id).style.fontSize = font_size+"px";
	
}