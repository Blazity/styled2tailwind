import { createDynamicStyles } from "../src/utils/create-dynamic-styles"
import { describe, it, expect } from "vitest"

describe("#createDynamicStyles", () => {
  it('should handle styles with "(props) => props."', () => {
    const rule = "color: (props) => props.theme.color;"
    expect(createDynamicStyles(rule)).toEqual("color: theme.color, ")
  })

  it("should handle styles with destructured props", () => {
    const rule = "background: ({ theme }) => theme.background;"
    expect(createDynamicStyles(rule)).toEqual("background: theme, ")
  })

  it("should handle normal styles", () => {
    const rule = "font-size: 16px;"
    expect(createDynamicStyles(rule)).toEqual("font-size: 16px, ")
  })

  it("should trim white spaces", () => {
    const rule = "   margin:   10px;   "
    expect(createDynamicStyles(rule)).toEqual("margin: 10px, ")
  })
})
