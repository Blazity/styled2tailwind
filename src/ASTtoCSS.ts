/* eslint-disable no-prototype-builtins */
import { Node } from "@babel/core"
import * as t from "@babel/types"

export function generateCSSFromAST(ast: Node): string {
  let cssCode = ""
  const generatedSelectors: Set<string> = new Set()

  function generateRandomSelector(): string {
    const characters = "abcdefghijklmnopqrstuvwxyz"
    let randomSelector = ""

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomSelector += characters.charAt(randomIndex)
    }

    return randomSelector
  }

  function traverseAST(node: Node, selectorPrefix = "") {
    if (t.isTaggedTemplateExpression(node)) {
      const { quasi } = node
      const templateElements = quasi.quasis.map((element) => element.value.raw)
      const cssRule = templateElements.join("").trim()

      if (cssRule.length > 0) {
        let randomSelector = generateRandomSelector()
        while (generatedSelectors.has(randomSelector)) {
          randomSelector = generateRandomSelector()
        }

        const selector = `${selectorPrefix}.${randomSelector}`
        generatedSelectors.add(randomSelector)
        cssCode += `${selector} { ${cssRule} }\n`
      }
    }

    if (node && typeof node === "object") {
      for (const key in node) {
        if (node.hasOwnProperty(key)) {
          const childNode = node[key]
          if (Array.isArray(childNode)) {
            childNode.forEach((child) => traverseAST(child, selectorPrefix))
          } else if (childNode && typeof childNode === "object") {
            if (t.isJSXElement(childNode)) {
              const { openingElement, closingElement } = childNode
              const { name } = openingElement
              if (t.isJSXIdentifier(name)) {
                const childSelector = `${selectorPrefix} ${name.name}`
                traverseAST(childNode, childSelector)
              }
              if (closingElement) {
                const { name: closingName } = closingElement
                if (t.isJSXIdentifier(closingName)) {
                  const childSelector = `${selectorPrefix} ${closingName.name}`
                  traverseAST(closingElement, childSelector)
                }
              }
            } else {
              traverseAST(childNode, selectorPrefix)
            }
          }
        }
      }
    }
  }

  traverseAST(ast)

  return cssCode
}
