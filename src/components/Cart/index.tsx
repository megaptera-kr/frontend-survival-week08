import useCartStore from '../../hooks/useCartStore';
import CartHeader from './CartHeader';
import CartList from './CartList';
import OrderButton from './OrderButton';

function Cart() {
  const [{ menu }] = useCartStore();
  return (
    <div>
      <CartHeader />

      <CartList menu={menu} />

      <OrderButton />
    </div>
  );
}

export default Cart;
