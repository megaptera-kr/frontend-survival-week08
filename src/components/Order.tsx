import _ from 'lodash';

import styled from 'styled-components';
import useFetchOrder from '../hooks/useFetchOrder';
import Message from './Message';
import OrderMenu from './OrderMenu';

const Container = styled.div`
   background: ${(props) => props.theme.colors.background};
   border-top-right-radius: ${(props) => props.theme.sizes.contentBorderRadius};
   padding-block: 18rem;
   padding-inline: ${(props) => props.theme.sizes.contentPadding};
   button {
     width: 100%;
     height: 10rem;
     border-radius: 8rem;
     border: 0;
     color: ${(props) => props.theme.colors.secondary};
     background: #FF8400;
     font-size: 2.8rem;
     font-weight: 500;
     margin-top: 31rem;
   }
   button:hover {
     background: #f79800;
   }
 `;

type OrderProps = {
  orderId: string;
  onClick: () => void;
}

export default function Order({
  orderId, onClick,
}: OrderProps) {
  const order = useFetchOrder({ orderId });

  return (
    <Container>
      <Message order={order} />
      {!_.isEmpty(order) ? (
        <OrderMenu order={order} />
      ) : null}
      <button type="button" onClick={onClick}>
        메인 화면으로 돌아가기
      </button>
    </Container>
  );
}
