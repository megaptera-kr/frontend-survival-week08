import { useEffect, useState } from 'react';

import ReataurantAPI from '../apis/ReataurantAPI';

import RestaurantType from '../types/RestaurantType';

import RestaurantModel from '../models/RestaurantModel';

type useFetchRestaurantsParams = {
  categoryName?: string;
  restaurantName?: string;
};

type useFetchCategoriesReturn = {
  restaurants: RestaurantModel[];
};

const api = new ReataurantAPI();

function useReadRestaurants(
  params: useFetchRestaurantsParams,
): useFetchCategoriesReturn {
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
  const { categoryName, restaurantName } = params;

  useEffect(() => {
    const fetchData = async () => {
      const data: RestaurantType[] = await api.select(params);
      const models: RestaurantModel[] = data.map(
        (item: RestaurantType) => new RestaurantModel({ ...item }),
      );

      setRestaurants(models);
    };

    fetchData();
  }, [categoryName, restaurantName]);

  return { restaurants };
}

export default useReadRestaurants;
