import { FC } from 'react';
import { Container } from './button.styles';
import { ButtonProps } from './button.type';

const Button: FC<ButtonProps> = ({ text, ...rest }) => (
  <Container {...rest}>
    {text}
  </Container>
);

export default Button;
