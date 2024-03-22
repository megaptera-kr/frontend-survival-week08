import Restaurant from '../types/Restaurant';

function extractCategories(restaurants:Restaurant[]) {
  return restaurants.reduce((acc:string[], restaurant:Restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}

export default extractCategories;
