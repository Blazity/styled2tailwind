export interface Component {
  componentName: string
  tagName: string
  staticStyles: string
  dynamicStyles: string
  usedIn: { styledMarkup: string; props: SingleComponentProps }[]
  children?: string[]
}

// We do not care about the type of the props
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SingleComponentProps = Record<string, any>

export interface ComponentsProps {
  tailwindMarkup: string
  styledMarkup: string
  props: SingleComponentProps
}

export interface ConvertReturnType {
  componentName: string
  components: ComponentsProps[]
}
