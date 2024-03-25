import styled from 'styled-components';

import RestaurantRow from './RestaurantRow';

import Restaurant from '../../../../types/Restaurant';

const Container = styled.div`
  padding-block: 3em;
  padding-inline: 3rem;
  border-top-right-radius: 8rem;
  background-color: ${(props) => props.theme.colors.background02};
`;

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <Container>
      <table>
        <tbody>
          {restaurants?.map((restaurant) => (
            <RestaurantRow key={restaurant?.id} restaurant={restaurant} />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
