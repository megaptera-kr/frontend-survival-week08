import styled from 'styled-components';
import { Restaurant } from '../types/restaurant';
import RestaurantsTableBody from './RestaurantsTableBody';

type RestaurantsTableProps = {
  restaurants: Restaurant[];
}

const StyledRestaurantsTable = styled.table`
  display: grid;
  /* display:none; */
  background: ${(props) => props.theme.colors.subBackground};
  padding: 80px 20px 0;
  border-radius: 0px 8rem 0px 0px;
`;

export default function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  return (
    <StyledRestaurantsTable>
      <tbody>
        <RestaurantsTableBody restaurants={restaurants} />
      </tbody>
    </StyledRestaurantsTable>
  );
}
