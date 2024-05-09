import useCartStore from '../../../../hooks/useCartStore';
import Food from '../../../../types/food';
import Restaurant from '../../../../types/restaurant';

type RestaurantRowProps = {
  restaurant:Restaurant
}

function RestaurantRow({ restaurant }:RestaurantRowProps) {
  const [, cartStore] = useCartStore();
  const handleClick = (food:Food) => () => {
    cartStore.addCart(food);
  };
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>
        <ul>
          {restaurant.menu.map((food) => (
            <li role="menuitem" key={food.id} onClick={handleClick(food)}>
              <img src={food.image} alt={food.image} />
              <p>{food.name}</p>
              <p>{food.price}</p>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
