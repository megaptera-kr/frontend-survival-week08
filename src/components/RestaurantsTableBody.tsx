import styled from 'styled-components';
import { Restaurant } from '../types/restaurant';
import RestaurantsTableBodyFood from './RestaurantsTableBodyFood';

type RestaurantsTableBody = {
  restaurants: Restaurant[];
}

const StyledTableBodyTr = styled.tr`
  display: grid;
  grid-column: auto;
  padding-bottom: 80px;
  margin-bottom: 80px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  :last-child {
    border: none;
    margin-bottom: 0;
  }
`;

const StyledTableBodyTrTitle = styled.td`
  font-size: 4.8rem;
  font-weight: bold;
  line-height: 5.7rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.listTitle};
`;

export default function RestaurantsTableBody({ restaurants }: RestaurantsTableBody) {
  return (
    <>
      {restaurants.map((restaurant) => (
        <StyledTableBodyTr key={restaurant.id}>
          <StyledTableBodyTrTitle>{restaurant.name}</StyledTableBodyTrTitle>
          <td>
            <RestaurantsTableBodyFood menu={restaurant.menu} />
          </td>
        </StyledTableBodyTr>
      ))}
    </>
  );
}
