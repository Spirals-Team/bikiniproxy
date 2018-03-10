// add slide swiping events
var snapPoints = new Array;
var xCoords = new Array;
var yCoords = new Array;
var millis = new Array;
var allowScrollV = true;
var allowScrollH = true;


function startup() {
	  var el = document.getElementById("slideshow");
	  try
	  {
	  el.addEventListener("touchstart", handleStart, false);
	  el.addEventListener("touchend", handleEnd, false);
	  el.addEventListener("touchcancel", handleCancel, false);
	  el.addEventListener("touchleave", handleEnd, false);
	  el.addEventListener("touchmove", handleMove, false); 
	  }
	  catch(e)
	  {
	  }
	  buildSnapPoints();
}	
	
function handleStart(evt) {
  	evt.preventDefault();
	var touch = evt.targetTouches[0];
}



function handleMove(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  xCoords.push(touches[0].pageX);
  yCoords.push(touches[0].pageY);
  
  var d = new Date();
  millis.push(d.getTime());

  if(xCoords.length > 1)
  {
	  // check angle first
	  if(checkAngle() < 15 && allowScrollH == true)
	  {

		  // move slide
		  allowScrollV = false;
		  var toMove = getMoveValue(xCoords[xCoords.length - 2], xCoords[xCoords.length - 1]);
		  var currPos = $("#slide_container").position().left;
		  $("#slide_container").css('left', currPos + toMove + "px");
	  }
	  else if(checkAngle() >= 15 && allowScrollV == true)
	  {
		allowScrollH = false; // don't allow horizontal scrolling during this touch session
		var toMove = getMoveValueY(yCoords[yCoords.length - 2], yCoords[yCoords.length - 1]);
		$("body").scrollTop($("body").scrollTop() - toMove);
		
	  }
  }

}


function handleEnd(evt) {


    evt.preventDefault();

  if (xCoords.length > 1)
  {
  var threshold = .3
  
  var x1 = xCoords[0];
  var x2 = xCoords[xCoords.length - 1];

  var threshold = $(".curr_slide").width() * threshold;

  if (Math.abs(x2 - x1) > threshold)
  {
        if ((x2 - x1) > 0)
	{
		createNextSlide(getPrev(current));
		//snapTo();
	}
	else
	{
		createNextSlide(getNext(current));
		//snapTo();		
	}
  }
  else if (Math.abs(x2 - x1) > ($(".curr_slide").width() * .1) && getVelocity() < 200)
  {	
	 if ((x2 - x1) > 0)
	{
		createNextSlide(getPrev(current));
		//snapTo();
	}
	else
	{
		createNextSlide(getNext(current));
		//snapTo();		
	}
  }
  else
  {
    easeBack()
  }
  
  

  }
  else
  {
  // since we only have one coordinate, we can assume the user is trying to click a feature - simulate that action.
  document.location.href = links[current][0].childNodes[0].href;
  }
 
  // start over
  allowScrollV = true;
  allowScrollH = true;
  xCoords = []; 
  yCoords = [];
  millis = [];
}

function handleCancel(evt) {

}

function getMoveValue(x1, x2)
{
	return (x2 - x1);
}


function getMoveValueY(y1, y2)
{
	return (y2 - y1);
}


function buildSnapPoints()
{
	snapPoints = [];
	var slideW = $("#slideshow").width();
	for (i=0; i < titles.length; i++)
	{
		snapPoints.push(i * slideW * -1);
	}
}


function jumpBack()
{
	$("#slide_container").css({"left":snapPoints[current] + "px"});  // Set the left to its calculated position
}


function easeBack()
{
var left = getPXval($("#slide_container").css("left"));  // Get the calculated left position
$("#slide_container").css({left:left})  // Set the left to its calculated position
             .animate({"left":snapPoints[current] + "px"}, "normal");
}


function snapTo()
{
var left = getPXval($("#slide_container").css("left"));  // Get the calculated left position
$("#slide_container").css({left:left})  // Set the left to its calculated position
             .animate({"left": snapPoints[current] + "px"}, "normal");		 
}


function getVelocity()
{
	if (millis.length > 0)
	{
		var timebetween  = millis[millis.length - 1] - millis[0];
		return timebetween;
	}
	else
		return 0;
}


function checkAngle()
{
	if (xCoords.length >= 2 && yCoords.length >= 2){
		try {
		
		var angle = Math.abs(Math.atan((yCoords[yCoords.length - 1] - yCoords[yCoords.length - 2]) / (xCoords[xCoords.length - 1] - 

xCoords[xCoords.length - 2])) * (180 / Math.PI));
		return angle;
		}
		catch(e){
			return 0
		}
	}
	else
	{
		return 0;
	}
		
}