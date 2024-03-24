import styled from 'styled-components';
import Menu from '../../../../types/Menu';

import CartItem from './CartItem';

const Container = styled.ul`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5em;
  margin-block: 2em;
`;

type MenusProps = {
  menus: Menu[];
};

export default function CartMenus({ menus }: MenusProps) {
  return (
    <Container style={{ listStyle: 'none', padding: 0 }}>
      {menus.map((menu) => (
        <CartItem key={menu.id} menu={menu} />
      ))}
    </Container>
  );
}
