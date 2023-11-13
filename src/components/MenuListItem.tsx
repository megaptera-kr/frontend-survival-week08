import styled from 'styled-components';
import Menu from '../types/Menu';
import useCartStore from '../hooks/useCartStore';

const Container = styled.li`
  width: 30%;
`;

const Item = styled.button`
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 2em;
  margin: 0;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.tertiary};
  text-align: start;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHoverBackground};
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

type MenuListItemProps = {
  menu: Menu
}

export default function MenuListItem({ menu }: MenuListItemProps) {
  const [, store] = useCartStore();

  const handleClickMenuButton = (menuItem: Menu) => {
    store.addCart(menuItem);
  };

  return (
    <Container
      style={{
        display: 'flex',
        paddingBlock: '0.5rem',
      }}
    >
      <Item
        name={`#${menu.name}`}
        type="button"
        style={{
          marginLeft: '0.5rem',
        }}
        onClick={() => {
          handleClickMenuButton(menu);
        }}
      >
        <img src={menu.image} alt="" />
        <span>
          {menu.name}
        </span>
        <span>
          {menu.price.toLocaleString('ko-kr')}
          원
        </span>
      </Item>
    </Container>
  );
}
