import RestaurantRow from "./RestaurantRow";

export default function RestaurantsTable({ restaurants }) {
    return (
        <div>
            {restaurants.map(restaurant => (
                <RestaurantRow
                    key={restaurant.id}
                    restaurant={restaurant} />
            ))}
        </div>
    )
}