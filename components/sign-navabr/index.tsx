import { FC } from 'react';
import {
  Container, Item, List, Logo, Menu,
} from './sign-navbar.styles';

const Navbar: FC = () => (
  <Container>
    <Logo src="/logo.png" />
    <Menu>
      <List>
        <Item>Como funciona</Item>
        <Item>Como aderir</Item>
        <Item>Entrar</Item>
        <Item>Cadastrar</Item>
      </List>
    </Menu>
  </Container>
);

export default Navbar;
