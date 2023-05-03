import { useNavigate } from 'react-router';

import { Button } from '../../common';
import useCartStore from '../../../hooks/useCartStore';
import { useOrderCart } from '../../../services/useKiosk';
import PATH from '../../../constants/path';
import CartMeta from './cartMeta/CartMeata';
import CartItem from './cartItem/CartItem';
import * as S from './CartSheet.styled';

export default function CartSheet() {
  const navigate = useNavigate();

  const {
    cart, size, getTotalPrice, removeCartItem, clear,
  } = useCartStore();

  const { mutate: orderMutate } = useOrderCart();

  const handleRemoveCartItem = (id: string) => () => {
    removeCartItem(id);
  };

  const handleCancelOrder = () => {
    navigate(PATH.ROOT);
    clear();
  };

  const handleOrderCart = () => {
    if (!size()) {
      return;
    }

    const req = {
      menu: cart,
      totalPrice: getTotalPrice(),
    };

    orderMutate(req, {
      onSuccess: ({ id }) => {
        clear();
        navigate({
          pathname: PATH.COMPLETE,
          search: `?orderId=${id}`,
        });
      },
    });
  };

  return (
    <S.CartSheet>
      <h2>장바구니</h2>
      <CartMeta totalCount={size()} totalPrice={getTotalPrice()} />
      <S.CartItems>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            onRemove={handleRemoveCartItem(item.id)}
          />
        ))}
      </S.CartItems>
      <S.UtilBtns>
        <Button variant="cancel" label="취소" onClick={handleCancelOrder} />
        <Button label="주문 하기" onClick={handleOrderCart} />
      </S.UtilBtns>
    </S.CartSheet>
  );
}
