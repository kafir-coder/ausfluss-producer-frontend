import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Container, Item, List, Logo, Menu,
} from './sign-navbar.styles';

const Navbar: FC = () => {
  const [activeItem, setActiveItem] = useState<string>();
  const route = useRouter();

  useEffect(() => {
    if (route.query.id) setActiveItem(route.query?.id[0] as string);
  }, [route.query]);
  return (
    <Container>
      <Logo src="/logo.png" />
      <Menu>
        <List>
          <Item>Como funciona</Item>
          <Item>Como aderir</Item>
          <Item isActive={activeItem === 'sign-in'}><Link href="/sign/sign-in">Entrar</Link></Item>
          <Item isActive={activeItem === 'sign-up'}><Link href="/sign/sign-up">Cadastrar</Link></Item>
        </List>
      </Menu>
    </Container>
  );
};

export default Navbar;
