import styled from 'styled-components';

import CartMenus from './CartMenus';
import CartOperations from './CartOperations';

import useCartStore from '../../../../hooks/useCartStore';

const Container = styled.div`
  background: ${(props) => props.theme.colors.cardBackround};
  padding: 4rem 5rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  h2{
    font-size: 3.2rem;
    line-height: 38.19px;
    font-weight: 600;

  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    margin-right: .5em;
    width: 4rem;
  }

  span:last-of-type {
    font-size: 2.4rem;
    line-height: 28.75px;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.primary};
    border-radius: 3rem;
    padding: 0.6rem 1.6rem;
    margin-left: .6em;
  }
`;

export default function CartContainer() {
  const [{ cart }] = useCartStore();
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <Container>
      <Title>
        <Counter>
          <img src="/images/shopping-cart.png" alt="" />
          <h2>
            주문내역
          </h2>
          <span>
            {cart.length}
            개
          </span>
        </Counter>

        <h2>
          총 결제 예상금액:
          {totalPrice.toLocaleString()}
          원
        </h2>
      </Title>

      <CartMenus menus={cart} />
      <CartOperations />
    </Container>
  );
}
