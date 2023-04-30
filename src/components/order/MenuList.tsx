import styled from 'styled-components';
import Food from '../../types/FoodType';

const MenuSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 5rem;
  margin-bottom: 5rem;
  border-bottom: 1px solid #F4F4F4;
`;

const MenuCard = styled.div`
  background: ${(props) => props.theme.colors.orderMenuBox};
  border-radius: 40px;
  margin: 10px;
  padding: 1em;
  border: 1px solid ${(props) => props.theme.colors.orderMenuBox};
  cursor: pointer;
  color: ${(props) => props.theme.colors.orderLetterColor};

  img {
    display: block;
    width: 75%;
    margin: 0 auto;
  }

  span {
    font-size: 3.2rem;
    display: block;
    padding-block: 0.5em;
  }

  &:hover {
    background: ${(props) => props.theme.colors.orderMenuBoxSelect};
    border: 1px solid #FF8400;
  }
`;

type MenuListType = {
  menus: Food[],
  setSelectedMenus: React.Dispatch<React.SetStateAction<Food[]>>,
}

function MenuList({ menus, setSelectedMenus }: MenuListType) {
  return (
    <MenuSection>
      {menus.map((menu) => (
        <MenuCard
          key={menu.id}
          onClick={() => {
            setSelectedMenus((prevState) => [...prevState, menu]);
          }}
        >
          <img src={menu.image} alt={menu.name} />
          <span>{menu.name}</span>
          <span>
            {menu.price.toLocaleString()}
            원
          </span>
        </MenuCard>
      ))}
    </MenuSection>
  );
}

export default MenuList;
