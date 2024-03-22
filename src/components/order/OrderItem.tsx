import styled from 'styled-components';
import MenuItemModel from '../../models/MenuItemModel';

const Wrapper = styled.div`
  font-family: pretendard-regular;
  color: black;
  font-size: 3.2rem;
  display: flex;
  align-items: center;
`;

const DotLine = styled.div`
  border-top: dotted 2px black;
  color: black;
  flex-grow: 1;
  margin: 12px 24px;
`;

type OrderItemProps = {
  orderItem: MenuItemModel;
};

export default function OrderItem({ orderItem }: OrderItemProps) {
  const { name, quantity } = orderItem;

  return (
    <Wrapper>
      <div>
        {name} {orderItem.priceFormat()}원({quantity}개)
      </div>
      <DotLine />
      <div>{orderItem.totalPriceFormat()}원</div>
    </Wrapper>
  );
}
