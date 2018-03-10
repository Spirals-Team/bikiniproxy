
/*!
 * Globalize v1.3.0-tableau.0 2017-08-07T16:33Z Released under the MIT license
 * http://git.io/TrdQbw
 */
"undefined"!=typeof process&&"node"===process.release.name?global.localizeGlobalNamespace=global:window.localizeGlobalNamespace=window,function(a,b){a.TabGlobalize=b()}(localizeGlobalNamespace,function(){function a(b){if(!(this instanceof a))return new a(b);i(b,"locale"),k(b,"locale"),this._locale=b}var b=function(a){return"string"==typeof a?a:"number"==typeof a?""+a:JSON.stringify(a)},c=function(a,c){return a=a.replace(/{[0-9a-zA-Z-_. ]+}/g,function(a){return a=a.replace(/^{([^}]*)}$/,"$1"),b(c[a])})},d=function(){var a=arguments[0];return[].slice.call(arguments,1).forEach(function(b){var c;for(c in b)a[c]=b[c]}),a},e=function(a,b,e){var f;return b=a+(b?": "+c(b,e):""),f=new Error(b),f.code=a,d(f,e),f},f=function(a){return[].reduce.call(a,function(a,b){return 0|(a=(a<<5)-a+b.charCodeAt(0))},0)},g=function(a,b,c,d){var e;return d=d||JSON.stringify(c),e=f(a+b+d),e>0?"a"+e:"b"+Math.abs(e)},h=function(a,b,c,d){if(!c)throw e(a,b,d)},i=function(a,b){h("E_MISSING_PARAMETER","Missing required parameter `{name}`.",void 0!==a,{name:b})},j=function(a,b,c,d){h("E_INVALID_PAR_TYPE","Invalid `{name}` parameter ({value}). {expected} expected.",c,{expected:d,name:b,value:a})},k=function(a,b){j(a,b,void 0===a||"string"==typeof a,"a string")},l=function(a){return a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},m=function(a,b,c){var d;for("string"!=typeof a&&(a=String(a)),d=a.length;d<b;d+=1)a=c?a+"0":"0"+a;return a};return a.locale=function(a){return k(a,"locale"),arguments.length&&(this._locale=a),this._locale},a._createError=e,a._formatMessage=c,a._regexpEscape=l,a._runtimeKey=g,a._stringPad=m,a._validateParameterPresence=i,a._validateParameterTypeString=k,a._validateParameterType=j,a}),function(a,b){b(a.TabGlobalize)}(localizeGlobalNamespace,function(a){var b=a._runtimeKey,c=a._validateParameterType,d=function(a){return null!==a&&""+a=="[object Object]"},e=function(a,b){c(a,b,void 0===a||d(a)||Array.isArray(a),"Array or Plain Object")},f=function(a){return function(b){return"number"!=typeof b&&"string"!=typeof b||(b=[].slice.call(arguments,0)),e(b,"variables"),a(b)}};return a._messageFormatterFn=f,a._messageFormat=function(){return{number:function(a,b){if(isNaN(a))throw new Error("'"+a+"' isn't a number.");return a-(b||0)},plural:function(a,b,c,d,e){if({}.hasOwnProperty.call(d,a))return d[a]();b&&(a-=b);var f=c(a,e);return f in d?d[f]():d.other()},select:function(a,b){return{}.hasOwnProperty.call(b,a)?b[a]():b.other()}}}(),a._validateParameterTypeMessageVariables=e,a.messageFormatter=a.prototype.messageFormatter=function(){return a[b("messageFormatter",this._locale,[].slice.call(arguments,0))]},a.formatMessage=a.prototype.formatMessage=function(a){return this.messageFormatter(a).apply({},[].slice.call(arguments,1))},a}),function(a,b){b(a.TabGlobalize)}(localizeGlobalNamespace,function(a){var b=a._runtimeKey,c=a._validateParameterPresence,d=a._validateParameterType,e=function(a,b){d(a,b,void 0===a||"number"==typeof a,"Number")},f=function(a){return function(b){return c(b,"value"),e(b,"value"),a(b)}};return a._pluralGeneratorFn=f,a._validateParameterTypeNumber=e,a.plural=a.prototype.plural=function(a,b){return c(a,"value"),e(a,"value"),this.pluralGenerator(b)(a)},a.pluralGenerator=a.prototype.pluralGenerator=function(c){return c=c||{},a[b("pluralGenerator",this._locale,[c])]},a});
(function( root, factory ) {
  root.Localize = root.Localize || {};
  root.Localize.msg = new root.TabGlobalize('en');
  factory( root.TabGlobalize, root.Localize );
  if (root.Localize.initFormattersAndParsers) {
    root.Localize.initFormattersAndParsers();
  }
}(localizeGlobalNamespace, function( Globalize ) {
var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1662346136 = pluralGeneratorFn(function(n) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
});
Globalize.a1229928788 = messageFormatterFn((function(  ) {
  return function (d) { return "Major Tick Marks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a45098301 = messageFormatterFn((function(  ) {
  return function (d) { return "Certified by"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1213705768 = messageFormatterFn((function(  ) {
  return function (d) { return "Data connection icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2119585252 = messageFormatterFn((function(  ) {
  return function (d) { return "External server connection icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a307721130 = messageFormatterFn((function(  ) {
  return function (d) { return "File icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b65965119 = messageFormatterFn((function(  ) {
  return function (d) { return "Live connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1416152214 = messageFormatterFn((function(  ) {
  return function (d) { return "Last extract:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b756250903 = messageFormatterFn((function(  ) {
  return function (d) { return "No data connections"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b303971919 = messageFormatterFn((function(  ) {
  return function (d) { return "See more details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b650935205 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Server connection icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1848280019 = messageFormatterFn((function(  ) {
  return function (d) { return "This workbook connects to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a586234441 = messageFormatterFn((function(  ) {
  return function (d) { return "Add a snapshot of the view to your comment"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a169003142 = messageFormatterFn((function(  ) {
  return function (d) { return "Comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a544430526 = messageFormatterFn((function(  ) {
  return function (d) { return "Close panel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1053674704 = messageFormatterFn((function(  ) {
  return function (d) { return "Add a comment…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1015530127 = messageFormatterFn((function(  ) {
  return function (d) { return "No comments on this view."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b229925326 = messageFormatterFn((function(  ) {
  return function (d) { return "@Mention someone to notify them."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1889096782 = messageFormatterFn((function(  ) {
  return function (d) { return "Post"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2079754917 = messageFormatterFn((function(  ) {
  return function (d) { return "View"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b417380523 = messageFormatterFn((function(  ) {
  return function (d) { return "Couldn't create a snapshot of the view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1104549106 = messageFormatterFn((function(  ) {
  return function (d) { return "Unable to load comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2089505580 = messageFormatterFn((function(  ) {
  return function (d) { return "Loading comments..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1524561682 = messageFormatterFn((function(  ) {
  return function (d) { return "Check your internet connection and retry."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b904005292 = messageFormatterFn((function(  ) {
  return function (d) { return "Check your internet connection and refresh to try again"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1513402832 = messageFormatterFn((function(  ) {
  return function (d) { return "Failed to get comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a333220967 = messageFormatterFn((function(  ) {
  return function (d) { return "Failed to get image"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a490842535 = messageFormatterFn((function(  ) {
  return function (d) { return "Failed to download image"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1465273848 = messageFormatterFn((function(  ) {
  return function (d) { return "Applying the snapshot's filters and selection to the view..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1885602008 = messageFormatterFn((function(  ) {
  return function (d) { return "Couldn't apply snapshot from " + d.user + " to the view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1250654285 = messageFormatterFn((function(  ) {
  return function (d) { return "Message is too long"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1392247716 = messageFormatterFn((function(  ) {
  return function (d) { return "Couldn't send."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1523397989 = messageFormatterFn((function(  ) {
  return function (d) { return "Tap to retry"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1237763732 = messageFormatterFn((function(  ) {
  return function (d) { return "Retry"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b274322310 = messageFormatterFn((function(  ) {
  return function (d) { return "Unable to load comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1797312956 = messageFormatterFn((function(  ) {
  return function (d) { return "User will not be notified"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a853218484 = messageFormatterFn((function(  ) {
  return function (d) { return "User does not have permissions to see this view and will not be notified"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a221714838 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function (d) { return plural(d.itemCount, 0, pluralFuncs.en, { one: function() { return "User";}, other: function() { return d.formattedItemCount + " users";} }) + " will not be notified."; }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.a631426777 = messageFormatterFn((function(  ) {
  return function (d) { return "User Removed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b127737520 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function (d) { return plural(d.itemCount, 0, pluralFuncs.en, { one: function() { return "User";}, other: function() { return d.formattedItemCount + " users";} }) + " will not be notified about " + d.comment; }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b1117524006 = messageFormatterFn((function(  ) {
  return function (d) { return "An unknown error has occurred"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b163283605 = messageFormatterFn((function(  ) {
  return function (d) { return "Remove snapshot"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b251899894 = messageFormatterFn((function(  ) {
  return function (d) { return "Dismiss"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b699475681 = messageFormatterFn((function(  ) {
  return function (d) { return "Unable to complete action"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a961972272 = messageFormatterFn((function(  ) {
  return function (d) { return "Copy error message"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b815372396 = messageFormatterFn((function(  ) {
  return function (d) { return "Go to support"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a733957981 = messageFormatterFn((function(  ) {
  return function (d) { return "Automatic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b168589764 = messageFormatterFn((function(  ) {
  return function (d) { return "Axis Editing Properties"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a116826502 = messageFormatterFn((function(  ) {
  return function (d) { return "Axis Range Options"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1596155136 = messageFormatterFn((function(  ) {
  return function (d) { return "Axis Titles"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1231669957 = messageFormatterFn((function(  ) {
  return function (d) { return "Days"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1607536880 = messageFormatterFn((function(  ) {
  return function (d) { return "Fixed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1278768609 = messageFormatterFn((function(  ) {
  return function (d) { return "Fixed end"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a247547112 = messageFormatterFn((function(  ) {
  return function (d) { return "Fixed start"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b970394972 = messageFormatterFn((function(  ) {
  return function (d) { return "General"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a125144769 = messageFormatterFn((function(  ) {
  return function (d) { return "Hours"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1581978018 = messageFormatterFn((function(  ) {
  return function (d) { return "Include zero"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1260422356 = messageFormatterFn((function(  ) {
  return function (d) { return "Independent"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1511552441 = messageFormatterFn((function(  ) {
  return function (d) { return "Independent axis ranges for each row or column"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1420855721 = messageFormatterFn((function(  ) {
  return function (d) { return "Interval"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a517883563 = messageFormatterFn((function(  ) {
  return function (d) { return "Enter a valid number."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2101016678 = messageFormatterFn((function(  ) {
  return function (d) { return "Enter a valid date."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2108222031 = messageFormatterFn((function(  ) {
  return function (d) { return "Logarithmic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1973292878 = messageFormatterFn((function(  ) {
  return function (d) { return "Logarithm base must be greater than one."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1209983741 = messageFormatterFn((function(  ) {
  return function (d) { return "Log axis origin must be greater than zero."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a140093874 = messageFormatterFn((function(  ) {
  return function (d) { return "Certification icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1770199800 = messageFormatterFn((function(  ) {
  return function (d) { return "Major tick interval must be greater than zero."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1616793128 = messageFormatterFn((function(  ) {
  return function (d) { return "Minor Tick Marks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a732038404 = messageFormatterFn((function(  ) {
  return function (d) { return "Minor tick interval must be greater than zero."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a157011665 = messageFormatterFn((function(  ) {
  return function (d) { return "Minutes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b490170985 = messageFormatterFn((function(  ) {
  return function (d) { return "Months"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b932790308 = messageFormatterFn((function(  ) {
  return function (d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a22527915 = messageFormatterFn((function(  ) {
  return function (d) { return "Quarters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b403943712 = messageFormatterFn((function(  ) {
  return function (d) { return "Range"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a121722113 = messageFormatterFn((function(  ) {
  return function (d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2072550554 = messageFormatterFn((function(  ) {
  return function (d) { return "Reversed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1761425869 = messageFormatterFn((function(  ) {
  return function (d) { return "Scale"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1829038991 = messageFormatterFn((function(  ) {
  return function (d) { return "Seconds"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a878507177 = messageFormatterFn((function(  ) {
  return function (d) { return "Show times"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1448908740 = messageFormatterFn((function(  ) {
  return function (d) { return "Subtitle"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2012938208 = messageFormatterFn((function(  ) {
  return function (d) { return "Synchronize dual axes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1494018867 = messageFormatterFn((function(  ) {
  return function (d) { return "Tick interval"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a739891352 = messageFormatterFn((function(  ) {
  return function (d) { return "Tick interval (powers of)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1431600146 = messageFormatterFn((function(  ) {
  return function (d) { return "Tick Marks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b298200556 = messageFormatterFn((function(  ) {
  return function (d) { return "Tick origin"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2012363722 = messageFormatterFn((function(  ) {
  return function (d) { return "Title"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a495382896 = messageFormatterFn((function(  ) {
  return function (d) { return "Uniform"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1525100723 = messageFormatterFn((function(  ) {
  return function (d) { return "Uniform axis range for all rows or columns"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b733444312 = messageFormatterFn((function(  ) {
  return function (d) { return "Unit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a251521713 = messageFormatterFn((function(  ) {
  return function (d) { return "Weeks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2023043528 = messageFormatterFn((function(  ) {
  return function (d) { return "Years"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1942727245 = messageFormatterFn((function(  ) {
  return function (d) { return d.PROJECT_NAME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a322493263 = messageFormatterFn((function(  ) {
  return function (d) { return "You do not have permission to move to “" + d.PROJECT_NAME + "”"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a849829004 = messageFormatterFn((function(  ) {
  return function (d) { return "Content cannot be moved to “" + d.PROJECT_NAME + "”"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b707568333 = messageFormatterFn((function(  ) {
  return function (d) { return d.SITE_NAME + " (site root)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1232024503 = messageFormatterFn((function(  ) {
  return function (d) { return "New field name:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a160034452 = messageFormatterFn((function(  ) {
  return function (d) { return "Size of bins:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1684408186 = messageFormatterFn((function(  ) {
  return function (d) { return "Range of Values:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1653049642 = messageFormatterFn((function(  ) {
  return function (d) { return "Min:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1146506973 = messageFormatterFn((function(  ) {
  return function (d) { return "Diff:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b818949672 = messageFormatterFn((function(  ) {
  return function (d) { return "Max:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b994644441 = messageFormatterFn((function(  ) {
  return function (d) { return "CntD:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1029603530 = messageFormatterFn((function(  ) {
  return function (d) { return "Suggest Bin Size"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1032192403 = messageFormatterFn((function(  ) {
  return function (d) { return "Font family"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1290261712 = messageFormatterFn((function(  ) {
  return function (d) { return "Font size"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1140385221 = messageFormatterFn((function(  ) {
  return function (d) { return "Bold"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a127906416 = messageFormatterFn((function(  ) {
  return function (d) { return "Italic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b701353968 = messageFormatterFn((function(  ) {
  return function (d) { return "Underline"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2039644186 = messageFormatterFn((function(  ) {
  return function (d) { return "Color"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1727521758 = messageFormatterFn((function(  ) {
  return function (d) { return "Left"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1033369644 = messageFormatterFn((function(  ) {
  return function (d) { return "Center"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1759424137 = messageFormatterFn((function(  ) {
  return function (d) { return "Right"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1411453506 = messageFormatterFn((function(  ) {
  return function (d) { return "Link"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1409474530 = messageFormatterFn((function(  ) {
  return function (d) { return "Text"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1486940408 = messageFormatterFn((function(  ) {
  return function (d) { return "Insert"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1062030329 = messageFormatterFn((function(  ) {
  return function (d) { return "Insert field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b60826821 = messageFormatterFn((function(  ) {
  return function (d) { return "Clear Formatting"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1887314314 = messageFormatterFn((function(  ) {
  return function (d) { return "Clear Formatting"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b269137057 = messageFormatterFn((function(  ) {
  return function (d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b730326866 = messageFormatterFn((function(  ) {
  return function (d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b973344233 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1131409766 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1143501173 = messageFormatterFn((function(  ) {
  return function (d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b394653372 = messageFormatterFn((function(  ) {
  return function (d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b729480610 = messageFormatterFn((function(  ) {
  return function (d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b738849811 = messageFormatterFn((function(  ) {
  return function (d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b988082435 = messageFormatterFn((function(  ) {
  return function (d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1944966956 = messageFormatterFn((function(  ) {
  return function (d) { return "Unlink"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a676088830 = messageFormatterFn((function(  ) {
  return function (d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1586131674 = messageFormatterFn((function(  ) {
  return function (d) { return "Close dialog"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1537425502 = messageFormatterFn((function(  ) {
  return function (d) { return "Select"; }
})(), Globalize("en").pluralGenerator({}));
}));
