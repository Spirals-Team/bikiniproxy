/*
    This file is part of JonDesign's SmoothGallery v2.1beta1.

    JonDesign's SmoothGallery is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 3 of the License, or
    (at your option) any later version.

    JonDesign's SmoothGallery is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with JonDesign's SmoothGallery; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

    Main Developer: Jonathan Schemoul (JonDesign: http://www.jondesign.net/)
*/

window.gallery.Transitions.fadeslideleft= function(/*oldFx, newFx, oldPos, newPos*/){
		oldFx=arguments[0][0];
		newFx=arguments[0][1];
		oldPos=arguments[0][2];
		newPos=arguments[0][3];
		oldFx.options.easing = newFx.options.easing = 'easeOutCubic';
		oldFx.options.duration = newFx.options.duration = 1500;
		oldFx.options.queue= newFx.options.queue= false;
		if (newPos > oldPos)
		{
			newFx.css({'left':this.galleryElement.outerWidth()},{duration:window.gallery.options.slideShowDuration}).start({
				left: /*[[this.galleryElement.outerWidth(),*/ 0,//]
				opacity: 1
			});
			oldFx.css({'opacity':1},{duration:window.gallery.options.slideHideDuration}).start({opacity: 0});
		} else {
			newFx.css({'opacity':0},{duration:window.gallery.options.slideShowDuration}).start({opacity: 1});
			oldFx.completefunc(function(fx){fx.css({left: 0});}.passx(oldFx)).css({'left':0}).start({
				left: /*[0, */this.galleryElement.outerWidth(),//],
				opacity: 0
			});
		}
	};
	window.gallery.Transitions.continuoushorizontal= function(/*oldFx, newFx, oldPos, newPos*/){
		oldFx=arguments[0][0];
		newFx=arguments[0][1];
		oldPos=arguments[0][2];
		newPos=arguments[0][3];
		oldFx.options.easing = newFx.options.easing = 'linear';
		oldFx.options.queue= newFx.options.queue= false;
		console.log(this);
		if (
			((newPos > oldPos) || ((newPos==0) && (oldPos == (this.maxIter-1) ))) &&
			(!((newPos == (this.maxIter-1 )) && (oldPos == 0)))
		) {
			oldFx.css({opacity: 1});
			oldFx.start({
				left: /*[0, */this.galleryElement.outerWidth() * -1//]
			});
			newFx.css({opacity: 1, left: this.galleryElement.outerWidth()});
			newFx.start({
				left: /*[this.galleryElement.outerWidth(),*/ 0//]
			});
		} else  {
			oldFx.css({opacity: 1,left:0});
			oldFx.start({
				left: /*[0, */this.galleryElement.outerWidth()//]
			});
			newFx.css({opacity: 1, left: this.galleryElement.outerWidth() * -1});
			newFx.start({
				left: /*[this.galleryElement.outerWidth() * -1,*/ 0 //]
			});
		}
	};
	window.gallery.Transitions.continuousvertical= function(/*oldFx, newFx, oldPos, newPos*/){
		oldFx=arguments[0][0];
		newFx=arguments[0][1];
		oldPos=arguments[0][2];
		newPos=arguments[0][3];
		oldFx.options.easing = newFx.options.easing = 'linear';
		if (
			((newPos > oldPos) || ((newPos==0) && (oldPos == (this.maxIter-1) ))) &&
			(!((newPos == (this.maxIter-1 )) && (oldPos == 0)))
		) {
			oldFx.css({opacity: 1});
			oldFx.start({
				top:  this.galleryElement.outerHeight() * -1
			});
			newFx.css({opacity: 1, top: this.galleryElement.outerHeight()});
			newFx.start({
				top: /*[this.galleryElement.outerHeight(),*/ 0//]
			});
		} else  {
			oldFx.css({opacity: 1});
			oldFx.start({
				top: this.galleryElement.outerHeight()
			});
			newFx.css({opacity: 1, top: this.galleryElement.outerHeight() * -1});
			newFx.start({
				top: /*[this.galleryElement.outerHeight() * -1,*/ 0 /*]*/
			});
		}
	}