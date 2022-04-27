/* eslint-disable no-unused-vars */
import {
  FC, useState, useEffect, useRef,
} from 'react';
import { useSwr } from '../../services/useSwr';
import { DriverList, Selected } from '../../sessions/maibox/header/header.styles.';
import Button from '../button';
import DriverItem from '../driver-item';
import Input from '../input';
import {
  Buttons,
  CandidatesDrivers, CloseButton, Container, Form, GreatContainer,
} from './modal.styles';

type ModalProps = {
    handleShowModal: (isOpen: boolean) => void,
    activeIndex: number
}

const Modal: FC<ModalProps> = ({ handleShowModal, activeIndex }) => {
  const [category, setCategory] = useState<string>('');
  const [budgetProposal, setBudgetProposal] = useState<any>();
  const [weight, setWeight] = useState<any>();
  const [date, setDate] = useState<any>();
  const [loadingLocation, setLoadingLocation] = useState<any>();
  const [offloadingLocation, setOffloadingLocation] = useState<any>();
  const [id, setId] = useState<any>();
  const [next, setNext] = useState<boolean>(false);

  const handleNext = async () => {
    const values = {
      category,
      budget_proposal: budgetProposal,
      max_weight: weight,
      delivery_expectation_date: date,
      loading_location: loadingLocation,
      offloading_location: offloadingLocation,
      status: 'esperando',
    };

    setNext(!next);
    const response = await fetch('http://localhost:8080/api/v1/solicitations', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessKey')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const solicitation = await response.json();
    setId(solicitation.id);
  };

  useEffect(() => {
    if (activeIndex === 1) setNext(true);
  }, []);

  const { data, error, loading } = useSwr<any>(`http://localhost:8080/api/v1/producers/raking/${id}`);

  return (
    <GreatContainer>
      <Container>
        <CloseButton onClick={() => handleShowModal(false)}>
          <img src="/close.png" alt="" />
        </CloseButton>
        {!next && (
          <Form>
            <Input placeholder="Categoria do producto" type="text" name="category" onChange={(e) => setCategory(e.target.value)} />
            <Input placeholder="Orçamento" type="number" name="budget" onChange={(e) => setBudgetProposal(e.target.value)} />
            <Input placeholder="Peso da carga" type="number" name="weight" onChange={(e) => setWeight(e.target.value)} />
            <Input placeholder="Date de entrega" type="date" name="delivery_expect_date" onChange={(e) => setDate(e.target.value)} />
            <Input placeholder="Local de Carregamento" name="loading_location" onChange={(e) => setLoadingLocation(e.target.value)} />
            <Input placeholder="Local de descarregaemtno" name="offloading_location" onChange={(e) => setOffloadingLocation(e.target.value)} />
            <Button text="Etapa Seguinte" onClick={() => handleNext()} />
          </Form>
        )}
        {
          next && (
          <CandidatesDrivers>
            <h1>Nós encontramos os melhores para levar a tua carga</h1>
            <DriverList>
              {
                data?.map((driver: any, index: number) => (
                  <Selected>
                    <DriverItem img="profile-5" name={driver.name} key={index as number} />
                  </Selected>
                ))
              }
            </DriverList>
            <Buttons>
              <Button text="Atrás" onClick={() => setNext(false)} />
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
