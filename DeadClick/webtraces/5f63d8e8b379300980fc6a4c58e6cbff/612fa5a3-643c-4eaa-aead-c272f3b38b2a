/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/* INVIEW */
(function(c){function p(){var d,a={height:h.innerHeight,width:h.innerWidth};if(!a.height&&((d=i.compatMode)||!c.support.boxModel))d=d==="CSS1Compat"?k:i.body,a={height:d.clientHeight,width:d.clientWidth};return a}var m={},e,a,i=document,h=window,k=i.documentElement,j=c.expando;c.event.special.inview={add:function(a){m[a.guid+"-"+this[j]]={data:a,$element:c(this)}},remove:function(a){try{delete m[a.guid+"-"+this[j]]}catch(c){}}};c(h).bind("scroll resize",function(){e=a=null});setInterval(function(){var d=
c(),j,l=0;c.each(m,function(a,b){var c=b.data.selector,e=b.$element;d=d.add(c?e.find(c):e)});if(j=d.length){e=e||p();for(a=a||{top:h.pageYOffset||k.scrollTop||i.body.scrollTop,left:h.pageXOffset||k.scrollLeft||i.body.scrollLeft};l<j;l++)if(c.contains(k,d[l])){var g=c(d[l]),f={height:g.height(),width:g.width()},b=g.offset(),n=g.data("inview"),o;if(!a||!e)break;b.top+f.height>a.top&&b.top<a.top+e.height&&b.left+f.width>a.left&&b.left<a.left+e.width?(o=a.left>b.left?"right":a.left+e.width<b.left+f.width?
"left":"both",f=a.top>b.top?"bottom":a.top+e.height<b.top+f.height?"top":"both",b=o+"-"+f,(!n||n!==b)&&g.data("inview",b).trigger("inview",[!0,o,f])):n&&g.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);

/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);

(function(c,n){var k="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(l){function m(){var b=c(h),a=c(g);d&&(g.length?d.reject(e,b,a):d.resolve(e));c.isFunction(l)&&l.call(f,e,b,a)}function i(b,a){b.src===k||-1!==c.inArray(b,j)||(j.push(b),a?g.push(b):h.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(h),c(g)]),e.length===j.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var f=this,d=c.isFunction(c.Deferred)?c.Deferred():
0,o=c.isFunction(d.notify),e=f.find("img").add(f.filter("img")),j=[],h=[],g=[];e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){i(b.target,"error"===b.type)}).each(function(b,a){var e=a.src,d=c.data(a,"imagesLoaded");if(d&&d.src===e)i(a,d.isBroken);else if(a.complete&&a.naturalWidth!==n)i(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=k,a.src=e}):m();return d?d.promise(f):f}})(jQuery);

/*!
// Infinite Scroll jQuery plugin
// copyright Paul Irish, licensed GPL & MIT
// version 1.5.101207

// home and docs: http://www.infinite-scroll.com
*/
(function (a) {
  a.fn.infinitescroll = function (d, f) {
    function l() {
      if (j.debug) {
        window.console && console.log.call(console, arguments)
      }
    }
    function w(y) {
      for (var x in y) {
        if (x.indexOf && x.indexOf("Selector") > -1 && a(y[x]).length === 0) {
          l("Your " + x + " found no elements.");
          return false
        }
        return true
      }
    }
    function t(x) {
      if (x.match(/^(.*?)\b2\b(.*?$)/)) {
        x = x.match(/^(.*?)\b2\b(.*?$)/).slice(1)
      } else {
        if (x.match(/^(.*?)2(.*?$)/)) {
          if (x.match(/^(.*?page=)2(\/.*|$)/)) {
            x = x.match(/^(.*?page=)2(\/.*|$)/).slice(1);
            return x
          }
          l("_");
          x = x.match(/^(.*?)2(.*?$)/).slice(1)
        } else {
          if (x.match(/^(.*?page=)1(\/.*|$)/)) {
            x = x.match(/^(.*?page=)1(\/.*|$)/).slice(1);
            return x
          }
          if (a.isFunction(j.pathParse)) {
            return [x]
          } else {
            l("error");
            c.isInvalidPage = true
          }
        }
      }
      return x
    }
    function e() {
      j.isFiltered = true;
      return a(window).trigger("error.infscr." + j.infid, [302])
    }
    function i() {
      var x = 0 + a(document).height() - (a(c.container).scrollTop() || a(c.container.ownerDocument.body).scrollTop()) - a(window).height();
      l("math:", x, c.pixelsFromNavToBottom);
      return (x - j.bufferPx < c.pixelsFromNavToBottom)
    }
    function k() {
      c.loadingMsg.find("img").hide().parent().find("div").html(j.donetext).animate({
        opacity: 1
      }, 2000, function () {
        a(this).parent().fadeOut("normal")
      });
      j.errorCallback();
    }
    function q() {
      if (j.isDuringAjax || j.isInvalidPage || j.isDone || j.isFiltered || j.isPaused) {
        return
      }
      if (!i(j, c)) {
        return
      }
      a(document).trigger("retrieve.infscr." + j.infid);
    }
    function r() {
      j.isDuringAjax = true;
      c.loadingMsg.appendTo(j.loadMsgSelector).show(j.loadingMsgRevealSpeed, function () {
        a(j.navSelector).hide();
        j.currPage++;
        l("heading into ajax", m);
        h = a(j.contentSelector).is("table") ? a("<tbody/>") : a("<div/>");
        b = document.createDocumentFragment();
        if (a.isFunction(j.pathParse)) {
          u = j.pathParse(m.join("2"), j.currPage)
        } else {
          u = m.join(j.currPage)
        }
        h.load(u + " " + j.itemSelector, null, g);
      })
    }
    function g() {
      if (j.isDone) {
        k();
        return false
      } else {
        var y = h.children();
        if (y.length == 0 || y.hasClass("error404")) {
          return a(window).trigger("error.infscr." + j.infid, [404])
        }
        while (h[0].firstChild) {
          b.appendChild(h[0].firstChild)
        }
        a(j.contentSelector)[0].appendChild(b);
        c.loadingMsg.fadeOut("normal");
        if (j.animate) {
          var x = a(window).scrollTop() + a("#infscr-loading").height() + j.extraScrollPx + "px";
          a("html,body").animate({
            scrollTop: x
          }, 800, function () {
            j.isDuringAjax = false
          })
        }
        f.call(a(j.contentSelector)[0], y.get(), j.currPage);
        if (!j.animate) {
          j.isDuringAjax = false
        }
      }
    }
    function v(x) {
      if (x == "pause") {
        j.isPaused = true;
      } else {
        if (x == "resume") {
          j.isPaused = false
        } else {
          j.isPaused = !j.isPaused
        }
      }
      l("Paused: " + j.isPaused);
      return false
    }
    function s(x) {
      if (!j.isDone && x == 404) {
        l("Page not found.");
        k();
        j.isDone = true;
        j.currPage = 1;
        a(window).unbind("scroll.infscr." + j.infid);
        a(document).unbind("retrieve.infscr." + j.infid)
      }
      if (j.isFiltered && x == 302) {
        l("Filtered. Going to next instance...");
        j.isDone = true;
        j.currPage = 1;
        j.isPaused = false;
        a(window).unbind("scroll.infscr." + j.infid, q).unbind("pause.infscr." + j.infid).unbind("filter.infscr." + j.infid).unbind("error.infscr." + j.infid);
        a(document).unbind("retrieve.infscr." + j.infid, r)
      }
    }
    a.browser.ie6 = a.browser.msie && a.browser.version < 7;
    var j = a.extend({}, a.infinitescroll.defaults, d),
        c = a.infinitescroll,
        h, b, u, n, p;
    f = f ||
    function () {};
    if (!w(j)) {
      return false
    }
    c.container = document.documentElement;
    j.contentSelector = j.contentSelector || this;
    j.loadMsgSelector = j.loadMsgSelector || j.contentSelector;
    var o = /(.*?\/\/).*?(\/.*)/,
        m = a(j.nextSelector).attr("href");
    if (!m) {
      l("Navigation selector not found");
      return
    }
    m = t(m);
    c.pixelsFromNavToBottom = a(document).height() + (c.container == document.documentElement ? 0 : a(c.container).offset().top) - a(j.navSelector).offset().top;
    c.loadingMsg = a('<div id="infscr-loading" style="text-align: center;"><img alt="Loading..." src="' + j.loadingImg + '" /><div>' + j.loadingText + "</div></div>");
    (new Image()).src = j.loadingImg;
    a(window).bind("scroll.infscr." + j.infid, q).bind("filter.infscr." + j.infid, e).bind("error.infscr." + j.infid, function (y, x) {
      s(x)
    }).bind("pause.infscr." + j.infid, function (y, x) {
      v(x)
    }).trigger("scroll.infscr." + j.infid);
    a(document).bind("retrieve.infscr." + j.infid, r);
    return this
  };
  a.infinitescroll = {
    defaults: {
      debug: false,
      preload: false,
      nextSelector: "div.navigation a:first",
      loadingImg: "http://www.infinite-scroll.com/loading.gif",
      loadingText: "<em>Loading the next set of posts...</em>",
      donetext: "<em>End</em>",
      navSelector: "div.navigation",
      contentSelector: null,
      loadMsgSelector: null,
      loadingMsgRevealSpeed: "fast",
      extraScrollPx: 150,
      itemSelector: "div.post",
      animate: false,
      pathParse: undefined,
      bufferPx: 40,
      errorCallback: function () {},
      infid: 1,
      currPage: 1,
      isDuringAjax: false,
      isInvalidPage: false,
      isFiltered: false,
      isDone: false,
      isPaused: false
    },
    loadingImg: undefined,
    loadingMsg: undefined,
    container: undefined,
    currDOMChunk: null
  }
})(jQuery);
