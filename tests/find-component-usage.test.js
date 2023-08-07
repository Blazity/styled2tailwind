import { findComponentUsage } from "../src/utils/find-component-usage"
import * as t from "@babel/types"
import { describe, it, expect } from "vitest"

describe("#findComponentUsage", () => {
  it("should find component usage and extract props", () => {
    const component = {
      componentName: "MyComponent",
      tagName: "div",
      staticStyles: "",
      dynamicStyles: "",
      usedIn: [],
    }

    const node = t.jsxElement(
      t.jsxOpeningElement(t.jsxIdentifier("MyComponent"), [
        t.jsxAttribute(t.jsxIdentifier("color"), t.stringLiteral("red")),
      ]),
      t.jsxClosingElement(t.jsxIdentifier("MyComponent")),
      [t.jsxText("Hello, World!")],
      false
    )

    const newComponent = findComponentUsage(node, component)
    expect(newComponent.usedIn).toHaveLength(1)
    expect(newComponent.usedIn[0].props).toEqual({ color: "red", children: ["Hello, World!"] })
  })

  it("should ignore other components", () => {
    const component = {
      componentName: "MyComponent",
      tagName: "div",
      staticStyles: "",
      dynamicStyles: "",
      usedIn: [],
    }

    const node = t.jsxElement(
      t.jsxOpeningElement(t.jsxIdentifier("OtherComponent"), []),
      t.jsxClosingElement(t.jsxIdentifier("OtherComponent")),
      [],
      false
    )

    const newComponent = findComponentUsage(node, component)
    expect(newComponent.usedIn).toHaveLength(0)
  })

  it("should handle expression container props", () => {
    const component = {
      componentName: "MyComponent",
      tagName: "div",
      staticStyles: "",
      dynamicStyles: "",
      usedIn: [],
    }

    const node = t.jsxElement(
      t.jsxOpeningElement(t.jsxIdentifier("MyComponent"), [
        t.jsxAttribute(
          t.jsxIdentifier("onClick"),
          t.jsxExpressionContainer(t.arrowFunctionExpression([], t.blockStatement([])))
        ),
      ]),
      t.jsxClosingElement(t.jsxIdentifier("MyComponent")),
      [],
      false
    )

    const newComponent = findComponentUsage(node, component)
    expect(newComponent.usedIn).toHaveLength(1)
    expect(newComponent.usedIn[0].props.onClick).toEqual("() => {}")
  })

  it("should format static and dynamic styles", () => {
    const component = {
      componentName: "MyComponent",
      tagName: "div",
      staticStyles: "color: red;",
      dynamicStyles: "background: color, ",
      usedIn: [],
    }

    const node = t.jsxElement(
      t.jsxOpeningElement(t.jsxIdentifier("MyComponent"), []),
      t.jsxClosingElement(t.jsxIdentifier("MyComponent")),
      [],
      false
    )

    const newComponent = findComponentUsage(node, component)
    expect(newComponent.staticStyles).toEqual("{ color: red }")
    expect(newComponent.dynamicStyles).toEqual("{ background: color }")
  })

  it("should not mutate the original component", () => {
    const originalComponent = {
      componentName: "MyComponent",
      tagName: "div",
      staticStyles: "",
      dynamicStyles: "",
      usedIn: [],
    }

    const node = t.jsxElement(
      t.jsxOpeningElement(t.jsxIdentifier("MyComponent"), [
        t.jsxAttribute(t.jsxIdentifier("color"), t.stringLiteral("red")),
      ]),
      t.jsxClosingElement(t.jsxIdentifier("MyComponent")),
      [t.jsxText("Hello, World!")],
      false
    )

    const newComponent = findComponentUsage(node, originalComponent)
    expect(originalComponent).toEqual({
      componentName: "MyComponent",
      tagName: "div",
      staticStyles: "",
      dynamicStyles: "",
      usedIn: [],
    })
    expect(newComponent.usedIn).toHaveLength(1)
    expect(newComponent.usedIn[0].props).toEqual({ color: "red", children: ["Hello, World!"] })
  })
})
