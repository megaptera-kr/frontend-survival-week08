import styled from 'styled-components';
import MenuItemModel from '../../models/MenuItemModel';
import MenuItem from './MenuItem';
import RestaurantModel from '../../models/RestaurantModel';

type MenuProps = {
  menu: MenuItemModel[];
  restaurant: RestaurantModel;
};

const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
`;

export default function Menu({ menu, restaurant }: MenuProps) {
  return (
    <MenuBox>
      {menu.map((item: MenuItemModel) => (
        <MenuItem key={item.id} menuItem={item} restaurant={restaurant} />
      ))}
    </MenuBox>
  );
}
