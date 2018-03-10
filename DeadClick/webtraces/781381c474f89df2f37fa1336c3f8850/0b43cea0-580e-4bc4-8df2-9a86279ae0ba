/**
 * $Source:
 * /home/cvs/cvsroot/cms/integration/web/components/floatbar/floatbar.js,v $
 * $Author$ $Revision$ $Date$
 */

function FloatingToolbar(toolbarName) {

  this.id = toolbarName;
  this.top = 0;
  this.bounces = new Array(0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 2);
  this.bounceIndex = 0;
  this.isHidden = this.readState();

  var floatbar = document.createElement("DIV");
  floatbar.id = toolbarName;
  floatbar.style.position = 'absolute';
  floatbar.style.left = "2px";
  floatbar.style.margin = "0px";
  floatbar.style.overflow = 'hidden';
  floatbar.style.backgroundColor = '#CCCCCC';
  floatbar.style.border = 'solid 1px #999999';
  floatbar.style.zIndex = 99999;

  var gripper = document.createElement("IMG");
  gripper.src = "/components/floatbar/images/gripper.gif";
  gripper.style.border = "0px";
  gripper.style.display = "inline";
  eval("gripper.onclick = function() { " + toolbarName + ".hide() }");
  floatbar.appendChild(gripper);

  document.body.appendChild(floatbar);
}

FloatingToolbar.prototype.setTop = function(top) {
  this.top = top;
}

FloatingToolbar.prototype.addButton = 
  function(imageLink, actionLink, toolTip) {

  var floatbar = document.getElementById(this.id);
  var children = floatbar.childNodes;

  var buttonImage = document.createElement("IMG");
  buttonImage.id = this.id + floatbar.childNodes.length;
  buttonImage.src = imageLink;
  buttonImage.style.border = "solid 1px #CCCCCC";
  buttonImage.style.display = "inline";
  buttonImage.align = "absmiddle";

  if (! actionLink) {
    floatbar.insertBefore(buttonImage, children[children.length - 1]);
  } else {
    var buttonLink = document.createElement("A");
    buttonLink.style.padding = "0px 4px 0px 4px";
    buttonLink.href = actionLink;
    buttonLink.title = toolTip;
    buttonLink.onmouseover = function() {
      this.firstChild.style.border = "outset 1px white";
    }
    buttonLink.onmouseout = function() {
      this.firstChild.style.border = "solid 1px #CCCCCC";
    }

    buttonLink.appendChild(buttonImage);
    floatbar.insertBefore(buttonLink, children[children.length - 1]);
  }

  floatbar.style.top = (buttonImage.height * -1) + "px";
}

FloatingToolbar.prototype.show = function() {

  var floatbar = document.getElementById(this.id);
  var top = parseInt(floatbar.style.top);

  if (this.isHidden) {
    floatbar.style.left = (this.getWidth() * -1) + "px";
  }

  if (top < this.top) {
    floatbar.style.top = (top + 1) + "px";
    setTimeout(this.id + '.show()', 5);    
  } else if (this.bounceIndex < this.bounces.length) {
    floatbar.style.top = (this.top + this.bounces[this.bounceIndex++]) + "px";
    setTimeout(this.id + '.show()', 10);    
  } else {
    this.bounceIndex = 0;
  }
}

FloatingToolbar.prototype.getWidth = function() {

  var floatbar = document.getElementById(this.id);

  var width = 0;

  for (var i = 0; i < floatbar.childNodes.length - 1; i++) {
    var element = floatbar.childNodes[i];
    if (element.tagName == "A") {
      element = element.childNodes[0];
      width += 10;
    }
    width += element.width;
  }

  return width;
}

FloatingToolbar.prototype.hide = function() {

  var floatbar = document.getElementById(this.id);
  var left = parseInt(floatbar.style.left);
  var width = this.getWidth();
  
  if (! this.isHidden) {
    if (left * -1 < width) {
      floatbar.style.left = (left - 2) + "px";
      setTimeout(this.id + '.hide()', 10);
    } else {
      this.setState("hidden");
    }
  } else {
    if (left < 0) {
      floatbar.style.left = (left + 2) + "px";
      setTimeout(this.id + '.hide()', 10);
    } else if (this.bounceIndex < this.bounces.length) {
      floatbar.style.left = this.bounces[this.bounceIndex++] + "px";
      setTimeout(this.id + '.hide()', 5);
    } else {
      this.bounceIndex = 0;
      this.setState("visible");
    }
  }
}

FloatingToolbar.prototype.setState = function(state) {

  this.isHidden = (state == "hidden");

  var dateString;

  var today = new Date();
  var millis = Date.parse(today);
  today.setTime(millis + 24 * 60 * 60 * 30 * 1000);
  dateString = today.toString();

  document.cookie = "toolbarState=" + state +
    ";EXPIRES=" + dateString + ";PATH=/";
}

FloatingToolbar.prototype.readState = function() {

  var cookieString = "" + document.cookie;

  var start = cookieString.indexOf("toolbarState");
  if (start == -1) { 
    return false; 
  }

  var end = cookieString.indexOf(';', start);
  if (end == -1) { end = cookieString.length; }

  var state = cookieString.substring(start + "toolbarState".length + 1, end);

  return (state == "hidden");
}

CONVIO.page.showNavPrompt = true;

CONVIO.page.editMenu = function() {

  if (CONVIO.page.navFolderID == null) {
    alert("This folder is not associated with a navigation menu.");
    return;
  }

  if (CONVIO.page.navFolderID != CONVIO.page.folderID && CONVIO.page.showNavPrompt && 
    ! window.confirm("This folder currently inherits its navigation menu from the " +
    "parent folder \"" + CONVIO.page.navFolderTitle + "\".  Do you want to create a " +
    "separate navigation menu for this folder?")) {
	  return;
  } 
  
  CONVIO.page.showNavPrompt = false;

  var url = CONVIO.page.adminURL + "/admin/subsite/linksets/folder-navigation-edit.jsp?folderID=" + CONVIO.page.folderID;
  window.location.href = url;
}

new function() {
  function doLoad() {

    if (! CONVIO.prefs || CONVIO.prefs.authorToolbarState != "enabled") {
     return;
    }

    if (CONVIO.page && CONVIO.page.authorToolbar) {
      return;
    }

    var draftID = CONVIO.page.draftID;
    var folderID = CONVIO.page.folderID;
    var adminURL = CONVIO.page.adminURL;
    var cmsToolbar = new FloatingToolbar('CONVIO.page.authorToolbar');
    cmsToolbar.addButton("/components/floatbar/images/title.gif");
    cmsToolbar.addButton("/system/icons/24x24/toolbox.gif", 
      adminURL + "/admin/portal/portal.jsp?hostID=" + CONVIO.page.hostID, "Workspace");

    cmsToolbar.addButton("/system/icons/24x24/step.gif", "javascript:CONVIO.page.editMenu()", "Navigation");

    if (CONVIO.page.typeID) {
      cmsToolbar.addButton("/system/icons/24x24/about.gif", 
        adminURL + "/admin/item/actions/status.jsp?itemID=" + draftID, "Status");
      cmsToolbar.addButton("/system/icons/24x24/form_green.gif", 
        adminURL + "/admin/item/actions/properties-edit.jsp?itemID=" + draftID + "&wizard=true",
        "Edit Properties");
      if (CONVIO.page.hasEditorStep) {
        cmsToolbar.addButton("/system/icons/24x24/document_text.gif", 
          adminURL + "/admin/item/actions/body-edit.jsp?itemID=" + draftID + "&wizard=true",
          "Edit Body Content");
      }
    }

    cmsToolbar.addButton("/system/icons/24x24/folder.gif", 
      adminURL + "/admin/subsite/folders.jsp?folderID=" + folderID,
      "Browse this folder");

    if (CONVIO.page.typeID) {
      cmsToolbar.addButton("/system/icons/24x24/document_add.gif", 
        adminURL + "/admin/item/actions/properties-new.jsp?folderID=" + folderID + 
        "&typeID=" + CONVIO.page.typeID, "New " + CONVIO.page.typeLabel);
    }

    if (CONVIO.page.hasForm) {
      cmsToolbar.addButton("/system/icons/24x24/inbox_into.gif", 
        adminURL + "/admin/item/actions/status.jsp?pane=form&itemID=" + draftID,
        "Form Submissions and Notifications");
    }

    CONVIO.page.authorToolbar = cmsToolbar;
    cmsToolbar.show();
  }

  if (window == window.top) {
    if (window.attachEvent) {
      window.attachEvent("onload", doLoad);
    } else { 
      window.addEventListener('load',doLoad,false);
    }
  }
}();
