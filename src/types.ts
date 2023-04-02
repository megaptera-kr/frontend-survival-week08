export type Menu = {
  id: string;
  image: string;
  name: string;
  price: number;
};

export type Restaurant = {
  category: string;
  id: string;
  name: string;
  menu: Menu[];
};

export type Receipt = {
  menu: Menu[];
  id: string;
  totalPrice: number;
};
