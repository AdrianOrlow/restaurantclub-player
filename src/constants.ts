import { ValueOf } from '@typeDefs/common';
import getConfig from 'next/config';
import { DefaultTheme } from 'styled-components';

interface Font {
  type: keyof DefaultTheme['fontFamily'];
  name: ValueOf<DefaultTheme['fontFamily']>;
  path: string;
  weight: number;
}

const { publicRuntimeConfig } = getConfig();
export const BASE_PATH =
  typeof window !== 'undefined'
    ? window.location.origin
    : publicRuntimeConfig.BASE_PATH || 'http://localhost';

export const fonts: Font[] = [
  {
    type: 'primary',
    name: 'SourceSansPro',
    path: 'SourceSansPro/SourceSansPro-Bold.ttf',
    weight: 700,
  },
  {
    type: 'primary',
    name: 'SourceSansPro',
    path: 'SourceSansPro/SourceSansPro-Regular.ttf',
    weight: 400,
  },
];

export const paths = {
  home: '/',
};

export const titleTemplate = '%s | Player APP';

export const Cookies = {};
