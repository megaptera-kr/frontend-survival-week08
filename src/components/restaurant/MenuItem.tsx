import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';

import Img from '../common/Image';
import Button from '../common/Button';
import { WordH2 } from '../common/Word';

import MenuItemModel from '../../models/MenuItemModel';
import RestaurantModel from '../../models/RestaurantModel';

const MenuItemBox = styled(Button)`
  border-radius: 40px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 5rem;
  border: solid 1px transparent;

  :hover {
    background-color: #fff1dc;
    border: solid 1px #ff8400;
  }
`;

const MenuItemImage = styled(Img)`
  width: 75%;
`;

const MenuInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuName = styled(WordH2)`
  color: black;
  font-size: 3.4rem;
  font-weight: 500;
  user-select: none;
`;

const MenuPrice = styled(WordH2)`
  color: black;
  font-size: 3.4rem;
  font-weight: 500;
  user-select: none;
`;

type MenuItemProps = {
  menuItem: MenuItemModel;
  restaurant: RestaurantModel;
};

export default function MenuItem({ menuItem, restaurant }: MenuItemProps) {
  const [, store] = useCartStore();

  const handleClick = () => {
    store.addItem({ restaurant, menuItem, quantity: 1 });
  };

  return (
    <MenuItemBox onClick={handleClick}>
      <MenuItemImage src={menuItem.image} alt='menu-item' />
      <MenuInfo>
        <MenuName text={menuItem.name} />
        <MenuPrice text={`(${menuItem.priceFormat()})원`} />
      </MenuInfo>
    </MenuItemBox>
  );
}
