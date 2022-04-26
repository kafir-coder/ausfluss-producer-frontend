import { FC } from 'react';
import { Container, Name, Photo } from './driver-item.styles';

const DriverItem: FC<{img: string, name: string}> = ({ img, name }) => (
  <Container>
    <Photo imgName={img} />
    <Name>{name}</Name>
  </Container>
);

export default DriverItem;
