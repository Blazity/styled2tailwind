import { describe, it, expect } from "vitest"
import { stripWhitespace } from "./test-utils"
import { transformCodeToAST } from "../src/styledComponentsToAST"
import { generateCSSFromAST } from "../src/ASTtoCSS"
import { convertToTailwindCSS } from "../src/CSStoTailwind"

describe("styled-components to TailwindCSS converter flow", () => {
  it("should correctly transform valid JS input including styled-components into TailwindCSS utility classes", () => {
    const input = `
      import styled from 'styled-components'
      const Button = styled.button\`
        background-color: white; 
        font-size: 16px; 
        padding: 7px 4rem 0 1px;
        margin: auto;
      \`
      const Header = styled.h1\`
        border-radius: 50%;
        font-family: ui-sans-serif;
        font-weight: 400;
        line-height: 2.5rem;
      \`
      const Div = styled.div\`
        max-height: 6rem;
        min-height: 72px;
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
      expect.stringContaining("{bg-[white]text-[16px]pt-[7px]pr-16pb-[0]pl-pxm-auto}")
    )
  })
})
