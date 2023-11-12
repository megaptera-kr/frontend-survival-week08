import styled from 'styled-components';
import useCartStore from '../hooks/useCartStore';
import Food from '../types/Food';
import MenuItem from './MenuItem';

const Container = styled.ul`
   display: flex;
   justify-content: space-between;
   gap: 2.5rem;
 `;

 type MenuProps = {
   menu: Food[]
 }

export default function Menu({ menu }: MenuProps) {
  const [, store] = useCartStore();

  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다</p>
    );
  }

  const handleClickSelect = (food: Food) => {
    store.addMenu(food);
  };

  return (
    <Container>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
            onClickItem={handleClickSelect}
          />
        );
      })}
    </Container>
  );
}
