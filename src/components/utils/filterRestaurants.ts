import Restaurant from '../../types/Restaurant';

function filterRestaurants(
  categoryKeyword: string,
  nameKeyword: string,
  restaurants: Restaurant[],
) {
  let filteredRestaurants = restaurants;
  if (categoryKeyword !== '전체') {
    filteredRestaurants = restaurants
      .filter((restaurant) => restaurant.category === categoryKeyword);
  }
  return filteredRestaurants.filter((restaurant) => restaurant.name.includes(nameKeyword));
}

export default filterRestaurants;
