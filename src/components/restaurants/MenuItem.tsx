import { Menu } from '../../types/restaurants';

type MenuItemProps = {
  food: Menu;
  onClickFood: (food: Menu) => void;
}

export default function MenuItem({ food, onClickFood }: MenuItemProps) {
  return (
    <li>
      <button type="button" onClick={() => onClickFood(food)}>
        <span>{food.name}</span>
        <span>{`${food.price.toLocaleString()}원`}</span>
      </button>
    </li>
  );
}
