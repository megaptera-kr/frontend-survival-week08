import styled from 'styled-components';

import { WordH2 } from '../common/Word';
import Menu from './Menu';

import RestaurantModel from '../../models/RestaurantModel';

type RestaurantProps = {
  restaurant: RestaurantModel;
};

const Container = styled.article`
  font-family: 'normal';
  background-color: white;
  padding-top: 7.2rem;
  padding-left: 2.8rem;
  padding-right: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const RestaurantTitle = styled(WordH2)`
  font-size: 5.2rem;
  font-weight: bold;
  color: black;
  padding-top: 0.2rem;
  padding-bottom: 3.2rem;
`;

export default function Restaurant({ restaurant }: RestaurantProps) {
  const { name, menu } = restaurant;
  return (
    <Container>
      <RestaurantTitle text={name} />
      <Menu menu={menu} restaurant={restaurant} />
    </Container>
  );
}
