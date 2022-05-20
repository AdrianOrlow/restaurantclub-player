import 'styled-components';
import breakpoints from './breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: Record<'primary', 'SourceSansPro'>;
    fontWeight: {
      primary: {
        regular: number;
        bold: number;
      };
    };
    colors: {
      primary: string;
      light: string;
      black: string;
      gray: string;
    };
    breakpoints: typeof breakpoints;
  }
}
