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

export const exportedComponentsAST = {
  type: "File",
  start: 0,
  end: 3039,
  loc: { start: { line: 1, column: 0, index: 0 }, end: { line: 122, column: 0, index: 3039 } },
  errors: [],
  program: {
    type: "Program",
    start: 0,
    end: 3039,
    loc: { start: { line: 1, column: 0, index: 0 }, end: { line: 122, column: 0, index: 3039 } },
    sourceType: "module",
    interpreter: null,
    body: [
      {
        type: "ImportDeclaration",
        start: 0,
        end: 43,
        loc: { start: { line: 1, column: 0, index: 0 }, end: { line: 1, column: 43, index: 43 } },
        importKind: "value",
        specifiers: [
          {
            type: "ImportSpecifier",
            start: 9,
            end: 18,
            loc: { start: { line: 1, column: 9, index: 9 }, end: { line: 1, column: 18, index: 18 } },
            imported: {
              type: "Identifier",
              start: 9,
              end: 18,
              loc: {
                start: { line: 1, column: 9, index: 9 },
                end: { line: 1, column: 18, index: 18 },
                identifierName: "useEffect",
              },
              name: "useEffect",
            },
            importKind: "value",
            local: {
              type: "Identifier",
              start: 9,
              end: 18,
              loc: {
                start: { line: 1, column: 9, index: 9 },
                end: { line: 1, column: 18, index: 18 },
                identifierName: "useEffect",
              },
              name: "useEffect",
            },
          },
          {
            type: "ImportSpecifier",
            start: 20,
            end: 28,
            loc: { start: { line: 1, column: 20, index: 20 }, end: { line: 1, column: 28, index: 28 } },
            imported: {
              type: "Identifier",
              start: 20,
              end: 28,
              loc: {
                start: { line: 1, column: 20, index: 20 },
                end: { line: 1, column: 28, index: 28 },
                identifierName: "useState",
              },
              name: "useState",
            },
            importKind: "value",
            local: {
              type: "Identifier",
              start: 20,
              end: 28,
              loc: {
                start: { line: 1, column: 20, index: 20 },
                end: { line: 1, column: 28, index: 28 },
                identifierName: "useState",
              },
              name: "useState",
            },
          },
        ],
        source: {
          type: "StringLiteral",
          start: 36,
          end: 43,
          loc: { start: { line: 1, column: 36, index: 36 }, end: { line: 1, column: 43, index: 43 } },
          extra: { rawValue: "react", raw: '"react"' },
          value: "react",
        },
      },
      {
        type: "ImportDeclaration",
        start: 44,
        end: 82,
        loc: { start: { line: 2, column: 0, index: 44 }, end: { line: 2, column: 38, index: 82 } },
        importKind: "value",
        specifiers: [
          {
            type: "ImportDefaultSpecifier",
            start: 51,
            end: 57,
            loc: { start: { line: 2, column: 7, index: 51 }, end: { line: 2, column: 13, index: 57 } },
            local: {
              type: "Identifier",
              start: 51,
              end: 57,
              loc: {
                start: { line: 2, column: 7, index: 51 },
                end: { line: 2, column: 13, index: 57 },
                identifierName: "styled",
              },
              name: "styled",
            },
          },
        ],
        source: {
          type: "StringLiteral",
          start: 63,
          end: 82,
          loc: { start: { line: 2, column: 19, index: 63 }, end: { line: 2, column: 38, index: 82 } },
          extra: { rawValue: "styled-components", raw: '"styled-components"' },
          value: "styled-components",
        },
      },
      {
        type: "ImportDeclaration",
        start: 83,
        end: 127,
        loc: { start: { line: 3, column: 0, index: 83 }, end: { line: 3, column: 44, index: 127 } },
        importKind: "value",
        specifiers: [
          {
            type: "ImportSpecifier",
            start: 92,
            end: 101,
            loc: { start: { line: 3, column: 9, index: 92 }, end: { line: 3, column: 18, index: 101 } },
            imported: {
              type: "Identifier",
              start: 92,
              end: 101,
              loc: {
                start: { line: 3, column: 9, index: 92 },
                end: { line: 3, column: 18, index: 101 },
                identifierName: "MAX_WIDTH",
              },
              name: "MAX_WIDTH",
            },
            importKind: "value",
            local: {
              type: "Identifier",
              start: 92,
              end: 101,
              loc: {
                start: { line: 3, column: 9, index: 92 },
                end: { line: 3, column: 18, index: 101 },
                identifierName: "MAX_WIDTH",
              },
              name: "MAX_WIDTH",
            },
          },
        ],
        source: {
          type: "StringLiteral",
          start: 109,
          end: 127,
          loc: { start: { line: 3, column: 26, index: 109 }, end: { line: 3, column: 44, index: 127 } },
          extra: { rawValue: "styles/constants", raw: '"styles/constants"' },
          value: "styles/constants",
        },
      },
      {
        type: "TSInterfaceDeclaration",
        start: 129,
        end: 181,
        loc: { start: { line: 5, column: 0, index: 129 }, end: { line: 8, column: 1, index: 181 } },
        id: {
          type: "Identifier",
          start: 139,
          end: 146,
          loc: {
            start: { line: 5, column: 10, index: 139 },
            end: { line: 5, column: 17, index: 146 },
            identifierName: "NavItem",
          },
          name: "NavItem",
        },
        body: {
          type: "TSInterfaceBody",
          start: 147,
          end: 181,
          loc: { start: { line: 5, column: 18, index: 147 }, end: { line: 8, column: 1, index: 181 } },
          body: [
            {
              type: "TSPropertySignature",
              start: 151,
              end: 163,
              loc: { start: { line: 6, column: 2, index: 151 }, end: { line: 6, column: 14, index: 163 } },
              key: {
                type: "Identifier",
                start: 151,
                end: 155,
                loc: {
                  start: { line: 6, column: 2, index: 151 },
                  end: { line: 6, column: 6, index: 155 },
                  identifierName: "href",
                },
                name: "href",
              },
              computed: false,
              typeAnnotation: {
                type: "TSTypeAnnotation",
                start: 155,
                end: 163,
                loc: { start: { line: 6, column: 6, index: 155 }, end: { line: 6, column: 14, index: 163 } },
                typeAnnotation: {
                  type: "TSStringKeyword",
                  start: 157,
                  end: 163,
                  loc: { start: { line: 6, column: 8, index: 157 }, end: { line: 6, column: 14, index: 163 } },
                },
              },
            },
            {
              type: "TSPropertySignature",
              start: 166,
              end: 179,
              loc: { start: { line: 7, column: 2, index: 166 }, end: { line: 7, column: 15, index: 179 } },
              key: {
                type: "Identifier",
                start: 166,
                end: 171,
                loc: {
                  start: { line: 7, column: 2, index: 166 },
                  end: { line: 7, column: 7, index: 171 },
                  identifierName: "title",
                },
                name: "title",
              },
              computed: false,
              typeAnnotation: {
                type: "TSTypeAnnotation",
                start: 171,
                end: 179,
                loc: { start: { line: 7, column: 7, index: 171 }, end: { line: 7, column: 15, index: 179 } },
                typeAnnotation: {
                  type: "TSStringKeyword",
                  start: 173,
                  end: 179,
                  loc: { start: { line: 7, column: 9, index: 173 }, end: { line: 7, column: 15, index: 179 } },
                },
              },
            },
          ],
        },
      },
      {
        type: "TSInterfaceDeclaration",
        start: 183,
        end: 237,
        loc: { start: { line: 10, column: 0, index: 183 }, end: { line: 12, column: 1, index: 237 } },
        id: {
          type: "Identifier",
          start: 193,
          end: 211,
          loc: {
            start: { line: 10, column: 10, index: 193 },
            end: { line: 10, column: 28, index: 211 },
            identifierName: "NavigationBarProps",
          },
          name: "NavigationBarProps",
        },
        body: {
          type: "TSInterfaceBody",
          start: 212,
          end: 237,
          loc: { start: { line: 10, column: 29, index: 212 }, end: { line: 12, column: 1, index: 237 } },
          body: [
            {
              type: "TSPropertySignature",
              start: 216,
              end: 235,
              loc: { start: { line: 11, column: 2, index: 216 }, end: { line: 11, column: 21, index: 235 } },
              key: {
                type: "Identifier",
                start: 216,
                end: 224,
                loc: {
                  start: { line: 11, column: 2, index: 216 },
                  end: { line: 11, column: 10, index: 224 },
                  identifierName: "navItems",
                },
                name: "navItems",
              },
              computed: false,
              typeAnnotation: {
                type: "TSTypeAnnotation",
                start: 224,
                end: 235,
                loc: { start: { line: 11, column: 10, index: 224 }, end: { line: 11, column: 21, index: 235 } },
                typeAnnotation: {
                  type: "TSArrayType",
                  start: 226,
                  end: 235,
                  loc: { start: { line: 11, column: 12, index: 226 }, end: { line: 11, column: 21, index: 235 } },
                  elementType: {
                    type: "TSTypeReference",
                    start: 226,
                    end: 233,
                    loc: { start: { line: 11, column: 12, index: 226 }, end: { line: 11, column: 19, index: 233 } },
                    typeName: {
                      type: "Identifier",
                      start: 226,
                      end: 233,
                      loc: {
                        start: { line: 11, column: 12, index: 226 },
                        end: { line: 11, column: 19, index: 233 },
                        identifierName: "NavItem",
                      },
                      name: "NavItem",
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        type: "VariableDeclaration",
        start: 239,
        end: 1728,
        loc: { start: { line: 14, column: 0, index: 239 }, end: { line: 60, column: 1, index: 1728 } },
        declarations: [
          {
            type: "VariableDeclarator",
            start: 245,
            end: 1728,
            loc: { start: { line: 14, column: 6, index: 245 }, end: { line: 60, column: 1, index: 1728 } },
            id: {
              type: "Identifier",
              start: 245,
              end: 258,
              loc: {
                start: { line: 14, column: 6, index: 245 },
                end: { line: 14, column: 19, index: 258 },
                identifierName: "NavigationBar",
              },
              name: "NavigationBar",
            },
            init: {
              type: "ArrowFunctionExpression",
              start: 261,
              end: 1728,
              loc: { start: { line: 14, column: 22, index: 261 }, end: { line: 60, column: 1, index: 1728 } },
              id: null,
              generator: false,
              async: false,
              params: [
                {
                  type: "ObjectPattern",
                  start: 262,
                  end: 294,
                  loc: { start: { line: 14, column: 23, index: 262 }, end: { line: 14, column: 55, index: 294 } },
                  properties: [
                    {
                      type: "ObjectProperty",
                      start: 264,
                      end: 272,
                      loc: { start: { line: 14, column: 25, index: 264 }, end: { line: 14, column: 33, index: 272 } },
                      method: false,
                      key: {
                        type: "Identifier",
                        start: 264,
                        end: 272,
                        loc: {
                          start: { line: 14, column: 25, index: 264 },
                          end: { line: 14, column: 33, index: 272 },
                          identifierName: "navItems",
                        },
                        name: "navItems",
                      },
                      computed: false,
                      shorthand: true,
                      value: {
                        type: "Identifier",
                        start: 264,
                        end: 272,
                        loc: {
                          start: { line: 14, column: 25, index: 264 },
                          end: { line: 14, column: 33, index: 272 },
                          identifierName: "navItems",
                        },
                        name: "navItems",
                      },
                      extra: { shorthand: true },
                    },
                  ],
                  typeAnnotation: {
                    type: "TSTypeAnnotation",
                    start: 274,
                    end: 294,
                    loc: { start: { line: 14, column: 35, index: 274 }, end: { line: 14, column: 55, index: 294 } },
                    typeAnnotation: {
                      type: "TSTypeReference",
                      start: 276,
                      end: 294,
                      loc: { start: { line: 14, column: 37, index: 276 }, end: { line: 14, column: 55, index: 294 } },
                      typeName: {
                        type: "Identifier",
                        start: 276,
                        end: 294,
                        loc: {
                          start: { line: 14, column: 37, index: 276 },
                          end: { line: 14, column: 55, index: 294 },
                          identifierName: "NavigationBarProps",
                        },
                        name: "NavigationBarProps",
                      },
                    },
                  },
                },
              ],
              body: {
                type: "BlockStatement",
                start: 299,
                end: 1728,
                loc: { start: { line: 14, column: 60, index: 299 }, end: { line: 60, column: 1, index: 1728 } },
                body: [
                  {
                    type: "VariableDeclaration",
                    start: 303,
                    end: 358,
                    loc: { start: { line: 15, column: 2, index: 303 }, end: { line: 15, column: 57, index: 358 } },
                    declarations: [
                      {
                        type: "VariableDeclarator",
                        start: 309,
                        end: 358,
                        loc: { start: { line: 15, column: 8, index: 309 }, end: { line: 15, column: 57, index: 358 } },
                        id: {
                          type: "ArrayPattern",
                          start: 309,
                          end: 332,
                          loc: {
                            start: { line: 15, column: 8, index: 309 },
                            end: { line: 15, column: 31, index: 332 },
                          },
                          elements: [
                            {
                              type: "Identifier",
                              start: 310,
                              end: 318,
                              loc: {
                                start: { line: 15, column: 9, index: 310 },
                                end: { line: 15, column: 17, index: 318 },
                                identifierName: "progress",
                              },
                              name: "progress",
                            },
                            {
                              type: "Identifier",
                              start: 320,
                              end: 331,
                              loc: {
                                start: { line: 15, column: 19, index: 320 },
                                end: { line: 15, column: 30, index: 331 },
                                identifierName: "setProgress",
                              },
                              name: "setProgress",
                            },
                          ],
                        },
                        init: {
                          type: "CallExpression",
                          start: 335,
                          end: 358,
                          loc: {
                            start: { line: 15, column: 34, index: 335 },
                            end: { line: 15, column: 57, index: 358 },
                          },
                          callee: {
                            type: "Identifier",
                            start: 335,
                            end: 343,
                            loc: {
                              start: { line: 15, column: 34, index: 335 },
                              end: { line: 15, column: 42, index: 343 },
                              identifierName: "useState",
                            },
                            name: "useState",
                          },
                          arguments: [
                            {
                              type: "StringLiteral",
                              start: 352,
                              end: 357,
                              loc: {
                                start: { line: 15, column: 51, index: 352 },
                                end: { line: 15, column: 56, index: 357 },
                              },
                              extra: { rawValue: "0px", raw: '"0px"' },
                              value: "0px",
                            },
                          ],
                          typeParameters: {
                            type: "TSTypeParameterInstantiation",
                            start: 343,
                            end: 351,
                            loc: {
                              start: { line: 15, column: 42, index: 343 },
                              end: { line: 15, column: 50, index: 351 },
                            },
                            params: [
                              {
                                type: "TSStringKeyword",
                                start: 344,
                                end: 350,
                                loc: {
                                  start: { line: 15, column: 43, index: 344 },
                                  end: { line: 15, column: 49, index: 350 },
                                },
                              },
                            ],
                          },
                        },
                      },
                    ],
                    kind: "const",
                  },
                  {
                    type: "VariableDeclaration",
                    start: 361,
                    end: 413,
                    loc: { start: { line: 16, column: 2, index: 361 }, end: { line: 16, column: 54, index: 413 } },
                    declarations: [
                      {
                        type: "VariableDeclarator",
                        start: 367,
                        end: 413,
                        loc: { start: { line: 16, column: 8, index: 367 }, end: { line: 16, column: 54, index: 413 } },
                        id: {
                          type: "ArrayPattern",
                          start: 367,
                          end: 396,
                          loc: {
                            start: { line: 16, column: 8, index: 367 },
                            end: { line: 16, column: 37, index: 396 },
                          },
                          elements: [
                            {
                              type: "Identifier",
                              start: 368,
                              end: 379,
                              loc: {
                                start: { line: 16, column: 9, index: 368 },
                                end: { line: 16, column: 20, index: 379 },
                                identifierName: "activeTitle",
                              },
                              name: "activeTitle",
                            },
                            {
                              type: "Identifier",
                              start: 381,
                              end: 395,
                              loc: {
                                start: { line: 16, column: 22, index: 381 },
                                end: { line: 16, column: 36, index: 395 },
                                identifierName: "setActiveTitle",
                              },
                              name: "setActiveTitle",
                            },
                          ],
                        },
                        init: {
                          type: "CallExpression",
                          start: 399,
                          end: 413,
                          loc: {
                            start: { line: 16, column: 40, index: 399 },
                            end: { line: 16, column: 54, index: 413 },
                          },
                          callee: {
                            type: "Identifier",
                            start: 399,
                            end: 407,
                            loc: {
                              start: { line: 16, column: 40, index: 399 },
                              end: { line: 16, column: 48, index: 407 },
                              identifierName: "useState",
                            },
                            name: "useState",
                          },
                          arguments: [
                            {
                              type: "NullLiteral",
                              start: 408,
                              end: 412,
                              loc: {
                                start: { line: 16, column: 49, index: 408 },
                                end: { line: 16, column: 53, index: 412 },
                              },
                            },
                          ],
                        },
                      },
                    ],
                    kind: "const",
                  },
                  {
                    type: "VariableDeclaration",
                    start: 417,
                    end: 680,
                    loc: { start: { line: 18, column: 2, index: 417 }, end: { line: 24, column: 3, index: 680 } },
                    declarations: [
                      {
                        type: "VariableDeclarator",
                        start: 423,
                        end: 680,
                        loc: { start: { line: 18, column: 8, index: 423 }, end: { line: 24, column: 3, index: 680 } },
                        id: {
                          type: "Identifier",
                          start: 423,
                          end: 444,
                          loc: {
                            start: { line: 18, column: 8, index: 423 },
                            end: { line: 18, column: 29, index: 444 },
                            identifierName: "handleScrollToElement",
                          },
                          name: "handleScrollToElement",
                        },
                        init: {
                          type: "ArrowFunctionExpression",
                          start: 447,
                          end: 680,
                          loc: {
                            start: { line: 18, column: 32, index: 447 },
                            end: { line: 24, column: 3, index: 680 },
                          },
                          id: null,
                          generator: false,
                          async: false,
                          params: [
                            {
                              type: "Identifier",
                              start: 448,
                              end: 458,
                              loc: {
                                start: { line: 18, column: 33, index: 448 },
                                end: { line: 18, column: 43, index: 458 },
                                identifierName: "id",
                              },
                              name: "id",
                              typeAnnotation: {
                                type: "TSTypeAnnotation",
                                start: 450,
                                end: 458,
                                loc: {
                                  start: { line: 18, column: 35, index: 450 },
                                  end: { line: 18, column: 43, index: 458 },
                                },
                                typeAnnotation: {
                                  type: "TSStringKeyword",
                                  start: 452,
                                  end: 458,
                                  loc: {
                                    start: { line: 18, column: 37, index: 452 },
                                    end: { line: 18, column: 43, index: 458 },
                                  },
                                },
                              },
                            },
                          ],
                          body: {
                            type: "BlockStatement",
                            start: 463,
                            end: 680,
                            loc: {
                              start: { line: 18, column: 48, index: 463 },
                              end: { line: 24, column: 3, index: 680 },
                            },
                            body: [
                              {
                                type: "VariableDeclaration",
                                start: 469,
                                end: 512,
                                loc: {
                                  start: { line: 19, column: 4, index: 469 },
                                  end: { line: 19, column: 47, index: 512 },
                                },
                                declarations: [
                                  {
                                    type: "VariableDeclarator",
                                    start: 475,
                                    end: 512,
                                    loc: {
                                      start: { line: 19, column: 10, index: 475 },
                                      end: { line: 19, column: 47, index: 512 },
                                    },
                                    id: {
                                      type: "Identifier",
                                      start: 475,
                                      end: 482,
                                      loc: {
                                        start: { line: 19, column: 10, index: 475 },
                                        end: { line: 19, column: 17, index: 482 },
                                        identifierName: "element",
                                      },
                                      name: "element",
                                    },
                                    init: {
                                      type: "CallExpression",
                                      start: 485,
                                      end: 512,
                                      loc: {
                                        start: { line: 19, column: 20, index: 485 },
                                        end: { line: 19, column: 47, index: 512 },
                                      },
                                      callee: {
                                        type: "MemberExpression",
                                        start: 485,
                                        end: 508,
                                        loc: {
                                          start: { line: 19, column: 20, index: 485 },
                                          end: { line: 19, column: 43, index: 508 },
                                        },
                                        object: {
                                          type: "Identifier",
                                          start: 485,
                                          end: 493,
                                          loc: {
                                            start: { line: 19, column: 20, index: 485 },
                                            end: { line: 19, column: 28, index: 493 },
                                            identifierName: "document",
                                          },
                                          name: "document",
                                        },
                                        computed: false,
                                        property: {
                                          type: "Identifier",
                                          start: 494,
                                          end: 508,
                                          loc: {
                                            start: { line: 19, column: 29, index: 494 },
                                            end: { line: 19, column: 43, index: 508 },
                                            identifierName: "getElementById",
                                          },
                                          name: "getElementById",
                                        },
                                      },
                                      arguments: [
                                        {
                                          type: "Identifier",
                                          start: 509,
                                          end: 511,
                                          loc: {
                                            start: { line: 19, column: 44, index: 509 },
                                            end: { line: 19, column: 46, index: 511 },
                                            identifierName: "id",
                                          },
                                          name: "id",
                                        },
                                      ],
                                    },
                                  },
                                ],
                                kind: "const",
                              },
                              {
                                type: "VariableDeclaration",
                                start: 517,
                                end: 570,
                                loc: {
                                  start: { line: 20, column: 4, index: 517 },
                                  end: { line: 20, column: 57, index: 570 },
                                },
                                declarations: [
                                  {
                                    type: "VariableDeclarator",
                                    start: 523,
                                    end: 570,
                                    loc: {
                                      start: { line: 20, column: 10, index: 523 },
                                      end: { line: 20, column: 57, index: 570 },
                                    },
                                    id: {
                                      type: "Identifier",
                                      start: 523,
                                      end: 530,
                                      loc: {
                                        start: { line: 20, column: 10, index: 523 },
                                        end: { line: 20, column: 17, index: 530 },
                                        identifierName: "navItem",
                                      },
                                      name: "navItem",
                                    },
                                    init: {
                                      type: "CallExpression",
                                      start: 533,
                                      end: 570,
                                      loc: {
                                        start: { line: 20, column: 20, index: 533 },
                                        end: { line: 20, column: 57, index: 570 },
                                      },
                                      callee: {
                                        type: "MemberExpression",
                                        start: 533,
                                        end: 556,
                                        loc: {
                                          start: { line: 20, column: 20, index: 533 },
                                          end: { line: 20, column: 43, index: 556 },
                                        },
                                        object: {
                                          type: "Identifier",
                                          start: 533,
                                          end: 541,
                                          loc: {
                                            start: { line: 20, column: 20, index: 533 },
                                            end: { line: 20, column: 28, index: 541 },
                                            identifierName: "document",
                                          },
                                          name: "document",
                                        },
                                        computed: false,
                                        property: {
                                          type: "Identifier",
                                          start: 542,
                                          end: 556,
                                          loc: {
                                            start: { line: 20, column: 29, index: 542 },
                                            end: { line: 20, column: 43, index: 556 },
                                            identifierName: "getElementById",
                                          },
                                          name: "getElementById",
                                        },
                                      },
                                      arguments: [
                                        {
                                          type: "TemplateLiteral",
                                          start: 557,
                                          end: 569,
                                          loc: {
                                            start: { line: 20, column: 44, index: 557 },
                                            end: { line: 20, column: 56, index: 569 },
                                          },
                                          expressions: [],
                                          quasis: [
                                            {
                                              type: "TemplateElement",
                                              start: 558,
                                              end: 568,
                                              loc: {
                                                start: { line: 20, column: 45, index: 558 },
                                                end: { line: 20, column: 55, index: 568 },
                                              },
                                              value: { raw: "id-navItem", cooked: "id-navItem" },
                                              tail: true,
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  },
                                ],
                                kind: "const",
                              },
                              {
                                type: "IfStatement",
                                start: 575,
                                end: 676,
                                loc: {
                                  start: { line: 21, column: 4, index: 575 },
                                  end: { line: 23, column: 5, index: 676 },
                                },
                                test: {
                                  type: "LogicalExpression",
                                  start: 579,
                                  end: 597,
                                  loc: {
                                    start: { line: 21, column: 8, index: 579 },
                                    end: { line: 21, column: 26, index: 597 },
                                  },
                                  left: {
                                    type: "Identifier",
                                    start: 579,
                                    end: 586,
                                    loc: {
                                      start: { line: 21, column: 8, index: 579 },
                                      end: { line: 21, column: 15, index: 586 },
                                      identifierName: "element",
                                    },
                                    name: "element",
                                  },
                                  operator: "&&",
                                  right: {
                                    type: "Identifier",
                                    start: 590,
                                    end: 597,
                                    loc: {
                                      start: { line: 21, column: 19, index: 590 },
                                      end: { line: 21, column: 26, index: 597 },
                                      identifierName: "navItem",
                                    },
                                    name: "navItem",
                                  },
                                },
                                consequent: {
                                  type: "BlockStatement",
                                  start: 599,
                                  end: 676,
                                  loc: {
                                    start: { line: 21, column: 28, index: 599 },
                                    end: { line: 23, column: 5, index: 676 },
                                  },
                                  body: [
                                    {
                                      type: "ExpressionStatement",
                                      start: 607,
                                      end: 670,
                                      loc: {
                                        start: { line: 22, column: 6, index: 607 },
                                        end: { line: 22, column: 69, index: 670 },
                                      },
                                      expression: {
                                        type: "CallExpression",
                                        start: 607,
                                        end: 670,
                                        loc: {
                                          start: { line: 22, column: 6, index: 607 },
                                          end: { line: 22, column: 69, index: 670 },
                                        },
                                        callee: {
                                          type: "MemberExpression",
                                          start: 607,
                                          end: 629,
                                          loc: {
                                            start: { line: 22, column: 6, index: 607 },
                                            end: { line: 22, column: 28, index: 629 },
                                          },
                                          object: {
                                            type: "Identifier",
                                            start: 607,
                                            end: 614,
                                            loc: {
                                              start: { line: 22, column: 6, index: 607 },
                                              end: { line: 22, column: 13, index: 614 },
                                              identifierName: "element",
                                            },
                                            name: "element",
                                          },
                                          computed: false,
                                          property: {
                                            type: "Identifier",
                                            start: 615,
                                            end: 629,
                                            loc: {
                                              start: { line: 22, column: 14, index: 615 },
                                              end: { line: 22, column: 28, index: 629 },
                                              identifierName: "scrollIntoView",
                                            },
                                            name: "scrollIntoView",
                                          },
                                        },
                                        arguments: [
                                          {
                                            type: "ObjectExpression",
                                            start: 630,
                                            end: 669,
                                            loc: {
                                              start: { line: 22, column: 29, index: 630 },
                                              end: { line: 22, column: 68, index: 669 },
                                            },
                                            properties: [
                                              {
                                                type: "ObjectProperty",
                                                start: 632,
                                                end: 650,
                                                loc: {
                                                  start: { line: 22, column: 31, index: 632 },
                                                  end: { line: 22, column: 49, index: 650 },
                                                },
                                                method: false,
                                                key: {
                                                  type: "Identifier",
                                                  start: 632,
                                                  end: 640,
                                                  loc: {
                                                    start: { line: 22, column: 31, index: 632 },
                                                    end: { line: 22, column: 39, index: 640 },
                                                    identifierName: "behavior",
                                                  },
                                                  name: "behavior",
                                                },
                                                computed: false,
                                                shorthand: false,
                                                value: {
                                                  type: "StringLiteral",
                                                  start: 642,
                                                  end: 650,
                                                  loc: {
                                                    start: { line: 22, column: 41, index: 642 },
                                                    end: { line: 22, column: 49, index: 650 },
                                                  },
                                                  extra: { rawValue: "smooth", raw: '"smooth"' },
                                                  value: "smooth",
                                                },
                                              },
                                              {
                                                type: "ObjectProperty",
                                                start: 652,
                                                end: 667,
                                                loc: {
                                                  start: { line: 22, column: 51, index: 652 },
                                                  end: { line: 22, column: 66, index: 667 },
                                                },
                                                method: false,
                                                key: {
                                                  type: "Identifier",
                                                  start: 652,
                                                  end: 657,
                                                  loc: {
                                                    start: { line: 22, column: 51, index: 652 },
                                                    end: { line: 22, column: 56, index: 657 },
                                                    identifierName: "block",
                                                  },
                                                  name: "block",
                                                },
                                                computed: false,
                                                shorthand: false,
                                                value: {
                                                  type: "StringLiteral",
                                                  start: 659,
                                                  end: 667,
                                                  loc: {
                                                    start: { line: 22, column: 58, index: 659 },
                                                    end: { line: 22, column: 66, index: 667 },
                                                  },
                                                  extra: { rawValue: "center", raw: '"center"' },
                                                  value: "center",
                                                },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                  directives: [],
                                },
                                alternate: null,
                              },
                            ],
                            directives: [],
                          },
                        },
                      },
                    ],
                    kind: "const",
                  },
                  {
                    type: "ExpressionStatement",
                    start: 684,
                    end: 1291,
                    loc: { start: { line: 26, column: 2, index: 684 }, end: { line: 42, column: 8, index: 1291 } },
                    expression: {
                      type: "CallExpression",
                      start: 684,
                      end: 1291,
                      loc: { start: { line: 26, column: 2, index: 684 }, end: { line: 42, column: 8, index: 1291 } },
                      callee: {
                        type: "Identifier",
                        start: 684,
                        end: 693,
                        loc: {
                          start: { line: 26, column: 2, index: 684 },
                          end: { line: 26, column: 11, index: 693 },
                          identifierName: "useEffect",
                        },
                        name: "useEffect",
                      },
                      arguments: [
                        {
                          type: "ArrowFunctionExpression",
                          start: 694,
                          end: 1286,
                          loc: {
                            start: { line: 26, column: 12, index: 694 },
                            end: { line: 42, column: 3, index: 1286 },
                          },
                          id: null,
                          generator: false,
                          async: false,
                          params: [],
                          body: {
                            type: "BlockStatement",
                            start: 700,
                            end: 1286,
                            loc: {
                              start: { line: 26, column: 18, index: 700 },
                              end: { line: 42, column: 3, index: 1286 },
                            },
                            body: [
                              {
                                type: "ExpressionStatement",
                                start: 706,
                                end: 1282,
                                loc: {
                                  start: { line: 27, column: 4, index: 706 },
                                  end: { line: 41, column: 6, index: 1282 },
                                },
                                expression: {
                                  type: "CallExpression",
                                  start: 706,
                                  end: 1282,
                                  loc: {
                                    start: { line: 27, column: 4, index: 706 },
                                    end: { line: 41, column: 6, index: 1282 },
                                  },
                                  callee: {
                                    type: "MemberExpression",
                                    start: 706,
                                    end: 718,
                                    loc: {
                                      start: { line: 27, column: 4, index: 706 },
                                      end: { line: 27, column: 16, index: 718 },
                                    },
                                    object: {
                                      type: "Identifier",
                                      start: 706,
                                      end: 714,
                                      loc: {
                                        start: { line: 27, column: 4, index: 706 },
                                        end: { line: 27, column: 12, index: 714 },
                                        identifierName: "navItems",
                                      },
                                      name: "navItems",
                                    },
                                    computed: false,
                                    property: {
                                      type: "Identifier",
                                      start: 715,
                                      end: 718,
                                      loc: {
                                        start: { line: 27, column: 13, index: 715 },
                                        end: { line: 27, column: 16, index: 718 },
                                        identifierName: "map",
                                      },
                                      name: "map",
                                    },
                                  },
                                  arguments: [
                                    {
                                      type: "ArrowFunctionExpression",
                                      start: 719,
                                      end: 1281,
                                      loc: {
                                        start: { line: 27, column: 17, index: 719 },
                                        end: { line: 41, column: 5, index: 1281 },
                                      },
                                      id: null,
                                      generator: false,
                                      async: false,
                                      params: [
                                        {
                                          type: "Identifier",
                                          start: 720,
                                          end: 721,
                                          loc: {
                                            start: { line: 27, column: 18, index: 720 },
                                            end: { line: 27, column: 19, index: 721 },
                                            identifierName: "e",
                                          },
                                          name: "e",
                                        },
                                      ],
                                      body: {
                                        type: "BlockStatement",
                                        start: 726,
                                        end: 1281,
                                        loc: {
                                          start: { line: 27, column: 24, index: 726 },
                                          end: { line: 41, column: 5, index: 1281 },
                                        },
                                        body: [
                                          {
                                            type: "VariableDeclaration",
                                            start: 734,
                                            end: 1119,
                                            loc: {
                                              start: { line: 28, column: 6, index: 734 },
                                              end: { line: 35, column: 8, index: 1119 },
                                            },
                                            declarations: [
                                              {
                                                type: "VariableDeclarator",
                                                start: 740,
                                                end: 1119,
                                                loc: {
                                                  start: { line: 28, column: 12, index: 740 },
                                                  end: { line: 35, column: 8, index: 1119 },
                                                },
                                                id: {
                                                  type: "Identifier",
                                                  start: 740,
                                                  end: 748,
                                                  loc: {
                                                    start: { line: 28, column: 12, index: 740 },
                                                    end: { line: 28, column: 20, index: 748 },
                                                    identifierName: "observer",
                                                  },
                                                  name: "observer",
                                                },
                                                init: {
                                                  type: "NewExpression",
                                                  start: 751,
                                                  end: 1119,
                                                  loc: {
                                                    start: { line: 28, column: 23, index: 751 },
                                                    end: { line: 35, column: 8, index: 1119 },
                                                  },
                                                  callee: {
                                                    type: "Identifier",
                                                    start: 755,
                                                    end: 775,
                                                    loc: {
                                                      start: { line: 28, column: 27, index: 755 },
                                                      end: { line: 28, column: 47, index: 775 },
                                                      identifierName: "IntersectionObserver",
                                                    },
                                                    name: "IntersectionObserver",
                                                  },
                                                  arguments: [
                                                    {
                                                      type: "ArrowFunctionExpression",
                                                      start: 776,
                                                      end: 1118,
                                                      loc: {
                                                        start: { line: 28, column: 48, index: 776 },
                                                        end: { line: 35, column: 7, index: 1118 },
                                                      },
                                                      id: null,
                                                      generator: false,
                                                      async: false,
                                                      params: [
                                                        {
                                                          type: "ArrayPattern",
                                                          start: 777,
                                                          end: 784,
                                                          loc: {
                                                            start: { line: 28, column: 49, index: 777 },
                                                            end: { line: 28, column: 56, index: 784 },
                                                          },
                                                          elements: [
                                                            {
                                                              type: "Identifier",
                                                              start: 778,
                                                              end: 783,
                                                              loc: {
                                                                start: { line: 28, column: 50, index: 778 },
                                                                end: { line: 28, column: 55, index: 783 },
                                                                identifierName: "entry",
                                                              },
                                                              name: "entry",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                      body: {
                                                        type: "BlockStatement",
                                                        start: 789,
                                                        end: 1118,
                                                        loc: {
                                                          start: { line: 28, column: 61, index: 789 },
                                                          end: { line: 35, column: 7, index: 1118 },
                                                        },
                                                        body: [
                                                          {
                                                            type: "VariableDeclaration",
                                                            start: 799,
                                                            end: 865,
                                                            loc: {
                                                              start: { line: 29, column: 8, index: 799 },
                                                              end: { line: 29, column: 74, index: 865 },
                                                            },
                                                            declarations: [
                                                              {
                                                                type: "VariableDeclarator",
                                                                start: 805,
                                                                end: 865,
                                                                loc: {
                                                                  start: { line: 29, column: 14, index: 805 },
                                                                  end: { line: 29, column: 74, index: 865 },
                                                                },
                                                                id: {
                                                                  type: "Identifier",
                                                                  start: 805,
                                                                  end: 812,
                                                                  loc: {
                                                                    start: { line: 29, column: 14, index: 805 },
                                                                    end: { line: 29, column: 21, index: 812 },
                                                                    identifierName: "element",
                                                                  },
                                                                  name: "element",
                                                                },
                                                                init: {
                                                                  type: "CallExpression",
                                                                  start: 815,
                                                                  end: 865,
                                                                  loc: {
                                                                    start: { line: 29, column: 24, index: 815 },
                                                                    end: { line: 29, column: 74, index: 865 },
                                                                  },
                                                                  callee: {
                                                                    type: "MemberExpression",
                                                                    start: 815,
                                                                    end: 838,
                                                                    loc: {
                                                                      start: { line: 29, column: 24, index: 815 },
                                                                      end: { line: 29, column: 47, index: 838 },
                                                                    },
                                                                    object: {
                                                                      type: "Identifier",
                                                                      start: 815,
                                                                      end: 823,
                                                                      loc: {
                                                                        start: { line: 29, column: 24, index: 815 },
                                                                        end: { line: 29, column: 32, index: 823 },
                                                                        identifierName: "document",
                                                                      },
                                                                      name: "document",
                                                                    },
                                                                    computed: false,
                                                                    property: {
                                                                      type: "Identifier",
                                                                      start: 824,
                                                                      end: 838,
                                                                      loc: {
                                                                        start: { line: 29, column: 33, index: 824 },
                                                                        end: { line: 29, column: 47, index: 838 },
                                                                        identifierName: "getElementById",
                                                                      },
                                                                      name: "getElementById",
                                                                    },
                                                                  },
                                                                  arguments: [
                                                                    {
                                                                      type: "TemplateLiteral",
                                                                      start: 839,
                                                                      end: 864,
                                                                      loc: {
                                                                        start: { line: 29, column: 48, index: 839 },
                                                                        end: { line: 29, column: 73, index: 864 },
                                                                      },
                                                                      expressions: [],
                                                                      quasis: [
                                                                        {
                                                                          type: "TemplateElement",
                                                                          start: 840,
                                                                          end: 863,
                                                                          loc: {
                                                                            start: { line: 29, column: 49, index: 840 },
                                                                            end: { line: 29, column: 72, index: 863 },
                                                                          },
                                                                          value: {
                                                                            raw: "entry.target.id-navItem",
                                                                            cooked: "entry.target.id-navItem",
                                                                          },
                                                                          tail: true,
                                                                        },
                                                                      ],
                                                                    },
                                                                  ],
                                                                },
                                                              },
                                                            ],
                                                            kind: "const",
                                                          },
                                                          {
                                                            type: "IfStatement",
                                                            start: 874,
                                                            end: 1110,
                                                            loc: {
                                                              start: { line: 30, column: 8, index: 874 },
                                                              end: { line: 34, column: 9, index: 1110 },
                                                            },
                                                            test: {
                                                              type: "MemberExpression",
                                                              start: 878,
                                                              end: 898,
                                                              loc: {
                                                                start: { line: 30, column: 12, index: 878 },
                                                                end: { line: 30, column: 32, index: 898 },
                                                              },
                                                              object: {
                                                                type: "Identifier",
                                                                start: 878,
                                                                end: 883,
                                                                loc: {
                                                                  start: { line: 30, column: 12, index: 878 },
                                                                  end: { line: 30, column: 17, index: 883 },
                                                                  identifierName: "entry",
                                                                },
                                                                name: "entry",
                                                              },
                                                              computed: false,
                                                              property: {
                                                                type: "Identifier",
                                                                start: 884,
                                                                end: 898,
                                                                loc: {
                                                                  start: { line: 30, column: 18, index: 884 },
                                                                  end: { line: 30, column: 32, index: 898 },
                                                                  identifierName: "isIntersecting",
                                                                },
                                                                name: "isIntersecting",
                                                              },
                                                            },
                                                            consequent: {
                                                              type: "BlockStatement",
                                                              start: 900,
                                                              end: 1110,
                                                              loc: {
                                                                start: { line: 30, column: 34, index: 900 },
                                                                end: { line: 34, column: 9, index: 1110 },
                                                              },
                                                              body: [
                                                                {
                                                                  type: "ExpressionStatement",
                                                                  start: 912,
                                                                  end: 962,
                                                                  loc: {
                                                                    start: { line: 31, column: 10, index: 912 },
                                                                    end: { line: 31, column: 60, index: 962 },
                                                                  },
                                                                  expression: {
                                                                    type: "CallExpression",
                                                                    start: 912,
                                                                    end: 962,
                                                                    loc: {
                                                                      start: { line: 31, column: 10, index: 912 },
                                                                      end: { line: 31, column: 60, index: 962 },
                                                                    },
                                                                    callee: {
                                                                      type: "Identifier",
                                                                      start: 912,
                                                                      end: 923,
                                                                      loc: {
                                                                        start: { line: 31, column: 10, index: 912 },
                                                                        end: { line: 31, column: 21, index: 923 },
                                                                        identifierName: "setProgress",
                                                                      },
                                                                      name: "setProgress",
                                                                    },
                                                                    arguments: [
                                                                      {
                                                                        type: "TemplateLiteral",
                                                                        start: 924,
                                                                        end: 961,
                                                                        loc: {
                                                                          start: { line: 31, column: 22, index: 924 },
                                                                          end: { line: 31, column: 59, index: 961 },
                                                                        },
                                                                        expressions: [],
                                                                        quasis: [
                                                                          {
                                                                            type: "TemplateElement",
                                                                            start: 925,
                                                                            end: 960,
                                                                            loc: {
                                                                              start: {
                                                                                line: 31,
                                                                                column: 23,
                                                                                index: 925,
                                                                              },
                                                                              end: { line: 31, column: 58, index: 960 },
                                                                            },
                                                                            value: {
                                                                              raw: "element.getBoundingClientRect().xpx",
                                                                              cooked:
                                                                                "element.getBoundingClientRect().xpx",
                                                                            },
                                                                            tail: true,
                                                                          },
                                                                        ],
                                                                      },
                                                                    ],
                                                                  },
                                                                },
                                                                {
                                                                  type: "VariableDeclaration",
                                                                  start: 973,
                                                                  end: 1057,
                                                                  loc: {
                                                                    start: { line: 32, column: 10, index: 973 },
                                                                    end: { line: 32, column: 94, index: 1057 },
                                                                  },
                                                                  declarations: [
                                                                    {
                                                                      type: "VariableDeclarator",
                                                                      start: 979,
                                                                      end: 1057,
                                                                      loc: {
                                                                        start: { line: 32, column: 16, index: 979 },
                                                                        end: { line: 32, column: 94, index: 1057 },
                                                                      },
                                                                      id: {
                                                                        type: "Identifier",
                                                                        start: 979,
                                                                        end: 995,
                                                                        loc: {
                                                                          start: { line: 32, column: 16, index: 979 },
                                                                          end: { line: 32, column: 32, index: 995 },
                                                                          identifierName: "currentItemIndex",
                                                                        },
                                                                        name: "currentItemIndex",
                                                                      },
                                                                      init: {
                                                                        type: "CallExpression",
                                                                        start: 998,
                                                                        end: 1057,
                                                                        loc: {
                                                                          start: { line: 32, column: 35, index: 998 },
                                                                          end: { line: 32, column: 94, index: 1057 },
                                                                        },
                                                                        callee: {
                                                                          type: "MemberExpression",
                                                                          start: 998,
                                                                          end: 1016,
                                                                          loc: {
                                                                            start: { line: 32, column: 35, index: 998 },
                                                                            end: { line: 32, column: 53, index: 1016 },
                                                                          },
                                                                          object: {
                                                                            type: "Identifier",
                                                                            start: 998,
                                                                            end: 1006,
                                                                            loc: {
                                                                              start: {
                                                                                line: 32,
                                                                                column: 35,
                                                                                index: 998,
                                                                              },
                                                                              end: {
                                                                                line: 32,
                                                                                column: 43,
                                                                                index: 1006,
                                                                              },
                                                                              identifierName: "navItems",
                                                                            },
                                                                            name: "navItems",
                                                                          },
                                                                          computed: false,
                                                                          property: {
                                                                            type: "Identifier",
                                                                            start: 1007,
                                                                            end: 1016,
                                                                            loc: {
                                                                              start: {
                                                                                line: 32,
                                                                                column: 44,
                                                                                index: 1007,
                                                                              },
                                                                              end: {
                                                                                line: 32,
                                                                                column: 53,
                                                                                index: 1016,
                                                                              },
                                                                              identifierName: "findIndex",
                                                                            },
                                                                            name: "findIndex",
                                                                          },
                                                                        },
                                                                        arguments: [
                                                                          {
                                                                            type: "ArrowFunctionExpression",
                                                                            start: 1017,
                                                                            end: 1056,
                                                                            loc: {
                                                                              start: {
                                                                                line: 32,
                                                                                column: 54,
                                                                                index: 1017,
                                                                              },
                                                                              end: {
                                                                                line: 32,
                                                                                column: 93,
                                                                                index: 1056,
                                                                              },
                                                                            },
                                                                            id: null,
                                                                            generator: false,
                                                                            async: false,
                                                                            params: [
                                                                              {
                                                                                type: "Identifier",
                                                                                start: 1018,
                                                                                end: 1022,
                                                                                loc: {
                                                                                  start: {
                                                                                    line: 32,
                                                                                    column: 55,
                                                                                    index: 1018,
                                                                                  },
                                                                                  end: {
                                                                                    line: 32,
                                                                                    column: 59,
                                                                                    index: 1022,
                                                                                  },
                                                                                  identifierName: "item",
                                                                                },
                                                                                name: "item",
                                                                              },
                                                                            ],
                                                                            body: {
                                                                              type: "BinaryExpression",
                                                                              start: 1027,
                                                                              end: 1056,
                                                                              loc: {
                                                                                start: {
                                                                                  line: 32,
                                                                                  column: 64,
                                                                                  index: 1027,
                                                                                },
                                                                                end: {
                                                                                  line: 32,
                                                                                  column: 93,
                                                                                  index: 1056,
                                                                                },
                                                                              },
                                                                              left: {
                                                                                type: "MemberExpression",
                                                                                start: 1027,
                                                                                end: 1036,
                                                                                loc: {
                                                                                  start: {
                                                                                    line: 32,
                                                                                    column: 64,
                                                                                    index: 1027,
                                                                                  },
                                                                                  end: {
                                                                                    line: 32,
                                                                                    column: 73,
                                                                                    index: 1036,
                                                                                  },
                                                                                },
                                                                                object: {
                                                                                  type: "Identifier",
                                                                                  start: 1027,
                                                                                  end: 1031,
                                                                                  loc: {
                                                                                    start: {
                                                                                      line: 32,
                                                                                      column: 64,
                                                                                      index: 1027,
                                                                                    },
                                                                                    end: {
                                                                                      line: 32,
                                                                                      column: 68,
                                                                                      index: 1031,
                                                                                    },
                                                                                    identifierName: "item",
                                                                                  },
                                                                                  name: "item",
                                                                                },
                                                                                computed: false,
                                                                                property: {
                                                                                  type: "Identifier",
                                                                                  start: 1032,
                                                                                  end: 1036,
                                                                                  loc: {
                                                                                    start: {
                                                                                      line: 32,
                                                                                      column: 69,
                                                                                      index: 1032,
                                                                                    },
                                                                                    end: {
                                                                                      line: 32,
                                                                                      column: 73,
                                                                                      index: 1036,
                                                                                    },
                                                                                    identifierName: "href",
                                                                                  },
                                                                                  name: "href",
                                                                                },
                                                                              },
                                                                              operator: "===",
                                                                              right: {
                                                                                type: "MemberExpression",
                                                                                start: 1041,
                                                                                end: 1056,
                                                                                loc: {
                                                                                  start: {
                                                                                    line: 32,
                                                                                    column: 78,
                                                                                    index: 1041,
                                                                                  },
                                                                                  end: {
                                                                                    line: 32,
                                                                                    column: 93,
                                                                                    index: 1056,
                                                                                  },
                                                                                },
                                                                                object: {
                                                                                  type: "MemberExpression",
                                                                                  start: 1041,
                                                                                  end: 1053,
                                                                                  loc: {
                                                                                    start: {
                                                                                      line: 32,
                                                                                      column: 78,
                                                                                      index: 1041,
                                                                                    },
                                                                                    end: {
                                                                                      line: 32,
                                                                                      column: 90,
                                                                                      index: 1053,
                                                                                    },
                                                                                  },
                                                                                  object: {
                                                                                    type: "Identifier",
                                                                                    start: 1041,
                                                                                    end: 1046,
                                                                                    loc: {
                                                                                      start: {
                                                                                        line: 32,
                                                                                        column: 78,
                                                                                        index: 1041,
                                                                                      },
                                                                                      end: {
                                                                                        line: 32,
                                                                                        column: 83,
                                                                                        index: 1046,
                                                                                      },
                                                                                      identifierName: "entry",
                                                                                    },
                                                                                    name: "entry",
                                                                                  },
                                                                                  computed: false,
                                                                                  property: {
                                                                                    type: "Identifier",
                                                                                    start: 1047,
                                                                                    end: 1053,
                                                                                    loc: {
                                                                                      start: {
                                                                                        line: 32,
                                                                                        column: 84,
                                                                                        index: 1047,
                                                                                      },
                                                                                      end: {
                                                                                        line: 32,
                                                                                        column: 90,
                                                                                        index: 1053,
                                                                                      },
                                                                                      identifierName: "target",
                                                                                    },
                                                                                    name: "target",
                                                                                  },
                                                                                },
                                                                                computed: false,
                                                                                property: {
                                                                                  type: "Identifier",
                                                                                  start: 1054,
                                                                                  end: 1056,
                                                                                  loc: {
                                                                                    start: {
                                                                                      line: 32,
                                                                                      column: 91,
                                                                                      index: 1054,
                                                                                    },
                                                                                    end: {
                                                                                      line: 32,
                                                                                      column: 93,
                                                                                      index: 1056,
                                                                                    },
                                                                                    identifierName: "id",
                                                                                  },
                                                                                  name: "id",
                                                                                },
                                                                              },
                                                                            },
                                                                          },
                                                                        ],
                                                                      },
                                                                    },
                                                                  ],
                                                                  kind: "const",
                                                                },
                                                                {
                                                                  type: "ExpressionStatement",
                                                                  start: 1068,
                                                                  end: 1100,
                                                                  loc: {
                                                                    start: { line: 33, column: 10, index: 1068 },
                                                                    end: { line: 33, column: 42, index: 1100 },
                                                                  },
                                                                  expression: {
                                                                    type: "CallExpression",
                                                                    start: 1068,
                                                                    end: 1100,
                                                                    loc: {
                                                                      start: { line: 33, column: 10, index: 1068 },
                                                                      end: { line: 33, column: 42, index: 1100 },
                                                                    },
                                                                    callee: {
                                                                      type: "Identifier",
                                                                      start: 1068,
                                                                      end: 1082,
                                                                      loc: {
                                                                        start: { line: 33, column: 10, index: 1068 },
                                                                        end: { line: 33, column: 24, index: 1082 },
                                                                        identifierName: "setActiveTitle",
                                                                      },
                                                                      name: "setActiveTitle",
                                                                    },
                                                                    arguments: [
                                                                      {
                                                                        type: "Identifier",
                                                                        start: 1083,
                                                                        end: 1099,
                                                                        loc: {
                                                                          start: { line: 33, column: 25, index: 1083 },
                                                                          end: { line: 33, column: 41, index: 1099 },
                                                                          identifierName: "currentItemIndex",
                                                                        },
                                                                        name: "currentItemIndex",
                                                                      },
                                                                    ],
                                                                  },
                                                                },
                                                              ],
                                                              directives: [],
                                                            },
                                                            alternate: null,
                                                          },
                                                        ],
                                                        directives: [],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                            kind: "const",
                                          },
                                          {
                                            type: "VariableDeclaration",
                                            start: 1126,
                                            end: 1173,
                                            loc: {
                                              start: { line: 36, column: 6, index: 1126 },
                                              end: { line: 36, column: 53, index: 1173 },
                                            },
                                            declarations: [
                                              {
                                                type: "VariableDeclarator",
                                                start: 1132,
                                                end: 1173,
                                                loc: {
                                                  start: { line: 36, column: 12, index: 1132 },
                                                  end: { line: 36, column: 53, index: 1173 },
                                                },
                                                id: {
                                                  type: "Identifier",
                                                  start: 1132,
                                                  end: 1139,
                                                  loc: {
                                                    start: { line: 36, column: 12, index: 1132 },
                                                    end: { line: 36, column: 19, index: 1139 },
                                                    identifierName: "element",
                                                  },
                                                  name: "element",
                                                },
                                                init: {
                                                  type: "CallExpression",
                                                  start: 1142,
                                                  end: 1173,
                                                  loc: {
                                                    start: { line: 36, column: 22, index: 1142 },
                                                    end: { line: 36, column: 53, index: 1173 },
                                                  },
                                                  callee: {
                                                    type: "MemberExpression",
                                                    start: 1142,
                                                    end: 1165,
                                                    loc: {
                                                      start: { line: 36, column: 22, index: 1142 },
                                                      end: { line: 36, column: 45, index: 1165 },
                                                    },
                                                    object: {
                                                      type: "Identifier",
                                                      start: 1142,
                                                      end: 1150,
                                                      loc: {
                                                        start: { line: 36, column: 22, index: 1142 },
                                                        end: { line: 36, column: 30, index: 1150 },
                                                        identifierName: "document",
                                                      },
                                                      name: "document",
                                                    },
                                                    computed: false,
                                                    property: {
                                                      type: "Identifier",
                                                      start: 1151,
                                                      end: 1165,
                                                      loc: {
                                                        start: { line: 36, column: 31, index: 1151 },
                                                        end: { line: 36, column: 45, index: 1165 },
                                                        identifierName: "getElementById",
                                                      },
                                                      name: "getElementById",
                                                    },
                                                  },
                                                  arguments: [
                                                    {
                                                      type: "MemberExpression",
                                                      start: 1166,
                                                      end: 1172,
                                                      loc: {
                                                        start: { line: 36, column: 46, index: 1166 },
                                                        end: { line: 36, column: 52, index: 1172 },
                                                      },
                                                      object: {
                                                        type: "Identifier",
                                                        start: 1166,
                                                        end: 1167,
                                                        loc: {
                                                          start: { line: 36, column: 46, index: 1166 },
                                                          end: { line: 36, column: 47, index: 1167 },
                                                          identifierName: "e",
                                                        },
                                                        name: "e",
                                                      },
                                                      computed: false,
                                                      property: {
                                                        type: "Identifier",
                                                        start: 1168,
                                                        end: 1172,
                                                        loc: {
                                                          start: { line: 36, column: 48, index: 1168 },
                                                          end: { line: 36, column: 52, index: 1172 },
                                                          identifierName: "href",
                                                        },
                                                        name: "href",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                            kind: "const",
                                          },
                                          {
                                            type: "ExpressionStatement",
                                            start: 1180,
                                            end: 1216,
                                            loc: {
                                              start: { line: 37, column: 6, index: 1180 },
                                              end: { line: 37, column: 42, index: 1216 },
                                            },
                                            expression: {
                                              type: "LogicalExpression",
                                              start: 1180,
                                              end: 1216,
                                              loc: {
                                                start: { line: 37, column: 6, index: 1180 },
                                                end: { line: 37, column: 42, index: 1216 },
                                              },
                                              left: {
                                                type: "Identifier",
                                                start: 1180,
                                                end: 1187,
                                                loc: {
                                                  start: { line: 37, column: 6, index: 1180 },
                                                  end: { line: 37, column: 13, index: 1187 },
                                                  identifierName: "element",
                                                },
                                                name: "element",
                                              },
                                              operator: "&&",
                                              right: {
                                                type: "CallExpression",
                                                start: 1191,
                                                end: 1216,
                                                loc: {
                                                  start: { line: 37, column: 17, index: 1191 },
                                                  end: { line: 37, column: 42, index: 1216 },
                                                },
                                                callee: {
                                                  type: "MemberExpression",
                                                  start: 1191,
                                                  end: 1207,
                                                  loc: {
                                                    start: { line: 37, column: 17, index: 1191 },
                                                    end: { line: 37, column: 33, index: 1207 },
                                                  },
                                                  object: {
                                                    type: "Identifier",
                                                    start: 1191,
                                                    end: 1199,
                                                    loc: {
                                                      start: { line: 37, column: 17, index: 1191 },
                                                      end: { line: 37, column: 25, index: 1199 },
                                                      identifierName: "observer",
                                                    },
                                                    name: "observer",
                                                  },
                                                  computed: false,
                                                  property: {
                                                    type: "Identifier",
                                                    start: 1200,
                                                    end: 1207,
                                                    loc: {
                                                      start: { line: 37, column: 26, index: 1200 },
                                                      end: { line: 37, column: 33, index: 1207 },
                                                      identifierName: "observe",
                                                    },
                                                    name: "observe",
                                                  },
                                                },
                                                arguments: [
                                                  {
                                                    type: "Identifier",
                                                    start: 1208,
                                                    end: 1215,
                                                    loc: {
                                                      start: { line: 37, column: 34, index: 1208 },
                                                      end: { line: 37, column: 41, index: 1215 },
                                                      identifierName: "element",
                                                    },
                                                    name: "element",
                                                  },
                                                ],
                                              },
                                            },
                                          },
                                          {
                                            type: "ReturnStatement",
                                            start: 1223,
                                            end: 1275,
                                            loc: {
                                              start: { line: 38, column: 6, index: 1223 },
                                              end: { line: 40, column: 7, index: 1275 },
                                            },
                                            argument: {
                                              type: "ArrowFunctionExpression",
                                              start: 1230,
                                              end: 1275,
                                              loc: {
                                                start: { line: 38, column: 13, index: 1230 },
                                                end: { line: 40, column: 7, index: 1275 },
                                              },
                                              id: null,
                                              generator: false,
                                              async: false,
                                              params: [],
                                              body: {
                                                type: "BlockStatement",
                                                start: 1236,
                                                end: 1275,
                                                loc: {
                                                  start: { line: 38, column: 19, index: 1236 },
                                                  end: { line: 40, column: 7, index: 1275 },
                                                },
                                                body: [
                                                  {
                                                    type: "ExpressionStatement",
                                                    start: 1246,
                                                    end: 1267,
                                                    loc: {
                                                      start: { line: 39, column: 8, index: 1246 },
                                                      end: { line: 39, column: 29, index: 1267 },
                                                    },
                                                    expression: {
                                                      type: "CallExpression",
                                                      start: 1246,
                                                      end: 1267,
                                                      loc: {
                                                        start: { line: 39, column: 8, index: 1246 },
                                                        end: { line: 39, column: 29, index: 1267 },
                                                      },
                                                      callee: {
                                                        type: "MemberExpression",
                                                        start: 1246,
                                                        end: 1265,
                                                        loc: {
                                                          start: { line: 39, column: 8, index: 1246 },
                                                          end: { line: 39, column: 27, index: 1265 },
                                                        },
                                                        object: {
                                                          type: "Identifier",
                                                          start: 1246,
                                                          end: 1254,
                                                          loc: {
                                                            start: { line: 39, column: 8, index: 1246 },
                                                            end: { line: 39, column: 16, index: 1254 },
                                                            identifierName: "observer",
                                                          },
                                                          name: "observer",
                                                        },
                                                        computed: false,
                                                        property: {
                                                          type: "Identifier",
                                                          start: 1255,
                                                          end: 1265,
                                                          loc: {
                                                            start: { line: 39, column: 17, index: 1255 },
                                                            end: { line: 39, column: 27, index: 1265 },
                                                            identifierName: "disconnect",
                                                          },
                                                          name: "disconnect",
                                                        },
                                                      },
                                                      arguments: [],
                                                    },
                                                  },
                                                ],
                                                directives: [],
                                              },
                                            },
                                          },
                                        ],
                                        directives: [],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                            directives: [],
                          },
                        },
                        {
                          type: "ArrayExpression",
                          start: 1288,
                          end: 1290,
                          loc: {
                            start: { line: 42, column: 5, index: 1288 },
                            end: { line: 42, column: 7, index: 1290 },
                          },
                          elements: [],
                        },
                      ],
                    },
                  },
                  {
                    type: "ReturnStatement",
                    start: 1295,
                    end: 1726,
                    loc: { start: { line: 44, column: 2, index: 1295 }, end: { line: 59, column: 3, index: 1726 } },
                    argument: {
                      type: "JSXElement",
                      start: 1308,
                      end: 1722,
                      loc: { start: { line: 45, column: 4, index: 1308 }, end: { line: 58, column: 26, index: 1722 } },
                      openingElement: {
                        type: "JSXOpeningElement",
                        start: 1308,
                        end: 1349,
                        loc: {
                          start: { line: 45, column: 4, index: 1308 },
                          end: { line: 45, column: 45, index: 1349 },
                        },
                        name: {
                          type: "JSXIdentifier",
                          start: 1309,
                          end: 1328,
                          loc: {
                            start: { line: 45, column: 5, index: 1309 },
                            end: { line: 45, column: 24, index: 1328 },
                          },
                          name: "StyledNavigationBar",
                        },
                        attributes: [
                          {
                            type: "JSXAttribute",
                            start: 1329,
                            end: 1348,
                            loc: {
                              start: { line: 45, column: 25, index: 1329 },
                              end: { line: 45, column: 44, index: 1348 },
                            },
                            name: {
                              type: "JSXIdentifier",
                              start: 1329,
                              end: 1337,
                              loc: {
                                start: { line: 45, column: 25, index: 1329 },
                                end: { line: 45, column: 33, index: 1337 },
                              },
                              name: "progress",
                            },
                            value: {
                              type: "JSXExpressionContainer",
                              start: 1338,
                              end: 1348,
                              loc: {
                                start: { line: 45, column: 34, index: 1338 },
                                end: { line: 45, column: 44, index: 1348 },
                              },
                              expression: {
                                type: "Identifier",
                                start: 1339,
                                end: 1347,
                                loc: {
                                  start: { line: 45, column: 35, index: 1339 },
                                  end: { line: 45, column: 43, index: 1347 },
                                  identifierName: "progress",
                                },
                                name: "progress",
                              },
                            },
                          },
                        ],
                        selfClosing: false,
                      },
                      closingElement: {
                        type: "JSXClosingElement",
                        start: 1700,
                        end: 1722,
                        loc: {
                          start: { line: 58, column: 4, index: 1700 },
                          end: { line: 58, column: 26, index: 1722 },
                        },
                        name: {
                          type: "JSXIdentifier",
                          start: 1702,
                          end: 1721,
                          loc: {
                            start: { line: 58, column: 6, index: 1702 },
                            end: { line: 58, column: 25, index: 1721 },
                          },
                          name: "StyledNavigationBar",
                        },
                      },
                      children: [
                        {
                          type: "JSXText",
                          start: 1349,
                          end: 1356,
                          loc: {
                            start: { line: 45, column: 45, index: 1349 },
                            end: { line: 46, column: 6, index: 1356 },
                          },
                          extra: { rawValue: "\n      ", raw: "\n      " },
                          value: "\n      ",
                        },
                        {
                          type: "JSXElement",
                          start: 1356,
                          end: 1695,
                          loc: {
                            start: { line: 46, column: 6, index: 1356 },
                            end: { line: 57, column: 18, index: 1695 },
                          },
                          openingElement: {
                            type: "JSXOpeningElement",
                            start: 1356,
                            end: 1367,
                            loc: {
                              start: { line: 46, column: 6, index: 1356 },
                              end: { line: 46, column: 17, index: 1367 },
                            },
                            name: {
                              type: "JSXIdentifier",
                              start: 1357,
                              end: 1366,
                              loc: {
                                start: { line: 46, column: 7, index: 1357 },
                                end: { line: 46, column: 16, index: 1366 },
                              },
                              name: "ItemsList",
                            },
                            attributes: [],
                            selfClosing: false,
                          },
                          closingElement: {
                            type: "JSXClosingElement",
                            start: 1683,
                            end: 1695,
                            loc: {
                              start: { line: 57, column: 6, index: 1683 },
                              end: { line: 57, column: 18, index: 1695 },
                            },
                            name: {
                              type: "JSXIdentifier",
                              start: 1685,
                              end: 1694,
                              loc: {
                                start: { line: 57, column: 8, index: 1685 },
                                end: { line: 57, column: 17, index: 1694 },
                              },
                              name: "ItemsList",
                            },
                          },
                          children: [
                            {
                              type: "JSXText",
                              start: 1367,
                              end: 1376,
                              loc: {
                                start: { line: 46, column: 17, index: 1367 },
                                end: { line: 47, column: 8, index: 1376 },
                              },
                              extra: { rawValue: "\n        ", raw: "\n        " },
                              value: "\n        ",
                            },
                            {
                              type: "JSXExpressionContainer",
                              start: 1376,
                              end: 1676,
                              loc: {
                                start: { line: 47, column: 8, index: 1376 },
                                end: { line: 56, column: 11, index: 1676 },
                              },
                              expression: {
                                type: "CallExpression",
                                start: 1377,
                                end: 1675,
                                loc: {
                                  start: { line: 47, column: 9, index: 1377 },
                                  end: { line: 56, column: 10, index: 1675 },
                                },
                                callee: {
                                  type: "MemberExpression",
                                  start: 1377,
                                  end: 1389,
                                  loc: {
                                    start: { line: 47, column: 9, index: 1377 },
                                    end: { line: 47, column: 21, index: 1389 },
                                  },
                                  object: {
                                    type: "Identifier",
                                    start: 1377,
                                    end: 1385,
                                    loc: {
                                      start: { line: 47, column: 9, index: 1377 },
                                      end: { line: 47, column: 17, index: 1385 },
                                      identifierName: "navItems",
                                    },
                                    name: "navItems",
                                  },
                                  computed: false,
                                  property: {
                                    type: "Identifier",
                                    start: 1386,
                                    end: 1389,
                                    loc: {
                                      start: { line: 47, column: 18, index: 1386 },
                                      end: { line: 47, column: 21, index: 1389 },
                                      identifierName: "map",
                                    },
                                    name: "map",
                                  },
                                },
                                arguments: [
                                  {
                                    type: "ArrowFunctionExpression",
                                    start: 1390,
                                    end: 1674,
                                    loc: {
                                      start: { line: 47, column: 22, index: 1390 },
                                      end: { line: 56, column: 9, index: 1674 },
                                    },
                                    id: null,
                                    generator: false,
                                    async: false,
                                    params: [
                                      {
                                        type: "Identifier",
                                        start: 1391,
                                        end: 1398,
                                        loc: {
                                          start: { line: 47, column: 23, index: 1391 },
                                          end: { line: 47, column: 30, index: 1398 },
                                          identifierName: "navItem",
                                        },
                                        name: "navItem",
                                      },
                                      {
                                        type: "Identifier",
                                        start: 1400,
                                        end: 1405,
                                        loc: {
                                          start: { line: 47, column: 32, index: 1400 },
                                          end: { line: 47, column: 37, index: 1405 },
                                          identifierName: "index",
                                        },
                                        name: "index",
                                      },
                                    ],
                                    body: {
                                      type: "JSXElement",
                                      start: 1422,
                                      end: 1664,
                                      loc: {
                                        start: { line: 48, column: 10, index: 1422 },
                                        end: { line: 55, column: 20, index: 1664 },
                                      },
                                      openingElement: {
                                        type: "JSXOpeningElement",
                                        start: 1422,
                                        end: 1615,
                                        loc: {
                                          start: { line: 48, column: 10, index: 1422 },
                                          end: { line: 53, column: 11, index: 1615 },
                                        },
                                        name: {
                                          type: "JSXIdentifier",
                                          start: 1423,
                                          end: 1430,
                                          loc: {
                                            start: { line: 48, column: 11, index: 1423 },
                                            end: { line: 48, column: 18, index: 1430 },
                                          },
                                          name: "NavItem",
                                        },
                                        attributes: [
                                          {
                                            type: "JSXAttribute",
                                            start: 1443,
                                            end: 1454,
                                            loc: {
                                              start: { line: 49, column: 12, index: 1443 },
                                              end: { line: 49, column: 23, index: 1454 },
                                            },
                                            name: {
                                              type: "JSXIdentifier",
                                              start: 1443,
                                              end: 1446,
                                              loc: {
                                                start: { line: 49, column: 12, index: 1443 },
                                                end: { line: 49, column: 15, index: 1446 },
                                              },
                                              name: "key",
                                            },
                                            value: {
                                              type: "JSXExpressionContainer",
                                              start: 1447,
                                              end: 1454,
                                              loc: {
                                                start: { line: 49, column: 16, index: 1447 },
                                                end: { line: 49, column: 23, index: 1454 },
                                              },
                                              expression: {
                                                type: "Identifier",
                                                start: 1448,
                                                end: 1453,
                                                loc: {
                                                  start: { line: 49, column: 17, index: 1448 },
                                                  end: { line: 49, column: 22, index: 1453 },
                                                  identifierName: "index",
                                                },
                                                name: "index",
                                              },
                                            },
                                          },
                                          {
                                            type: "JSXAttribute",
                                            start: 1467,
                                            end: 1499,
                                            loc: {
                                              start: { line: 50, column: 12, index: 1467 },
                                              end: { line: 50, column: 44, index: 1499 },
                                            },
                                            name: {
                                              type: "JSXIdentifier",
                                              start: 1467,
                                              end: 1475,
                                              loc: {
                                                start: { line: 50, column: 12, index: 1467 },
                                                end: { line: 50, column: 20, index: 1475 },
                                              },
                                              name: "isActive",
                                            },
                                            value: {
                                              type: "JSXExpressionContainer",
                                              start: 1476,
                                              end: 1499,
                                              loc: {
                                                start: { line: 50, column: 21, index: 1476 },
                                                end: { line: 50, column: 44, index: 1499 },
                                              },
                                              expression: {
                                                type: "BinaryExpression",
                                                start: 1477,
                                                end: 1498,
                                                loc: {
                                                  start: { line: 50, column: 22, index: 1477 },
                                                  end: { line: 50, column: 43, index: 1498 },
                                                },
                                                left: {
                                                  type: "Identifier",
                                                  start: 1477,
                                                  end: 1488,
                                                  loc: {
                                                    start: { line: 50, column: 22, index: 1477 },
                                                    end: { line: 50, column: 33, index: 1488 },
                                                    identifierName: "activeTitle",
                                                  },
                                                  name: "activeTitle",
                                                },
                                                operator: "===",
                                                right: {
                                                  type: "Identifier",
                                                  start: 1493,
                                                  end: 1498,
                                                  loc: {
                                                    start: { line: 50, column: 38, index: 1493 },
                                                    end: { line: 50, column: 43, index: 1498 },
                                                    identifierName: "index",
                                                  },
                                                  name: "index",
                                                },
                                              },
                                            },
                                          },
                                          {
                                            type: "JSXAttribute",
                                            start: 1512,
                                            end: 1539,
                                            loc: {
                                              start: { line: 51, column: 12, index: 1512 },
                                              end: { line: 51, column: 39, index: 1539 },
                                            },
                                            name: {
                                              type: "JSXIdentifier",
                                              start: 1512,
                                              end: 1514,
                                              loc: {
                                                start: { line: 51, column: 12, index: 1512 },
                                                end: { line: 51, column: 14, index: 1514 },
                                              },
                                              name: "id",
                                            },
                                            value: {
                                              type: "JSXExpressionContainer",
                                              start: 1515,
                                              end: 1539,
                                              loc: {
                                                start: { line: 51, column: 15, index: 1515 },
                                                end: { line: 51, column: 39, index: 1539 },
                                              },
                                              expression: {
                                                type: "TemplateLiteral",
                                                start: 1516,
                                                end: 1538,
                                                loc: {
                                                  start: { line: 51, column: 16, index: 1516 },
                                                  end: { line: 51, column: 38, index: 1538 },
                                                },
                                                expressions: [],
                                                quasis: [
                                                  {
                                                    type: "TemplateElement",
                                                    start: 1517,
                                                    end: 1537,
                                                    loc: {
                                                      start: { line: 51, column: 17, index: 1517 },
                                                      end: { line: 51, column: 37, index: 1537 },
                                                    },
                                                    value: {
                                                      raw: "navItem.href-navItem",
                                                      cooked: "navItem.href-navItem",
                                                    },
                                                    tail: true,
                                                  },
                                                ],
                                              },
                                            },
                                          },
                                          {
                                            type: "JSXAttribute",
                                            start: 1552,
                                            end: 1603,
                                            loc: {
                                              start: { line: 52, column: 12, index: 1552 },
                                              end: { line: 52, column: 63, index: 1603 },
                                            },
                                            name: {
                                              type: "JSXIdentifier",
                                              start: 1552,
                                              end: 1559,
                                              loc: {
                                                start: { line: 52, column: 12, index: 1552 },
                                                end: { line: 52, column: 19, index: 1559 },
                                              },
                                              name: "onClick",
                                            },
                                            value: {
                                              type: "JSXExpressionContainer",
                                              start: 1560,
                                              end: 1603,
                                              loc: {
                                                start: { line: 52, column: 20, index: 1560 },
                                                end: { line: 52, column: 63, index: 1603 },
                                              },
                                              expression: {
                                                type: "ArrowFunctionExpression",
                                                start: 1561,
                                                end: 1602,
                                                loc: {
                                                  start: { line: 52, column: 21, index: 1561 },
                                                  end: { line: 52, column: 62, index: 1602 },
                                                },
                                                id: null,
                                                generator: false,
                                                async: false,
                                                params: [],
                                                body: {
                                                  type: "CallExpression",
                                                  start: 1567,
                                                  end: 1602,
                                                  loc: {
                                                    start: { line: 52, column: 27, index: 1567 },
                                                    end: { line: 52, column: 62, index: 1602 },
                                                  },
                                                  callee: {
                                                    type: "Identifier",
                                                    start: 1567,
                                                    end: 1588,
                                                    loc: {
                                                      start: { line: 52, column: 27, index: 1567 },
                                                      end: { line: 52, column: 48, index: 1588 },
                                                      identifierName: "handleScrollToElement",
                                                    },
                                                    name: "handleScrollToElement",
                                                  },
                                                  arguments: [
                                                    {
                                                      type: "MemberExpression",
                                                      start: 1589,
                                                      end: 1601,
                                                      loc: {
                                                        start: { line: 52, column: 49, index: 1589 },
                                                        end: { line: 52, column: 61, index: 1601 },
                                                      },
                                                      object: {
                                                        type: "Identifier",
                                                        start: 1589,
                                                        end: 1596,
                                                        loc: {
                                                          start: { line: 52, column: 49, index: 1589 },
                                                          end: { line: 52, column: 56, index: 1596 },
                                                          identifierName: "navItem",
                                                        },
                                                        name: "navItem",
                                                      },
                                                      computed: false,
                                                      property: {
                                                        type: "Identifier",
                                                        start: 1597,
                                                        end: 1601,
                                                        loc: {
                                                          start: { line: 52, column: 57, index: 1597 },
                                                          end: { line: 52, column: 61, index: 1601 },
                                                          identifierName: "href",
                                                        },
                                                        name: "href",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            },
                                          },
                                        ],
                                        selfClosing: false,
                                      },
                                      closingElement: {
                                        type: "JSXClosingElement",
                                        start: 1654,
                                        end: 1664,
                                        loc: {
                                          start: { line: 55, column: 10, index: 1654 },
                                          end: { line: 55, column: 20, index: 1664 },
                                        },
                                        name: {
                                          type: "JSXIdentifier",
                                          start: 1656,
                                          end: 1663,
                                          loc: {
                                            start: { line: 55, column: 12, index: 1656 },
                                            end: { line: 55, column: 19, index: 1663 },
                                          },
                                          name: "NavItem",
                                        },
                                      },
                                      children: [
                                        {
                                          type: "JSXText",
                                          start: 1615,
                                          end: 1628,
                                          loc: {
                                            start: { line: 53, column: 11, index: 1615 },
                                            end: { line: 54, column: 12, index: 1628 },
                                          },
                                          extra: { rawValue: "\n            ", raw: "\n            " },
                                          value: "\n            ",
                                        },
                                        {
                                          type: "JSXExpressionContainer",
                                          start: 1628,
                                          end: 1643,
                                          loc: {
                                            start: { line: 54, column: 12, index: 1628 },
                                            end: { line: 54, column: 27, index: 1643 },
                                          },
                                          expression: {
                                            type: "MemberExpression",
                                            start: 1629,
                                            end: 1642,
                                            loc: {
                                              start: { line: 54, column: 13, index: 1629 },
                                              end: { line: 54, column: 26, index: 1642 },
                                            },
                                            object: {
                                              type: "Identifier",
                                              start: 1629,
                                              end: 1636,
                                              loc: {
                                                start: { line: 54, column: 13, index: 1629 },
                                                end: { line: 54, column: 20, index: 1636 },
                                                identifierName: "navItem",
                                              },
                                              name: "navItem",
                                            },
                                            computed: false,
                                            property: {
                                              type: "Identifier",
                                              start: 1637,
                                              end: 1642,
                                              loc: {
                                                start: { line: 54, column: 21, index: 1637 },
                                                end: { line: 54, column: 26, index: 1642 },
                                                identifierName: "title",
                                              },
                                              name: "title",
                                            },
                                          },
                                        },
                                        {
                                          type: "JSXText",
                                          start: 1643,
                                          end: 1654,
                                          loc: {
                                            start: { line: 54, column: 27, index: 1643 },
                                            end: { line: 55, column: 10, index: 1654 },
                                          },
                                          extra: { rawValue: "\n          ", raw: "\n          " },
                                          value: "\n          ",
                                        },
                                      ],
                                      extra: { parenthesized: true, parenStart: 1410 },
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              type: "JSXText",
                              start: 1676,
                              end: 1683,
                              loc: {
                                start: { line: 56, column: 11, index: 1676 },
                                end: { line: 57, column: 6, index: 1683 },
                              },
                              extra: { rawValue: "\n      ", raw: "\n      " },
                              value: "\n      ",
                            },
                          ],
                        },
                        {
                          type: "JSXText",
                          start: 1695,
                          end: 1700,
                          loc: {
                            start: { line: 57, column: 18, index: 1695 },
                            end: { line: 58, column: 4, index: 1700 },
                          },
                          extra: { rawValue: "\n    ", raw: "\n    " },
                          value: "\n    ",
                        },
                      ],
                      extra: { parenthesized: true, parenStart: 1302 },
                    },
                  },
                ],
                directives: [],
              },
            },
          },
        ],
        kind: "const",
      },
      {
        type: "ExportDefaultDeclaration",
        start: 1730,
        end: 1758,
        loc: { start: { line: 62, column: 0, index: 1730 }, end: { line: 62, column: 28, index: 1758 } },
        exportKind: "value",
        declaration: {
          type: "Identifier",
          start: 1745,
          end: 1758,
          loc: {
            start: { line: 62, column: 15, index: 1745 },
            end: { line: 62, column: 28, index: 1758 },
            identifierName: "NavigationBar",
          },
          name: "NavigationBar",
        },
      },
      {
        type: "VariableDeclaration",
        start: 1760,
        end: 1930,
        loc: { start: { line: 64, column: 0, index: 1760 }, end: { line: 71, column: 1, index: 1930 } },
        declarations: [
          {
            type: "VariableDeclarator",
            start: 1766,
            end: 1930,
            loc: { start: { line: 64, column: 6, index: 1766 }, end: { line: 71, column: 1, index: 1930 } },
            id: {
              type: "Identifier",
              start: 1766,
              end: 1775,
              loc: {
                start: { line: 64, column: 6, index: 1766 },
                end: { line: 64, column: 15, index: 1775 },
                identifierName: "ItemsList",
              },
              name: "ItemsList",
            },
            init: {
              type: "TaggedTemplateExpression",
              start: 1778,
              end: 1930,
              loc: { start: { line: 64, column: 18, index: 1778 }, end: { line: 71, column: 1, index: 1930 } },
              tag: {
                type: "MemberExpression",
                start: 1778,
                end: 1787,
                loc: { start: { line: 64, column: 18, index: 1778 }, end: { line: 64, column: 27, index: 1787 } },
                object: {
                  type: "Identifier",
                  start: 1778,
                  end: 1784,
                  loc: {
                    start: { line: 64, column: 18, index: 1778 },
                    end: { line: 64, column: 24, index: 1784 },
                    identifierName: "styled",
                  },
                  name: "styled",
                },
                computed: false,
                property: {
                  type: "Identifier",
                  start: 1785,
                  end: 1787,
                  loc: {
                    start: { line: 64, column: 25, index: 1785 },
                    end: { line: 64, column: 27, index: 1787 },
                    identifierName: "ul",
                  },
                  name: "ul",
                },
              },
              quasi: {
                type: "TemplateLiteral",
                start: 1787,
                end: 1930,
                loc: { start: { line: 64, column: 27, index: 1787 }, end: { line: 71, column: 1, index: 1930 } },
                expressions: [],
                quasis: [
                  {
                    type: "TemplateElement",
                    start: 1788,
                    end: 1929,
                    loc: { start: { line: 64, column: 28, index: 1788 }, end: { line: 71, column: 0, index: 1929 } },
                    value: {
                      raw: "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: MAX_WIDTH.desktop;\n  padding: 12px 0;\n",
                      cooked:
                        "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: MAX_WIDTH.desktop;\n  padding: 12px 0;\n",
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
      {
        type: "ExportNamedDeclaration",
        start: 1932,
        end: 2566,
        loc: { start: { line: 73, column: 0, index: 1932 }, end: { line: 101, column: 1, index: 2566 } },
        exportKind: "value",
        specifiers: [],
        source: null,
        declaration: {
          type: "VariableDeclaration",
          start: 1939,
          end: 2566,
          loc: { start: { line: 73, column: 7, index: 1939 }, end: { line: 101, column: 1, index: 2566 } },
          declarations: [
            {
              type: "VariableDeclarator",
              start: 1945,
              end: 2566,
              loc: { start: { line: 73, column: 13, index: 1945 }, end: { line: 101, column: 1, index: 2566 } },
              id: {
                type: "Identifier",
                start: 1945,
                end: 1964,
                loc: {
                  start: { line: 73, column: 13, index: 1945 },
                  end: { line: 73, column: 32, index: 1964 },
                  identifierName: "StyledNavigationBar",
                },
                name: "StyledNavigationBar",
              },
              init: {
                type: "TaggedTemplateExpression",
                start: 1967,
                end: 2566,
                loc: { start: { line: 73, column: 35, index: 1967 }, end: { line: 101, column: 1, index: 2566 } },
                tag: {
                  type: "MemberExpression",
                  start: 1967,
                  end: 1977,
                  loc: { start: { line: 73, column: 35, index: 1967 }, end: { line: 73, column: 45, index: 1977 } },
                  object: {
                    type: "Identifier",
                    start: 1967,
                    end: 1973,
                    loc: {
                      start: { line: 73, column: 35, index: 1967 },
                      end: { line: 73, column: 41, index: 1973 },
                      identifierName: "styled",
                    },
                    name: "styled",
                  },
                  computed: false,
                  property: {
                    type: "Identifier",
                    start: 1974,
                    end: 1977,
                    loc: {
                      start: { line: 73, column: 42, index: 1974 },
                      end: { line: 73, column: 45, index: 1977 },
                      identifierName: "div",
                    },
                    name: "div",
                  },
                },
                quasi: {
                  type: "TemplateLiteral",
                  start: 1999,
                  end: 2566,
                  loc: { start: { line: 73, column: 67, index: 1999 }, end: { line: 101, column: 1, index: 2566 } },
                  expressions: [],
                  quasis: [
                    {
                      type: "TemplateElement",
                      start: 2000,
                      end: 2565,
                      loc: { start: { line: 73, column: 68, index: 2000 }, end: { line: 101, column: 0, index: 2565 } },
                      value: {
                        raw: '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  position: relative;\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(16px);\n  z-index: 10;\n  &:before {\n    content: "";\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    height: 1px;\n    background: #29303a26;\n  }\n  &:after {\n    content: "";\n    position: absolute;\n    width: ({ progress ) => progress};\n    bottom: 0;\n    left: 0;\n    transition: width 0.5s ease;\n    height: 2px;\n    background: ({ theme ) => theme.colors.primary};\n  }\n',
                        cooked:
                          '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  position: relative;\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(16px);\n  z-index: 10;\n  &:before {\n    content: "";\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    height: 1px;\n    background: #29303a26;\n  }\n  &:after {\n    content: "";\n    position: absolute;\n    width: ({ progress ) => progress};\n    bottom: 0;\n    left: 0;\n    transition: width 0.5s ease;\n    height: 2px;\n    background: ({ theme ) => theme.colors.primary};\n  }\n',
                      },
                      tail: true,
                    },
                  ],
                },
                typeParameters: {
                  type: "TSTypeParameterInstantiation",
                  start: 1977,
                  end: 1999,
                  loc: { start: { line: 73, column: 45, index: 1977 }, end: { line: 73, column: 67, index: 1999 } },
                  params: [
                    {
                      type: "TSTypeLiteral",
                      start: 1978,
                      end: 1998,
                      loc: { start: { line: 73, column: 46, index: 1978 }, end: { line: 73, column: 66, index: 1998 } },
                      members: [
                        {
                          type: "TSPropertySignature",
                          start: 1980,
                          end: 1996,
                          loc: {
                            start: { line: 73, column: 48, index: 1980 },
                            end: { line: 73, column: 64, index: 1996 },
                          },
                          key: {
                            type: "Identifier",
                            start: 1980,
                            end: 1988,
                            loc: {
                              start: { line: 73, column: 48, index: 1980 },
                              end: { line: 73, column: 56, index: 1988 },
                              identifierName: "progress",
                            },
                            name: "progress",
                          },
                          computed: false,
                          typeAnnotation: {
                            type: "TSTypeAnnotation",
                            start: 1988,
                            end: 1996,
                            loc: {
                              start: { line: 73, column: 56, index: 1988 },
                              end: { line: 73, column: 64, index: 1996 },
                            },
                            typeAnnotation: {
                              type: "TSStringKeyword",
                              start: 1990,
                              end: 1996,
                              loc: {
                                start: { line: 73, column: 58, index: 1990 },
                                end: { line: 73, column: 64, index: 1996 },
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          ],
          kind: "const",
        },
      },
      {
        type: "ExportNamedDeclaration",
        start: 2568,
        end: 3038,
        loc: { start: { line: 103, column: 0, index: 2568 }, end: { line: 121, column: 1, index: 3038 } },
        exportKind: "value",
        specifiers: [],
        source: null,
        declaration: {
          type: "VariableDeclaration",
          start: 2575,
          end: 3038,
          loc: { start: { line: 103, column: 7, index: 2575 }, end: { line: 121, column: 1, index: 3038 } },
          declarations: [
            {
              type: "VariableDeclarator",
              start: 2581,
              end: 3038,
              loc: { start: { line: 103, column: 13, index: 2581 }, end: { line: 121, column: 1, index: 3038 } },
              id: {
                type: "Identifier",
                start: 2581,
                end: 2588,
                loc: {
                  start: { line: 103, column: 13, index: 2581 },
                  end: { line: 103, column: 20, index: 2588 },
                  identifierName: "NavItem",
                },
                name: "NavItem",
              },
              init: {
                type: "TaggedTemplateExpression",
                start: 2591,
                end: 3038,
                loc: { start: { line: 103, column: 23, index: 2591 }, end: { line: 121, column: 1, index: 3038 } },
                tag: {
                  type: "MemberExpression",
                  start: 2591,
                  end: 2600,
                  loc: { start: { line: 103, column: 23, index: 2591 }, end: { line: 103, column: 32, index: 2600 } },
                  object: {
                    type: "Identifier",
                    start: 2591,
                    end: 2597,
                    loc: {
                      start: { line: 103, column: 23, index: 2591 },
                      end: { line: 103, column: 29, index: 2597 },
                      identifierName: "styled",
                    },
                    name: "styled",
                  },
                  computed: false,
                  property: {
                    type: "Identifier",
                    start: 2598,
                    end: 2600,
                    loc: {
                      start: { line: 103, column: 30, index: 2598 },
                      end: { line: 103, column: 32, index: 2600 },
                      identifierName: "li",
                    },
                    name: "li",
                  },
                },
                quasi: {
                  type: "TemplateLiteral",
                  start: 2623,
                  end: 3038,
                  loc: { start: { line: 103, column: 55, index: 2623 }, end: { line: 121, column: 1, index: 3038 } },
                  expressions: [],
                  quasis: [
                    {
                      type: "TemplateElement",
                      start: 2624,
                      end: 3037,
                      loc: {
                        start: { line: 103, column: 56, index: 2624 },
                        end: { line: 121, column: 0, index: 3037 },
                      },
                      value: {
                        raw: '\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n  color: (props) => (props.isActive ? props.theme.colors.primary : "#30302f");\n  cursor: pointer;\n  position: relative;\n  &:before {\n    content: "";\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    background: ({ theme ) => theme.colors.primary};\n    border-radius: 50%;\n    left: -16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n',
                        cooked:
                          '\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n  color: (props) => (props.isActive ? props.theme.colors.primary : "#30302f");\n  cursor: pointer;\n  position: relative;\n  &:before {\n    content: "";\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    background: ({ theme ) => theme.colors.primary};\n    border-radius: 50%;\n    left: -16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n',
                      },
                      tail: true,
                    },
                  ],
                },
                typeParameters: {
                  type: "TSTypeParameterInstantiation",
                  start: 2600,
                  end: 2623,
                  loc: { start: { line: 103, column: 32, index: 2600 }, end: { line: 103, column: 55, index: 2623 } },
                  params: [
                    {
                      type: "TSTypeLiteral",
                      start: 2601,
                      end: 2622,
                      loc: {
                        start: { line: 103, column: 33, index: 2601 },
                        end: { line: 103, column: 54, index: 2622 },
                      },
                      members: [
                        {
                          type: "TSPropertySignature",
                          start: 2603,
                          end: 2620,
                          loc: {
                            start: { line: 103, column: 35, index: 2603 },
                            end: { line: 103, column: 52, index: 2620 },
                          },
                          key: {
                            type: "Identifier",
                            start: 2603,
                            end: 2611,
                            loc: {
                              start: { line: 103, column: 35, index: 2603 },
                              end: { line: 103, column: 43, index: 2611 },
                              identifierName: "isActive",
                            },
                            name: "isActive",
                          },
                          computed: false,
                          typeAnnotation: {
                            type: "TSTypeAnnotation",
                            start: 2611,
                            end: 2620,
                            loc: {
                              start: { line: 103, column: 43, index: 2611 },
                              end: { line: 103, column: 52, index: 2620 },
                            },
                            typeAnnotation: {
                              type: "TSBooleanKeyword",
                              start: 2613,
                              end: 2620,
                              loc: {
                                start: { line: 103, column: 45, index: 2613 },
                                end: { line: 103, column: 52, index: 2620 },
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          ],
          kind: "const",
        },
      },
    ],
    directives: [],
  },
  comments: [],
}
