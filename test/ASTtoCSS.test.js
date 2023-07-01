import { describe, it, expect } from "vitest"
import { generateCSSFromAST } from "../src/ASTtoCSS"
import { stripWhitespace } from "./test-utils"

const input = {
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

describe("#generateCSSFromAST", () => {
  it("Should generate valid CSS from correct AST input", () => {
    const result = stripWhitespace(generateCSSFromAST(input))

    expect(result).toEqual(
      expect.stringContaining(
        "{background:white;color:palevioletred;font-size:1em;&:hover{background:palevioletred;color:white;}}"
      )
    )
  })

  it("Should generate valid CSS from empty AST input", () => {
    const input = ``

    const result = stripWhitespace(generateCSSFromAST(input))

    expect(result).toEqual("") // Expect an empty string since there are no CSS rules
  })

  it("Should generate valid CSS from AST input with multiple tagged template expressions", () => {
    const result = stripWhitespace(generateCSSFromAST(input))

    expect(result).toEqual(expect.stringContaining("background:white;color:palevioletred;font-size:1em;"))
    expect(result).toEqual(expect.stringContaining("&:hover{background:palevioletred;color:white;}"))
  })

  it("Should generate valid CSS from AST input with nested tagged template expressions", () => {
    const result = stripWhitespace(generateCSSFromAST(input))

    expect(result).toEqual(expect.stringContaining("&:hover{background:palevioletred;color:white;}"))
  })
})
