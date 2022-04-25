import { FC } from 'react';
import { Container } from './input.styles';

import { InputProps } from './input.type';

const Input: FC<InputProps> = ({ ...rest }) => (
  <Container {...rest} />
);

export default Input;
