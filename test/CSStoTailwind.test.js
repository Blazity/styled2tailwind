import { describe, expect, it } from "vitest"
import { convertToTailwindCSS } from "../src/CSStoTailwind"
import { stripWhitespace } from "./test-utils"

describe("#convertToTailwind", () => {
  it("should convert CSS input to Tailwind", () => {
    const input = `
      .button {
        background-color: white;
        font-size: 16px;
        padding: 7px;
      }
    `

    const result = stripWhitespace(convertToTailwindCSS(input))

    expect(result).toEqual(expect.stringContaining("{bg-whitefont-size-[16px]padding-[7px]}"))
  })

  it("should convert CSS code generated from AST to valid TailwindCSS", () => {
    const input = stripWhitespace(".mzoqw { background-color: white; color: red; font-size: 1rem; margin: 4rem; }")
    const result = convertToTailwindCSS(input)

    expect(result).toEqual(expect.stringContaining("{ bg-white text-red-500 text-base m-16 }"))
  })

  it("should convert invalid CSS properties to TailwindCSS", () => {
    // TODO: Not yet. 🦇
  })

  it("should convert prefixed CSS properties (i.e. --webkit) to TailwindCSS", () => {
    // TODO: Not yet. 🦇
  })

  it("should convert shorthand CSS properties (i.e. padding: 1px 0 3px 5px) to TailwindCSS", () => {
    // TODO: Not yet. 🦇
  })

  it("should convert CSS properties with a decimal to TailwindCSS", () => {
    // TODO: Not yet. 🦇
  })
})
