var Reuters = Reuters || {};
Reuters.info = Reuters.info || {};
Reuters.info.edition = Reuters.info.edition || $('body').attr('class').split(' ')[0];

Reuters.share = {

    init: function(el) {
        this.configureSharetools(el);
        this.createSharetoolsHTML();
        this.addShareCount();
        this.addEvents();
        this.addfocus(el);
    },

    configureSharetools: function(el) {
        this.$el        = $(el);
        this.edition    = $('meta[name="DCSext.rCountry"]').attr('content');
        this.$shareMore = this.$el.find('.reuters-share-more');
        this.tool       = this.$el.data('share').split(',');
        this.id         = this.$el.data('share-id');
        this.mediaId    = this.$el.data('share-media-id') || '';
        this.showCount  = this.$el.data('share-count');
        this.longURL    = this.$el.data('share-url');
        this.shortURL   = this.$el.data('share-short-url');
        if (this.edition=="BETADE" ||  this.edition=="DE" ||  Reuters.info.edition == "BETADE"){
        	this.url        = this.longURL;
        } else {
        	this.url        = this.shortURL || this.longURL;
        }
        this.urlEnc     = encodeURIComponent( this.url );
        this.descEnc    = encodeURIComponent( this.$el.data('share-desc') );
        this.title      = this.$el.data('share-title');
        this.titleEnc   = encodeURIComponent( this.$el.data('share-title') );
        this.imgEnc     = encodeURIComponent( this.$el.data('share-img') );
        

        if( this.edition=="BETAJP" ||  this.edition=="JP" ||  Reuters.info.edition == "BETAJP"){
        	var twitterHandle	= "Reuters_co_jp";
        } else if (this.edition == "IN" || Reuters.info.edition == "IN"){
        	var twitterHandle="ReutersIndia";
        } else if (this.edition == "UK" || Reuters.info.edition == "UK"){
        	var twitterHandle	= "ReutersUK";
        }  else if (this.edition=="BETADE" ||  this.edition=="DE" ||  Reuters.info.edition == "BETADE"){
        	var twitterHandle	= "reuters_de";
        } else {
        	var twitterHandle	= "Reuters";
        }
        
        if (this.edition == "BETACN" || this.edition == "CN" || Reuters.info.edition == "BETACN"){
            this.mailTxtBody    = '您可能对以下内容感兴趣:';
            this.mailTxtLink    = '您可以通过邮箱订制新闻资讯，请在此订制 http://cb.sailthru.com/join/4vw/subscribe';
        } else if (this.edition == "UK" || Reuters.info.edition == "UK"){
            this.mailTxtBody    ='I thought you would be interested in the following:';
            this.mailTxtLink    = 'If you would like to receive news articles delivered to your email address, please subscribe at http://newslink.uk.reuters.com/join/4ts/subscribe';//http://reut.rs/1GtMWVI.
        }  else if (this.edition == "IN" || Reuters.info.edition == "IN"){
            this.mailTxtBody    = 'I thought you would be interested in the following:';
            this.mailTxtLink    = 'If you would like to receive news articles delivered to your email address, please subscribe at http://newslink.in.reuters.com/join/subscribe';
        }  else if (this.edition == "BETAJP" || this.edition == "JP" || Reuters.info.edition == "BETAJP"){
            this.mailTxtBody    = 'この記事をおすすめします:';
            this.mailTxtLink    = 'ロイターニュースメールの無料会員登録はこちらから http://newslink.jp.reuters.com/join/subscribe';
        }  else if (this.edition == "BETADE" || this.edition == "DE" || Reuters.info.edition == "BETADE"){
            this.mailTxtBody    = 'Das könnte Sie interessieren:';
            this.mailTxtLink    = '';
        }  else{
            this.mailTxtBody    = 'I thought you would be interested in the following:';
            this.mailTxtLink    = 'If you would like to receive news articles delivered to your email address, please subscribe at http://newslink.reuters.com/join/subscribe';
        }
        this.shareObj   = {
            "twitter": {
                    "shareUrl": 'http://www.twitter.com/intent/tweet?url=' + this.urlEnc + '&via='+twitterHandle+'&text=' + this.titleEnc,
                    "countUrl": 'http://cdn.api.twitter.com/1/urls/count.json?url=' + this.longURL + '&callback=?',
                    "countVar": 'count'
                },
                "facebook": {
                    "shareUrl": 'http://www.facebook.com/sharer/sharer.php?u=' + this.urlEnc + '&t=' + this.titleEnc,
                    "countUrl": 'http://graph.facebook.com/?id=' + this.url + '&callback=?',
                    "countVar": 'shares'
                },
                "linkedin": {
                    "shareUrl": 'http://www.linkedin.com/shareArticle?mini=true&url=' + this.urlEnc + '&title=' + this.titleEnc + '&summary=' + this.descEnc + '&source=Reuters',
                    "countUrl": 'http://www.linkedin.com/countserv/count/share?url=' + this.url + '&callback=?',
                    "countVar": 'count'
                },
                "reddit": {
                    "shareUrl": 'http://www.reddit.com/submit?url=' + this.urlEnc + '&title=' + this.titleEnc
                },
                "google": {
                    "shareUrl": 'http://plus.google.com/share?url=' + this.urlEnc
                },
                "weibo": {
                    "shareUrl": 'http://service.weibo.com/share/share.php?appkey=1278851849&source=Reuters&url=' + this.urlEnc + '&title=' + this.descEnc + '&searchPic=false'
                },
                "wechat": {
                    "shareUrl": this.url
                },
                "qqzone": {
                    "shareUrl": 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?site=Reuters&url=' + this.urlEnc + '&showcount=1&title=' + this.titleEnc  + '&pics=' + this.imgEnc + '&desc=' + this.descEnc
                },
                "tencent": {
                    "shareUrl": 'http://v.t.qq.com/share/share.php?appkey=e8f498130dae4fecbacadc98092f22e1&site=Reuters&url=' + this.urlEnc + '&title=' + this.descEnc + '&pic=' + this.imgEnc + '&desc=' + this.descEnc
                },
                "mixi": {
                    "shareUrl": 'http://mixi.jp/share.pl?u=' + this.urlEnc + '&k=5381dd613c8f0e2ce5785e50ff631e8350b9f26b'
                },
                "mail": {
                    "shareUrl": 'mailto:?subject=(Reuters) '+encodeURIComponent(this.title)+'&body='+encodeURIComponent(this.mailTxtBody)+' '+this.urlEnc+' %0A%0D%0D '+this.mailTxtLink
                },
                "mailArticle": {
                    "shareUrl": 'mailto:?subject=(Reuters) '+encodeURIComponent(this.title)+'&body='+encodeURIComponent(this.mailTxtBody)+' '+this.urlEnc+' %0A%0D%0D '+this.mailTxtLink
                },
                "mailVideo": {
                    "shareUrl": 'mailto:?subject=(Reuters) '+encodeURIComponent(this.title)+'&body='+encodeURIComponent(this.mailTxtBody)+' '+this.urlEnc+' %0A%0D%0D '+this.mailTxtLink
                },
                "mailSlide": {
                    "shareUrl": 'mailto:?subject=(Reuters) '+encodeURIComponent(this.title)+'&body='+encodeURIComponent(this.mailTxtBody)+' '+this.urlEnc+' %0A%0D%0D '+this.mailTxtLink
                }, 
                "share": {
                    "shareUrl": this.url
                },
                "buy": {
                    "shareUrl": this.url
                }
        };
    },

    createSharetoolsHTML: function() {
        var sharetoolsHTML = [];

        if (this.tool !== undefined && this.tool.length > 0) {
            sharetoolsHTML.push('<ul class="horizontal-list">');

            for(var i = 0, arrLen = this.tool.length; i < arrLen; i++) {
                sharetoolsHTML.push(this.addSharetool(this.tool[i]));
            }

            sharetoolsHTML.push('</ul>');
        }

        this.$el.prepend(sharetoolsHTML.join(''));
    },

    addSharetool: function(sharetool) {
        var sharetoolHTML = [];
        var sharetoolObj  = this.shareObj[sharetool];
        var sharetoolShareButton = sharetool == 'share';
        var sharetoolBuyButton = sharetool == 'buy';
		var sharetoolWeChatButton = sharetool == 'wechat';
		var sharetoolMail = sharetool == 'mail' || sharetool == 'mailArticle' || sharetool == 'mailVideo' || sharetool == 'mailSlide';
        var sharetoolLink = sharetool === 'embed' || sharetool === 'link'? false : true;

        if (sharetoolShareButton) {
            sharetoolHTML = [
                '<li class="shr-', sharetool, '">',
                    '<a href="', sharetoolObj.shareUrl, '" target="_blank">',
                        '<i class="shr-ico"></i>',
                        '<span class="shr-txt">Share slideshow</span>',
                    '</a>',
                '</li>'
            ];
        } else if (sharetoolMail) {
            sharetoolHTML = [
                '<li class="shr-', sharetool, '">',
                    '<a href="', sharetoolObj.shareUrl, '">',
                        '<i class="shr-ico"></i>',
                    '</a>',
                '</li>'
            ];
        } else if (sharetoolBuyButton) {
            sharetoolHTML = [
                '<li class="shr-', sharetool, '">',
                    '<a href="', sharetoolObj.shareUrl, '" target="_blank">',
                        '<i class="shr-ico"></i>',
                        '<span class="shr-txt">Buy Print</span>',
                    '</a>',
                '</li>'
            ];
        } else if (sharetoolLink) {
            sharetoolHTML = [
                '<li class="shr-', sharetool, '">',
                    '<a href="', sharetoolObj.shareUrl, '" target="_blank">',
                        '<i class="shr-ico"></i>',
                    '</a>',
                '</li>'
            ];
        } else if (sharetoolWeChatButton) {
            sharetoolHTML = [
                '<li class="shr-', sharetool, '">',
                    '<a href="', sharetoolObj.shareUrl, '">',
                        '<i class="shr-ico"></i>',
                    '</a>',
                '</li>'
            ];
        } else {
            sharetoolHTML = [
                '<li class="shr-', sharetool, '">',
                    '<i class="shr-ico"></i>',
                '</li>'
            ];
        }

        return sharetoolHTML.join('');
    },

    addShareCount: function() {
        var countEnabled = this.count ? true : false;

        if (countEnabled) {
            $.each(this.shareObj, this.shareCountHTML);
        }
    },

    shareCountHTML: function(key, sharetool) {
        var $sharetool      = $el.find('.shr-' + key + ' a');
        var sharetoolExists = $sharetool.length > 0;
        var countExists     = 'countUrl' in sharetool;

        if (sharetoolExists && countExists) {

            $.getJSON(sharetool.countUrl, function(countObj) {
                var count   = countObj[sharetool.countVar] ? countObj[sharetool.countVar] : "0";

                if ( count === "0") {
                    var count = "";
                }

                var countHTML = [
                    '<span class="shr-count">',
                        count,
                    '</span>'
                ].join('');

                $sharetool.append(countHTML);
            });
        }
    },

    addEvents: function() {
        var $el = this.$el;

        $el.find('.shr-twitter, .shr-facebook, .shr-qqzone')
                .on('click', this.openSmallWindow);
        $el.find('.shr-google, .shr-linkedin, .shr-reddit, .shr-weibo, .shr-tencent, .shr-mixi')
                .on('click', this.openBigWindow);
        $el.find('.shr-mail, .shr-mailArticle, .shr-mailVideo, .shr-mailSlide')
                .on('click', this.mailFunc);
        $el.find('.shr-embed')
                .on('click', this.showMoreEmbed);
        $el.find('.shr-link')
                .on('click', this.showMoreLink);
		$el.find('.shr-wechat')
                .on('click', this.showWeChat);
        $el.find('.shr-share, .shr-license')
                .on('click', this.staticBtnAnalytics);
        $el.find('.reuters-share-more .shr-close')
                .on('click', this.closeMoreWindow);
        this.$shareMore.find('textarea')
                .on('focus', this.selectText);

    },

    openSmallWindow: function(e) {
        e.preventDefault();
        var link = $(this).find('a').attr('href');
        window.open(link, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600');
        Reuters.share.wtShare(this);
    },

    openBigWindow: function(e) {
        e.preventDefault();
        var link = $(this).find('a').attr('href');
        window.open(link, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=750,width=950');
        Reuters.share.wtShare(this);
    },
    
    mailFunc: function() {
        Reuters.share.wtShareMail(this);
    },

    showMoreEmbed: function(e) {
        e.preventDefault();
        var $shareMore  = $(e.target).closest('.current-slide-info')
                            .find('.reuters-share-more');
        var $shareEmbed = $shareMore.find('.reuters-share-embed');
        
        $shareMore.show();
        $shareMore.find('.reuters-share-extra').hide();
        $shareEmbed.show();
        $shareEmbed.focus();
        Reuters.share.wtShare(this);
    },

    showMoreLink: function(e) {
        e.preventDefault();
        var $shareMore  = $(e.target).closest('.current-slide-info')
                            .find('.reuters-share-more');
        var $shareLink = $shareMore.find('.reuters-share-link');
        
        $shareMore.show();
        $shareMore.find('.reuters-share-extra').hide();
        $shareLink.show();
        $shareLink.focus();
        Reuters.share.wtShare(this);
    },
	
	showWeChat: function(e) {
		e.preventDefault();
		Reuters.share.wtShare(this);
        var link = $(this).find('a').attr('href');
        weChatBox_show('weChatBox',link);
    },

    staticBtnAnalytics: function(e) {
        Reuters.share.wtShare(this);
    },

    selectText: function(e) {
        var $shareMore  = $(e.target).closest('.current-slide-info')
                            .find('.reuters-share-more')
        var $textarea   = $shareMore.find('textarea');
        $textarea.select();
    },

    closeMoreWindow: function(e) {
        e.preventDefault();
        var $shareMore  = $(e.target).closest('.current-slide-info')
                            .find('.reuters-share-more');
        $shareMore.hide();
    },

    wtShare: function(element) {
        var shareType = $(element).attr('class').split('-')[1];
        /*Webtrends.multiTrack({
            argsa: [
                "WT.z_event", 'Share-' + shareType,
                "DCSext.rchannel", "Event-Share",
                "DCSext.ContentID_Shared", this.id,
                "WT.dl", "15",
                "WT.nv", "reuters-share"
            ]
        });*/
        var url = $(element).closest('.reuters-share').attr('data-share-url');
        dataLayer.push({
          'analyticsAttributes': ''
        });
        dataLayer.push({
          'event': '/GA_social/',
          'network': shareType,
          'action': 'Social Share',
          'actionTarget': url,
          'analyticsAttributes': {
            'socialShare': '1',
          }
        });
    },
    
    wtShareMail: function(element) {
        var shareType = $(element).attr('class').split('-')[1];
        /*Webtrends.multiTrack({
            argsa: [
                "WT.z_event", 'Share-Mail',
                "DCSext.rchannel", "Event-Share",
                "DCSext.ContentID_Shared", this.id,
                "WT.dl", "15",
                "WT.nv", "reuters-share"
            ]
        });*/
    },

    addfocus:function(el){
        this.$el = $(el);
        textarea = this.$el.find('.reuters-share-more').find('textarea');
        $('.reuters-share-more textarea').focus(function(){
            $('.reuters-share-more textarea').filter(function() {
              if($(this).css('display') !== 'none'){
               this.focus();}
            });
        });
    } 

};


(function socialShare($) {
    $('.reuters-share').each(function createShareTools() {
        var sharetools = Object.create(Reuters.share);

        sharetools.init(this);
    });
})(jQuery);