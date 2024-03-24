import styled from 'styled-components';

import { Link, useSearchParams } from 'react-router-dom';

import OrderList from './components/OrderList';
import OrderHeader from './components/OrderHeader';
import OrderTotalPrice from './components/OrderTotalPrice';

import useFetchOrderList from '../../../hooks/useFetchOrderList';

const Container = styled.div`
  padding: 180px 50px 50px;
  border-top-right-radius: 8rem;
  background: ${(props) => props.theme.colors.background02};
`;

const OrderListContainer = styled.div`
  margin-block: 5rem 31rem;
  border-top: 1px solid ${(props) => props.theme.colors.boldLine};

  h2 {
    font-size: 48px;
    font-weight: bold;
    line-height: 57.6px;
    padding-inline: 4rem;
    padding-block: 3.4rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.line};
  }
`;

const Button = styled.button`
  font-size: 2.8rem;
  display: block;
  padding-block: 1.2em;
  width: 100%;
  border: 0;
  border-radius: 8em;
  background: #FF8400;
  color: #FFFFFF;
  cursor: pointer;
`;

export default function CompletePage() {
  const [searchParam] = useSearchParams();
  const orderId = searchParam.get('orderId') || undefined;

  const { menu, totalPrice } = useFetchOrderList(orderId);

  return (
    <Container>
      <OrderHeader orderId={orderId} />
      <OrderListContainer>
        <h2>주문목록</h2>
        <OrderList menus={menu} />
        <OrderTotalPrice totalPrice={totalPrice} />
      </OrderListContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button type="button">메인화면으로 돌아가기</Button>
      </Link>
    </Container>
  );
}
