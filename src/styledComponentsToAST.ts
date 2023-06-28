import parser, { ParserOptions } from "@babel/parser"
import { traverse } from "@babel/core"
import { NodePath } from "@babel/traverse"
import * as t from "@babel/types"

export function transformCodeToAST(input: string) {
  if (!input) {
    throw new Error("Provided input is empty")
  }

  let ast
  try {
    ast = parser.parse(input, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    } as ParserOptions)
  } catch (error) {
    throw new Error("Input is not valid JavaScript code")
  }

  const styledIdentifier = t.identifier("styled")
  const styledProperty = t.identifier("styled")

  traverse(ast, {
    TaggedTemplateExpression(path: NodePath<t.TaggedTemplateExpression>) {
      const { tag, quasi } = path.node

      if (
        t.isMemberExpression(tag) &&
        t.isIdentifier(tag.object, { name: styledIdentifier.name }) &&
        t.isIdentifier(tag.property, { name: styledProperty.name })
      ) {
        const styledCallExpression = t.callExpression(t.memberExpression(styledIdentifier, styledProperty), [
          tag.object,
          tag.property,
          quasi,
        ])

        path.replaceWith(styledCallExpression)
      }
    },

    VariableDeclaration(path: NodePath<t.VariableDeclaration>) {
      const { declarations } = path.node

      declarations.forEach((declaration) => {
        const { id, init } = declaration

        if (t.isCallExpression(init) && t.isIdentifier(init.callee, { name: styledIdentifier.name })) {
          const styledCallExpression = t.callExpression(
            t.memberExpression(styledIdentifier, styledProperty),
            init.arguments
          )

          declaration.init = styledCallExpression
        }
      })
    },

    ImportDeclaration(path: NodePath<t.ImportDeclaration>) {
      const { source, specifiers } = path.node

      if (source.value === "styled-components") {
        const importSpecifier = t.importSpecifier(styledIdentifier, styledProperty)

        specifiers.push(importSpecifier)
      }
    },
  })

  return ast
}
