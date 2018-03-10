function socializer_addbookmark(t){var e=navigator.userAgent.toLowerCase(),s=e.indexOf("mac")!=-1,r=""
t.preventDefault(),r=(s?"Command/Cmd":"CTRL")+" + D",alert("Press "+r+" to bookmark this page")}function socializer_shortlink(t,e){t.preventDefault(),link=e.getAttribute("href"),"#"!=link&&prompt("Short link",link)}window.wpsr_helpers={addClass:function(t,e){t.classList?t.classList.add(e):t.className+=" "+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},popup:function(t,e,s,r){var n=screen.width/2-s/2,o=screen.height/2-r/2
return window.open(t,e,"toolbar=no,location=no,menubar=no,scrollbars=yes,width="+s+",height="+r+",top="+o+",left="+n)},ajax:function(t,e,s,r,n){var o=new XMLHttpRequest
o.props=n,o.open(e,t,!0),"POST"==e&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.onreadystatechange=function(){if(4==o.readyState&&200==o.status)return r(o)},o.send(s)},format_num:function(t){if(t<1e3)return t
for(var e=["k","m","b","t"],s=t,r=0;r<e.length;r++)if(!((t/=1e3)>1e3)){s=Math.round(100*t)/100+e[r]
break}return s}},document.addEventListener("DOMContentLoaded",function(){for(scr_links=document.querySelectorAll(".socializer.sr-popup a"),u=0;u<scr_links.length;u++){var t=scr_links[u]
t.addEventListener("click",function(t){var e=this.getAttribute("href")
"#"==e||this.hasAttribute("onclick")||wpsr_helpers.popup(e,"_blank",800,500),t.preventDefault()})}var e=document.querySelector(".wpsr-sharebar")
if(e){var s=function(){vlsb=document.querySelector(".wpsr-sb-vl-scontent"),vlsb&&(stick=vlsb.getAttribute("data-stickto"),stick_ele=document.querySelector(stick),stick_ele&&(vlsb.style.left=stick_ele.offsetLeft+"px")),e&&window.innerWidth<=800&&wpsr_helpers.addClass(e,"wpsr-mow")}
s(),window.addEventListener("resize",s),sb_close_btn=e.querySelector(".wpsr-sb-close"),sb_close_btn.addEventListener("click",function(){e.classList.contains("wpsr-mow")?wpsr_helpers.removeClass(e,"wpsr-mow"):wpsr_helpers.addClass(e,"wpsr-mow")})}if(tsb=document.querySelector(".wpsr-text-sb"),tsb){window.wpsr_tsb={stext:"",startx:0,starty:0}
var r={ptitle:tsb.getAttribute("data-title"),purl:tsb.getAttribute("data-url"),psurl:tsb.getAttribute("data-surl"),ptuname:tsb.getAttribute("data-tuname"),cnt_sel:tsb.getAttribute("data-content"),word_count:tsb.getAttribute("data-tcount")},n=function(){var t=""
return window.getSelection?t=window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&(t=document.selection.createRange().text),t},o=function(t,e){tsb.style.left=t+"px",tsb.style.top=e+"px",wpsr_helpers.addClass(tsb,"wpsr-tsb-active")},a=function(){wpsr_helpers.removeClass(tsb,"wpsr-tsb-active")},i=function(){var t=wpsr_tsb.stext,e=parseInt(r.word_count)
return 0==e?t:t.split(" ").slice(0,e).join(" ")},l=function(t){var e={"{title}":r.ptitle,"{url}":r.purl,"{s-url}":r.psurl,"{twitter-username}":r.ptuname,"{excerpt}":i()}
for(var s in e)e.hasOwnProperty(s)&&(t=t.replace(RegExp(s,"g"),e[s]))
return t}
if(""!=r.cnt_sel)for(var p=r.cnt_sel.replace(/[\[\]<>"'\/\\=&%]/g,""),c=document.querySelectorAll(p),u=0;u<c.length;u++){var d=c[u]
d.addEventListener("mousedown",function(t){wpsr_tsb.startx=t.pageX,wpsr_tsb.starty=t.pageY}),d.addEventListener("mouseup",function(t){var e=n()
""!=e?(tsb_x=(t.pageX+parseInt(wpsr_tsb.startx))/2,tsb_y=Math.min(wpsr_tsb.starty,t.pageY),e!=wpsr_tsb.stext?(o(tsb_x,tsb_y),wpsr_tsb.stext=e):a()):a()})}document.body.addEventListener("mousedown",function(t){a()}),tsb.addEventListener("mousedown",function(t){t.stopPropagation()})
for(var w=tsb.querySelectorAll("a"),u=0;u<w.length;u++){var t=w[u]
t.addEventListener("click",function(t){var e=this.getAttribute("data-link")
"#"!=e&&(rep_link=l(e),wpsr_helpers.popup(rep_link,800,500)),t.preventDefault()})}}if(msb=document.querySelector(".wpsr-mobile-sb"),msb){var b=0
window.addEventListener("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop
t>b?wpsr_helpers.addClass(msb,"wpsr-msb-hide"):wpsr_helpers.removeClass(msb,"wpsr-msb-hide"),b=t},!1)}var f=document.querySelector(".wpsr-followbar")
f&&(fb_close_btn=f.querySelector(".wpsr-fb-close"),fb_close_btn.addEventListener("click",function(){f.classList.contains("wpsr-mow")?wpsr_helpers.removeClass(f,"wpsr-mow"):wpsr_helpers.addClass(f,"wpsr-mow")})),mow=document.querySelectorAll("[data-minonwidth]")
var m=function(t,e){var s=t.getAttribute("data-minonwidth")
s>0&&(e<=s?wpsr_helpers.addClass(t,"wpsr-mow"):wpsr_helpers.removeClass(t,"wpsr-mow"))}
if(mow.length>0&&["resize","load"].forEach(function(t){window.addEventListener(t,function(){for(u=0;u<mow.length;u++){m(mow[u],window.innerWidth)}})}),wpsr_ajax_url){var v=document.querySelectorAll("[data-wpsrs]")
if(v.length>0){var _={},h=wpsr_ajax_url+"?action=wpsr_share_count"
for(u=0;u<v.length;u++){var g=v[u],y=g.getAttribute("data-wpsrs"),k=g.getAttribute("data-wpsrs-svcs").split(",")
y in _||(_[y]=[])
for(j=0;j<k.length;j++)_[y].indexOf(k[j])===-1&&_[y].push(k[j])}var L=function(t){var e=JSON.parse(t.responseText),s=document.querySelectorAll('[data-wpsrs="'+t.props.forURL+'"]')
for(u=0;u<s.length;u++){var r=s[u],n=r.getAttribute("data-wpsrs-svcs").split(","),o=0
for(j=0;j<n.length;j++){var a=n[j]
a in e&&(o+=parseInt(e[a])||0)}r.innerHTML=wpsr_helpers.format_num(o)}}
for(var y in _)_.hasOwnProperty(y)&&(send_data={url:y,services:_[y]},to_send="data="+JSON.stringify(send_data),wpsr_helpers.ajax(h,"POST",to_send,L,{forURL:y}))}}})
