import extractCartItem from './extractCartItem';

export default function calcTotalPrice() {
  const selectedmenu = extractCartItem();
  return selectedmenu.reduce((acc, cur) => (
    acc + cur.price
  ), 0);
}
