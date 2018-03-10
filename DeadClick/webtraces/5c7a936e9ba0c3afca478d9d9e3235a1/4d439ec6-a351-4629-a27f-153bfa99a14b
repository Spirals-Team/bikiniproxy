_satellite.pushBlockingScript(function(event, target, $variables){
  /* Check for Truste consent before firing the Bluekai-Maxymiser addon */
if((_satellite.getVar('truste_consent') != 1) && (_satellite.getVar('truste_consent') != 2)) {
  jQuery.getScript("//tags.bluekai.com/site/46606?ret=js")
    .done(function() {
      // do nothing
      //console.log(bk_results);
    })
    .fail(function() {
      console.log("Failed to load data");
  });
}  
  



});
