import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import shoppingCart from '../../static/images/shopping-cart.png';
import useCreateOrder from '../hooks/useCreateOrder';

import Menu from '../types/Menu';
import Receipt from '../types/Receipt';
import CartItem from './CartItem';

import {
  CartWrap, CartInfoWrap, CartInfo, TotalQty, TotalPrice, OrderButtonBox,
} from './Cart.style';

export default function Cart() {
  const defaultCart = [] as Menu[];
  const [cart, setCart] = useLocalStorage('cart', defaultCart);

  // 주문 총 개수
  const totalQty = cart?.length;

  // 총 결제 금액
  const totalPrice = cart?.reduce((acc, menu) => acc + menu.price, 0);

  const defaultReceipt = {} as Receipt;
  const [, setReceipt] = useLocalStorage('receipt', defaultReceipt);

  const { createOrder } = useCreateOrder();

  const navigate = useNavigate();

  const cancelOrder = () => {
    setCart(defaultCart);
  };

  const orderMenu = async () => {
    if (!totalQty) {
      return;
    }
    const result = await createOrder(cart, totalPrice);

    setReceipt(result);

    setCart([]);
    navigate('/order/complete');
  };

  return (
    <CartWrap>
      <CartInfoWrap>
        <CartInfo>
          <img src={shoppingCart} alt="shopping-cart" />
          <TotalQty>
            <span className="order-list">
              주문내역
            </span>
            <span className="total-qty">
              {totalQty}
              개
            </span>
          </TotalQty>
        </CartInfo>
        <TotalPrice>
          총 결제 예상금액
          <span>
            {' '}
            {totalPrice.toLocaleString()}
          </span>
          {' '}
          원
        </TotalPrice>
      </CartInfoWrap>
      <CartItem />
      <OrderButtonBox>
        <button
          className="cancel"
          type="button"
          onClick={cancelOrder}
        >
          취소

        </button>
        <button
          className="order"
          type="button"
          onClick={orderMenu}
        >
          주문 하기
        </button>
      </OrderButtonBox>
    </CartWrap>
  );
}
