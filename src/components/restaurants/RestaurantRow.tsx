import FoodItem from "./FoodItem";

export default function RestaurantRow({ restaurant }) {
    const { name, menu } = restaurant;

    return (
        <div>
            <h2>{name}</h2>
            <div>
                {menu.map(food => (
                    <FoodItem
                        key={food.id}
                        food={food} />
                ))}
            </div>
        </div>
    )
}