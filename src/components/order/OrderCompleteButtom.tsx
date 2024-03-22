import styled from 'styled-components';

import { WordH2 } from '../common/Word';

const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px gray;
`;

const TotalPriceWord = styled(WordH2)`
  font-family: 'normal';
  font-weight: 700;
  color: black;
  font-size: 2.8rem;
  text-align: start;
  margin: 40px 0;
  padding-left: 20px;
`;

const TotalPrice = styled(WordH2)`
  font-family: 'normal';
  font-weight: 700;
  color: #ff8400;
  font-size: 4.8rem;
  text-align: start;
  margin: 40px 0;
  padding-left: 20px;
`;

type OrderCompleteButtomProps = {
  formattedTotalPrice: string;
};

export default function OrderCompleteButtom({
  formattedTotalPrice,
}: OrderCompleteButtomProps) {
  return (
    <TotalInfo>
      <TotalPriceWord text='총 가격' />
      <TotalPrice text={`${formattedTotalPrice}원`} />
    </TotalInfo>
  );
}
