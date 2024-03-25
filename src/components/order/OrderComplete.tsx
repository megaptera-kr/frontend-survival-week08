import styled from 'styled-components';

import HorizontalLine from '../common/HorizontalLine';
import OrderItems from './OrderItems';

import ReceiptModel from '../../models/ReceiptModel';

const Wrapper = styled.div`
  color: black;
  padding: 20px 20px;
  align-self: start;
`;

type OrderDetailProps = {
  receipt: ReceiptModel;
};

function OrderComplete({ receipt }: OrderDetailProps) {
  const { menuItems } = receipt;

  return (
    <>
      <HorizontalLine />
      <Wrapper>
        <OrderItems orderItems={menuItems} />
      </Wrapper>
    </>
  );
}

export default OrderComplete;
