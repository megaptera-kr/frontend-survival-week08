import styled from 'styled-components';

import RestaurantRow from './RestaurantRow';

import { Restaurant } from '../../types/restaurants';

const RestaurantTableWrap = styled.div`
  padding-block: 3em;
  padding-inline: 3rem;
  background-color: ${(props) => props.theme.colors.restaurantTableBg};
`;

type RestaurantTableProps = {
  restaurants: Restaurant[];
}

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <RestaurantTableWrap>
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
    </RestaurantTableWrap>
  );
}
