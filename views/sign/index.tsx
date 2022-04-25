import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Content, LeftPanel } from './sign.styles';
import Navbar from '../../components/sign-navabr';
import SignUp from '../../components/sign-up';
import SignIn from '../../components/sign-in';

const Sign: FC = () => {
  const route = useRouter() as any;
  const [activeSign, setActiveSign] = useState<string>();

  useEffect(() => {
    if (!route.query.id) {
      route.push('/sign/sign-in');
    }
  }, []);

  useEffect(() => {
    if (route.query.id) {
      setActiveSign(route.query?.id[0]);
    }
  }, [route.query]);

  return (
    <Container>
      <Navbar />
      <Content>
        <LeftPanel src="/farmer-1.jpg" />

        {activeSign === 'sign-in' && <SignIn />}
        {activeSign === 'sign-up' && <SignUp />}

      </Content>
    </Container>
  );
};

export default Sign;
