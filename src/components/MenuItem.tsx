import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import Menu from '../types/Menu';

type MenuProps = {
  menus: Menu[]
}

const MenuBox = styled.div`
  display: flex;
  gap: 25px;
  color: ${(props) => props.theme.colors.secondarytext};
  margin: 30px 60px;
`;

const MenuCard = styled.ul`
  width: 310px;
  height: 380px;
  border-radius: 40px;
  padding: 30px;
  background: ${(props) => props.theme.colors.menuCard};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.selectedMenuCardBackground};
    border: 3px solid ${(props) => props.theme.colors.selectedMenuCardBorder};
  }
`;

const MenuImage = styled.img`
  width: 200px;
  height: 250px;
  display: block;
  margin: 0 auto;
`;

const MenuBorderLine = styled.div`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.divideMenu};
  margin-top: 90px;
`;

export default function MenuItem({ menus }: MenuProps) {
  const defaultCart = [] as Menu[];
  const [cart, setCart] = useLocalStorage('cart', defaultCart);

  const handleClick = (menu: Menu) => {
    setCart([...cart, menu]);
  };

  return (
    <>
      <MenuBox>
        {menus?.map((menu) => (
          <MenuCard key={menu.id} onClick={() => { handleClick(menu); }}>
            <li>
              <MenuImage src={menu.image} alt={menu.name} />
            </li>
            <li>
              {menu.name}
            </li>
            <li>
              {menu.price.toLocaleString()}
              원
            </li>
          </MenuCard>
        ))}
      </MenuBox>
      <MenuBorderLine />
    </>
  );
}
