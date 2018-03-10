const fs = require('async-file');

class Request {
    constructor(id, parentId, url, status, method, headers={}, postData, body) {
        /**
         * @type {string}
         */
        this.id = id;
        /**
         * @type {string}
         */
        this.parentId = parentId;
        /**
         * @type {string}
         */
        this.url = url;
        /**
         * @type {number}
         */
        this.status = status;
        /**
         * @type {string}
         */
        this.method = method;
        /**
         *
         * @type {Object.<{string}, {string}>}
         */
        this.headers = headers;
        /**
         * @type {string}
         */
        this.postData = postData;
        /**
         * @type {string}
         */
        this.body = body;
        /**
         * @type {Date}
         */
        this.date = new Date();
    }

    async getBody() {
        if (this.body != null) {
            return this.body;
        }
        const path = require('./utils').requestsPath + '/' + this.parentId + '/' + this.id;
        if (this.contentType().indexOf("test") === 0) {
            this.body = await fs.readTextFile(path)
        } else {
            this.body = await fs.readFile(path)
        }
        return this.body;
    }

    /**
     * @returns {boolean}
     */
    isRedirection() {
        return [301, 302, 303, 307, 308].includes(this.status);
    }

    contentType() {
        let contentType = this.headers['content-type'];

        if (contentType == null || contentType === undefined) {
            if (this.url.indexOf(".js") !== -1) {
                contentType = "text/javascript";
            } else if (this.url.indexOf(".css") !== -1) {
                contentType = "text/css";
            } else if (this.url.indexOf(".json") !== -1) {
                contentType = "text/json";
            } else if (this.url.indexOf(".html") !== -1) {
                contentType = "text/html";
            } else {
                contentType = 'text/plain';
            }
        }
        if (contentType.indexOf("\n") !== -1) {
            contentType = contentType.split("\n")[0];
        }
        contentType = contentType.replace(/; ?charset=.*/i, "");
        if (contentType === 'js') {
            contentType = "text/javascript";
        }
        return contentType;
    }
}

module.exports = Request;