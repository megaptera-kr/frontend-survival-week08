import styled from 'styled-components';
import Menu from '../../../../types/Menu';

import useCartStore from '../../../../hooks/useCartStore';

const Container = styled.li`
  position: relative;
  padding: 1em 2em;
  border-radius: 1em;
  background-color: ${(props) => props.theme.colors.background02};

  span {
    font-size: 2.8rem;
    display: block;
    padding-block: 1em;
  }

  span:last-of-type {
    color: ${(props) => props.theme.colors.primary};
  }

  button {
    position: absolute;
    top: 8%;
    right: 8%;
    padding: 1rem;
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray01};
  }
`;

type CartItemProps = {
  menu: Menu;
}

export default function CartItem({
  menu,
}: CartItemProps) {
  const { id, name, price } = menu;

  const [, store] = useCartStore();

  return (
    <Container>
      <span>{name}</span>
      <span>
        {price.toLocaleString()}
        원
      </span>
      <button
        type="button"
        onClick={() => store.removeCart(id)}
      >
        X
      </button>
    </Container>
  );
}
