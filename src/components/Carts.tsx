import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Menu } from '../types/restaurants';
import CartItems from './CartItems';

interface CartsProps {
    carts: Menu[],
    totalPrice : number,
    cancelOrder: (idx: number) => void,
    onClickOrder:()=>void,
    setCarts: Dispatch<SetStateAction<Menu[]>>
}

const Container = styled.div`
  padding: 40px;
  min-height: 300px;
  background-color:#F4F4F4;
`;

const Title = styled.div`
  display:flex;
  margin-bottom:40px;

  span {
    margin-left:15px;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: -0.03em;
  }

  .totalPrice {
    margin-left:auto;
  }

  .orange {
    color:orange;
    font-weight:700;
  }
`;

const Blank = styled.p`
  margin-top:100px;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.03em;
  text-align:center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:100px;

  button{
      display:flex;
      justify-content:center;
      align-items:center;
      width: 485px;
      height: 100px;
      background: #170A0C;
      border-radius: 50px;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 34px;
      text-align: center;
      letter-spacing: -0.03em;
      color: #FFFFFF;
      cursor:pointer;
  }

  .order {
    background-color: #FF8400;
  }
`;

export default function Carts({
  carts, totalPrice, cancelOrder, onClickOrder, setCarts,
}:CartsProps) {
  return (
    <Container>
      <Title>
        <img src="images/shopping-cart.png" width={33} height={33} alt="cart" />
        <span>주문내역</span>
        <span className="totalPrice">
          총 결제 예상금액
          {' '}
          <span className="orange">{totalPrice.toLocaleString()}</span>
          원
        </span>
      </Title>

      {carts.length
        ? <CartItems carts={carts} cancelOrder={cancelOrder} />
        : <Blank>카트가 비었습니다.</Blank>}

      <Buttons>
        <button type="button" onClick={() => setCarts([])}><p>취소</p></button>
        <button type="button" className="order" onClick={onClickOrder}><p>주문 하기</p></button>
      </Buttons>
    </Container>
  );
}
