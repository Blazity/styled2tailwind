export const regularCSS = [
  {
    dynamicStyles: "{  }",
    name: "button",
    staticStyles:
      "{  background: white; color: palevioletred; font-size: 1em; &:hover { background: palevioletred; color: white; }   }",
  },
]

export const nestedCSS = [
  {
    name: "button",
    staticStyles: "{  color: blue }",
    dynamicStyles: "{  }",
  },
  {
    name: "div",
    staticStyles: "{  color: red }",
    dynamicStyles: "{  }",
  },
  {
    name: "div",
    staticStyles: "{  color: green }",
    dynamicStyles: "{  }",
  },
]
