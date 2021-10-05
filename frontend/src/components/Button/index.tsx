import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: string;
  backgroundColor: string;
};

const Button: React.FC<ButtonProps> = ({ type, backgroundColor, children, ...rest }) => (
  <Container backgroundColor={backgroundColor}
             type={ type ? type : 'button' }
             {...rest}>
    {children}
  </Container>
);

export default Button;
