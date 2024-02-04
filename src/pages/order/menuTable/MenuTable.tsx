import { useEffect, useState } from 'react';
import { RestaurantData } from '../../../../hooks/useFetchData';
import MenuInRestaurants from './MenuInRestaurants';

export default function MenuTable({ selectedCategory, restaurantsData }: {
  selectedCategory: string;
  restaurantsData: RestaurantData[] | undefined;
}) {
  const [filteredData, setFilteredData] = useState<RestaurantData[]>();

  // selectedCategory 바뀔때마다 실행
  useEffect(() => {
    let filteredRestaurants: RestaurantData[] | undefined;
    if (selectedCategory !== '') {
      filteredRestaurants = restaurantsData?.filter((restaurant) => (
        restaurant.category === selectedCategory
      ));
    } else {
      filteredRestaurants = restaurantsData;
    }

    setFilteredData((prev) => {
      if (prev !== filteredRestaurants) {
        return filteredRestaurants;
      }
    });
  }, [selectedCategory]);

  return (
    <div>
      {filteredData
        ?.map((restaurantData) => (
          <MenuInRestaurants
            key={restaurantData.id}
            restaurantData={restaurantData}
          />
        ))}
    </div>
  );
}
