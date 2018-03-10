const fs = require('async-file');
const url = require('url');
const utils = require('../lib/utils');

function getMedian(args) {
    if (!args.length) {
        return 0;
    }
    const numbers = args.slice(0).sort((a, b) => a - b);
    const middle = Math.floor(numbers.length / 2);
    const isEven = numbers.length % 2 === 0;
    return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
}

let nbReproduced = 0;
let nbRequest = 0;
let nbError = 0;
const hosts = new Set();
const contentType = {};
const contentLength = [];
let contentLengthSum = 0;
let avgSizePage = [];
const nbRequestPerPage = {};
const nbException = {};
const boxplot = [];
const listurl = {};

const errors = [];

function cleanErrorMessage(errorMessage) {
    if (errorMessage.indexOf((" is not defined")) != -1) {
        return "XXX is not defined";
    } else if (errorMessage.indexOf(("Cannot read property ")) != -1) {
        return "Cannot read property XXX of null";
    } else if (errorMessage.indexOf((" is not a function")) != -1) {
        return "XXX is not a function";
    } else if (errorMessage.indexOf((" is not a constructor")) != -1) {
        return "XXX is not a constructor";
    } else if (errorMessage.indexOf(("Cannot set property ")) != -1) {
        return "Cannot set property XXX of null";
    } else if (errorMessage.indexOf(("Unexpected token ")) != -1 && errorMessage.indexOf("in JSON at position") != -1) {
        return "Unexpected token X in JSON at position Y";
    } else if (errorMessage.indexOf(("Unexpected token ")) != -1 ) {
        return "Unexpected token X";
    } else if (errorMessage.indexOf((" from accessing a cross-origin frame.")) != -1 ) {
        return "Blocked a frame with origin XXX from accessing a cross-origin frame.";
    }
    return errorMessage;
}

(async () => {
    try {
        const requestIDs = await fs.readdir(utils.requestsPath);
        for (let i = 0; i < requestIDs.length; i++) {
            const state = await utils.loadState(requestIDs[i]);

            if (state.reproduced !== true) {
                await fs.delete(utils.requestsPath + requestIDs[i]);
                continue;
            }

            errors.push({
                url: state.url,
                nbRequests: state.requests.length,
                errors: state.errors.map(e => {
                    return e.getMessage();
                })
            });

            let sizePage = 0;

            listurl[state.url] = state.errors.length;

            nbReproduced++;

            let nbJSRequestPage = 0;

            // requests
            for (const request of state.requests) {
                if (request.url.startsWith("data:image")) {
                    continue;
                }
                if (request.headers) {
                    if (request.headers["content-type"] != null) {
                        let type = request.contentType();
                        const split_type = type.split("/");
                        if (split_type.length > 1) {
                            type = split_type[1];
                        }
                        type = type.trim();
                        if (contentType[type] == null) {
                            contentType[type] = 0;
                        }
                        contentType[type]++;
                        if (type.indexOf(("javascript")) !== -1) {
                            nbJSRequestPage++;
                        }
                    }
                    if (request.headers["content-length"] != null) {
                        const length = parseInt(request.headers["content-length"]);
                        contentLength.push(length);
                        contentLengthSum += length;
                        sizePage += length;
                    }
                }
            }

            // errors
            for (let i = 0; i < state.errors.length; i++) {
                if (state.errors[i].error) {
                    state.errors[i] = state.errors[i].error;
                }
                const error = state.errors[i];
                try {
                    const errorMessage = cleanErrorMessage(error.getMessage());
                    if (nbException[errorMessage] == null) {
                        nbException[errorMessage] = 0;
                    }
                    nbException[errorMessage]++;
                } catch (e) {
                    console.error(e);
                }
            }

            boxplot.push(state.errors.length);

            //await fs.writeTextFile(utils.requestsPath + requestIDs[i] + '/request.json', JSON.stringify(state));

            const nbRequestPage = Object.keys(state.requests).length;
            if (!nbRequestPerPage[nbJSRequestPage]) {
                nbRequestPerPage[nbJSRequestPage] = 0;
            }
            nbRequestPerPage[nbJSRequestPage]++;
            avgSizePage.push(sizePage);
            hosts.add(new url.parse(state.url).host);
            nbError += state.errors.length;
            nbRequest += nbRequestPage;
        }

        await fs.writeTextFile(utils.requestsPath + '../errors.json', JSON.stringify(errors));

        await plotObject("requestsPerPage.dat", nbRequestPerPage, -1, function(a, b) {return a[0] - b[0];});
        await plotObject("requestByContentType.dat", contentType, 9);
        await plotObject("nbException.dat", nbException, 10);
        await plotObject("boxplot.dat", boxplot, -1);
        await plotObject("urls.csv", listurl, -1);

        console.log("nbReproduced", nbReproduced);
        console.log("nbPage", requestIDs.length);
        console.log("nbRequest", nbRequest);
        console.log("nbError", nbError);
        console.log("nbHost", hosts.size);
        console.log("contentLength avg request", contentLengthSum / nbRequest);
        console.log("contentLength median request", getMedian(contentLength));
        console.log("contentLength avg page", contentLengthSum / requestIDs.length);

        console.log("contentLength median page", getMedian(avgSizePage));
    } catch (e){
        console.error(e);
    }finally {
        process.exit(0);
    }
})();

async function plotObject(output, o, limit, sort) {
    return new Promise((resolve, reject) => {
        let stillToAdd = limit;
        const sortable = [];
        for (const k in o) {
            if (stillToAdd == 0) {
                break;
            }
            sortable.push([k, o[k]]);
            stillToAdd--;
        }
        if (sort == null) {
            sort = function(a, b) {return b[1] - a[1];};
        }
        sortable.sort(sort);

        let data = "";
        for (const v of sortable) {
            let x = v[0];
            if (isNaN(x)) {
                x = JSON.stringify(x);
            }
            data += x + "\t" + v[1] + "\n";
        }
        fs.writeFile(output, data, 'utf8', err => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    });
}