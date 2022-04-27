import { FC } from 'react';
import Body from './body';
import Header from './header';
import { Container } from './map-tracking.styles';

const MapTracking: FC = () => (
  <Container>
    <Header />
    <Body />
  </Container>
);

export default MapTracking;
