import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    txtColor: string;
    accentColor: string;
    btnColor: string;
  }
}
