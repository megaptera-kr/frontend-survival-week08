import styled from 'styled-components';

import MenuItem from './MenuItem';

import Food from '../../types/Food';
import { CartStore } from '../../stores/CartStore';

const MenuWrapStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
    <MenuWrapStyle>
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
    </MenuWrapStyle>
  );
}
