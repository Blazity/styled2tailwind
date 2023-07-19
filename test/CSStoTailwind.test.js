import { describe, expect, it } from "vitest"
import {
  hasNegative,
  getCustomVal,
  isColor,
  isUnit,
  getUnitMetacharactersVal,
  getRemDefaultVal,
  parsingCode,
  getResultCode,
  getPropertyPipeValue,
  getFallbackPropertyValue,
  applyPrefixesAndImportant,
} from "../src/CSStoTailwind/converter-utils"
import { convertCSStoTailwind } from "../src/CSStoTailwind/converter"

describe("#convertToTailwind", () => {
  it("should convert CSS input to Tailwind", () => {
    const input = [{ name: "button", staticStyles: "{  color: blue }", dynamicStyles: "{  }" }]
    const result = convertCSStoTailwind(input)

    expect(result).toEqual(expect.stringContaining("<button className='text-[blue]'></button>"))
  })

  it("should convert invalid CSS properties to TailwindCSS", () => {
    const input = [{ name: "button", staticStyles: "{  color: red; nonexistent: property }", dynamicStyles: "{  }" }]
    const result = convertCSStoTailwind(input)

    expect(result).toEqual(expect.stringContaining("<button className='text-[red]'></button>")) // Invalid property is ignored
  })

  it("should convert prefixed CSS properties (i.e. --webkit) to TailwindCSS", () => {
    const input = [
      { name: "button", staticStyles: "{  color: blue; -webkit-font-smoothing: antialiased; }", dynamicStyles: "{  }" },
    ]
    const result = convertCSStoTailwind(input)

    expect(result).toEqual(expect.stringContaining("<button className='text-[blue] antialiased'></button>"))
  })

  it("should convert shorthand CSS properties (i.e. padding: 1px 0 3px 5px) to TailwindCSS", () => {
    const input = [{ name: "button", staticStyles: "{  padding: 4px 0 1rem 7em; }", dynamicStyles: "{  }" }]
    const result = convertCSStoTailwind(input)

    expect(result).toEqual(expect.stringContaining("<button className='pt-[4px] pr-[0] pb-[1rem] pl-[7em]'></button>"))
  })

  it("should convert CSS properties with a decimal to TailwindCSS", () => {
    const input = [{ name: "button", staticStyles: "{  width: 50.5%; height: 50.4px }", dynamicStyles: "{  }" }]
    const result = convertCSStoTailwind(input)

    expect(result).toEqual(expect.stringContaining("<button className='w-[50.5%] h-[50.4px]'></button>"))
  })

  it("should convert CSS input with dynamic properties", () => {
    const input = [
      { name: "button", staticStyles: "{  width: 50.5%; height: 50.4px }", dynamicStyles: "{ color: customColor }" },
    ]
    const result = convertCSStoTailwind(input)

    expect(result).toEqual(
      expect.stringContaining("<button className='w-[50.5%] h-[50.4px]' style={{color: customColor}}></button>")
    )
  })
})

describe("#hasNegative", () => {
  it("should return an array with empty string and the input value if the input value does not start with a negative sign", () => {
    const input = "something positive"
    const result = hasNegative(input)

    expect(result).toEqual(expect.arrayContaining(["", input]))
  })

  it("should return an array with '-' symbol as the first element and the input value without the negative sign if the input value starts with a negative sign", () => {
    const input = "-something negative"
    const result = hasNegative(input)

    expect(result).toEqual(expect.arrayContaining(["-", "something negative"]))
  })
})

describe("#getCustomVal", () => {
  it("should replace all whitespace characters in the input value with underscores", () => {
    const input = "multi word input"
    const result = getCustomVal(input)

    expect(result).toEqual(expect.stringContaining("multi_word_input"))
  })

  it("should replace all whitespace characters in the input value with underscores", () => {
    const input = "multi_ word input with ___ unnecessary underscores"
    const result = getCustomVal(input)

    expect(result).toEqual(expect.stringContaining("multi_word_input_with_unnecessary_underscores"))
  })
})

describe("#isColor", () => {
  it("should return true if the input string matches the format of a hexadecimal color code", () => {
    const input = "#FFFFFF"
    const result = isColor(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string matches the format of an RGB color code", () => {
    const input = "rgb(27, 11, 5)"
    const result = isColor(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string matches the format of an RGBA color code", () => {
    const input = "rgba(27, 11, 5, 0.5)"
    const result = isColor(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string matches the format of an HSL color code", () => {
    const input = "hsl(0, 50%, 50%)"
    const result = isColor(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string matches the format of an HSLA color code", () => {
    const input = "hsla(0, 50%, 50%, 1)"
    const result = isColor(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string is one of the named colors", () => {
    const input = "blue"
    const result = isColor(input)

    expect(result).toBeTruthy()
  })

  it("should return true when joinLinearGradient is set to true and the input string matches linear-gradient() syntax", () => {
    const input = "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)"
    const result = isColor(input, true)

    expect(result).toBeTruthy()
  })

  it("should return false for any other type of input value", () => {
    const input = "something other than a color"
    const result = isColor(input)

    expect(result).not.toBeTruthy()
  })
})

describe("#isUnit", () => {
  it("should return true if the input string is one of the valid CSS length units", () => {
    const input = "em"
    const result = isUnit(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string is one of the valid CSS length keywords", () => {
    const input = "rad"
    const result = isUnit(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string is one of the valid CSS angle units", () => {
    const input = "deg"
    const result = isUnit(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string is one of the valid CSS time units", () => {
    const input = "ms"
    const result = isUnit(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string is one of the valid CSS frequency units", () => {
    const input = "kHz"
    const result = isUnit(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string ends with a percentage sign", () => {
    const input = "45%"
    const result = isUnit(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string contains only digits and optional negative sign", () => {
    const input = "-720"
    const result = isUnit(input)

    expect(result).toBeTruthy()
  })

  it("should return true if the input string matches var() syntax", () => {
    const input = "var(--property)"
    const result = isUnit(input)

    expect(result).toBeTruthy()
  })

  it("should return false for any other type of value", () => {
    const input = "this should return false"
    const result = isUnit(input)

    expect(result).not.toBeTruthy()
  })
})

describe("#getUnitMetacharactersVal", () => {
  it("should return the corresponding value from the config object if the input string matches one of the keys in the config object", () => {
    const input = "50%"
    const result = getUnitMetacharactersVal(input)

    expect(result).toEqual("1/2")
  })

  it("hould modify and return a formatted percentage value with two decimal places if the input string is in a specific format", () => {
    const input = "41.66%"
    const result = getUnitMetacharactersVal(input)

    expect(result).toEqual("5/12")
  })
})

describe("#getRemDefaultVal", () => {
  it("should return the corresponding value from the object if the input string matches one of the keys in the object", () => {
    const input = "2rem"
    const result = getRemDefaultVal(input)

    expect(result).toEqual("8")
  })

  it("should return the corresponding value from the object if the input string matches one of the keys in the object", () => {
    const input = "25rem"
    const result = getRemDefaultVal(input)

    expect(result).toEqual(undefined)
  })
})

describe("#parsingCode", () => {
  it("should remove all newline and carriage return characters from the input code string", () => {
    const input = "\ninput"
    const result = parsingCode(input)

    expect(result).toEqual(expect.arrayContaining([{ selectorName: "input", cssCode: "" }]))
  })

  it("should trim the input code string", () => {
    const input = "   input    "
    const result = parsingCode(input)

    expect(result).toEqual(expect.arrayContaining([{ selectorName: "input", cssCode: "" }]))
  })

  it("should parse the input code into an array of objects with selectorName and cssCode properties", () => {
    const input = "button { color: white }"
    const result = parsingCode(input)

    expect(result).toEqual(expect.arrayContaining([{ selectorName: "button", cssCode: "color: white" }]))
  })
})

describe("#getResultCode", () => {
  it("should return null if it.cssCode is not a string", () => {
    const result = getResultCode({ cssCode: 123 }, "", {})
    expect(result).toBeNull()
  })

  it("should split it.cssCode by semicolon and filter out empty values", () => {
    const result = getResultCode({ cssCode: "color:red;font-size:16px;;background:white;" }, "", {})

    expect(result).toEqual(
      expect.objectContaining({ selectorName: undefined, resultVal: "text-[red] text-[16px] bg-[white]" })
    )
  })

  it("should trim the key and value after splitting each item in cssCodeList", () => {
    const result = getResultCode({ cssCode: " color : red ; font-size : 16px ;" }, "", {})

    expect(result).toEqual(expect.objectContaining({ selectorName: undefined, resultVal: "text-[red] text-[16px]" }))
  })
})

describe("#getPropertyPipeValue", () => {
  it("should return undefined if key and value are not provided", () => {
    const result = getPropertyPipeValue("")

    expect(result).toEqual(undefined)
  })

  it("should return [key:value] if value is initial", () => {
    const result = getPropertyPipeValue("key", "initial")

    expect(result).toEqual("[key:initial]")
  })

  it("should return [key:value] if value is inherit", () => {
    const result = getPropertyPipeValue("key", "inherit")

    expect(result).toEqual("[key:inherit]")
  })
})

describe("#getFallbackPropertyValue", () => {
  it("should return an empty string if key and value are not provided", () => {
    const result = getFallbackPropertyValue()

    expect(result).toEqual(undefined)
  })

  it("should return the modified value with !important removed and prefixed with ! if value includes !important", () => {
    const result = getFallbackPropertyValue("color", "red !important")

    expect(result).toEqual("!red")
  })
})

describe("#applyPrefixesAndImportant", () => {
  it("should return an empty string if pipeVal is falsy", () => {
    const result = applyPrefixesAndImportant("")

    expect(result).toEqual("")
  })

  it("should prefix the value with the provided prefix followed by a colon if isNegativeProperty is true", () => {
    const result = applyPrefixesAndImportant("5", true, "-")

    expect(result).toEqual("-:5")
  })

  it("should prefix the value with the provided prefix followed by a colon if pipeVal starts with backdrop-filter", () => {
    const result = applyPrefixesAndImportant("backdrop-filter", false, "prefix")

    expect(result).toEqual("prefix:backdrop-filter")
  })

  it("should prefix the value with the provided prefix followed by a colon if pipeVal starts with filter", () => {
    const result = applyPrefixesAndImportant("filter", false, "prefix")

    expect(result).toEqual("prefix:filter")
  })

  it("should prefix the value with the provided prefix followed by a colon if pipeVal starts with transform", () => {
    const result = applyPrefixesAndImportant("transform", false, "prefix")

    expect(result).toEqual("prefix:transform")
  })
})
