var topMargin = 0;
var destination = 0;
var currentY = 0;
(document.getElementById) ? dom = true : dom = false;

function start(top) {
  this.topMargin = top;
  if (dom && !document.all)
  {	destination = window.pageYOffset + (window.innerHeight - (window.innerHeight-topMargin));
	currentY = parseInt(document.getElementById("WPS_popup_message").style.top);
	if(destination - currentY >= 5) document.getElementById("WPS_popup_message").style.top = currentY + 5 + 'px';
	else if (currentY - destination >= 5) document.getElementById("WPS_popup_message").style.top = currentY - 5 + 'px';
  }
  if (document.all) 
  {	destination = document.documentElement.scrollTop + (document.documentElement.clientHeight - (document.documentElement.clientHeight-topMargin));
	currentY = parseInt(document.all["WPS_popup_message"].style.top);
	if(destination - currentY >= 5) document.all["WPS_popup_message"].style.top = currentY + 5 + "px";
	else if(currentY - destination >= 5) document.all["WPS_popup_message"].style.top = currentY - 5 + "px";
  }
  window.setTimeout("start(topMargin)", 5); 
}

