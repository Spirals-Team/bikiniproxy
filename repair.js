const md5 = require('md5');
const fs = require('async-file');

const collect = require('DeadClick').stateCollector;
const reproduce = require('DeadClick').reproductionProxy;
const utils = require('DeadClick').utils;
const Error = require('DeadClick').Error;
const repairService = require('./server/repairService');

(async () => {
    utils.requestsPath = __dirname + '/new_collect/';

    await repairService.startProxy(8008);

    function containsError(result, messsage) {
        for (const error of result.newErrors) {
            if (error.getMessage().indexOf(messsage) !== -1) {
                return true;
            }
        }
        return false;
    }
    const results = JSON.parse((await fs.readTextFile('results.json')) || {});
    try {
        let count = 0;
        let requestIDs = await fs.readdir(utils.requestsPath);
        for (let i = 0; i < requestIDs.length; i++) {
            const expectedState = await utils.loadState(requestIDs[i]);

            if (expectedState.reproduced !== true) {
                continue;
            }
            const result = results[requestIDs[i]];
            if (result) {
                result.newErrors = result.newErrors.map(e => {
                    const error = new Error();
                    Object.assign(error, e);
                    error.message = error.getMessage();
                    return error;
                });
                result.oldErrors = result.oldErrors.map(e => {
                    const error = new Error();
                    Object.assign(error, e);
                    error.message = error.getMessage();
                    return error;
                });
                if (!containsError(result, "Bootstrap's JavaScript requires ")) {
                    //continue;
                }
            }

            if (result && (result.handled || result.unhandled)) {
                continue;
            }
            let conti = false;
            for (rs of result.repairModels) {
                conti = rs.name == "missingDOMElement";
                if (conti) break;
            }
            if (!conti) continue;
            const errors = expectedState.errors;
            //expectedState.errors = errors.concat(result.newErrors);
            const repairObj = {
                state: expectedState,
                status: "created"
            };
            let unhandled = true;
            console.log(expectedState.url)
            await repairService.repair(repairObj);
            for (const error of errors) {
                console.log(error.getMessage() + ' ' + (error.handled?'repaired':''))
                unhandled = unhandled && !error.handled;
            }
            console.log(i + "/" + requestIDs.length + " (" + parseInt(i*100/requestIDs.length) + "%)", expectedState.url, "# error " + repairObj.state.errors.length + " " + errors.length);
            results[requestIDs[i]] = {
                oldErrors: errors,
                newErrors: repairObj.state.errors,
                handled: repairObj.state.errors.length === 0,
                unhandled: unhandled,
                moreError: repairObj.state.errors.length > errors.length,
                partially: repairObj.state.errors.length !== 0 && !unhandled && repairObj.state.errors.length < errors.length,
                repairModels: repairObj.repairModels
            };
            await fs.writeTextFile('results.json', JSON.stringify(results, null, 2));
        }
        console.log(count);
    } catch (e) {
        console.error(e);
    } finally {
        process.exit(0);
    }
})();