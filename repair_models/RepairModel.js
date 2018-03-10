const htmlparser = require("htmlparser2");
const domutils = require("domutils");

const State = require('DeadClick').State;
const Request = require('DeadClick').Request;
const Error = require('DeadClick').Error;

let astCache = {};

class RepairModel {
    /**
     * @param {string} name
     * @param {string} description
     * @param {State} state
     * @param {Error} error
     * @param {Request} request
     */
    constructor(name, description, state, error, request) {
        this.name = name;
        this.description = description;
        /**
         * @type {State}
         */
        this.state = state;
        /**
         * @type {Error}
         */
        this.error = error;
        /**
         * @type {Request}
         */
        this.request = request;
    }

    resetASTCache() {
        astCache = {};
    }

    getASTCache() {
        return astCache;
    }

    async getDOM(src) {
        return new Promise((resolve, reject) => {
            const handler = new htmlparser.DomHandler(function (err, dom) {
                if (err) return  reject(err);
                resolve(dom);
            }, {xmlMode: true, normalizeWhitespace: false, recognizeCDATA: true, withStartIndices:true,withEndIndices:true});
            const parser = new htmlparser.Parser(handler, {decodeEntities: true});
            parser.write(src);
            parser.end();
        });
    }

    /**
     * Change the urls of HTTP blocked resources in HTTPS page
     * @param request the current request
     */
    async repair() {

    }

    /**
     * Is the repair pattern is applicable
     */
    async isToApply() {
        return false;
    }

    async injectInHead(text) {
        let dom = null;
        if (this.getASTCache()[this.request.url]) {
            dom = this.getASTCache()[this.request.url].ast;
        } else {
            dom = await this.getDOM(this.request.body);
            this.getASTCache()[this.request.url] = {
                src: this.request.body,
                ast: dom
            };
        }
        const head = domutils.findOne(function (elem) {
            return elem.name === "head";
        }, dom);

        let elem = await this.getDOM(text);
        domutils.prepend(head.children[0], elem[0]);

        this.request.body = domutils.getOuterHTML(dom);
    }

    /**
     * @returns {Promise<boolean>}
     */
    isEnable() {
        return true;
    }
}

module.exports = RepairModel;