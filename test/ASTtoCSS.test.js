import { describe, it, expect } from "vitest"
import { convertASTtoCSS } from "../src/ASTtoCSS"
import { regularAST, multipleDeclarationsAST, nestedTemplateAST } from "../__stubs__/asts"
import { nestedCSS, regularCSS } from "../__stubs__/css"

describe("#convertASTtoCSS", () => {
  it("should generate valid CSS from correct AST input", () => {
    const result = convertASTtoCSS(regularAST)

    expect(result).toEqual(regularCSS)
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

    expect(result).toEqual(expect.arrayContaining(nestedCSS))
  })

  it("should generate valid CSS from AST input with nested tagged template expressions", () => {
    const result = convertASTtoCSS(nestedTemplateAST)

    expect(result).toEqual(expect.arrayContaining(nestedCSS))
  })
})
