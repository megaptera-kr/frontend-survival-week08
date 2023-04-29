import useCartStore from '../../../hooks/useCartStore';
import type { Food } from '../../../types/kiosk';
import * as S from './MenuItem.styled';

interface MenuItemProps {
  menu: Food;
}

export default function MenuItem({ menu }: MenuItemProps) {
  const { addCartItem } = useCartStore();

  const handleClick = () => {
    addCartItem(menu);
  };

  return (
    <S.MenuItem>
      <S.MenuBtn aria-label={`${menu.name} 담기`} onClick={handleClick}>
        <img src={menu.image} alt={menu.name} />
        <dl>
          <S.InfoBox>
            <dt>음식명</dt>
            <dd>{menu.name}</dd>
          </S.InfoBox>
          <S.InfoBox>
            <dt>가격</dt>
            <dd>{menu.price}</dd>
          </S.InfoBox>
        </dl>
      </S.MenuBtn>
    </S.MenuItem>
  );
}
