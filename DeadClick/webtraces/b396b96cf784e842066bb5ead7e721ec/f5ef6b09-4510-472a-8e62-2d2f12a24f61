
function HttpRequest(params, callback_args)
{
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ## Declarations ##
   	    var selfRef = this;
	    var payLoad = params.payload || null;	
	    var http = this.getXHR(); 
	    
	    if(!http) { return; }
	    
	    var failureMethod = params.onFailure || null;
	    var successMethod = params.onSuccess || null;	
	    if(typeof(callback_args) == "undefined") { callback_args = new Array(); }	
	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ## Properties ## 
   
        this.Params = params;
        this.Url = this.Params.url;    
        this.Args = callback_args;
        this.FailureMethod = failureMethod;
        this.SuccessMethod = successMethod;
        this.PayLoad = payLoad;
        this.DeliveryMethod = (payLoad != null) ? "POST" : "GET";
        this.ContentType = (params.contentType) || "text/xml";
        this.Timeout = parseInt(params.timeout) || 60000;   
        this.Http = http;   
        
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
    // ## Methods ## 
        this.FailureMethod = failureMethod;
        this.SuccessMethod = successMethod;     
        
        // ## Private Methods ##   
	        http.onreadystatechange = function() 
	        {
	            var result = "";
	            var error = null;
	            var contentType = "";
	            var cb_params = null;
            
	            if(http.readyState != 4) { return; }

		        clearTimeout(timer);

		        if(http.status == 200) 
		        {
			        error = http.getResponseHeader('X-Error') || null;

			        // --- wrap up all of the callback args to be passed to one of the callback methods --
			        cb_params = new Array();
			        for(var i=0; i < callback_args.length; i++) { cb_params.push(callback_args[i]); }
        			
			        if(error == null || error == "null") 
			        {
				        contentType = http.getResponseHeader('Content-type');
                        if(contentType) 
                        {
				           result = (contentType.match(/^text\/javascript/i)) ? eval('(' + http.responseText + ')') : ((contentType.match(/^text\/xml/i)) ? http.responseXML : http.responseText);
                        }

				        if (successMethod != null) 
				        {
					        cb_params.push(result);					
					        successMethod.apply(this, cb_params);
				        }
			        }
			        else if (failureMethod != null) 
			        {
				        cb_params.push(error);
				        failureMethod.apply(this, cb_params);
			        }
		        }
		        else if (failureMethod != null) 
		        {
			        cb_params = new Array();
			        cb_params.push(http.status + " : " + http.statusText);
			        failureMethod.apply(this, cb_params);
		        }
	        }
	        
   //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   // ## Send the request and set timer function ##    
    this.Http.open(this.DeliveryMethod, this.Url, true);
	this.Http.setRequestHeader("Content-type", this.ContentType);
	this.Http.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	this.Http.send(this.PayLoad);
    
	var timer = setTimeout(function() { selfRef.Http.abort(); if(failureMethod != null) { failureMethod.apply(null, ["timeout"]); }}, this.Timeout);
}

HttpRequest.prototype.getXHR = function()
{
	var returnVal =  (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	return returnVal;
};