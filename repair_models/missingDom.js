const t = require('babel-types');
const traverse = require('babel-traverse').default;
const generate = require("babel-generator").default;
const domutils = require("domutils");

const NotNull = require('./not_null');

class MissingDOMElement extends NotNull {
    constructor(state, error, request) {
        super(state, error, request);
        this.name = 'missingDOMElement';
        this.description = 'add null check before the access of a dom element that is missing';
    }



    async repair() {
        const self = this;
        function createElement(parentStatement, data, documentQuery) {
            let condition = t.binaryExpression('==', documentQuery, t.nullLiteral());
            const statement = t.expressionStatement(t.callExpression(t.memberExpression(t.identifier("bikinirepair"), t.identifier("createElement"), false), [
                data.query,
                t.booleanLiteral(data.isId),
                t.booleanLiteral(data.isClass),
                t.booleanLiteral(data.isQuery)
            ]));
            const temp = t.ifStatement(condition, t.blockStatement([statement]));
            temp.bikiniproxy = true;
            temp.shouldSkip = true;
            try {
                parentStatement.insertBefore(temp);
                self.error.handled = true;
            } catch (e) {
                console.log(statement);
                console.error(e);
            }
        }

        try {
            const element = await this.getElementFromError(this.error);

            if (element != null && element.element != null) {
                const path = element.element;
                if (t.isMemberExpression(path.node)) {
                    if (t.isCallExpression(path.node.object)) {
                        if (t.isIdentifier(path.node.object.callee.object, {name: "document"})) {
                            if (t.isIdentifier(path.node.object.callee.property)) {
                                const func = path.node.object.callee.property.name

                                const argument = path.node.object.arguments[0];
                                const isId = func.indexOf('ById') !== -1;
                                const isClass = func.indexOf('getElementsByClassName') !== -1;
                                const isQuery = func.indexOf('querySelector') !== -1;

                                createElement(path.getStatementParent(), {
                                    query: argument,
                                    isId: isId,
                                    isClass: isClass,
                                    isQuery: isQuery
                                }, path.node.object)

                                const output = new generate(element.ast, {
                                    retainLines: false,
                                    compact: 'auto',
                                    concise: false
                                }, '');

                                if (element.dom) {
                                    element.htmlElement.data = output.code;
                                    this.request.body = domutils.getOuterHTML(element.dom);
                                } else {
                                    this.request.body = output.code;
                                }
                            }
                        }
                    }
                } else if (t.isMemberExpression(path.parent)) {
                    if (t.isCallExpression(path.parent.object)) {
                        const argument = path.parent.object.arguments[0];
                        const isId = false;
                        const isClass = false;
                        const isQuery = true;

                        createElement(path.getStatementParent(), {
                            query: argument,
                            isId: isId,
                            isClass: isClass,
                            isQuery: isQuery
                        }, path.parent.object)

                        const output = new generate(element.ast, {
                            retainLines: false,
                            compact: 'auto',
                            concise: false
                        }, '');

                        if (element.dom) {
                            element.htmlElement.data = output.code;
                            this.request.body = domutils.getOuterHTML(element.dom);
                        } else {
                            this.request.body = output.code;
                        }
                    }
                }
            }
        } catch(e) {
            console.error(e);
        }
    }

    async isToApply() {
        const errorUrl = this.error.exceptionDetails.url;
        if (this.error.handled || this.request.url != errorUrl) {
            return false;
        }
        try {
            const element = await this.getElementFromError(this.error);

            if (element != null && element.element != null) {
                const path = element.element;
                if (t.isMemberExpression(path.node)) {
                    if (t.isCallExpression(path.node.object)) {
                        if (t.isIdentifier(path.node.object.callee.object, {name: "document"})) {
                            if (t.isIdentifier(path.node.object.callee.property)) {
                                const func = path.node.object.callee.property.name;
                                return func.indexOf("getElement") !== -1 || func.indexOf("querySelector") !== -1
                            }
                        }
                    }
                } else if (t.isMemberExpression(path.parent)) {
                    if (t.isCallExpression(path.parent.object)) {
                        return (t.isIdentifier(path.parent.object.callee, {name: "jQuery"}) || 
                            t.isIdentifier(path.parent.object.callee, {name: "$"}));
                    }
                }
            }
        } catch(e) {
            console.error(e);
        }

        return false;
    }
}

function print(element) {
    return;
    const output = new generate(element, {
        retainLines: false,
        compact: false,
        concise: false
    }, '');
    console.log(output.code);
}

module.exports = MissingDOMElement;