export type Menu = {
  id: string,
  name: string,
  price: number
  image: string
}

export type Category = '전체' |'중식' | '한식'| '일식';

export type Restaurant = {
  id: string
  category: Category
  name: string
  menu: Menu[]
}

export type CartItem = {
  menu: Omit<Menu, 'image'>[],
  totalPrice: number
}

export type Receipt = {
  id: string,
  menu: Menu[],
  totalPrice: number
}

export type Order = {
  id: string
  menu: Omit<Menu, 'image'>[]
  totalPrice: number
}
