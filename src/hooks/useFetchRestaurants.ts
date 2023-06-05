import { useFetch } from 'usehooks-ts';
import Restaurant from '../type/Restaurant';

const url = 'http://localhost:3000/restaurants';

type Restaurants = {
  [restaurants: string] : Restaurant[]
}

const emptyRestaurants = [] as Restaurant[];
export default function useFetchRestaurants() {
  const { data } = useFetch<Restaurants>(url);
  if (!data) {
    return emptyRestaurants;
  }

  return data.restaurants;
}
