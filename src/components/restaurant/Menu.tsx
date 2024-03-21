import styled from 'styled-components';
import MenuItemModel from '../../models/MenuItemModel';
import MenuItem from './MenuItem';

type MenuProps = {
  menu: MenuItemModel[];
};

const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
`;

export default function Menu({ menu }: MenuProps) {
  return (
    <MenuBox>
      {menu.map((item: MenuItemModel) => (
        <MenuItem key={item.id} menuItem={item} />
      ))}
    </MenuBox>
  );
}
