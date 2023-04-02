import styled from 'styled-components';
import Menu from '../types/Menu';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(244, 244, 244);

  :last-child {
    border-bottom:none;
  }
`;

const Item = styled.button`
  font-size: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 2em;
  background-color: ${(props) => props.theme.colors.tertiary};
  text-align: start;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  padding: 2rem;
  margin-right: 15px;
  margin: 20px 15px 30px 0;

  :nth-child(3) {
    margin-right:0px;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHoverBackground};
  }
  
  img {
    display: block;
    margin:  auto;
    width: 75%;

  }
  
  span {
    display: block;
    font-weight: bold;
  }
`;

type MenusProps = {
  menu: Menu[];
  onClickItem: (menu: Menu) => void;
};

export default function Menus({ menu, onClickItem }: MenusProps) {
  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다</p>
    );
  }

  return (
    <Container>
      {menu.map((menus) => (
        <Item
          key={menus.id}
          type="button"
          onClick={() => onClickItem(menus)}
        >
          <img src={menus.image} alt="" />
          <span>{menus.name}</span>
          <span>
            {menus.price.toLocaleString()}
            원
          </span>
        </Item>
      ))}
    </Container>
  );
}
