export interface Menu {
  id: string,
  name: string,
  price: number,
  image: string
}

export interface Restaurnant {
    id:string,
    category:string,
    name:string,
    menu: Menu[]
}

export type ReceiptProps = {
  id: string;
  menu: Menu[]
  totalPrice: number;
};
