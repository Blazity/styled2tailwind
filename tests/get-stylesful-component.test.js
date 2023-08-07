import { getStylesfulComponent } from "../src/utils/get-stylesful-component"
import * as t from "@babel/types"
import { describe, it, expect } from "vitest"

describe("#getStylesfulComponent", () => {
  it("should extract styles from AST", () => {
    const component = {
      tagName: "div",
      staticStyles: "",
      dynamicStyles: "",
      usedIn: [],
    }

    const node = t.taggedTemplateExpression(
      t.memberExpression(t.identifier("styled"), t.identifier("div"), false),
      t.templateLiteral([t.templateElement({ raw: "color: red;" })], [])
    )

    const newComponent = getStylesfulComponent(node, component)
    expect(newComponent.tagName).toEqual("div")
    expect(newComponent.staticStyles).toEqual("color: red; ")
    expect(newComponent.dynamicStyles).toEqual("")
  })

  it("should handle dynamic styles", () => {
    const component = {
      tagName: "button",
      staticStyles: "",
      dynamicStyles: "",
      usedIn: [],
    }

    const node = t.taggedTemplateExpression(
      t.memberExpression(t.identifier("styled"), t.identifier("button"), false),
      t.templateLiteral([t.templateElement({ raw: "color: (props) => props.color;" })], [])
    )

    const newComponent = getStylesfulComponent(node, component)
    expect(newComponent.tagName).toEqual("button")
    expect(newComponent.staticStyles).toEqual("")
    expect(newComponent.dynamicStyles).toEqual("color: color, ")
  })

  it("should not mutate the original component", () => {
    const originalComponent = {
      tagName: "div",
      staticStyles: "font-size: 16px;",
      dynamicStyles: "",
      usedIn: [],
    }

    const node = t.taggedTemplateExpression(
      t.memberExpression(t.identifier("styled"), t.identifier("div"), false),
      t.templateLiteral([t.templateElement({ raw: "color: red;" })], [])
    )

    const newComponent = getStylesfulComponent(node, originalComponent)
    expect(originalComponent).toEqual({
      tagName: "div",
      staticStyles: "font-size: 16px;",
      dynamicStyles: "",
      usedIn: [],
    })
    expect(newComponent.staticStyles).toEqual("font-size: 16px;color: red; ")
  })
})
