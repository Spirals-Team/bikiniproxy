chrome.webRequest.onBeforeRequest.addListener(function (request) {
    if (request.type != "main_frame" && request.url.indexOf('http:') != -1 && request.initiator.indexOf('https:') != -1) {
        repairActions[event.tabId].push('Redirect HTTP to HTTPS');
        repairActions[request.tabId].push('HTTP2HTTPS')
        return { redirectUrl: request.url.replace('http', 'https') };
    }
}, {urls: ['<all_urls>'], types: ['script']}, ['blocking']);