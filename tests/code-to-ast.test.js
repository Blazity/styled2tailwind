import { describe, it, expect } from "vitest"
import { convertCodeToAST } from "../src/code-to-ast"
import { findPropertyByValue } from "./__utils__/test-utils"

describe("#convertCodeToAST", () => {
  it("should contain a valid TemplateElement type", () => {
    const input = `
      import styled from 'styled-components'
      const Button = styled.button\`
        background: white;
        color: palevioletred;
        font-size: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
      \`
    `

    expect(findPropertyByValue(convertCodeToAST(input), "type", "TemplateElement")).toBeTruthy()
  })

  it("should contain properties that are equal to the input code", () => {
    const input = `
      const Button = \`
        background: white;
        color: palevioletred;
        font-size: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
      \`
    `

    const result = findPropertyByValue(convertCodeToAST(input), "value", {
      raw: "\nbackground: white;\n color: palevioletred;\nfont-size: 1em;\npadding: 0.25em 1em;\nborder: 2px solid palevioletred;\nborder-radius: 3px;\n",
      cooked:
        "\nbackground: white;\ncolor: palevioletred;\nfont-size: 1em;\npadding: 0.25em 1em;\nborder: 2px solid palevioletred;\nborder-radius: 3px;\n",
    })

    expect(result).toBeTruthy()
  })

  it("should throw an error if the input is empty", () => {
    const input = ""

    expect(() => convertCodeToAST(input)).toThrowError(/^Provided input is empty$/)
    expect(() => convertCodeToAST(input)).not.toThrowError(/^Any other error/)
  })

  it("should throw an error if the input is not valid JavaScript code", () => {
    const input = `
      import styled from 'styled
      
      const Button = styled.button\`
        background: \${props => props.primary ? 'blue' : 'white'};
        color: \${props => props.primary ? 'white' : 'black'};
        font-size: \${fontSize};
        padding: 0.25em 1em;
        border: 2px solid \${props => props.primary ? 'blue' : 'black'};
        border-radius: 3px;
      \`
    `

    expect(() => convertCodeToAST(input)).toThrowError(/^Input is not valid JavaScript code/)
  })

  it("should transform styled-component CSS interpolation into AST", () => {
    const input = `
      const Button = styled.button\`
        background: \${props => props.primary ? 'blue' : 'white'};
        color: \${props => props.primary ? 'white' : 'black'};
        font-size: \${fontSize};
        padding: 0.25em 1em;
        border: 2px solid \${props => props.primary ? 'blue' : 'black'};
        border-radius: 3px;
      \`
    `

    const ast = convertCodeToAST(input)

    expect(findPropertyByValue(ast, "type", "TemplateElement")).toBeTruthy()
    expect(findPropertyByValue(ast, "value", { raw: "\nbackground:", cooked: "\nbackground:" })).toBeTruthy()
    expect(findPropertyByValue(ast, "type", "Identifier")).toBeTruthy()
    expect(findPropertyByValue(ast, "name", "props")).toBeTruthy()
  })
})
