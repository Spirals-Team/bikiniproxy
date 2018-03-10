const fs = require('async-file');
const utils = require('../utils');


function randomBetween(min, max) {
    if (min > max) {
        const tmp = max;
        max = min;
        min = tmp;
    }
    return Math.floor(Math.random()*(max-min+1)+min);
}

let words = null;
async function getRandomWord(dictionary) {
    if (words === null) {
        words = (await fs.readTextFile(dictionary)).split("\n");
    }
    return words[randomBetween(0, words.length - 1)];
}

async function getWords(dictionary, min, max) {
    const words = [];
    const nbWords = randomBetween(min, max);
    for(let i=0;i<nbWords;i++){
        words.push(await getRandomWord(dictionary));
    }
    return words;
}
async function crawl(opts = {}) {
    const defaults = {
        pageRequestCallback : null,
        endCallback: null,
        minNbWords: 2,
        maxNbWords: 2,
        limitRequest: 20,
        dictionary: 'english.txt',
        timeout: 25000,
        useragent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36',
        screenWidth: 1280,
        screenHeight: 600
    };
    opts = Object.assign({}, defaults, opts);

    const output = new Set();

    if (typeof opts.limitRequest === "number") {
        const maxURLs = opts.limitRequest;
        opts.limitRequest = function () {
            return output.size > maxURLs;
        }
    }

    const browser = await utils.getBrowser();
    try {
        while (!opts.limitRequest()) {
            const page = await browser.newPage();
            try {

                const words = await getWords(opts.dictionary, opts.minNbWords, opts.maxNbWords);
                await page.setUserAgent(opts.useragent);
                await page.setViewport({width: opts.screenWidth, height: opts.screenHeight});

                await page.goto("https://www.google.com/search?q=" + encodeURIComponent(words.join(" ")), {
                    waitUntil: 'domcontentloaded',
                    timeout: opts.timeout
                });
                await page.evaluate(_ => {
                    window.scrollBy(0, window.innerHeight);
                });
                await page.waitFor(3000);
                const hrefs = await page.$$eval('.r a', hrefs => hrefs.map((a) => {
                    return a.href;
                }));
                hrefs.forEach(e => output.add(e));
                if (opts.pageRequestCallback != null) {
                    try {
                        await opts.pageRequestCallback(hrefs);
                    } catch (e) {
                        console.error(e);
                    }
                }
            } finally {
                browser.nbRequest++;
                try {await page.close();} catch (_){}
            }
        }
        if (opts.endCallback != null) {
            try {
                await opts.endCallback(output);
            } catch (e) {
                console.error(e);
            }
        }
    } finally {
        await utils.closeBrowser();
    }
}

module.exports = {
    crawl: crawl
};