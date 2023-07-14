import { describe, it, expect } from "vitest"
import { transformCodeToAST } from "../src/styledComponentsToAST"
import { generateCSSFromAST } from "../src/ASTtoCSS"
import { convertToTailwindCSS } from "../src/CSStoTailwind"

describe("styled-components to TailwindCSS converter flow", () => {
  it("should correctly transform valid JS input including styled-components into TailwindCSS utility classes", () => {
    const input = `
      const StyledButton = styled.button\`
        color: white;
        padding: 4rem;
        font-size: 16px;
        background: red;
        margin: 4px 0 1rem 17em;
        height: 17vh;
        width: 720px;
        border-bottom-width: 8px;
        filter: hue-rotate(-180deg);
      \`

      const buttonStyles = css\`
        background: white;
        color: palevioletred;
        font-size: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
      \`;
    `

    const AST = transformCodeToAST(input)
    const CSS = generateCSSFromAST(AST)
    const result = convertToTailwindCSS(CSS)

    console.log(input)
    console.log(AST)
    console.log(CSS)
    console.log(result)

    expect(result).toEqual(
      expect.stringContaining(
        "{ text-[white] p-16 text-[16px] bg-[red] mt-[4px] mr-[0] mb-4 ml-[17em] h-[17vh] w-[720px] border-b-8 filter -hue-rotate-180 }"
      )
    )

    expect(result).toEqual(
      expect.stringContaining(
        "{ bg-[white] text-[palevioletred] text-[1em] px-[1em] py-[0.25em] border-[2px] border-solid border-[palevioletred] rounded-[3px] transition-all }"
      )
    )
  })
})
