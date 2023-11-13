import styled from 'styled-components';
import Restaurant from '../types/Restaurant';
import MenuListItem from './MenuListItem';

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

const MenuContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

type RestaurantRowProps = {
  restaurant: Restaurant;
};

function RestaurantRow({ restaurant }: RestaurantRowProps) {
  return (
    <Row>
      <td>{restaurant.name}</td>
      <td>
        <MenuContainer>
          {restaurant.menu.map((menu) => (
            <MenuListItem key={menu.name} menu={menu} />
          ))}
        </MenuContainer>
      </td>
    </Row>
  );
}

export default RestaurantRow;
