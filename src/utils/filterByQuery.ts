import Category from '../types/category';
import Restaurant from '../types/restaurant';

export default function filterByQuery(
  restaurants:Restaurant[],
  query?:{text:string, category:Category},
) {
  if (!query) {
    return restaurants;
  }

  const { text, category } = query;
  return restaurants.filter((restaurant) => {
    if (category === '전체') {
      return restaurant.name.includes(text);
    }
    return restaurant.name.includes(text) && restaurant.category === category;
  });
}
