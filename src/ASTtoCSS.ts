/* eslint-disable @typescript-eslint/no-explicit-any */
import * as t from "@babel/types"

export function convertASTtoCSS(ast: t.File): Array<{ name: string; staticStyles: string; dynamicStyles: string }> {
  if (!ast) {
    throw new Error("Provided input is empty!")
  }

  if (!ast.program || !ast.program.body) {
    throw new Error("Provided input is not valid AST!")
  }

  function createDynamicStyles(rule) {
    const [prop, value] = rule.split(":").map((val: any) => val.trim())

    if (rule.includes("(props) => props.")) {
      return `${prop}: ${value.replace("(props) => props.", "").replace(";", "")}, `
    } else if (rule.includes("({") && rule.includes("}) =>")) {
      const destructuredProp = value.match(/\{\s*(\w+)\s*\}/)[1]
      return `${prop}: ${destructuredProp}, `
    } else {
      return `${prop}: ${value.replace(";", "")}, `
    }
  }

  function traverseComponent(declaration) {
    const component = {
      name: "div",
      staticStyles: "",
      dynamicStyles: "",
    }

    traverseAST(declaration, component)

    component.staticStyles = `{ ${component.staticStyles.replace(/;\s*$/, "")} }`
    component.dynamicStyles = `{ ${component.dynamicStyles.replace(/,\s*$/, "")} }`

    return component
  }

  const styledComponents = []

  function traverseAST(node: t.Node, component: { name: string; staticStyles: string; dynamicStyles: string }) {
    if (t.isTaggedTemplateExpression(node)) {
      const cssRules = node.quasi.quasis[0].value.raw.split("\n")

      if (t.isMemberExpression(node.tag)) {
        component.name = (node.tag.property as t.Identifier).name
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
          component.dynamicStyles += createDynamicStyles(rule)
        } else {
          component.staticStyles += `${rule.trim()} `
        }
      })
    }

    for (const key in node) {
      if (node[key] && typeof node[key] === "object") {
        traverseAST(node[key] as t.Node, component)
      }
    }
  }

  for (const node of ast.program.body) {
    if (t.isVariableDeclaration(node) && node.declarations) {
      for (const declaration of node.declarations) {
        const component = traverseComponent(declaration)
        styledComponents.push(component)
      }
    }
  }

  return styledComponents
}
