(function(window, $) {
   
    var _log = function(msg) {
        var isDebug = ~document.location.search.indexOf("debug");
        if (isDebug && typeof console !== "undefined" && !!console.log) {
            if (typeof msg === "string") console.log("dcRefreshableAd: " + msg);
            else if (typeof msg === "object" && !!console.dir) console.dir(msg);
            else console.log(msg);
        }
    };

    /**
     * jQuery UI widget for handling Double Click advertising
     *
     * version 2.0.0 - implementation changed to used GPT tags + built in refresh function
     *
     * Usage:
     *
     * // Instantiate the ad widget, and begin polling
     * $('#div').dcRefreshableAd({ size: '728x90', interval: 30 });
     *
     * Options:
     * - site {String} defaults to mlb/club.mlb, example: 'domain.com'
     * - size {String} Dimensions of the ad WIDTHxHEIGHT, example: '300x250'
     * - interval {Number} Seconds between ad refreshes/impressions
     * - max {Number} Maximum number of ad refreshes/impressions
     * - refreshPage {Boolean} If present, will sync ads on page and refresh all at the same time (only needed on one ad/page)
     * - pageTotal {Number} Tracks total number of ads on a page (for use with refreshPage)
     * - customparams {object} a hash map of key/val pairs that gets parsed and appended to the ad URL
     *
     * Methods:
     * - refresh Loads a new ad into the widget
     * - start Starts refreshing the ad at the configured interval
     * - stop Stops refreshing the ad at the configured interval
     * - destroy Cleanup widget events and elements
     *
     * Events:
     * - dcrefreshableadrefresh fires when before the ad is refreshed
     * - dcrefreshableadstart fires when the start method
     * - dcrefreshableadstop
     *
     * // Start and stop the poller
     * $('#div').dcRefreshableAd('start');
     * $('#div').dcRefreshableAd('stop');
     *
     * // Manually refresh the ad
     * $('#div').dcRefreshableAd('refresh');
     *
     * // Destroy the widget
     * $('#div').dcRefreshableAd('destroy');
     *
     */
    $.widget('bam.dcRefreshableAd', {

        options: {
            size: '',
            site: '',
            interval: 0,
            max: Infinity,
            tile: '',
            pos: '',
            refreshPage: false,
            pageTotal: 1,
            customparams: {}
        },

        /**
         * Create and customize necessary DOM elements
         * @private
         */
        _create: function() {
            var self = this,
                elem = this.element,
                opts = this.options,
                base = this.widgetBaseClass,
                dims;

            // Do not instantiate ad if using secure protocol to avoid
            if (window.location.protocol === 'https:') {
                return;
            }

            if (opts.size) {
                dims = opts.size.split('x');
            } else {
                dims = [elem.width(), elem.height()];
                opts.size = dims.join('x');
            }

            if (dims.length !== 2) {
                throw '$.fn.dcRefreshableAd: Invalid size option. Example: "728x90"';
            }

            // Store position and tile values for generating URLs
            this.pos = opts.pos || (window.dc_tiles[opts.size] = ~~+window.dc_tiles[opts.size] + 1);
            this.tile = opts.tile || ++window.dc_numads;

            if (!elem.attr('id')) {
                elem.attr('id', 'gpt-refreshable-' + this.tile);
            }

            // Track impressions (passed with dcrefreshableadload event)
            this.impressions = 0;
            this.totalImpressions = 0; //for use when refreshing whole page

            this.start();
        },

        /**
         * Handle widget cleanup
         * @public
         */
        destroy: function() {
            this.stop();

            this.element.removeClass(this.widgetBaseClass);
            this.element.empty();

            $.Widget.prototype.destroy.apply(this, arguments);
        },

        _writeGPTAd: function() {
            var size = this.options.size;
            var size_w = parseInt(size.split("x")[0], 10);
            var size_h = parseInt(size.split("x")[1], 10);

            var slot_id = this.element[0].id;
            var slot_pos = this.pos;
            var slot_tile = this.tile;
            var customparams = this.options.customparams || {};

            var section = window.section || 'empty';
            var lang = window.dc_lang || 'en';
            var langPrefix = (lang !== 'en' ? lang + '.' : '');
            var domains  = window.c_domain || {};
            var club = window.club || 'mlb';
            var pathArr = ['/2605'];

            var site = this.options.site || window.dc_site || langPrefix + domains[club] + '.mlb';
            if (site === 'MiLB.com') {
                if (customparams.sid) {
                    var sid = customparams.sid;
                    pathArr.push((sid !== "milb") ? sid + ".milb" : site);
                } else {
                    pathArr.push(site);
                }

                var first160x600 = (size === '160x600' && slot_pos === 1);
                var isMainPage = ['scoreboard', 'schedule', 'news', 'stats', 'standings'].indexOf(section) > -1;
                if (isMainPage && !first160x600) { customparams['dcopt'] = 'ist'; }
            } else if (site === 'abl') {
                pathArr.push(window.sid + '.abl'); 
            } else {
                pathArr.push(site);
            }
            pathArr.push(section);

            //add device targeting on mlb and club sites
            if (domains[club] && window.deviceBootstrap) {
                var formFactor = window.deviceBootstrap().formFactor;
                var platform = window.deviceBootstrap().platform;
                var isMobile = ["tablet", "phone"].indexOf(formFactor) > -1;
                var isIosOrAndroid = ["ios", "android"].indexOf(platform) > -1;

                pathArr.push(formFactor);
                if (isMobile) { pathArr.push(isIosOrAndroid ? platform : "other"); }
            }

            this.gpt_adUnitPath = pathArr.join("/");
            var path = this.gpt_adUnitPath;

            // boilerplate gpt stuff
            window.gptadslots = window.gptadslots || {};
            window.googletag = window.googletag || {};
            window.googletag.cmd = window.googletag.cmd || [];

            window.googletag.cmd.push(function() {
                window.googletag.pubads().enableAsyncRendering();
                window.googletag.pubads().collapseEmptyDivs();
            });

            if (!window.googletag.apiReady) {
                (function(){ var gads = document.createElement('script');
                    gads.async = true; gads.type = 'text/javascript';
                    var useSSL = 'https:' == document.location.protocol;
                    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
                    var node = document.getElementsByTagName('script')[0];
                    node.parentNode.insertBefore(gads, node);
                })();
            }

            // set page-level targeting
            if (window.content_id) {
                window.googletag.cmd.push(function() {
                    window.googletag.pubads().setTargeting('contentid', window.content_id);
                });
            }

            if (section !== 'empty') {
                window.googletag.cmd.push(function() {
                    window.googletag.pubads().setTargeting('adunit', section);
                });
            }

            if (window.bam && window.bam.vkey) {
                window.googletag.cmd.push(function() {
                    window.googletag.pubads().setTargeting('vkey', window.bam.vkey);
                });
            }

            if (window.page_id || window.pageid) {
                var pageid_val = (window.page_id) ? window.page_id : window.pageid;
                window.googletag.cmd.push(function() {
                    window.googletag.pubads().setTargeting('pageid', pageid_val);
                });
            }

            if (window.dc_keyVal) {
                var dc_targeting = window.dc_keyVal.split(";");

                window.googletag.cmd.push(function(){
                    for (var x = 0; x < dc_targeting.length; x++){
                        var dc_key = dc_targeting[i].substr(0,dc_targeting[i].indexOf("="));
                        var dc_val = dc_targeting[i].substr(dc_targeting[i].indexOf("=")+1);
                        window.googletag.pubads().setTargeting(dc_key, dc_val);
                    }
                });
            }

            window.googletag.cmd.push(function(){
                window.googletag.enableServices();
            });

            // create tag
            window.googletag.cmd.push(function() {
                window.gptadslots[slot_id] = window.googletag.defineSlot(path, [size_w, size_h], slot_id)
                .setTargeting('pos', slot_pos)
                .setTargeting('tile', slot_tile)
                .setTargeting('dc', 'gpt')
                .addService(window.googletag.pubads());
            });

            if (customparams) {
                if (customparams.dcopt === 'ist') {

                    var gpt_outOfPageId = slot_id + '-out-of-page';

                    this.element.after('<div id="' + gpt_outOfPageId + '" class="gpt-ad-outofpage"></div>');

                    window.googletag.cmd.push(function() {
                        window.gptadslots[gpt_outOfPageId] = window.googletag.defineOutOfPageSlot(path, gpt_outOfPageId)
                        .setTargeting('pos','1')
                        .setTargeting('tile', slot_tile)
                        .setTargeting('dc', 'gpt')
                        .addService(window.googletag.pubads());
                        window.googletag.display(gpt_outOfPageId);
                    });
                }

                window.googletag.cmd.push(function() {
                    for (key in customparams) {
                        window.gptadslots[slot_id].setTargeting(key, customparams[key] );
                    }
                });
            }

            window.googletag.cmd.push(function() {
                window.googletag.display(slot_id);
            });
        },

        /**
         * Refresh the ad by calling GPT function
         * @public
         */
        refresh: function() {
            if (this.impressions >= this.options.max) {
                this.stop();
                return;
            }

            // Trigger the refreshstart event
            this._trigger('refresh', null, {
                impressions: ++this.impressions,
                totalImpressions: this.totalImpressions += this.pageTotal
            });

            if (this.refreshPage) {
                window.googletag.pubads().refresh();
            } else {
                var slot_id = this.element[0].id;
                window.googletag.pubads().refresh([window.gptadslots[slot_id]]);
            }
        },

        /**
         * Start periodically refreshing the ad at the configured interval
         * @public
         */
        start: function() {
            var self = this,
                interval = this.options.interval;

            this._writeGPTAd();
            if (!this.timer && interval) {

                // Start interval
                this.timer = window.setInterval(function() {
                    self.refresh();
                }, interval * 1000);

                // Trigger start event
                this._trigger('start');
            }
        },

        /**
         * Stop periodically refreshing the ad
         * @public
         */
        stop: function() {
            if (this.timer) {

                // Clear interval
                window.clearInterval(this.timer);
                this.timer = null;

                // Trigger stop event
                this._trigger('stop');
            }
        }

    });

})(window, jQuery);
