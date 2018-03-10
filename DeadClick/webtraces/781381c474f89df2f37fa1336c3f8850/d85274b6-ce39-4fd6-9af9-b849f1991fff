/**
 * $Source$
 * $Author$
 * $Revision$
 * $Date$
 **/

var MONTH_LENGTH = 
  new Array(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

var RESERVED_NAMES = ['page', 'totalcomments', 'lastcommentdate', 'firstcommentdate', 'length'];

// CAPTCHA - begin

/**
 * Issues a new image CAPTCHA challenge.
 */
function changeCaptcha(captchaType) {
  var img = document.getElementById("captcha-image");
  if (img) {
    img.style.display = '';

    var now = new Date();
    var millis = Date.parse(now);
    img.src = "/system/servlet/captcha?nocache=" + millis;
  }

  var audioPlayer = document.getElementById('captcha-audio');
  if (audioPlayer) {
    audioPlayer.style.display = 'none';
  }

  if (window.event) {
    window.event.returnValue = false;
  } 
  
  return false;
}

/**
 * Issues a new audio CAPTCHA challenge.
 */
function changeAudioCaptcha() {

  var img = document.getElementById("captcha-image");
  if (img) {
    img.style.display = 'none';
  }

  var audioPlayer = document.getElementById('captcha-audio');
  if (audioPlayer) {
    audioPlayer.style.display = '';

    var now = new Date();
    var millis = Date.parse(now);
    // For the inline audio player, we need the fully-qualified URL to the Captcha service.
    var captchaURL = location.protocol + '//' + location.host + '/system/servlet/captcha?type=sound&nocache=' + millis;

    // Use a different audio player depending on the browser.
    //   - Apple QuickTime for Opera and Safari.
    //   - Windows Media Player for everything else.
    if (YAHOO.env.ua.opera || YAHOO.env.ua.webkit) {
      audioPlayer.innerHTML = '<OBJECT'
        + ' CLASSID="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"'
        + ' WIDTH="160" HEIGHT="50"'
        + ' CODEBASE="http://www.apple.com/qtactivex/qtplugin.cab">'
        + '<PARAM name="SRC" value="' + captchaURL + '" /> ' 
        + '<PARAM name="AUTOPLAY" VALUE="true">'
        + '<PARAM name="CONTROLLER" VALUE="false">'
        + '<PARAM name="VOLUME" VALUE="100">'
        + '<PARAM name="ENABLEJAVASCRIPT" VALUE="true">'
        + '<PARAM name="TYPE" VALUE="audio/wav">'
        + '<embed classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"' 
        + ' name="sound" id="sound"' 
        + ' src="' + captchaURL + '"' 
        + ' pluginspage="http://www.apple.com/quicktime/download/"'
        + ' volume="100" enablejavascript="true" '
        + ' type="audio/wav" width="160" height="50" autostart="true"'
        + '> </embed>'
        + '</OBJECT>';

    } else {

      audioPlayer.innerHTML='<OBJECT'
        + ' CLASSID="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95"'
        + ' WIDTH="160" HEIGHT="50"'
        + ' CODEBASE="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701"'
        + ' STANDBY="Loading Microsoft� Windows� Media Player components..."'
        + ' type="application/x-oleobject" align="middle">'
        + '<PARAM name="FileName" value="' + captchaURL + '" />'
        + '<PARAM name="AutoStart" value="True" />'
        + '<PARAM name="ShowStatusBar" value="True" />'
        + '<PARAM name="ShowPositionControls" value="False">'
        + '<PARAM name="Volume" value="1">'
        + '<PARAM name="Mute" value="False">'
        + '<PARAM name="DefaultFrame" value="mainFrame" />'
        + '<embed id="captcha_embed" type="application/x-mplayer2"'
        + ' pluginspage="http://www.microsoft.com/Windows/MediaPlayer/"'
        + ' width="160" height="50" showstatusbar="true"'
        + ' src="' + captchaURL + '"></embed>'
        + '<br /><a href="' + captchaURL + '" target="_blank" title="Opens a new window">Click here for standalone player</a>'
        + '</object>';
    }
  }

  if (window.event) {
    window.event.returnValue = false;
  } 
  
  return false;
}

function validateConsField(formName) {
  var form = document.forms[formName];
  if (! form) {
    return true; 
  }
  
  var pwd = form.elements["cons.user_password"];
  var rePass = form.elements["cons.repass"];
  if (pwd && rePass) {
        if (pwd.value != rePass.value) {
                alert ("Password and re-enter-password fields do not match.");
                toggleSubmitButtons(false);
                return false;
        }
  }
  return true;
  
}
function validateCaptcha(formName) {

  var form = document.forms[formName];
  if (! form) {
    return true; 
  }
  
  var captcha = form.elements["captcha"];
  if (! captcha) { 
    return true; 
  }

  // If no value was supplied for captcha, we know it's invalid.
  // No need to send a validation request.
  if (! captcha.value) {
    handleInvalidCaptcha(formName);
    if (window.event) {
      window.event.returnValue = false;
    }
    return false;
  }
  
  RPCHandler.setResponseHandler("CAPTCHA_VALID", 
    new Function("handleValidCaptcha('" + formName + "')"));
  RPCHandler.setResponseHandler("CAPTCHA_INVALID", 
    new Function("handleInvalidCaptcha('" + formName + "')"));
    
  RPCHandler.submit("/system/actions/captcha-verify.jsp?answer=" + 
    captcha.value);
    
  if (window.event) {
    window.event.returnValue = false;
  }
  return false;
}

function handleValidCaptcha(formName) {

  var form = document.forms[formName];
  if (! form) { return; }

  form.submit();
}

function getCaptchaType() {
  var img = document.getElementById("captcha-image");
  var audioPlayer = document.getElementById('captcha-audio');

  var type = null;
  if (img && img.style.display != 'none') {
    type = 'image';
  } else if (audioPlayer && audioPlayer.style.display != 'none') {
    type = 'audio';
  } else {
    throw('Invalid captcha type.');
  }

  return type;
}

function handleInvalidCaptcha(formName) {

  var form = document.forms[formName];
  if (! form) { return; }

  var captcha = form.elements["captcha"];
  if (! captcha) { return; }


  var captchaType = getCaptchaType();

  if (captchaType == 'audio') {
    alert("Your answer to the challenge does not match the audio sample. " +
          "Please try again.");
    changeAudioCaptcha();
  }

  if (captchaType == 'image') {
    alert("Your answer to the challenge does not match the image. " +
          "Please try again.");
    changeCaptcha();
  }

  captcha.value = '';
  
  try {
    captcha.focus();
  } catch (e) {}

  // Make sure submit buttons are enabled if an invalid CAPTCHA answer
  // prevented a form submit.
  toggleSubmitButtons(false);
}

// CAPTCHA - end


function isLeapYear(year){
  return (year % 4 == 0 && ((year % 100 != 0) || (year % 400 == 0)));
}

function isButtonGroup(element) {

  return (! element.tagName && element.length);
}

function isSelect(element) {
  return (element.type == "select-one");
}

function check4KLengths(formName) {
  var form = document.forms[formName];
  
  if (! form) { return; }

  var elements = form.elements;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    if (element.name == "body" || element.id == "body") { continue; }

    if (element.tagName == 'INPUT' && element.type == "hidden") {
      continue;
    }

    var value = __getSubmittedValue(element);

    if (! value) {
      continue;
    }

    if (value.length > 3990) {
      alert("The text of field '" + element.name + 
            "' is longer than the limit of 4000 characters " +
            "(current width " + value.length + ")");
      try {
        element.focus();
      } catch (e) {
        // Some elements are not focusable. Ignore.
      }
      if (window.event) {
        window.event.returnValue = false;
      }
      return false;
    }
  }

  return true;
}


/**
 * Validates a form for duplicate fields. Form fields includes
 * WYSIWYG editor fields.
 *
 * @param form The form
 * @param element The form field
 * @param name The name of the field
 * @return false if a dupe field is found, otherwise true
 */
function checkDupeFieldName(element, name, form) {
  if (! form) {
    form = element.form;
  }

  if (form) {

    // Search for a form field with the same name.
    // Note: form.elements[name] did not work for radio buttons,
    //       so instead, we iterate over each form element.
    var testElement;
    var fields = form.elements;
    for (var i=0; i<fields.length; i++) {
      if (fields[i].name && fields[i].name == name) {
        testElement = fields[i];
        break;
      }
    }

    if (! testElement) {
      // Check for WYSIWYG editor.
      testElement = form.document.getElementById(name);
    }

    if (testElement && testElement.name && testElement != element) {
      if ((element.type == "radio" || element.type == "checkbox") && element.type == testElement.type) {
        // Exceptions:
        // Radio buttons can share names with radio buttons.
        // Checkboxes can share names with checkboxes.
      } else {
        alert("The name '" + name + "' has already been applied to another " +
              "form element.  Please choose another name.");
        return false;
      }
    }
    
    if (isNameReserved(name)) {
      alert("You can't use a field name of '" + name + "'");             
      return false;
    }
  }

  return true;
}

function isNameReserved(name) {
  for (var i=0; i<RESERVED_NAMES.length; i++) {
    if (name.toLowerCase() == RESERVED_NAMES[i].toLowerCase()) {
      return true;
    }
  }
  return false;
}
 

function checkValue(formName, elementName, message) {

  var element = document.forms[formName].elements[elementName];

  if (! element) {
    alert("Could not find element " + elementName + " in form " + formName);
    return;
  }

  var isGroup = isButtonGroup(element);
  if (isGroup) {
    var value = getCheckedValue(elementName);
  } else {
    if (isSelect(element)) {
      var value = getSelectedValue(formName, elementName);
    } else {
      var value = element.value;
    }
  }
  if (! value || value == "" ) {
    if (message != "") {
      alert(message);
    }
    if (! isGroup && (! element.type || (element.type != "hidden"))) {
      element.focus();
    }
    if (window.event) { window.event.returnValue = false; }
    return false;
  }
  return true;
}

function checkIntRange(formName, elementName, min, max, message) {

  intPattern = /^\d+$/;

  var element = document.forms[formName].elements[elementName];
  if (! element) {
    alert("Could not find element " + elementName + " in form " + formName);
    return;
  }

  var value = element.value;

  if (! intPattern.exec(value)) {
    if (message != "") {
      alert(message);
    }
    element.focus();
    if (window.event) { window.event.returnValue = false; }
    return false;
  }

  if (value < min || value > max) {
    if (message != "") {
      alert(message);
    }
    element.focus();
    if (window.event) { window.event.returnValue = false; }
    return false;
  }

  return true;
}

function checkEmailValue(s) {

   var emailPattern = /^.+@.+\..{2,}$/;
   if (! emailPattern.test(s)) { 
     return false;
   }

   var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\ \[\]]/
   if (s.match(illegalChars)) {
      return false;
   }

   return true;
} 

function checkEmail(formName, elementName, message) {

  return checkFunction(formName, elementName, message, checkEmailValue);
}


function checkFileName(formName, elementName, fileType) {

   if (! checkPattern(formName, elementName,
      "The " + fileType + " must begin with a letter or digit", 
                      /^[a-z0-9A-Z]/)) {
     return false;
   }

   return checkPattern(formName, elementName,
      "The " + fileType + 
      " can only contain letters, digits, dashes and underscores", 
                       /^[a-z0-9A-Z\-_]+$/);
}

function checkImageFileName(formName, elementName, fileType) {

  if (!checkFileName(formName, elementName, fileType)) {
    return;
  }

  if (! checkPattern(formName, elementName,
                     "The " + fileType + 
                     " filename must end with '.jpg', '.jpeg', '.gif' or '.png'", 
                     /^(.*)(.(gif|jpg|jpeg|png))$/, true)) {
    return;
  }

  return true;
}

function checkDate(formName, elementName, message) {

  var datePattern = /^(0?\d|\d\d)\/(0?\d|\d\d)\/(\d\d\d\d)$/;

  return checkPattern(formName, elementName, message, datePattern);
}

function checkInt(formName, elementName, message) {

  var intPattern = /^\d+$/;

  return checkPattern(formName, elementName, message, intPattern);
}

function checkNum(formName, elementName, message) {

  var numPattern = /^(\d+(\.\d*)?|\.\d+)$/;

  return checkPattern(formName, elementName, message, numPattern);
}

function checkRelativeURL(formName, elementName, message) {
  var pathPattern = /\/([a-zA-Z0-9_?&=%,\-\.\/]*$)/;

  return checkPattern(formName, elementName, message, pathPattern);
}

function checkURL(formName, elementName, message) {

  var urlPattern = /^(ftp|https?):\/\/(?:[a-zA-Z0-9](?:[-a-z-A-Z0-9]*[a-zA-Z0-9])?)+\b(?:\d+)?(?:\/[^;"'<>()\[\]{}\s\x7f-\xff]*(?:[.,?]+[^;"'<>()\[\]{}\s\x7f-\xff]+)*)?/;

  return checkPattern(formName, elementName, message, urlPattern);
}

function checkTime(formName, elementName, message) {

  var timePattern = /\d{1,2}:\d\d\ ([aA][mM]|[pP][mM])/;

  return checkPattern(formName, elementName, message, timePattern);
}

function checkPattern(formName, elementName, message, pattern, ignoreCase) {

  var element = getElement(formName, elementName);
  if (element == null) { 
    alert("Element " + elementName + " not found.");
    if (window.event) { window.event.returnValue = false; }
    return false;  
  }

  var value = element.value;
  if (ignoreCase) {
    value = value.toLowerCase();
  }

  if (! pattern.exec(value)) {
    alert(message);
    element.focus();
    if (window.event) { window.event.returnValue = false; }
    return false;
  }

  return true;
}

function checkFunction(formName, elementName, message, f) {

  var element = getElement(formName, elementName);
  if (element == null) { 
    alert("Element " + elementName + " not found.");
    if (window.event) { window.event.returnValue = false; }
    return false;  
  }

  if (element.tagName == "INPUT" && element.type == "hidden") {
    return true;
  }

  var value = element.value;

  if (! f(value)) {
    alert(message);
    element.focus();
    if (window.event) { window.event.returnValue = false; }
    return false;
  }

  return true;
}

// Function that checks that a pair of form elements is either both
// set or both unset.

function checkValuePair(formName, elementOne, elementTwo, message) {

  var element1 = document.forms[formName].elements[elementOne];
  var element2 = document.forms[formName].elements[elementTwo];

  if (! element1) {
    alert("Could not find element " + elementOne + " in form " + formName);
    return;
  }
  if (! element2) {
    alert("Could not find element " + elementTwo + " in form " + formName);
    return;
  }

  if (isButtonGroup(element1)) {
    var value1 = getCheckedValue(elementOne);
  } else {
    if (isSelect(element1)) {
      var value1 = getSelectedValue(formName, elementOne);
    } else {
      var value1 = element1.value;
    }
  }
  if (isButtonGroup(element2)) {
    var value2 = getCheckedValue(elementTwo);
  } else {
    if (isSelect(element2)) {
      var value2 = getSelectedValue(formName, elementTwo);
    } else {
      var value2 = element2.value;
    }
  }
  if ((value1 == "" && value2 != "") || (value1 != "" && value2 == "")) {
    alert(message);
    if (value1 == "") {
      element1.focus();
    } else {
      element2.focus();
    }
    if (window.event) { window.event.returnValue = false; }
    return false;
  }
  return true;
}

function getCheckedValue(elementName, elements) {
  
  if (! elements) {
    elements = document.getElementsByName(elementName);
  }

  for (i = 0; i < elements.length; i++) {
    var element = elements.item(i);
    if (element.checked) {
      return element.value;
    }
  }
  return "";
}

function getCheckedValues(elementName) {

  var elements = document.getElementsByName(elementName);
  var values = new Array();
  var valueCount = 0;
  for (i = 0; i < elements.length; i++) {
    if (elements.item(i).checked) {
      values[valueCount++] = elements.item(i).value;
    }
  }
  return values;
}

function getSelectedValue(formName, elementName) {
  
  var element = document.forms[formName].elements[elementName];
  if (element.selectedIndex != -1) {
    return element.item(element.selectedIndex).value;
  }
  return "";
}

// form data takes the form [ [elementName, whichTest, errorMessage], ... ]
// valid tests are "notnull" and "date"

function checkValues(formName, formData) {
  if (formData) {
  for (i = 0; i < formData.length; i++) {

    var elementData = formData[i];
    var elementName = elementData[0];
    var whichTest = elementData[1];
    var errorMessage = elementData[2];

    if (whichTest == "notnull") {

      if (! checkValue(formName, elementName, errorMessage)) 
        return false; 
    }
  }
  }
  return true;
}

function getElement(formName, elementName, ignoreCase) {

  var form = document.forms[formName];
  if (! form) { 
    alert("No such form " + formName);
    return null;
  }

  var element = null;
  if (! ignoreCase) {
    element = form.elements[elementName];
  } else {
    elementName = elementName.toLowerCase();
    for (var i = 0; i < form.elements.length; i++) {
      if (form.elements[i].name == elementName) {
        element = form.elements[i];
        break;
      }
    }
  }

  if (! element) { 
    alert("No such element " + elementName);
    return null;
  }

  return element;
}

function getValue(formName, elementName) {

  var element = getElement(formName, elementName);
  if (element == null) { return; }

  if (element.tagName == "SELECT") {
    return getSelectedValue(formName, elementName);
  }

  if (element.length) {
    return getCheckedValue(elementName, element);
  }

  return element.value;
}

function setValue(formName, elementName, value) {

  var element = getElement(formName, elementName);
  if (element == null) { return; }

  if (element.length && element.tagName != "SELECT") {
    setCheckedValue(element, value);
    return;
  }

  if (element.tagName == "SELECT") {
    setSelectedValue(element, value);
  }

  element.value = value;
}

function setCheckedValue(elements, value) {
  
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.checked = (element.value == value);
  }
}

function setSelectedValue(element, value) {
  
  var options = element.options;
  for (var i = 0; i < options.length; i++) {
    var option = options[i];
    option.selected = (option.value == value);
  }
}

function setCheckedValues(formName, elementName, values) {

  var element = getElement(formName, elementName);
  if (element == null) { return; }

  var elements = element;
  if (! element.length) {
    elements = new Array();
    elements[0] = element;
  }

  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    for (var j = 0; j < elements.length; j++) {
      var element = elements[j];
      if (element.value == value) element.checked = true;
    }
  }
}

function focusElement(formName, elementName, selectAll) {

  if (! elementName) { return; }

  var element = getElement(formName, elementName);
  if (element == null) { return; }

  element.focus();
  if (selectAll)
    element.select();
}

function Validator(type, required) {

  this.type = type;
  this.required = required;

  this.validate = validateValue;
  this.checkType = checkType;
  this.checkLength = checkLength;
  this.checkChars = checkChars;
  this.checkRange = checkRange;
  this.toString = function() {

    var s = "";
    var i = 0;

    for (var name in this) {
      var value = this[name];
      if (! value || value instanceof Function) { continue; }
      if (i++ > 0) { s += ";"; }
      s += name + ":" + value;
    }

    return s;  
  };
}

function validateValue(value) {
  if (value == "") {
    if (this.required) {
      this.message = "A value is required for the field '" + this.label + "'";
      return false;
    } else {
      return true;
    }
  }

  switch (this.type) {
    case "text":
      if (! this.checkLength(value)) { return false; }
      if (! this.checkChars(value)) { return false; }
      break;
    case "password":
      if (! this.checkLength(value)) { return false; }
      if (! this.checkChars(value)) { return false; }
    case "integer":
      if (! this.checkType(value)) { return false; }
      var intValue = parseInt(value);
      if (! this.checkRange(intValue)) { return false; }
      break;
    case "number":
      if (! this.checkType(value)) { return false; }
      var numValue = parseFloat(value);
      if (! this.checkRange(numValue)) { return false; }
      break;
    case "date":
      if (! this.checkType(value)) { return false; }
      break;
    case "email":
      if (! this.checkType(value)) { return false; }
      break;
    case "filename":
      if (! this.checkType(value)) { return false; }
      break;
  }

  return true;
}

function checkType(value) {

  switch (this.type) {

    case "integer":

      var pattern = /^\d+$/;
      if (! pattern.exec(value)) {
        this.message = "'" + value + "' is not a valid integer.";
        return false;
      }
      break;

    case "number":

      var numPattern = /^(\d+(\.\d*)?|\.\d+)$/;

      if (! numPattern.exec(value)) {
        this.message = "'" + value + "' is not a valid number.";
        return false;
      }

      if (this.decimalPlaces) {

        if (this.decimalPlaces > 0) {
          numPattern = new RegExp("^(\\d+(\\.\\d{0," + this.decimalPlaces +
            "})?|\\.\\d{1," + this.decimalPlaces + "})$");
        } else {
          numPattern = /^\d+$/;
        }

        if (! numPattern.exec(value)) {
          this.message = "'" + value + "' has more than " +
          this.decimalPlaces + " digits after the decimal point.";
          return false;
        }
      }
      break;

    case "date":

      var datePattern = /^(0?\d|\d\d)\/(0?\d|\d\d)\/(\d\d\d\d)$/;
      var ary = datePattern.exec(value);
      if (ary == null) {
        this.message = "'" + value + "' is not a valid date (MM/dd/YYYY).";
        return false;
      }

      var month = parseInt(ary[1].replace(/^0/, ""));
      var date = parseInt(ary[2].replace(/^0/, ""));
      var year = parseInt(ary[3]);

      if (month < 1 || month > 12) {
        this.message = "Please enter a month between 1 and 12.";
        return false;
      } 

      var monthLength = MONTH_LENGTH[month];
      if (month == 2 && isLeapYear(year)) { monthLength++; }

      if (date < 1 || date > monthLength) {
        this.message = "Please enter a date between 1 and " + monthLength;
        return false;
      } 

      if (year < 1000 || year > 2100) {
        this.message = "Please enter a year between 1000 and 2100.";
        return false;
      }

      break;

    case "email":

      if (! checkEmailValue(value)) {
        this.message = "'" + value + "' is not a valid e-mail address.";
        return false;
      }
      break;

    case "filename":

      var filePattern = /^[a-zA-Z0-9_\-]+$/;
      if (! filePattern.exec(value)) {
        this.message = "'" + value + "' is not a valid file name.  Only letters, digits, underscores and dashes are allowed.";
        return false;
      }
      break;
  }

  return true;
}

function checkRange(value) {

  var nVal = parseFloat(value);

  if (this.minValue) {

    var nMin = parseFloat(this.minValue);

    if (! this.minBound) this.minBound = "ge";

    if (this.minBound == "gt" && nVal <= nMin) {
      this.message = "Value must be greater than " + this.minValue + ".";
      return false;
    }

    if (this.minBound == "ge" && nVal < nMin) {
      this.message = "Value must be greater than or equal to " +
                     this.minValue + ".";
      return false;
    }
  }

  if (this.maxValue) {

    var nMax = parseFloat(this.maxValue);

    if (! this.maxBound) this.maxBound = "le";

    if (this.maxBound == "lt" && nVal >= nMax) {
      this.message = "Value must be less than " + this.maxValue + ".";
      return false;
    }

    if (this.maxBound == "le" && nVal > nMax) {
      this.message = "Value must be less than or equal to " +
                     this.maxValue + ".";
      return false;
    }
  }

  return true;
}

function checkLength(value) {

  var length = value.length;

  if (this.minLength && length < this.minLength) {
    this.message =
      "Value of " + this.label + " cannot be less than " + this.minLength + " characters long " +
      "(current length is " + length + " characters)";
    return false;
  } 

  if (this.maxLength && length > this.maxLength) {
    this.message =
      "Value of " + this.label + " cannot be more than " + this.maxLength + " characters long." +
      "(current length is " + length + " characters)";
    return false;
  } 

  return true;
}

function checkChars(value) {

  if (! this.allowChars) { return true; }

  var chars = this.allowChars.split(",");

  var isDigit = false;
  var isLetter = false;
  var isSpace = false;

  for (var i = 0; i < chars.length; i++) {
    var c = chars[i];
    if (c == 'digit') {
      isDigit = true;
    } else if (c == 'white') {
      isSpace = true;
    } else if (c == 'letter') {
      isLetter = true;
    }
  }

  var digPat = /\d/;
  if (! isDigit && value.search(digPat) != -1) {
    this.message = "Value cannot contain digits.";
    return false;
  }

  var letPat = /[a-zA-Z]/;
  if (! isLetter && value.search(letPat) != -1) {
    this.message = "Value cannot contain letters.";
    return false;
  }

  var spacePat = /\s/;
  if (! isSpace && value.search(spacePat) != -1) {
    this.message = "Value cannot contain spaces.";
    return false;
  }

  return true;
}

/**
 * Fetches the value of the form field.
 */
function __getSubmittedValue(element) {
  if (! element) { return null; }

  var value = element.value;

  if (_isRTF(element)) {
    // The value stored in the hidden textarea is the original value.
    // The actual value for RTF fields is fetched via editor.getContent().

    var editor = tinyMCE.get(element.id);
    value = editor.getContent();
  }

  else if (element.style.display == "none" ||
           element.style.visibility == "hidden") { 

    var hiddenElements = element.form.getElementsByTagName("INPUT");
    for (var j=0; j<hiddenElements.length; j++) {
      var he = hiddenElements[j];
      if (he.type != "hidden" || he.name != element.name) { continue; }
      if (he.value) {
        value = he.value;
        break;
      }
    }
  }

  return value;
}

function validateForm(formName) {

  // disables submit button first
  toggleSubmitButtons(true);

  var form = document.forms[formName];
  if (! form) { 
    alert("No form named '" + formName + "' to validate.");
    return; 
  }

  // Re-enables submit button when we leave page (so it's available on 'Back' tt# 106790)
  // Also clear values for the file upload field to prevent multiple file upload
  // submissions (double-click).
  window.onunload = toggleSubmitButtonsForUnload;

  var elements = form.elements;
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    var validation = element.getAttribute("validation");
    if (! validation) { continue; }

    var validator = createValidator(validation);
    validator.label = element.title ? element.title : element.name;
    var isLocation = (validator && validator.type && validator.type == "location");
    
    if ((element.tagName == "INPUT" && !isLocation) &&
        (element.type == "hidden" || element.type == "submit")) {
      continue;
    }

    // Determine whether a required selection was not made.
    var isButton = (element.tagName == "INPUT" && 
                    element.type == "checkbox" || element.type == "radio");
    var selectionMissed = false;
    if (isButton && validator.required) {
      selectionMissed = ! element.checked;
      var a = elements[element.name];
      if (a && a.length) {
        for (var j=0; j < a.length; j++) {
          if (a[j].checked) {
            selectionMissed = false;
            break;
          }
        }
      } 
    }

    var value = __getSubmittedValue(element);

    if (selectionMissed || ! validator.validate(value)) {

      var missedMessage = "Please make at least one selection for " + element.name;
      if (element.type == "checkbox" || element.type == "radio") {
        if ((validator.label).indexOf(":") != -1) {      
          missedMessage = "Please make at least one selection for " + validator.label.substring(0, (validator.label).indexOf(":")) ;
        }
      }
      var msg = selectionMissed ? missedMessage : validator.message;    
      alert(msg);

      if (element.style.display != "none" &&
        element.style.visibility != "hidden") { 
        element.focus();
      } 

      toggleSubmitButtons(false);

      if (window.event) {
            window.event.returnValue = false;
      }
      return false;
    }
    

    // look for any "link" validation requirements and throw an error if not fulfilled
    var linkPattern = /^link:(.*)\((.*)\)$/;
    var validationElements = validation.split(';');
    for (var k=0; k < validationElements.length; k++) {

      var linkData = linkPattern.exec(validationElements[k]);

      if (linkData != null) {

        // The link requirement was found.  Now see if it matches what was selected and if required field is blank.

        var itemSet = elements[linkData[1]];
        var itemSelected = itemSet.item(itemSet.selectedIndex);

        var linkedSelectionName = linkData[2];

        if (itemSelected.value === linkedSelectionName && element.value === "") {
          alert("A value is required for the field '" + element.title + "' when the value for '" + itemSet.title + "' is set to '" + itemSelected.label + "'");
          if (window.event) { window.event.returnValue = false; }
          return false;
        }

      }
    }


  } // end for (form.elements)

  if (! check4KLengths(formName)) {
    return false;
  }

  // Validate C360 fields.
  if (! validateConsField(formName)) {
    return false;
  }

  // Validate CAPTCHA.
  if (! validateCaptcha(formName)) {
    return false;
  }
  
  return true;
}

/**
 * Determines if an element is an RTF field.
 */
function _isRTF(n) {
  if ((typeof tinyMCE) != 'undefined' && tinyMCE && tinyMCE.editors) {

    if (n.id != null && n.nodeName.toLowerCase() == "textarea"
        && n.style && n.style.display == "none"
        && n.className && n.className.indexOf("frontleaf-editor") != -1) {
      if (tinyMCE.get(n.id)) {
        return true;
      }
    }
  }
  return false;
}

function highlightForm(formName) { 

  var form = document.forms[formName];

  if (! form) { return; }

  var elements = form.elements;

  for (var i = 0; i < elements.length; i++) {

    var element = elements[i];

    if (element.tagName == "TEXTAREA") {
      if (YAHOO.env.ua.ie > 0) {
        element.innerText = trimString(element.innerText);
      } else {
        element.textContent = trimString(element.textContent);
      }
    }

    var validationAttribute = element.getAttribute("validation");
    if (element.tagName == "SELECT" && element.size > 1 &&
        (! validationAttribute || validationAttribute.indexOf("required:true") == -1)) {
      var option = document.createElement("OPTION");
      if (YAHOO.env.ua.ie > 0) {
        option.innerText = "None";
      } else {
        option.innerHTML = "None";
      }
      option.value = "";
      element.insertBefore(option, element.firstChild);
    }

    if (! validationAttribute) { continue; }

    var validator = createValidator(validationAttribute);

    // Highlight required fields.
    var isButton = (element.tagName == "INPUT" && 
                    element.type == "checkbox" || element.type == "radio");
    if (validator.required && ! isButton) {
      if (element.className) {
        element.className += " formWidgetRequired";
      } else {
        element.className = "formWidgetRequired";
      }
    }

    // Prepopulate user fields.
    if (validator.standard && window.user && validator.defaultRule == "user") {
      
      if (window.user[validator.standard]) {
        element.value = window.user[validator.standard];
      }
    }
  }
}

function createValidator(parameterString) {

  if (! parameterString) { parameterString = ""; }

  var validator = new Validator("text", false);

  var params = parameterString.split(";");
  for (var i = 0; i < params.length; i++) {
    var param = params[i].split(":");
    validator[param[0]] = param[1];
  }

  return validator;
}

function objectToString(object) {

  var s = "";
  var i = 0;

  for (var name in object) {
    var value = object[name];
    if (! value || value instanceof Function) { continue; }
    if (i++ > 0) { s += ";"; }
    if (typeof value == "object") {
      s += name + ": { " + objectToString(value) + " }";
    } else {
      s += name + ":" + value;
    }
  }

  return s;
}

function stringToObject(str, obj) {

  if (! obj) {
    obj = new Object();
  }

  var params = str.split(";");
  for (var i = 0; i < params.length; i++) {
    var param = params[i].split(":");
    obj[param[0]] = param[1];
  }

  return obj;
}

function trimString(s) {

  if (s == null) return "";

  s = s.replace(/^\s*(.*)/, "$1");
  s = s.replace(/(.*?)\s*$/, "$1");

  return s;
}

/**
 * Updates the element label in the common situation where
 * a 2-column table is used to layout the form.
 **/
function updateLabel(element, label, oldElement) {
    var cell = element.parentNode;
    // maybe widget is wrapped w/ chooser div   
    if (cell.tagName == "DIV" && cell.parentNode.tagName == "TD") {
        cell = cell.parentNode;
    } 
    // special case for location widget, whose input is in a div nested in a div
    if (cell.tagName == "DIV" && cell.parentNode.tagName == "DIV" && cell.parentNode.parentNode.tagName == "TD") {
        cell = cell.parentNode.parentNode;
    }

    if (cell != null) {
        // Find previous non-text sibling.
        var previousSibling = cell.previousSibling;
        while (previousSibling && previousSibling.nodeType != 1) {
            previousSibling = previousSibling.previousSibling;
        }

        if (cell.tagName == "TD" && previousSibling) {
            cell = previousSibling;

            var isEmpty = (cell.innerHTML == '&nbsp;' || cell.innerHTML == '<br data-mce-bogus="1">');
            if (isEmpty ||
                (oldElement && cell.innerHTML == oldElement.title) || //Ungrouped elements
                (oldElement && oldElement.title.indexOf(cell.innerHTML + ' ::') == 0) ||  //Grouped elements' title should start with their label.
                cell.innerHTML.match(/mce_bogus/) || //This seems to be a safer check
                cell.innerHTML == '<br>' ||  //This may not be strictly necessary, but I saw it once.
                cell.innerHTML == '') {
                cell.innerHTML = label;
            } 
        }
    }
}

function setFieldName(label, formName) {

  if (! label) { return; }

  var name = getValue(formName, "name");
  if (name != "" && ! name.match(/^field/)) { return; }

  name = labelToName(label);

  setValue(formName, "name", name);
}

function labelToName(label) {

  var name = label.toLowerCase();
  name = name.replace(/\s/g, "_");
  name = name.replace(/\W/g, "");

  return name;
}

function labelToFileName(label, separator) {

  if (! separator) {
    separator = "-";
  }

  var name = label.toLowerCase();
  name = name.replace(/\s/g, separator);
  name = name.replace(/[^a-zA-Z0-9-_]/g, "");

  return name;
}

// truncates the string "s" to a maximum of "maxLength" characters
// if "cleanBreak" is not false, the break occurs between words (at a ' ' at least)
// "trailer" is appended to the truncated string
function truncate(s, maxLength, cleanBreak, trailer) {
  if (s == null) return "";
  if (cleanBreak) {
    return (s.length < maxLength) ? s : 
      s.substring(0, s.substring(0,maxLength).lastIndexOf(' ')) + trailer;
  } else {
    return (s.length < maxLength) ? s : 
      s.substring(0, maxLength - 3) + trailer;
  }
}

function tabToElement(formName, tabIndex) {

  var elements = document.forms[formName].elements;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.tabIndex == tabIndex) {
      element.focus();
      break;
    }
  }
}

function showContextHelp(contextPath, path, anchor) {

  path = contextPath + "/admin/help/context/" + path + ".html";
  if (anchor) { path += "#" + anchor; }

  helpWin = window.showHelp(path);
}

function getValues(formName) {

  var values = new Array();

  var form = document.forms[formName];
  if (! form) { 
    alert("No form named " + formName); 
    return;
  }

  var elements = form.elements;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var value = element.value;
    if (element.type && element.type =="hidden" && 
        element.htmlEditor) {
      value = element.htmlEditor.value;
    }
    if (element.tagName == "INPUT" && 
        (element.type == "checkbox" || element.type == "radio") &&
        ! element.checked) { continue; }
    if (element.tagName == "SELECT" && element.multiple) {
      var selectValues = new Array();
      for (var j = 0; j < element.options.length; j++) {
        var option = element.options[j];
        if (option.selected) { selectValues.push(option.value); }
      }
      value = selectValues.join(' ');
    }
    values.push(value);
  }

  return values;
}

var gRecordFormName = "record";
var gRecordParam = "com.frontleaf.record.RecordID";

function doFormLoad() {

  highlightForm(gRecordFormName);

  var form = document.forms[gRecordFormName];
  if (form == null) { return; }

  var cookie = getCookie("submittedRecords");

  var recordID = getValue(gRecordFormName, gRecordParam);

  if (cookie) {
    var re = new RegExp("\\b" + recordID + "\\b");
    if (cookie.match(re)) {
      window.location.reload(true);
    }
  }
}

function toggleSubmitButtons(isDisabled) {
  var elements = document.getElementsByTagName("INPUT");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.type && 
        (element.type == "submit" || element.type == "button")) {
      element.disabled = isDisabled;
    }
  }
}

/**
 * Enables the form submit buttons and resets all file upload values. 
 */
function toggleSubmitButtonsForUnload() {
  var elements = document.getElementsByTagName("INPUT");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.type && 
        (element.type == "submit" || element.type == "button")) {
      element.disabled = false;
    } else if (element.type && element.type == "file") {
      // Clear file upload field values to prevent multiple copies of files
      // from being uploaded.
      element.value = '';
    }
  }
}

function doImageChoose(formName, widgetName, folderID) {

  var item = 
    showDialog("/admin/components/explorer/dialog.jsp?folderID=" + folderID, 
               null, 600, 400);

  if (item == null) {
    return;
  }

  var div = document.getElementById("thumbnail-" + widgetName);
  if (div == null) { return; }

  div.style.border = "0 none";
  div.innerHTML = "<img ondblclick=\"doImageChoosePreview()\" src=\"" + 
    item.thumbnailURL + "\" id=\"thumbnail-" + item.id + 
    "\" align=absmiddle><p>" + item.fileName + "</p>";

  setValue(formName, widgetName, item.id);
}

function doImageChooseClear(formName, widgetName, folderID) {

  var div = document.getElementById("thumbnail-" + widgetName);
  if (div == null) { return; }

  div.style.border = "white inset 2";
  div.style.height = div.clientHeight;
  div.style.width = div.clientWidth;
  div.innerHTML = "No<br>image<br>selected";

  setValue(formName, widgetName, "");
}

function doImageChoosePreview() {
  
  var image = event.srcElement;
  if (image == null || image.tagName != "IMG" || ! image.id) { return; }

  var idData = image.id.split("-");
  var itemID = idData[1];
  
  showDialog("/admin/components/explorer/image-preview.jsp?itemID=" + itemID);
}

function doRelatedItemsChoose(formName, widgetName, folderID) {

  var path = "/admin/components/related/dialog.jsp?folderID=" + folderID;

  var itemIDs = new Array();
  var select = getElement(formName, widgetName);
  for (var i = 0; i < select.options.length; i++) {
    itemIDs.push(select.options[i].value);
  }

  if (itemIDs.length > 0) {
    path += "&itemIDs=" + itemIDs.join(",");
  }

  var items = showDialog(path, null, 600, 400);

  if (items == null) {
    return;
  }

  var select = getElement(formName, widgetName);
  select.innerHTML = "";

  var div = document.getElementById("relatedItems-" + widgetName);
  if (div == null) { return; }

  if (items.length == 0) {
    div.innerHTML = "<div><em>No items selected</em></div>";
    return;
  }

  div.innerHTML = "";  

  for (var i = 0; i < items.length; i++) {
    
    var item = items[i];
    var itemDiv = document.createElement("DIV");
    itemDiv.innerHTML = "<img align=absmiddle src='" + item.iconURL +
      "'><span>&nbsp;" + item.title + "</span>";
    itemDiv.id = item.id;

    div.appendChild(itemDiv);

    var option = 
      document.createElement("<OPTION selected value=" + item.id + ">");
    select.options.add(option);
  }
}



function populateForm(formName) {
        
  var form = document.forms[formName];
  if (! form) { 
    alert("No form named '" + formName + "' to populate.");
    return; 
  }

  var elements = form.elements;
  
  for (var i = 0; i < elements.length; i++) {  
    var element = elements[i];
    if (element.tagName == "INPUT" &&
        (element.type == "hidden" || element.type == "submit")) {
      continue;
    }

    if (element.tagName == "INPUT" && 
        (element.type == "radio" || element.type == "checkbox")) {

      var valueElement = document.getElementById(element.name + "Value");
      if (valueElement) {
        element.checked = false;

        if (valueElement.innerHTML == element.value) {
          element.checked = true;
        } else {

          for (var j = 0; j < valueElement.childNodes.length; j++) {
            var value = valueElement.childNodes[j];
            if (value.innerHTML == element.value) {
              element.checked = true;
              break;
            }
          }
        }
      }

    } else {
      var valueElement = document.getElementById(element.name + "Value");
      if (! valueElement) { continue; }
      if (element.tagName == "SELECT") {

        if (element.style.visibility == "hidden") { continue; }

        var values = new Array();
        
        if (valueElement.firstChild &&
            valueElement.firstChild.nodeType == 1) {

          for (var j = 0; j < valueElement.childNodes.length; j++) {
            var value = valueElement.childNodes[j].innerHTML;
            values[value] = true;
          }

        } else if (valueElement.firstChild && 
                   valueElement.firstChild.nodeType == 3) {
          
          values[valueElement.innerHTML] = true;
          
        } else if (valueElement.innerHTML == '') {
          values[''] = true;
        }

        for (var j = 0; j < element.options.length; j++) {
          var option = element.options[j];
          
          if (values[option.value] && ! option.selected) {
            option.selected = true;
          }
        }

      } else if (element.tagName == "TEXTAREA") {
        if (element.className == "frontleaf-editor") {
          // Do nothing. Ignore initial value for RTF fields -- this should be handled by EditorRange.java.
        } else {
          CmsXBrowser.setInnerText(element, valueElement.innerHTML);
        }

      } else if (element.tagName == "INPUT" && element.type == "file") {
        // It's not possible to pre-populate the related file upload widget.
        // Instead, add a DOM element listing the current value(s).
        if (element.name != "file") {
          addRelatedItemUploadValues(element);
        }

      } else {
        element.value = CmsXBrowser.innerText(valueElement) || '';
      }
    }
  }
}

/**
 * Inserts a display widget listing the related items.
 */
function addRelatedItemUploadValues(element) {
  var items = YAHOO.util.Dom.getElementsByClassName("relatedItem", "div", element.name + "Items");

  var div = document.createElement("div");
  YAHOO.util.Dom.addClass(div, "relatedItemUploadDisplay");

  var html = '<div class="header">Related Items:</div>';

  if (! items || items.length == 0) {
    // No related items.
    html += '<div class="body">No related items.</div>';
  } else {

    html += '<div class="body">\n';
    for (var j=0; j<items.length; j++) {

      var url = "/admin/item/actions/status.jsp?itemID=" + encodeURIComponent(items[j].id);
      var title = YAHOO.util.Dom.getFirstChildBy(items[j], function(n) {
        return n && YAHOO.util.Dom.hasClass(n, 'title');
      });
      var thumb = YAHOO.util.Dom.getFirstChildBy(items[j], function(n) {
        return n && YAHOO.util.Dom.hasClass(n, 'thumbnail');
      });

      html += '<div class="relatedItem">';
      html += '<a target="_blank" href="' + url + '"><img class="thumbnail" src="' + thumb.innerHTML + '" title="' + title.innerHTML + '" /></a>';
      html += '<div><a target="_blank" href="' + url + '">' + title.innerHTML + '</a></div>';
      html += '</div>\n'
    }
    html += '</div>\n';
  }

  div.innerHTML = html;
  element.parentNode.insertBefore(div, element.nextSibling);
}

function addOptions(retrieveDoc, elementID, selectorID, defaultValue) {
  
  var data = retrieveDoc.getElementById(elementID);
  if (data == null) {
    alert("addOptions: No data retrieved for menu " + selectorID);
    return;
  }

  var selector = document.getElementById(selectorID);
  if (selector == null) {
    alert("addOptions: No such menu " + selectorID);
    return;
  }

  selector.innerHTML = "";
  var divs = data.getElementsByTagName("DIV");
  var hasData = (divs.length == 0) ? false : true;

  var option = document.createElement("OPTION");
  option.value = "";
  option.innerHTML = (! hasData) ? "None available" : "Choose...";
  selector.appendChild(option);
  selector.disabled = (! hasData);
 
  if (divs.length == 0) {
    return;  
  }

  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    var spans = div.getElementsByTagName("SPAN");
    var option = document.createElement("OPTION");
    option.value = spans[0].innerHTML;
    if (option.value == defaultValue) {
      option.selected = true;
    }
    option.innerHTML = spans[1].innerHTML;
    selector.appendChild(option);
  }
}

function addButton(elementID, label, clickHandler) {
  
  var element = document.getElementById(elementID);

  var button = document.createElement("<INPUT TYPE=BUTTON>");
  button.className = "button";
  button.style.marginLeft = "24px";
  button.value = label;
  button.onclick = clickHandler;

  element.parentNode.insertBefore(button, element.nextSibling);
}

/*
 *  Function to encode colon, semicolon characters in the validation string in a standard way
 *  the argument is the string value to encode, and the return value is the encoded string
 *  Use the decode method to reverse this operation
 */
function encodeValidation(decodedValue) {
        return decodedValue.replace(/;/g, "|semi|").replace(/:/g, "|col|");
}

/*
 *  Function to decode colon, semicolon characters in the validation string in a standard way
 *  the argument is the string value to decode, and the return value is the decoded string
 *  Use the encode method to reverse this operation
 */
function decodeValidation(encodedValue) {
        return encodedValue.replace(/\|col\|/g, ":").replace(/\|semi\|/g, ";");
}



function FormData(formName) {
  this.name = formName;
  this.form = document.forms[formName];
  if (! this.form) {
    alert("No form named " + formName);
  }
}

FormData.prototype.getElement = function(elementName) {
  return this.form.elements[elementName];
}

FormData.prototype.getValues = function(name) {

  var values = new Array();

  for (var i = 0; i < this.form.elements.length; i++) {
    var element = this.form.elements[i];
    if (element.name == name && element.checked) {
      values.push(element.value);
    }
  }

  return values;
}

FormData.prototype.getElementsByName = function(name) {

  var elements = new Array();

  for (var i = 0; i < this.form.elements.length; i++) {
    if (this.form.elements[i].name == name) {
      elements.push(this.form.elements[i]);
    }
  }

  return elements;
}

FormData.prototype.getValue = function(elementName) {

  var element = this.form.elements[elementName];
  if (! element) {
    alert("No element named " + elementName + " in form " + this.name);
    return undefined;
  }

  if (element.tagName != "SELECT" && element.length) {
    
    for (var i = 0; i < element.length; i++) {

      var e = element[i];
      if (e.tagName == "INPUT" && 
          (e.type == "checkbox" || e.type =="radio")) {
        if (e.checked) { return e.value; }
      } else {
        return e.value;
      }
    }

  } else {

    return element.value;
  }
}

FormData.prototype.getDate = function(elementName) {

  var value = this.getValue(elementName);
  
  return Date.parse(value);
}

FormData.prototype.trimValue = function(elementName) {

  var element = this.form.elements[elementName];
  if (! element) {
    alert("No element named " + elementName + " in form " + this.name);
    return undefined;
  }

  if (element.value) {
    element.value = element.value.replace(/^\s+/, "");
    element.value = element.value.replace(/\s+$/, "");
  }
}

FormData.prototype.isNull = function(elementName, msg) {

  var cond = function(value) {
    return (value == undefined || value == null || value == "");
  }

  return this.checkValue(elementName, msg, cond);
}

FormData.prototype.isNotInteger = function(elementName, msg) {

  this.trimValue(elementName);

  return this.isNotMatch(elementName, /^\d+$/, msg);
}

FormData.prototype.isNotBetween = function(elementName, min, max, msg) {

  var cond = new Function("value", 
    "return (value < " + min + " || value > " + max + ")"
  );

  return this.checkValue(elementName, msg, cond);
}

FormData.prototype.isLongerThan = function(elementName, length, msg) {

  var cond = new Function("value", 
    "return (value && value.length && value.length > " + length + ")");

  return this.checkValue(elementName, msg, cond);
}

FormData.prototype.isWhitespace = function(elementName, msg) {

  var cond = new Function("value", 
    "return (! value || value.match(/^\\s*$/))");

  return this.checkValue(elementName, msg, cond);
}

FormData.prototype.isNotMatch = function(elementName, pattern, msg) {

  var cond = new Function("value", 
    "return (value && ! value.match(" + pattern + "))");

  return this.checkValue(elementName, msg, cond);
}

FormData.prototype.isNotImageFileName = function (elementName, msg) {

  if (! msg) {
    msg = "Please choose a GIF, JPEG or PNG image file to upload.";
  }

  var cond = function(value) {
    var re = /^(.*)(.(gif|jpg|jpeg|png))$/i;
    return ! re.exec(value);
  }

  return this.checkValue(elementName, msg, cond);
}

FormData.prototype.isNotURLName = function (elementName, msg) {

  var cond = function(value) {
    var re = /^[\.\-_a-z0-9A-Z]+$/;
    return ! re.exec(value);
  }

  return this.checkValue(elementName, msg, cond);
}

FormData.prototype.isMarkup = function (elementName, msg) {

  var cond = function(value) {
    var re = /^[ \.\-_a-z0-9A-Z]+$/;
    return ! re.exec(value);
  }

  return this.checkValue(elementName, msg, cond);
}

FormData.prototype.isNotURL= function (elementName, msg) {

  var cond = function(value) {
    var re = /^(ftp|https?):\/\/(?:[a-zA-Z0-9](?:[-a-z-A-Z0-9]*[a-zA-Z0-9])?)+\b(?:\d+)?(?:\/[^;"'<>()\[\]{}\s\x7f-\xff]*(?:[.,?]+[^;"'<>()\[\]{}\s\x7f-\xff]+)*)?/;
    return ! re.exec(value);
  }

  return this.checkValue(elementName, msg, cond);
}

FormData.prototype.checkValue = function(elementName, msg, cond) {

  var element = this.form.elements[elementName];
  if (! element) {
    alert("No element named " + elementName + " in form " + this.name);
    if (window.event) { window.event.returnValue = false; }
    return true;
  }
  
  if (cond(element.value)) {
    this.cancelSubmit(msg, elementName);
    return true;
  }

  return false;
}

FormData.prototype.cancelSubmit = function(msg, elementName) {

  if (elementName) {
    var element = this.form.elements[elementName];
    if (! element) {
      alert("No element named " + elementName + " in form " + this.name);
      if (window.event) { window.event.returnValue = false; }
      return false;
    }
    
    if (! element.disabled && ! element.readonly) {
      element.focus(); 
    }

    if (element.tagName == "INPUT" && element.type == "text") {
      element.select();
    }
  } 

  alert(msg);
  if (window.event) { window.event.returnValue = false; }

  return false;
}

FormData.prototype.setValue = function(elementName, value) {

  var element = this.form.elements[elementName];
  if (! element) {
    alert("No element named " + elementName + " in form " + this.name);
    return null;
  }

  element.value = value;
}

FormData.prototype.setChecked = function(elementName, value) {

  var element = this.form.elements[elementName];
  if (element == null) { return; }

  var elements = element;
  if (! element.length) {
    elements = new Array();
    elements[0] = element;
  }

  var values = value;
  if (! (values instanceof Array)) {
    values = new Array();
    values[0] = value;
  }

  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    for (var j = 0; j < elements.length; j++) {
      var element = elements[j];
      if (element.value == value) element.checked = true;
    }
  }
}

FormData.prototype.setEnabled = function(elementName, isEnabled) {

  var element = this.form.elements[elementName];
  if (element == null) { return; }

  var labels = this.form.getElementsByTagName("LABEL");

  var elements = element;
  if (element.tagName == "SELECT" || ! element.length) {
    elements = new Array();
    elements.push(element);
  }

  for (var i = 0; i < elements.length; i++) {
    elements[i].disabled = ! isEnabled;
    var label = this.getLabel(elements[i], labels);
    if (label) {
      label.disabled = ! isEnabled;
    }
  }
}

FormData.prototype.getLabel = function(element, labels) {

  if (! element.id) { return; }
  for (var i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor == element.id) { return labels[i]; }
  }

  return null;
}



