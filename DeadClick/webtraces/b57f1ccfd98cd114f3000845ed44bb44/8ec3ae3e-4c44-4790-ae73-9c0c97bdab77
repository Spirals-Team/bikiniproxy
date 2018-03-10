var wrs_survey = {
    renderPopup: function() {

        return false;
    }
}
// Load wr_survey03/js/main.js. Limit cache time to 30 minutes.
var now = Date.now || function() {
    return +new Date
},
url = "https://ec.europa.eu/wel/surveys/wr_survey03/js/main.js?" + Math.floor(now() / (30 * 60 * 1000)),
callback, head = document.getElementsByTagName("head")[0],
script = document.createElement("script");
script.type = "text/javascript";
script.src = url;
callback || (callback = function() {});
script.addEventListener ? script.addEventListener("load", callback, !1) : script.readyState && (script.onreadystatechange = callback);
head.appendChild(script);