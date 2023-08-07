import { formatProps } from "../utils/format-props.js"
import { TranslatorConfig, handleNestedStyles, parsingCode } from "./css-to-tailwind.utils.js"
import { Component, ComponentsProps, ConvertReturnType } from "../types.js"

export const DEFAULT_TRASNLATOR_CONFIG = {
  prefix: "",
  useAllDefaultValues: true,
  customTheme: {},
}

export function convertCSStoTailwind(
  components: Component[],
  config: TranslatorConfig = DEFAULT_TRASNLATOR_CONFIG
): ConvertReturnType[] {
  const output: {
    componentName: string
    components: ComponentsProps[]
  }[] = []

  for (const component of components) {
    const normalizedTailwindStyles = normalizeTailwindStyles(component, config)
    const normalizedDynamicStyles = normalizeDynamicStyles(component)

    const components = component.usedIn.map((usage) => {
      const propsFormatted = formatProps(usage.props)

      let children = ""
      if (usage.props.children) {
        children = usage.props.children.join("")
      }

      const tailwindMarkup =
        normalizedDynamicStyles.trim() !== ""
          ? `<${component.tagName} className='${normalizedTailwindStyles}' style={{${normalizedDynamicStyles}}} ${propsFormatted}>${children}</${component.tagName}>`
          : `<${component.tagName} className='${normalizedTailwindStyles}' ${propsFormatted}>${children}</${component.tagName}>`

      return {
        tailwindMarkup,
        styledMarkup: usage.styledMarkup,
        props: usage.props,
      }
    })

    output.push({
      componentName: component.componentName,
      components,
    })
  }

  return output
}

function normalizeTailwindStyles(component: Component, config: TranslatorConfig) {
  const parsedCodes = parsingCode(component.staticStyles)
  let tailwindStaticStyles = ""

  parsedCodes.forEach((parsedCode) => {
    tailwindStaticStyles += handleNestedStyles(parsedCode, config)
  })

  tailwindStaticStyles = tailwindStaticStyles.trim()
  return tailwindStaticStyles
}

function normalizeDynamicStyles(component: Component) {
  let dynamicStylesFormatted = component.dynamicStyles.replace(/(\r\n|\n|\r)/gm, "").replace(/\s\s+/g, " ")
  dynamicStylesFormatted = dynamicStylesFormatted.replace(/\(props\) => /g, "")
  dynamicStylesFormatted = dynamicStylesFormatted.replace(/,(\s*})/g, "$1")
  dynamicStylesFormatted = dynamicStylesFormatted.replace(/^{\s*/, "").replace(/\s*}$/, "")

  return dynamicStylesFormatted
}
