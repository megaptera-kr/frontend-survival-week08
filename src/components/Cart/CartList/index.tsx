import Food from '../../../types/food';

type CartListProps = {
  menu:Food[]
}
function CartList({ menu }:CartListProps) {
  return (
    <ul>
      {menu.map((food) => (
        <li key={food.id}>
          <p>{food.name}</p>
          <p>
            {food.price}
            원
          </p>
          <button type="button">X</button>
        </li>
      ))}

    </ul>
  );
}

export default CartList;
