import styled from 'styled-components';
import { Restaurant } from '../../types';
import RestaurantCard from './Restaurant';

type RestaurantBoxProps = {
  filterTerm: string;
};

type RestaurantsBoxProps = {
  filterTerm: string;
  restaurants: Restaurant[];
};

const RestaurantBox = styled.div<RestaurantBoxProps>`
  padding: 0px 30px;
  background-color: ${(props) => props.theme.colors.restaurantBg};
  border-radius: ${(props) => (props.filterTerm === '전체'
    ? '0px 80px 0px 0px'
    : props.filterTerm === '중식' || props.filterTerm === '한식'
      ? '80px 80px 0px 0px'
      : '80px 0px 0px 0px')};
`;

function RestaurantsBox({ filterTerm, restaurants }: RestaurantsBoxProps) {
  return (
    <RestaurantBox filterTerm={filterTerm}>
      {restaurants?.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </RestaurantBox>
  );
}

export default RestaurantsBox;
