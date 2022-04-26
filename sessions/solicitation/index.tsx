/* eslint-disable max-len */
import { FC } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import {
  AddSolicitation, Container, Filter, SolicitationItem, SolicitationList,
} from './solicitation.styles';
import { chooseColor } from './solicitation.utils';

const Solicitation: FC = () => {
  const data = [
    {
      product_category: 'Hortaliças',
      budget: 2020,
      weight: 200,
      delivery_date: '20-2-1020',
      loading_local: 'Cuca, Cazenga',
      offloading_local: 'Cuca, Cazenga',
      status: 'negado',
    },
    {
      product_category: 'Hortaliças',
      budget: 2020,
      weight: 200,
      delivery_date: '20-2-1020',
      loading_local: 'Cuca, Cazenga',
      offloading_local: 'Cuca, Cazenga',
      status: 'negado',
    },
    {
      product_category: 'Hortaliças',
      budget: 2020,
      weight: 200,
      delivery_date: '20-2-1020',
      loading_local: 'Cuca, Cazenga',
      offloading_local: 'Cuca, Cazenga',
      status: 'negado',
    },
    {
      product_category: 'Hortaliças',
      budget: 2020,
      weight: 200,
      delivery_date: '20-2-1020',
      loading_local: 'Cuca, Cazenga',
      offloading_local: 'Cuca, Cazenga',
      status: 'entregue',
    },
    {
      product_category: 'Hortaliças',
      budget: 2020,
      weight: 200,
      delivery_date: '20-2-1020',
      loading_local: 'Cuca, Cazenga',
      offloading_local: 'Cuca, Cazenga',
      status: 'negociando',
    },
  ];
  return (
    <Container>
      <Filter>
        <Input placeholder="Todos" />
      </Filter>
      <AddSolicitation>
        <Button text="Criar Solicitação" />
      </AddSolicitation>
      <SolicitationList>
        {
            data.map((solicitation, index) => (
              <SolicitationItem key={index as number} color={chooseColor(solicitation.status)} isOdd={index % 2 === 0}>
                <div>
                  <i>{solicitation.product_category}</i>
                  <i>{solicitation.budget}</i>
                  <i>{solicitation.weight}</i>
                  <i>{solicitation.delivery_date}</i>
                  <i>{solicitation.loading_local}</i>
                  <i>{solicitation.offloading_local}</i>
                </div>
                <div><i>{solicitation.status}</i></div>
              </SolicitationItem>
            ))
        }
      </SolicitationList>
    </Container>
  );
};

export default Solicitation;
