const puppeteer = require('puppeteer');
const md5 = require('md5');
const fs = require('async-file');

const Error = require('./Error');
const State = require('./State');
const Request = require('./Request');

let browser = null;
async function close() {
    if (browser !== null) {
        await browser.close();
        browser = null;
    }
}

async function getBrowser(proxy) {
    if (browser != null && (browser.nbRequest === 0 || browser.nbRequest % 100 !== 0)) {
        return browser;
    }
    await close();
    const args = [];
    if (proxy) {
        args.push('--proxy-server=' + proxy);
        args.push('--ignore-certificate-errors')
    }

    browser = await puppeteer.launch({
        args: args,
        ignoreHTTPSErrors: !!proxy,
        headless: true
    });

    browser.nbRequest = 0;

    return browser;
}

function getErrorMessage(error) {
    let exceptionDetails = error.exceptionDetails;
    if (exceptionDetails.exception) {
        let exception = exceptionDetails.exception;
        if (exception.preview) {
            let properties = exception.preview.properties;
            for (const p of properties) {
                if (p.name == "message") {
                    return p.value;
                }
            }
            return exception.preview.description.replace(exception.className + ": ", "");
        } else if (exception.value) {
            return exception.value;
        } else {
            return exception.description;
        }
    } else if (exceptionDetails.text) {
        return exceptionDetails.text;
    }
    throw new Error(JSON.stringify(error));
}

function cleanRequestURL(url) {
    return url.replace(/^https?:\/\//, "").replace(/(&|\?)cache([0-9]+)min=([0-9]+)/, "").replace(/(&|\?)s?ts=([0-9]+)/, "").replace(/(&|\?)s?t=([a-z0-9]+)/, "");
}

/**
 *
 * @param url
 * @returns {Promise<State>}
 */
async function loadState(url) {
    // if md5 of the url
    if (!await fs.exists(module.exports.requestsPath + url)) {
        url = md5(url);
    }
    if (!await fs.exists(module.exports.requestsPath + url)) {
        return null;
    }
    const data = JSON.parse(await fs.readTextFile(module.exports.requestsPath + url + '/request.json'));
    const state = new State(data.id, data.url);
    state.errors = data.errors.map(e => {
        const error = new Error();
        Object.assign(error, e);
        return error;
    });
    state.date = new Date(data.date);
    state.reproduced = data.reproduced;

    const parentId = url;
    let requests = [];
    if (Array.isArray(data.requests)) {
        requests = data.requests.map(r => {
            const o = new Request(r.id, parentId, r.url, r.status, r.method, r.headers, r.postData, r.body);
            o.date = new Date(r.date);
            return o;
        })
    } else {
        for (let url in data.requests) {
            for (let r of data.requests[url]) {
                let request = new Request(r.id, parentId, url, r.status, r.method, r.headers, r.postData, r.body);
                request.date = new Date(r.date);
                requests.push(request)
            }
        }
    }
    state.requests = requests;
    return state;
}

module.exports = {
    getBrowser: getBrowser,
    closeBrowser: close,
    cleanRequestURL: cleanRequestURL,
    getErrorMessage: getErrorMessage,
    loadState: loadState,
    requestsPath: __dirname + '/../../webtraces/'
};