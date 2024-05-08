import Restaurant from '../../../../types/restaurant';

type RestaurantRowProps = {
  restaurant:Restaurant
}

function RestaurantRow({ restaurant }:RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>
        <ul>
          {restaurant.menu.map((food) => (
            <li key={food.id}>
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
