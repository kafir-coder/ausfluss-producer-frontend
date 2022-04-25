import { FC } from 'react';
import Button from '../button';
import Input from '../input';
import { Container, Form } from './sign-in.styles';

const SignIn: FC = () => (
  <Container>
    <h1>Olá, como tem ido?</h1>
    <Form>
      <Input placeholder="Email" />
      <Input placeholder="Palavra Passe" />
      <Button text="Entrar" />
    </Form>
  </Container>
);

export default SignIn;
