import useCartStore from '../../../hooks/useCartStore';
import Food from '../../../types/food';

type CartListProps = {
  menu:Food[]
}
function CartList({ menu }:CartListProps) {
  const [, cartStore] = useCartStore();
  const handleClick = (id:string) => () => {
    cartStore.removeCart(id);
  };
  return (
    <ul>
      {menu.map((food) => (
        <li key={food.id}>
          <p>{food.name}</p>
          <p>
            {food.price}
            원
          </p>
          <button type="button" onClick={handleClick(food.id)}>X</button>
        </li>
      ))}

    </ul>
  );
}

export default CartList;
