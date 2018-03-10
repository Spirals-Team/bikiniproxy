/* Compressed by the perl version of jsmin. */
/* JavaScript::Minifier 0.02 */

function CList(aArray)
{this.mArray=aArray||[];}
CList.prototype.getLength=function()
{return this.mArray.length;};CList.prototype.getAt=function(aIndex)
{if(aIndex<0||aIndex>=this.mArray.length)
{return undefined;}
return this.mArray[aIndex];};CList.prototype.removeAll=function()
{this.mArray=[];};CList.prototype.removeAt=function(aIndex)
{var length=this.mArray.length;if(length==0)
{return;}
switch(aIndex)
{case-1:break;case 0:this.mArray.shift();break;case length-1:this.mArray.pop();break;default:var head=this.mArray.slice(0,aIndex);var tail=this.mArray.slice(aIndex+1);this.mArray=head.concat(tail);break;}};CList.prototype.insertAt=function(aObject,aIndex)
{switch(aIndex)
{case-1:break;case 0:this.mArray.unshift();break;case length:this.mArray.push();break;default:var head=this.mArray.slice(0,aIndex-1);var tail=this.mArray.slice(aIndex);this.mArray=head.concat([aObject]);this.mArray=this.mArray.concat(tail);break;}};CList.prototype.findIndexOf=function(aObject)
{var length=this.mArray.length;for(var i=0;i<length;++i)
{if(this.mArray[i]==aObject)
{return i;}}
return-1;};CList.prototype.addUnique=function(aObject)
{var i=this.findIndexOf(aObject);if(i==-1)
{this.mArray[this.mArray.length]=aObject;}};CList.prototype.removeUnique=function(aObject)
{var length=this.mArray.length;if(length==0)
{return;}
var i=this.findIndexOf(aObject);this.removeAt(i);};function CCallWrapper(aObjectReference,aDelay,aMethodName,aArgument0,aArgument1,aArgument2,aArgument3,aArgument4,aArgument5,aArgument6,aArgument7,aArgument8,aArgument9)
{this.mId='CCallWrapper_'+(CCallWrapper.mCounter++);this.mObjectReference=aObjectReference;this.mDelay=aDelay;this.mTimerId=0;this.mMethodName=aMethodName;this.mArgument0=aArgument0;this.mArgument1=aArgument1;this.mArgument2=aArgument2;this.mArgument3=aArgument3;this.mArgument4=aArgument4;this.mArgument5=aArgument5;this.mArgument6=aArgument6;this.mArgument7=aArgument7;this.mArgument8=aArgument8;this.mArgument9=aArgument9;CCallWrapper.mPendingCalls[this.mId]=this;}
CCallWrapper.prototype.execute=function()
{this.mObjectReference[this.mMethodName](this.mArgument0,this.mArgument1,this.mArgument2,this.mArgument3,this.mArgument4,this.mArgument5,this.mArgument6,this.mArgument7,this.mArgument8,this.mArgument9);delete CCallWrapper.mPendingCalls[this.mId];};CCallWrapper.prototype.cancel=function()
{clearTimeout(this.mTimerId);delete CCallWrapper.mPendingCalls[this.mId];};CCallWrapper.asyncExecute=function(callwrapper)
{CCallWrapper.mPendingCalls[callwrapper.mId].mTimerId=setTimeout('CCallWrapper.mPendingCalls["'+callwrapper.mId+'"].execute()',callwrapper.mDelay);};CCallWrapper.mCounter=0;CCallWrapper.mPendingCalls={};function CSimpleObservable(aIsAsync)
{this.mObservers=new CList();this.mIsAsync=aIsAsync||false;}
CSimpleObservable.prototype={notify:function(aValue)
{var length=this.mObservers.getLength();for(var i=0;i<length;++i)
{if(this.mIsAsync)
{var callwrapper=new CCallWrapper(this.mObservers.getAt(i),30,'observe',aValue);CCallWrapper.asyncExecute(callwrapper);}
else
{this.mObservers.getAt(i).observe(aValue);}}},addObserver:function(aObserver)
{if(!aObserver.observe)
{throw'CObserver.addObserver: not an observer';}
this.mObservers.addUnique(aObserver);},removeObserver:function(aObserver)
{this.mObservers.removeUnique(aObserver);}};var oc_components=new Array();function ObservableComponent(_prefix,_mainElementSuffix)
{this.prefix=_prefix;this.mainElementSuffix=_mainElementSuffix;this.value='';subclass(this,new CSimpleObservable());oc_components[_prefix]=this;}
ObservableComponent.prototype.hide=function(_hide)
{}
ObservableComponent.prototype.disable=function(_disable,_clear)
{_disable=parse_boolean(_disable);this.disable_submit_flag(_disable);disable_element(this.prefix+this.mainElementSuffix,_disable);if(_disable&&_clear!==false)
this.clear();else if(!this.get())
this.reset();}
ObservableComponent.prototype.disable_submit_flag=function(_disable)
{var _el=document.getElementById(this.prefix+'submit');if(_el&&_el.id)
_el.name=(parse_boolean(_disable)==true)?_el.id+'_skip':_el.id;}
ObservableComponent.prototype.clear=function()
{var el=this.defaultElement();if(el&&(el.tagName=='INPUT')){if((el.type=='text')||(el.type=='password')||(el.type=='file')||(el.type=='hidden')){this.set('');}
else if(el.type=='radio')
this.set(false);else if(el.type=='checkbox')
this.set(false);}
else if(el&&(el.tagName=='TEXTAREA')){this.set('');}
else if(!el){this.set('');}}
ObservableComponent.prototype.reset=function()
{var el=this.defaultElement();if(el&&((el.tagName=='INPUT')||(el.tagName=='TEXTAREA')))
this.set(get_input_default_value(el));}
ObservableComponent.prototype.set=function(_value)
{var el=this.defaultElement();var changed=false;if(el&&(el.tagName=='INPUT')){if((el.type=='text')||(el.type=='password')||(el.type=='file')||(el.type=='hidden')){if(el.value!=_value){el.value=_value;changed=true;}}
else if(el.type=='radio'){if(el.checked!=(el.value==_value)){el.checked=(el.value==_value);changed=true;}}
else if(el.type=='checkbox'){if(el.checked!=parseBoolean(_value)){el.checked=parseBoolean(_value);changed=true;}}}
else if(el&&(el.tagName=='TEXTAREA')){if(el.value!=_value){el.value=_value;changed=true;}}
else if(el&&(el.tagName=='SELECT')){if(el.value!=_value){set_input_value(el,_value)}}
else if(!el){if(this.value!=_value){this.value=_value;changed=true;}}
if(changed)
this.fireEvent();}
ObservableComponent.prototype.get=function()
{var el=this.defaultElement();if(el&&(el.tagName=='INPUT')){if((el.type=='text')||(el.type=='password')||(el.type=='file')||(el.type=='hidden')){return el.value;}
else if((el.type=='radio')||(el.type=='checkbox'))
return el.checked;}
else if(el&&(el.tagName=='SELECT')){return el.value;}
else if(el&&(el.tagName=='TEXTAREA')){return el.value;}
else if(!el){return this.value;}}
ObservableComponent.prototype.fireEvent=function(_src,_evt)
{if(!_src)
_src=this.defaultElement();this.notify(new ObservableComponentEvent(_src,this,_evt));}
ObservableComponent.prototype.defaultElement=function()
{return document.getElementById(this.prefix+this.mainElementSuffix);}
function ObservableRadioComponent(_prefix,_mainElementSuffix)
{subclass(this,new ObservableComponent(_prefix,_mainElementSuffix));oc_components[_prefix]=this;this.getButtons=function(){return document.getElementsByName(this.prefix);}
this.clear=function(){var btns=this.getButtons();var val;for(var b=0;(!val&&(b<btns.length));b++){if(btns.item(b).defaultChecked||btns.item(b).checked)
val=btns.item(b).value;}
if(val)
this.set('NADA');};this.reset=function(){var btns=this.getButtons();var val;for(var b=0;(!val&&(b<btns.length));b++){if(btns.item(b).defaultChecked||btns.item(b).checked)
val=btns.item(b).value;}
if(val)
this.set(val);};this.set=function(_value){var btns=this.getButtons();var changed=false;for(var b=0;(b<btns.length);b++){var btn=btns.item(b);if(btn){var check=(btn.value==_value);if(btn.checked!=check){btn.checked=check;changed=true;}}}
if(changed)
this.fireEvent();};this.get=function(){var val;var btns=this.getButtons();for(var b=0;(!val&&(b<btns.length));b++){if(btns.item(b)&&btns.item(b).checked)
val=btns.item(b).value;}
return val;};this.disable=function(_disable,_clear){_disable=parse_boolean(_disable);this.disable_submit_flag(_disable);var btns=this.getButtons();for(var b=0;(b<btns.length);b++){btns.item(b).disabled=_disable;}
if(_disable&&_clear!==false)
this.clear();else
this.reset();}}
function ObservableGridComponent(_prefix,_mainElementSuffix)
{this.compList=new Array();subclass(this,new ObservableComponent(_prefix,_mainElementSuffix));oc_components[_prefix]=this;this.disable=function(_disable)
{for(var i=0;i<this.compList.length;i++){disable_element(this.compList[i],_disable);}
this.disable_submit_flag(_disable);disable_element(this.prefix+this.mainElementSuffix,_disable);if(parse_boolean(_disable))
this.clear();else if(!this.get())
this.reset();}}
function get_observable_component(_name)
{return oc_components[_name]?oc_components[_name]:null;}
function fire_obs_comp_event(_name,_el,_evt)
{var comp=get_observable_component(_name);if(comp)
comp.fireEvent(_el,_evt);}
function observe_component(_observable,_observer,delimiter)
{if(!_observable||!_observer)
return;if(!delimiter){delimiter='.';}
if((typeof _observable)=='string'){var splits=_observable.split(delimiter);_observable=splits[0];var filter_val=splits[1];_observable=get_observable_component(_observable);}
if(_observable&&_observable.addObserver){if(filter_val&&_observer.set_filter){if(filter_val=='true')
filter_val=true;else if(filter_val=='false')
filter_val=false;_observer.set_filter(filter_val);}
_observable.addObserver(_observer);_observable.fireEvent();}}
function filter_values_equal(_obj1,_obj2)
{var obj1type=typeof(_obj1);var obj2type=typeof(_obj2);if(obj1type==obj2type)
return _obj1==_obj2;else if(obj1type=='boolean')
return _obj1==parse_boolean(_obj2);else if(obj2type=='boolean')
return parse_boolean(_obj1)==_obj2;else
return _obj1==_obj2;}
function ComponentEnabler(_component)
{if(typeof(_component)=='string')
_component=get_observable_component(_component);this.comp_to_enable=_component;}
ComponentEnabler.prototype.set_filter=function(_f)
{this.filter=_f;}
ComponentEnabler.prototype.observe=function(_event)
{if(this.comp_to_enable&&_event.component&&this.filter){var haveMatch=filter_values_equal(this.filter,_event.component.get());this.comp_to_enable.disable(!haveMatch);}}
function ComponentDisabler(_component)
{if(typeof(_component)=='string')
_component=get_observable_component(_component);this.comp_to_enable=_component;}
ComponentDisabler.prototype.set_filter=function(_f)
{this.filter=_f;}
ComponentDisabler.prototype.observe=function(_event)
{if(this.comp_to_enable&&_event.component&&this.filter){var haveMatch=filter_values_equal(this.filter,_event.component.get());this.comp_to_enable.disable(haveMatch);}}
function ComponentDisplayer(_component,_hideInstead)
{if(typeof(_component)=='string')
_component=get_observable_component(_component);this.comp_to_show=_component;this.hideInstead=_hideInstead;}
ComponentDisplayer.prototype.set_filter=function(_f)
{this.filter=_f;}
ComponentDisplayer.prototype.observe=function(_event)
{if(this.comp_to_show&&_event.component){var haveMatch=filter_values_equal(this.filter,_event.component.get());this.comp_to_show.hide(this.hideInstead?haveMatch:!haveMatch);}}
function ObservableComponentEvent(_src,_component,_evt)
{this.source=_src;this.component=_component;this.evt=_evt;}