export type MenuData = {
  name: string;
  price: number;
  id: string;
  image: string;
}

export type RestaurantData = {
  id: string;
  category: string;
  name: string;
  menu: MenuData[];
}

const useFetchData = async () => {
  const { restaurants } = await fetch('http://localhost:3000/restaurants')
    .then((response) => response.json());
  const restaurantsData = restaurants;

  // 가짓수 => button'
  let categoriesList: string[] = restaurantsData
    .map((restaurantData: RestaurantData) => restaurantData.category);
  const categories: Set<string> = new Set(categoriesList);
  categoriesList = [...categories];

  return { restaurantsData, categoriesList };
};

export default useFetchData;
