// Obtains and then transforms Styled-Components dynamic styles to CSS
export function createDynamicStyles(rule: string) {
  const [prop, value] = rule.split(":").map((val: string) => val.trim())

  if (rule.includes("(props) => props.")) {
    return `${prop}: ${value.replace("(props) => props.", "").replace(";", "")}, `
  } else if (rule.includes("({") && rule.includes("}) =>")) {
    const destructuredProp = value.match(/\{\s*(\w+)\s*\}/)[1]
    return `${prop}: ${destructuredProp}, `
  } else {
    return `${prop}: ${value.replace(";", "")}, `
  }
}
