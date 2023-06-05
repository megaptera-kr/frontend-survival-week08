export type Category = '전체' | '중식' | '한식' | '일식';

export type Menu = {
  id: string;
  name: string;
  price: number;
  image: string;
}

export type Restaurant = {
  id: string;
  category: Category;
  name: string;
  menu: Menu[]
};

export type RestaurantData = {
  restaurants: Restaurant[];
}
