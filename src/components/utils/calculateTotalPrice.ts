import Food from '../../types/FoodType';

const calculateTotalPrice = (selectedMenus: Food[]) => {
  const result = selectedMenus.reduce(
    (acc, cur) => acc + cur.price,
    0,
  );
  return result;
};

export default calculateTotalPrice;
