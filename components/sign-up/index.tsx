/* eslint-disable camelcase */
import { FC, useRef, useState } from 'react';
import Router from 'next/router';
import Button from '../button';
import Input from '../input';
import { Container, Form, SubmitStatus } from './sign-up.styles';

const SignUp: FC = () => {
  const formRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<number>();
  const handleSignup = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const {
      name, BI, driver_id, email, phone, password, rePassword,
    } = formRef.current;

    const values = {
      name: name.value,
      num_BI: BI.value,
      driver_id: driver_id.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      rePassword: rePassword.value,
    };

    const response = await fetch('http://localhost:8080/api/v1/producers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),

    });
    // const res = await response.json();

    setSubmitStatus(response.status);

    if (response.status === 201) {
      setLoading(false);
      Router.push('/sign/sign-in');
    }

    setLoading(false);
  };
  return (
    <Container>
      <h1>É novo cá?</h1>
      <Form ref={formRef} onSubmit={handleSignup}>
        <Input placeholder="Nome Completo" name="name" />
        <Input placeholder="Número do BI" name="BI" />
        <Input placeholder="Número da carta de condução" name="driver_id" />
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Número de telefone" type="number" name="phone" />
        <Input placeholder="Palavra Passe" type="password" name="password" />
        <Input placeholder="Confirmar palavra passe" type="password" name="rePassword" />
        <Button text={loading ? '...' : 'Cadastrar'} type="submit" />
      </Form>

      {
          submitStatus === 400 && <SubmitStatus bgColor="#bf7c4d">Certifique-se que o formulário está bem preenchido</SubmitStatus>

      }
      {
          submitStatus === 201 && <SubmitStatus bgColor="#50d750"> Productor Cadastrado com sucesso </SubmitStatus>
      }
      {
          submitStatus === 500 && <SubmitStatus bgColor="#d75050"> Desculpe, mas parece que houve um erro no servidor </SubmitStatus>
      }
    </Container>
  );
};

export default SignUp;
