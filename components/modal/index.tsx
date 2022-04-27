import { FC, useState } from 'react';
import { DriverList, Selected } from '../../sessions/maibox/header/header.styles.';
import Button from '../button';
import DriverItem from '../driver-item';
import Input from '../input';
import {
  Buttons,
  CandidatesDrivers, CloseButton, Container, Form, GreatContainer,
} from './modal.styles';

const Modal: FC = () => {
  const [next, setNext] = useState<boolean>(false);

  const handleNext = (e: any) => {
    e.preventDefault();
    setNext(!next);
  };
  return (
    <GreatContainer>
      <Container>
        <CloseButton>
          <img src="/close.png" alt="" />
        </CloseButton>
        {next === false && (
          <Form>

            <Input placeholder="Categoria do producto" type="text" />
            <Input placeholder="Orçamento" type="number" />
            <Input placeholder="Peso da carga" type="number" />
            <Input placeholder="Date de entrega" type="date" />
            <Input placeholder="Local de Carregamento" />
            <Input placeholder="Local de descarregaemtno" />
            <Button text="Etapa Seguinte" onClick={(e) => handleNext(e)} />
          </Form>
        )}
        {
          next === true && (
          <CandidatesDrivers>
            <h1>Nós encontramos os melhores para levar a tua carga</h1>
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
            <Buttons>
              <Button text="Atrás" onClick={(e) => handleNext(e)} />
              <Button text="Enviar Proposta" />
            </Buttons>
          </CandidatesDrivers>
          )
      }
      </Container>
    </GreatContainer>
  );
};

export default Modal;
