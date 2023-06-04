import { useState } from "react";

import RestaurantsTable from "./RestaurantsTable";
import SearchBar from "./SearchBar";

import useFetchRestaurants from "../../hooks/useFetchRestaurants";

import filterRestaurants from "../../utils/filterRestaurants";

export default function Restaurants() {
    const restaurants = useFetchRestaurants();
    const categories = ['한식', '일식', '중식']

    const [filterText, setFilterText] = useState('');
    const [filterCategory, setFilterCategory] = useState('전체');

    const filteredRestaurants = filterRestaurants(restaurants, {
        filterText, filterCategory
    });

    return (
        <>
            <SearchBar
                categories={categories}
                filterText={filterText}
                setFilterText={setFilterText}
                setFilterCategory={setFilterCategory}
            />
            <RestaurantsTable
                restaurants={filteredRestaurants} />
        </>
    )
}