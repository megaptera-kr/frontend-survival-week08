import styled from 'styled-components';
import { ReceiptProps } from '../types/restaurants';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;  
`;

const H2 = styled.div`
    margin: 32px 0;
    padding: 0 40px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: -0.03em;
`;

const Line = styled.div`
    height:0;
    border:1px solid #F4F4F4;
`;

const Item = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 0 40px;
    margin: 20px 0 30px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.03em;
    color: #000000;

    span:first-child {
        margin-top:20px;
    }
`;

const Total = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 40px 0;
    padding: 0 40px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.03em;
    color: #000000;

    .price {
      font-weight: 700;
      font-size: 48px;
      color: #FF8400;
    }
`;

export default function OrderedList({ receipt }:{receipt:ReceiptProps}) {
  const { menu, totalPrice } = receipt;

  return (
    <Container>
      <H2>
        주문 목록
      </H2>

      <Line />

      {menu.map((item) => (
        <Item key={item.id}>
          <span>{item.name}</span>
          <span>
            {item.price.toLocaleString()}
            원
          </span>
        </Item>
      ))}

      <Line />

      <Total>
        <span>총 가격</span>
        <span className="price">
          {totalPrice.toLocaleString()}
          원
        </span>
      </Total>

    </Container>

  );
}
