import { describe, it, expect } from "vitest"
import { stripWhitespace } from "./test-utils"
import { transformCodeToAST } from "../src/styledComponentsToAST"
import { generateCSSFromAST } from "../src/ASTtoCSS"
import { convertToTailwindCSS } from "../src/CSStoTailwind"

describe("styled-components to TailwindCSS converter flow", () => {
  it("Should correctly transform valid JS input including styled-components into TailwindCSS utility classes", () => {
    const input = `
      import styled from 'styled-components'
      const Button = styled.button\`
        backgroundColor: white;
        color: palevioletred;
        font-size: 1rem;
        padding: 0.25rem;
      \`
    `
    // styled-components to TailwindCSS flow showcase
    console.log(`Initial input:\n${input}\n\n`)

    const generatedAST = transformCodeToAST(input)

    console.log(`Generated AST:\n\n${JSON.stringify(generatedAST)}\n\n\n`)

    const generatedCSS = generateCSSFromAST(generatedAST)

    console.log(`Generated CSS:\n\n${generatedCSS}\n\n\n`)

    const generatedTailwindCSS = convertToTailwindCSS(generatedCSS)

    console.log(`Generated TailwindCSS:\n\n${generatedTailwindCSS}\n`)

    expect(stripWhitespace(generatedTailwindCSS)).toEqual(
      expect.stringContaining("{bg-whitetext-[palevioletred]text-basep-1}")
    )
  })
})
