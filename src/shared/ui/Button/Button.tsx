import React from 'react';
import { Container } from './ButtonStyle';
import { ButtonProps } from './ButtonTypes';

const Button: React.FC<ButtonProps> = ({ children, background, ...props }) => {
  return (
    <Container {...props} background={background}>
      {children && <span>{children}</span>}
    </Container>
  );
};

Button.defaultProps = {
  size: 'middle',
  background: 'green',
};

export default Button;
