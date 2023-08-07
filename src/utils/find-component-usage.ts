import * as t from "@babel/types"
import { Component } from "../types.js"
import { CodeGenerator } from "@babel/generator"
import _ from "lodash"

export function findComponentUsage(node: t.Node, component: Omit<Component, "children">) {
  let newComponent = _.cloneDeep(component)

  for (const key in node) {
    if (node[key] && typeof node[key] === "object") {
      newComponent = findComponentUsage(node[key] as t.Node, newComponent)
    }
  }

  if (t.isJSXElement(node) && t.isJSXIdentifier(node.openingElement.name)) {
    const jsxName = node.openingElement.name.name

    if (jsxName === newComponent.componentName) {
      const props = {}
      const attributes = node.openingElement.attributes
      attributes.forEach((attr) => {
        if (t.isJSXAttribute(attr)) {
          if (t.isStringLiteral(attr.value)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            props[(attr.name as any).name] = attr.value.value
          } else if (t.isJSXExpressionContainer(attr.value) && t.isStringLiteral(attr.value.expression)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            props[(attr.name as any).name] = attr.value.expression.value
          } else if (t.isJSXExpressionContainer(attr.value)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            props[(attr.name as any).name] = new CodeGenerator(attr.value.expression).generate().code
          }
        }
      })

      // Handle children
      if (node.children && node.children.length > 0) {
        props["children"] = node.children
          .map((childNode) => {
            if (t.isJSXText(childNode)) {
              return childNode.value.trim()
            } else {
              // For non-text children (like other JSX elements), generate the code representation
              return new CodeGenerator(childNode).generate().code
            }
          })
          .filter(Boolean) // Filter out any empty strings (caused by whitespace or newline characters)
      }

      newComponent.usedIn.push({
        styledMarkup: new CodeGenerator(node).generate().code,
        props: props,
      })
    }
  }

  newComponent.staticStyles = `{ ${component.staticStyles.replace(/;\s*$/, "")} }`
  newComponent.dynamicStyles = `{ ${component.dynamicStyles.replace(/,\s*$/, "")} }`

  return newComponent
}
