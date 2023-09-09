import { Menu } from '../../types/restaurants';

type CartItemProps = {
  food: Menu;
}

export default function CartItem({ food }: CartItemProps) {
  return (
    <li>
      <span>{food.name}</span>
      <span>{`${food.price.toLocaleString()}원`}</span>
    </li>
  );
}
