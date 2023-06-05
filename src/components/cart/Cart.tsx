import styled from 'styled-components';
import useCartStore from '../../hooks/useCartStore';
import Food from './Food';

const CartContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5rem;
`;
export default function Cart() {
  const [{ menu }, store] = useCartStore();
  return (
    <CartContainer>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <Food
            key={key}
            index={index}
            food={food}
            handleClick={() => store.removeOrderMenu(index)}
          />
        );
      })}
    </CartContainer>
  );
}
