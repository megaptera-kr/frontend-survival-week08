import styled from 'styled-components';
import MenuItemModel from '../../models/MenuItemModel';
import Img from '../common/Image';
import { WordH2 } from '../common/Word';

type MenuItemProps = {
  menuItem: MenuItemModel;
};

const MenuItemBox = styled.div`
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
  }
`;

const MenuItemImage = styled(Img)`
  width: 75%;
  pointer-events: none;
  user-select: none;
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

const MenuItemHover = styled(MenuItemBox)`
  &:hover {
    border-color: #ff8400;
  }
`;

export default function MenuItem({ menuItem }: MenuItemProps) {
  return (
    <MenuItemHover>
      <MenuItemBox>
        <MenuItemImage src={menuItem.image} alt='menu-item' />
        <MenuInfo>
          <MenuName text={menuItem.name} />
          <MenuPrice text={`(${menuItem.priceFormat()})원`} />
        </MenuInfo>
      </MenuItemBox>
    </MenuItemHover>
  );
}
