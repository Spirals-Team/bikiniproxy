/*global jQuery, Drupal, window */
/*jslint white:true, multivar, this, browser:true*/

(function($, Drupal, window)
{
	"use strict";

	var popupVisible, ctrlPressed, fancyLoginBox, messageContainer;

	popupVisible = false;
	ctrlPressed = false;

	function moveMessages()
	{
		var messages = $("#fancy_login_login_box .messages");

		if(messages.length)
		{
			if(!messageContainer)
			{
				messageContainer = $("<div/>", {id:"fancy_login_messages_container_wrapper"}).prependTo("body");
			}
			messages.each(function()
			{
				$(this).appendTo(
					$("<div/>", {"class":"fancy_login_messages_container"}).appendTo(messageContainer)
				).before(
					$("<div/>", {"class":"fancy_login_message_close_button"}).text("X")
				);
			});
		}
	}

	function showLogin()
	{
		var settings = Drupal.settings.fancyLogin;

		if(!popupVisible)
		{
			popupVisible = true;
			if(settings.hideObjects)
			{
				$("object, embed").css("visibility", "hidden");
			}

			$("#fancy_login_dim_screen").css({backgroundColor:settings.screenFadeColor, zIndex:settings.screenFadeZIndex, opacity:0, display:"block"}).fadeTo(settings.dimFadeSpeed, 0.8, function()
			{
				var eHeight, eWidth, eTopMargin, eLeftMargin;

				eHeight = fancyLoginBox.height();
				eWidth = fancyLoginBox.width();
				eTopMargin = - 1 * (eHeight / 2);
				eLeftMargin = -1 * (eWidth / 2);

				if($("#fancy_login_close_button").css("display") === "none")
				{
					$("#fancy_login_close_button").css("display", "block");
				}

				fancyLoginBox.css({marginLeft:eLeftMargin, marginTop:eTopMargin, color:settings.loginBoxTextColor, backgroundColor:settings.loginBoxBackgroundColor, borderStyle:settings.loginBoxBorderStyle, borderColor:settings.loginBoxBorderColor, borderWidth:settings.loginBoxBorderWidth, zIndex:(settings.screenFadeZIndex + 1)}).fadeIn(settings.boxFadeSpeed).find(".form-text:first").focus().select();
				$("html, body").css("overflow", "hidden");
			});
		}
	}

	function hideLogin()
	{
		var settings = Drupal.settings.fancyLogin;

		if(popupVisible)
		{
			popupVisible = false;
			$("#fancy_login_login_box").fadeOut(settings.boxFadeSpeed, function()
			{
				$("#fancy_login_dim_screen").fadeOut(settings.dimFadeSpeed, function()
				{
					if(settings.hideObjects)
					{
						$("object, embed").css("visibility", "visible");
					}
				});
				$(window).focus();
				$("html, body").css("overflow", "auto");
			});
		}
	}

	function popupCloseListener()
	{
		$("#fancy_login_dim_screen, #fancy_login_close_button").once("fancy-login-close-listener", function()
		{
			$(this).click(function(e)
			{
				e.preventDefault();

				hideLogin();
			});
		});
	}

	function statusMessageCloseListener()
	{
		$(".fancy_login_message_close_button").once("status-message-close-listener", function()
		{
			$(this).click(function()
			{
				$(this).parent().fadeOut(250, function()
				{
					$(this).remove();
				});
			});
		});
	}

	function loginLinkListener()
	{
		var settings = Drupal.settings.fancyLogin;

		$("a[href*='" + settings.loginPath + "']:not(.fancy_login_disable), .fancy_login_show_popup:not(.fancy_login_disable)").once("login-link-listener", function()
		{
			$(this).click(function(e)
			{
				e.preventDefault();

				showLogin();
			});
		});
	}

	function init()
	{
		$("body").once("fancy-login-init", function()
		{
			fancyLoginBox = $("#fancy_login_login_box");
			$(window.document).keyup(function(e)
			{
				if(e.keyCode === 17)
				{
					ctrlPressed = false;
				}
			    else if(e.keyCode === 27)
			    {
			        hideLogin();
			    }
			});
			$(window.document).keydown(function(e)
			{
				if(e.keyCode === 17)
				{
					ctrlPressed = true;
				}
				if(ctrlPressed === true && e.keyCode === 190)
				{
					ctrlPressed = false;

					if(popupVisible)
					{
						hideLogin();
					}
					else
					{
						showLogin();
					}
				}
			});
		});
	}

	function popupTextfieldListener()
	{
		fancyLoginBox.find(".form-text").once("fancy-login-popup-textfield-listener", function()
		{
			$(this).keydown(function (event)
			{
				if(event.keyCode === 13)
				{
					$(this).parent().siblings(".form-actions:first").children(".form-submit:first").mousedown();
				}
			});
		});
	}

	function loadForm(type)
	{
		var formLoadDimmer = $("<div/>", {"id":"form_load_dimmer"}).appendTo(fancyLoginBox).fadeTo(250, 0.8);

		$.ajax(
		{
			url:Drupal.settings.basePath + "fancy_login/ajax/" + type,
			success:function(data)
			{
				var wrapper, oldContents, newContents, oldHeight, newHeight, newMargin;

				wrapper = fancyLoginBox.find("#fancy_login_user_login_block_wrapper");
				oldContents = wrapper.contents();
				oldHeight = wrapper.css("height");
				newContents =$("<div/>").html(data.content).contents();
				oldContents.replaceWith(newContents);
				newHeight = wrapper.css("height");
				newMargin = fancyLoginBox.outerHeight() / -2;
				newContents.replaceWith(oldContents);
				wrapper.css("height", oldHeight);
				oldContents.fadeOut(250, function()
				{
					$(this).remove();
					fancyLoginBox.animate(
					{
						marginTop:newMargin
					},
					{
						duration:250
					});
					wrapper.animate(
					{
						height:newHeight
					},
					{
						duration:250,
						complete:function()
						{
							newContents.appendTo(wrapper).fadeIn(250, function()
							{
								wrapper.css("height", "auto");
								formLoadDimmer.fadeOut(250, function()
								{
									$(this).remove();
								});
							});
							Drupal.attachBehaviors();
						}
					});
				});
			}
		});
	}

	function linkListeners()
	{
		var anchors = fancyLoginBox.find("a");

		if(!Drupal.settings.fancyLogin.disableRegistration)
		{
			anchors.filter("[href*='user/register']").once("fancy-login-register-link", function()
			{
				$(this).click(function(e)
				{
					e.preventDefault();
					loadForm("register");
				});
			});
		}

		anchors.filter("[href*='user/password']").once("fancy-login-password-link", function()
		{
			$(this).click(function(e)
			{
				e.preventDefault();
				loadForm("password");
			});
		});

		anchors.filter("[href*='user/login']").once("fancy-login-login-link", function()
		{
			$(this).click(function(e)
			{
				e.preventDefault();
				loadForm("login");
			});
		});
	}

	Drupal.behaviors.fancyLogin = {
		attach:function()
		{
			if(window.XMLHttpRequest)
			{
				init();
				loginLinkListener();
				popupTextfieldListener();
				popupCloseListener();
				statusMessageCloseListener();
				moveMessages();
				linkListeners();
			}

			Drupal.ajax.prototype.commands.fancyLoginRefreshPage = function(ajax, response)
			{
				// For JSLint compatibility
				ajax = ajax;

				if(response.closePopup)
				{
					hideLogin();
				}

				window.location.reload();
			};

			Drupal.ajax.prototype.commands.fancyLoginRedirect = function(ajax, response)
			{
				// For JSLint compatibility
				ajax = ajax;

				if(response.closePopup)
				{
					hideLogin();
				}

				if(response.destination.length)
				{
					window.location = response.destination;
				}
				else
				{
					window.location = "user";
				}
			};

			Drupal.ajax.prototype.commands.fancyLoginClosePopup = function()
			{
				hideLogin();
			};
		}
	};
}(jQuery, Drupal, window));
