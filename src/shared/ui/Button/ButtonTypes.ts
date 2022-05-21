import React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export type Size = 'middle';
export type Sizes = Record<Size, FlattenSimpleInterpolation>;

export type Background = 'green';
export type Backgrounds = Record<Background, FlattenSimpleInterpolation>;

export interface StyleProps {
  size?: Size;
  background?: Background;
  isFullWidth?: boolean;
}

export interface ButtonProps
  extends StyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: any;
}
