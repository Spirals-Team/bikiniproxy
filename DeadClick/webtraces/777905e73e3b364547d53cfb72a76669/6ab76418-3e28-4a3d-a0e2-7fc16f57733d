//function for fruitful_tab_link_shortcode onclick
var js_link_to_tab = function(element, item){
	index = 0;
	this_class = "";
	while (this_class != "ffs-tabbed-nav" && index <= 250){
		index++;
		element = element.parentNode;
		this_class = element.className.split(' ')[0];
	}
	element.childNodes[0].childNodes[item-1].click();
}
