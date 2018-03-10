/*
 * jQuery Calculation Plug-in
 *
 * Copyright (c) 2007 Dan G. Switzer, II
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: 11
 * Version: 0.4.07
 *
 * Revision History
 * v0.4.07
 * - Added trim to parseNumber to fix issue with whitespace in elements
 * 
 * v0.4.06
 * - Added support for calc() "format" callback so that if return value
 *   is null, then value is not updated
 * - Added jQuery.isFunction() check for calc() callbacks
 * 
 * v0.4.05
 * - Added support to the sum() & calc() method for automatically fixing precision
 *   issues (will detect the max decimal spot in the number and fix to that
 *   depth)
 * 
 * v0.4.04
 * - Fixed bug #5420 by adding the defaults.cleanseNumber handler; you can
 *   override this function to handle stripping number of extra digits
 * 
 * v0.4.02
 * - Fixed bug where bind parameter was not being detecting if you specified
 *   a string in method like sum(), avg(), etc.
 * 
 * v0.4a
 * - Fixed bug in aggregate functions so that a string is passed to jQuery's
 *   text() method (since numeric zero is interpetted as false)
 * 
 * v0.4
 * - Added support for -$.99 values
 * - Fixed regex so that decimal values without leading zeros are correctly
 *   parsed
 * - Removed defaults.comma setting
 * - Changed secondary regex that cleans additional formatting from parsed
 *   number
 * 
 * v0.3
 * - Refactored the aggregate methods (since they all use the same core logic)
 *   to use the $.extend() method
 * - Added support for negative numbers in the regex)
 * - Added min/max aggregate methods
 * - Added defaults.onParseError and defaults.onParseClear methods to add logic for
 *   parsing errors
 * 
 * v0.2
 * - Fixed bug in sMethod in calc() (was using getValue, should have been setValue)
 * - Added arguments for sum() to allow auto-binding with callbacks
 * - Added arguments for avg() to allow auto-binding with callbacks
 * 
 * v0.1a
 * - Added semi-colons after object declaration (for min protection)
 * 
 * v0.1
 * - First public release
 *
*/
(function($){

	// set the defaults
	var defaults = {
		// regular expression used to detect numbers, if you want to force the field to contain
		// numbers, you can add a ^ to the beginning or $ to the end of the regex to force the
		// the regex to match the entire string: /^(-|-\$)?(\d+(,\d{3})*(\.\d{1,})?|\.\d{1,})$/g
		reNumbers: /(-|-\$)?(\d+(,\d{3})*(\.\d{1,})?|\.\d{1,})/g
		// this function is used in the parseNumber() to cleanse up any found numbers
		// the function is intended to remove extra information found in a number such
		// as extra commas and dollar signs. override this function to strip European values
		, cleanseNumber: function (v){
			// cleanse the number one more time to remove extra data (like commas and dollar signs)
			// use this for European numbers: v.replace(/[^0-9,\-]/g, "").replace(/,/g, ".")
			return v.replace(/[^0-9.\-]/g, "");
		}
		// should the Field plug-in be used for getting values of :input elements?
		, useFieldPlugin: (!!$.fn.getValue)
		// a callback function to run when an parsing error occurs
		, onParseError: null
		// a callback function to run once a parsing error has cleared
		, onParseClear: null
	};
	
	// set default options
	$.Calculation = {
		version: "0.4.07",
		setDefaults: function(options){
			$.extend(defaults, options);
		}
	};


	/*
	 * jQuery.fn.parseNumber()
	 *
	 * returns Array - detects the DOM element and returns it's value. input
	 *                 elements return the field value, other DOM objects
	 *                 return their text node
	 *
	 * NOTE: Breaks the jQuery chain, since it returns a Number.
	 *
	 * Examples:
	 * $("input[name^='price']").parseNumber();
	 * > This would return an array of potential number for every match in the selector
	 *
	 */
	// the parseNumber() method -- break the chain
	$.fn.parseNumber = function(options){
		var aValues = [];
		options = $.extend(options, defaults);
		
		this.each(
			function (){
				var
					// get a pointer to the current element
					$el = $(this),
					// determine what method to get it's value
					sMethod = ($el.is(":input") ? (defaults.useFieldPlugin ? "getValue" : "val") : "text"),
					// parse the string and get the first number we find
					v = $.trim($el[sMethod]()).match(defaults.reNumbers, "");
					
				// if the value is null, use 0
				if( v == null ){
					v = 0; // update value
					// if there's a error callback, execute it
					if( jQuery.isFunction(options.onParseError) ) options.onParseError.apply($el, [sMethod]);
					$.data($el[0], "calcParseError", true);
				// otherwise we take the number we found and remove any commas
				} else {
					// clense the number one more time to remove extra data (like commas and dollar signs)
					v = options.cleanseNumber.apply(this, [v[0]]);
					// if there's a clear callback, execute it
					if( $.data($el[0], "calcParseError") && jQuery.isFunction(options.onParseClear) ){
						options.onParseClear.apply($el, [sMethod]);
						// clear the error flag
						$.data($el[0], "calcParseError", false);
					} 
				}
				aValues.push(parseFloat(v, 10));
			}
		);

		// return an array of values
		return aValues;
	};

	/*
	 * jQuery.fn.calc()
	 *
	 * returns Number - performance a calculation and updates the field
	 *
	 * Examples:
	 * $("input[name='price']").calc();
	 * > This would return the sum of all the fields named price
	 *
	 */
	// the calc() method
	$.fn.calc = function(expr, vars, cbFormat, cbDone){
		var
			// create a pointer to the jQuery object
			$this = this
			// the value determine from the expression
			, exprValue = ""
			// track the precision to use
			, precision = 0
			// a pointer to the current jQuery element
			, $el
			// store an altered copy of the vars
			, parsedVars = {}
			// temp variable
			, tmp
			// the current method to use for updating the value
			, sMethod
			// a hash to store the local variables
			, _
			// track whether an error occured in the calculation
			, bIsError = false;

		// look for any jQuery objects and parse the results into numbers			
		for( var k in vars ){
			// replace the keys in the expression
			expr = expr.replace( (new RegExp("(" + k + ")", "g")), "_.$1");
			if( !!vars[k] && !!vars[k].jquery ){
				parsedVars[k] = vars[k].parseNumber();
			} else {
				parsedVars[k] = vars[k];
			}
		}
		
		this.each(
			function (i, el){
				var p, len;
				// get a pointer to the current element
				$el = $(this);
				// determine what method to get it's value
				sMethod = ($el.is(":input") ? (defaults.useFieldPlugin ? "setValue" : "val") : "text");

				// initialize the hash vars
				_ = {};
				for( var k in parsedVars ){
					if( typeof parsedVars[k] == "number" ){
						_[k] = parsedVars[k];
					} else if( typeof parsedVars[k] == "string" ){
						_[k] = parseFloat(parsedVars[k], 10);
					} else if( !!parsedVars[k] && (parsedVars[k] instanceof Array) ) {
						// if the length of the array is the same as number of objects in the jQuery
						// object we're attaching to, use the matching array value, otherwise use the
						// value from the first array item
						tmp = (parsedVars[k].length == $this.length) ? i : 0;
						_[k] = parsedVars[k][tmp];
					}

					// if we're not a number, make it 0
					if( isNaN(_[k]) ) _[k] = 0;

					// check for decimals and check the precision
					p = _[k].toString().match(/\.\d+$/gi);
					len = (p) ? p[0].length-1 : 0;

					// track the highest level of precision
					if( len > precision ) precision = len; 
				}


				// try the calculation
				try {
					exprValue = eval( expr );
					
					// fix any the precision errors
					if( precision ) exprValue = Number(exprValue.toFixed(Math.max(precision, 4)));

					// if there's a format callback, call it now
					if( jQuery.isFunction(cbFormat) ){
						// get return value
						var tmp = cbFormat.apply(this, [exprValue])
						// if we have a returned value (it's null null) use it
						if( !!tmp ) exprValue = tmp;
					}
		
				// if there's an error, capture the error output
				} catch(e){
					exprValue = e;
					bIsError = true;
				}
				
				// update the value
				$el[sMethod](exprValue.toString());
			}
		);
		
		// if there's a format callback, call it now
		if( jQuery.isFunction(cbDone) ) cbDone.apply(this, [this]);

		return this;
	};

	/*
	 * Define all the core aggregate functions. All of the following methods
	 * have the same functionality, but they perform different aggregate 
	 * functions.
	 * 
	 * If this methods are called without any arguments, they will simple
	 * perform the specified aggregate function and return the value. This
	 * will break the jQuery chain. 
	 * 
	 * However, if you invoke the method with any arguments then a jQuery
	 * object is returned, which leaves the chain intact.
	 * 
	 * 
	 * jQuery.fn.sum()
	 * returns Number - the sum of all fields
	 *
	 * jQuery.fn.avg()
	 * returns Number - the avg of all fields
	 *
	 * jQuery.fn.min()
	 * returns Number - the minimum value in the field
	 *
	 * jQuery.fn.max()
	 * returns Number - the maximum value in the field
	 * 
	 * Examples:
	 * $("input[name='price']").sum();
	 * > This would return the sum of all the fields named price
	 *
	 * $("input[name='price1'], input[name='price2'], input[name='price3']").sum();
	 * > This would return the sum of all the fields named price1, price2 or price3
	 *
	 * $("input[name^=sum]").sum("keyup", "#totalSum");
	 * > This would update the element with the id "totalSum" with the sum of all the 
	 * > fields whose name started with "sum" anytime the keyup event is triggered on
	 * > those field.
	 *
	 * NOTE: The syntax above is valid for any of the aggregate functions
	 *
	 */
	$.each(["sum", "avg", "min", "max"], function (i, method){
		$.fn[method] = function (bind, selector){
			// if no arguments, then return the result of the aggregate function
			if( arguments.length == 0 )
				return math[method](this.parseNumber());

			// if the selector is an options object, get the options
			var bSelOpt = selector && (selector.constructor == Object) && !(selector instanceof jQuery);

			// configure the options for this method
			var opt = bind && bind.constructor == Object ? bind : {
				  bind: bind || "keyup"
				, selector: (!bSelOpt) ? selector : null
				, oncalc: null
			};
			
			// if the selector is an options object, extend	the options
			if( bSelOpt ) opt = jQuery.extend(opt, selector);
	
			// if the selector exists, make sure it's a jQuery object
			if( !!opt.selector ) opt.selector = $(opt.selector);
			
			var self = this
				, sMethod
				, doCalc = function (){
					// preform the aggregate function
					var value = math[method](self.parseNumber(opt));
					// check to make sure we have a selector				
					if( !!opt.selector ){
						// determine how to set the value for the selector
						sMethod = (opt.selector.is(":input") ? (defaults.useFieldPlugin ? "setValue" : "val") : "text");
						// update the value
						opt.selector[sMethod](value.toString());
					}
					// if there's a callback, run it now
					if( jQuery.isFunction(opt.oncalc) ) opt.oncalc.apply(self, [value, opt]);
				};
			
			// perform the aggregate function now, to ensure init values are updated
			doCalc();
			
			// bind the doCalc function to run each time a key is pressed
			return self.bind(opt.bind, doCalc);
		}
	});
	
	/*
	 * Mathmatical functions
	 */
	var math = {
		// sum an array
		sum: function (a){
			var total = 0, precision = 0;
			
			// loop through the value and total them
			$.each(a, function (i, v){
				// check for decimals and check the precision
				var p = v.toString().match(/\.\d+$/gi), len = (p) ? p[0].length-1 : 0;
				// track the highest level of precision
				if( len > precision ) precision = len; 
				// we add 0 to the value to ensure we get a numberic value
				total += v;
			});

			// fix any the precision errors
			if( precision ) total = Number(total.toFixed(precision));
	
			// return the values as a comma-delimited string
			return total;
		},
		// average an array
		avg: function (a){
			// return the values as a comma-delimited string
			return math.sum(a)/a.length;
		},
		// lowest number in array
		min: function (a){
			return Math.min.apply(Math, a);
		},
		// highest number in array
		max: function (a){
			return Math.max.apply(Math, a);
		}
	};
	

})(jQuery);
