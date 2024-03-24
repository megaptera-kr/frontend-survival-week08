import styled from 'styled-components';
import Menu from '../../../../types/Menu';
import useCartStore from '../../../../hooks/useCartStore';

const Container = styled.li`
  width: 30%;
`;

const Item = styled.button`
  border: 1px solid ${(props) => props.theme.colors.cardBackround};
  border-radius: 2em;
  margin: 0;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.cardBackround};
  text-align: start;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray01};

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.buttonHover};
  }

  img {
    display: block;
    margin: 0 auto;
    width: 75%;
  }

  span {
    font-size: 3.2rem;
    display: block;
    padding-block: .2em;
  }
`;

type MenuItemProps = {
  menu: Menu;
};

export default function MenuItem({ menu }: MenuItemProps) {
  const { name, price, image } = menu;
  const [, store] = useCartStore();

  return (
    <Container>
      <Item
        type="button"
        onClick={() => store.addCart(menu)}
      >
        <img src={image} alt="" />
        <span>{name}</span>
        <span>
          {price.toLocaleString()}
          원
        </span>
      </Item>
    </Container>
  );
}
