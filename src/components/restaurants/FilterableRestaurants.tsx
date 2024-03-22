import useFetchRestaurant from '../../hooks/useFetchRestaurant';
import Restaurants from './Restaurants';

export default function FilterableRestaurants() {
  const restaurants = useFetchRestaurant();
  return (
    <div>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
