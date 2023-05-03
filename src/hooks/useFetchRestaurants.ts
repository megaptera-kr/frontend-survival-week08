import { useEffect, useState } from 'react';
import Restaurant from '../types/Restaurant';

const useFetchRestaurants = ():Restaurant[] => {
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const URL = 'http://localhost:3000/restaurants';
      const response = await fetch(URL);
      const { restaurants } = await response.json();
      setRestaurant(restaurants);
    }
    fetchData();
  }, []);

  return restaurant;
};

export default useFetchRestaurants;
