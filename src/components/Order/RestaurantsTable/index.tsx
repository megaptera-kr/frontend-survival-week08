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

const StyledMsg = styled.p`
  text-align: center;
  padding-block:80px;
  color:${(props) => props.theme.colors.text};
  font-size:${(props) => props.theme.fontSize.xl};
`;

function RestaurantsTable({ restaurants }:RestaurantsTableProps) {
  if (restaurants.length === 0) {
    return <StyledMsg>검색된 결과가 없습니다.</StyledMsg>;
  }
  return (
    <StyledRestaurantsTable>
      <tbody>
        {restaurants.map((restaurant, index) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
            isLast={index === restaurants.length - 1}
          />
        ))}
      </tbody>
    </StyledRestaurantsTable>
  );
}

export default RestaurantsTable;
