import MenuItemModel from '../src/models/MenuItemModel';
import MenuItemType from '../src/types/MenuItemType';

const data: MenuItemType[] = [
  { id: 1, name: '짜장면', price: 8000, image: 'image/test.png' },
  { id: 2, name: '짬뽕', price: 8000, image: 'image/test.png' },
  { id: 3, name: '차돌짬뽕', price: 9000, image: 'image/test.png' },
  { id: 4, name: '탕수육', price: 14000, image: 'image/test.png' },
];

const menuItems = data.map((item) => new MenuItemModel({ ...item }));

export default menuItems;
