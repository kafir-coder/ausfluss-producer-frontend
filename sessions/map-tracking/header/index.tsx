import { FC } from 'react';
import { TabTitle } from '../../../views/dashboard/dashboard.styles';
import DriverItem from '../../../components/driver-item';
import Input from '../../../components/input';
import {
  Container, MailboxList, Wrapper, DriverList, Selected,
} from './header.styles';

const Header: FC = () => (
  <Container>
    <MailboxList>
      <Wrapper>
        <TabTitle>
          <h1>Tracking de mercadorias</h1>
        </TabTitle>
      </Wrapper>
      <Input placeholder="Procure por uma conversa" />
      <DriverList>
        <Selected>
          <DriverItem img="profile-1" name="Kalaios Patrick" key={1} />
        </Selected>
        <Selected>
          <DriverItem img="profile-2" name="Tsar Bomba" key={2} />
        </Selected>
        <Selected>
          <DriverItem img="profile-3" name="Howly Shiet" key={3} />
        </Selected>
        <Selected>
          <DriverItem img="profile-4" name="Jane Doe" key={4} />
        </Selected>
        <Selected>
          <DriverItem img="profile-5" name="Caio Tony" key={5} />
        </Selected>
      </DriverList>
    </MailboxList>
  </Container>
);

export default Header;
