# DeadClick

DeadClick is a novel benchmark of JavaScript errors that are triggered in large production web applications.
This benchmark has been constructed with a unique methodology based crawling the web for finding errors and advanced proxying to ensure that those errors can be reliably reproduced.
The final benchmark contains 555 JavaScript reproducible production errors.

## Structure

The folder `webtraces` contains the 555 JavaScript reproducible production errors.

The folder `script` contains all the scripts that are used to create DeadClick.

`script/lib` contains the core of DeadClick: 1) the url-finder, 2) state-collector, 3) and the reproduction-proxy.
A README is available in each folder to explain how to use each part of DeadClick framework.

`script/stat` contains the script that we used to generate the statistics of DeadClick.


## URL finder

The  methodology for URL finder consists of taking randomly two words from the English dictionary, and creates a Google search request.
Then collect all the urls provided by google.
The randomness allows us to discover websites from different areas.
The ranking of Google provides a free filter to visit more notable sites and omit less visited websites that are probably less maintained.

```javascript
const urlFinder = require('DeadClick').urlFinder;
await urlFinder.crawl({
    pageRequestCallback: function (urls) {}, // the callback each time google search request is done 
    endCallback: function (urls) {}, // the end callback when limitRequest is done
    limitRequest: 100, // the number of urls collected before to stop
    dictionary: 'english.txt', // the path to the dictionary to use
    timeout: 25000, // internal the timeout to charge google page
    useragent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', // internal the user agent used for the google request
    screenWidth: 1280, screenHeight: 600 // the screen size of the page
});
```

## Web Page State Collector

The web page state collector takes a list of URLs and downloads, collects and stores the state of each page from each URL.
By state, we mean all the requests that the page triggers (including the body and the headers), the errors produced by the page and a screenshot to keep a visual representation of the page.

```javascript
const stateCollector = require('DeadClick').stateCollector;
const collectedState = await stateCollector.collectPage({
     url : null, // the url of the page to collect
     proxy: null, // the url of the proxy URL (for example, localhost:8001)
     collectScreenShot: true, // collect or not the screenshot
     timeout: 25000, // the timeout of the request
     useragent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', // the useragent of the request
     screenWidth: 1280, screenHeight: 600 // the screen size of the page
});
```

## Reproduction Proxy

The Reproduction Proxy is a proxy that provides a browser instance with fixed, stored data.
Instead of using the network to download the content of a page or a resource, it serves the data stored by Web Page State Collector.
In addition, it denies all the requests that have not been observed during the initial collection of the page sate.
Reproduction Proxy is based on [anyproxy](https://github.com/alibaba/anyproxy) by Alibaba.
Anyproxy allows us to intercept the requests from the browser and to response the data that we stored with the Web Page State Collector.
This proxy can also be used to change the response body to impact the behavior of the webpage (for example, inject the fault localization technique or automatically fix the bug).


### Reproduce a state
```javascript
const md5 = require('md5');
const reproductionProxy = require('DeadClick').reproductionProxy;
const utils = require('DeadClick').utils;

const expectedState = await utils.loadState(url);

const proxy = await reproductionProxy.startReproductionProxy(); // port 8001
const isReproduced = await reproductionProxy.reproduceRequestState(expectedState, proxy);
```


### Change the body of a response

```javascript
const md5 = require('md5');
const stateCollector = require('deadclick').stateCollector;
const reproductionProxy = require('deadclick').reproductionProxy;
const utils = require('deadclick').utils;

const url = "url from the DeadClick benchmark";

const expectedState = await utils.loadState(url);

const proxy = await reproductionProxy.startReproductionProxy(); // port 8001
proxy.requestState = expectedState;

/**
* Example how to insert fault localization in all JavaScript file 
* (you have to write isJavaScriptRequest and injectFaultLocalization)
*/
proxy.onRequest = async function(request) {
  if (!isJavaScriptRequest(request.url, request.contentType)) {
      return request;
  }
  
  request.statusCode = 200;
  request.body = await injectFaultLocalization(request.body);
};

const collectedState = await stateCollector.collectPage({
     url : url,
     proxy: "localhost:" + proxy.port,
     collectScreenShot: true
});
```



## Structure of `requests.json'

```json
{
    "id": "<md5 url>",
    "url": "<url>",
    "requests": [{
        "id": "<uuid>",
        "url": "<request_url>",
        "status": "<http_status>",
        "method": "<http_method>",
        "headers": {
            "content-type": "<content_type>",
            "cookies": "<cookies>"
        },
        "date": "<date>"
    }],
    "errors": [{
            "timestamp": 1510171919589.917,
            "exceptionDetails": {
                "exceptionId": 1,
                "text": "Uncaught",
                "lineNumber": 0,
                "columnNumber": 55352,
                "url": "<url>",
                "stackTrace": {
                    "callFrames": [{
                        "functionName": "",
                        "scriptId": "317",
                        "url": "",
                        "lineNumber": 0,
                        "columnNumber": 55352
                    }]
                },
                "exception": {
                    "type": "object",
                    "subtype": "error",
                    "className": "TypeError",
                    "description": "<description>",
                    "preview": {
                        "type": "object",
                        "subtype": "error",
                        "description": "<description>",
                        "overflow": false,
                        "properties": [{
                            "name": "stack",
                            "type": "string",
                            "value": ""
                        }, {
                            "name": "message",
                            "type": "string",
                            "value": "Cannot read property"
                        }]
                    }
                },
                "executionContextId": 9
            }
        }
    ],
    "date": "<date>"
 }
```

## License

MIT License
