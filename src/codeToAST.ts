/* eslint-disable no-prototype-builtins */
import { parse, ParserOptions } from "@babel/parser"
import { traverse } from "@babel/core"
import { NodePath } from "@babel/traverse"
import * as t from "@babel/types"

function createStyledCallExpression(styledIdentifier, params) {
  return t.callExpression(t.memberExpression(styledIdentifier, styledIdentifier), params)
}

export function convertCodeToAST(input: string) {
  if (!input) {
    throw new Error("Provided input is empty")
  }

  let ast: t.Node
  try {
    ast = parse(input, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    } as ParserOptions)
  } catch (error) {
    throw new Error("Input is not valid JavaScript code")
  }

  const styledIdentifier = t.identifier("styled")

  traverse(ast, {
    TaggedTemplateExpression(path: NodePath<t.TaggedTemplateExpression>) {
      const { tag, quasi } = path.node

      if (
        t.isMemberExpression(tag) &&
        t.isIdentifier(tag.object, { name: styledIdentifier.name }) &&
        t.isIdentifier(tag.property, { name: styledIdentifier.name })
      ) {
        const styledCallExpression = createStyledCallExpression(styledIdentifier, [tag.object, tag.property, quasi])

        path.replaceWith(styledCallExpression)
      }
    },

    VariableDeclaration(path: NodePath<t.VariableDeclaration>) {
      const { declarations } = path.node

      declarations.forEach((declaration) => {
        const { init } = declaration

        if (t.isCallExpression(init) && t.isIdentifier(init.callee, { name: styledIdentifier.name })) {
          const styledCallExpression = createStyledCallExpression(styledIdentifier, init.arguments)

          declaration.init = styledCallExpression
        }
      })
    },

    ImportDeclaration(path: NodePath<t.ImportDeclaration>) {
      const { source, specifiers } = path.node

      if (source.value === "styled-components") {
        const importSpecifier = t.importSpecifier(styledIdentifier, styledIdentifier)

        specifiers.push(importSpecifier)
      }
    },
  })

  return ast
}
