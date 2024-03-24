import styled from 'styled-components';

import RestaurantMenus from './RestaurantMenus';

import Restaurant from '../../../../types/Restaurant';

const Row = styled.tr`
  display: flex;
  flex-direction: column;
  padding-block: 3em;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};

  &:last-of-type {
    border-bottom: 0;
  }

  td:first-of-type {
    font-size: 4.8rem;
    font-weight: bold;
    margin-bottom: .5em;
  }

  td:last-of-type {
    width: 100%;
  }
`;

type RestaurantTableProps = {
  restaurant: Restaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantTableProps) {
  const { name, menu } = restaurant;

  return (
    <Row>
      <td>
        {name}
      </td>
      <td>
        <RestaurantMenus menus={menu} />
      </td>
    </Row>
  );
}
