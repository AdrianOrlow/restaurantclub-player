import { darken } from 'polished';
import { css, DefaultTheme } from 'styled-components';
import { Backgrounds, Sizes } from './ButtonTypes';

export const sizes: Sizes = {
  middle: css`
    padding: 1.5rem;
    font-size: 20px;
  `,
};

export const getBackgrounds = (theme: DefaultTheme): Backgrounds => ({
  green: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.light};
    border: none;

    &:hover {
      background: ${darken(0.0125, theme.colors.primary)};
    }
  `,
});
