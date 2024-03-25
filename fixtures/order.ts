import Menu from '../src/types/Menu';

const order = {
  id: '12345678910',
  menu: [
    { id: '1', name: '짜장면', price: 8000 },
    { id: '5', name: '제육김밥', price: 5500 },
  ] as Menu[],
  totalPrice: 13500,
};
export default order;
