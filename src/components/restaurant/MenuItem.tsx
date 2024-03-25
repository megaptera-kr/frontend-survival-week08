import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';

import Img from '../common/Image';
import Button from '../common/Button';
import Text from '../common/Text';

import MenuItemModel from '../../models/MenuItemModel';
import RestaurantModel from '../../models/RestaurantModel';

const MenuItemBox = styled(Button)`
  flex-grow: 1;
  border-radius: 40px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  justify-content: space-around;
  border: solid 1px transparent; // trick

  :hover {
    background-color: ${(props) => props.theme.colors.cardBackgroundHover};
    border: solid 1px ${(props) => props.theme.colors.bodyHighlight};
  }
`;

const MenuItemImage = styled(Img)`
  width: 200px;
`;

const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const MenuName = styled(Text)`
  font-size: 3.4rem;
  font-weight: 600;
`;

const MenuPrice = styled(Text)`
  font-size: 3.4rem;
  font-weight: 600;
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
    <MenuItemBox
      onClick={handleClick}
      name={`#${restaurant.name}-${menuItem.name}`}
    >
      <MenuItemImage src={menuItem.image} alt='menu-item' />
      <MenuInfo>
        <MenuName>{menuItem.name}</MenuName>
        <MenuPrice>{`(${menuItem.priceFormat()}원)`}</MenuPrice>
      </MenuInfo>
    </MenuItemBox>
  );
}
