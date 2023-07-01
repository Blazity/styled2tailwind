export function convertToTailwindCSS(cssCode: string): string {
  const cssRules = cssCode.split("}").map((rule) => rule.trim())
  let tailwindClasses = ""

  cssRules.forEach((rule) => {
    if (rule.includes("{")) {
      const [selectors, declarations] = rule.split("{").map((part) => part.trim())
      const selectorClasses = getSelectorClasses(selectors)
      const declarationClasses = getDeclarationClasses(declarations)
      if (selectorClasses !== "") {
        tailwindClasses += `${selectorClasses} { ${declarationClasses} }\n\n`
      } else {
        tailwindClasses += `${declarationClasses}\n\n`
      }
    }
  })

  return tailwindClasses.trim()
}

function getSelectorClasses(selectors: string): string {
  const classes = selectors.split(",").map((item) => item.trim())
  return classes.join(", ")
}

function getDeclarationClasses(declarations: string): string {
  const properties = declarations.split(";").map((declaration) => declaration.trim())
  let classes = ""

  properties.forEach((property) => {
    if (property.includes(":")) {
      const [propertyKey, propertyValue] = property.split(":").map((part) => part.trim())
      const tailwindClass = getTailwindClass(propertyKey, propertyValue)
      if (tailwindClass) {
        classes += `${tailwindClass} `
      } else {
        classes += `${getPropertyAlias(propertyKey)}-${wrapWithArbitraryValue(propertyValue)} `
      }
    }
  })

  return classes.trim()
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

  const propertyMapping = propertyMappings[property] || propertyMappings[toCamelCase(property)]
  if (propertyMapping && propertyMapping[value]) {
    return propertyMapping[value]
  }

  return null
}

function getPropertyAlias(property: string): string {
  const propertyAliases: Record<string, string> = {
    backgroundColor: "bg",
    color: "text",
    fontSize: "text",
    fontWeight: "font",
    // Add more property aliases here
    // Example:
    // textDecoration: "underline",
  }

  return propertyAliases[property] || property
}

function wrapWithArbitraryValue(value: string): string {
  return `[${value}]`
}

function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}
