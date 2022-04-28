import { FC } from 'react';
import Body from './body';
import Header from './header';
import { Container } from './mailbox.styles';

const Mailbox: FC = () => (
  <Container>
    <Header />
    <Body />
  </Container>
);

export default Mailbox;
