import { FC, useState } from 'react';
import Router from 'next/router';
import { TabTitle } from '../../../views/dashboard/dashboard.styles';
import DriverItem from '../../../components/driver-item';
import Input from '../../../components/input';
import {
  Container, MailboxList, Wrapper, DriverList, Selected,
} from './header.styles.';
import { useSwr } from '../../../services/useSwr';

const Header: FC = () => {
  const { data } = useSwr<{id: number, message: string, name: string, photo_url: string }[] | undefined>('http://localhost:8080/api/v1/messages/mailbox');
  const [selected, setSelected] = useState<boolean>(false);
  const handleSelect = async (e: any, id: number) => {
    e.preventDefault();
    await Router.push(`/dashboard/mailbox/?from=${id}`);

    setSelected(!selected);
  };
  return (
    <Container>
      <MailboxList>
        <Wrapper>
          <TabTitle>
            <h1>Mensagens</h1>
          </TabTitle>
        </Wrapper>
        <Input placeholder="Procure por uma conversa" />
        <DriverList>

          {data?.map((element, index) => (
            <Selected onClick={(e) => handleSelect(e, element.id)} isSelected={selected}>
              <DriverItem img={`http://${element.photo_url}.png`} name={element.name} key={index as number} />
            </Selected>
          ))}
        </DriverList>
      </MailboxList>
    </Container>
  );
};

export default Header;
