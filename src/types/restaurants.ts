export type Menu = {
  id: string;
  name: string;
  price: number;
  image: string;
}

export type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
}
