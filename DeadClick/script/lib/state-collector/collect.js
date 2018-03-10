const uuidv4 = require('uuid/v4');
const md5 = require('md5');
const fs = require('async-file');
const Sate = require('../State');
const Request = require('../Request');
const Error = require('../Error');
const utils = require('../utils');
const tmp = require('tmp');

async function onResponse(response) {
    let data = '';
    let url = response.url();
    const status = response.status();

    if (!url.startsWith('data:') && response.ok()) {
        try {
            data = await response.buffer();
        } catch (e) {
            // ignore
            console.error(status, url, e.message);
        }
    }
    let postData = null;
    const method = response.request().method();
    if (method === "POST") {
        try {
            postData = await response.request().postData();
        } catch (e) {
            // ignore
            console.error(status, url, e.message);
        }
    }
    return new Request(uuidv4(), null, url, status, method, response.headers(), postData, data);
}

async function onPageError(e) {
    const error = new Error();
    Object.assign(error, e);
    return error;
}

async function saveRequest(request) {
    let requestPath = utils.requestsPath + request.id;
    if (request.errors.length === 0) {
        requestPath = utils.requestsPath + '../no-error/' + request.id;
        await fs.delete(request.screenshot);
    }
    await fs.createDirectory(requestPath);

    for (let i = 0; i < request.requests.length; i++) {
        const r = request.requests[i];
        delete r.used;

        if (request.errors.length > 0) {
            await fs.writeFile(requestPath + '/' + r.id, r.body);
        }
        delete r.body;
    }
    if (request.errors.length > 0) {
        await fs.rename(request.screenshot, requestPath + "/screenshot.png");
    }
    delete request.screenshot;
    await fs.writeFile(requestPath + '/request.json', JSON.stringify(request));
}

async function collectPage(opts = {}) {
    const defaults = {
        url : null,
        proxy: null,
        collectScreenShot: true,
        timeout: 25000,
        waitTime: 7000,
        useragent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36',
        screenWidth: 1280,
        screenHeight: 600
    };
    opts = Object.assign({}, defaults, opts);
    return new Promise(async (resolve, reject) => {
        const browser = await utils.getBrowser(opts.proxy);

        const output = new Sate(md5(opts.url), opts.url);

        const page = await browser.newPage();

        try {
            await page.setUserAgent(opts.useragent);
            //await page.setRequestInterception(true);
            await page.setViewport({width: opts.screenWidth, height: opts.screenHeight});

            // collect javascript error
            page._client.on('Runtime.exceptionThrown', async exception => {
                const error = await onPageError(exception);
                if (error.getMessage() !== "Network error.") {
                    output.errors.push(error);
                }
            });

            // collect response
            page.on('response', async response => {
                const request = await onResponse(response);
                request.parentId = output.id;
                output.requests.push(request);
            });

            await page.goto(opts.url, {
                waitUntil: 'domcontentloaded',
                timeout: opts.timeout
            });
            await page.waitFor(opts.waitTime);
            if (opts.collectScreenShot) {
                try {
                    await new Promise((resolve,reject) => {
                        tmp.file({postfix: ".png"}, async (err, path) => {
                            output.screenshot = path;
                            try {
                                await page.screenshot({path: path, fullPage: true});
                            } catch (e) {
                                return reject(e);
                            }
                            resolve();
                        });
                    });
                    await page.waitFor(1000);
                } catch (e) {
                    console.error("error", e);
                    return reject(e);
                }
            }
        } catch (e) {
            console.error(e);
            return reject(e);
        } finally {
            browser.nbRequest++;
            try {
                await page.close();
            } catch (_) {
            }
        }
        resolve(output);
    });
}

module.exports = {
    collectPage: collectPage,
    serializeState: saveRequest
};