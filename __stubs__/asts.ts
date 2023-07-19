export const regularAST = {
  type: "File",
  start: 0,
  end: 265,
  loc: { start: { line: 1, column: 0, index: 0 }, end: { line: 13, column: 4, index: 265 } },
  errors: [],
  program: {
    type: "Program",
    start: 0,
    end: 265,
    loc: { start: { line: 1, column: 0, index: 0 }, end: { line: 13, column: 4, index: 265 } },
    sourceType: "module",
    interpreter: null,
    body: [
      {
        type: "ImportDeclaration",
        start: 7,
        end: 45,
        loc: { start: { line: 2, column: 6, index: 7 }, end: { line: 2, column: 44, index: 45 } },
        importKind: "value",
        specifiers: [
          {
            type: "ImportDefaultSpecifier",
            start: 14,
            end: 20,
            loc: { start: { line: 2, column: 13, index: 14 }, end: { line: 2, column: 19, index: 20 } },
            local: {
              type: "Identifier",
              start: 14,
              end: 20,
              loc: {
                start: { line: 2, column: 13, index: 14 },
                end: { line: 2, column: 19, index: 20 },
                identifierName: "styled",
              },
              name: "styled",
            },
          },
          {
            type: "ImportSpecifier",
            local: { type: "Identifier", name: "styled" },
            imported: { type: "Identifier", name: "styled" },
          },
        ],
        source: {
          type: "StringLiteral",
          start: 26,
          end: 45,
          loc: { start: { line: 2, column: 25, index: 26 }, end: { line: 2, column: 44, index: 45 } },
          extra: { rawValue: "styled-components", raw: "'styled-components'" },
          value: "styled-components",
        },
      },
      {
        type: "VariableDeclaration",
        start: 53,
        end: 260,
        loc: { start: { line: 4, column: 6, index: 53 }, end: { line: 12, column: 7, index: 260 } },
        declarations: [
          {
            type: "VariableDeclarator",
            start: 59,
            end: 260,
            loc: { start: { line: 4, column: 12, index: 59 }, end: { line: 12, column: 7, index: 260 } },
            id: {
              type: "Identifier",
              start: 59,
              end: 65,
              loc: {
                start: { line: 4, column: 12, index: 59 },
                end: { line: 4, column: 18, index: 65 },
                identifierName: "Button",
              },
              name: "Button",
            },
            init: {
              type: "TaggedTemplateExpression",
              start: 68,
              end: 260,
              loc: { start: { line: 4, column: 21, index: 68 }, end: { line: 12, column: 7, index: 260 } },
              tag: {
                type: "MemberExpression",
                start: 68,
                end: 81,
                loc: { start: { line: 4, column: 21, index: 68 }, end: { line: 4, column: 34, index: 81 } },
                object: {
                  type: "Identifier",
                  start: 68,
                  end: 74,
                  loc: {
                    start: { line: 4, column: 21, index: 68 },
                    end: { line: 4, column: 27, index: 74 },
                    identifierName: "styled",
                  },
                  name: "styled",
                },
                computed: false,
                property: {
                  type: "Identifier",
                  start: 75,
                  end: 81,
                  loc: {
                    start: { line: 4, column: 28, index: 75 },
                    end: { line: 4, column: 34, index: 81 },
                    identifierName: "button",
                  },
                  name: "button",
                },
              },
              quasi: {
                type: "TemplateLiteral",
                start: 81,
                end: 260,
                loc: { start: { line: 4, column: 34, index: 81 }, end: { line: 12, column: 7, index: 260 } },
                expressions: [],
                quasis: [
                  {
                    type: "TemplateElement",
                    start: 82,
                    end: 259,
                    loc: { start: { line: 4, column: 35, index: 82 }, end: { line: 12, column: 6, index: 259 } },
                    value: {
                      raw: "\n        background: white;\n        color: palevioletred;\n        font-size: 1em;\n        &:hover {\n          background: palevioletred;\n          color: white;\n        }\n      ",
                      cooked:
                        "\n        background: white;\n        color: palevioletred;\n        font-size: 1em;\n        &:hover {\n          background: palevioletred;\n          color: white;\n        }\n      ",
                    },
                    tail: true,
                  },
                ],
              },
            },
          },
        ],
        kind: "const",
      },
    ],
    directives: [],
  },
  comments: [],
}

export const multipleDeclarationsAST = {
  type: "File",
  program: {
    type: "Program",
    body: [
      {
        type: "ImportDeclaration",
        specifiers: [
          {
            type: "ImportDefaultSpecifier",
            local: {
              type: "Identifier",
              name: "styled",
            },
          },
        ],
        source: {
          type: "StringLiteral",
          value: "styled-components",
        },
      },
      {
        type: "VariableDeclaration",
        declarations: [
          {
            type: "VariableDeclarator",
            id: {
              type: "Identifier",
              name: "Button",
            },
            init: {
              type: "TaggedTemplateExpression",
              tag: {
                type: "MemberExpression",
                object: {
                  type: "Identifier",
                  name: "styled",
                },
                property: {
                  type: "Identifier",
                  name: "button",
                },
              },
              quasi: {
                type: "TemplateLiteral",
                quasis: [
                  {
                    type: "TemplateElement",
                    value: {
                      raw: "\n  color: blue;\n",
                      cooked: "\n  color: blue;\n",
                    },
                  },
                ],
                expressions: [],
              },
            },
          },
        ],
        kind: "const",
      },
      {
        type: "VariableDeclaration",
        declarations: [
          {
            type: "VariableDeclarator",
            id: {
              type: "Identifier",
              name: "RedButton",
            },
            init: {
              type: "TaggedTemplateExpression",
              tag: {
                type: "CallExpression",
                callee: {
                  type: "Identifier",
                  name: "styled",
                },
                arguments: [
                  {
                    type: "Identifier",
                    name: "Button",
                  },
                ],
              },
              quasi: {
                type: "TemplateLiteral",
                quasis: [
                  {
                    type: "TemplateElement",
                    value: {
                      raw: "\n  color: red;\n",
                      cooked: "\n  color: red;\n",
                    },
                  },
                ],
                expressions: [],
              },
            },
          },
        ],
        kind: "const",
      },
      {
        type: "VariableDeclaration",
        declarations: [
          {
            type: "VariableDeclarator",
            id: {
              type: "Identifier",
              name: "GreenButton",
            },
            init: {
              type: "TaggedTemplateExpression",
              tag: {
                type: "CallExpression",
                callee: {
                  type: "Identifier",
                  name: "styled",
                },
                arguments: [
                  {
                    type: "Identifier",
                    name: "RedButton",
                  },
                ],
              },
              quasi: {
                type: "TemplateLiteral",
                quasis: [
                  {
                    type: "TemplateElement",
                    value: {
                      raw: "\n  color: green;\n",
                      cooked: "\n  color: green;\n",
                    },
                  },
                ],
                expressions: [],
              },
            },
          },
        ],
        kind: "const",
      },
    ],
    sourceType: "module",
  },
}

export const nestedTemplateAST = {
  type: "File",
  program: {
    type: "Program",
    body: [
      {
        type: "ImportDeclaration",
        specifiers: [
          {
            type: "ImportDefaultSpecifier",
            local: {
              type: "Identifier",
              name: "styled",
            },
          },
        ],
        source: {
          type: "StringLiteral",
          value: "styled-components",
        },
      },
      {
        type: "VariableDeclaration",
        declarations: [
          {
            type: "VariableDeclarator",
            id: {
              type: "Identifier",
              name: "Button",
            },
            init: {
              type: "TaggedTemplateExpression",
              tag: {
                type: "MemberExpression",
                object: {
                  type: "Identifier",
                  name: "styled",
                },
                property: {
                  type: "Identifier",
                  name: "button",
                },
              },
              quasi: {
                type: "TemplateLiteral",
                quasis: [
                  {
                    type: "TemplateElement",
                    value: {
                      raw: "\n  color: blue;\n",
                      cooked: "\n  color: blue;\n",
                    },
                  },
                ],
                expressions: [],
              },
            },
          },
        ],
        kind: "const",
      },
      {
        type: "VariableDeclaration",
        declarations: [
          {
            type: "VariableDeclarator",
            id: {
              type: "Identifier",
              name: "RedButton",
            },
            init: {
              type: "TaggedTemplateExpression",
              tag: {
                type: "CallExpression",
                callee: {
                  type: "Identifier",
                  name: "styled",
                },
                arguments: [
                  {
                    type: "Identifier",
                    name: "Button",
                  },
                ],
              },
              quasi: {
                type: "TemplateLiteral",
                quasis: [
                  {
                    type: "TemplateElement",
                    value: {
                      raw: "\n  color: red;\n",
                      cooked: "\n  color: red;\n",
                    },
                  },
                ],
                expressions: [],
              },
            },
          },
        ],
        kind: "const",
      },
      {
        type: "VariableDeclaration",
        declarations: [
          {
            type: "VariableDeclarator",
            id: {
              type: "Identifier",
              name: "GreenButton",
            },
            init: {
              type: "TaggedTemplateExpression",
              tag: {
                type: "CallExpression",
                callee: {
                  type: "Identifier",
                  name: "styled",
                },
                arguments: [
                  {
                    type: "Identifier",
                    name: "RedButton",
                  },
                ],
              },
              quasi: {
                type: "TemplateLiteral",
                quasis: [
                  {
                    type: "TemplateElement",
                    value: {
                      raw: "\n  color: green;\n",
                      cooked: "\n  color: green;\n",
                    },
                  },
                ],
                expressions: [],
              },
            },
          },
        ],
        kind: "const",
      },
    ],
    sourceType: "module",
  },
}
