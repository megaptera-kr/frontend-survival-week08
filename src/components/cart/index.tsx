import { useNavigate } from 'react-router';

import useCartStore from '../../hooks/useCartStore';

import Summary from './Summary';
import CartItem from './CartItem';
import CartButtons from './CartButtons';
import useCreateOrder from '../../hooks/useCreateOrder';

export default function Cart() {
  const navigate = useNavigate();
  const [{ menu }, store] = useCartStore();

  const createOrder = useCreateOrder(menu);

  const handleClickCancel = () => {
    store.clearItem();
    navigate({ pathname: '/' });
  };

  const handleClickOrder = async () => {
    if (!menu.length) return;

    const id = await createOrder();
    store.clearItem();
    navigate({ pathname: '/order/complete', search: `?orderId=${id}` });
  };

  return (
    <div>
      <Summary cartMenu={menu} />
      <ul>
        {menu.map((food, i) => {
          const key = `${i}-${food.id}`;
          return <CartItem key={key} food={food} />;
        })}
      </ul>
      <CartButtons onClickCancel={handleClickCancel} onClickOrder={handleClickOrder} />
    </div>
  );
}
