import Restaurant from '../types/Restaurant';

export default function selectCategory(restaurants:Restaurant[]) {
  return restaurants?.reduce(
    (acc:string[], restaurant:Restaurant) => (acc.includes(restaurant.category)
      ? acc
      : [...acc, restaurant.category]),
    [],
  );
}
