import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';

import Receipt from '../types/Receipt';

const OrederListWrap = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 40rem;
  padding: 3%;

  .order-list {
    width: 100%;
    height: 100px;
    line-height: 80px;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: -0.03em;
  }
`;

const OrderListLine = styled.div`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.divideOrderList};
`;

const OrderMenuItems = styled.ul`
  width: 100%;
  padding: 3% 0;
`;

const OrderMenuItem = styled.li`
  width: 100%;
  height: 63px;
  line-height: 60px;
  font-size: 32px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`;

const TotalPrice = styled.div`
  width: 100%;
  height: 130px;
  line-height: 130px;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme.colors.totalPrice};
    font-size: 48px;
  }
`;

export default function OrderList() {
  const defaultReceipt = {} as Receipt;
  const [receipt] = useLocalStorage('receipt', defaultReceipt);

  return (
    <OrederListWrap>
      <div className="order-list">주문목록</div>
      <OrderListLine />
      <OrderMenuItems>
        {
          receipt.menu.map((menu, key) => (
            <OrderMenuItem key={`${menu.name + key + 1}`}>
              <span>
                {menu.name}
              </span>
              <span>
                {menu.price.toLocaleString()}
                원
              </span>
            </OrderMenuItem>
          ))
        }
      </OrderMenuItems>
      <OrderListLine />
      <TotalPrice>
        총 가격
        <span>
          {receipt.totalPrice.toLocaleString()}
          원
        </span>
      </TotalPrice>
      <OrderListLine />
    </OrederListWrap>
  );
}
