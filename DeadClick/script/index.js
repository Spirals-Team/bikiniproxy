const collect = require('./lib/state-collector/collect');
const reproduce = require('./lib/reproduction-proxy/reproduce');
const urlFinder = require('./lib/url-finder/urlfinder');
const utils = require('./lib/utils');
const Error = require('./lib/Error');
const State = require('./lib/State');
const Request = require('./lib/Request');

module.exports = {
    urlFinder: urlFinder,
    stateCollector: collect,
    reproductionProxy: reproduce,
    utils: utils,
    Error: Error,
    Request: Request,
    State: State
};