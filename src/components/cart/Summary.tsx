/* eslint-disable react/jsx-one-expression-per-line */
import styled from 'styled-components';
import Food from '../../types/Food';

import calculateTotalPrice from '../../utils/calculateTotalPrice';

const SummaryWrapStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  dl {
    display: flex;
    align-items: center;
    dt {
      font-size: 3.2rem;
      font-weight: 600;
      margin: 0 1rem;
      color: ${(props) => props.theme.colors.textPrimary};
      img {
        max-width: 4rem;
        vertical-align: middle;
      }
    }
    dd {
      display: inline-block;
      font-size: 2.4rem;
      font-weight: 500;
      background-color: #ff8400;
      color: #fff;
      border-radius: 3rem;
      padding: 0.6rem 1.6rem;
    }
  }

  p {
    font-size: 3.2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textPrimary};
    span {
      color: #ff8400;
    }
  }
`;

type SummaryProps = {
  menu: Food[];
};

function Summary({ menu }: SummaryProps) {
  const totalPrice = calculateTotalPrice(menu);
  return (
    <SummaryWrapStyle>
      <dl>
        <dt>
          <img src="/images/shopping-cart.png" alt="장바구니 아이콘 이미지" />
          주문내역
        </dt>
        <dd>{`${menu.length}개`}</dd>
      </dl>
      <p>
        {'총 결제 예상금액 '}
        <span>{totalPrice.toLocaleString()}</span>원
      </p>
    </SummaryWrapStyle>
  );
}

export default Summary;
