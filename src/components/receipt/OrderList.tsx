import styled from 'styled-components';
import { Order } from '../../types/order';

const OrderListWrap = styled.div`
  margin-bottom:10em;

  & > * {
    padding-block: 1em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }

  & > h3 {
    font-size: 4.8rem;
  }

  & > ul {
    font-size: 3.2rem;
  }
`;

const OrderListItem = styled.li`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 1em;
  }
`;

const OrderTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 3.2rem;
  padding-block: 1em;

  & span:last-of-type {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

type OrderListProps = {
  order: Order;
}

export default function OrderList({ order }: OrderListProps) {
  return (
    <OrderListWrap>
      <h3>주문목록</h3>
      <ul>
        {order?.menu.map((item, i) => {
          const key = `${i}-${item.name}`;
          return (
            <OrderListItem key={key}>
              <span>{item.name}</span>
              <span>{`${item.price.toLocaleString()}원`}</span>
            </OrderListItem>
          );
        })}
      </ul>
      <OrderTotalPrice>
        <span>총가격</span>
        <span>{`${order.totalPrice.toLocaleString()}원`}</span>
      </OrderTotalPrice>
    </OrderListWrap>
  );
}
