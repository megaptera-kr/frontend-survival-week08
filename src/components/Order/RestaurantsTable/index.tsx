import styled from 'styled-components';
import Restaurant from '../../../types/restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantsTableProps = {
 restaurants:Restaurant[]
}

const StyledRestaurantsTable = styled.table`
  background-color: ${(props) => props.theme.colors.restaurant_bg};
  width: 100%;
  border-radius: 0 80px 0 0;
`;

function RestaurantsTable({ restaurants }:RestaurantsTableProps) {
  return (
    <StyledRestaurantsTable>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </StyledRestaurantsTable>
  );
}

export default RestaurantsTable;
