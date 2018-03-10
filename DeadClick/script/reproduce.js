const fs = require('async-file');
const utils = require('./lib/utils');
const reproduce = require('./lib/reproduction-proxy/reproduce');

(async () => {
    let proxy = null;
    try {
        proxy = await reproduce.startReproductionProxy();

        const requestIDs = await fs.readdir(utils.requestsPath);
        for (let i = 0; i < requestIDs.length; i++) {
            const expectedState = await utils.loadState(requestIDs[i]);
            if (expectedState.reproduced != null) {
                continue;
            }

            expectedState.reproduced = await reproduce.reproduceRequestState(expectedState, proxy);
            fs.writeTextFile(utils.requestsPath + requestIDs[i] + '/request.json', JSON.stringify(expectedState));
            console.log(i + "/" + requestIDs.length + " (" + parseInt(i*100/requestIDs.length) + "%)", expectedState.url, expectedState.reproduced);
        }
    } finally {
        await utils.closeBrowser();
        if (proxy !== null) {
            await proxy.close();
        }
        process.exit(0);
    }
})();