import _ from 'lodash';

import styled from 'styled-components';
import Order from '../types/Order';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   img {
     width: 12rem;
     height: 12rem;
     margin-bottom: 3.2rem;
   }
   h2 {
     font-size: 8rem;
     font-weight: 700;
     text-align: center;
     margin-bottom: 3.2rem;
   }
   p {
     text-align: center;
     font-size: 4.8rem;
     color: #6a6a6a;
     margin-bottom: 8rem;
   }
 `;

 type MessageProps = {
   order: Order;
 }

export default function Message({ order }: MessageProps) {
  return (
    <Container>
      <img src="/images/complete.png" alt="complete" />
      {!_.isEmpty(order) ? (
        <div>
          <h2>
            주문이
            <br />
            완료되었습니다!
          </h2>
          <p>
            주문번호
            {' '}
            {order.id}
          </p>
        </div>
      ) : (
        <h2>주문을 진행해주세요!</h2>
      )}
    </Container>
  );
}
