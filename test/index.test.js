import { describe, it, expect } from "vitest"
import { convertCodeToAST } from "../src/codeToAST"
import { convertASTtoCSS } from "../src/ASTtoCSS"
import { convertCSStoTailwind } from "../src/CSStoTailwind/converter"

describe("styled-components to TailwindCSS converter flow", () => {
  it("should correctly transform valid JS input including styled-components into TailwindCSS utility classes", () => {
    const input = `
      const StyledButton = styled.button\`
        color: white;
        padding: 4rem;
        height: ${(props) => props.customHeight};
        border: ${(props) => props.customBorder};
        background-color: ${({ destructuredProp }) => destructuredProp};
      \`

      const StyledHeader = styled.h1\`
        color: ${(props) => props.customColor};
        height: 100px;
        background-color: red;
      \`

      const StyledDiv = styled.div\`
        color: ${({ anotherDestructuredProp }) => anotherDestructuredProp};
        width: auto;
      \`
    `

    const AST = convertCodeToAST(input)
    const css = convertASTtoCSS(AST)
    const result = convertCSStoTailwind(css)

    console.log(input)
    console.log(JSON.stringify(AST))
    console.log(css)
    console.log(result)

    expect(result).toEqual(
      expect.stringContaining(
        "<button className='text-[white] p-[4rem]' style={{height: customHeight, border: customBorder, background-color: destructuredProp}}></button>"
      )
    )

    expect(result).toEqual(
      expect.stringContaining("<h1 className='h-[100px] bg-[red]' style={{color: customColor}}></h1>")
    )

    expect(result).toEqual(
      expect.stringContaining("<div className='w-auto' style={{color: anotherDestructuredProp}}></div>")
    )
  })
})
