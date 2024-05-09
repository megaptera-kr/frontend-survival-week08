import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useCartStore from '../../hooks/useCartStore';
import usePostOrder from '../../hooks/usePostOrder';
import CartButton from './CartButton';
import CartHeader from './CartHeader';
import CartList from './CartList';

function Cart() {
  const navigate = useNavigate();

  const [{ menu }, cartStore] = useCartStore();
  const { createOrder } = usePostOrder();

  const goToIntro = () => navigate('/');
  const goToResult = async () => {
    if (menu.length === 0) {
      return;
    }

    const id = await createOrder(menu);
    navigate(`/order/complete?orderId=${id}`);
  };

  useEffect(() => () => cartStore.clearCart(), []);
  return (
    <div>
      <CartHeader menu={menu} />

      <CartList menu={menu} />

      <CartButton goToIntro={goToIntro} goToResult={goToResult} />
    </div>
  );
}

export default Cart;
