import Router from 'next/router';
import { FC, useRef, useState } from 'react';
import Button from '../button';
import Input from '../input';
import { SubmitStatus } from '../sign-up/sign-up.styles';
import { Container, Form } from './sign-in.styles';

const SignIn: FC = () => {
  const formRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<number>();
  const handleSigin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const {
      email, password,
    } = formRef.current;

    const values = {
      email: email.value,
      password: password.value,
      type: 'producer',
    };

    const response = await fetch('http://localhost:8080/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),

    });
    setSubmitStatus(response.status);

    if (response.status === 200) {
      setLoading(false);
      const res = await response.json();
      localStorage.setItem('accessKey', res.access_token);
      Router.push('/dashboard/solicitation');
    }
    setLoading(false);
  };
  return (
    <Container>
      <h1>Olá, como tem ido?</h1>
      <Form ref={formRef} onSubmit={handleSigin}>
        <Input placeholder="Email" name="email" />
        <Input placeholder="Palavra Passe" name="password" />
        <Button text={loading ? '...' : 'Cadastrar'} />
      </Form>
      {
        submitStatus === 400 && <SubmitStatus bgColor="#bf7c4d">Certifique-se que o formulário está bem preenchido</SubmitStatus>
      }
      {
        submitStatus === 401 && <SubmitStatus bgColor="#bf7c4d">Email ou Palavra passe errados</SubmitStatus>
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

export default SignIn;
