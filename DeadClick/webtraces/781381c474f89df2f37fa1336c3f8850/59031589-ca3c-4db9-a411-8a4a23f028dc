/**
 * @author Michael Pih (mpih@getactive.com)
 * @version $Id$
 **/


/**
 * Redirects or pops open a new window to the printer-friendly mode of the page. 
 * The original request URI and query string are preserved.
 *
 * Example usages:
 *     <a href="javascript:doPrinterFriendly()">Printable View</a>
 *    or 
 *     <a href="javascript:doPrinterFriendly('pf_guest_list')">Printable View</a>
 *
 * @param target A target window, defaults to 'print'
 */
function doPrinterFriendly(target) {
  var requestURL  = window.location.href.split("#")[0].split("?")[0];
  var queryString = window.location.search.substring(1);
  var bookmark = window.location.hash.substring(1);

  var pfQueryString = "";
  if (queryString != "") {
    var vars = queryString.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if (pair[0] == "print") {
        // Ignore the "print" request parameter.
      } else {
        // Append the request parameter to the query string.
        if (i > 0) {
          pfQueryString += "&";
        }
        pfQueryString += pair[0] + "=" + pair[1];
      }
    }
    pfQueryString += "&";
  }

  // Redirect to the printer-friendly mode of the page.
  pfQueryString += "print=t";

  var pfRequestURL = requestURL + "?" + pfQueryString;
  if (bookmark != "") {
    pfRequestURL += "#" + bookmark;
  }

  if (target == null) {
    target = 'print';
  }
  window.open(pfRequestURL, target);

  return;
}
