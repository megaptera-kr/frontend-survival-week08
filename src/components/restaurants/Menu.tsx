import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';

import MenuItem from './MenuItem';

import { Menu } from '../../types/restaurants';

const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
`;

type MenuProps = {
  menu: Menu[];
}

export default function Menu({ menu }: MenuProps) {
  const [, store] = useCartStore();

  const handleClickFood = (food: Menu) => {
    store.addItem(food);
  };

  return (
    <MenuWrap>
      {menu.map((food, i) => {
        const key = `${i}-${food.id}`;
        return <MenuItem key={key} food={food} onClickFood={handleClickFood} />;
      })}
    </MenuWrap>
  );
}
