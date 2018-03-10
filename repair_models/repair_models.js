const RepairModel = require('./RepairModel');

/**
 *
 * @type {RepairModel[]}
 */
module.exports = [
    require('./http_https'),
    require('./injectLibrary'),
    require('./missingDom'),
    require('./not_null'),
];