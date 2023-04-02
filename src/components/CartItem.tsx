import styled from 'styled-components';
import Menu from '../types/Menu';

type CartItemProps = {
  menu: Menu;
  index: number;
  onClickCancel: (index: number) => void;
}

const Container = styled.li`
  position: relative; 
  padding: 1em 2em;
  border-radius: 1em;
  background-color: ${(props) => props.theme.colors.secondary};

  span {
    font-size: 2rem;
    display: block;
    padding-block: .5em;
  }
  
  span:last-of-type {
    color: #FF8400;
  }
  
  button {
    position: absolute;
    top: 8%;
    right: 8%;
    padding: 1rem;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;

export default function CartItem({ menu, index, onClickCancel }: CartItemProps) {
  return (
    <Container>
      <span>{menu.name}</span>
      <span>
        {menu.price.toLocaleString()}
        원
      </span>
      <button type="button" onClick={() => onClickCancel(index)}>X</button>
    </Container>
  );
}
