var ajax = {};
ajax.x = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    var versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
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
        method = 'POST'
    }
    var x = ajax.x();
    x.open(method, url, async);
    x.onreadystatechange = function () {
        if (x.readyState == 4) {
            callback(x.responseText)
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


bikiniproxy = {};

bikiniproxy.loadFile = function (name, url, hash, pageId) {
    ajax.json(bikiniproxyHost.substring(bikiniproxyHost.indexOf("//")) + "/api/file", {
        name: name,
        url: url,
        hash: hash,
        pageId: pageId,
        date: new Date()
    }, function (err) {

    }, true);
};

bikiniproxy.logException = function (e) {
    ajax.json(bikiniproxyHost.substring(bikiniproxyHost.indexOf("//")) + "/api/exception", e, function (err) {

    }, true);
};

var _onunload = window.onunload;
window.onunload = function(){
    ajax.json(bikiniproxyHost.substring(bikiniproxyHost.indexOf("//")) + "/api/page/" + uidBikiniProxy + "/close", {}, function (err) {

    }, true);
    if (_onunload != null) {
        _onunload();
    }
};

TraceKit.report.subscribe(function yourLogger(errorReport) {
    bikiniproxy.logException({
        date: new Date(),
        pageId: uidBikiniProxy,
        error: errorReport
    });
});