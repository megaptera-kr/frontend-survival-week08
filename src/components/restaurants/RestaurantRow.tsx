import styled from 'styled-components';

import Menu from './Menu';

import { Restaurant } from '../../types/restaurants';

const TableRow = styled.tr`
  display: flex;
  flex-direction: column;
  padding-block: 1em;
  font-size: 4.8rem;
  font-weight: bold;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.line};
  }

  & td:first-of-type {
    margin-bottom: 0.5em;
  }
`;

type RestaurantRowProps = {
  restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  return (
    <TableRow>
      <td>{restaurant.name}</td>
      <td><Menu menu={restaurant.menu} /></td>
    </TableRow>
  );
}
