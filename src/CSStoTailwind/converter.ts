/* eslint-disable @typescript-eslint/no-explicit-any */
import { TranslatorConfig, getResultCode, parsingCode } from "./converter-utils.js"

export const defaultTranslatorConfig = {
  prefix: "",
  useAllDefaultValues: true,
  customTheme: {},
}

export const convertCSStoTailwind = (
  components: Array<{ name: string; staticStyles: string; dynamicStyles: string }>,
  config: TranslatorConfig = defaultTranslatorConfig
): string => {
  const handleNestedStyles = (parsedCode, config: TranslatorConfig, prefix = "") => {
    let resultVal = ""

    if (typeof parsedCode.cssCode === "string") {
      const result = getResultCode(parsedCode, prefix, config)
      if (result) {
        resultVal += `${result.resultVal} `
      }
    } else if (Array.isArray(parsedCode.cssCode)) {
      parsedCode.cssCode.forEach((nestedCode: any) => {
        resultVal += handleNestedStyles(nestedCode, config, parsedCode.selectorName)
      })
    }

    return resultVal
  }

  let output = ""

  for (const component of components) {
    const parsedCodes = parsingCode(component.staticStyles)
    let tailwindStaticStyles = ""

    parsedCodes.forEach((parsedCode) => {
      tailwindStaticStyles += handleNestedStyles(parsedCode, config)
    })

    tailwindStaticStyles = tailwindStaticStyles.trim()

    let dynamicStylesFormatted = component.dynamicStyles.replace(/(\r\n|\n|\r)/gm, "").replace(/\s\s+/g, " ")
    dynamicStylesFormatted = dynamicStylesFormatted.replace(/\(props\) => /g, "")
    dynamicStylesFormatted = dynamicStylesFormatted.replace(/,(\s*})/g, "$1")
    dynamicStylesFormatted = dynamicStylesFormatted.replace(/^{\s*/, "").replace(/\s*}$/, "")

    if (dynamicStylesFormatted.trim() !== "") {
      output += `<${component.name} className='${tailwindStaticStyles}' style={{${dynamicStylesFormatted}}}></${component.name}>\n\n`
    } else {
      output += `<${component.name} className='${tailwindStaticStyles}'></${component.name}>\n\n`
    }
  }

  return output
}
