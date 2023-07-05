import _ from "lodash"

export function convertToTailwindCSS(cssCode: string): string {
  const CSS_BLOCKS = cssCode.split("}").map((block) => block.trim())

  const tailwindClasses = CSS_BLOCKS.filter((block) => block.includes("{")).map((block) => {
    const [selectors, declarations] = block.split("{").map((part) => part.trim())
    const selectorClasses = extractSelectorClasses(selectors)
    const declarationClasses = extractDeclarationClasses(declarations)

    return selectorClasses ? `${selectorClasses} { ${declarationClasses.join(" ")} }` : declarationClasses.join(" ")
  })

  return tailwindClasses.join(" ")
}

function extractSelectorClasses(selectors: string): string {
  const classes = selectors.split(",").map((item) => item.trim())

  return classes.join(", ")
}

function extractDeclarationClasses(declarations: string): string[] {
  const properties = declarations.split(";").map((declaration) => declaration.trim())

  return properties
    .filter((property) => property.includes(":"))
    .map((property) => {
      const [propertyKey, propertyValue] = property.split(":").map((part) => part.trim())
      const tailwindClass = getTailwindClass(propertyKey, propertyValue)

      return tailwindClass ? tailwindClass : `${getPropertyAlias(propertyKey)}-${wrapWithArbitraryValue(propertyValue)}`
    })
}

function getTailwindClass(property: string, value: string): string | null {
  const propertyMappings: Record<string, Record<string, string>> = {
    backgroundColor: {
      transparent: "bg-transparent",
      current: "bg-current",
      black: "bg-black",
      white: "bg-white",
      default: `bg-[${value}]`,
    },
    margin: {
      "4rem": "m-16",
      default: `m-[${value}]`,
    },
    fontSize: {
      "1rem": "text-base",
      default: `text-[${value}]`,
    },
    color: {
      red: "text-red-500",
      default: `text-[${value}]`,
    },
    padding: {
      "0.25rem": "p-1",
      default: `p-[${value}]`,
    },
  }

  const propertyMapping = propertyMappings[property] || propertyMappings[_.camelCase(property)]

  return propertyMapping && propertyMapping[value] ? propertyMapping[value] : null
}

function getPropertyAlias(property: string): string {
  const propertyAliases: Record<string, string> = {
    backgroundColor: "bg",
    color: "text",
    fontSize: "text",
    fontWeight: "font",
  }

  return propertyAliases[property] || property
}

function wrapWithArbitraryValue(value: string): string {
  return `[${value}]`
}
