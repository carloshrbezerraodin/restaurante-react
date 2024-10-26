import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string,
    colors: {
      primary: string,
      background: string,
      textColorPrimary: string,
      textColorSecondary: string,
      textColorContrast: string
      contrast: string,
    }
  }
}