/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';

import Restaurant from '../types/Restaurant';

const url = 'http://localhost:3000/restaurants';

export default function useFetchRestaurant() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    try {
      const fetchRestaurants = async () => {
        const response = await fetch(url);
        const data = await response.json();
        if (!data) {
          return [];
        }
        setRestaurants(data.restaurants);
      };

      fetchRestaurants();
    } catch {
      console.log('Network Check!!');
    }
  }, []);

  return restaurants;
}
