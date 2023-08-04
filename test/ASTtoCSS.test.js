import { describe, it, expect } from "vitest"
import { convertASTtoCSS } from "../src/ASTtoCSS"
import { regularAST, multipleDeclarationsAST, nestedTemplateAST } from "../__stubs__/asts"

describe("#convertASTtoCSS", () => {
  it("should generate valid CSS from correct AST input", () => {
    const result = convertASTtoCSS(regularAST)
    expect(result).toEqual(
      expect.arrayContaining([
        {
          componentName: "Button",
          tagName: "button",
          staticStyles:
            "{  background: white; color: palevioletred; font-size: 1em; &:hover { background: palevioletred; color: white; }   }",
          dynamicStyles: "{  }",
          usedIn: [],
        },
      ])
    )
  })

  it("should throw an error when AST input is empty", () => {
    const input = ""

    expect(() => convertASTtoCSS(input)).toThrowError("Provided input is empty!")
  })

  it("should throw an error when AST input is empty", () => {
    const input = "test"

    expect(() => convertASTtoCSS(input)).toThrowError("Provided input is not valid AST!")
  })

  it("should generate valid CSS from AST input with multiple tagged template expressions", () => {
    const result = convertASTtoCSS(multipleDeclarationsAST)

    expect(result).toEqual(
      expect.arrayContaining([
        {
          componentName: "Button",
          tagName: "button",
          staticStyles: "{  color: blue }",
          dynamicStyles: "{  }",
          usedIn: [],
        },
        {
          componentName: "RedButton",
          tagName: "div",
          staticStyles: "{  color: red }",
          dynamicStyles: "{  }",
          usedIn: [],
        },
        {
          componentName: "GreenButton",
          tagName: "div",
          staticStyles: "{  color: green }",
          dynamicStyles: "{  }",
          usedIn: [],
        },
      ])
    )
  })

  it("should generate valid CSS from AST input with nested tagged template expressions", () => {
    const result = convertASTtoCSS(nestedTemplateAST)

    expect(result).toEqual(
      expect.arrayContaining([
        {
          componentName: "Button",
          tagName: "button",
          staticStyles: "{  color: blue }",
          dynamicStyles: "{  }",
          usedIn: [],
        },
        {
          componentName: "RedButton",
          tagName: "div",
          staticStyles: "{  color: red }",
          dynamicStyles: "{  }",
          usedIn: [],
        },
        {
          componentName: "GreenButton",
          tagName: "div",
          staticStyles: "{  color: green }",
          dynamicStyles: "{  }",
          usedIn: [],
        },
      ])
    )
  })

  it("should compile when styled component is exported", () => {
    expect(true).toBe(false)
  })
})
