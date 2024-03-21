import styled from 'styled-components';

import useReadRestaurants from '../../hooks/useReadRestaurants';
import RestaurantModel from '../../models/RestaurantModel';
import Restaurant from './Restaurant';

const Container = styled.section``;

type RestaurantsProps = {
  restaurantName: string;
  categoryName: string;
};

const Paragraph = styled.h3`
  background-color: white;
  color: gray;
  font-size: 4.2rem;
  font-family: pretendard-regular;
  text-align: center;
  font-style: italic;
  padding-top: 60px;
`;

export default function Restaurants({
  restaurantName,
  categoryName,
}: RestaurantsProps) {
  const { restaurants } = useReadRestaurants({ restaurantName, categoryName });

  if (!restaurants.length) {
    return <Paragraph>검색 결과가 없습니다</Paragraph>;
  }

  return (
    <Container>
      {restaurants.map((restaurant: RestaurantModel) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Container>
  );
}
