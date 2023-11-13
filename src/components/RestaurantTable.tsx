import styled from 'styled-components';
import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

const Container = styled.div`
   background: ${(props) => props.theme.colors.background};
   padding-block: ${(props) => props.theme.sizes.contentPadding};
   padding-inline: ${(props) => props.theme.sizes.contentPadding};
   border-top-right-radius: 8rem;
   table {
     width: 100%;
   }
 `;

 type RestaurantTableProps = {
   restaurants: Restaurant[]
 }

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <Container>
      <table>
        <tbody>
          {restaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
