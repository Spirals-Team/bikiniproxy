const domutils = require("domutils");
const URL = require("url");


const RepairModel = require('./RepairModel');

class HTTPHTTPS extends RepairModel {
    constructor(state, error, request) {
        super("HTTPHTTPS", 'change HTTP resources into HTTPS resources in HTTPS pages', state, error, request);
    }

    async repair() {
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
        const scripts = domutils.findAll(function (elem) {
            if (elem.type !== "script" || !elem.attribs.src) {
                return false;
            }
            return elem.attribs.src.indexOf("http:") === 0 && elem.attribs.src.indexOf("localhost") === -1;
        }, dom);

        for (const script of scripts) {
            const url = new URL.URL(script.attribs.src);
            url.protocol = "https:";
            url.searchParams.append('bikinirepair', null);
            script.attribs.src = url.toString();
        }
        this.request.body = domutils.getOuterHTML(dom);
    }

    async isToApply() {
        const mainRequest = this.state.getMainRequest();
        if (mainRequest.url != this.request.url) {
            return false;
        }
        if (mainRequest.url.indexOf("https") !== 0) {
            return false;
        }
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
        const scripts = domutils.findAll(function (elem) {
            if (elem.type !== "script" || !elem.attribs.src) {
                return false;
            }
            return elem.attribs.src.indexOf("http:") === 0 && elem.attribs.src.indexOf("localhost") === -1;
        }, dom);
        return scripts.length > 0;
    }
}

/**
 *
 * @type {HTTPHTTPS}
 */
module.exports = HTTPHTTPS;