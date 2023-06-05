import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useCartStore from '../../hooks/useCartStore';
import ButtonContainer from './ButtonContainer';
import Cart from './Cart';
import Image from '../common/Image';

const Container = styled.div`
  width: 100%;
  padding: 4rem 5rem 5rem;
  background: ${(props) => props.theme.colors.sub.background};
  color: ${(props) => props.theme.colors.sub.text};
  font-size: 3.2rem;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;
`;

const Side = styled.div`
  display: flex;
  align-items: center;
`;

const MenuCountBox = styled.span`
  font-size: 2.4rem;
  margin-left: 1.2rem;
  padding: 1.2rem 2.4rem;
  border-radius: 2.4rem;
  background: ${(props) => props.theme.colors.main.strong};
  color: ${(props) => props.theme.colors.main.text};
`;

const StrongText = styled.strong`
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.main.strong};
`;

export default function CartContainer() {
  const navigate = useNavigate();
  const [{ totalOrderCount, totalPrice, orderId }, store] = useCartStore();

  useEffect(() => {
    if (orderId !== '') {
      navigate(`/order/complete?orderId=${orderId}`);
      store.initOrderId();
    }
  }, [orderId]);

  return (
    <Container>
      <Header>
        <Side>
          <Image
            aria-label="shopping-cart"
            width="3.8rem"
            height="3.8rem"
            src="/images/shopping-cart.png"
            alt="shopping-cart"
          />
          <p>주문 내역</p>
          <MenuCountBox>
            {totalOrderCount}
            개
          </MenuCountBox>
        </Side>
        <Side>
          <p>총 결제 예상금액</p>
          <StrongText>
            {totalPrice.toLocaleString()}
          </StrongText>
          <p>원</p>
        </Side>
      </Header>
      <Cart />
      <ButtonContainer />
    </Container>
  );
}
