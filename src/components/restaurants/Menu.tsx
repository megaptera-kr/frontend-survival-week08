import styled from 'styled-components';
import useCartStore from '../../hooks/useCartStore';
import { Menu } from '../../types/restaurant';
import FoodButton from './FoodButton';

const MenuContainer = styled.li`
  width: 100%;
  padding: 4.8rem 3rem;
  h3 {
    font-size: 4.8rem;
    font-weight: bold;
    margin-bottom: 0.5em;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    padding-bottom: 8rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.sub.separation};
  }
`;

type Props = {
  name: string;
  menu: Menu[];
}

export default function Menu({ name, menu }:Props) {
  const [, store] = useCartStore();
  return (
    <MenuContainer>
      <h3>{name}</h3>
      <ul>
        {menu.map((food) => (
          <li key={food.id}>
            <FoodButton
              food={food}
              handleClick={() => store.addOrderMenu(food)}
            />
          </li>
        ))}
      </ul>
    </MenuContainer>
  );
}
