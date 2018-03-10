class Error {
    getMessage() {
        let exceptionDetails = this.exceptionDetails;
        if (exceptionDetails.exception) {
            let exception = exceptionDetails.exception;
            if (exception.preview) {
                let properties = exception.preview.properties;
                for (const p of properties) {
                    if (p.name === "message") {
                        return p.value;
                    }
                }
                return exception.preview.description.replace(exception.className + ": ", "");
            } else if (exception.value) {
                return exception.value;
            }
            return exception.description;
        }
        return exceptionDetails.text;
    }

    getVariable() {
        const regexs = [
            /Cannot read property '([^']+)' of /,
            /Cannot set property '([^']+)' of /,
            /([^ ]+) is not defined/,
            /([^ ]+) is not a function/,
            /([^ ]+) is not a constructor/,
            /Syntax error, unrecognized expression: (.+)/,
            /Bootstrap's JavaScript requires (.+)/,
            /Unexpected token ([^ ]+).*/
        ];
        const message = this.getMessage();
        for (const r of regexs) {
            const results = r.exec(message);
            if (results != null) {
                return results[1];
            }
        }
        return null;
    }
}

module.exports = Error;