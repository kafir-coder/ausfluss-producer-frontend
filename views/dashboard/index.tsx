import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import Mailbox from '../../sessions/maibox';
import MapTracking from '../../sessions/map-tracking';
import Solicitation from '../../sessions/solicitation';
import {
  Container, Icon, LeftPanel, PanelItem, PanelMenu,
} from './dashboard.styles';

const Dashboard: FC = () => {
  const [activeTab, setActiveTab] = useState<string>();
  const route = useRouter();

  useEffect(() => {
    if (route.query.id) setActiveTab(route.query?.id[0] as string);
  }, [route.query]);
  return (
    <Container>
      <LeftPanel>
        <PanelMenu>
          <PanelItem isActiveTab={activeTab === 'mailbox'}>
            <Link href="/dashboard/mailbox">
              <Icon src="/mailbox.png" />
            </Link>
          </PanelItem>
          <PanelItem isActiveTab={activeTab === 'solicitation'}>
            <Link href="/dashboard/solicitation">
              <Icon src="/solicitation.png" />
            </Link>
          </PanelItem>
          <PanelItem isActiveTab={activeTab === 'map'}>
            <Link href="/dashboard/map">
              <Icon src="/map.png" />
            </Link>
          </PanelItem>
        </PanelMenu>
        <Icon src="/logout.png" isLogout />
      </LeftPanel>
      {activeTab === 'mailbox' && <Mailbox />}
      {activeTab === 'solicitation' && <Solicitation />}
      {activeTab === 'map' && <MapTracking />}
    </Container>
  );
};

export default Dashboard;
