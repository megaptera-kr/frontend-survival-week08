export default function FoodItem({ food }) {
    const { name, price, image } = food;

    return (
        <div>
            <img src={`images/${image}`} alt="#" />
            <p>{name}</p>
            <p>{price.toLocaleString()}원</p>
        </div>
    )
}