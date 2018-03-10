var tAuthority = "www.oracle.com";
var tSchema = "db102";
var partNumber = "B19306-01";
var navBackground = "#A4C3DF";
var scrollBar = "auto";
var dcommonPath = "../../dcommon/";
var navPath = "../../nav/";
var breadcrumbs = document.createElement("div");


/*
  Copyright 2006, 2015, Oracle and/or its affiliates. All rights reserved.
  Author: Robert Crews
  Version: 2015.05.14
*/

var linkcategories = {
    rank_advanced      : "http://www.oracle.com/pls/db102/ranked?advanced=1",
    homepage           : "../../index.htm",
    master_index       : "../../nav/mindx.htm",
    master_glossary    : "../../nav/mgloss.htm"
  };

var l10n = {
    search_button : "Search",
    this_book : "This Book",
    entire_library : "Entire Library",
    this_release   : "This Release",
    reference : "Reference",
    home : "Home",
    master_index : "Master Index",
    master_glossary : "Master Glossary",
    master_book_list : "Master Book List",
    main_categories : "Categories",
    security : "Security",
    contents : "Table of Contents",
    new_changed : "New and changed documents",
    reader_comment : "Reader Comment",
    subject : "Subject",
    from : "From",
    anonymous : "Anonymous",
    or : " (or ",
    sign_in : "Sign In",
    comment_first_part : "Comments, corrections, and suggestions are forwarded to authors every week.",
    comment_second_part : "By submitting, you confirm you agree to the ",
    comment_third_part : "terms and conditions",
    comment_fourth_part : ". ",
    comment_fifth_part : "Use the ",
    comment_fifth_part_otn : "OTN forums",
    comment_sixth_part : " for product questions. ",
    comment_seventh_part : "For support or consulting, file a service request through ",
    comment_eighth_part : "My Oracle Support",
    submit : "Submit",
    need_an_example : "Need an example?",
    tell_us_more : "Tell us more",
    click_to_expand : "Click to expand",
    expand_all : "Expand All",
    collapse_all : "Collapse All",
    main_categories : "Categories",

    show_navigation         : "Show Navigation",
    hide_navigation         : "Hide Navigation",
    search_button           : "Search",
    this_book               : "This Book",
    advanced_search         : "Advanced Search",
    hide                    : "hide",
    show                    : "show",
    reference               : "Reference",
    home                    : "Home",
    master_index            : "Master Index",
    master_glossary         : "Master Glossary",
    master_book_list        : "Master Book List",
    contents                : "Table of Contents",
    new_changed             : "New and changed documents",
    reader_comment          : "Reader Comment",
    subject                 : "Subject",
    from                    : "From",
    anonymous               : "Anonymous",
    or                      : " (or ",
    sign_in                 : "Sign In",
    comment_first_part      : "Comments, corrections, and suggestions are forwarded to authors every week.",
    comment_second_part     : "By submitting, you confirm you agree to the ",
    comment_third_part      : "terms and conditions",
    comment_fourth_part     : ". ",
    comment_fifth_part      : "Use the ",
    comment_fifth_part_otn  : "OTN forums",
    comment_sixth_part      : " for product questions. ",
    comment_seventh_part    : "For support or consulting, file a service request through ",
    comment_eighth_part     : "My Oracle Support",
    submit                  : "Submit",
    need_an_example         : "Need an example?",
    tell_us_more            : "Tell us more",
    click_to_expand         : "Click to expand",
    expand_all              : "Expand All",
    collapse_all            : "Collapse All"
  
}
;

function addLoadEvent(func) {
  "use strict";
  var oldOnload = window.onload;
  if (typeof window.onload !== "function") {
    window.onload = func;
  } else {
    window.onload = function () { oldOnload(); func(); };
  }
}

function createCookie(name, value, days) {
  "use strict";
  var date, expires = "";
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  "use strict";
  var i = 0, c, nameEQ = name + "=", ca = document.cookie.split(";");
  for (i = 0; i < ca.length; i += 1) {
    c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return "";
}
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON#Browser_compatibility
if (!window.JSON) {
//  "use strict";
  window.JSON = {
    parse: function (sJSON) { return eval("(" + sJSON + ")"); }
  };
}

function readBreadcrumbs() {
  var bd = document.getElementById("BREADCRUMBS");
  if (bd === null || bd === undefined) {
    function getHttpObject() {
        var xhr = false;
        if (window.XMLHttpRequest) {
          xhr = new window.XMLHttpRequest();
        } else if (window.ActiveXObject) {
          try {
            xhr = new window.ActiveXObject("Msxml2.XMLHTTP");
          } catch (e1) {
            try {
              xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e2) {
              xhr = false;
            }
          }
        }
        return xhr;
      }
    var request = getHttpObject();
    try {
      if (request) {
        request.onreadystatechange = function () {
          parseResponse_breadcrumbs(request);
        };
        request.open("GET", navPath + "breadcrumbs.json", true);
        request.send(null);
      }
    } catch (e) {
      thisDocument = document.createTextNode("");
    }
  } else {
    breadcrumbs = bd.cloneNode(true);
    breadcrumbs.id = "breadcrumbs";
  }
}
addLoadEvent(readBreadcrumbs);
function parseResponse_breadcrumbs(request) {
  var jso, home, prod, produrl, cat, caturl, i = 0, metas, pn, docid, homeA, catA,
    prodA, tabA;
  metas = document.getElementsByTagName("meta");
  for (i = 0; i < metas.length; i += 1) {
    if ((metas[i].name === "partno" || metas[i].name === "dcterms.identifier") &&
        metas[i].content.match(/^([A-Z]\d{5})[\-_]\d+$/)) {
      pn = RegExp.$1.toLowerCase();
    } else if ((metas[i].name === "docid" || metas[i].name === "dcterms.isVersionOf") &&
        metas[i].content.match(/^([A-Z]{5})$/)) {
      docid = RegExp.$1.toLowerCase();
    }
  }
  if (request.readyState === 4) {
    if (request.status === 200 || request.status === 304 || request.status === 0) {
      jso = window.JSON.parse(request.responseText);
      if (jso.home !== undefined) {
        home = jso.home;
        homeA = document.createElement("a");
        homeA.href = home;
        homeA.appendChild(document.createTextNode("Home"));
        breadcrumbs.appendChild(homeA);
      }
      if (jso.category !== undefined && jso.categoryurl !== undefined) {
        breadcrumbs.appendChild(document.createTextNode(" / "));
        cat = jso.category;
        caturl = jso.categoryurl;
        catA = document.createElement("a");
        catA.href = caturl;
        catA.appendChild(document.createTextNode(cat));
        breadcrumbs.appendChild(catA);
      }
      if (jso.product !== undefined && jso.producturl !== undefined) {
        breadcrumbs.appendChild(document.createTextNode(" / "));
        prod = jso.product;
        produrl = jso.producturl;
        prodA = document.createElement("a");
        prodA.href = navPath.replace("nav/", "").trim() + produrl;
        if (prod.indexOf("<") === -1 ) {
 	 prodA.appendChild(document.createTextNode(prod));
	} else {
	 prodA.innerHTML = prod;
	}
        breadcrumbs.appendChild(prodA);
      }

      if (jso.interface !== undefined && jso.interface.length > 1) {
        for (i = 0; i < jso.interface.length - 1; i += 1 ) {
            if (jso.interface[i].c.length > 0 && (jso.interface[i].c.indexOf(docid.toUpperCase()) !== -1 || jso.interface[i].c.indexOf(pn.toUpperCase()) !== -1)) {
              //alert("here" + jso.interface[i].t + " " + jso.interface[i].h + " " + pn + " " + docid);
                if (produrl !== jso.interface[i].h) {
                  breadcrumbs.appendChild(document.createTextNode(" / "));
                  tabA = document.createElement("a");
                  tabA.href = navPath.replace("nav/", "").trim() + jso.interface[i].h;
                  tabA.appendChild(document.createTextNode(jso.interface[i].t));
                  breadcrumbs.appendChild(tabA);
                  break;
                }
            }
        }
      }
  }
}
}

function leftNav() {
  "use strict";
  if (!document.createElement) { return false; }
  if (!document.createTextNode) { return false; }
  if (!document.getElementById) { return false; }
  if (!document.getElementsByTagName) { return false; }
  if (!document.documentElement.appendChild) { return false; }
  if (!document.documentElement.childNodes) { return false; }
  if (!document.documentElement.style) { return false; }

  //if (navigator.userAgent.match(/\bMobile\b/)) { return false; }
  try {
    if (window.location.href.match(/\/pls\//)) { return false; }
    if (window.location.href.match(/type=popup#/)) { return false; } // no nav for gloss pop up
    if (window !== window.top) { return false; } // show the nav only if the window is not in a frame
  } catch (ignore) {}

  var tahitiNav, tahitiNavFrame, showNav, divs, buttonsDiv, spanA,
    contDiv, headerEle, newDiv, rowDiv, navPart, imgNav, linkEle, newBookDiv,
    i1, prev, next, home, homeA, nextNav, prevA, nextA, prevImg, nextImg,
    beginA, newClass, indClass, showCont, pageNum, pageData, pageSpan, p1 = 0,
    share, exportAs, footer, i1 = 0, metaEle, i2 = 0, bookTitle, bookDiv, bottomDiv,
    spanPrev, spanPage, spanNext, bottomPrev, bottomNext, prevBImg, nextBImg,
    prevText, nextText;



  document.body.style.padding = "0";
  document.body.style.border = "0";

  tahitiNav = document.createElement("div");
  //tahitiNav.style.padding = "1ex 0.5em";
  tahitiNav.id = "leftsidebar";

  tahitiNavFrame = document.createElement("div");
  tahitiNavFrame.style.top = "0";
  tahitiNavFrame.style.bottom = "0";

  divs = document.getElementsByTagName("div");
  for (i1 = 0; i1 < divs.length; i1 += 1) {
    if (divs[i1].className.indexOf("IND ") !== -1) { footer = divs[i1]; }
  }

  contDiv = document.getElementById("CONTENT");
  //showNav = document.getElementById("NAVSHOW");
  bottomDiv = document.createElement("div");
  bottomDiv.id = "bar3";
  bottomDiv.className = "border-top glyph";
  bottomDiv.style.position = "relative";
  bottomDiv.style.textAlign = "center";
  spanPrev = document.createElement("span");
  spanPrev.style.position = "absolute";
  spanPrev.style.left = "8px";
  spanPrev.style.top = "8px";
  spanNext = document.createElement("span");
  spanNext.style.position = "absolute";
  spanNext.style.right = "8px";
  spanNext.style.top = "8px";
  buttonsDiv = document.createElement("div");
  buttonsDiv.style.textAlign = "center";
  share = document.createElement("button");
  share.type = "button";
  share.id = "feedback";
  share.appendChild(document.createTextNode("Feedback"));
  share.onclick = function() { setRating(this); return false;};
  buttonsDiv.appendChild(share);
  exportAs = document.createElement("button");
  exportAs.id = "download";
  exportAs.type = "button";
  exportAs.onclick = function() { setDownload(this); return false;};
  exportAs.appendChild(document.createTextNode("Download"));
  buttonsDiv.appendChild(exportAs);
  pageNum = document.getElementsByTagName("span");
  for (p1 = 0; p1 < pageNum.length; p1 += 1) {
    if (pageNum[p1].id=== "PAGE") { pageData = pageNum[p1].innerHTML; }
  }
  //alert(pageData);
  headerEle = document.getElementsByTagName('header')[0];

  metaEle = document.getElementsByTagName("meta");
  for (i2 = 0; i2 < metaEle.length; i2 += 1) {
    if (metaEle[i2].getAttribute("name") === 'title' || metaEle[i2].getAttribute("name") === 'Title'
        || metaEle[i2].getAttribute("name") === 'dcterms.title') {
      bookTitle = metaEle[i2].getAttribute("content");
    }
  }
  if (bookTitle) {
    //breadcrumbs = document.createElement("div");
    breadcrumbs.style.paddingTop = "1.5em";
    breadcrumbs.style.paddingBottom = "0.5em";
    breadcrumbs.style.paddingLeft = "15px";
    //breadcrumbs.appendChild(document.createTextNode("Breadcrumbs text"));
    //alert(breadcrumbs);
    //headerEle.appendChild(breadcrumbs);
    bookDiv = document.createElement("div");
    bookDiv.className = "titleDiv";
    bookDiv.appendChild(document.createTextNode(bookTitle));
    //headerEle.appendChild(bookDiv);
  }
  newDiv = document.createElement("div");
  //newDiv.style.background = "#EEEEEE";
  newDiv.style.marginLeft = "-20px";
  //newDiv.style.marginTop = "50px";
  newDiv.style.height = "38px";
  rowDiv = document.createElement("div");
  rowDiv.className = "row";
  rowDiv.style.background = "#f7f7f7";
  rowDiv.style.borderBottom = "1px solid #e8eef3";
  rowDiv.style.borderTop = "1px solid #e8eef3";
  rowDiv.style.marginLeft = "15px";
  rowDiv.style.height = "38px";
  navPart = document.createElement("div");
  navPart.id = "contnav";
  navPart.className = "large-3 medium-4 columns";
  navPart.style.textAlign = "left";
  navPart.style.paddingLeft = "0";
  navPart.style.borderRight = "1px solid #CBCBCB";
  navPart.style.height = "38px";
  showNav = document.createElement("a");
  showNav.href = "#";
  showNav.id = "NAVSHOW";
  imgNav = document.createElement("img");
  imgNav.id = "toctoggle";
  imgNav.width = "32";
  imgNav.height = "30";
  imgNav.src = dcommonPath+"img/hidetools.png";
  imgNav.alt = "Contents";
  showNav.appendChild(imgNav);
  navPart.appendChild(showNav);
  rowDiv.appendChild(navPart);
  linkEle = document.getElementsByTagName("link");
  for (i1 = 0; i1 < linkEle.length; i1 += 1) {
    if (linkEle[i1].getAttribute("rel") === 'next' || linkEle[i1].getAttribute("rel") === 'Next') {
      next = linkEle[i1].href;
    } else if (linkEle[i1].getAttribute("rel") === 'previous' || linkEle[i1].getAttribute("rel") === 'prev' || linkEle[i1].getAttribute("rel") === 'Prev' || linkEle[i1].getAttribute("rel") === 'Previous') {
      prev = linkEle[i1].href;
    } else if (linkEle[i1].getAttribute("rel") === 'Start' || linkEle[i1].getAttribute("rel") === 'start') {
        home = linkEle[i1].href;
    }
  }
  nextNav = document.createElement("div");
  nextNav.className = "large-5 medium-4 columns";
  nextNav.style.paddingLeft = "20px";
  nextNav.style.borderLeft = "1px solid #FFFFFF";
  //alert(prev);
  if (prev) {
    prevA = document.createElement("a");
    prevA.href = prev;
    prevA.id = "previous";
    prevImg = document.createElement("img");
    prevImg.width = "28";
    prevImg.height = "32";
    prevImg.alt = "Previous";
    prevImg.src = dcommonPath+"img/prev.png";
    prevImg.style.marginBottom = "0";
    prevA.appendChild(prevImg);
    nextNav.appendChild(prevA);
    bottomPrev = document.createElement("a");
    bottomPrev.href = prev;
    bottomPrev.title = "Go to previous page";
    prevBImg = document.createElement("span");
    prevBImg.className = "JetFW-caret-w_16";
    bottomPrev.appendChild(prevBImg);
    prevText = document.createElement("span");
    prevText.className = "hide-mobile-inline";
    prevText.appendChild(document.createTextNode("Previous Page"));
    bottomPrev.appendChild(prevText);
    //bottomPrev.id = "previous";
    /*prevBImg = document.createElement("img");
    prevBImg.width = "28";
    prevBImg.height = "32";
    prevBImg.alt = "Previous";
    prevBImg.src = dcommonPath+"img/prev.png";
    prevBImg.style.marginBottom = "0";*/
    //prevA.appendChild(prevImg);
    spanPrev.appendChild(bottomPrev);
  } else {
    prevBImg = document.createElement("span");
    prevBImg.className = "JetFW-caret-w_16";
    spanPrev.appendChild(prevBImg);
    prevText = document.createElement("span");
    prevText.className = "hide-mobile-inline";
    prevText.appendChild(document.createTextNode("Previous Page"));
    spanPrev.appendChild(prevText);
  }

  if (next) {
    nextA = document.createElement("a");
    nextA.href = next;
    nextA.id = "next";
    nextImg = document.createElement("img");
    nextImg.width = "28";
    nextImg.height = "32";
    nextImg.alt = "Next";
    nextImg.style.marginBottom = "0";
    nextImg.src = dcommonPath+"img/next.png";
    nextA.appendChild(nextImg);
    nextNav.appendChild(nextA);
    bottomNext = document.createElement("a");
    bottomNext.href = next;
    bottomNext.title = "Go to next page";
    nextText = document.createElement("span");
    nextText.className = "hide-mobile-inline";
    nextText.appendChild(document.createTextNode("Next Page"));
    bottomNext.appendChild(nextText);
    nextBImg = document.createElement("span");
    nextBImg.className = "JetFW-caret-e_16";
    bottomNext.appendChild(nextBImg);
    //bottomPrev.id = "previous";
    /*prevBImg = document.createElement("img");
    prevBImg.width = "28";
    prevBImg.height = "32";
    prevBImg.alt = "Previous";
    prevBImg.src = dcommonPath+"img/prev.png";
    prevBImg.style.marginBottom = "0";*/
    //prevA.appendChild(prevImg);
    spanNext.appendChild(bottomNext);
  } else {
    nextText = document.createElement("span");
    nextText.className = "hide-mobile-inline";
    nextText.appendChild(document.createTextNode("Next Page"));
    spanNext.appendChild(nextText);
    nextBImg = document.createElement("span");
    nextBImg.className = "JetFW-caret-e_16";
    spanNext.appendChild(nextBImg);
  }

  if (home) {
   homeA = document.createElement("a");
   homeA.href = home;
   homeA.className = "header-home-link";
   spanA = document.createElement("img");
   //spanA.className = "App-home_24";
   spanA.src = dcommonPath + "img/home.gif";
   spanA.style.position = "relative";
   homeA.appendChild(spanA);
   nextNav.appendChild(homeA);
  }
  rowDiv.appendChild(nextNav);
  spanPage = document.createElement("div");
  if (pageData) {
    pageSpan = document.createElement("span");
    pageSpan.className = "htmlpage";
    pageSpan.appendChild(document.createTextNode("Page " + pageData.replace("/", " of ")));
    rowDiv.appendChild(pageSpan);
    spanPage.appendChild(document.createTextNode("Page " + pageData.replace("/", " of ")));
  }
  bottomDiv.appendChild(spanPrev);
  bottomDiv.appendChild(spanPage);
  bottomDiv.appendChild(spanNext);
  footer.appendChild(bottomDiv);
  newDiv.appendChild(rowDiv);
  //headerEle.appendChild(newDiv);
  beginA = document.createElement("a");
  beginA.id = "BEGIN";
  newBookDiv = document.createElement("div");
  newBookDiv.style.position = "relative";
  newBookDiv.style.paddingTop = "55px";
  newBookDiv.appendChild(breadcrumbs);
  if (bookTitle)
  { newBookDiv.appendChild(bookDiv); }
  newBookDiv.appendChild(newDiv);
  //newBookDiv.appendChild(beginA);
  headerEle.parentNode.insertBefore(newBookDiv, headerEle.nextSibling);

  tahitiNavFrame.id = "NAV";
  tahitiNavFrame.className = "large-3 medium-4 columns";
  tahitiNavFrame.appendChild(tahitiNav);
  if (contDiv) {
    contDiv.insertBefore(tahitiNavFrame, contDiv.firstChild);
  }
  showNav.onclick = function () { navHidden(); return false; };
  if (
      window.name === "glossWindow" ||
      window.self !== window.top || window.screen.width < 620 || window.innerWidth < 620) { navHidden(); }
  
  function navVisible() {
    var nextImg, im = 0;
    tahitiNavFrame.style.display = "block";
    if (showNav) {
      newClass = showNav.parentNode.nextSibling.className;
      if (newClass.indexOf("resizenav") !== -1) {
        showNav.parentNode.nextSibling.className = newClass.substring(0, newClass.indexOf(" resizenav")) + " shownav";
      }
      indClass = contDiv.firstChild.nextSibling.nextSibling.className;
      if (indClass.indexOf("resizecont") === -1) {
        contDiv.firstChild.nextSibling.nextSibling.className = indClass + " resizecont";
      }
      showNav.parentNode.nextSibling.style.borderLeft = "1px solid #FFFFFF";
      nextImg = showNav.getElementsByTagName("img");
      for (im = 0; im < nextImg.length; im += 1) {
          nextImg[im].src = dcommonPath + "img/hidetools.png";
      }
      showNav.onclick = function () { navHidden(); return false; };
    }
    showCont = showNav.parentNode.className;
    if (showCont.indexOf("showcont") === -1) {
      showNav.parentNode.className = showCont + " showcont";
    }
    createCookie("ORA_TAHITI_NAV", "", -1);
  }

  function navHidden() {
    var nextImg, im = 0;
    tahitiNavFrame.style.display = "none";
    //document.body.style.marginLeft = "2em";
    //showNav.style.display = "block";
    if (showNav) {
      //alert(window.innerWidth);
      showNav.parentNode.style.width = "40px";
      showNav.parentNode.style.padding = "0";
      newClass = showNav.parentNode.nextSibling.className;
      if (newClass.indexOf(" resizenav") === -1) {
        if (newClass.indexOf(" shownav") !== -1) {
          newClass = newClass.substring(0, newClass.indexOf(" shownav"));
        }
        showNav.parentNode.nextSibling.className = newClass + " resizenav";
      }
      indClass = contDiv.firstChild.nextSibling.nextSibling.className;
      if (indClass.indexOf("resizecont") !== -1) {
        contDiv.firstChild.nextSibling.nextSibling.className = indClass.substring(0, indClass.indexOf(" resizecont"));
      }
      showCont = showNav.parentNode.className;
      if (showCont.indexOf(" showcont") !== -1) {
        showNav.parentNode.className = showCont.substring(0, showCont.indexOf(" showcont"));
      }
      //showNav.parentNode.nextSibling.style.borderLeft = "0 none";
      contDiv.firstChild.nextSibling.nextSibling.style.width = "97%";
      nextImg = showNav.getElementsByTagName("img");
      for (im = 0; im < nextImg.length; im += 1) {
          nextImg[im].src = dcommonPath + "img/showtools.png";
      }
      showNav.onclick = function () { navVisible(); return false; };
    }
    if (window.name !== "glossWindow" ||
        window.self === window.top) {
      createCookie("ORA_TAHITI_NAV", "hide");
    }
  }

  function navVisibleIe6() {
  }

  function navHiddenIe6() {
  }

  function addSimpleSearchForm() {
    var searchRemark, searchField, searchFieldLabel, searchSubmit, searchBook,
      searchBookLabel, searchLibrary, searchLibraryLabel, simpleSearchForm,
      metas, i = 0, product, book, searchURL, subSearchForm;

    searchRemark = document.createElement("input");
    searchRemark.type = "hidden";
    searchRemark.name = "remark";
    searchRemark.value = "quick_search";

    searchField = document.createElement("input");
    searchField.id = "searchField";
    searchField.type = "text";
    searchField.name = "word";

    searchFieldLabel = document.createElement("label");
    searchFieldLabel.htmlFor = "searchField";
    searchFieldLabel.appendChild(document.createTextNode(l10n.search_button));
    searchFieldLabel.style.position = "absolute";
    searchFieldLabel.style.left = "-10000px";
    searchFieldLabel.style.top = "auto";
    searchFieldLabel.style.width = "1px";
    searchFieldLabel.style.height = "1px";
    searchFieldLabel.style.overflow = "hidden";

    searchSubmit = document.createElement("input");
    searchSubmit.type = "submit";
    searchSubmit.id = "SEARCHBUTTON";
    searchSubmit.value = l10n.search_button;

    searchBook = document.createElement("input");
    searchBook.id = "searchBook";
    searchBook.type = "radio";
    searchBook.name = "searchby";
    searchBook.defaultChecked = true;
    searchBook.value = "book";
    searchBook.style.marginTop = "0.5em";
    //searchBook.onselect = function() {document.getElementById("searchbook").value = this.value;};


    searchBookLabel = document.createElement("label");
    searchBookLabel.htmlFor = "searchBook";
    searchBookLabel.style.fontSize = "12px";
    searchBookLabel.appendChild(document.createTextNode(" " + l10n.this_book));

    metas = document.getElementsByTagName("meta");
    for (i = 0; i < metas.length; i += 1) {
      if ((metas[i].name === "partno" || metas[i].name === "dcterms.identifier") &&
          metas[i].content.match(/^([A-Z]\d{5})[\-_]\d+$/)) {
        searchBook.value = RegExp.$1.toLowerCase();
      }
    }
    searchBook.onclick = function() {document.getElementById("searchbook").value = document.getElementById("searchBook").value;};
    product = document.createElement("input");
    product.type = "hidden";
    product.name = "product";
    product.id = "searchpro";
    product.value = partNumber.toLowerCase();

    book = document.createElement("input");
    book.type = "hidden";
    book.name = "book";
    book.id = "searchbook";
    book.value = searchBook.value;

    searchLibrary = document.createElement("input");

    searchLibrary.id = "searchLibrary";
    searchLibrary.type = "radio";
    searchLibrary.name = "searchby";
    //searchLibrary.defaultChecked = true;
    searchLibrary.value = "library";
    searchLibrary.onclick = function() {document.getElementById("searchbook").value = "";};

    searchLibraryLabel = document.createElement("label");
    searchLibraryLabel.htmlFor = "searchLibrary";
    searchLibraryLabel.style.fontSize = "12px";
    searchLibraryLabel.appendChild(document.createTextNode(" " + l10n.this_release));

    if (!searchBook.value.match(/^[a-z]\d{5}$/)) {
      //searchBook.style.display = "none";
      //searchBookLabel.style.display = "none";
      //searchLibrary.style.display = "none";
      //searchLibraryLabel.style.display = "none";
    }
    
    subSearchForm = document.createElement("form");

    simpleSearchForm = document.createElement("form");
    /*function setBase() {
     searchURL = window.location.hostname + "/";
     if (searchURL.indexOf("pdb-stage") !== -1) {
       searchURL = "http://" + searchURL;
     } else {
       searchURL = "https://" + searchURL;
     }
    }
    setBase();*/
    function setBaseNew() {
      searchURL = window.location.hostname + "/";
      if (searchURL.indexOf("pdb-stage") !== -1) {
        searchURL = "http://" + searchURL+"oracleSearch.jsp";
      } else {
        searchURL = "//" + searchURL + "apps/search/search.jsp";
      }
    }
    setBaseNew();
    simpleSearchForm.action = searchURL;
    //simpleSearchForm.action = searchURL + "/oracleSearch.jsp";
    simpleSearchForm.method = "get";

    //simpleSearchForm.appendChild(searchRemark);
    simpleSearchForm.appendChild(searchField);
    simpleSearchForm.appendChild(searchFieldLabel);
    simpleSearchForm.appendChild(document.createTextNode(" "));
    simpleSearchForm.appendChild(searchSubmit);
    simpleSearchForm.appendChild(document.createElement("br"));
    subSearchForm.appendChild(searchBook);
    subSearchForm.appendChild(searchBookLabel);
    subSearchForm.appendChild(document.createTextNode(" "));
    subSearchForm.appendChild(searchLibrary);
    subSearchForm.appendChild(searchLibraryLabel);
    simpleSearchForm.appendChild(product);
    simpleSearchForm.appendChild(book);


    subSearchForm.style.marginTop = "0";
    simpleSearchForm.style.marginBottom = "0";
    tahitiNav.appendChild(simpleSearchForm);
    tahitiNav.appendChild(subSearchForm);
    //return simpleSearchForm;

  }
  addSimpleSearchForm(tahitiNav);
  //tahitiNav.appendChild(addSimpleSearchForm());
  /*var advanced_link = document.createElement("a");
  advanced_link.href = linkcategories.rank_advanced;
  advanced_link.style.display = "block";
  //advanced_link.style.paddingBottom = "1.25rem";
  advanced_link.style.paddingTop = "2px";

  advanced_link.appendChild(document.createTextNode(l10n.advanced_search));
  tahitiNav.appendChild(document.createTextNode(" "));
  tahitiNav.appendChild(advanced_link);*/


  function extraContent() {
      var extraContent = document.getElementById("EXTRATOC"), newCont;
      if(extraContent !== null && extraContent !== undefined) {
             newCont = extraContent.cloneNode(true);
             newCont.id = "extratoc";
             tahitiNav.appendChild(newCont);
      }
  }
    extraContent();

function addThisDocument() {
    var heading, a, li1, ul, thisDocument,
      img, elist = [], iUrlStart = "../../dcommon/gifs/", aHref, h1Elements,
      nav_cookie_name = "ORA_" + "B19306_01" + "_NAV", error404 = 0,
      isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./),
      oraCloudNav = readCookie(nav_cookie_name);
    /*label = document.createElement("span");
    label.id = "hThisDocument";
    label.style.cssFloat = "right";
    label.style.styleFloat = "right";    label.style.fontSize = "12px";
    label.style.color = "#669";
    label.style.fontWeight = "normal";
    label.style.display = "none";
    if (navBackground === "white") {
      labelHide = document.createTextNode("");
      labelShow = document.createTextNode("");
    } else {
      labelHide = document.createTextNode(l10n.hide);
      labelShow = document.createTextNode(l10n.show);
    }
    label.appendChild(labelHide);*/

    heading = document.createElement("p");
    //heading.appendChild(label);
    heading.style.marginBottom = "0";
    ////heading.style.fontWeight = "bold";
    heading.style.borderBottom = "1px solid #EEE";
    heading.appendChild(document.createTextNode(l10n.contents));

    /*heading.style.cursor = "pointer";
    heading.onmouseover = function () {
      document.getElementById("hThisDocument").style.display = "inline";
    };
    heading.onmouseout = function () {
      document.getElementById("hThisDocument").style.display = "none";
    };
    heading.onclick = function () {
      if (document.getElementById("tThisDocument").style.display === "none") {
        document.getElementById("tThisDocument").style.display = "block";
        document.getElementById("hThisDocument").replaceChild(labelHide, labelShow);
      } else {
        document.getElementById("tThisDocument").style.display = "none";
        document.getElementById("hThisDocument").replaceChild(labelShow, labelHide);
      }
    };
    */
    thisDocument = document.createElement("div");

    a = document.createElement("a");

    function getHttpObject() {
      var xhr = false;
      if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest();
      } else if (window.ActiveXObject) {
        try {
          xhr = new window.ActiveXObject("Msxml2.XMLHTTP");
        } catch (e1) {
          try {
            xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
          } catch (e2) {
            xhr = false;
          }
        }
      }
      return xhr;
    }
    try {
      /*if (window.location.href.match(/\/toc\.htm(?:|#[ -~]*)$/)) {
        return document.createElement("span");
      }*/
      h1Elements = document.getElementsByTagName("h1");
      if (h1Elements[0] && h1Elements[0].className === "toc") {
        return document.createElement("span");
      }
    } catch (ignore) {}

  // cloud part
    function expandChild1(e) {
      e.onclick = function () { collapseChild(this); return false; };
      e.firstChild.src = iUrlStart + "minus.png";
      e.parentNode.getElementsByTagName("ul")[0].style.display = "block";
    }

    function expandChild(e) {
      if (oraCloudNav) {
        createCookie(nav_cookie_name,
          oraCloudNav + "," + e.parentNode.getElementsByTagName("ul")[0].id);
        oraCloudNav = readCookie(nav_cookie_name);
      } else {
        createCookie(nav_cookie_name,
          e.parentNode.getElementsByTagName("ul")[0].id);
        oraCloudNav = readCookie(nav_cookie_name);
      }
      expandChild1(e);
    }

    function collapseChild1(e) {
      var i = 0, hul,
        uls = e.parentNode.getElementsByTagName("ul"),
        imgs = e.parentNode.getElementsByTagName("img");
      e.onclick = function () { expandChild(this); return false; };
      for (i = 0; i < uls.length; i += 1) {
        oraCloudNav = oraCloudNav.replace(uls[i].id, "");
        oraCloudNav = oraCloudNav.replace(new RegExp(",+"), ",");
        oraCloudNav = oraCloudNav.replace(new RegExp("^,|,$"), "");
        if (oraCloudNav) {
          createCookie(nav_cookie_name, oraCloudNav);
          oraCloudNav = readCookie(nav_cookie_name);
        } else {
          createCookie(nav_cookie_name, "", -1);
          oraCloudNav = readCookie(nav_cookie_name);
        }
        uls[i].style.display = "none";
      }
      for (i = 0; i < imgs.length; i += 1) {
        hul = imgs[i].parentNode.parentNode.getElementsByTagName("ul");
        if (hul && hul.length > 0) {
          imgs[i].src = iUrlStart + "plus.png";
          imgs[i].parentNode.onclick = function () { expandChild(this); return false; };
        }
      }
    }

    function collapseChild2(e) {
      var i = 0, hul,
        uls = e.parentNode.getElementsByTagName("ul"),
        imgs = e.parentNode.getElementsByTagName("img");
      e.onclick = function () { expandChild(this); return false; };
      for (i = 0; i < uls.length; i += 1) {
        uls[i].style.display = "none";
      }
      for (i = 0; i < imgs.length; i += 1) {
        hul = imgs[i].parentNode.parentNode.getElementsByTagName("ul");
        if (hul && hul.length > 0) {
          imgs[i].src = iUrlStart + "plus.png";
          imgs[i].parentNode.onclick = function () { expandChild(this); return false; };
        }
      }
    }

    function collapseChild(e) {
      if (e.parentNode.getElementsByTagName("ul")[0] && e.parentNode.getElementsByTagName("ul")[0].id) {
        oraCloudNav =
          oraCloudNav.replace(e.parentNode.getElementsByTagName("ul")[0].id, "");
        oraCloudNav = oraCloudNav.replace(new RegExp(",+"), ",");
        oraCloudNav = oraCloudNav.replace(new RegExp("^,|,$"), "");
        if (oraCloudNav) {
          createCookie(nav_cookie_name, oraCloudNav);
          oraCloudNav = readCookie(nav_cookie_name);
        } else {
          createCookie(nav_cookie_name, "", -1);
          oraCloudNav = readCookie(nav_cookie_name);
        }
        collapseChild1(e);
      }
    }

    function showTopics() {
      var cExists = 1, j = 0, request = getHttpObject();

      function items(par, item, id) {
        if (item === undefined) { return; }
        var i = 0, ulH = document.createElement("ul"),
          li = document.createElement("li"),
          a1, a2, b = document.createElement("b"), nextID;
        if (item instanceof Array) {
          ulH.id = id;
          ulH.style.margin = "0";
          ulH.style.display = "block";
          //ulH.style.padding = "0 1px 0 14px";
          //ulH.style.textIndent = "-14px";
          ulH.style.listStyle = "none";
          for (i = 0; i < item.length - 1; i += 1) {
            if (item[i].a !== undefined) {
              nextID = item[i].a;
            } else {
              nextID = "";
            }
            if (item[i]) {
              par.appendChild(items(ulH, item[i]), nextID);
            }
          }
        } else {
          if (item.c && item.c.length > 0) {
            img = document.createElement("img");
            a1 = document.createElement("a");
            a2 = document.createElement("a");
            img.src = iUrlStart + "minus.png";
            img.alt = "open";
            img.width = "14";
            img.height = "14";
            a1.appendChild(img);
            a1.href = "#";
            a1.onclick = function () { collapseChild(this); return false; };
            a2.href = item.h;
          } else {
            a1 = document.createElement("a");
            a1.style.marginLeft = "14px";
            a1.appendChild(document.createTextNode(item.t));
            a1.href = item.h;
            li.appendChild(a1);
          }
          if (item.c && item.c.length > 0) {
            a2.appendChild(document.createTextNode(item.t));
            li.appendChild(a1);
            if (item.h) {
              li.appendChild(a2);
            } else {
              b.appendChild(document.createTextNode(item.t));
              b.style.color = "#66a";
              li.appendChild(b);
            }
          }
          if (item.c && item.c.length > 0) {
            par.appendChild(items(li, item.c, item.a));
          } else {
            //img.src = iUrlStart + "ec_none.png";
            par.appendChild(li);
          }
        }
        return par;
      }

      function parseResponse_json(request) {
        var jso, ul1, ipr = 0, iIter, li1;
        if (request.readyState === 4) {
          if (request.status === 200 || request.status === 304 || request.status === 0) {
            jso = window.JSON.parse(request.responseText);
            for (ipr = 0; ipr < jso.docs.length; ipr += 1) {
              if (jso.docs[ipr] !== undefined) {
                if (jso.docs[ipr].c.length > 1) {
                  img = document.createElement("img");
                  img.src = iUrlStart + "minus.png";
                  img.alt = "open";
                  img.width = "14";
                  img.height = "14";
                  a.appendChild(img);
                  a.href = jso.docs[ipr].h;
                  a.onclick = function () { collapseChild(this); return false; };
                  aHref = document.createElement("a");
                  aHref.href = jso.docs[ipr].h;
                  aHref.appendChild(document.createTextNode(jso.docs[ipr].t.replace('\xAE', '')));
                  li1 = document.createElement("li");
                  li1.appendChild(a);
                  li1.appendChild(aHref);
                  ul1 = document.createElement("ul");
                  ul1.style.margin = "0";
                  ul1.style.display = "block";
                  //ul1.style.padding = "0 1px 0 14px";
                  ul1.style.textIndent = "-14px";
                  ul1.style.listStyle = "none";
                  ul1.id = jso.docs[ipr].a;
                  for (j = 0; j < jso.docs[ipr].c.length - 1; j += 1) {
                    items(ul1, jso.docs[ipr].c[j], "");
                  }
                  li1.appendChild(ul1);
                }
              }
            }
            ul = document.createElement("ul");
            ul.style.marginRight = "5px";
            ul.style.marginLeft = "24px";
            ul.style.padding = "0";

            ul.style.textIndent = "-14px";
            ul.style.listStyle = "none";
            ul.id = "tThisDocument";
            ul.appendChild(li1);
            thisDocument.appendChild(heading);
            thisDocument.appendChild(ul);
            if (!oraCloudNav) {
              cExists = 0;
            }
            for (ipr = 0; ipr < ul.childNodes.length; ipr += 1) {
              if (ul.childNodes[ipr].getElementsByTagName("ul").length > 0) {
                collapseChild2(ul.childNodes[ipr].firstChild);
                if (cExists === 0 && ipr !== (ul.childNodes.length - 1)) {
                  expandChild(ul.childNodes[ipr].firstChild);
                }
              }
              if (!oraCloudNav) {
                expandChild(ul.childNodes[ipr].firstChild);
              }
            }
            cExists = 0;
            if (oraCloudNav) {
              elist = oraCloudNav.split(",");
              for (iIter = 0; iIter < elist.length; iIter += 1) {
                if (document.getElementById(elist[iIter])) {
                  expandChild1(document.getElementById(elist[iIter]).parentNode.firstChild);
                  cExists += 1;
                }
              }
              if (cExists === 0) {
                for (iIter = 0; iIter < ul.childNodes.length; iIter += 1) {
                  expandChild(ul.childNodes[iIter].firstChild);
                }
              }
            }
          }
        }
        // Ensure in case of long list the highlight is reset.
        // Interestingly if there is no timeout the browser does not take to the correct anchor sometimes.
        if (typeof highlighter === 'function') {
          setTimeout(function () {highlighter(); }, 100);
        }
      }

      function resetData() {
        if (error404 === 1) {
          try {
            if (request) {
              request.onreadystatechange = function () {
                parseResponse_json(request);
              };
              request.open("GET", window.location.href.replace(/\/[\x20-\x2E\x30-\x7E]+$/,
                "/target.json"), true);
              request.send(null);
            }
          } catch (e) {
            thisDocument = document.createTextNode("");
          }
        }
      }
      if (navigator.appName !== "Microsoft Internet Explorer" && !isIE11) {
        try {
          if (request) {
            request.onreadystatechange = function () {   
              parseResponse_json(request);
            };
            request.open("GET", window.location.href.replace(/\/[\x20-\x2E\x30-\x7E]+$/,
              "/target.json"), true);
            request.send(null);
          }
        } catch (e) {
          thisDocument = document.createTextNode("");
        }
      } else {
        try {
          if (request) {
            request.onreadystatechange = function () {
              if (request.status === 404) {
                error404 = 1;
              }
              parseResponse_json(request);
              if (error404 === 1) {
                resetData();
              }
            };
            request.open("GET", window.location.href.replace(/\/[\x20-\x2E\x30-\x7E]+$/,
              "/target_small.json"), true);
            request.send(null);
          }
        } catch (e) {
          try {
            if (request) {
              request.onreadystatechange = function () {
                parseResponse_json(request);
              };
              request.open("GET", window.location.href.replace(/\/[\x20-\x2E\x30-\x7E]+$/,
                "/target.json"), true);
              if (error404 === 1) {
                error404 = 0;
              }
              request.send(null);
            }
          } catch (e1) {
            thisDocument = document.createTextNode("");
          }
        }
      }

      return thisDocument;
    }
    if (!tSchema.match(/^moshelp/)) {
      tahitiNav.appendChild(showTopics());
    }
    return thisDocument;

  }
  

  function addRss() {
    var rssIcon1, html, html1, rss,
      iUrlStart = "../../nav/";

    rssIcon1 = document.createElement("img");
    rssIcon1.src = iUrlStart + "images/feed-icon-14x14.png";
    rssIcon1.alt = "RSS Feed";

    html = document.createElement("a");
    html.href = "../../nav/rss.xml";
    html.appendChild(rssIcon1);

    html1 = document.createElement("a");
    html1.href = "../../nav/rss.xml";
    html1.appendChild(document.createTextNode(l10n.new_changed));

    rss = document.createElement("div");
    rss.id = "tRss";
    rss.style.marginTop = "2ex";
    rss.style.padding = "1ex 0.5em";
    rss.style.border = "1px solid #EEE";
    rss.appendChild(html);
    rss.appendChild(document.createTextNode(" "));
    rss.appendChild(html1);

    return rss;
  }
  if (!tSchema.match(/^as\d+/) && !tSchema.match(/^fa\d+/) &&
      !tSchema.match(/^fmw\d+/) && !tSchema.match(/^jde[iaw]*\d+$/) &&
      !tSchema.match(/^oc\d+$/) && !tSchema.match(/^idm\d+$/) &&
      !tSchema.match(/^moshelp/)) {
    //tahitiNav.appendChild(addRss());
  }
  if (tSchema !== "jde898" && tSchema !== 'tt1121' &&
      !tSchema.match(/^as1112\d+/) && !tSchema.match(/^fmw1211\d+/) &&
      !tSchema.match(/^idm\d+/) && !tSchema.match(/^moshelp/)) {
    var mainCategories = document.createElement("div");
    mainCategories.appendChild(addMainCategories());
    if (!tSchema.match(/^moshelp/)) {
      tahitiNav.appendChild(addThisDocument());
    }
    tahitiNav.appendChild(buttonsDiv);
    var socialICon = document.createElement("div"), shareto;
    socialICon.className="addthis_sharing_toolbox";
    shareto = document.createElement("span");
    shareto.className = "shareto";
    shareto.appendChild(document.createTextNode("Share to:"));
    socialICon.appendChild(shareto);
    tahitiNav.appendChild(socialICon);
    mainCategories.appendChild(addSubCategories());    tahitiNav.appendChild(mainCategories);
  }
  function addQuickLookup() {
    var heading, p, quickLookup;

    /*label = document.createElement("span");
    label.id = "hQuickLookup";
    label.style.cssFloat = "right";
    label.style.styleFloat = "right";    label.style.fontSize = "12px";
    label.style.fontSize = "12px";
    label.style.color = "#669";
    label.style.fontWeight = "normal";
    label.style.display = "none";
    if (navBackground === "white") {
      labelHide = document.createTextNode("");
      labelShow = document.createTextNode("");
    } else {
      labelHide = document.createTextNode(l10n.hide);
      labelShow = document.createTextNode(l10n.show);
    }
    label.appendChild(labelHide);
    */
    heading = document.createElement("p");
    //heading.appendChild(label);
    heading.style.marginBottom = "0";
    ////heading.style.fontWeight = "bold";
    heading.style.borderBottom = "1px solid #EEE";
    heading.appendChild(document.createTextNode(l10n.reference));

    /*heading.style.cursor = "pointer";
    heading.onmouseover = function () {
      document.getElementById("hQuickLookup").style.display = "inline";
    };
    heading.onmouseout = function () {
      document.getElementById("hQuickLookup").style.display = "none";
    };
    heading.onclick = function () {
      if (document.getElementById("tQuickLookup").style.display === "none") {
        document.getElementById("tQuickLookup").style.display = "block";
        document.getElementById("hQuickLookup").replaceChild(labelHide, labelShow);
      } else {
        document.getElementById("tQuickLookup").style.display = "none";
        document.getElementById("hQuickLookup").replaceChild(labelShow, labelHide);
      }
    };*/

    p = document.createElement("ul");
    p.id = "tQuickLookup";
    p.style.margin = "0";
    p.style.padding = "0 0 0 1.5em";
    p.style.textIndent = "-0.25em";
    p.style.fontSize = "10px";
    p.style.color = "#999";

    function link(label, tProc) {
      var item = document.createElement("a"), li = document.createElement("li");
      item.href = tProc;
      item.appendChild(document.createTextNode(label));
      /*if (p.childNodes.length > 0) {
        p.appendChild(document.createTextNode(" \u00B7 "));
      }*/
      li.appendChild(item);
      p.appendChild(li);
    }


    quickLookup = document.createElement("div");
  //quickLookup.style.marginTop = "1.25rem";
    if (!tSchema.match(/^as111/)) {
      quickLookup.appendChild(heading);
    }
    quickLookup.appendChild(p);

    return quickLookup;
  }
  //tahitiNav.appendChild(addQuickLookup());

  function addMainCategories() {
    var heading;

    /*label = document.createElement("span");
    label.id = "hMainCategories";
    label.style.cssFloat = "right";
    label.style.styleFloat = "right";    label.style.fontSize = "12px";    label.style.fontSize = "12px";
    label.style.color = "#669";
    label.style.fontWeight = "normal";
    label.style.display = "none";
    if (navBackground === "white") {
      labelHide = document.createTextNode("");
      labelShow = document.createTextNode("");
    } else {
      labelHide = document.createTextNode(l10n.hide);
      labelShow = document.createTextNode(l10n.show);
    }
    label.appendChild(labelHide);*/

    heading = document.createElement("p");
    //heading.appendChild(label);

    heading.style.marginBottom = "0";
    ////heading.style.fontWeight = "bold";
    heading.style.borderBottom = "1px solid #EEE";
    if (tSchema === 'as1111' || tSchema === 'as111140' || tSchema === 'as111150'
        || tSchema === 'as111160' || tSchema === 'as111170') {
      heading.appendChild(document.createTextNode("Using Oracle Fusion Middleware"));
    } else if (tSchema !== 'html5' && tSchema.length > 0) {
      heading.appendChild(document.createTextNode(l10n.main_categories));
    }

    /*heading.style.cursor = "pointer";
    heading.onmouseover = function () {
      document.getElementById("hMainCategories").style.display = "inline";
    };
    heading.onmouseout = function () {
      document.getElementById("hMainCategories").style.display = "none";
    };
    heading.onclick = function () {
      if (document.getElementById("tMainCategories").style.display === "none") {
        document.getElementById("tMainCategories").style.display = "block";
        document.getElementById("hMainCategories").replaceChild(labelHide, labelShow);
      } else {
        document.getElementById("tMainCategories").style.display = "none";
        document.getElementById("hMainCategories").replaceChild(labelShow, labelHide);
      }
    };*/
    return heading;
  }

  function addSubCategories() {
    var ul;
    ul = document.createElement("ul");
    ul.id = "tMainCategories";
    ul.style.margin = "0";
    ul.style.padding = "0 0 0 1.5em";
    ul.style.textIndent = "-0.25em";
    ul.style.fontSize = "10px";
    ul.style.color = "#999";

    function link(label, tProc) {
      var item = document.createElement("a"),
        itemLi = document.createElement("li");
      item.href = tProc;
      item.appendChild(document.createTextNode(label));
      itemLi.appendChild(item);
      ul.appendChild(itemLi);
    }
    

    link(l10n.home, linkcategories.homepage);
    link(l10n.master_index, linkcategories.master_index);
    link(l10n.master_glossary, linkcategories.master_glossary);

    

    return ul;
  }

}
addLoadEvent(leftNav);


function showComments() {
  "use strict";
  if (!document.createElement) { return false; }
  if (!document.createTextNode) { return false; }
  if (!document.documentElement.appendChild) { return false; }
  if (!document.documentElement.insertBefore) { return false; }
  if (!document.documentElement.style) { return false; }

  var footer, divs, legend, userCommentsTitleLabel, userCommentsTitle,
    subject, From, postPublic, postPublicLabel, postAnonymous, p, p1,
    postAnonymousLabel, div2, userCommentsBodyLabel, userCommentsBody, hidden,
    a1, a2, a3, a4, submit, topictitle, fieldset, commentForm, publicRadio,
    signOn, signOnLink, i = 0, tPath = "", user = "", commDiv, closeReveal, pageUseful,
    sendFeedback, pageDiv, pageYes, pageNo, pageSpan, pageYesLabel, pageNoLabel;


  if (readCookie("ORA_UCM_INFO").match(/([\-.+\w]+@[\-.+\w]+)/)) {
    user = RegExp.$1;
  }

  try {
    if (window.location.href.match(
        /([\x20-\x2E\x30-\x7E]+\/[\x20-\x2E\x30-\x7E]+\/[\x20-\x2E\x30-\x7E]+)$/
      )) {
      tPath = RegExp.$1;
      if (tPath.match(/([\x20-\x7E]+)#[\x20-\x7E]+/)) {
        tPath = RegExp.$1;
      }
    }
  } catch (ignore) {}

  divs = document.getElementsByTagName("div");
  for (i = 0; i < divs.length; i += 1) {
    if (divs[i].className.indexOf("IND ") != -1) { footer = divs[i]; }
  }
  if (!footer) { return false; } /* needs verification */

  legend = document.createElement("legend");
  legend.style.fontWeight = "bold";
  legend.appendChild(document.createTextNode(l10n.reader_comment));

  userCommentsTitleLabel = document.createElement("label");
  userCommentsTitleLabel.style.color = "#666";
  userCommentsTitleLabel.htmlFor = "userCommentsTitle";
  userCommentsTitleLabel.appendChild(document.createTextNode(l10n.subject));

  userCommentsTitle = document.createElement("input");
  userCommentsTitle.type = "text";
  userCommentsTitle.name = "title";
  userCommentsTitle.id = "userCommentsTitle";
  userCommentsTitle.size = "40";

  subject = document.createElement("p");
  subject.style.marginBottom = "0";
  subject.appendChild(userCommentsTitleLabel);
  subject.appendChild(document.createTextNode(" "));
  subject.appendChild(userCommentsTitle);

  From = document.createElement("label");
  From.style.color = "#666";
  From.appendChild(document.createTextNode(l10n.from));

  postPublic = document.createElement("input");
  postPublic.type = "radio";
  postPublic.name = "submitter";
  postPublic.value = user;
  postPublic.id = "postPublic";

  postPublicLabel = document.createElement("label");
  postPublicLabel.htmlFor = "postPublic";
  postPublicLabel.appendChild(document.createTextNode(user.toLowerCase()));

  postAnonymous = document.createElement("input");
  postAnonymous.type = "radio";
  postAnonymous.name = "submitter";
  postAnonymous.value = "";
  postAnonymous.id = "postAnonymous";

  postAnonymousLabel = document.createElement("label");
  postAnonymousLabel.htmlFor = "postAnonymous";
  postAnonymousLabel.appendChild(document.createTextNode(l10n.anonymous));

  div2 = document.createElement("p");
  div2.style.margin = "1ex 0 1ex 0";
  div2.appendChild(From);
  div2.appendChild(document.createTextNode(" \u00A0 \u00A0 "));
  publicRadio = document.createElement("span");
  publicRadio.appendChild(postPublic);
  //publicRadio.appendChild(document.createTextNode(" "));
  publicRadio.appendChild(postPublicLabel);
  publicRadio.appendChild(document.createTextNode(" "));
  div2.appendChild(publicRadio);
  div2.appendChild(postAnonymous);
  div2.appendChild(document.createTextNode(" "));
  div2.appendChild(postAnonymousLabel);

  signOn = document.createElement("span");
  signOn.style.display = "none";
  signOn.appendChild(document.createTextNode(l10n.or));
  signOnLink = document.createElement("a");
  signOnLink.href = "http://www.oracle.com/webapps/redirect/signon?nexturl=" +
    window.location.href;
  signOnLink.appendChild(document.createTextNode(l10n.sign_in));
  signOn.appendChild(signOnLink);
  signOn.appendChild(document.createTextNode(")"));
  div2.appendChild(signOn);

  if (user === "") {
    publicRadio.style.display = "none";
    signOn.style.display = "inline";
    postAnonymous.defaultChecked = true;
//    postAnonymous.disabled = true;
  } else {
    postPublic.defaultChecked = true;
  }

  userCommentsBodyLabel = document.createElement("label");
  userCommentsBodyLabel.htmlFor = "userCommentsBody";
  userCommentsBodyLabel.appendChild(document.createTextNode("Comment body:"));
  userCommentsBodyLabel.style.display = "none";

  userCommentsBody = document.createElement("textarea");
  userCommentsBody.id = "userCommentsBody";
  userCommentsBody.rows = "10";
  userCommentsBody.cols = "80";
  userCommentsBody.name = "comment_text";

  hidden = document.createElement("input");
  hidden.type = "hidden";
  hidden.name = "path";
  if (tAuthority === "tahiti-stage.us.oracle.com") {
    hidden.value = window.location.href;
  } else {
//    hidden.value = tPath;
    hidden.value = window.location.href;
  }

  topictitle = document.createElement("input");
  topictitle.type = "hidden";
  topictitle.name = "topictitle";
  topictitle.id = "topictitle";
  topictitle.value = document.title;

  p = document.createElement("p");
  p.style.color = "#333";
  p.style.marginTop = "1ex";
  p.appendChild(document.createTextNode(l10n.comment_first_part));
  p.appendChild(document.createTextNode(" " + l10n.comment_second_part));
  a1 = document.createElement("a");
  /*
  if (document.getElementsByTagName("html")[0].getAttribute("xml:lang")) {
    lang = document.getElementsByTagName("html")[0].getAttribute("xml:lang");
    lang = "en";
  } else if (document.getElementsByTagName("html")[0].lang) {
    lang = document.getElementsByTagName("html")[0].lang;
    lang = "en";
  } else {
    lang = "en";
  }
  */
  if (tAuthority === "tahiti-stage.us.oracle.com") {
    a1.href = "http://wd0338.oracle.com/archive/cd_ns/E23003_01/html/" + "en" +
      "/comment_disclaimer.htm";
  } else {
    a1.href = "http://docs.oracle.com/cd/E23003_01/html/" + "en" +
      "/comment_disclaimer.htm";
  }
  a1.appendChild(document.createTextNode(l10n.comment_third_part));
  p.appendChild(a1);
  p.appendChild(document.createTextNode(l10n.comment_fourth_part));
  p.appendChild(document.createTextNode(l10n.comment_fifth_part));
  a2 = document.createElement("a");
  a2.href = "https://community.oracle.com/";
  a2.appendChild(document.createTextNode(l10n.comment_fifth_part_otn));
  p.appendChild(a2);
  p.appendChild(document.createTextNode(l10n.comment_sixth_part));
  p.appendChild(document.createTextNode(
    l10n.comment_seventh_part
  ));
  a3 = document.createElement("a");
  a3.href = "https://support.oracle.com/";
  a3.appendChild(document.createTextNode(l10n.comment_eighth_part));
  p.appendChild(a3);
  p.appendChild(document.createTextNode("."));

  submit = document.createElement("input");
  submit.type = "submit";
  submit.value = l10n.submit;
  submit.style.display = "block";

  fieldset = document.createElement("fieldset");
  fieldset.style.marginTop = "4ex";
  //fieldset.style.borderTop = "1px #666 solid";
  //fieldset.style.borderRight = "none";
  //fieldset.style.borderBottom = "none";
  //fieldset.style.borderLeft = "none";
  fieldset.appendChild(legend);
  fieldset.appendChild(hidden);
  fieldset.appendChild(topictitle);
  fieldset.appendChild(subject);
  fieldset.appendChild(div2);
  fieldset.appendChild(userCommentsBody);
  fieldset.appendChild(p);
  fieldset.appendChild(submit);

  commentForm = document.createElement("form");
  commentForm.method = "post";
  if (tAuthority === "tahiti-stage.us.oracle.com") {
    commentForm.action = "http://tahiti-stage.us.oracle.com/pls/tahiti/comments_test";
  } else {
    commentForm.action = "http://www.oracle.com/pls/tahiti/comments_test";
  }

  if (tSchema.match(/^db\d+/)) {
    p1 = document.createElement("p");
    p1.style.marginTop = "4ex";
    p1.style.padding = "0.5ex 0.5em";
    p1.style.backgroundColor = "#eef";
    p1.style.border = "1px solid #ccc";
    p1.appendChild(document.createTextNode(l10n.need_an_example + " "));
    a4 = document.createElement("a");
    a4.href = "http://www.surveygizmo.com/s3/1224783/Oracle-Documentation-Survey";
    a4.appendChild(document.createTextNode(l10n.tell_us_more));
    p1.appendChild(a4);
    p1.appendChild(document.createTextNode("."));
    commentForm.appendChild(p1);
  }

  commentForm.appendChild(fieldset);

  //fieldset.className = "readercomment";
  //commDiv = document.getElementById("commentfield");
  closeReveal = document.createElement("a");
  closeReveal.className = "close-reveal-modal";
  closeReveal.appendChild(document.createTextNode("\u00D7"));
  //commDiv.appendChild(commentForm);
  //commDiv.appendChild(closeReveal);
  //footer.appendChild(commDiv);
  pageUseful = document.createElement("div");
  pageUseful.id = "pageuseful";
  pageDiv = document.createElement("div");
  pageDiv.style.cssFloat = "left";
  pageUseful.style.fontSize = "13px";
  pageSpan = document.createElement("span");
  pageSpan.appendChild(document.createTextNode("Was this page useful?"));
  pageDiv.appendChild(pageSpan);
  pageYes = document.createElement("input");
  pageYes.type = "radio";
  pageYes.id = "yesradio";
  pageYes.value = "yes";
  pageYes.style.margin = "0";
  pageYes.style.marginLeft = "1em";
  pageYesLabel = document.createElement("label");
  pageYesLabel.htmlFor = "yesradio";
  pageYesLabel.style.fontSize = "13px";
  pageYesLabel.appendChild(document.createTextNode("Yes"));
  pageDiv.appendChild(pageYes);
  pageDiv.appendChild(pageYesLabel);
  pageNo = document.createElement("input");
  pageNo.type = "radio";
  pageNo.id = "noradio";
  pageNo.value = "no";
  pageNo.style.margin = "0";
  pageNo.style.marginLeft = "1em";
  pageNoLabel = document.createElement("label");
  pageNoLabel.htmlFor = "noradio";
  pageNoLabel.style.fontSize = "13px";
  pageNoLabel.appendChild(document.createTextNode("No"));
  pageDiv.appendChild(pageNo);
  pageDiv.appendChild(pageNoLabel);
  pageUseful.appendChild(pageDiv);
  sendFeedback = document.createElement("a");
  sendFeedback.href = "#";
  sendFeedback.setAttribute("data-reveal-id", "commentfield");
  sendFeedback.appendChild(document.createTextNode("Send Feedback"));
  pageUseful.appendChild(sendFeedback);
  if(commDiv) {
    footer.appendChild(pageUseful);
  }
  //footer.parentNode.insertBefore(commentForm, footer);

}
//addLoadEvent(showComments);
function addCpyr () {
  "use strict";
  var divs, i = 0, footer, footerEle, footerTd, t = 0, cpyrTd, cpyr,
    footerP, p1 = 0;
  divs = document.getElementsByTagName("div");
  for (i = 0; i < divs.length; i += 1) {
    if (divs[i].className.indexOf("IND ") !== -1) { footer = divs[i]; }
  }
  footerEle = document.getElementsByTagName('footer')[0];
  footerTd = footerEle.getElementsByTagName("td");
  for (t = 0; t < footerTd.length; t += 1) {
    if (footerTd[t].className.indexOf("copyrightlogo") !== -1) { cpyrTd = footerTd[t]; }
  }
  //alert(cpyrTd.textContent);
  if(footer && cpyrTd) {
    cpyr = document.createElement("p");
    cpyr.appendChild(document.createTextNode(cpyrTd.textContent));
    //alert(cpyr.textContent);
    footer.appendChild(cpyr);
  } else if (footer) {
    footerP = footerEle.getElementsByTagName("p");
    for (p1 = 0; p1 < footerP.length; p1 += 1) {
      if (footerP[p1].className.indexOf("copyrightstmt") !== -1) { cpyr = footerP[p1]; }
    }
    if (cpyr) {
      footer.appendChild(cpyr);
    }
  }
}

addLoadEvent(addCpyr);




function processToc() {
  "use strict";

  var p, a, a1, a2, IND, img, preload, i = 0,
    iUrlStart = "../../nav/",
    h1 = document.getElementsByTagName("h1"),
    div = document.getElementsByTagName("div");

  if (!h1[0] || h1[0].className !== "toc") { return false; }

  preload = new Image();
  preload.src = iUrlStart + "images/db_doc_down_arrow.png";
  preload.alt = "Click to collapse";

  for (i = 0; i < div.length; i += 1) {
    if (div[i].className.indexOf("IND ") != -1) { IND = div[i]; }
  }

  function nextUl(node) {
    while (node.nextSibling) {
      if (node.nextSibling.nodeName.match(/ul/i)) { return node.nextSibling; }
      node = node.nextSibling;
    }
  }

  function showNextUl(owner) {
    var ul = nextUl(owner.parentNode);
    ul.style.display = "block";
    owner.getElementsByTagName("img")[0].src =
      iUrlStart + "images/db_doc_down_arrow.png";
    owner.getElementsByTagName("img")[0].alt = "Click to collapse";
    owner.onclick = function () { hideNextUl(this); return false; };
  }

  function hideNextUl(owner) {
    var ul = nextUl(owner.parentNode);
    ul.style.display = "none";
    owner.getElementsByTagName("img")[0].src =
      iUrlStart + "images/db_doc_right_arrow.png";
    owner.getElementsByTagName("img")[0].alt = l10n.click_to_expand;
    owner.onclick = function () { showNextUl(this); return false; };
  }

  function expandAll() {
    var iea = 0, aea = IND.getElementsByTagName("a");
    for (iea = 0; iea < aea.length; iea += 1) {
      if (aea[iea].className === "tDiscTriangle") {
        showNextUl(aea[iea]);
      }
    }
    createCookie("ORA_TAHITI_TOC", "expand");
    return false;
  }

  function collapseAll() {
    var ica = 0, aca = IND.getElementsByTagName("a");
    for (ica = 0; ica < aca.length; ica += 1) {
      if (aca[ica].className === "tDiscTriangle") {
        hideNextUl(aca[ica]);
      }
    }
    createCookie("ORA_TAHITI_TOC", "", -1);
    return false;
  }

  function okShowTriangle(node) {
    while (node.nextSibling) {
      if (node.nextSibling.nodeName.match(/h2/i)) { return false; }
      if (node.nextSibling.nodeName.match(/ul/i)) { return true; }
      node = node.nextSibling;
    }
    return false;
  }

  function getTextContent(e) {
    if (e.textContent) { return e.textContent; }
    if (e.innerText) { return e.innerText; }
    return "";
  }

  for (i = 0; i < IND.childNodes.length; i += 1) {
    if (IND.childNodes[i].nodeName.match(/^ul$/i)) {
      IND.childNodes[i].style.marginTop = "0";
      IND.childNodes[i].style.marginBottom = "1ex";
      IND.childNodes[i].style.display = "none";
    } else if (IND.childNodes[i].nodeName.match(/^h2$/i)) {
      if (IND.childNodes[i].className === "tocheader") {
        IND.childNodes[i].style.fontSize = "140%";
          IND.childNodes[i].style.marginTop = "1ex";
        IND.childNodes[i].style.marginBottom = "0.5ex";
        if (getTextContent(IND.childNodes[i]) &&
            getTextContent(IND.childNodes[i]).match(/Part\s+[IVXLCDM]+\s+/)) {
          //IND.childNodes[i].style.textAlign = "center";
          IND.childNodes[i].style.marginTop = "1.7ex";
          //IND.childNodes[i].style.borderTop = "2px solid #A4C3DF";
        } else {
          img = document.createElement("img");
          img.src = iUrlStart + "images/db_doc_right_arrow.png";
          img.alt = "Click to expand";
          a = document.createElement("a");
          a.href = "#";
          a.onclick = function () { showNextUl(this); return false; };
          a.onfocus = function () { window.status = ''; return true; };
          a.className = "tDiscTriangle";
          a.style.textDecoration = "none";
          a.appendChild(img);
          if (okShowTriangle(IND.childNodes[i])) {
            IND.childNodes[i].insertBefore(document.createTextNode(" "),
              IND.childNodes[i].firstChild);
            IND.childNodes[i].insertBefore(a, IND.childNodes[i].firstChild);
          } else {
            IND.childNodes[i].style.marginLeft= "2.4ex";
          }
        }
      }
    }
  }

  p = document.createElement("p");
  p.style.marginTop = "0";
  p.style.marginBottom = "0";
  p.style.textAlign = "right";
  a1 = document.createElement("a");
  a1.href = "#";
  a1.onfocus = function () { window.status = ''; return true; };
  ////a1.style.color = "#039";
  a1.style.textDecoration = "none";
  a1.onclick = expandAll;
  a2 = document.createElement("a");
  a2.href = "#";
  a2.onfocus = function () { window.status = ''; return true; };
  ////a2.style.color = "#039";
  a2.style.textDecoration = "none";
  a2.onclick = collapseAll;
  a1.appendChild(document.createTextNode(l10n.expand_all));
  a2.appendChild(document.createTextNode(l10n.collapse_all));
  p.appendChild(a1);
  p.appendChild(document.createTextNode(" \u00B7 "));
  p.appendChild(a2);
  document.getElementsByTagName("h1")[0].style.marginBottom = "0";
  document.getElementsByTagName("h1")[0].parentNode.insertBefore(p,
    document.getElementsByTagName("h1")[0].nextSibling);

  if (readCookie("ORA_TAHITI_TOC") === "expand") { expandAll(); }
}
addLoadEvent(processToc);

function processIndex() {
  "use strict";
  try {
    if (!window.location.href.match(/\/index\.htm(?:|#[\x20-\x7E]*)$/)) {
      return false;
    }
  } catch (ignore) {}

  var prefix, s, nav, i = 0, shortcut = [], lastPrefix = "",
    dd = document.getElementsByTagName("dd"),
    h2 = document.getElementsByTagName("h2");

  function getTextContent(e) {
    if (e.textContent) { return e.textContent; }
    if (e.innerText) { return e.innerText; }
    return "";
  }

  for (i = 0; i < dd.length; i += 1) {
    if (dd[i].className === 'l1ix') {
      prefix = getTextContent(dd[i]).substring(0, 2).toUpperCase();
      if (prefix.match(/^([A-Z0-9]{2})/) && prefix !== lastPrefix) {
        dd[i].id = prefix;
        s = document.createElement("a");
        s.href = "#" + prefix;
        s.appendChild(document.createTextNode(prefix));
        shortcut.push(s);
        lastPrefix = prefix;
      }
    }
  }

  for (i = 0; i < h2.length; i += 1) {
    nav = document.createElement("div");
    nav.style.position = "relative";
    nav.style.top = "-1.5ex";
    nav.style.left = "1.5em";
    nav.style.width = "90%";
    while (shortcut[0] &&
        shortcut[0].toString().charAt(shortcut[0].toString().length - 2) ===
        getTextContent(h2[i])) {
      nav.appendChild(shortcut.shift());
      nav.appendChild(document.createTextNode("\u00A0 "));
    }
    h2[i].parentNode.insertBefore(nav, h2[i].nextSibling);
  }
}
addLoadEvent(processIndex);

function compactLists() {
  "use strict";
  var li, p, i = 0, j = 0, k = 0, collapsible = true, lists = [], clists = [],
    ul = document.getElementsByTagName("ul"),
    ol = document.getElementsByTagName("ol");

  for (i = 0; i < ul.length; i += 1) { lists.push(ul[i]); }
  for (i = 0; i < ol.length; i += 1) { lists.push(ol[i]); }

  function getTextContent(e) {
    if (e.textContent) { return e.textContent; }
    if (e.innerText) { return e.innerText; }
    return "";
  }

  for (i = 0; i < lists.length; i += 1) {
    collapsible = true;
    clists = [];
    li = lists[i].getElementsByTagName("li");
    for (j = 0; j < li.length; j += 1) {
      p = li[j].getElementsByTagName("p");
      if (p.length > 1) { collapsible = false; }
      for (k = 0; k < p.length; k += 1) {
        if (getTextContent(p[k]).split(" ").length > 12) {
          collapsible = false;
        }
        clists.push(p[k]);
      }
    }
    if (collapsible) {
      for (j = 0; j < clists.length; j += 1) {
        clists[j].style.margin = "0";
      }
    }
  }
}
addLoadEvent(compactLists);

function deviceWidth() {
  "use strict";
  if (!document.head) { return false; }
  var meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content = "width=device-width,initial-scale=1.0";
  document.head.appendChild(meta);
}
addLoadEvent(deviceWidth);

function positionAnchor() {
  "use strict";
  if (!window.ActiveXObject || window.opera) { return false; }

  var a, i = 0, location = [], anchor = "";

  try {
    if (window.location.href.match(/#([\x20-\x7E]+)$/)) { anchor = RegExp.$1; }
  } catch (e) {
    return;
  }

  function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
    }
    return [curleft, curtop];
  }

  if (document.getElementById(anchor)) {
    location = findPos(document.getElementById(anchor));
    window.scrollTo(0, location[1]);
  } else {
    a = document.getElementsByTagName("a");
    for (i = 0; i < anchor.length; i += 1) {
      if (a[i].className === anchor) {
        location = findPos(a[i]);
        window.scrollTo(0, location[1]);
      }
    }
  }
}
addLoadEvent(positionAnchor);

function initializeHighlighter() {
  "use strict";
  window.lastVisibleId = '';
  window.lastVisibleElement = null;
  window.headingsToWorkOn = [];
  window.listsToWorkOn = [];
  window.listsValuesToWorkOn = [];
  window.onlyAnchors = [];
  window.parentsForHighlight = {};
  window.headingsRead = 0;
  window.listsRead = 0;
  window.maxSizeNoScroll = 30;
  window.lastVisitedElement = -1;
  window.highlightElement = false;
  window.PageLocationForElem = null;
  window.isAutoIDcase = false;
  window.whereami = window.location.href;
  window.whereami = window.whereami.replace(new RegExp("(.*)/"), "");
  window.pageName = window.whereami.replace(new RegExp("#(.*)"), "");
  window.pageName = window.pageName.replace(new RegExp("\\?(.*)"), "");
}
addLoadEvent(initializeHighlighter);

var resizeTimerId = null;
function doHighlight() {
  "use strict";
  if (resizeTimerId) {
    clearTimeout(resizeTimerId);
    resizeTimerId = null;
  }
  resizeTimerId = setTimeout(function () {
    highlighter();
  }, 200);
}

window.onscroll = doHighlight;

function highlighter() {
  "use strict";
  if (window.location.href.match(/#BEGIN$/)) {return; }
  var allVisible = [], allBoundariesVisible = [], checkCompleteWithId,
    isVisibleStarted = false, elementNumber, foundWhichIsVisible = false,
    testPresence, visibileElemInBoundary, isVisibleElem, readornot, checkValid, checkValidVIsible, wasValidFound, hIter, checkOnlyId;

  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, startO) {
      for (var iSt = (startO || 0), jSt = this.length; iSt < jSt; iSt++) {
        if (this[iSt] === obj) { return iSt; }
      }
      return -1;
    }
  }

  function unhighlight(elem) {
    if (!elem) {
      return true;
    }
    if ((window.ActiveXObject && !window.opera) && !window.XMLHttpRequest) {
      //elem.style.setAttribute('cssText', "font-weight:normal;");
      elem.style.color = '#333';
      elem.style.fontWeight = 'bold';
    } else {
      //elem.setAttribute('style', "font-weight:normal;");
      elem.style.color = '#145c93';
      elem.style.fontWeight = 'normal';
    }
    return true;
  }

  function highlight(elem) {
    // Highlight the element itself first
    if (!elem) {
      return true;
    }
    if ((window.ActiveXObject && !window.opera) && !window.XMLHttpRequest) {
      //elem.style.setAttribute('cssText', "font-weight:bold;");
      elem.style.color = '#333';
      elem.style.fontWeight = 'bold';
    } else {
      elem.style.color = '#333';
      elem.style.fontWeight = 'bold';
      //elem.setAttribute('style', "font-weight:bold;");
    }
    return true;
  }

  function manageAddressBarURL(elem) {
    if (elem && elem.href && (!window.PageLocationForElem || window.PageLocationForElem !== elem.href)) {
      window.PageLocationForElem = elem.href;
      window.PageLocationForElem = window.PageLocationForElem.replace(new RegExp("(.*)#"), '');
      var browserVal = navigator.userAgent.toLowerCase(), verticalScroll = document.body.scrollTop, horizontalScroll = document.body.scrollLeft;
      window.PageLocationForElem = '#' + window.PageLocationForElem;
      if (!window.PageLocationForElem.match(/^autoId/)) {
        // both are defined and it is not a auto generated id
        if (history.replaceState) {
          history.replaceState({"page": "Oracle Document"}, "Replace previous URL", window.PageLocationForElem);
        } else {
          //if (browserVal.indexOf("msie") > -1) {/* Nothing to set now */} 
          //else if (browserVal.indexOf("firefox") > -1) {/* Nothing to set now */} 
          if (browserVal.indexOf("chrome") > -1) {
            window.location.hash = window.PageLocationForElem;
            document.body.scrollTop = verticalScroll;
            document.body.scrollLeft = horizontalScroll;
          } else if (browserVal.indexOf("safari") > -1) {
            window.location.hash = window.PageLocationForElem;
            document.body.scrollTop = verticalScroll;
            document.body.scrollLeft = horizontalScroll;
          } else if (browserVal.indexOf("opera") > -1) {
            window.location.hash = window.PageLocationForElem;
            document.body.scrollTop = verticalScroll;
            document.body.scrollLeft = horizontalScroll;
          }
        }
      }
    }
    return true;
  }

  function getParents(e) {
    var linkedList = [], startParent, subE;
    if (e.nodeType === 1 && (e.nodeName.match(/a/i))) {
      startParent = e.parentNode.parentNode.parentNode;
      while ((startParent.nodeName.match(/li/i))) {
        subE = startParent.childNodes;
        if (subE.length > 0) {
          if (subE[0].nodeName.match(/a/i) && !subE[0].href.match(/#$/) && !subE[0].innerHTML.match(new RegExp("(.*) <img", 'g').ignoreCase)) {
            // Case of addthispage
            linkedList.push(subE[0]);
            startParent = subE[0].parentNode.parentNode.parentNode;
          } else if (subE.length > 0 && subE[1].nodeName.match(/a/i) && !subE[1].href.match(/#$/) && !subE[1].innerHTML.match(new RegExp("(.*) <img", 'g').ignoreCase)) {
            // Case of addthisdocument
            linkedList.push(subE[1]);
            startParent = subE[1].parentNode.parentNode.parentNode;
          } else {
            startParent = subE[0].parentNode.parentNode.parentNode;
          }
        } else {
          break;
        }
      }
    }
    return linkedList;
  }

  function highlightParents(elem) {
    var parentsArray, allParents, p;
    if (!elem) {
      return true;
    }
    if (!window.parentsForHighlight[elem.href]) {
      parentsArray = getParents(elem);
      if (parentsArray.length > 0) {
        window.parentsForHighlight[elem.href] = parentsArray;
      }
    }
    if (window.parentsForHighlight[elem.href]) {
      allParents = window.parentsForHighlight[elem.href];
      for (p = 0; p < allParents.length; p = p + 1) {
        if ((window.ActiveXObject && !window.opera) && !window.XMLHttpRequest) {
          //allParents[p].style.setAttribute('cssText', "font-weight:bold;");
          allParents[p].style.color = '#333';
          allParents[p].style.fontWeight = 'bold';
        } else {
          //allParents[p].setAttribute('style', "font-weight:bold;");
          allParents[p].style.color = '#333';
          allParents[p].style.fontWeight = 'bold';
        }
      }
    }
    return true;
  }

  function readHeadings(e) {
    if (window.headingsRead > 0) {
      return true;
    }
    window.headingsToWorkOn = [];
    var checkAllTags = e.getElementsByTagName('*'), checkAllTagsIter;
    checkAllTags = document.getElementsByTagName('*');
    for (checkAllTagsIter = 1; checkAllTagsIter < checkAllTags.length; checkAllTagsIter = checkAllTagsIter + 1) {
      if (checkAllTags[checkAllTagsIter].id && checkAllTags[checkAllTagsIter].id !== 'tThisPage'
            && checkAllTags[checkAllTagsIter].id !== 'tThisDocument') {
        if (window.isAutoIDcase && checkAllTags[checkAllTagsIter].id.match(/^autoId/) && checkAllTags[checkAllTagsIter].nodeName.match(/h[2-4]/i)) {
          window.headingsToWorkOn.push(checkAllTags[checkAllTagsIter]);
        } else if (!window.isAutoIDcase && window.onlyAnchors && window.onlyAnchors.indexOf(checkAllTags[checkAllTagsIter].id) > -1) {
          window.headingsToWorkOn.push(checkAllTags[checkAllTagsIter]);
        }
      }
    }
    return true;
  }

  function readLists(e) {
    if (window.listsRead > 0) {return true; }
    var allaelements, regex1, anc, allaelementsIter;
    window.listsToWorkOn = [];
    window.listsValuesToWorkOn = [];
    allaelements = e;
    if (document.getElementById('tThisPage')) {
      window.isAutoIDcase = true;
      // get all a elements
      window.highlightElement = true;
      allaelements = document.getElementById('tThisPage').getElementsByTagName("a");
      for (allaelementsIter = 0; allaelementsIter < allaelements.length; allaelementsIter += 1) {
        if (allaelements[allaelementsIter].href) {
          window.listsToWorkOn.push(allaelements[allaelementsIter]);
          window.listsValuesToWorkOn.push(allaelements[allaelementsIter].href.replace(new RegExp("(.*)/"), ""));
        }
      }
    } else if (document.getElementById('tThisDocument')) {
      // get all a elements
      window.highlightElement = true;
      allaelements = document.getElementById('tThisDocument').getElementsByTagName("a");
      for (allaelementsIter = 0; allaelementsIter < allaelements.length; allaelementsIter += 1) {
        if (allaelements[allaelementsIter].href && !allaelements[allaelementsIter].href.match(/#$/)) {
          regex1 = new RegExp('(.*)' + window.pageName + '(.*)', 'g');
          if (allaelements[allaelementsIter].href.match(regex1)) {
            anc = allaelements[allaelementsIter].href;
            anc = anc.replace(new RegExp("(.*)#"), "");
            if (window.onlyAnchors.indexOf(anc) < 0) {
              window.onlyAnchors.push(anc);
            }
            window.listsToWorkOn.push(allaelements[allaelementsIter]);
            window.listsValuesToWorkOn.push(allaelements[allaelementsIter].href.replace(new RegExp("(.*)/"), ""));
          }
        }
      }
    }
    return true;
  }

  function windowHeight() {
    // determine viewable height
    var elem = document.documentElement;
    if (!!window.innerWidth) { return window.innerHeight; }
    if (elem && !isNaN(elem.clientHeight)) { return elem.clientHeight; }
    return 0;
  }

  function windowWidth() {
    // determine viewable width
    var elem = document.documentElement;
    if (!isNaN(window.innerWidth)) { return window.innerWidth; }
    if (elem && !isNaN(elem.clientWidth)) { return elem.clientWidth; }
    return 0;
  }

  function vertical() {
    if (window.pageYOffset) { return window.pageYOffset; }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  }

  function horizontal() {
    if (window.pageXOffset) { return window.pageXOffset; }
    return Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
  }

  function isElementVisible(element) {
    var width, top, left, windowInnerHeight, windowInnerWidth, windowYoffset, windowXoffset;
    width = element.offsetWidth;
    top = element.offsetTop;
    left = element.offsetLeft;
    while (element.offsetParent) {
      element = element.offsetParent;
      top += element.offsetTop;
      left += element.offsetLeft;
    }
    windowInnerHeight = windowHeight();
    windowInnerWidth = windowWidth();
    windowYoffset = vertical();
    windowXoffset = horizontal();
    return (
      (top + 5) > windowYoffset &&
      (width + left) > windowXoffset &&
      top < (windowInnerHeight + windowYoffset) &&
      left < (windowXoffset + windowInnerWidth)
    );
  }

  function isElementBoundaryVisible(element) {
    var width, top, left, windowInnerHeight, windowInnerWidth, windowYoffset, windowXoffset;
    width = element.offsetWidth;
    top = element.offsetTop;
    left = element.offsetLeft;
    while (element.offsetParent) {
      element = element.offsetParent;
      top += element.offsetTop;
      left += element.offsetLeft;
    }
    windowInnerHeight = windowHeight();
    windowInnerWidth = windowWidth();
    windowYoffset = vertical();
    windowXoffset = horizontal();
    return (
      top < windowYoffset &&
      (width + left) > windowXoffset &&
      top < (windowInnerHeight + windowYoffset) &&
      left < (windowXoffset + windowInnerWidth)
    );
  }

  function checkExistence(elem) {
    var checkOnlyIdVal, regex1, regex2, foundWhichIsVisibleH, elementNumberH;
    checkOnlyIdVal = elem.id;
    checkCompleteWithId = window.pageName + '#' + elem.id;
    regex1 = new RegExp(checkOnlyIdVal + '$', 'g');
    regex2 = new RegExp(checkCompleteWithId + '$', 'g');
    foundWhichIsVisibleH = false;
    elementNumberH = -1;
    for (hIter = 0; hIter < window.listsToWorkOn.length; hIter += 1) {
      if ((window.listsToWorkOn[hIter].href.match(regex1) || window.listsToWorkOn[hIter].href.match(regex2))) {
        foundWhichIsVisibleH = true;
        elementNumberH = hIter;
        break;
      }
      if (foundWhichIsVisibleH) {break; }
    }
    return elementNumberH;
  }

  readornot = readLists(document.documentElement);
  if (readornot && window.highlightElement) {window.listsRead = 1; }
  readornot = readHeadings(document.documentElement);
  if (readornot && window.highlightElement) {window.headingsRead = 1; }
  if (typeof window.pageName !== 'undefined' && window.pageName !== null && window.pageName.match(/index[.]htm/)) {
    return true;
  }
  for (hIter = 0; hIter < window.headingsToWorkOn.length; hIter += 1) {
    if (!window.headingsToWorkOn[hIter].id.match(/^BEGIN$/)) {
      isVisibleElem = isElementVisible(window.headingsToWorkOn[hIter]);
      if (isVisibleElem) {
        isVisibleStarted = true;
        allVisible.push(window.headingsToWorkOn[hIter]);
      }
      // if the elements are found as visible, we need to look till the elements stop being visible.
      if (isVisibleStarted && !isVisibleElem) {
        break;
      }
    }
  }
  // check if the user clicked something which cannot be highlighted as it was last that cannot be scrolled to
  // If more than one heading is visible, highlight the first one.
  // check what is applicable id from the li's a element list
  // where are we?
  if (!Array.prototype.indexOf) {
    for (checkValid = 0; checkValid < allVisible.length; checkValid = checkValid + 1) {
      foundWhichIsVisible = false;
      elementNumber = checkExistence(allVisible[checkValid]);
      if (elementNumber > -1) {
        window.lastVisibleElement = window.listsToWorkOn[elementNumber];
        window.lastVisibleId = window.listsToWorkOn[elementNumber].id;
        window.lastVisitedElement = elementNumber;
        foundWhichIsVisible = highlight(window.listsToWorkOn[elementNumber]);
      }
      if (foundWhichIsVisible) {break; }
    }
  } else {
    for (checkValid = 0; checkValid < allVisible.length; checkValid = checkValid + 1) {
      checkOnlyId = allVisible[checkValid].id;
      checkCompleteWithId = window.pageName + '#' + allVisible[checkValid].id;
      foundWhichIsVisible = false;
      testPresence = window.listsValuesToWorkOn.indexOf(checkCompleteWithId);
      if (testPresence > -1) {
        window.lastVisibleElement = window.listsToWorkOn[testPresence];
        window.lastVisibleId = window.listsToWorkOn[testPresence].id;
        window.lastVisitedElement = testPresence;
        foundWhichIsVisible = highlight(window.listsToWorkOn[testPresence]);
      } else {
        testPresence = window.listsValuesToWorkOn.indexOf(checkOnlyId);
        if (testPresence > -1) {
          window.lastVisibleElement = window.listsToWorkOn[testPresence];
          window.lastVisibleId = window.listsToWorkOn[testPresence].id;
          window.lastVisitedElement = testPresence;
          foundWhichIsVisible = highlight(window.listsToWorkOn[testPresence]);
        }
      }
      if (foundWhichIsVisible) {
        break;
      }
    }
  }
  if (!foundWhichIsVisible) {
    isVisibleStarted = false;
    for (hIter = 0; hIter < window.headingsToWorkOn.length; hIter += 1) {
      // allBoundariesVisible will store the actual elements that are visible and compared with the complete boundary.
      // This will help to identify cases when the section is long and user is scrolling and we need to identify
      // the start of the element from the bottom of the element or from top. From this array we will take the deepest element.
      isVisibleElem = isElementBoundaryVisible(window.headingsToWorkOn[hIter]);
      if (isVisibleElem) {
        isVisibleStarted = true;
        allBoundariesVisible.push(window.headingsToWorkOn[hIter]);
      }
      // if the elements are found as visible, we need to look till the elements stop being visible.
      if (isVisibleStarted && !isVisibleElem) {
        break;
      }
    }
    if (allBoundariesVisible.length > 0) {
      if (window.isAutoIDcase) {
        // addthispage
        for (checkValidVIsible = allBoundariesVisible.length - 1; checkValidVIsible > -1; checkValidVIsible = checkValidVIsible - 1) {
          if (allBoundariesVisible[checkValidVIsible].id.match(/autoId/)) {visibileElemInBoundary = allBoundariesVisible[checkValidVIsible]; break; }
        }
      } else {
          // addthisdocument
        for (checkValidVIsible = allBoundariesVisible.length - 1; checkValidVIsible > -1; checkValidVIsible = checkValidVIsible - 1) {
          wasValidFound = false;
          elementNumber = checkExistence(allBoundariesVisible[checkValidVIsible]);
          if (elementNumber > -1) {
            visibileElemInBoundary = allBoundariesVisible[checkValidVIsible];
            wasValidFound = true;
          }
          if (wasValidFound) {break; }
        }
      }
      if (!visibileElemInBoundary) {
        visibileElemInBoundary = allBoundariesVisible[allBoundariesVisible.length - 1];
      }
      elementNumber = checkExistence(visibileElemInBoundary);
      if (elementNumber > -1) {
        window.lastVisibleElement = window.listsToWorkOn[elementNumber];
        window.lastVisibleId = window.listsToWorkOn[elementNumber].id;
        window.lastVisitedElement = elementNumber;
        // commented as we do not want to highlight something that is not found
        //foundWhichIsVisible = highlight(window.listsToWorkOn[elementNumber]);
      }
      // commented as we do not want to highlight something that is not found
      //foundWhichIsVisible = highlight(window.listsToWorkOn[window.lastVisitedElement]);
    }
  }
  // May be the top of the page
  if (!foundWhichIsVisible) {
    unhighlight(window.lastVisibleElement);
  }
  // "Un"highlight all the did not match
  for (hIter = 0; hIter < window.listsToWorkOn.length; hIter += 1) {
    if (window.lastVisibleElement && window.listsToWorkOn[hIter].href !== window.lastVisibleElement.href) {
      unhighlight(window.listsToWorkOn[hIter]);
    }
  }
  // Highlight the parents
  highlightParents(window.lastVisibleElement);
  // change the browser URL if possible to the ID user is visiting.
  if (foundWhichIsVisible) {
    manageAddressBarURL(window.lastVisibleElement);
  }
  return true;
}
function createFeedback() {
    "use strict";
    var feedback, ratBtn, spanRat, stars, a1, a2, a3, a4, a5, result, rating, loadImage, loadImg,
        errorresult, divs, i = 0, IND, fbRating, innerR, userCommentsTitleLabel, userCommentsTitle,
        subject, From, postPublic, postPublicLabel, postAnonymous, p, p1, outDiv, aClose,
        postAnonymousLabel, div2, userCommentsBodyLabel, userCommentsBody, hidden, signOnLink,
        a1, a2, a3, a4, submit, topictitle, fieldset, commentForm, clonerat, user = "", publicRadio, signOn ;
    divs = document.getElementsByTagName("div");
    for (i = 0; i < divs.length; i += 1) {
      if (divs[i].className.indexOf("IND ") != -1) { IND = divs[i]; }
    }
    if (readCookie("ORA_UCM_INFO").match(/([\-.+\w]+@[\-.+\w]+)/)) {
        user = RegExp.$1;
    }
    feedback = document.getElementById("feedback");
    if (feedback) {
    result = document.createElement("strong");
    result.id = "result";
    result.appendChild(document.createTextNode("Feedback Received. Thank You!"));
    //feedback.appendChild(result);
    errorresult = document.createElement("strong");
    errorresult.id = "errorresult";
    errorresult.appendChild(document.createTextNode("Some error occured. Please try again later."));
    //feedback.appendChild(errorresult);

    fbRating = document.createElement("div");
    fbRating.id = "feedbackRating";
    fbRating.style.position = "fixed";
    fbRating.style.width = "350px";
    fbRating.style.height = "350px";
    innerR = document.createElement("div");
    innerR.className = "innerRating";
    userCommentsTitleLabel = document.createElement("label");
    userCommentsTitleLabel.style.color = "#666";
    userCommentsTitleLabel.htmlFor = "userCommentsTitle";
userCommentsTitleLabel.appendChild(document.createTextNode(l10n.subject));

    userCommentsTitle = document.createElement("input");
    userCommentsTitle.type = "text";
    userCommentsTitle.name = "title";
    userCommentsTitle.id = "userCommentsTitle";
    userCommentsTitle.size = "40";

    subject = document.createElement("p");
    subject.style.marginBottom = "0";
    //subject.style.marginTop = "1ex";
    subject.appendChild(userCommentsTitleLabel);
    subject.appendChild(document.createTextNode(" "));
    subject.appendChild(userCommentsTitle);

    From = document.createElement("label");
    From.style.color = "#666";
    From.style.height = "2px";
    From.style.textIndent = "-5900px";
    From.appendChild(document.createTextNode(l10n.from));

    postPublic = document.createElement("input");
    postPublic.type = "radio";
    postPublic.name = "submitter";
    postPublic.value = user;
    postPublic.id = "postPublic";

    postPublicLabel = document.createElement("label");
    postPublicLabel.htmlFor = "postPublic";
postPublicLabel.appendChild(document.createTextNode(user.toLowerCase()));

    postAnonymous = document.createElement("input");
    postAnonymous.type = "radio";
    postAnonymous.name = "submitter";
    postAnonymous.value = "";
    postAnonymous.id = "postAnonymous";

    postAnonymousLabel = document.createElement("label");
    postAnonymousLabel.htmlFor = "postAnonymous";
postAnonymousLabel.appendChild(document.createTextNode(l10n.anonymous));

    div2 = document.createElement("p");
    div2.style.margin = "0 0 1ex 0";
    div2.appendChild(From);
    div2.appendChild(document.createTextNode(" \u00A0 \u00A0 "));
    publicRadio = document.createElement("span");
    publicRadio.appendChild(postPublic);
    //publicRadio.appendChild(document.createElement("br"));
    publicRadio.appendChild(postPublicLabel);
    publicRadio.appendChild(document.createTextNode(" "));
    publicRadio.appendChild(document.createElement("br"));
    div2.appendChild(publicRadio);
    div2.appendChild(postAnonymous);
    div2.appendChild(document.createTextNode(" "));
    div2.appendChild(postAnonymousLabel);

    signOn = document.createElement("span");
    signOn.style.display = "none";
    signOn.appendChild(document.createTextNode(l10n.or));
    signOnLink = document.createElement("a");
    signOnLink.href = "http://www.oracle.com/webapps/redirect/signon?nexturl=" +
      window.location.href;
    signOnLink.appendChild(document.createTextNode(l10n.sign_in));
    signOn.appendChild(signOnLink);
    signOn.appendChild(document.createTextNode(")"));
    div2.appendChild(signOn);

    if (user === "") {
      publicRadio.style.display = "none";
      signOn.style.display = "inline";
      postAnonymous.defaultChecked = true;
  //    postAnonymous.disabled = true;
    } else {
      postPublic.defaultChecked = true;
      postPublic.style.marginLeft = "-12px";
      //postAnonymous.style.marginLeft = "12px";
    }

    userCommentsBodyLabel = document.createElement("label");
    userCommentsBodyLabel.htmlFor = "userCommentsBody";
userCommentsBodyLabel.appendChild(document.createTextNode("Comment body:"));
    userCommentsBodyLabel.style.display = "none";

    userCommentsBody = document.createElement("textarea");
    userCommentsBody.id = "userCommentsBody";
    userCommentsBody.rows = "5";
    userCommentsBody.cols = "50";
    userCommentsBody.name = "comment_text";

    hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.id = "path";
    hidden.name = "path";
    if (tAuthority === "tahiti-stage.us.oracle.com") {
      hidden.value = window.location.href;
    } else {
  //    hidden.value = tPath;
      hidden.value = window.location.href;
    }

    topictitle = document.createElement("input");
    topictitle.type = "hidden";
    topictitle.name = "topictitle";
    topictitle.id = "topictitle";
    topictitle.value = document.title;

    p = document.createElement("p");
    p.style.color = "#333";
    p.style.marginTop = "0";
    p.style.marginBottom = "0.75rem";
    p.appendChild(document.createTextNode(l10n.comment_first_part));
    p.appendChild(document.createTextNode(" " + l10n.comment_second_part));
    a1 = document.createElement("a");
    a1.style.fontSize = "12px";
    /*
    if (document.getElementsByTagName("html")[0].getAttribute("xml:lang")) {
      lang = document.getElementsByTagName("html")[0].getAttribute("xml:lang");
      lang = "en";
    } else if (document.getElementsByTagName("html")[0].lang) {
      lang = document.getElementsByTagName("html")[0].lang;
      lang = "en";
    } else {
      lang = "en";
    }
    */
    if (tAuthority === "tahiti-stage.us.oracle.com") {
      a1.href = "http://wd0338.oracle.com/archive/cd_ns/E23003_01/html/" + "en" +
        "/comment_disclaimer.htm";
    } else {
      a1.href = "http://docs.oracle.com/cd/E23003_01/html/" + "en" +
        "/comment_disclaimer.htm";
    }
a1.appendChild(document.createTextNode(l10n.comment_third_part));
    p.appendChild(a1);
p.appendChild(document.createTextNode(l10n.comment_fourth_part));
    p.appendChild(document.createTextNode(l10n.comment_fifth_part));
    a2 = document.createElement("a");
    a2.style.fontSize = "12px";
    a2.href = "https://community.oracle.com/";
a2.appendChild(document.createTextNode(l10n.comment_fifth_part_otn));
    p.appendChild(a2);
    p.appendChild(document.createTextNode(l10n.comment_sixth_part));
    p.appendChild(document.createTextNode(
      l10n.comment_seventh_part
    ));
    a3 = document.createElement("a");
    a3.href = "https://support.oracle.com/";
    a3.style.fontSize = "12px";
a3.appendChild(document.createTextNode(l10n.comment_eighth_part));
    p.appendChild(a3);
    p.appendChild(document.createTextNode("."));

    submit = document.createElement("input");
    submit.type = "submit";
    submit.value = l10n.submit;
    submit.className = "submit";
    submit.id = "submitajax";
    submit.style.marginRight = "0";
    submit.style.cssFloat = "right";
    submit.onclick = function() {submitAjax(); return false;};
    submit.style.display = "block";
    outDiv = document.createElement("div");
    outDiv.style.marginTop = "0px";
    outDiv.style.marginRight = "0px";
    rating = document.createElement("input");
    rating.type = "hidden";
    rating.name = "rating";
    rating.id = "rating";
    //outDiv.appendChild(rating);
    /*clonerat = ratBtn.cloneNode(true);
    clonerat.id = "ratBtn1";
    outDiv.appendChild(clonerat);*/
    aClose= document.createElement("a");
    aClose.className = "closebutton";
    aClose.onclick = function() {closeFeedback(); return false};
    aClose.appendChild(document.createTextNode("\u00D7"));
    outDiv.appendChild(aClose);
    //outDiv.appendChild(document.createElement("br"));
    outDiv.appendChild(subject);
    outDiv.appendChild(hidden);
    outDiv.appendChild(topictitle);
    outDiv.appendChild(subject);
    outDiv.appendChild(userCommentsBody);
    div2.appendChild(submit);
    outDiv.appendChild(div2);
    outDiv.appendChild(document.createElement("br"));
    outDiv.appendChild(p);
    commentForm = document.createElement("form");
    commentForm.method = "post";
    commentForm.style.marginTop = "1rem";
    /*if (tAuthority === "tahiti-stage.us.oracle.com") {
      commentForm.action = "http://tahiti-stage.us.oracle.com/pls/tahiti/comments_test";
    } else {
      commentForm.action = "http://www.oracle.com/pls/tahiti/comments_test";
    }*/
    commentForm.appendChild(outDiv);
    innerR.appendChild(commentForm);
    fbRating.appendChild(innerR);
    loadImage = document.createElement("div");
    loadImage.id = "loadImage";
    loadImg = document.createElement("img");
    loadImg.src = dcommonPath + "img/ajax-loader.gif";
    loadImg.alt = "Submitting..";
    loadImage.appendChild(loadImg);
    loadImage.appendChild(document.createTextNode("Thank you for your feedback!"));
    fbRating.appendChild(loadImage);
    if (feedback) {
        feedback.parentNode.insertBefore(fbRating, feedback.nextSibling);
    }
    }
}
addLoadEvent(createFeedback);

function createDownload () {
    "use strict";
    var linkEle, i1 = 0, ePub, mobi, pdf, downDiv, download, pdfDiv, pdfA,
        ePubDiv, ePubA, mobiDiv, mobiA, aClose;
    linkEle = document.getElementsByTagName("link");
    for (i1 = 0; i1 < linkEle.length; i1 += 1) {
      if (linkEle[i1].getAttribute("rel") === 'alternate' && linkEle[i1].getAttribute("href").match(/(.*)\.epub$/)) {
        ePub = linkEle[i1].href;
      } else if (linkEle[i1].getAttribute("rel") === 'alternate' && linkEle[i1].getAttribute("href").match(/(.*)\.mobi$/)) {
        mobi = linkEle[i1].href;
      } else if (linkEle[i1].getAttribute("rel") === 'alternate' && linkEle[i1].getAttribute("href").match(/(.*)\.pdf$/)) {
          pdf = linkEle[i1].href;
      }
    }
    download = document.getElementById("download");
    if (download) {
        if(!pdf && !mobi && !ePub) {
            download.disabled = "true";
        } else {
            downDiv = document.createElement("div");
            downDiv.className = "download";
            downDiv.id = "downloadsect";
            downDiv.style.position = "fixed";
            downDiv.style.color = "#707070";
            aClose= document.createElement("a");
            aClose.className = "closebutton";
            aClose.onclick = function() {closeDownload(); return false};
            aClose.appendChild(document.createTextNode("\u00D7"));
            downDiv.appendChild(aClose);
            if (pdf) {
                pdfDiv = document.createElement("div");
                pdfA = document.createElement("a");
                pdfA.href = pdf;
                pdfA.appendChild(document.createTextNode("PDF"));
                pdfDiv.appendChild(pdfA);
                pdfDiv.appendChild(document.createTextNode(" - best for offline viewing and printing"));
                downDiv.appendChild(pdfDiv);
            }
            if (ePub) {
                ePubDiv = document.createElement("div");
                ePubA = document.createElement("a");
                ePubA.href = ePub;
                ePubA.appendChild(document.createTextNode("ePub"));
                ePubDiv.appendChild(ePubA);
                ePubDiv.appendChild(document.createTextNode(" - best for most mobile devices"));
                downDiv.appendChild(ePubDiv);
            }
            if (mobi) {
                mobiDiv = document.createElement("div");
                mobiA = document.createElement("a");
                mobiA.href = mobi;
                mobiA.appendChild(document.createTextNode("Mobi"));
                mobiDiv.appendChild(mobiA);
                mobiDiv.appendChild(document.createTextNode(" - best for Amazon Kindle devices"));
                downDiv.appendChild(mobiDiv);
            }
            download.parentNode.appendChild(downDiv);
        }
    }
}
addLoadEvent(createDownload);

function modifyColor(obj) {
    "use strict";
    var setVal, node;
    setVal = obj.title;
    node = obj.previousSibling;
    obj.className = "starfull";
    while (node) {
        node.className = "starfull";
        node = node.previousSibling;
    }
    node = obj.nextSibling;
    while (node) {
        node.className = "starempty";
        node = node.nextSibling;
    }
}
function removeColor(obj) {
    "use strict";
    var setVal, node;
    setVal = obj.title;
    node = obj.previousSibling;
    obj.className = "starempty";
    while (node) {
        node.className = "starempty";
        node = node.previousSibling;
    }
    node = obj.nextSibling;
    while (node) {
        node.className = "starempty";
        node = node.nextSibling;
    }
}
function setRating(obj) {
    "use strict";
    var setVal, rating, prevSibs, node, feedback, fbRating, stars, i = 0,
        spans, astars, fndstars = false, j = 0;
    /*setVal = obj.title;
    rating = document.getElementById("rating");
    if(setVal) {
        rating.value = setVal;
    }*/
    /*node = obj.previousSibling;
    obj.className = "starfull";
    while (node) {
        node.className = "starfull";
        node = node.previousSibling;
    }
    node = obj.nextSibling;
    while (node) {
        node.className = "starempty";
        node = node.nextSibling;
    }*/
    /*spans = document.getElementsByTagName("span");
    for (i = 0; i < spans.length; i += 1) {
      if (spans[i].className.indexOf("stars") != -1) {
        stars = spans[i];
        astars = stars.getElementsByTagName("a");
        for ( j = 0; j < astars.length; j += 1) {
            if (astars[j].title === setVal) {
                fndstars = true;
                astars[j].className = "starfull";
            } else {
                if(fndstars) {
                    astars[j].className = "starempty";
                } else {
                    astars[j].className = "starfull";
                }
            }
        }
        fndstars = false;
      }
    }*/
    feedback = document.getElementById("feedback");
    fbRating = document.getElementById("feedbackRating");
    fbRating.style.width = (document.getElementById("leftsidebar").offsetWidth - 5 ) + 'px';
    fbRating.style.display = "block";
}

function setDownload(obj) {
    "use strict";
    var setVal, rating, prevSibs, node, feedback, fbRating, stars, i = 0,
        spans, astars, fndstars = false, j = 0;
    feedback = document.getElementById("download");
    fbRating = document.getElementById("downloadsect");
    fbRating.style.left = (feedback.getBoundingClientRect().left - 1) + "px";
    fbRating.style.top = (feedback.getBoundingClientRect().top - 20)   + "px";
    //feedback.style.display = "none";
    fbRating.style.display = "inline";

}

function closeFeedback(obj) {
    "use strict";
    var fbRating, feedback;
    feedback = document.getElementById("feedback");
    feedback.style.display = "inline";
    fbRating = document.getElementById("feedbackRating");
    fbRating.style.display = "none";
}

function closeDownload() {
    "use strict";
    var fbRating, feedback;
    feedback = document.getElementById("download");
    feedback.style.display = "inline";
    fbRating = document.getElementById("downloadsect");
    fbRating.style.display = "none";
}
