import * as t from "@babel/types"
import { Component } from "../types.js"
import { createDynamicStyles } from "./create-dynamic-styles.js"
import _ from "lodash"

export function getStylesfulComponent(node: t.Node, component: Omit<Component, "children">) {
  let newComponent = _.cloneDeep(component)

  for (const key in node) {
    if (node[key] && typeof node[key] === "object") {
      newComponent = getStylesfulComponent(node[key] as t.Node, newComponent)
    }
  }

  if (t.isTaggedTemplateExpression(node)) {
    const cssRules = node.quasi.quasis[0].value.raw.split("\n")

    if (t.isMemberExpression(node.tag)) {
      newComponent = { ...newComponent, tagName: (node.tag.property as t.Identifier).name }
    }

    cssRules.forEach((rule) => {
      if (
        rule.includes("(props) => props.") ||
        (rule.includes("({") && rule.includes("}) =>")) ||
        rule.includes("props[") ||
        rule.includes("(") ||
        rule.includes("?") ||
        rule.includes("&&") ||
        rule.includes("||")
      ) {
        newComponent = { ...newComponent, dynamicStyles: newComponent.dynamicStyles + createDynamicStyles(rule) }
      } else {
        newComponent = { ...newComponent, staticStyles: newComponent.staticStyles + `${rule.trim()} ` }
      }
    })
  }

  return newComponent
}
