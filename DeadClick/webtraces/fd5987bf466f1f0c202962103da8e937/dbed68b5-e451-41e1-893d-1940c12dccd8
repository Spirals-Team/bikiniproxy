jQuery.noConflict()(function($){
"use strict";
	$(document).ready(function() {
		$('.oi_vc_button').each(function(index, element) {
			var oi_color = $( this ).css( "color" );
			var oi_bg = $( this ).css( "background-color" );
			var oi_border_color = $( this ).css( "borderTopColor" );
			$(element).hover(
				function() {
					$(this).css({
						'color' :$( this ).attr('data-title-color-hover'),
						'background' :$( this ).attr('data-bg-color-hover'),
						'border-color' :$( this ).attr('data-border-c-hover'),
					});
				},
				function() {
					$(this).css({
						'color' :oi_color,
						'background' :oi_bg,
						'border-color' :oi_border_color,
					});
				}
			);
		});
		
		$( ".oi_custom_heading_holder" ).each(function( index ) {
			if($(this).height()>40){
			$(this).find(".oi_heading_icon:not(.oi_heading_icon_center)").css('margin-top',($(this).height()-$(this).find('i').height())/2);
			}else{
				$(this).find(".oi_heading_icon:not(.oi_heading_icon_center)").css('margin-top',-2);
				$(this).find(".oi_heading_icon:not(.oi_heading_icon_center)").css('margin-right',5);
			}
		});
		
		$(".oi_over").append('<div class="oi_overlay"></div>')
		
		
		$('.oi_owl_slider').each(function(index, element) {
			var id =$(element).attr('id');
			if ( $('#'+id).attr('data-arrows') == 'true' ) {
				$( '<i class="fa fa-angle-right"></i>' ).css('font-size',$(element).attr('data-icon-size')).appendTo( $('#'+id+' .owl-next') );
				$( '<i class="fa fa-angle-left"></i>' ).css('font-size',$(element).attr('data-icon-size')).appendTo( $('#'+id+' .owl-prev') );
				var oi_color = $( this ).attr('data-color');
				var oi_color_h = $( this ).attr('data-color-hover');
				$('#'+id+' .owl-nav i').hover(
					function() {
						$(this).css({
							'color' :oi_color_h,
						});
					},
					function() {
						$(this).css({
							'color' :oi_color
						});
					}
				);
			}
		});
		
		
		  $('.oi_partner_holder').each(function(index, element) {
			var id =$(element).attr('id');
			$("#"+id ).tipso({
				speed           : 0,
				background      : $("#"+id ).attr('data-bg'),
				color           : $("#"+id ).attr('data-color'),
				position        : $("#"+id ).attr('data-position'),
				width           : 0,
				maxWidth        : "400",
				delay           : 0,
				animationIn     : "fadeIn",
				animationOut    : "fadeOut",
				offsetX         : 0,
				offsetY         : 0,
				tooltipHover    : false,
				content         : null,
				ajaxContentUrl  : null,
				useTitle        : true,
				onBeforeShow    : null,
				onShow          : null,
				onHide          : null
			});	
		
		});
		
		
		$.fn.equalizeHeights = function () {
			return this.height(Math.max.apply(this, $(this).map(function (i, e) {
				return $(e).height()
			}).get()))
		};
		$('.oi_inner_equalize_heights .wpb_column').equalizeHeights();

	});
	
});