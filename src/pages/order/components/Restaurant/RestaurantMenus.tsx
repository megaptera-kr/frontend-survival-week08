import styled from 'styled-components';

import MenuItem from './MenuItem';

import Menu from '../../../../types/Menu';

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

type MenusProps = {
  menus: Menu[];
};

export default function RestaurantMenus({ menus }: MenusProps) {
  return (
    <Container>
      {menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </Container>
  );
}
