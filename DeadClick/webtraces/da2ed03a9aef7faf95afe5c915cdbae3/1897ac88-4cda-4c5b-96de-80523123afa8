jQuery(function($) {

	/* 
	 * Read options from "citationexporter" meta tag
	 * They should be defined in a way JIG accepts
	 */
	var metastr = jQuery('meta[name="citationexporter"]').attr('content'),
		metaopts = {};

	if (metastr)
	{
		try { metaopts = eval('({' + metastr + '})'); }
		catch (e) { /* ignore */ }
	}

	function citationexporter($, element, options)
	{
		var self = this,
			container;


		self.options = {
			ids: null,
			backend: "//www.ncbi.nlm.nih.gov/pmc/utils/ctxp",
			//backend: "http://ipmc-dev3.be-md.ncbi.nlm.nih.gov:9898/",
			styles: {
				"american-medical-association": "AMA",
				"modern-language-association": "MLA",
				"apa": "APA"
			},
			header: "Copy and paste a formatted citation from below or use one of the hyperlinks at the bottom to download a file for import into a bibliography manager.",
			footer: "Download as: ",
			width: "500px",
			addCloseButton: true,
			triggerPosition: 'center center',
			openEvent: 'click',
			closeEvent: 'click',
			hasArrow: false,
			isDestElementCloseClick: false,
			isDestTextCacheable: true,
			adjustFit: 'autoAdjust',
			requestTimeout: 0,
		};

		function __constructor() {
			// Merge default options, options in meta and user options
			$.extend(self.options, metaopts, options);
			
			// Store ids
			self.ids = element.data("citationid");

			_initPopper();
		}


		function _initPopper()
		{
			if (!$.fn.ncbipopper)
			{
				return;
			}

			container = element;

			var options = {
				destText: _showPopper,
				groupName: 'citationexporter'
			};
			
			container.ncbipopper($.extend({}, self.options, options));
			
			_customizePopperBehavior(container.data('ncbipopper'));
		}

		/*
		 * ncbipopper calls this method with "callback" function that accepts html
		 */
		function _showPopper(callback) {
			// Bind to events from _load()
			element.on('citationexporterrendered', function(event, data, a) {
				callback(data.content);
			}).on('citationexporterfailed', function(event, response) {
				callback('Sorry! An error occurred while rendering the citation. Please try again later.');
			});

			// Start rendering
			self.render.call(self);
		}


		/**
		 * Public method to show ncbipopper
		 * @param string - optional comma separated list of ids
		 */
		self.open = function(ids) {
			self.ids = ids;

			if (!container)
			{
				_initPopper();
			}

			container.ncbipopper('open');
		}

		/**
		 * Public method to close ncbipopper
		 */
		self.close = function() {
			if (!container) return;
			container.ncbipopper("close");
		},

		/**
		 * Public method to load and render content
		 * @param string - optional comma separated list of ids
		 */
		self.render = function(ids) {
			if (ids)
			{
				self.ids = ids;
			}

			_load();
		}

		/**
		 * Update options
		 * @param object
		 */
		self.setOptions = function(new_options) {
			$.extend(self.options, new_options);
		}

		function _load() {
			// Prepare params
			var params = {
				ids: self.ids,
				styles: $.map(self.options.styles, function(title, key) { return key; }).join(',')
			};

			$.ajax({
	            url: self.options.backend,
	            type: "GET",
	            crossDomain: true,
	            data: params,
	            dataType: "html",
	            timeout: self.options.requestTimeout,
	            
	            success: function (response) {
	                _trigger('rendered', null, { content: _render(response) });
	            },
	            error: function (xhr, status) {
	                _trigger('failed', null, xhr);
	            }
	        });

	        return;

		}


		function _render(html) {
			var data = $(html);
			var content = $('<div/>');//.css('overflow', 'hidden');

			// Header
			$('<div>', { class: "citationexporter-header" }).html(self.options.header).appendTo(content);

			// Citations
			var tbl = $('<table/>', { class: "citationexporter-body" });
			

			$.each(self.options.styles, function(index, title) {
				 tbl.append(_renderItem(title, data.find('[data-style="'+index+'"]')));
			});

			tbl.appendTo(content);

			// Footer
			$('<div>', { class: "citationexporter-footer" }).html(
				self.options.footer+
				_importLink('ris', 'ris', 'RIS')+
				_importLink('nbib', 'nbib', 'NBIB')+
				_importLink('citeproc', 'json', 'JSON')//+
				//self._importLink('pmfu', 'xml', 'PMFU')
			).appendTo(content);

			return content;
		}

		function _renderItem(title, item)
		{
			return $('<tr/>').html("<th>"+title+"</th><td>"+item.html()+"</td>").click(function(event) {
				var node = $(this).find('td').get(0);
		    	if (document.selection) {
					var range = document.body.createTextRange();
					range.moveToElementText(node);
					range.select();
    			} else if (window.getSelection()) {
					var range = document.createRange();
					range.selectNodeContents(node);
					window.getSelection().removeAllRanges();
					window.getSelection().addRange(range);
    			}
			});
		}

		function _importLink(outputformat, responseformat, title)
		{
			var params = {
				ids: self.ids,
				report: outputformat,
				format: responseformat
			};

                        return '<a class="citationexporter ' + outputformat + '" ' +
                                 'href="' + self.options.backend + '?' + $.param(params) + '">' +
                                        title + '</a>';

		}


		function _trigger(name, event, data)
		{
			element.trigger("citationexporter"+name, [ data ]);
		}

		/**
		 * Customize ncbipopper behavior
		 */
		function _customizePopperBehavior(widget_inst) 
		{

			var base_close = widget_inst.close;
			widget_inst.close = function(forceClose) {
				/**
					Force widget to refetch content if opened again 
					Cache has to be enabled to prevent additional ajax requests while scrolling or resizing
					(PMC-22214, PMC-21863)
				 */

				widget_inst.isFunctionResultCached = false;
				widget_inst.getTextCalled = false;
				widget_inst.callbackInProgress = false;

				return base_close.call(widget_inst, forceClose);

			}
		}

		// Init component;
		__constructor();
		// ... and return it's instance
		return self;
	}

    // Register the function as jQuery plugin
    $.fn.extend({
        citationexporter: function(action, params) {
        	// Iterate
            return this.each(function() { 
            	var instance = $(this).data('citationexporter-instance');
            	if (!instance)
            	{
            		instance = new citationexporter(jQuery, $(this), action); // action should contain object with options
            		$(this).data('citationexporter-instance', instance);
            	}

            	if (typeof action == "string")
            	{
                    switch (action)
                    {
                    	case "open": instance.open(params); break;
                    	case "close": instance.close(); break;
                    	case "render": instance.render(params); break;
                    	case "options": instance.setOptions(params); break;
                    } 
                }
            });
        }
    });
    

	$('a.citationexporter').citationexporter();

	// Proposed by Andrei K. Cite links are hidden by default and the widget should make them visible
	$('a.citationexporter.hidden').removeClass('hidden');

});
