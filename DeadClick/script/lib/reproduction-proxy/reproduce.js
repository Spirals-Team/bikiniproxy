const fs = require('async-file');
const URL = require('url');
const AnyProxy = require('anyproxy');
const utils = require('../utils');
const Request = require('../Request');
const State = require('../State');
const collector = require('../state-collector/collect');


/**
 *
 * @param collectedState {!State}
 * @param req
 * @returns {Request}
 */
function getRequestFromReq(collectedState, req) {
    const r = collectedState.getRequests(req.url);
    if (r.length == 1) {
        return r[0];
    } else if (r.length > 1) {
        r.sort(function (a, b) {
            return a.date - b.date;
        });
        for (const request of r) {
            if (!request.used) {
                request.used = true;
                return request;
            }
        }
    }
    return null;
}

function generateCert() {
    const exec = require('child_process').exec;

    if (!AnyProxy.utils.certMgr.ifRootCAFileExists()) {
        AnyProxy.utils.certMgr.generateRootCA((error, keyPath) => {
            // let users to trust this CA before using proxy
            if (!error) {
                const certDir = require('path').dirname(keyPath);
                console.log('The cert is generated at', certDir);
                const isWin = /^win/.test(process.platform);
                if (isWin) {
                    exec('start .', { cwd: certDir });
                } else {
                    exec('open .', { cwd: certDir });
                }
            } else {
                console.error('error when generating rootCA', error);
            }
        });
    }
}


class Proxy {
    constructor(onRequest) {
        this.proxyServer = null;
        /**
         * @type {State}
         */
        this.requestState = null;
        /**
         * @type {number}
         */
        this.port = 8001;

        this.onRequest = onRequest;
        if (!onRequest) {
            this.onRequest = async function (request) {
                return request;
            }
        }
    }

    close() {
        if (this.proxyServer != null) {
            this.proxyServer.close();
        }
        this.requestState = null;
        this.proxyServer = null;
    }
}

/**
 *
 * @returns {Promise<Proxy>}
 */
async function startProxy(port) {
    const output = new Proxy();
    if (!port) {
        port = output.port;
    } else {
        output.port = port;
    }
    generateCert();
    return new Promise((resolve, reject) => {
        const options = {
            port: output.port,
            rule: {
                beforeSendRequest: async function (requestDetail) {
                    try {
                        if (output.beforeSendRequest != null) {
                            await output.beforeSendRequest(requestDetail);
                        }
                    } catch (ignore) {
                        console.log(ignore)
                    }
                    if (requestDetail.url.indexOf("localhost") !== -1 ) {
                        return;
                    }
                    const r = getRequestFromReq(output.requestState, requestDetail);
                    if (r == null || requestDetail.url == "https://platform.twitter.com/widgets.js") {
                        let request = {
                            requestDetail: requestDetail,
                            sateRequest: r,
                            statusCode: 500,
                            contentType: "text/html",
                            headers: r?r.headers:null,
                            body: "Error 500",
                            url: requestDetail.url
                        };
                        try {
                            request = await output.onRequest(request);
                        } catch (e) {
                            console.error(request, e);
                        }
                        if (request.statusCode == null) {
                            return request;
                        }
                        const header = {
                            'content-type': request.contentType
                            //'Set-Cookie': r.headers['set-cookie'],
                            //'Content-Encoding': r.headers['content-encoding']
                        };
                        if (request.headers != null && request.headers.location) {
                            header['location'] = request.headers.location
                        }
                        for (const name in request.headers) {
                            if (name.indexOf("access") === 0) {
                                header[name] = request.headers[name].split("\n")[0];
                            }
                        }
                        return {
                            response: {
                                statusCode: request.statusCode,
                                header: header,
                                body: request.body
                            }
                        }
                    }
                    const data = await fs.readFile(utils.requestsPath + output.requestState.id + "/" + r.id);

                    const parametersO = new URL.URLSearchParams(r.url);
                    const parametersC = new URL.URLSearchParams(requestDetail.url);
                    if (parametersO.has("cb") || parametersO.has("callback")) {
                        const cb = parametersO.has("cb")?"cb":"callback";
                        data.replace(parametersO.get(cb), parametersC.get(cb));
                    }

                    let statusCode = r.status;
                    if (statusCode === 304) {
                        statusCode = 200;
                    }
                    let contentType = r.contentType();

                    let request = {
                        requestDetail: requestDetail,
                        sateRequest: r,
                        statusCode: statusCode,
                        contentType: contentType,
                        headers: r.headers,
                        body: data,
                        url: requestDetail.url
                    };

                    try {
                        request = await output.onRequest(request);
                    } catch (e) {
                        console.error(request, e);
                    }

                    try {
                        const header = {
                            'content-type': request.contentType
                            //'Set-Cookie': r.headers['set-cookie'],
                            //'Content-Encoding': r.headers['content-encoding']
                        };
                        if (request.headers.location) {
                            header['location'] = request.headers.location
                        }
                        for (const name in request.headers) {
                            if (name.indexOf("access") === 0) {
                                header[name] = request.headers[name].split("\n")[0];
                            }
                        }
                        return {
                            response: {
                                statusCode: request.statusCode,
                                header: header,
                                body: request.body
                            }
                        };
                    } catch(e) {
                        console.log(e);
                    }
                }
            },
            webInterface: {
                enable: false
            },
            forceProxyHttps: true,
            silent: true
        };

        const proxyServer = new AnyProxy.ProxyServer(options);




        proxyServer.on('ready', _ => resolve(output));
        proxyServer.on('error', (e) => console.error(e));
        try {
            proxyServer.start();
        } catch (e) {
            console.error(e);
            reject(e);
        }
    });
}

function getExceptionError(errors) {
    const output = [];
    for (let i = 0; i < errors.length; i++) {
        let error = errors[i];
        if (error.error) {
            error = error.error;
        }
        output.push(utils.getErrorMessage(error));
    }
    return output.sort();
}

function compareStates(expectedState, actualState) {
    if (expectedState.errors.length !== actualState.errors.length) {
        console.log(expectedState.errors.length, actualState.errors.length);
        return "DIFF_NB_ERRORS";
    }

    let expErrors = getExceptionError(expectedState.errors);
    let actErrors = getExceptionError(actualState.errors);

    for (let i = 0; i < expErrors.length; i++) {
        if (expErrors[i] != actErrors[i]) {
            console.log(expErrors[i]);
            console.log(actErrors[i]);
            return "DIFF_ERROR";
        }
    }
    return true;
}

async function reproduceRequestState(expectedState, proxy) {
    for (const url in expectedState.requests) {
        const r = expectedState.requests[url];
        delete expectedState.requests[url];
        expectedState.requests[utils.cleanRequestURL(url)] = r;
    }

    return new Promise(async resolve => {
        proxy.requestState = expectedState;
        try {
            const actualState = await collector.collectPage({
                url: expectedState.url,
                proxy: "localhost:" + proxy.port,
                collectScreenShot: false,
                timeout: 35000
            });

            resolve(compareStates(expectedState, actualState))
        } catch (e) {
            console.error(e);
            resolve("TIMEOUT");
        }
    });
}

module.exports = {
    reproduceRequestState: reproduceRequestState,
    startReproductionProxy: startProxy,
    Proxy: Proxy
};