import Restaurant from "../types/Restaurant";

type filterCondition = {
    filterText: string;
    filterCategory: string;
}

function nomalize(str: string) {
    return str.toLowerCase().replace(/\s/g, "");
}

export default function filterRestaurants(
    restaurants: Restaurant[],
    { filterText, filterCategory }: filterCondition
) {
    let filteredRestaurants =
        filterCategory === '전체' ? restaurants
            : restaurants.filter(restaurant => restaurant.category === filterCategory);

    const query = nomalize(filterText);

    filteredRestaurants = filteredRestaurants.filter(restaurant => {
        const name = nomalize(restaurant.name);
        return name.includes(query);
    })

    return filteredRestaurants;
}