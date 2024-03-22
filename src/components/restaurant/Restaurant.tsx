import styled from 'styled-components';

import Menu from './Menu';
import Title from '../common/Title';

import RestaurantModel from '../../models/RestaurantModel';

type RestaurantProps = {
  restaurant: RestaurantModel;
};

const Wrapper = styled.article`
  padding-top: 6.2rem;
  padding-left: 3.2rem;
  padding-right: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const RestaurantTitle = styled(Title)`
  font-size: 5.2rem;
  font-weight: bold;
  padding-top: 0.2rem;
  padding-bottom: 3.2rem;
  color: ${(props) => props.theme.colors.bodyPrimary};
  font-family: ${(props) => props.theme.font.main};
`;

export default function Restaurant({ restaurant }: RestaurantProps) {
  const { name, menu } = restaurant;
  return (
    <Wrapper>
      <RestaurantTitle>{name}</RestaurantTitle>
      <Menu menu={menu} restaurant={restaurant} />
    </Wrapper>
  );
}
