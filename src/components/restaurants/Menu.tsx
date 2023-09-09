import MenuItem from './MenuItem';

import { Menu } from '../../types/restaurants';
import useCartStore from '../../hooks/useCartStore';

type MenuProps = {
  menu: Menu[];
}

export default function Menu({ menu }: MenuProps) {
  const [_, store] = useCartStore();

  const handleClickFood = (food: Menu) => {
    store.addItem(food);
  };

  return (
    <ul>
      {menu.map((food, i) => {
        const key = `${i}-${food.id}`;
        return <MenuItem key={key} food={food} onClickFood={handleClickFood} />;
      })}
    </ul>
  );
}
