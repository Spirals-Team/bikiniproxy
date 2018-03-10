
<!--
// Image Swap Restore
function MM_swapImgRestore() { //v2.0
  if (document.MM_swapImgData != null)
    for (var i=0; i<(document.MM_swapImgData.length-1); i+=2)
      document.MM_swapImgData[i].src = document.MM_swapImgData[i+1];
}
// Image Swap
function MM_swapImage() { //v2.0
  var i,j=0,objStr,obj,swapArray=new Array,oldArray=document.MM_swapImgData;
  for (i=0; i < (MM_swapImage.arguments.length-2); i+=3) {
    objStr = MM_swapImage.arguments[(navigator.appName == 'Netscape')?i:i+1];
    if ((objStr.indexOf('document.layers[')==0 && document.layers==null) ||
        (objStr.indexOf('document.all[')   ==0 && document.all   ==null))
      objStr = 'document'+objStr.substring(objStr.lastIndexOf('.'),objStr.length);
    obj = eval(objStr);
    if (obj != null) {
      swapArray[j++] = obj;
      swapArray[j++] = (oldArray==null || oldArray[j-1]!=obj)?obj.src:oldArray[j];
      obj.src = MM_swapImage.arguments[i+2];
  } }
  document.MM_swapImgData = swapArray; //used for restore
}
function MM_showHideLayers() { //v2.0
  var i, visStr, args, theObj;
  args = MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) { //with arg triples (objNS,objIE,visStr)
    visStr   = args[i+2];
    if (navigator.appName == 'Netscape' && document.layers != null) {
      theObj = eval(args[i]);
      if (theObj) theObj.visibility = visStr;
    } else if (document.all != null) { //IE
      if (visStr == 'show') visStr = 'visible'; //convert vals
      if (visStr == 'hide') visStr = 'hidden';
      theObj = eval(args[i+1]);
      if (theObj) theObj.style.visibility = visStr;
  } }
}


function pulldown(formObj)
	{
		url = formObj.options[formObj.options.selectedIndex].value;
		if(url != "empty")
			{
			window.location = url;
			url = "";
			}
	}
	

// This checks to see if the window's dimensions have actually changed
// (because Netscape often fires a false onResize event when it forms scrollbars);
// if they have, the document is reloaded.
// Note that document.location is not supposed to be settable, but here's another
// case where the implementation does not match the specs.

function resizeFix(){
  if(document.resizeFix.initWidth!=window.innerWidth
   ||document.resizeFix.initHeight!=window.innerHeight)
      document.location=document.location;
}

// This function checks to see if the browser supports the Layer object (i.e., Netscape 4.X);
// if it does, then it creates a new object with properties to hold the current window width & height
// and assigns the resizeFix() function to the window's onResize event

function checkBrowser(){
  if(document.layers){
    if(typeof document.fix == "undefined"){
      document.resizeFix=new Object();
      document.resizeFix.initWidth=window.innerWidth;
      document.resizeFix.initHeight=window.innerHeight;
    }
    window.onresize=resizeFix;
  }
}

// This calls the browser check function above

checkBrowser();




//-->
