import styled from 'styled-components';

import OrderItem from './OrderItem';

import MenuItemModel from '../../models/MenuItemModel';

const Wrapper = styled.div`
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: solid 1px gray;
  border-bottom: solid 1px gray;
`;

type OrderItems = {
  orderItems: MenuItemModel[];
};

export default function OrderItems({ orderItems }: OrderItems) {
  return (
    <Wrapper>
      {orderItems.map((item) => (
        <OrderItem key={item.id} orderItem={item} />
      ))}
    </Wrapper>
  );
}
