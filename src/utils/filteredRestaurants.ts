import useFetchRestaurants from '../hooks/useFetchRestaurants';
import useStore from '../hooks/useStore';

export default function filteredRestaurants() {
  const restaurants = useFetchRestaurants();
  const store = useStore();

  return restaurants.filter((restaurant) => (
    restaurant.category === store.state.inputCagegory || store.state.inputCagegory === '전체'
  )).filter((restaurant) => (
    (restaurant.name).includes(store.state.inputText.trim())
  ));
}
