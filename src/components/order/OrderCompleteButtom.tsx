import styled from 'styled-components';

import Text from '../common/Text';

const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px gray;
`;

const TotalPriceWord = styled(Text)`
  color: ${(props) => props.theme.colors.bodyPrimary};
  font-weight: bold;
  font-size: 3.2rem;
  text-align: start;
  margin: 40px 0;
  padding-left: 20px;
`;

const TotalPrice = styled(Text)`
  color: ${(props) => props.theme.colors.bodyHighlight};
  font-weight: bold;
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
      <TotalPriceWord>총 가격</TotalPriceWord>
      <TotalPrice>{`${formattedTotalPrice}원`}</TotalPrice>
    </TotalInfo>
  );
}
