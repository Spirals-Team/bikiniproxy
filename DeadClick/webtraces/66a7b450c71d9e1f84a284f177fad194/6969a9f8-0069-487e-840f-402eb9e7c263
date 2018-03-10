/* Copyright 2017, Oracle and/or its affiliates. All rights reserved.
 * Contact: Jordan Douglas
 * Version: 2017.07.15
 * Legal Notices: http://docs.oracle.com/cd/E23003_01/html/en/cpyr.htm
 */

window.ohcglobal = "1.0.0";

(function () {

//for IE without debug console open
if (!window.console) {
  window.console = {
    log: function () {}
  };
}

// Polyfill for String.endsWith
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.lastIndexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}

function addCss(rules, id) {
  var style = document.createElement('style');
  style.setAttribute("id", id);
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = rules;
  } else {
    style.appendChild(document.createTextNode(rules));
  }
  document.getElementsByTagName("head")[0].appendChild(style);
};


function removeElement(id) {
  var element = document.getElementById(id);
  if(element !== null) {
    element.parentNode.removeChild(element);
  }
}

// Test for JavaDoc content when only main window should be used
function isMainFramePart() {
    var elements = document.getElementsByTagName('frameset');
    var filename = location.pathname.split("/").pop();
    if(elements.length > 0 || filename.endsWith("-frame.html")) {
        return false;
    } else {
        return true;
    }
}

function isNotFramed() {
    try {
        return window.self === window.top;
    } catch (e) {
        return true;
    }
}

//test for http[s] so we can know if we are using other protocols like file://
function isHttp() {
    if(window.location.href.split('/')[0].indexOf("http") === 0) {
        return true;
    } else {
        return false;
    }
}

function addSiteCatalyst() {
  console.log("global.js site catalyst load");
  var oraScript = document.createElement('script');
  oraScript.type = "text/javascript";
  oraScript.src = "https://www.oracleimg.com/us/assets/metrics/ora_docs.js";
  document.getElementsByTagName('head')[0].appendChild(oraScript);
}

//runs after dom and after a 2 second delay to allow other scripts to finish
function delayedFunction() {
  //detect if sitecatalyst is needed
  if(isHttp() && isMainFramePart() && window.oraVersion == null) {
    addSiteCatalyst();
  }
}

//runs after dom
function onLoad() {
  console.log("global.js onLoad");
  window.setTimeout(delayedFunction, 2000);
}

// code below runs the onLoad method above after the dom is loaded
//if (window.jQuery) {
//  $(function(){
//    onLoad();
//  });
//} else
if (document.readyState == 'complete') {
  onLoad();
} else if (window.addEventListener) {
  window.addEventListener('load', onLoad, false);
}  else if (window.attachEvent) {
  window.attachEvent('onload', onLoad);
} else {
  window.onload = onLoad;
}

})();
