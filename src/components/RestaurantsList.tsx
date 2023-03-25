import styled from 'styled-components';
import Restaurant from '../types/Restaurant';
import MenuItem from './MenuItem';

const RestaurantsListWrap = styled.div`
  background: ${(props) => props.theme.colors.menuListBackground};
  padding: 22px 0;
`;

const RestaurantCard = styled.div`
  margin-bottom: 30px;
`;

const RestaurantName = styled.div`
  color: ${(props) => props.theme.colors.secondarytext};
  font-weight: 700;
  font-size: 3rem;
  line-height: 57px;
  letter-spacing: -0.03em;
  padding: 0 20px;
`;

type RestaurantsListProps = {
  filteredRestaurants: Restaurant[]
}

export default function RestaurantsList({ filteredRestaurants }: RestaurantsListProps) {
  return (
    <RestaurantsListWrap>
      {
        filteredRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.id}>
            <RestaurantName>{restaurant.name}</RestaurantName>
            <MenuItem menus={restaurant.menu} />
          </RestaurantCard>
        ))
      }
    </RestaurantsListWrap>
  );
}
