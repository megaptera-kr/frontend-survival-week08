import styled from 'styled-components';

import Restaurants from '../../types/Restaurants';

import RestaurantRow from './RestaurantRow';

const StyledContainer = styled.div`
  padding-inline: 5rem;
  gap: 8rem;
  background-color: ${(props) => props.theme.colors.tab};
  border-top-right-radius: 3.5rem;
`;

type RestaurantTableProps = {
  restaurants: Restaurants[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <StyledContainer>
      <table>
        <tbody>
          {restaurants?.map((restaurant) => (
            <RestaurantRow key={restaurant.id} restaurant={restaurant} />
          ))}
        </tbody>
      </table>
    </StyledContainer>
  );
}
