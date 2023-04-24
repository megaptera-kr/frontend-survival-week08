import styled from 'styled-components';
import cart from '../../static/images/shopping-cart.png';
import Menu from '../types/Menu';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
  align-items: center;

  img {
    display: block;
    margin-right: .1em;
    width: 1.2em;
  }

  span:last-of-type {
    font-size: .70em;
    margin-left: .5em;
    padding: .3em 1em;
    border-radius: 1em;
    background-color: #FF8400;
    color: #FFFFFF;
  }
`;

const TotalPrice = styled.div`
  flex-grow:1;
  text-align: right;
  font-size: 2.5rem;
  strong {
    color: #FF8400;
  }
`;

type OrderTotalAmountProps = {
  selectedMenu: Menu[];
}

export default function OrderTotalAmount({ selectedMenu }: OrderTotalAmountProps) {
  const totalPrice = calculateTotalPrice(selectedMenu);

  const count = selectedMenu.length;

  return (
    <Container>
      <img src={cart} alt="" />
      <span>
        주문내역
      </span>
      <span>
        {count}
        개
      </span>
      <TotalPrice>
        총 결제 예상금액
        {' '}
        <strong>{totalPrice.toLocaleString()}</strong>
        원
      </TotalPrice>
    </Container>
  );
}
