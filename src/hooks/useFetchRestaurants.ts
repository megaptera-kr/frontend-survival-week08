
import { useState } from "react";
import { useEffectOnce } from "usehooks-ts";

export default function useFetchRestaurants() {
    const [data, setData] = useState([]);

    const fetchRestaurants = async () => {
        const url = 'http://localhost:3000/restaurants'
        const res = await window.fetch(url);
        const { restaurants } = await res.json();

        setData(restaurants);
    }

    useEffectOnce(() => {
        fetchRestaurants();
    })

    return data;
}