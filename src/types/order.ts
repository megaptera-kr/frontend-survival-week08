import { Menu } from './restaurants';

export type Order = {
  id: string;
  menu: Menu[];
  totalPrice: number;
}
