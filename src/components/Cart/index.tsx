import useCartStore from '../../hooks/useCartStore';
import CartButton from './CartButton';
import CartHeader from './CartHeader';
import CartList from './CartList';

function Cart() {
  const [{ menu }] = useCartStore();
  return (
    <div>
      <CartHeader menu={menu} />

      <CartList menu={menu} />

      <CartButton />
    </div>
  );
}

export default Cart;
