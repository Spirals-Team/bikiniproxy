/**
 *     Anything Popup
 *     Copyright (C) 2011 - 2016 www.gopiplus.com
 *     http://www.gopiplus.com/work/2012/05/25/wordpress-popup-plugin-anything-popup/
 * 
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 * 
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 * 
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var AnythingPopup_Box=null;

function AnythingPopup_OpenForm(AnythingPopup_BoxContainer_Id,AnythingPopup_BoxContainerBody_Id,AnythingPopup_BoxContainerFooter_Id,AnythingPopup_Width,AnythingPopup_Height)
{
    var bgdiv = document.getElementById(AnythingPopup_BoxContainerFooter_Id);
    bgdiv.style.display="block";

    var formdiv = document.getElementById(AnythingPopup_BoxContainer_Id);
    formdiv.style.display="block";

    var pt = window.center({width:AnythingPopup_Width,height:AnythingPopup_Height});

    formdiv.style.top = pt.y + "px";
    formdiv.style.left = pt.x + "px";
	
	//formdiv.style.top = "200px";
    //formdiv.style.left = "550px";

    formdiv.handlerobj = new AnythingPopup_Move(formdiv);
    
    var containerdiv = document.getElementById(AnythingPopup_BoxContainerBody_Id);
    if(containerdiv && containerdiv.SavedInnerHTML)
    {
        containerdiv.innerHTML = containerdiv.SavedInnerHTML;
    }

}

function AnythingPopup_HideForm(AnythingPopup_BoxContainer_Id,AnythingPopup_BoxContainerFooter_Id)
{
    var formdiv = document.getElementById(AnythingPopup_BoxContainer_Id);
    formdiv.style.display="none";

    var bgdiv = document.getElementById(AnythingPopup_BoxContainerFooter_Id);
    bgdiv.style.display="none";
}

function AnythingPopup_Move(div_obj)
{
    var _div_obj = div_obj;
    //div_obj.handlerobj = this;

    var downposX = 0;
    var downposY = 0;
    var dragging = false;

    this.isIE    = false;
    this.isNS    = false;


    this.Init = function()
    {
        if (navigator.userAgent.indexOf("MSIE") >= 0 ||
            navigator.userAgent.indexOf("Opera") >= 0) 
        {
            this.isIE = true;
        }
        else
        {
            this.isNS = true;
        }
    }


    _div_obj.onmousedown = function(event)
    {
        var x=0;
        var y=0;

        _this = this.handlerobj;

        if (_this.isIE) 
        {
            x = window.event.clientX + 
                document.documentElement.scrollLeft + 
                document.body.scrollLeft;

            y = window.event.clientY + 
                document.documentElement.scrollTop + 
                document.body.scrollTop;
        }
        else
        {
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
        }

        var top = parseInt(this.style.top,  10);
        
        var client_y = y - top;
        if(!(client_y>0  && client_y<30))
        {
         return;
        }
        
        _this.cursorStartX = x;
        _this.cursorStartY = y;
        _this.divStartX   = parseInt(this.style.left, 10);
        _this.divStartY   = top;

        if (this.handlerobj.isIE) 
        {
            document.attachEvent("onmousemove", _this.onmousemove);
            document.attachEvent("onmouseup",   _this.onmouseup);
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
        else
        {
            document.addEventListener("mousemove", _this.onmousemove,   true);
            document.addEventListener("mouseup",   _this.onmouseup, true);
            event.preventDefault();
        }

        AnythingPopup_Box = _this;
        _this._div_obj = this;

    }

    this.onmousemove = function(event)
    {
        _this = AnythingPopup_Box;

        var x = 0;
        var y = 0;


        if (_this.isIE) 
        {
            x = window.event.clientX + document.documentElement.scrollLeft
              + document.body.scrollLeft;
            y = window.event.clientY + document.documentElement.scrollTop
              + document.body.scrollTop;
        }
        else
        {
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
        }

        _this._div_obj.style.left = (_this.divStartX + x - _this.cursorStartX) + "px";
        _this._div_obj.style.top  = (_this.divStartY   + y - _this.cursorStartY) + "px";

        if (_this.isIE) 
        {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
        else
        {
            event.preventDefault();
        }
    }

    this.onmouseup = function()
    {
         _this = AnythingPopup_Box;
        if (_this.isIE) 
        {
            document.detachEvent("onmousemove", _this.onmousemove);
            document.detachEvent("onmouseup",   _this.onmouseup);
        }
        else
        {
            document.removeEventListener("mousemove", _this.onmousemove,   true);
            document.removeEventListener("mouseup",   _this.onmouseup, true);
        }
        AnythingPopup_Box = null;
        
    }

   this.Init();
}

window.size = function()
{
   var w = 0;
   var h = 0;

   if(!window.innerWidth)
   {
      if(!(document.documentElement.clientWidth == 0))
      {
         w = document.documentElement.clientWidth;
         h = document.documentElement.clientHeight;
      }
      else
      {
         w = document.body.clientWidth;
         h = document.body.clientHeight;
      }
   }
   else
   {
      w = window.innerWidth;
      h = window.innerHeight;
   }
   return {width:w,height:h};
}

window.center = function()
{
   var hWnd = (arguments[0] != null) ? arguments[0] : {width:0,height:0};

   var _x = 0;
   var _y = 0;
   var offsetX = 0;
   var offsetY = 0;

   if(!window.pageYOffset)
   {
      if(!(document.documentElement.scrollTop == 0))
      {
         offsetY = document.documentElement.scrollTop;
         offsetX = document.documentElement.scrollLeft;
      }
      else
      {
         offsetY = document.body.scrollTop;
         offsetX = document.body.scrollLeft;
      }
   }
   else
   {
      offsetX = window.pageXOffset;
      offsetY = window.pageYOffset;
   }

   _x = ((this.size().width-hWnd.width)/2)+offsetX;
   _y = ((this.size().height-hWnd.height)/2)+offsetY;
   _x = ((this.size().width-hWnd.width)/2);
   _y = ((this.size().height-hWnd.height)/2);

   return{x:_x,y:_y};
}