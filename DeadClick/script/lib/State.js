const URL = require('url');

const Request = require('./Request');
const Error = require('./Error');

class State {
    constructor(id, url) {
        /**
         * @type {string}
         */
        this.id = id;
        /**
         * @type {string}
         */
        this.url = url;
        /**
         * @type {Request[]}
         */
        this.requests = [];
        /**
         * @type {Error[]}
         */
        this.errors = [];
        /**
         * @type {Date}
         */
        this.date = new Date();
    }


    getMainRequest() {
        /**
         * @param {Request} request
         * @returns {string}
         */
        function getRedirectionUrl(request) {
            let url = new URL.URL(request.url);

            let redirectionUrl = request.headers.location;
            if (redirectionUrl == null) {
                return request.url;
            }
            if (redirectionUrl.indexOf('http') === 0) {
                return redirectionUrl;
            }
            if (redirectionUrl.indexOf('//:') === 0) {
                return redirectionUrl;
            }
            url.pathname = redirectionUrl
            return url.href;
        }

        var self = this;

        function getRequest(url) {
            const r = self.getRequests(url);
            if (r.length === 1) {
                if (r[0].isRedirection()){
                    return getRequest(getRedirectionUrl(r[0]));
                } else {
                    return r[0];
                }
            } else if (r.length > 1) {
                r.sort(function (a, b) {
                    return a.date - b.date;
                });
                return r[r.length - 1];
            }
            return null;
        }

        return getRequest(this.url);
    }


    getRequests(url) {
        function urlMatch(urlA, urlB) {
            if (urlA.hostname !== urlB.hostname) {
                return false;
            }
            if (urlA.protocol !== urlB.protocol) {
                return false;
            }
            if (decodeURI(urlA.pathname) != decodeURI(urlB.pathname)) {
                return false;
            }
            if (urlA.searchParams == null && urlB.searchParams != null) {
                return false;
            }
            if (urlA.searchParams != null) {
                for (const [name, value] of urlA.searchParams) {
                    if (!urlB.searchParams.has(name)) {
                        return false;
                    }
                }
                for (const [name, value] of urlB.searchParams) {
                    if (!urlA.searchParams.has(name)) {
                        return false;
                    }
                }
            }
            return true;
        }

        const output = [];
        url = URL.parse(url);
        url.searchParams = new URL.URLSearchParams(url.search);
        url.searchParams.sort();
        // url = require('./utils').cleanRequestURL(url);
        for (let r of this.requests) {
            const tempURL = URL.parse(r.url);
            tempURL.searchParams = new URL.URLSearchParams(tempURL.search);
            tempURL.searchParams.sort();
            if (urlMatch(url, tempURL)) {
                output.push(r);
            }
        }
        return output
    }
}

module.exports = State;