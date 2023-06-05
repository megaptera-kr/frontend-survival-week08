import useStore from '../hooks/useStore';

export default function extractCartItem() {
  const store = useStore();
  const { cart } = store.state;
  const selectedMenu = cart.map((menu, index) => (
    index > 0 && JSON.parse(menu)
  )).filter((menu) => (
    menu !== false
  ));

  return selectedMenu;
}
