import { FC } from 'react';
import { Container, Content, LeftPanel } from './sign.styles';
import Navbar from '../../components/sign-navabr';
// import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';

const Sign: FC = () => (
  <Container>
    <Navbar />
    <Content>
      <LeftPanel src="/farmer-1.jpg" />
      <SignUp />
    </Content>
  </Container>
);

export default Sign;
