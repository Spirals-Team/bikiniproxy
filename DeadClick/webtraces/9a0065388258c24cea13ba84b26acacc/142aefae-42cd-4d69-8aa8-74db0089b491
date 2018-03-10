(function() {

  var opt = window._lrc;
  var adwords_id = getOptValue("aw_lrid", opt);
  var ds_id = getOptValue("ds_lrid", opt);
  var test_mode = getOptValue("test_mode", opt);
  var debug = getOptValue("debug", opt);

  function printDebug(msg) {
    if (debug === true) {
      var elt = document.getElementById("debug");
      elt.innerHTML = elt.innerHTML + "<br/>" + msg;
    }
  }

  function getOptValue(value, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][0] === value) {
        return array[i][1];
      }
    }
    return undefined;
  }

  function pingLiveRamp(customer_id, gclid, id) {
    var protocol = location.protocol === "https:" ? "https:" : "http:";
    var img = new Image();
    img.src = protocol + "//idsync.rlcdn.com/"+ customer_id + ".gif?n=" + id + "&partner_uid=" + gclid;
    printDebug("Fetching " + img.src);
    if (test_mode === true) {
      document.body.insertBefore(img, document.body.lastChild);
    }
  }

  function singleSafeSplit(s, c) {
    var res = ["",""];
    if (s) {
      var pos = s.indexOf(c);
      if (pos < 0) {
        pos = s.length;
      }
      res = [s.substring(0, pos), s.substring(pos + 1)];
    }
    return res;
  }

  function processGclid(s) {
    printDebug("Searching gclid in " + s);
    var processed = false;
    var query = singleSafeSplit(s, "?")[1];
    var params = query.split("&");
    for (var i = 0; i < params.length; i++) {
      var kv = singleSafeSplit(params[i], "=");
      if (kv[0] === "gclid") {
        var gclid = kv[1];
      }
      if (kv[0] === "gclsrc") {
        var type = kv[1];
      }
    }

    if (gclid) {
      if (adwords_id && (!type || type === "aw.ds")) {
        pingLiveRamp(adwords_id, gclid, 1);
        processed = true;
      }
      if (ds_id && (type === "aw.ds" || type === "ds")) {
        pingLiveRamp(ds_id, gclid, 2);
        processed = true;
      }
    }
    return processed;
  }

  function main() {
    var result = processGclid(window.location.search);
    if (result === false) {
      processGclid(document.referrer);
    }
  }

  main();

})();
