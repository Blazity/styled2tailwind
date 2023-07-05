import { describe, it, expect } from "vitest"
import { generateCSSFromAST } from "../src/ASTtoCSS"
import { stripWhitespace } from "./test-utils"
import { regularAST, multipleDeclarationsAST, nestedTemplateAST } from "../__stubs__/asts"

describe("#generateCSSFromAST", () => {
  it("should generate valid CSS from correct AST input", () => {
    const result = stripWhitespace(generateCSSFromAST(regularAST))

    expect(result).toEqual(
      expect.stringContaining(
        "background:white;color:palevioletred;font-size:1em;&:hover{background:palevioletred;color:white;"
      )
    )
  })

  it("should generate valid CSS from empty AST input", () => {
    const input = ""

    const result = stripWhitespace(generateCSSFromAST(input))

    expect(result).toEqual("") // Expect an empty string since there are no CSS rules
  })

  it("should generate valid CSS from AST input with multiple tagged template expressions", () => {
    const result = stripWhitespace(generateCSSFromAST(multipleDeclarationsAST))

    expect(result).toEqual(
      expect.stringContaining(
        stripWhitespace("background:;color:;font-size:;padding:0.25em1em;border:2pxsolid;border-radius:3px;")
      )
    )

    expect(result).toEqual(expect.stringContaining(stripWhitespace("font-size:1rem;padding:4rem;")))
  })

  it("should generate valid CSS from AST input with nested tagged template expressions", () => {
    const result = stripWhitespace(generateCSSFromAST(nestedTemplateAST))

    expect(result).toEqual(
      expect.stringContaining(
        stripWhitespace(
          "display: flex; justify-content:center;align-items:center;height:100vh;background:linear-gradient(145deg,rgba(253, 38, 71, 1) 0%,rgba(252, 128, 45, 1)75%,rgba(250, 167, 43, 1)100%);"
        )
      )
    )

    expect(result).toEqual(expect.stringContaining(stripWhitespace("margin-bottom: 2em;")))
  })
})
