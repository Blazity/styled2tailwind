import { formatProps } from "../src/utils/format-props"
import { describe, expect, it } from "vitest"

describe("#formatProps", () => {
  it("should format all keys as strings", () => {
    const props = { name: "John", age: "30" }
    expect(formatProps(props)).toEqual('name="John" age="30"')
  })

  it("should format keys with special characters using backticks", () => {
    const props = { name: "John", age: "30!", email: "john@doe.com" }
    expect(formatProps(props)).toEqual('name="John" age={`30!`} email={`john@doe.com`}')
  })

  it("should format function-like strings using braces", () => {
    const props = { onClick: '() => { console.log("Clicked!"); }' }
    expect(formatProps(props)).toEqual('onClick={() => { console.log("Clicked!"); }}')
  })

  it('should skip the "children" key', () => {
    const props = { children: "Some children", name: "John" }
    expect(formatProps(props)).toEqual('name="John"')
  })

  it("should format non-string values using JSON.stringify", () => {
    const props = { data: { key: "value" } }
    expect(formatProps(props)).toEqual('data={{"key":"value"}}')
  })
})
