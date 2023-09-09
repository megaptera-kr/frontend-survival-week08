import styled from 'styled-components';

import RestaurantRow from './RestaurantRow';

import { Restaurant } from '../../types/restaurants';

const RestaurantTableWrap = styled.div`
  padding-block: 3em;
  padding-inline: 3rem;
  background-color: ${(props) => props.theme.colors.restaurantTableBg};
`;

type RestaurantTableProps = {
  restaunrants: Restaurant[];
}

export default function RestaurantTable({ restaunrants }: RestaurantTableProps) {
  return (
    <RestaurantTableWrap>
      <table>
        <tbody>
          {restaunrants.map((restaunrant) => (
            <RestaurantRow
              key={restaunrant.id}
              restaunrant={restaunrant}
            />
          ))}
        </tbody>
      </table>
    </RestaurantTableWrap>
  );
}
