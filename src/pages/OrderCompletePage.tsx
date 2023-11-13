import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import useCartStore from '../hooks/useCartStore';
import useFetchOrder from '../hooks/useFetchOrder';
import Menu from '../types/Menu';
import OrderMessage from '../components/OrderMessage';

const Container = styled.div`
  padding-block: 8em 3em;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  border-top-right-radius: ${(props) => props.theme.sizes.contentBorderRadius};
  background: ${(props) => props.theme.colors.secondary};
`;

const OrderMenuContainer = styled.div`
  margin-bottom: 10em;
`;

const Title = styled.h3`
  font-size: 4.8rem;
  padding-block: 1em;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
`;

const OrderMenu = styled.ul`
  font-size: 3.2rem;
  padding-block: 1em;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
  }

  li:last-of-type {
    margin-bottom: 0;
  }
`;

const TotalPrice = styled.div`
  font-size: 3.2rem;
  display: flex;
  justify-content: space-between;
  padding-block: 1em;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};

  span {
    display: flex;
    align-items: center;
  }

  span strong {
    font-size: 4.8rem;
    color: #FF8400;
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

export default function OrderCompletePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [, store] = useCartStore();

  const orderId = searchParams.get('orderId');

  const handleClick = () => {
    store.clear();
    navigate('/');
  };

  if (!orderId) {
    return <div />;
  }

  const order = useFetchOrder(orderId);

  if (!order) {
    return <div />;
  }

  return (
    <Container>
      <OrderMessage order={order} />
      {!_.isEmpty(order) ? (
        <OrderMenuContainer>
          <Title>주문목록</Title>
          <OrderMenu>
            {
              order.menu?.map((orderMenu: Menu) => (
                <li key={orderMenu.id}>
                  <span>
                    {orderMenu.name}
                    {orderMenu.price.toLocaleString()}
                    원
                  </span>
                </li>
              ))
            }
          </OrderMenu>
          <TotalPrice>
            <span>
              총가격
              {' '}
              {order.totalPrice?.toLocaleString()}
              원
            </span>
          </TotalPrice>
        </OrderMenuContainer>
      ) : null}
      <Button
        type="button"
        onClick={handleClick}
      >
        메인화면으로 돌아가기
      </Button>
    </Container>
  );
}
