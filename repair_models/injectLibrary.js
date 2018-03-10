const RepairModel = require('./RepairModel');

class NotNull extends RepairModel {
    constructor(state, error, request) {
        super('Inject', 'inject well known libraries', state, error, request);
        this.supportedLibraries = {
            "jquery" : "http://localhost:8080/js/jquery.js",
            "$" : "http://localhost:8080/js/jquery.js",
            "angular" : "http://localhost:8080/js/angular.js",
            "_" : "http://localhost:8080/js/underscore.js",
            "require": "http://localhost:8080/js/require.js"
        }
    }

    async repair() {
        const lib = this.supportedLibraries[this.error.getVariable().toLowerCase()];
        if (lib == null) {
            return;
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

        await this.injectInHead('<script type="text/javascript" src="' + lib + '"></script>', this.request);
        this.description = "Inject " + this.error.getVariable() + " in the main page";
        this.error.handled = true;
    }

    async isToApply() {
        if (this.state.getMainRequest().url != this.request.url) {
            return false;
        }
        const variable = this.error.getVariable();
        if (variable == null) {
            return false;
        }
        return this.supportedLibraries[variable.toLowerCase()] != null
    }
}
module.exports = NotNull;