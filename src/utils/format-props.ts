export function formatProps(props: Record<string, string>) {
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
