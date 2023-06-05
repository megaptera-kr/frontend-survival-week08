export type Food = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type Restaurant = {
  id: string;
  name: string;
  category: string;
  menu: Food[];
}
