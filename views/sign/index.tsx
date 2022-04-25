import { FC } from 'react';
import { Container, Content, LeftPanel } from './sign.styles';
import Navbar from '../../components/sign-navabr';
import SignIn from '../../components/sign-in';

const Sign: FC = () => (
  <Container>
    <Navbar />
    <Content>
      <LeftPanel src="/farmer-1.jpg" />
      <SignIn />
    </Content>
  </Container>
);

export default Sign;
