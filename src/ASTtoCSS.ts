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
      const cssRule = node.quasi.quasis
        .map((element) => element.value.raw)
        .join("")
        .trim()

      if (cssRule.length > 0) {
        let randomSelector

        do {
          randomSelector = generateRandomSelector()
        } while (generatedSelectors.has(randomSelector))

        const selector = `${selectorPrefix}.${randomSelector}`
        generatedSelectors.add(randomSelector)
        cssCode += `${selector} { ${cssRule} }\n`
      }
    }

    Object.values(node).forEach((childNode) => {
      if (!childNode || typeof childNode !== "object") return

      if (Array.isArray(childNode)) {
        childNode.forEach((child) => traverseAST(child, selectorPrefix))
      } else if (t.isJSXElement(childNode)) {
        const { openingElement, closingElement } = childNode

        ;[openingElement, closingElement].forEach((element) => {
          if (!element || !t.isJSXIdentifier(element.name)) return

          const childSelector = `${selectorPrefix} ${element.name.name}`
          traverseAST(element, childSelector)
        })
      } else {
        traverseAST(childNode, selectorPrefix)
      }
    })
  }

  traverseAST(ast)

  return cssCode
}
