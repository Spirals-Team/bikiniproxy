const babylon = require("babylon");
const generate = require("babel-generator").default;
const traverse = require('babel-traverse').default;
const t = require('babel-types');
const domutils = require("domutils");

const RepairModel = require('./RepairModel');

class NotNull extends RepairModel {
    constructor(state, error, request) {
        super('Wrap', 'Defines null element to prevent null dereference.', state, error, request);
        this.supportedErrors = [
            /Cannot read property '[^']+' of /,
            /Cannot set property '[^']+' of /,
            / is not a function/,
            /[^ ]+ is not defined/
        ]
    }

    async repair() {
        const self =this;
        function createNullElement(error, statement, expressions) {
            let condition = null;
            for (const expression of expressions) {
                const cond =t.logicalExpression("||", t.binaryExpression('==', t.unaryExpression('typeof',expression), t.stringLiteral('undefined')),t.binaryExpression("==", expression, t.nullLiteral()));
                if (condition != null) {
                    condition = t.logicalExpression("&&", condition, cond)
                } else {
                    condition = cond;
                }
            }
            const temp = t.ifStatement(condition, t.blockStatement([t.expressionStatement(t.assignmentExpression("=", expressions[0], t.objectExpression([])))]));
            temp.bikiniproxy = true;
            temp.shouldSkip = true;
            try {
                statement.insertBefore(temp);
                error.handled = true;
                self.name = "Initialize";
            } catch (e) {
                console.log(statement);
                console.error(e);
            }
        }

        function wrapNotDefinedIf(error, statement, expressions) {
            let condition = null;
            for (const expression of expressions) {
                const cond = t.logicalExpression("&&", t.binaryExpression('!=', t.unaryExpression('typeof',expression), t.stringLiteral('undefined')),expression)
                if (condition != null) {
                    condition = t.logicalExpression("&&", condition, cond)
                } else {
                    condition = cond;
                }
            }
            const temp = t.ifStatement(condition, t.blockStatement([statement.node]));
            temp.bikiniproxy = true;
            temp.shouldSkip = true;
            try {
                statement.replaceWith(temp);
                error.handled = true;
                self.name = "WrapIsNotUndefined";
            } catch (e) {
                console.log(statement);
                console.error(e);
            }
        }

        function wrapNotFunctionIf(error, statement, expressions) {
            let condition = null;
            for (const expression of expressions) {
                const cond = t.binaryExpression('==', t.unaryExpression('typeof',expression), t.stringLiteral('function'));
                if (condition != null) {
                    condition = t.logicalExpression("&&", condition, cond)
                } else {
                    condition = cond;
                }
            }
            const temp = t.ifStatement(condition, t.blockStatement([statement.node]));
            temp.bikiniproxy = true;
            temp.shouldSkip = true;
            try {
                statement.replaceWith(temp);
                error.handled = true;
                self.name = "WrapIsFunction";
            } catch (e) {
                console.log(statement);
                console.error(e);
            }
        }

        function repairAST(error, ast, path) {
            const variable = error.getVariable();
            if (t.isIfStatement(path.node)) {
                path.traverse({
                    Identifier: p => {
                        if (p.node.name == variable) {
                            path = p;
                            p.stop();
                        }
                    }
                });
            }
            let node = path.node;
            const message = error.getMessage();
            if (message.indexOf('is not a function') !== -1) {
                wrapNotFunctionIf(error, path.getStatementParent(), [path.find(p => p.isCallExpression()).node.callee]);
            } else if (message.indexOf('Cannot set property') !== -1 ||
                message.indexOf('Cannot read property') !== -1) {
                if (t.isMemberExpression(path.node)) {
                    createNullElement(error, path.getStatementParent(), [node.object]);
                } else if (t.isAssignmentExpression(path.parent)) {
                    createNullElement(error, path.getStatementParent(), [node.object]);
                } else if (t.isMemberExpression(path.parent)) {
                    if (t.isCallExpression(path.parent.object)) {
                        wrapNotDefinedIf(error, path.getStatementParent(), [path.parent.object]);
                    } else {
                        createNullElement(error, path.getStatementParent(), [path.parent.object]);
                    }
                }
            } else if (message.indexOf('is not defined') !== -1) {
                let tmp = null;
                path.traverse({
                    Identifier: p => {
                        if (p.node.name == variable) {
                            tmp = p.node;
                            p.stop();
                        }
                    }
                });
                if (tmp != null) {
                    node = tmp;
                } else {
                    if (t.isExpressionStatement(node)) {
                        node = node.expression;
                    }
                    if (t.isCallExpression(node)) {
                        node = node.callee;
                    }
                    if (t.isMemberExpression(node)) {
                        node = node.object;
                    }
                }
                wrapNotDefinedIf(error, path.getStatementParent(), [node]);
            } else if (t.isMemberExpression(path.parent)) {
                createNullElement(error, path.getStatementParent(), [path.parent.object]);
            } else if (t.isAssignmentExpression(path.parent)) {
                createNullElement(error, path.getStatementParent(), [node.object]);
            }
            const output = new generate(ast, {
                retainLines: false,
                compact: 'auto',
                concise: false
            }, '');
            return output.code;
        }


        let element = null;
        try {
            element = await this.getElementFromError(this.error);
        } catch(e) {
            console.error(e);
        }
        if (element == null || element.element == null) {
            return;
        }
        if (element.dom) {
            element.htmlElement.data = "\n" + repairAST(this.error, element.ast, element.element);
            this.request.body = domutils.getOuterHTML(element.dom);
        } else {
            this.request.body = repairAST(this.error, element.ast, element.element);
        }
    }

    /**
     * @param {Error} error
     */
    async getElementFromError(error) {
        const self = this;
        async function getRequest(url) {
            const requests =  await self.state.getRequests(url);
            for (const r of requests) {
                if (r.isRedirection()) {
                    continue;
                }
                return r;
            }
        }

        function getElementInAST(ast, element) {
            let output = null;
            let stop = false;
            traverse(ast, {
                enter(path) {
                    if (stop) {
                        return;
                    }
                    const loc = path.node.loc;
                    if (loc == null) {
                        path.skip();
                        return;
                    }
                    if (t.isProgram(path.node)) {
                        return;
                    }
                    if (loc.start.line > element.line || loc.end.line < element.line) {
                        path.skip();
                    } else {
                        let column = loc.start.column;
                        if (t.isAssignmentExpression(path.parent)) {
                            column = loc.end.column + path.parent.operator.length;
                        }
                        if (t.isExpressionStatement(path.node)) {
                            return;
                        }
                        if (loc.start.line === element.line && (column === element.columnNumber || t.isIdentifier(path.node, {name: error.getVariable()}))) {
                            output = path;
                            path.stop();
                            stop = true;
                        }
                    }
                }
            });
            return output;
        }

        if (error.exceptionDetails.stackTrace == null) {
            return null;
        }

        const stackTrace = error.exceptionDetails.stackTrace.callFrames[0];
        let line = stackTrace.lineNumber + 1;
        let columnNumber = stackTrace.columnNumber;
        const url = error.exceptionDetails.url?error.exceptionDetails.url:this.state.getMainRequest().url;
        const r = await getRequest(url);
        const originalSrc = (await r.getBody()).toString();

        const src = this.request.body.toString();

        function findScriptInDOM(dom) {
            const scripts = domutils.findAll(function (elem) {
                const newLinesStart = (originalSrc.substr(0, elem.startIndex).match(/\n/g) || []);
                const newLinesEnd = (originalSrc.substr(0, elem.endIndex).match(/\n/g) || []);
                elem.startLine = newLinesStart.length + 1;
                elem.endLine = newLinesEnd.length + 1;

                if (elem.attribs.onload) {
                    const nbLineBeforeOnLoad = (originalSrc.substring(elem.startIndex, originalSrc.indexOf("onLoad", elem.startIndex)).match(/\n/g) || []).length;
                    return (elem.startLine + nbLineBeforeOnLoad === line);
                }
                if (elem.type !== "script" || elem.children.length == 0) {
                    return false;
                }
                return line >= elem.startLine && line <= elem.endLine;
            }, dom);

            if (scripts.length === 0) {
                console.log(stackTrace);
                return null;
            }
            line -= scripts[0].startLine - 1;
            if (scripts[0].attribs.onload) {
                console.error("not handled element in onload");
                return null;
            }
            const script = originalSrc.substring(scripts[0].children[0].startIndex, scripts[0].endIndex - 8);
            if (script[0] !== '\n' && script[0] !== '\t' && script[0] !== '\r' && script.indexOf('\n') === -1) {
                const index = originalSrc.substr(0, scripts[0].startIndex).lastIndexOf('\n');
                columnNumber -= originalSrc.substring(index + 1, scripts[0].children[0].startIndex).length
            }

            let ast = null;

            if (self.getASTCache()[script]) {
                ast = self.getASTCache()[script].ast;
            } else {
                ast = babylon.parse(script, {sourceType: "script", strictMode: false});
                self.getASTCache()[script] = {
                    src: script,
                    ast: ast
                };
            }

            const astElement = getElementInAST(ast, {
                error: error,
                line: line,
                columnNumber: columnNumber
            });
            return ({
                ast: ast,
                element: astElement,
                htmlElement: scripts[0].children[0],
                dom: dom
            });
        }



        if (r.contentType().toLowerCase().indexOf("html") !== -1) {
            let dom = null;
            if (self.getASTCache()[url]) {
                dom = self.getASTCache()[url].ast;
            } else {
                dom = await self.getDOM(src);
                self.getASTCache()[url] = {
                    src: src,
                    ast: dom
                };
            }
            return findScriptInDOM(dom);
        } else if (r.contentType().toLowerCase().indexOf("javascript") !== -1) {
            let ast = null;
            if (self.getASTCache()[url]) {
                ast = self.getASTCache()[url].ast;
            } else {
                ast = babylon.parse(src, {sourceType: "file", strictMode: false});
                self.getASTCache()[url] = {
                    src: src,
                    ast: ast
                };
            }
            const astElement = getElementInAST(ast, {
                error: error,
                line: line,
                columnNumber: columnNumber
            });
            return {
                ast: ast,
                element: astElement
            };
        }
    }

    async isToApply() {
        const url = this.request.url;
        const errorUrl = this.error.exceptionDetails.url;
        if (url != errorUrl && !(errorUrl == null && this.state.getMainRequest().url == url)) {
            return false;
        }
        if (this.error.handled) {
            return false;
        }
        const message = this.error.getMessage();
        for (const r of this.supportedErrors) {
            if (r.test(message)) {
                return true;
            }
        }
        return false;
    }
}
module.exports = NotNull;