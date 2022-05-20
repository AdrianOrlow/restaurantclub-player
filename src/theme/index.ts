import { DefaultTheme } from 'styled-components';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  fontFamily: {
    primary: 'SourceSansPro',
  },
  fontWeight: {
    primary: {
      regular: 400,
      bold: 700,
    },
  },
  colors: {
    primary: '#0FD65A',
    light: '#FFFFFF',
    black: '#1B1B1B',
    gray: '#9A9B9B',
  },
  breakpoints,
};

export default theme;
