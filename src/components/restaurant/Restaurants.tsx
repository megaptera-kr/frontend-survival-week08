import styled from 'styled-components';

import useReadRestaurants from '../../hooks/useReadRestaurants';

import Restaurant from './Restaurant';
import Paragraph from '../common/Paragraph';

import RestaurantModel from '../../models/RestaurantModel';

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.subBackground};
  border-top-right-radius: 8rem;
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.colors.bodyPrimary};
  padding-bottom: 60px;
`;

type RestaurantsProps = {
  restaurantName: string;
  categoryName: string;
};

function Restaurants({ restaurantName, categoryName }: RestaurantsProps) {
  const { restaurants } = useReadRestaurants({ restaurantName, categoryName });

  if (!restaurants.length) {
    return <Paragraph>검색 결과가 없습니다</Paragraph>;
  }

  return (
    <Wrapper>
      {restaurants.map((restaurant: RestaurantModel) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Wrapper>
  );
}

export default Restaurants;
