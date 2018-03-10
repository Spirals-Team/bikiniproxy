/**
 * $Source$
 * $Author$
 * $Revision$
 * $Date$
 *
 * ====================================================================
 *
 * Copyright (C) 2002-04 Frontleaf. All Rights Reserved.
 *
 * Use, modification and distribution of this Software in source or 
 * object form is strictly prohibited without prior agreement 
 * with Frontleaf.  Frontleaf reserves all rights not expressly granted to
 * you in such an agreement.  
 * 
 * Send all inquiries to license (at) frontleaf.com.
 **/

function getExpirationDate(days) {

  var dateString;

  var today = new Date();
  var millis = Date.parse(today);
  today.setTime(millis + days * 24 * 60 * 60 * 1000);
  dateString = today.toString();

  return dateString;
}

function setCookie(name, value, days){

  var cookieString = name + "=" + escape(value) + 
    ";EXPIRES=" + getExpirationDate(days) + ";PATH=/";
  document.cookie = cookieString;

  if(! getCookie(name)){
    return false;
  } else {
    return true;
  }
}

function getCookie(name) {

  var cookieString = "" + document.cookie;

  var start = cookieString.indexOf(name);
  if (start == -1 || name == "") { return ""; }

  var end = cookieString.indexOf(';', start);
  if (end == -1) { end = cookieString.length; }

  return unescape(cookieString.substring(start + name.length + 1, end));
}

function deleteCookie(name) {
  setCookie(name, "", -1);
}