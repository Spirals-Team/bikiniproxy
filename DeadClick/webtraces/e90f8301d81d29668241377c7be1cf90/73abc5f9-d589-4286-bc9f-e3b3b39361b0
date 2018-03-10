jQuery(document).ready(function($){
	var  WPB = {'server': unlimited_server_values, 'uns': {'id':0}};
	
	WPB.init = function(){
		var pb_selectors = [];
		Object.keys(WPB.server).forEach(function(sel){
			pb_selectors.push(WPB.server[sel]);
		});
		
		pb_selectors.some(function(sel){
			if($(sel.content).length && $(sel.content +' '+ sel.post).length && $(sel.nav).length){
				new UN(sel, WPB.uns.id);
				return true;
			}
		});
	};
	
	WPB.get = function(url, success, error){
		$.ajax({
			url: url,
			type: 'GET',
			success: success,
			error: error
		});
	};
				
	function UN(data, id){
		//WPB.uns.active = id;
		if(!data.status) return false;
		this.id = id;
		this.data = data;
		this.pages = {};
		this.page = 1;
		this.history = {'stack':[]};
		this.data.posts = this.data.content +' '+this.data.post;
		this.data.nav = this.data.content +' '+this.data.nav;
		this.pages[window.location.toString()] = [this.page, 0];
		this.nav_hidden = this.data.untype === 'scroll' ? 'pb-hidden' : '';
		this.deploy();
	}
		
	UN.prototype.deploy = function(){
		this.unnav = $(this.data.nav);
		if(this.data.untype === 'ajax'){
			$('body').append('<div id="pb-un-ajax-sections" class="pb-hidden"></div>');
			this.ajax_sections = $('#pb-un-ajax-sections')
			this.intercept(this.data.nav);
		} else this.replaceNav();
		this.extras();
	};
	
	UN.prototype.intercept = function(nav){
		var un = this;
		$(document).on('click', nav +' a', function(e){
			e.preventDefault();
			un.load($(this).attr('href'));
		});
	};
	
	UN.prototype.load = function(href){
		var un = this;
		un.history.prev = href;
		if(un.pages[href]){
			un.history.send = window.location.toString();
			un.history.get = href;
			un.scroll(un.pages[href], href);
			return false;
		}	
		
		if(un.data.untype === 'ajax'){
			un.ajax_sections.append('<div class="pb-un-ajax-section" data-page="'+window.location.toString()+'">'+$(un.data.content).html()+'</div>');
			un.replaceNav();
		}
		
		$('.pb-un-nav, .pb-un-nav-loader-img').removeClass('pb-hidden');
		var lastpost = $(un.data.posts).last();
		un.pages[href] = [++un.page, (un.page === 2 ? (lastpost.offset().top + lastpost.height()) : lastpost.offset().top)];
		window.history.pushState(null, null, href);
		
		WPB.get(href, function(re){
			un.loading = false;
			un.addSection(re);
		});
	};
	
	UN.prototype.addSection = function(page){
		var un = this;
		page = $(page);
		if(un.data.untype === 'ajax'){
			$('html,body').animate({'scrollTop': $(un.data.content).position().top});
			$(un.data.content).html($(page).find(un.data.content).html());
			un.unnav = $(un.data.nav);
		} else {
			un.unnav.before(page.find(un.data.posts));
			un.unnav.html( un.navHtml( $(page).find(un.data.nav).find(un.data.next).attr('href') ) );
		}		
	};
	
	UN.prototype.scroll = function(page, url){
		var un = this;
		if(un.data.untype === 'ajax'){
			$('html,body').animate({'scrollTop': un.data.content.scrollTop()});
			un.ajax_sections.append('<div class="pb-un-ajax-section" data-page="'+un.history.send+'">'+$(un.data.content).html()+'</div>');
			var section = un.ajax_sections.children('.pb-un-ajax-section[data-page="'+un.history.get+'"]');
			$(un.data.content).html(section.html());
			section.remove();
		} else {
			$('html,body').animate({'scrollTop': page[1]});
		}
		if(url) window.history.pushState(null, null, url);
	};
		
	UN.prototype.replaceNav = function(){
		var un = this;
		var nav = $(un.data.nav);
		var css = nav.css(['margin', 'font-family', 'background']);
		var next_a = nav.find(un.data.next).attr('href');
				
		nav.replaceWith('<nav class="pb-un-nav '+un.nav_hidden+'">'+un.navHtml(next_a)+'</nav>');
		un.unnav = $('nav.pb-un-nav');
		un.unnav.css(css);
		if(this.data.untype !== 'ajax') un.intercept('nav.pb-un-nav');
	};
	
	UN.prototype.navHtml = function(href){
		var img = '<img src="'+this.data.loader_img_url+'" class="pb-un-nav-loader-img pb-hidden"/>';
		if(this.data.untype === 'ajax') return img;
		if(!href) this.loading = true;
		return href ? img+'<a href="'+ href +'" class="'+ this.nav_hidden +'">'+ this.data.load_more_text +'</a>' :
						'<span>'+ this.data.no_more_text +'</span>';
	};
	
	UN.prototype.extras = function(){
		var state_html = '';
		if(this.data.untype === 'scroll') state_html = 
			'<div id="pb-un-state" class="pb-float-left pb-un-state-enabled">\
				<div id="pb-un-state-text" class="pb-hidden">'+this.data.stop_text+'</div>\
				<div id="pb-un-state-icon" class=""></div>\
			</div>';
			
		var scroll_html = 
			'<div class="pb-clr pb-hidden" id="pb-un-actions">'+ state_html +
				'<div id="pb-un-scrollto" class="pb-float-left"><div></div></div>\
			</div>';
			
		$('body').append(scroll_html);
		this.extraEvents(state_html);	
	};
	
	UN.prototype.extraEvents = function(stoppable){
		var un = this;
		$(document).on('click', '#pb-un-scrollto', function(e){
			$('html,body').animate({'scrollTop': 0});
		});
		
		if(stoppable){
			$(document).on({
				mouseenter: function(e){
					$(this).prev().removeClass('pb-hidden');
				},
				mouseleave: function(e){
					$(this).prev().addClass('pb-hidden');
				}
			}, '#pb-un-state-icon');
			
			$(document).on('click', '#pb-un-state-icon', function(e){
				if($(this).parent().is('.pb-un-state-enabled')){
					$(this).prev().text(un.data.start_text);
					un.loading = true;
				} else {
					$(this).prev().text(un.data.stop_text);
					un.loading = false;
					$(window).scroll();
				}
				$(this).parent().toggleClass('pb-un-state-enabled pb-un-state-disabled');
			});
		}
		
		window.addEventListener('popstate', function(e){
			var page = un.pages[window.location.toString()];
			un.history = {'send': un.history.prev, 'get': window.location.toString(), 'prev': window.location.toString()};
			un.scroll(page);
		});
		if(un.data.scroll_to_top === 'on')un.scroller();
	};
	
	UN.prototype.scroller = function(){
		var un = this, pb_actions = $('#pb-un-actions'), cnt = $(un.data.content);
		$(window).on('scroll', function(){
			if($(window).scrollTop() > $(window).height()) pb_actions.removeClass('pb-hidden');
			if($(window).scrollTop() < $(window).height()) pb_actions.addClass('pb-hidden');
			
			if(un.data.untype === 'scroll' && !un.loading){
				if(cnt.height() - $(window).scrollTop() - $(window).height() < un.data.threshold) {
					un.loading = true;
					un.unnav.find('a').trigger('click');
				}
			}
		}).scroll();
	};
	
	WPB.init();
	
	
});