import useFetchRestaurants from '../hooks/useFetchRestaurants';
import Restaurant from '../type/Restaurant';

export default function extractCategory() {
  const restaurants = useFetchRestaurants();

  return restaurants.reduce((acc:string[], cur:Restaurant) => (
    acc.includes(cur.category) ? acc : [...acc, cur.category]
  ), []);
}
