import { useNavigate } from 'react-router';
import { useState } from 'react';
import { postOrders } from '../../services/postOrders';
import useCartStore from '../../hooks/useCartStore';
import * as Styles from './styles';

function Cart() {
  const [{ cart, totalPrice }, store] = useCartStore();
  const [orderText, setOrderText] = useState('');

  const navigate = useNavigate();
  const handleOrder = async () => {
    const postData = {
      menu: [...cart],
      totalPrice,
    };
    const response = await postOrders(postData);
    if (response.id) {
      setOrderText('주문이 완료되었습니다!');
      setTimeout(() => {
        navigate(`/complete?ordersId=${response.id}`);
        // store.clearCart();
      }, 200);
    }
  };

  return (
    <Styles.CartWrapper>
      <Styles.CartTitleBox>
        <Styles.LengthWrap>
          <Styles.CartTitle>주문내역</Styles.CartTitle>
          <Styles.CartLength>
            {cart.length}
            {' '}
            개
            {' '}
          </Styles.CartLength>
        </Styles.LengthWrap>
        <Styles.CartPrice>
          총 결제 예상금액
          {' '}
          <Styles.Price>
            {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Styles.Price>
          원
        </Styles.CartPrice>
      </Styles.CartTitleBox>
      {totalPrice > 0
      && (
        <>
          <Styles.CartMenues>
            {cart.map((menu, menuIdx) => (
            // eslint-disable-next-line react/no-array-index-key
              <Styles.CartMenu key={`cart_${menuIdx}`}>
                <Styles.CartMenuTitle>
                  {menu.name}
                </Styles.CartMenuTitle>
                <Styles.CartMenuPrice>
                  {menu.price}
                </Styles.CartMenuPrice>
                <Styles.CartMenuDeleteButton data-testid={`cart_${menu.id}_${cart.length}`} onClick={() => store.deleteCartMenu(menuIdx)} />
              </Styles.CartMenu>
            ))}
          </Styles.CartMenues>
          <Styles.CartFooter>
            <Styles.CartFooterItem>
              <Styles.CartFooterButton
                $isType="cancel"
                onClick={() => store.clearCart()}
              >
                취소
              </Styles.CartFooterButton>
            </Styles.CartFooterItem>
            <Styles.CartFooterItem>
              <Styles.CartFooterButton onClick={handleOrder}>주문하기</Styles.CartFooterButton>
            </Styles.CartFooterItem>
          </Styles.CartFooter>

        </>
      )}
      {orderText}
    </Styles.CartWrapper>
  );
}

export default Cart;
