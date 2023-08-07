/* eslint-disable no-prototype-builtins */
import { parse, ParserOptions } from "@babel/parser"
import * as t from "@babel/types"

export function generateAst(codeInput: string) {
  if (!codeInput) {
    throw new Error("Provided input is empty")
  }

  let ast: t.Node
  try {
    ast = parse(codeInput, {
      sourceType: "unambiguous",
      plugins: ["jsx", "typescript", "babel-plugin-styled-components"],
    } as ParserOptions)
  } catch (error) {
    throw new Error("Input is not valid JavaScript code", error instanceof Error ? { cause: error.cause } : undefined)
  }

  return ast
}
