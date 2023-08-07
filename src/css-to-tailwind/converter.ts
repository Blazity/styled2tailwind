/* eslint-disable @typescript-eslint/no-explicit-any */
import { TranslatorConfig, getResultCode, parsingCode } from "./converter-utils.js"

export const defaultTranslatorConfig = {
  prefix: "",
  useAllDefaultValues: true,
  customTheme: {},
}

export const convertCSStoTailwind = (
  components: Array<{
    componentName: string
    tagName: string
    staticStyles: string
    dynamicStyles: string
    usedIn: Array<{ usage: any; props: any }>
    children?: Array<any>
  }>,
  config: TranslatorConfig = defaultTranslatorConfig
): Array<{
  componentName: string
  tailwindTag: Array<{ tag: string; usage: any; props: any }>
}> => {
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

  const formatProps = (props: any): string => {
    return Object.entries(props)
      .filter(([key]) => key !== "children")
      .map(([key, value]) => {
        if (typeof value === "string" && value.startsWith("() => {")) {
          return `${key}={${value}}`
        } else if (typeof value === "string") {
          const hasSpecialCharacter = /[!@#$%^&*(),.?":|<>]/g.test(value)
          if (hasSpecialCharacter) {
            return `${key}={\`${value}\`}`
          } else {
            return `${key}="${value}"`
          }
        } else {
          return `${key}={${JSON.stringify(value)}}`
        }
      })
      .join(" ")
  }

  const output: Array<{
    componentName: string
    tailwindTag: Array<{ tag: string; usage: any; props: any }>
  }> = []

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

    const tailwindTags = component.usedIn.map((usage) => {
      const propsFormatted = formatProps(usage.props)

      let children = ""
      if (usage.props.children) {
        children = usage.props.children.join("")
      }

      const tag =
        dynamicStylesFormatted.trim() !== ""
          ? `<${component.tagName} className='${tailwindStaticStyles}' style={{${dynamicStylesFormatted}}} ${propsFormatted}>${children}</${component.tagName}>`
          : `<${component.tagName} className='${tailwindStaticStyles}' ${propsFormatted}>${children}</${component.tagName}>`

      return {
        tag,
        usage: usage.usage,
        props: usage.props,
      }
    })

    output.push({
      componentName: component.componentName,
      tailwindTag: tailwindTags,
    })
  }

  return output
}
