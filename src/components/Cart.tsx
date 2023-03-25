import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { useLocalStorage } from 'usehooks-ts';

import shoppingCart from '../../static/images/shopping-cart.png';
import useCreateOrder from '../hooks/useCreateOrder';

import Menu from '../types/Menu';
import Receipt from '../types/Receipt';
import CartItem from './CartItem';

const CartWrap = styled.div`
  background: ${(props) => props.theme.colors.cartlist};
  color: ${(props) => props.theme.colors.secondarytext};
  padding: 2%;
`;

const CartInfoWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const CartInfo = styled.div`
  display: flex;
  div {
    padding: 10px;
  }
  img {
    width: 33px;
    height: 33px;
  }

`;

const TotalPrice = styled.div`
  padding: 10px;
`;

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
          <div>
            주문내역
            <span>
              {totalQty}
              개
            </span>
          </div>
        </CartInfo>
        <TotalPrice>
          총 결제 예상금액
          <span>
            {' '}
            {totalPrice.toLocaleString()}
          </span>
          원
        </TotalPrice>
      </CartInfoWrap>
      <CartItem />
      <div>
        <button type="button">취소</button>
        <button type="button" onClick={orderMenu}>주문하기</button>
      </div>
    </CartWrap>
  );
}
