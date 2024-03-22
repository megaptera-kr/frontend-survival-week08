import styled from 'styled-components';

import HorizontalLine from '../common/HorizontalLine';

import ReceiptModel from '../../models/ReceiptModel';
import { WordH2 } from '../common/Word';
import OrderItems from './OrderItems';

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
