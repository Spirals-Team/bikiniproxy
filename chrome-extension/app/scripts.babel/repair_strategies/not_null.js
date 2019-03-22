var supportedErrors = [
    /Cannot read property '[^']+' of /,
    /Cannot set property '[^']+' of /,
    / is not a function/,
    /[^ ]+ is not defined/
]

function getVariable (error) {
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
  for (const r of regexs) {
      const results = r.exec(error.message);
      if (results != null) {
        let v = results[1];
        if (v.indexOf('.') != -1) {
          v = v.substring(v.lastIndexOf('.') + 1)
        }
        return v
      }
  }
  return null;
}



chrome.webRequest.onBeforeRequest.addListener(function (request) {
    if (knownErrors[request.tabId] == null || request.method != 'GET' || request.type == 'main_frame') {
      return {};
    }
    let isMatching = false;
    for (var error of knownErrors[request.tabId]) {
      if (error.file == null || error.file.indexOf(request.url) == -1) {
        continue
      }
      for (const r of supportedErrors) {
        if (r.test(error.message)) {
          isMatching = true;
          break
        }
      }
    }
    if (!isMatching) {
      return {};
    } 

    let response_content = '';
    let contentType = '';
    ajax.get(request.url, {}, (result, req) => {
      response_content = result;
      contentType = req.contentType
    }, false)

    if (contentType.indexOf('javascript') == -1) {
      return {}
    }

    const ast = Babel.transform(response_content, {
      ast: true,
    }).ast

    for (let error of knownErrors[request.tabId]) {
      if (error.file == null || error.file.indexOf(request.url) == -1) {
        continue
      }
      isMatching = false;
      for (const r of supportedErrors) {
        if (r.test(error.message)) {
          isMatching = true;
          break
        }
      }
      if (!isMatching) {
        continue
      }


      const variable = getVariable(error);
      const message = error.message;
      const stackTrace = error.stack  [0];
      let line = stackTrace.line;
      let columnNumber = stackTrace.column;
      const url = error.file;

      if (contentType.indexOf('javascript') != -1) {
        Babel.registerPlugin('repair', babel => {
          const t = babel.types;

          function getElementInAST() {
            let output = null;
            let stop = false;
            babel.traverse(ast, {
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
                    if (loc.start.line > line || loc.end.line < line || (loc.start.column - columnNumber) > 500) {
                        path.skip();
                    } else {
                        let column = loc.start.column;
                        if (t.isAssignmentExpression(path.parent)) {
                            column = loc.end.column + path.parent.operator.length;
                        }
                        if (t.isExpressionStatement(path.node)) {
                            return;
                        }
                        // console.log(loc.start.line, line, column, columnNumber, t.isIdentifier(path.node, {name: getVariable(error)}), getVariable(error))
                        if (loc.start.line === line && (column === columnNumber || (t.isIdentifier(path.node, {name: getVariable(error)}) && Math.abs(column - columnNumber) < 100))) {
                            output = path;
                            path.stop();
                            stop = true;
                        }
                    }
                }
            });
            return output;
          }
          let path = getElementInAST()
          if (path == null) {
            return {}
          }
          
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
                repairActions[request.tabId].push('Initialize')
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
                repairActions[request.tabId].push('WrapIsNotUndefined')
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
                repairActions[request.tabId].push('WrapIsFunction')
            } catch (e) {
                console.log(statement);
                console.error(e);
            }
          }

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
                error.handled = true;

                repairActions[request.tabId].push('missingDOM')
            } catch (e) {
                console.log(statement);
                console.error(e);
            }
          }

          
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

          if (t.isMemberExpression(path.node)) {
            if (t.isCallExpression(path.node.object)) {
              if (t.isIdentifier(path.node.object.callee.object, {name: "document"})) {
                if (t.isIdentifier(path.node.object.callee.property)) {
                  const func = path.node.object.callee.property.name;

                  const isId = func.indexOf('ById') !== -1;
                  const isClass = func.indexOf('getElementsByClassName') !== -1;
                  const isQuery = func.indexOf('querySelector') !== -1;
                  if (isId || isClass || isQuery) {
                    const argument = path.node.object.arguments[0];
                    createElement(path.getStatementParent(), {
                      query: argument,
                      isId: isId,
                      isClass: isClass,
                      isQuery: isQuery
                    }, path.node.object)
                  }
                }
              }
            }
          } else if (t.isMemberExpression(path.parent)) {
            if (t.isCallExpression(path.parent.object)) {
              if (t.isIdentifier(path.parent.object.callee, {name: "jQuery"}) || t.isIdentifier(path.parent.object.callee, {name: "$"})) {
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
              }
            }
          }

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



          return {}
        });


        Babel.transformFromAst(ast, '', {
          ast: true,
          plugins: ['repair']
        })
      }
    }
    const output = Babel.transformFromAst(ast, '', {minified: true})
    return { redirectUrl: "data:application/javascript;base64," + encodeURIComponent(output.code) };

    // if (contentType.indexOf('javascript') != -1) {
        
    // } else if (contentType.indexOf('html') != -1) {
    //   return { redirectUrl: "data:text/html," + encodeURIComponent(response_content.replace('html', 'todo')) };
    // }
  }, {urls: ['<all_urls>']}, ['blocking']);



function getElementFromError(error, content) {
    const self = this;

    

    if (error.exceptionDetails.stackTrace == null) {
        return null;
    }

    const stackTrace = error.stackTrace.callFrames[0];
    let line = stackTrace.lineNumber + 1;
    let columnNumber = stackTrace.columnNumber;
    const url = error.exceptionDetails.url;
    const originalSrc = content;

    const src = this.request.body.toString();

    const result = Babel.transform(content, {
      ast: true,
    })
    const astElement = getElementInAST(result.ast, {
      error: error,
      line: line,
      columnNumber: columnNumber
    });
    return {
      ast: ast,
      element: astElement
    };
    //const output = Babel.transformFromAst(result.ast, '')
}
  