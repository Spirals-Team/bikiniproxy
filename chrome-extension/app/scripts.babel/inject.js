chrome.runtime.sendMessage({
    type: 'load'
}, function(response) {
    console.log(response)
    if (response && response.type == 'actions') {
        for (var action of response.actions) {
            if (action.type == 'inject_library') {
                injectScript(action.url)
            }
        }
    } 
});

var isIFrame = window.top != window;

function injectScript(file_path) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    var parent = (document.head || document.documentElement)
    //parent.appendChild(script)
    parent.insertBefore(script, parent.childNodes[0]);
	//script.parentNode.removeChild(script);
}

document.addEventListener('ErrorToExtension', function(e) {
    if (isIFrame) {
        window.top.postMessage({
            _iframeError: true,
			_fromJEN: true,
            error: e.detail
        }, '*');
    } else {
        console.log(e)
        chrome.runtime.sendMessage({
            type: 'error',
            error: e.detail,
            url: window.top.location.href
        }, function() {
        });
    }
});

window.addEventListener('message', function(event) {
    if(typeof event.data === 'object' && event.data && typeof event.data._fromJEN !== 'undefined' && event.data._fromJEN) {
        if (event.data._iframeError) {
            chrome.runtime.sendMessage({
                errors: event.data.error,
                url: window.top.location.href
            }, function() {
            });
        }
    }
});





injectScript(chrome.extension.getURL('scripts/error_logging.js'), 'head');
