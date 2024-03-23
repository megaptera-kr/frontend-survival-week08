import styled from 'styled-components';

import MenuItem from './MenuItem';

import { CartStore } from '../../stores/CartStore';

import Food from '../../types/Food';

import ItemWrapStyle from '../../styles/ItemWrapStyle';

const MenuItemWrapStyle = styled(ItemWrapStyle)`
  gap: 0 2.5rem;
  padding-bottom: 8rem;
`;

type MenuProps = {
  menu: Food[];
};

export default function Menu({ menu }: MenuProps) {
  const handleClickItem = (food: Food) => {
    CartStore.addItem(food);
  };

  if (!menu.length) {
    return <p> 메뉴가 존재하지 않습니다.</p>;
  }

  return (
    <MenuItemWrapStyle>
      {menu.map((food, idx) => {
        const key = `${food.name}_${idx}`;
        return (
          <MenuItem
            key={key}
            food={food}
            onClickItem={() => handleClickItem(food)}
          />
        );
      })}
    </MenuItemWrapStyle>
  );
}
