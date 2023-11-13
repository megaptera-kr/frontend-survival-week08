import styled from 'styled-components';
import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

const Container = styled.div`
  padding-block: 3em;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  border-top-right-radius: ${(props) => props.theme.sizes.contentBorderRadius};
  background-color: ${(props) => props.theme.colors.secondary};
`;

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <Container>
      <table>
        <tbody>
          {restaurants?.map((restaurant: Restaurant) => (
            <RestaurantRow key={restaurant.name} restaurant={restaurant} />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
