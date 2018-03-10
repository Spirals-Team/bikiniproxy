/* Compressed by the perl version of jsmin. */
/* JavaScript::Minifier 0.02 */

if(!window['console']&&window.opera&&window.opera.postError){window.console={};remapConsoleFunctions(window.opera.postError);}else if(!window['console']){window.console={};var emptyFunction=function(){};remapConsoleFunctions(emptyFunction);}else{var emptyFunction=function(){};var toFunction=console['debug']||console['log']||emptyFunction;remapConsoleFunctions(toFunction);}
function remapConsoleFunctions(newFunction){var remapNames=["log","debug","info","warn","error","trace"];var ignoreNames=["assert","dir","dirxml","group","groupEnd","time","timeEnd","count","profile","profileEnd"];for(var i=0;i<remapNames.length;i++){if(!window.console[remapNames[i]]){window.console[remapNames[i]]=newFunction;}}
for(var i=0;i<ignoreNames.length;i++){if(!window.console[ignoreNames[i]]){window.console[ignoreNames[i]]=function(){};}}}
function Utils()
{}
var UtilsConstants={DEFAULT_WINDOW_WIDTH:800,DEFAULT_WINDOW_HEIGHT:600};function addOnLoadHandler(_fn)
{Utils.addEvent(window,'load',_fn);}
function getObj(_id)
{var obj=null;if(_id){obj=((typeof _id)=='string')?(document.getElementById?document.getElementById(_id):null):_id;}
return obj;}
function MM_swapImgRestore(){var i,x,a=document.MM_sr;for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)
x.src=x.oSrc;}
function MM_preloadImages(){var d=document;if(d.images){if(!d.MM_p)
d.MM_p=new Array();var i,j=d.MM_p.length,a=MM_preloadImages.arguments;for(i=0;i<a.length;i++){if(a[i].indexOf("#")!=0){d.MM_p[j]=new Image;d.MM_p[j++].src=a[i];}}}
window.self.focus();}
function MM_findObj(n,d){var p,i,x;if(!d)
d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p);}
if(!(x=d[n])&&d.all)
x=d.all[n];for(i=0;!x&&i<d.forms.length;i++)
x=d.forms[i][n];for(i=0;!x&&d.layers&&i<d.layers.length;i++)
x=MM_findObj(n,d.layers[i].document);if(!x&&d.getElementById)
x=d.getElementById(n);return x;}
function MM_swapImage(){var i,j=0,x,a=MM_swapImage.arguments;document.MM_sr=new Array;for(i=0;i<(a.length-2);i+=3){if((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x;if(!x.oSrc)
x.oSrc=x.src;x.src=a[i+2];}}}
function MM_openBrWindow(theURL,winName,features){window.open(theURL,winName,features);}
function appendToUrl(_baseUrl,_pName,_pValue)
{var newUrl=_baseUrl;if(_baseUrl&&(typeof(_baseUrl)=='string')){var re=new RegExp('([?&]'+_pName+'=)[^&]*','g');if(_baseUrl.search(re)!=-1)
newUrl=_baseUrl.replace(re,'$1'+_pValue);else{var sep=(newUrl.indexOf('?')==-1)?'?':'&';newUrl=newUrl+sep+_pName+'='+_pValue;}}
return newUrl;}
function addHiddenInput(_form,_name,_value)
{var hid=getObj(_name);if(!hid||!hid.form||(hid.form!=_form)){try{hid=document.createElement('INPUT');hid.type='hidden';hid.name=_name;_form.appendChild(hid);}
catch(e){}}
if(hid&&(hid.tagName=='INPUT'))
hid.value=escape(_value);return hid;}
function CurrencyContext(_currencySymbol,_grpSepChar,_decSepChar,_fracDigits)
{this.currencySymbol=_currencySymbol;this.grpSepChar=_grpSepChar;this.decSepChar=_decSepChar;this.fracDigits=_fracDigits;}
var utils_currencyContext=new CurrencyContext('$',',','.',2);function setCurrencyContext(_currencySymbol,_grpSepChar,_decSepChar,_fracDigits)
{utils_currencyContext=new CurrencyContext(_currencySymbol,_grpSepChar,_decSepChar,_fracDigits);}
function parseCurrency(_sAmount,_currencyLocale)
{if(!_sAmount){return NaN;}
_sAmount=(function removeCurrencySymbols(curr){var countryCodes=['US','GB','CA'];var currencySymbols=['$','\u00A3'];for(var i=0;i<countryCodes.length;i++){var countryCode=countryCodes[i];for(var j=0;j<currencySymbols.length;j++){var currencySymbol=currencySymbols[j];curr=curr.replace(countryCode+currencySymbol,'').replace(currencySymbol+countryCode,'');}}
for(var i=0;i<currencySymbols.length;i++){var currencySymbol=currencySymbols[i];curr=curr.replace(currencySymbol,'');}
return curr;})(_sAmount);_sAmount=trim(_sAmount);var negativeSignDetectedAndRemoved=(_sAmount.match(/^-.*$/g)!=null);if(negativeSignDetectedAndRemoved){_sAmount=_sAmount.replace(/-(.*)/g,"$1");}
var accountantNegativeSignDetectedAndRemoved=(_sAmount.match(/^\(.*\)$/g)!=null);if(accountantNegativeSignDetectedAndRemoved){_sAmount=_sAmount.replace(/\((.*)\)/g,"$1");}
var currencyLocale=_currencyLocale;if(currencyLocale==='fr_CA'){_sAmount=_sAmount.replace(/,/g,".");_sAmount=_sAmount.replace(/\s/g,",");}
_sAmount=_sAmount.replace(/,/g,"");var retVal=_sAmount;retVal=Math.round(retVal*100);retVal=retVal*((negativeSignDetectedAndRemoved)?-1:1)*((accountantNegativeSignDetectedAndRemoved)?-1:1);return retVal;}
function formatCurrency(amountInCentsAsStringOrNumber,currencyLocale,excludeCurrencySymbol){var amount=parseFloat(amountInCentsAsStringOrNumber);if(isNaN(amount)){return amountInCentsAsStringOrNumber;}
var currencySymbol=(function getCurrencySymbolForLocale(currencyLocale){if(currencyLocale==='en_US'){return'$';}
else if(currencyLocale==='en_CA'){return'$';}
else if(currencyLocale==='en_GB'){return'\u00A3';}
else if(currencyLocale==='es_US'){return'US$';}
else if(currencyLocale==='fr_CA'){return' $';}
else{return'$';}})(currencyLocale);var isCurrencySymbolPrefix=(function isCurrencySymbolPrefix(currencyLocale){if(currencyLocale==='en_US'){return true;}
else if(currencyLocale==='en_CA'){return true;}
else if(currencyLocale==='en_GB'){return true;}
else if(currencyLocale==='es_US'){return true;}
else if(currencyLocale==='fr_CA'){return false;}
else{return true;}})(currencyLocale);var isAmountNegative=amount!==Math.abs(amount);var retVal=(function formatCurrencyAmount(amount){var tempVal=new String(amount/100);var delimiter=',';var returnVal='';var decChrIdx=tempVal.indexOf('.');if(decChrIdx>-1){remainder=tempVal.substr(decChrIdx);tempVal=tempVal.substr(0,decChrIdx);if(remainder.length==2){remainder+='0';}}else{remainder='.00';}
while(tempVal.length>3){returnVal=delimiter+tempVal.substr(tempVal.length-3)+returnVal;tempVal=tempVal.substr(0,tempVal.length-3);}
tempVal=tempVal+returnVal+remainder;return tempVal;})(Math.abs(amount));if(currencyLocale==='fr_CA'){retVal=retVal.replace(/,/g," ");retVal=retVal.replace(/\./g,",");}
if(!excludeCurrencySymbol){if(isCurrencySymbolPrefix){retVal=currencySymbol+retVal;}
else{retVal=retVal+currencySymbol;}}
if(isAmountNegative){retVal=(function(currencyString,currencyLocale){if(currencyLocale==='en_US'){return'('+currencyString+')';}
else if(currencyLocale==='en_CA'){return'('+currencyString+')';}
else if(currencyLocale==='en_GB'){return'-'+currencyString;}
else if(currencyLocale==='es_US'){return'('+currencyString+')';}
else if(currencyLocale==='fr_CA'){return'-'+currencyString;}
else{return'('+currencyString+')';}})(retVal,currencyLocale);}
return retVal;}
function getCurrencyScalingFactor(_fracDigits)
{if(_fracDigits==0)return 1;if(_fracDigits==1)return 10;if(_fracDigits==2)return 100;if(_fracDigits==3)return 1000;return 0;}
var utils_digits='0123456789';function parseIntStrict(_sNumber)
{if(!_sNumber)
return NaN;var nChars=_sNumber.length;if(nChars==0)
return NaN;for(var idx=0;idx<nChars;idx++){if(utils_digits.indexOf(_sNumber.charAt(idx))==-1)
return NaN;}
return parseInt(_sNumber);}
function getSelOptionObject(_formName,_selId)
{var _selection=null;var selList=null;if(document.getElementById)
selList=document.getElementById(_selId);else if(_formName)
selList=document.forms[_formName].elements[_selId];if(selList!=null){var _idx=selList.selectedIndex;return(_idx>=0)?selList.options[_idx]:null;}}
function getOptionSelection(_formName,_selId)
{var optObj=getSelOptionObject(_formName,_selId);return optObj?optObj.value:null;}
function addOptionToSelect(_window,_formName,_selId,_value,_label,_selected)
{var doc=_window?_window.document:window.document;var selList=null;if(doc.getElementById)
selList=doc.getElementById(_selId);else if(_formName)
selList=doc.forms[_formName].elements[_selId];if(selList!=null){var exists=0;for(i=0;i<selList.options.length;i++){if(selList.options[i].value==_value){exists=1;if(_selected){selList.options[i].selected=true;}}}
if(exists==0){var new_option=doc.createElement('OPTION');selList.options.add(new_option);new_option.value=_value;new_option.appendChild(doc.createTextNode(_label));new_option.selected=_selected;}}}
function deselectOption(_window,_formName,_selId,_value,_label,_selected)
{var selList=null;if(!_window)
_window=window;if(_window.document.getElementById)
selList=_window.document.getElementById(_selId);else if(_formName)
selList=_window.document.forms[_formName].elements[_selId];if(selList!=null){for(i=0;i<selList.options.length;i++){if((selList.options[i].value==_value)&&_selected)
selList.options[i].selected=false;}}}
function changeLinksToStayInPopup(_links)
{for(var i=0;(i<_links.length);i++){if(!_links[i].target){_links[i].target=name;if(_links[i].href&&(_links[i].href.indexOf('javascript:')<0))
_links[i].href=appendToUrl(_links[i].href,'mfc_popup','t');}}}
function link_submit_redirect(_evt)
{var e=_evt?_evt:event;if(e){var anchor=e.target?e.target:e.srcElement;anchor=findContainingLink(anchor);if(anchor&&anchor.href){var nextUrl=getObj('NEXTURL');if(nextUrl){nextUrl.value=anchor.href;nextUrl.form.submit();}}}
return false;}
function findContainingLink(_el)
{var link;if(_el){if((_el.tagName=='A')||(_el.tagName=='AREA'))
link=_el;else{_el=getAncestor('A',_el);link=_el?_el:getAncestor('AREA',_el);}}
return link;}
var Utils=new Utils();Utils.addEvent=function(_obj,_evType,_fn)
{if(_obj.addEventListener){_obj.addEventListener(_evType,_fn,false);return true;}
else if(_obj.attachEvent){return _obj.attachEvent('on'+_evType,_fn);}
else{return false;}}
Utils.prompt=function(_prompt,_default)
{DialogManager.closeAllDialogs();return window.prompt(_prompt,_default);}
Utils.htmlSafe=function(_inStr)
{if(_inStr==null||_inStr.length==0){return'';}
else{return _inStr.replace(/<[^>]*>/g,'');}}
Utils.trimStringToLength=function(_s,_maxLength)
{if(_maxLength==0||_s==null||_s.length<=_maxLength){return _s;}
else if(_maxLength<4){return _s.substring(0,_maxLength);}
else{var length=_s.length;var truncateIdx=_maxLength-3;var lastIdx=length-1;var prevIdx;while((prevIdx=_s.lastIndexOf(" ",lastIdx))!=-1){if(prevIdx+3<=_maxLength){truncateIdx=prevIdx;break;}
lastIdx=prevIdx;}
return _s.substring(0,truncateIdx)+'...';}}
function DlgMgr(){var wins=new Array();this.getDialogArray=function()
{return wins;}
this.close=function(_winName)
{var dlg=wins[_winName];if(dlg&&!dlg.closed){dlg.close();wins[_winName]=null;}};this.attach=function(_dialog)
{wins[_dialog.name]=_dialog;var fnBody='DialogManager.close("'+_dialog.name+'");';Utils.addEvent(window,'unload',new Function(fnBody));}}
DlgMgr.prototype.popupDlgLoad=function()
{if(window.name.indexOf('.pop')>0){changeLinksToStayInPopup(document.getElementsByTagName('A'));changeLinksToStayInPopup(document.getElementsByTagName('AREA'));var forms=document.getElementsByTagName('FORM');for(var i=0;(i<forms.length);i++){if(!forms[i].target)
forms[i].target=window.name;addHiddenInput(forms[i],'mfc_popup','t');}}}
DlgMgr.prototype.closeAllDialogs=function()
{var winArray=this.getDialogArray();if(winArray){for(var dlgName in winArray){var dlg=winArray[dlgName];if(dlg&&dlg.close&&!dlg.closed){dlg.close();}}}}
var DialogManager=new DlgMgr();function openModelessDialog(_url,_winName,_width,_height)
{var dlg;_url=appendToUrl(_url,'t',new Date().getTime());if(_winName.indexOf('.pop')<0)
_winName+='.pop';if(window.showModelessDialog){DialogManager.close(_winName);var win_args='dialogLeft:5;dialogTop:5;resizable:yes;scroll:yes;dialogWidth:'+_width+'px;dialogHeight:'+_height+'px;';dlg=window.showModelessDialog(_url,null,win_args);dlg.name=_winName;dlg.opener=window;window.cvDialog=dlg;Utils.addEvent(dlg,'load',DialogManager.popupDlgLoad);}
else{var win_args='alwaysRaised=yes,dependent=yes,resizable=yes,scrollbars=yes,left=5,top=5,width='+_width+',height='+_height;dlg=window.open(_url,_winName,win_args);}
if(dlg)
DialogManager.attach(dlg);return dlg;}
function reloadWindow(_win)
{if(_win&&_win.document){var loc=_win.document.location;if(loc&&loc.reload)
loc.reload(true);}}
function isNS(_versionNumber,_versionPlatform){if(_versionPlatform){return(navigator.appName.indexOf("Netscape")>-1)&(parseInt(navigator.appVersion)>=_versionNumber)&(navigator.platform.indexOf(_versionPlatform)>-1);}
else{return(navigator.appName.indexOf("Netscape")>-1)&(parseInt(navigator.appVersion)>=_versionNumber);}}
function isIE(_versionNumber,_versionPlatform){if(_versionPlatform){return(navigator.appName.indexOf("Microsoft")>-1)&(parseInt(navigator.appVersion)>=_versionNumber)&(navigator.platform.indexOf(_versionPlatform)>-1);}
else{return(navigator.appName.indexOf("Microsoft")>-1)&(parseInt(navigator.appVersion)>=_versionNumber);}}
function closeWin(){var isIE=(navigator.appName.indexOf("Microsoft")!=-1&&navigator.appName.indexOf("Mac")==-1);if(isIE)
window.close();else
self.close();}
function set_display(_el,_display)
{var obj=getObj(_el);if(obj&&obj.style){if((typeof _display)!='string')
_display=_display?'':'none';obj.style.display=_display;}}
function disable_edit(_el)
{var obj=getObj(_el);if(obj&&obj.style)
{obj.readOnly=true;}}
function removeChildren(_element){if(_element){while(_element.firstChild)
_element.removeChild(_element.firstChild);}}
function getElementText(_el)
{var TEXT_NODE=3;var text='';if(_el){if(_el.nodeType&&(_el.nodeType==TEXT_NODE))
text+=_el.data;var ch=_el.childNodes;for(var c=0;(c<ch.length);c++)
text+=getElementText(ch[c]);}
return text;}
function setElementText(_el,_text)
{removeChildren(_el);_el.appendChild(document.createTextNode(_text));}
function set_visible(_el,_visible)
{var obj=getObj(_el);if(obj){if((typeof _visible)!='string')
_visible=_visible?'visible':'hidden';obj.style.visibility=_visible;}}
function show_block_element(_el)
{set_display(_el,'block');}
function show_element(_el)
{set_display(_el,'');}
function hide_element(_el)
{set_display(_el,'none');}
function parse_boolean(_b)
{if((typeof _b)=='string')
_b=_b.toLowerCase();return(_b&&(_b!='false'));}
function disable_element(_el,_disable)
{var obj=getObj(_el);if(obj){obj.disabled=parse_boolean(_disable);if(obj.currentStyle&&((obj.tagName!='INPUT')||(obj.type!='checkbox'))){if(obj.currentStyle.backgroundColor&&!obj.originalBackground)
obj.originalBackground=obj.currentStyle.backgroundColor;if(obj.disabled)
obj.style.backgroundColor='#ddd';else if(obj.originalBackground)
obj.style.backgroundColor=obj.originalBackground;else
obj.style.backgroundColor='transparent';}}}
function reset_element(_el)
{var obj=getObj(_el);if(obj)
set_input_value(obj,get_input_default_value(obj));}
function get_input_default_value(_el)
{var val;if(!_el)
return val;if(_el.tagName=='INPUT'){if((_el.type=='text')||(_el.type=='password')||(_el.type=='file'))
val=_el.defaultValue;else if((_el.type=='radio')||(_el.type=='checkbox'))
val=_el.defaultChecked;}
else if(_el.tagName=='SELECT'){for(var i=0;(!val&&(i<_el.options.length));i++){if(_el.options[i].defaultSelected)
val=get_option_value(_el.options[i]);}
if(!val&&(i>=_el.options.length))
val=get_option_value(_el.options[0]);}
else if(_el.tagName=='TEXTAREA'){val=_el.defaultValue;}
return val;}
function get_input_value(_el)
{var val;if(_el&&(_el.tagName=='INPUT')){if((_el.type=='text')||(_el.type=='password')||(_el.type=='file'))
val=_el.value;else if((_el.type=='radio')||(_el.type=='checkbox'))
val=_el.checked;}
else if(_el&&(_el.tagName=='SELECT')){for(var i=0;(!val&&(i<_el.options.length));i++)
if(_el.options[i].selected)
val=get_option_value(_el.options[i]);}
else if(_el&&(_el.tagName=='TEXTAREA')){val=_el.value;}
return val;}
function get_option_value(_option)
{var val;if(_option)
val=_option.value?_option.value:_option.text;return val;}
function is_text_field(_el)
{return(_el&&(_el.tagName=='INPUT')&&((_el.type=='text')||(_el.type=='password')||(_el.type=='file')));}
function set_input_value(_el,_value)
{if(!_el)
return;if(_el.tagName=='INPUT'){if(is_text_field(_el))
_el.value=_value;else if((_el.type=='radio')||(_el.type=='checkbox'))
_el.checked=parse_boolean(_value);}
else if(_el.tagName=='SELECT'){for(var i=0;(i<_el.options.length);i++){var opt=_el.options[i];if(_value)
opt.selected=((opt.value==_value)||(opt.text==_value)||(opt.label==_value));else
opt.selected=(opt.value==_value);}}
else if(_el.tagName=='TEXTAREA'){_el.value=_value;}}
function get_which_radio(_radio)
{var selBtn;var name=((typeof _radio)=='string')?_radio:_radio.name;if(name){var allBtns=document.getElementsByName(name);for(var b=0;(!selBtn&&(b<allBtns.length));b++)
if(allBtns[b].checked)
selBtn=allBtns[b];}
return selBtn;}
function subclass(_sub,_parent)
{for(var property in _parent){try{if(!_sub[property])
_sub[property]=_parent[property];}
catch(excp){}}}
Utils.subclass=subclass;function getAncestor(_tag,_el)
{var anc;var lowTag=_tag?_tag.toLowerCase():_tag;while(!anc&&_el&&(_el!=document)){if(!_tag||(_el.tagName&&(_el.tagName.toLowerCase()==lowTag)))
anc=_el;else
_el=_el.parentNode;}
return anc;}
function getAncestorByClass(_class,_el)
{var anc;if(_el){var el=_el;while(el&&!anc){if(isOfClass(el,_class))
anc=el;else
el=el.parentNode;}}
return anc;}
function findAllOfClass(_parent,_class,_list)
{if(isOfClass(_parent,_class))
_list.push(_parent);var ch=_parent.childNodes;for(var c=0;(c<ch.length);c++){var node=ch.item(c);if(node.hasChildNodes())
findAllOfClass(node,_class,_list);else if(isOfClass(node,_class))
_list.push(node);}}
function isOfClass(_el,_class)
{if(_el&&_el.className){if(_el.className.indexOf(' ')>0){var re=new RegExp('[\s^]*'+_class+'( |\s|$)');return(_el.className.search(re)>=0);}
else
return(_el.className==_class);}
else
return false;}
function filterByClass(_nodeList,_class)
{var list=new Array();if(_nodeList.length<300){for(var n=0;(n<_nodeList.length);n++){var node=_nodeList.item(n);if(isOfClass(node,_class))
list.push(node);}}
return list;}
function cv_show_help(_evt)
{return cv_new_win_from_link(_evt,'Help');}
function cv_new_win_from_link(_evt,_name,_width,_height,_isPopup)
{var rc=false;if(_evt){var anchor=_evt.target?_evt.target:_evt.srcElement;anchor=findContainingLink(anchor);if(anchor&&anchor.href){if(!_name||(_name=='null'))
_name=getElementText(anchor);if(_name)
_name=_name.replace(/\s*/g,'');rc=cv_new_win(anchor.href,_name,_width,_height,_isPopup);}}
return rc;}
function cv_new_win(_url,_name,_width,_height,_isPopup)
{var newWin;if(_name)
_name=_name.replace(/\s*/g,'');_width=_width?_width:UtilsConstants.DEFAULT_WINDOW_WIDTH;_height=_height?_height:UtilsConstants.DEFAULT_WINDOW_HEIGHT;if(_isPopup){newWin=openModelessDialog(_url,_name,_width,_height)}
else{var winArgs='toolbar=yes,scrollbars=yes,resizable=yes,width='
+_width+',height='+_height+',left=5,top=5';newWin=window.open(_url,_name,winArgs);newWin.focus();try{Utils.addEvent(newWin,'load',cv_win_focus);}
catch(e){}}
return newWin;}
function cv_win_focus(_evt)
{var e=_evt?_evt:event;var win=e.target?e.target:e.srcElement;if(win&&win.focus)
win.focus();}
function cv_should_handle(_e)
{var rc=false;if(_e){if(_e.type&&(_e.type=='keypress'))
rc=((_e.keyCode==13)||(_e.keyCode==32));else
rc=true;}
return rc;}
function cv_popup_from_link_handler(_evt,_name,_width,_height)
{var e=_evt?_evt:event;if(cv_should_handle(e))
return(cv_new_win_from_link(e,_name,_width,_height,true)==false);else
return true;}
function cv_new_win_from_link_handler(_evt,_name,_width,_height)
{var e=_evt?_evt:event;if(cv_should_handle(e))
return(cv_new_win_from_link(e,_name,_width,_height)==false);else
return true;}
function cv_new_win_handler(_evt,_url,_name,_width,_height)
{var e=_evt?_evt:event;if(cv_should_handle(e))
return(cv_new_win(_url,_name,_width,_height)==false);else
return true;}
function cv_help_link_handler(_evt)
{var e=_evt?_evt:event;if(cv_should_handle(e))
return(cv_show_help(e)==false);else
return true;}
function enable_help_links()
{var list=filterByClass(document.getElementsByTagName('A'),'HelpLink');for(var i=0;(i<list.length);i++){list[i].onkeypress=cv_help_link_handler;list[i].onclick=cv_help_link_handler;}}
function cv_show_preview(_evt)
{var rc=false;if(_evt){var anchor=_evt.target?_evt.target:_evt.srcElement;if(anchor&&(anchor.tagName!='A'))
anchor=getAncestor('A',anchor);if(anchor&&anchor.href)
rc=cv_new_win(anchor.href,'Preview',670,500,false);}
return rc;}
function cv_preview_link_handler(_evt)
{var e=_evt?_evt:event;if(cv_should_handle(e))
return(cv_show_preview(e)==false);else
return true;}
function cv_launch_window_on_load(_url,_winName,_width,_height)
{_width=_width?_width:UtilsConstants.DEFAULT_WINDOW_WIDTH;_height=_height?_height:UtilsConstants.DEFAULT_WINDOW_HEIGHT;if(_winName)
_winName=_winName.replace(/\s*/g,'');var winArgs='scrollbars=yes,resizable=yes,left=5,top=5,alwaysRaised=yes,alwaysLowered=no,dependent=yes,width='+_width+',height='+_height;var fnBody='var openedWindow=window.open("'+_url+'","'+_winName+'","'+winArgs+'"); if(openedWindow != null) openedWindow.focus();';Utils.addEvent(window,'load',new Function(fnBody));}
function enable_preview_links()
{var list=filterByClass(document.getElementsByTagName('A'),'PreviewLink');for(var i=0;(i<list.length);i++){list[i].onkeypress=cv_preview_link_handler;list[i].onclick=cv_preview_link_handler;}}
function URLEncode(_str)
{var ms="%25#23 20?3F<3C>3E{7B}7D[5B]5D|7C^5E~7E`60+2B";var msi=0;var i,c,rs,ts;while(msi<ms.length){c=ms.charAt(msi);rs=ms.substring(++msi,msi+2);msi+=2;i=0;while(true){i=_str.indexOf(c,i);if(i==-1)
break;ts=_str.substring(0,i);_str=ts+"%"+rs+_str.substring(++i,_str.length);}}
return _str;}
function URLEncodeParamValue(_paramValue)
{var len=_paramValue.length;var i=0;var newStr='';var paramChar='';for(i=0;i<len;i++){paramChar=_paramValue.substring(i,i+1);if(isUrlOK(paramChar))
newStr=newStr+paramChar;else if(paramChar.charCodeAt(0)==32)
newStr=newStr+'+';else{tval1=paramChar;newStr=newStr+'%'+decToHex(tval1.charCodeAt(0),16);}}
return newStr;}
function decToHex(num,radix)
{var hexVals=new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');var hexString='';while(num>=radix){temp=num%radix;num=Math.floor(num/radix);hexString+=hexVals[temp];}
hexString+=hexVals[num];return reversal(hexString);}
function reversal(s)
{var len=s.length;var trans='';for(i=0;i<len;i++)
trans=trans+s.substring(len-i-1,len-i);s=trans;return s;}
function isUrlOK(compareChar)
{var charCode=compareChar.charCodeAt(0);if((charCode>=97&&charCode<=122)||(charCode>=65&&charCode<=90)||(charCode>=48&&charCode<=57)||charCode==46||charCode==45||charCode==95||charCode==42)
{return true;}
else{return false;}}
function SetChecked(_formname,_checkname,_val)
{var list=_formname?document[_formname].elements:document.getElementsByTagName('INPUT');for(var i=0;i<list.length;i++){if((list[i].type=='checkbox')&&(list[i].name.indexOf(_checkname)>=0))
if(list[i].checked!=_val)
list[i].click();}}
function limitArea(_textArea,_lengthLimit,_warningText)
{if(!_lengthLimit)
_lengthLimit=255;if(!_warningText)
_warningText="This text area has a limit of "+_lengthLimit+" characters.";var currentString=new String(_textArea.value);if(currentString.length>_lengthLimit){alert(_warningText);_textArea.value=currentString.substr(0,_lengthLimit);}}
var WCAGState=0;function keepAlive(_logoutWarning,_confirmURL)
{if(WCAGState==1){playMIDI();}
if(confirm(_logoutWarning)){forceKeepAlive(_confirmURL);resetTimeout();}}
function forceKeepAlive(_confirmURL)
{var args='scrollbars=no,resizable=no,alwaysLowered=yes,dependent=yes,width=1,height=1';var win=window.open(_confirmURL,'',args);if(win)
win.close();}
function formatTime(date){var hours=date.getHours();if(hours==0){hours=12;}
else if(hours>12){hours=hours-12;}
var minutes=date.getMinutes();if(minutes<10){minutes="0"+minutes;}
var ampm=date.getHours()<12?'am':'pm';return hours+':'+minutes+' '+ampm;}
var keepAliveDialog;var keepAliveTimer;function initKeepAliveDialog(){if(!keepAliveDialog){keepAliveDialog=new YAHOO.widget.SimpleDialog('keepAlive',{width:'30em',modal:true,fixedcenter:true,constraintoviewport:true,close:false,draggable:false});keepAliveDialog.setHeader('Session Timeout');}}
function showTimingOutDialog(expireText,keepAliveUrl,logOutUrl){keepAliveDialog.cfg.queueProperty('icon',YAHOO.widget.SimpleDialog.ICON_WARN);keepAliveDialog.setBody(expireText);var logOut=function(){window.location.href=logOutUrl;this.hide();}
var continueWorking=function(){clearInterval(keepAliveTimer);forceKeepAlive2(keepAliveUrl);resetTimeout();this.hide();}
var buttons=[{text:'Log Out',handler:logOut},{text:'Continue Working',handler:continueWorking,isDefault:true}];keepAliveDialog.cfg.queueProperty('buttons',buttons);keepAliveDialog.render(document.body);keepAliveDialog.show();}
function showTimedOutDialog(expireText,isReLoginable){keepAliveDialog.cfg.queueProperty('icon',YAHOO.widget.SimpleDialog.ICON_WARN);keepAliveDialog.setBody(expireText);keepAliveDialog.cfg.queueProperty('close',true);var logIn=function(){window.location.href=window.location.href;this.hide();}
keepAliveDialog.cfg.queueProperty('close','true');var buttonText='';if(isReLoginable){buttonText='Log Back In';}else{buttonText='Close';}
var buttons=[{text:buttonText,handler:logIn}];keepAliveDialog.cfg.queueProperty('buttons',buttons);keepAliveDialog.render(document.body);keepAliveDialog.show();}
function showKeepAliveDialog(callback){var data=YAHOO.lang.JSON.parse(callback.responseText);var expireTime=data.lastAccessTime+data.timeoutDuration;var remainingDuration=expireTime-data.systemTime;if(remainingDuration>data.warningDuration){if(keepAliveDialog){keepAliveDialog.hide();}}
else if(remainingDuration>0){var remainingMinutes=Math.floor(remainingDuration/(60*1000));var remainingText;if(remainingMinutes<1){remainingText="less than one minute";}
else if(remainingMinutes==1){remainingText="1 minute";}
else{remainingText=remainingMinutes+" minutes";}
var expireText='Your session will expire in '+remainingText+' unless you continue working.';showTimingOutDialog(expireText,callback.argument.confirmURL,callback.argument.logoutURL);}
else if(data.isSessionAlive){var expireText='Your session will expire soon unless you continue working.';showTimingOutDialog(expireText,callback.argument.confirmURL,callback.argument.logoutURL);}
else{clearInterval(keepAliveTimer);var expireText='Your session expired at '+formatTime(new Date(expireTime))+'.';showTimedOutDialog(expireText,callback.argument.isReLoginable);}
keepAliveDialog.cfg.queueProperty('zIndex',400000);keepAliveDialog.cfg.refireEvent('zIndex');}
function keepAlivePoll(_servletPath,_confirmURL,_logoutURL,_sessionId,_isReLoginable){var callback={success:showKeepAliveDialog,argument:{confirmURL:_confirmURL,logoutURL:_logoutURL,isReLoginable:_isReLoginable}};YAHOO.util.Connect.asyncRequest('POST',_servletPath,callback,'action=time&id='+_sessionId);}
function keepAlive2(_confirmURL,_logoutURL,_sessionId,_sessionTag,_adminPath,_isReLoginable){if(WCAGState==1){playMIDI();}
_isReLoginable=_isReLoginable===undefined?true:!(_isReLoginable===false);var servletPath=_adminPath+'SessionTimeout';Y.use('yui2-cookie','yui2-json','yui2-connection','yui2-container','yui2-button',function(){YAHOO.util.Cookie.set(_sessionTag,'override_session_'+_sessionId,{path:servletPath});initKeepAliveDialog();var pollExpression='keepAlivePoll("'+servletPath+'", "'+_confirmURL+'", "'+_logoutURL+'", "'+_sessionId+'",'+_isReLoginable+')';eval(pollExpression);keepAliveTimer=setInterval(pollExpression,10000);});}
function forceKeepAlive2(_confirmURL){Y.use('yui2-connection',function(){var callback={cache:false};YAHOO.util.Connect.asyncRequest('GET',_confirmURL,callback);YAHOO.util.Connect.asyncRequest('GET',_confirmURL,callback);});}
var _submitOnce=false;function submitOnce(msg)
{if(_submitOnce){alert(msg);return false;}
else{_submitOnce=true;return true;}}
function submitEnter(mybutton,e)
{var keycode;if(window.event)
keycode=window.event.keyCode;else if(e)
keycode=e.which;else
return true;if(keycode==13){if(e){if(e.stopPropagation){e.stopPropagation();}
else{e.cancelBubble=true;}}
mybutton.click();return false;}
else
return true;}
function copy_to_clip(text)
{if(window.clipboardData){window.clipboardData.setData("Text",text);return true;}
return false;}
function choiceSelected(question,choice)
{return true;}
addOnLoadHandler(DialogManager.popupDlgLoad);addOnLoadHandler(enable_help_links);addOnLoadHandler(enable_preview_links);function ds_merge_field(_evt,_value)
{var cb=_evt.target?_evt.target:_evt.srcElement;var fld=getObj(cb.value);if(fld){if(cb.checked){if(is_text_field(fld)&&fld.maxLength){if(_value.length>fld.maxLength){alert('Error: The maximum length of this field is '
+fld.maxLength+' characters.\n'
+'The value that you are trying to copy is '
+_value.length+' characters long.\n'
+'Please click Cancel on this page and modify the data in your donor database and attempt the merge again');return;}}
set_input_value(fld,_value);}
else
reset_element(fld);}}
function ds_merge_direct_field(_id,_value)
{var fld=getObj(_id);if(fld){if(is_text_field(fld)&&fld.maxLength){if(_value.length>fld.maxLength){alert('Error: The maximum length of this field is '
+fld.maxLength+' characters.\n'
+'The value that you are trying to copy is '
+_value.length+' characters long.\n'
+'Please click Cancel on this page and modify the data in your donor database and attempt the merge again');return;}}
set_input_value(fld,_value);}
else
reset_element(fld);}
function ds_merge_date_field(_evt,_value)
{var cb=_evt.target?_evt.target:_evt.srcElement;var dayFld=getObj(cb.value+'_DAY');var monthFld=getObj(cb.value+'_MONTH');var yearFld=getObj(cb.value+'_YEAR');var date=new Date(_value);if(date){if(cb.checked){set_input_value(dayFld,date.getDate());set_input_value(monthFld,date.getMonth()+1);set_input_value(yearFld,date.getFullYear());}
else{reset_element(dayFld);reset_element(monthFld);reset_element(yearFld);}}}
function MergeCompositeObserver(_subAttrCheckboxId)
{this.checkboxId=_subAttrCheckboxId;}
MergeCompositeObserver.prototype.observe=function(_event)
{if(this.checkboxId&&_event.source){var cb=getObj(this.checkboxId);if(cb){if(_event.source.checked!=cb.checked){cb.click();if(cb.onclick){_event.target=_event.srcElement=cb;cb.onclick(_event);}}}}}
function trim(str,frontOnly)
{if(!frontOnly&&String.prototype.trim&&!String.prototype.trim.call("\uFEFF\xA0")){return str==null?"":String.prototype.trim.call(str);}else{var trimRegEx=(frontOnly?/^[\s\uFEFF\xA0]+/g:/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g);return str==null?"":(str+"").replace(trimRegEx,"");}}
function isArray(obj){if(obj.constructor.toString().indexOf("Array")==-1)
{return false;}
else
{return true;}}
function showLightbox(srcAnchor,lightboxId,containerId){Y.use('yui2-yde',function(){var popupDiv=document.getElementById(lightboxId);var bgDiv=document.getElementById("lightboxBackground");var container=document.getElementById(containerId);popupDiv.style.display="";bgDiv.style.display="";var wDim={width:YAHOO.util.Dom.getViewportWidth(),height:YAHOO.util.Dom.getViewportHeight()};var dDim={width:popupDiv.clientWidth,height:popupDiv.clientHeight};popupDiv.style.top=((wDim.height-dDim.height)/2)+"px";popupDiv.style.left=((wDim.width-dDim.width)/2)+"px";popupDiv.style.width=(dDim.width+20)+"px";popupDiv.style.height=dDim.height+"px";popupDiv.style.overflow="auto";bgDiv.style.width=wDim.width+'px';bgDiv.style.height=wDim.height+'px';});}
function hideLightbox(){Y.use('yui2-yde',function(){var popupDivs=YAHOO.util.Dom.getElementsByClassName('lightboxPopup');var bgDiv=document.getElementById("lightboxBackground");for(var i=0;i<popupDivs.length;i++){popupDivs[i].style.display="none";}
bgDiv.style.display="none";});}
function resizeBgDiv()
{Y.use('yui2-yde',function(){var bgDiv=document.getElementById("lightboxBackground");if(bgDiv.style.display=="none"){return;}
var wDim={width:YAHOO.util.Dom.getViewportWidth(),height:YAHOO.util.Dom.getViewportHeight()};bgDiv.style.width=wDim.width+'px';bgDiv.style.height=wDim.height+'px';});}
function preEnhance(nodeId){var node=document.getElementById(nodeId);if(node.className){var indx=node.className.indexOf('pending-progressive-enhancement');if(indx==-1){node.className+=' pending-progressive-enhancement';}}
else{node.className='pending-progressive-enhancement';}}
function postEnhance(nodeId){var reg=new RegExp('(\\s|^)pending-progressive-enhancement(\\s|$)');var node=document.getElementById(nodeId);node.className=node.className.replace(reg,' ');}
function toTitleCase(str)
{return str.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();});}
function enhanceDomToPostLatin1EncodedData(){}