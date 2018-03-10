const md5 = require('md5');
const fs = require('async-file');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/deadlock');
const Exception = require('./app/models/exception');
const collect = require('./lib/state-collector/collect');
const utils = require('./lib/utils');


function isToIgnore(url) {
    return url.indexOf("recaptcha") > -1 || url.indexOf("google.com") > -1;
}

async function isAlreadyCollected(url) {
    return await fs.exists(utils.requestsPath + '/' + md5(url)) || await fs.exists(utils.requestsPath + '/../no-error/' + md5(url));
}


(async () => {
    const cursor = Exception.aggregate([{
        $lookup: {
            from: "pages",
            localField: "pageId",
            foreignField: "uuid",
            as: "pages"
        }
    }]).cursor({batchSize: 1}).exec();

    let i = 0;
    cursor.eachAsync(async function(exception) {
        console.log(i++);
        for (let j = 0; j < exception.pages.length; j++) {
            const page = exception.pages[j];

            console.log(page.url);

            if (isToIgnore(page.url) || await isAlreadyCollected(page.url)) {
                continue;
            }

            try {
                const state =await collect.collectPage({url: page.url});
                if (state.errors.length > 0) {
                    await collect.serializeState(state);
                }
            } catch (e) {
                console.error("Error: " + page.url, e);
            }
        }
    }).then(async _ => {
        mongoose.disconnect();
        await utils.closeBrowser();
    })
})();