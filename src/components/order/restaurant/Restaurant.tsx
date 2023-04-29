import type { Restaurant } from '../../../types/kiosk';
import { MenuItem } from '../menuItem';
import * as S from './Restaurant.styled';

interface RestaurantProps {
  restaurant: Restaurant
}

export default function Restaurant({ restaurant }: RestaurantProps) {
  return (
    <S.Restaurant>
      <h3>{restaurant.name}</h3>
      <S.Menus>
        {restaurant.menu.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </S.Menus>
    </S.Restaurant>
  );
}
