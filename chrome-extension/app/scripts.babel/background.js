const errors = {}
const repairActions = {}
const knownErrors = {}
const buggy_files = {}
let lastTabId = -1

const api = 'http://localhost:8080/api/'

var ajax = {};
ajax.x = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    var versions = [
        'MSXML2.XmlHttp.6.0',
        'MSXML2.XmlHttp.5.0',
        'MSXML2.XmlHttp.4.0',
        'MSXML2.XmlHttp.3.0',
        'MSXML2.XmlHttp.2.0',
        'Microsoft.XmlHttp'
    ];

    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {
        }
    }
    return xhr;
};

ajax.send = function (url, callback, method, data, async) {
    if (async === undefined) {
        async = true;
    }

    var isJson = method == 'JSON';
    if (isJson) {
        method = 'POST';
    }
    var x = ajax.x();
    x.open(method, url, async);
    x.onreadystatechange = function () {
        if (x.readyState == 4) {
            x.contentType = x.getResponseHeader("Content-Type");
            callback(x.responseText, x)
        }
    };
    if (isJson) {
        x.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    } else if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    }
    x.send(data)
};

ajax.get = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
};

ajax.post = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'POST', query.join('&'), async)
};

ajax.json = function (url, data, callback, async) {
    ajax.send(url, callback, 'JSON', JSON.stringify(data), async)
};

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
    console.log('tab closed')
    delete errors[tabid]
    delete buggy_files[tabid]
    delete knownErrors[tabid]
    delete repairActions[tabid]
})

chrome.windows.onRemoved.addListener(function(windowid) {
    console.log('window closed')
})

chrome.webRequest.onBeforeRequest.addListener(function (event) {
    console.log('onBeforeRequest', event)
  errors[event.tabId] = []
  knownErrors[event.tabId] = []
  buggy_files[event.tabId] = []
  repairActions[event.tabId] = []
  lastTabId = event.tabId
  ajax.get(api + 'errors', {url: event.url}, data => {
    if (data == '') {
        return
    }
    const page_errors = JSON.parse(data)
    for (let page_error of page_errors) {
      knownErrors[event.tabId].push(page_error.error)
      buggy_files[event.tabId].push(page_error.error.file)
    }
    knownErrors[event.tabId] = [...new Set(knownErrors[event.tabId])]
    buggy_files[event.tabId] = [...new Set(buggy_files[event.tabId])]
    console.log('onBeforeRequest errors', data)
    console.log(buggy_files[event.tabId])
  }, false)
}, {urls: ['<all_urls>'], types: ['main_frame']}, ['blocking']);

var accessControlRequestHeaders;
var exposedHeaders;

var requestListener = function(details){
	var flag = false,
		rule = {
			name: "Origin",
			value: "http://evil.com/"
		};
	var i;

	for (i = 0; i < details.requestHeaders.length; ++i) {
		if (details.requestHeaders[i].name.toLowerCase() === rule.name.toLowerCase()) {
			flag = true;
			details.requestHeaders[i].value = rule.value;
			break;
		}
	}
	if(!flag) details.requestHeaders.push(rule);
	
	for (i = 0; i < details.requestHeaders.length; ++i) {
		if (details.requestHeaders[i].name.toLowerCase() === "access-control-request-headers") {
			accessControlRequestHeaders = details.requestHeaders[i].value	
		}
	}	
	
	return {requestHeaders: details.requestHeaders};
};

var responseListener = function(details){
	var flag = false,
	rule = {
			"name": "Access-Control-Allow-Origin",
			"value": "*"
		};

	for (var i = 0; i < details.responseHeaders.length; ++i) {
		if (details.responseHeaders[i].name.toLowerCase() === rule.name.toLowerCase()) {
			flag = true;
			details.responseHeaders[i].value = rule.value;
			break;
		}
	}
	if(!flag) details.responseHeaders.push(rule);

	if (accessControlRequestHeaders) {

		details.responseHeaders.push({"name": "Access-Control-Allow-Headers", "value": accessControlRequestHeaders});

	}

	if(exposedHeaders) {
		details.responseHeaders.push({"name": "Access-Control-Expose-Headers", "value": exposedHeaders});
	}

	details.responseHeaders.push({"name": "Access-Control-Allow-Methods", "value": "GET, PUT, POST, DELETE, HEAD, OPTIONS"});

	return {responseHeaders: details.responseHeaders};
	
};


// chrome.webRequest.onBeforeSendHeaders.addListener(requestListener, {
//     urls: ['<all_urls>']
// },["blocking", "requestHeaders"]);

// chrome.webRequest.onHeadersReceived.addListener(responseListener, {
//     urls: ['<all_urls>']
// },["blocking", "responseHeaders"]);


// chrome.webRequest.onCompleted.addListener(function () {
//     console.log(arguments)
// }, {urls: ['<all_urls>'], types: []}, []);

chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
    if (data.type != 'error') {
        return true
    }
    console.log(data, sender)
    errors[sender.tab.id].push(data.error)
    ajax.json(api + 'exception', {
        pageId: data.url,
        error: data.error,
        date: new Date()
    }, _ => {
        
    })
    chrome.browserAction.setBadgeText({tabId: sender.tab.id, text: errors[sender.tab.id].length + ''})
    //chrome.storage.local.set({error: error});
    return true;
})
