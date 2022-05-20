import { darken, transparentize } from 'polished';
import { css, DefaultTheme, keyframes } from 'styled-components';
import { Backgrounds, Sizes } from './ButtonTypes';

export const sizes: Sizes = {
  thin: css`
    height: 3rem;
    padding: 0.75rem;
    font-size: 1rem;
  `,
  middle: css`
    padding: 1rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 1rem 1.25rem;
    font-size: 1.25rem;
  `,
};

const pulseFrames = (color) => keyframes`
  0% {
		box-shadow: 0 0 0 0 ${transparentize(0.3, color)};
	}

	70% {
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`;

const pulse = (color) => css`
  animation: ${pulseFrames(color)} 2s infinite;
`;

export const getBackgrounds = (
  theme: DefaultTheme,
  {
    pulsating,
  }: {
    pulsating: boolean;
  }
): Backgrounds => ({
  violet: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.light};
    border: none;

    &:hover {
      background: ${darken(0.0125, theme.colors.primary)};
    }

    ${pulsating && pulse(theme.colors.primary)}
  `,
  violetish: css`
    background: ${transparentize(0.9, theme.colors.primary)};
    color: ${theme.colors.primary};
    border: none;

    &:hover {
      background: ${transparentize(0.8, theme.colors.primary)};
    }

    ${pulsating && pulse(theme.colors.primary)}
  `,
  red: css`
    background: ${theme.colors.red};
    color: ${theme.colors.light};
    border: none;

    &:hover {
      background: ${darken(0.0125, theme.colors.red)};
    }

    ${pulsating && pulse(theme.colors.red)}
  `,
  redish: css`
    background: ${transparentize(0.9, theme.colors.red)};
    color: ${theme.colors.red};
    border: none;

    &:hover {
      background: ${transparentize(0.8, theme.colors.red)};
    }

    ${pulsating && pulse(theme.colors.red)}
  `,
  facebook: css`
    background: #1877f2;
    color: ${theme.colors.light};
    border: none;

    &:hover {
      background: ${darken(0.0125, '#1877f2')};
    }

    ${pulsating && pulse('#1877f2')}
  `,
  twitter: css`
    background: #1da1f1;
    color: ${theme.colors.light};
    border: none;

    &:hover {
      background: ${darken(0.0125, '#1da1f1')};
    }

    ${pulsating && pulse('#1da1f1')}
  `,
  text: css`
    color: ${theme.colors.gray};
    border: none;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  `,
  whiteish: css`
    background: ${transparentize(0.9, theme.colors.light)};
    color: ${theme.colors.light};
    border: none;

    &:hover {
      background: ${transparentize(0.8, theme.colors.light)};
    }

    ${pulsating && pulse(theme.colors.light)}
  `,
  greenish: css`
    background: ${transparentize(0.9, theme.colors.green)};
    color: ${theme.colors.green};
    border: none;

    &:hover {
      background: ${transparentize(0.8, theme.colors.green)};
    }

    ${pulsating && pulse(theme.colors.green)}
  `,
  google: css`
    color: ${theme.colors.light};
    background: #ea4335;
  `,
  googleBordered: css`
    border: 1px solid #ea4335;
    color: #ea4335;
  `,
  facebookBordered: css`
    border: 1px solid #1877f2;
    color: #1877f2;
  `,
});
