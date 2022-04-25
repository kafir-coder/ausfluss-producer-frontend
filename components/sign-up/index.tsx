import { FC } from 'react';
import Button from '../button';
import Input from '../input';
import { Container, Form } from './sign-up.styles';

const SignUp: FC = () => (
  <Container>
    <h1>É novo cá?</h1>
    <Form>
      <Input placeholder="Nome Completo" />
      <Input placeholder="Número do BI" />
      <Input placeholder="Número da carta de condução" />
      <Input placeholder="Numero de telefon" type="number" />
      <Input placeholder="Palavra Passe" type="password" />
      <Input placeholder="Confirmar palavra passe" type="password" />
      <Button text="Entrar" />
    </Form>
  </Container>
);

export default SignUp;
