/* eslint-disable @typescript-eslint/no-explicit-any */
import * as t from "@babel/types"
import { CodeGenerator } from "@babel/generator"

export function convertASTtoCSS(ast: t.File): Array<{
  componentName: string
  tagName: string
  staticStyles: string
  dynamicStyles: string
  usedIn: Array<{ usage: string; props: any }>
}> {
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
      componentName: (declaration.id as t.Identifier).name,
      tagName: "div",
      staticStyles: "",
      dynamicStyles: "",
      usedIn: [],
    }

    traverseAST(declaration, component)

    component.staticStyles = `{ ${component.staticStyles.replace(/;\s*$/, "")} }`
    component.dynamicStyles = `{ ${component.dynamicStyles.replace(/,\s*$/, "")} }`

    return component
  }

  const styledComponents = []

  function traverseAST(
    node: t.Node,
    component: {
      componentName: string
      tagName: string
      staticStyles: string
      dynamicStyles: string
      usedIn: Array<{ usage: string; props: any }>
    }
  ) {
    for (const key in node) {
      if (node[key] && typeof node[key] === "object") {
        traverseAST(node[key] as t.Node, component)
      }
    }

    if (t.isTaggedTemplateExpression(node)) {
      const cssRules = node.quasi.quasis[0].value.raw.split("\n")

      if (t.isMemberExpression(node.tag)) {
        component.tagName = (node.tag.property as t.Identifier).name
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
  }

  function findComponentUsage(
    node: t.Node,
    component: {
      componentName: string
      tagName: string
      staticStyles: string
      dynamicStyles: string
      usedIn: Array<{ usage: string; props: any }>
    }
  ) {
    for (const key in node) {
      if (node[key] && typeof node[key] === "object") {
        findComponentUsage(node[key] as t.Node, component)
      }
    }

    if (t.isJSXElement(node) && t.isJSXIdentifier(node.openingElement.name)) {
      const jsxName = node.openingElement.name.name

      if (jsxName === component.componentName) {
        const props = {}
        const attributes = node.openingElement.attributes
        attributes.forEach((attr) => {
          if (t.isJSXAttribute(attr)) {
            if (t.isStringLiteral(attr.value)) {
              props[(attr.name as any).name] = attr.value.value
            } else if (t.isJSXExpressionContainer(attr.value) && t.isStringLiteral(attr.value.expression)) {
              props[(attr.name as any).name] = attr.value.expression.value
            } else if (t.isJSXExpressionContainer(attr.value)) {
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

        component.usedIn.push({
          usage: new CodeGenerator(node).generate().code,
          props: props,
        })
      }
    }
  }

  for (const node of ast.program.body) {
    if (t.isVariableDeclaration(node) && node.declarations) {
      for (const declaration of node.declarations) {
        if (t.isVariableDeclarator(declaration) && t.isIdentifier(declaration.id)) {
          const component = traverseComponent(declaration)
          styledComponents.push(component)
        }
      }
    } else if (t.isExportNamedDeclaration(node) || t.isExportDefaultDeclaration(node)) {
      if (node.declaration && t.isVariableDeclaration(node.declaration)) {
        for (const declaration of node.declaration.declarations) {
          if (t.isVariableDeclarator(declaration) && t.isIdentifier(declaration.id)) {
            const component = traverseComponent(declaration)
            styledComponents.push(component)
          }
        }
      }
    }
  }

  for (const component of styledComponents) {
    findComponentUsage(ast, component)
  }

  return styledComponents
}
