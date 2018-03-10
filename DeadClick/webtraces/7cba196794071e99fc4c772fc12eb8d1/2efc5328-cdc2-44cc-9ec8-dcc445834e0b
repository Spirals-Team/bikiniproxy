window["OBPixel"] = window["OBPixel"] || (function(doc,win) {

  if(!win.OB_ADV_ID &&  //We really need this var
    (win.OB_ADV_ID.push !== Array.prototype.push || typeof win.OB_ADV_ID.push === "number")) {
    return false;
  }

  var t, my = {}, obAdvId = win.OB_ADV_ID;

  /**
   * Run over the id/ids and create img for each
   */
  my.init = function() {
    var a;
    clearInterval(my.wait);//Stop the searching

    if(typeof obAdvId === "number") {
      my.injectImg(obAdvId);
    } else { //Its array !!
      for(t = 0; t < obAdvId.length; t += 1) {
        a = parseInt(obAdvId[t], 10);
        if(typeof a === "number") {
          my.injectImg(a);
        }
      }
    }
  };


  /***
   * Generate a URL
   * @param advId
   * @returns {string}
   */
  my.getUrl = function(advId) {
    var obUrl = (("https:" === doc.location.protocol) ? "https://" : "http://");
    obUrl += "traffic.outbrain.com/network/trackpxl?advid=" + advId + "&action=view&r=" + Math.floor(Math.random()*10000);

    //Optionally add referrer to the URL
    var referrerUrl = doc.referrer;
    if((typeof referrerUrl === "string") && (referrerUrl.length > 0)) {
      obUrl += "&refurl=" + encodeURIComponent(referrerUrl);
    }
    return obUrl;
  };

  /***
   * Inject an img into the dom
   * @param advId
   */
  my.injectImg = function(advId) {
    var obImg = doc.createElement('img');
    obImg.src =  my.getUrl(advId);
    obImg.id = "OB_" + advId;
    obImg.style.display = "none";

    if (!doc.body) {return;} //Might happens
    doc.body.appendChild(obImg);

    //And remove it afterwards
    setTimeout(function() {
      obImg.parentNode.removeChild(obImg);
    }, 200);
  };

  //Triggers the init when Dom is ready
  my.wait = setInterval(function() {
    if(doc.readyState === "complete") {
      my.init();
  }
  }, 30);

}(document,window));