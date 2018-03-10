/**
 * AjaxForm - mootools 1.1 send form
 * @version		1.0.0
 * @MooTools version 1.1
 * @author Constantin Boiangiu <info [at] constantinb.com>
 */

var AjaxForm = new Class({
	initialize: function(options) {
		this.options = Object.extend({
			dirname: null,
			captchaImageId: null,
			formId: null,
			sendTo: null,
			messages: null,
			loadingMessage: null,
			captchaRefresh:null
		}, options || {});
		
		this.start();
	},
	
	start: function(){
		$(this.options.formId).setProperty('action', this.options.sendTo);
		$(this.options.captchaImageId).addEvent('click', this.captchaRefresh.bind(this));
		$(this.options.captchaRefresh).addEvent('click', this.captchaRefresh.bind(this));
		this.started = 0;
		
		$(this.options.formId).addEvent('submit', function(event){
			new Event(event).stop();
			$(this.options.messages).addClass('loading').setHTML(this.options.loadingMessage);
			$(this.options.formId).send({
				onComplete: function(response) {
					$(this.options.messages).removeClass('loading').setStyle('display','block');
					var json = Json.evaluate(response);
					if(json.error){
						$(this.options.messages).setHTML(json.error);
						if( json.err_fields )
						{
							var e = new Hash(json.err_fields);
							var t = 0;
							e.each(function(el,k){
								if( el == 0 )
									$(k+'_label').removeClass('field_error');
								if( el==1 )
									$(k+'_label').addClass('field_error');
								if( t == 0 && el==1 ){
									$(k).focus();
									t++;
								}
								if( k == 'captcha_ver' )
									this.refresh();
								
								if( this.started == 0 ){
									$(k).addEvent('keydown', function(){
										$(k+'_label').removeClass('field_error');
									})
								}
								
							}.bind(this))
						}
					}
					else if( json.success ){
						$(this.options.messages).setHTML(json.success);
						$(this.options.formId).reset();
						this.captchaRefresh();
					}
					this.started = 1;
				}.bind(this)
			});
			
		}.bind(this))
		
		
	},
	
	captchaRefresh: function(event){
		new Event(event).stop();
		this.refresh();
	},
	
	refresh: function (){
		var captcha_src = this.options.dirname+'captcha.php';
		$(this.options.captchaImageId).setProperty('src', captcha_src+'?'+Math.random());
	}
});