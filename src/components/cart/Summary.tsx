import styled from 'styled-components';

import calcTotalPrice from '../../utils/calcTotalPrice';

import { Menu } from '../../types/restaurants';

const SummaryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SummaryLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.2rem;

  & img {
    display: block;
    width: 1.2em;
    margin-right: 0.1em;
  }

  & span:last-of-type {
    padding: 0.5em 1em;
    margin-left: 0.5em;
    border-radius: 2em;
    font-size: 0.75em;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SummaryRight = styled.div`
  font-size: 3.2rem;

  & strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

type SummaryProps = {
  cartMenu: Menu[]
}

export default function Summary({ cartMenu }: SummaryProps) {
  const totalPrice = calcTotalPrice(cartMenu);

  return (
    <SummaryWrap>
      <SummaryLeft>
        <img src="/images/shopping-cart.png" alt="" />
        <span>주문내역</span>
        <span>{`${cartMenu.length}개`}</span>
      </SummaryLeft>
      <SummaryRight>
        총 결제 예상금액
        <strong>{` ${totalPrice.toLocaleString()}`}</strong>
        원
      </SummaryRight>
    </SummaryWrap>
  );
}
