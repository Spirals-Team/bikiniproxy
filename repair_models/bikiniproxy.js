const RepairModel = require('./RepairModel');

class BikiniProxy extends RepairModel {
    constructor(state, error, request) {
        super("BikiniProxy", 'inject bikiniproxy script in the main page', state, error, request);
    }

    async repair() {
        const host = "localhost:8080";
        const script = '<script type="text/javascript" src="http://' + host + '/js/bikinirepair.js"></script>';
        await this.injectInHead(script, this.request);
    }

    async isToApply() {
        return this.state.getMainRequest().url == this.request.url;
    }
}

/**
 * @type {BikiniProxy}
 */
module.exports = BikiniProxy;