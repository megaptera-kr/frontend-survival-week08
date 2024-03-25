import styled from 'styled-components';

import MenuItem from './MenuItem';

import MenuItemModel from '../../models/MenuItemModel';
import RestaurantModel from '../../models/RestaurantModel';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3.2rem;
`;

type MenuProps = {
  menu: MenuItemModel[];
  restaurant: RestaurantModel;
};

export default function Menu({ menu, restaurant }: MenuProps) {
  return (
    <Wrapper>
      {menu.map((item: MenuItemModel) => (
        <MenuItem key={item.id} menuItem={item} restaurant={restaurant} />
      ))}
    </Wrapper>
  );
}
