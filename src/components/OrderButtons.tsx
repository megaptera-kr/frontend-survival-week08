import styled from 'styled-components';

import { useNavigate } from 'react-router';

import OrderButton from './OrderButton';

const OrderButtonsWrapStyle = styled.div`
  width: 100%;
  margin: 15.2rem auto 0;
`;

export default function OrderButtons() {
  const navigate = useNavigate();
  const handleOnClickLink = () => {
    navigate('/order');
  };
  return (
    <OrderButtonsWrapStyle>
      <OrderButton
        text="매장 주문"
        src="fastfood.png"
        onClick={handleOnClickLink}
      />
      <OrderButton text="전체 포장" src="bag.png" onClick={handleOnClickLink} />
    </OrderButtonsWrapStyle>
  );
}
