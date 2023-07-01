import { describe, expect, it } from "vitest"
import { convertToTailwindCSS } from "../src/CSStoTailwind"
import { stripWhitespace } from "./test-utils"

describe("#convertToTailwind", () => {
  it("Should convert CSS input to Tailwind", () => {
    const input = `
      .button {
        background-color: white;
        font-size: 16px;
        padding: 7px;
      }
    `

    const result = convertToTailwindCSS(input)

    expect(stripWhitespace(result)).toEqual(expect.stringContaining("{bg-whitefont-size-[16px]padding-[7px]}"))
  })

  it("Should convert CSS code generated from AST into valid CSS", () => {
    const input = `.mzoqw { background-color: white; color: red; font-size: 1rem; margin: 4rem; }`
    const result = convertToTailwindCSS(input)

    expect(stripWhitespace(result)).toEqual(expect.stringContaining("{bg-whitetext-red-500text-basem-16}"))
  })
})
