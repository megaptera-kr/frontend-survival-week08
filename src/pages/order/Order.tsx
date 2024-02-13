import { useCallback, useEffect, useState } from 'react';
import ControlNext from './summary/ControlNext';
import FilterSection from './filterSection/FilterSection';
import MenuTable from './menuTable/MenuTable';
import OrderingList from './summary/OrderingList';
import useFetchData, { RestaurantData } from '../../../hooks/useFetchData';

export default function Order() {
  const [restaurantsData, setRestaurantsData] = useState<RestaurantData[]>();
  const [categoryList, setCategoriesList] = useState<string[]>(['']);
  const [selectedCategory, setSelectedCategory] = useState('');

  const getData = useCallback(async () => {
    const {
      restaurantsData: tempRestaurantsData,
      categoriesList,
    } = await useFetchData();
    setRestaurantsData(tempRestaurantsData);
    setCategoriesList(categoriesList);
  }, [useFetchData]);

  useEffect(() => {
    getData();
  }, []);

  // 분류 안할 거면~ 효율적(?)
  // const tempMenuTables = restaurantsData?.map((restaurant) => {
  //   if (query === '') { // return all
  //     return (
  //       <MenuTable key={restaurant.id} restaurantData={restaurant} />
  //     );
  //   }
  //   if (query === restaurant.category) {
  //     return (
  //       <MenuTable key={restaurant.id} restaurantData={restaurant} />
  //     );
  //   }
  // });

  return (
    <form className="order">
      <FilterSection categories={categoryList} setSelectedCategory={setSelectedCategory} />
      <MenuTable selectedCategory={selectedCategory} restaurantsData={restaurantsData} />
      <OrderingList />
      <ControlNext />
    </form>
  );
}
