import * as React from 'react';
import { Container } from './PlayButtonStyle';

interface Props {
  onClick(): void;
  active: boolean;
  size?: 'big' | 'small';
}

const PlayButton: React.FC<Props> = ({ onClick, active, size = 'big' }) => (
  <Container onClick={onClick} active={active} size={size} />
);

export default PlayButton;
