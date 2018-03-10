const fs = require('async-file');
const URL = require('url');

const repairModels = require('../repair_models/repair_models');
const Bikiniproxy = require('../repair_models/bikiniproxy');
const stateCollector = require('DeadClick').stateCollector;
const reproductionProxy = require('DeadClick').reproductionProxy;
const utils = require('DeadClick').utils;

/**
 * @type {reproductionProxy.Proxy}
 */
let proxy = null;

/**
 * @returns {Promise<reproductionProxy.Proxy>}
 */
async function startProxy(port) {
    if (proxy === null) {
        proxy = await reproductionProxy.startReproductionProxy(port);
        console.log("start proxy " + proxy.port);
    }
    return proxy;
}

async function stopProxy() {
    if (proxy !== null) {
        console.log("close proxy");
        await proxy.close();
    }
}

(async function () {
    const proxy = await startProxy(7487);

    proxy.beforeSendRequest = async function (requestDetail) {
        const state = await utils.loadState(requestDetail.url);
        if (state != null) {
            proxy.requestState = state;
        }
    };
    proxy.onRequest = async function (request) {
        if (request.statusCode === 500) {
            const url = new URL.URL(request.url);
            if (url.searchParams.has("bikinirepair")) {
                url.searchParams.delete("bikinirepair");

                const newOption = Object.assign({}, request.requestDetail.requestOptions);
                newOption.path = url.pathname+url.searchParams;
                return {
                    requestOptions: newOption
                };
            } else {
                return request;
            }
        }
        if (request.sateRequest.contentType().toLowerCase().indexOf('html') === -1
            && request.sateRequest.contentType().toLowerCase().indexOf('javascript') === -1
            && request.sateRequest.contentType().toLowerCase().indexOf('js') === -1) {
            return request;
        }
        (new repairModels[0]).resetASTCache();
        for (const error of proxy.requestState.errors) {
            for (const RepairModel of repairModels) {
                if (error.handled) {
                    continue;
                }
                const repairModel = new RepairModel(proxy.requestState, error, request);
                const isEnable = repairModel.isEnable();
                const isToApply = await repairModel.isToApply();
                if (isEnable && isToApply) {
                    await repairModel.repair();
                    const output = {
                        url: request.url,
                        name: repairModel.name,
                        description: repairModel.description,
                        enable: isEnable,
                        isToApply: isEnable ? isToApply : false,
                        error: error
                    };
                }
            }
        }
        const bikini = new Bikiniproxy(proxy.requestState, null, request);
        if (await bikini.isToApply()) {
            await bikini.repair();
        }
        return request;
    };

})();
