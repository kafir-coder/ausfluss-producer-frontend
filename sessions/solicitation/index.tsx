/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { FC, useState, useEffect } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import Modal from '../../components/modal';
import { useSwr } from '../../services/useSwr';
import {
  AddSolicitation, Container, Filter, SolicitationItem, SolicitationList,
} from './solicitation.styles';
import { chooseColor } from './solicitation.utils';

const Solicitation: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  type SolicitationProps = {
    category: string,
    budget_proposal: number,
    max_weight: number,
    delivery_expectation_date: string,
    loading_location: string,
    offloading_location: string,
    status: string,
  }

  const [soliccitations, setSolicitations] = useState<SolicitationProps[] | undefined>();

  const handleModal = (isOpen: boolean) => {
    setShowModal(isOpen);
  };

  const handleModalWithActiveIndex = (isOpen: boolean, index: number) => {
    setShowModal(isOpen);
    setActiveIndex(index);
  };
  const { data, error, loading } = useSwr<SolicitationProps[]>('http://localhost:8080/api/v1/solicitations');

  useEffect(() => {
    setSolicitations(data);
  }, [data]);
  return (
    <Container>
      {showModal && <Modal handleShowModal={handleModal} activeIndex={activeIndex} />}

      <Filter>
        <Input placeholder="Todos" />
      </Filter>
      <AddSolicitation>
        <Button onClick={() => handleModalWithActiveIndex(true, 0)} text="Criar Solicitação" />
      </AddSolicitation>
      <SolicitationList>
        {
            soliccitations?.map((solicitation, index) => (
              <SolicitationItem onClick={() => handleModalWithActiveIndex(true, 1)} key={index as number} color={chooseColor(solicitation.status)} isOdd={index % 2 === 0}>
                <div>
                  <i>{solicitation.category}</i>
                  <i>{solicitation.budget_proposal}</i>
                  <i>{solicitation.max_weight}</i>
                  <i>{solicitation.delivery_expectation_date}</i>
                  <i>{solicitation.loading_location}</i>
                  <i>{solicitation.offloading_location}</i>
                </div>
                <div><i>{solicitation.status}</i></div>
              </SolicitationItem>
            ))
}
        {
          soliccitations?.length === 0 && <h1>Sem Solicitações</h1>
        }

        { loading && <div>Carregando...</div>}
      </SolicitationList>
    </Container>
  );
};

export default Solicitation;
