import styled from 'styled-components';
import useFetchOrder from '../../../hooks/useFetchOrder';
import convertKRW from '../../../utils/convertKRW';

type ReceiptListProps = {
  orderId:string
}

const StyledReceiptList = styled.div`
  margin-top:80px;
  padding-top: 34px;
  padding-bottom:310px;
  border-top:${(props) => `2px solid ${props.theme.colors.divider}`};
`;

const StyledTitle = styled.h3`
  padding-left:40px;
  padding-bottom: 32px;
  color:${(props) => props.theme.colors.text};
  font-size:${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const StyledList = styled.ul`
  display:flex;
  row-gap:24px;
  flex-direction:column;
  padding-block:32px;
  color:${(props) => props.theme.colors.text};
  border-block: ${(props) => `2px solid ${props.theme.colors.divider_secondary}`};
`;

const StyledListItem = styled.li`
  display:flex;
  padding-inline: 40px;
  justify-content: space-between;
  font-size:${(props) => props.theme.fontSize.ml};
  font-weight:${(props) => props.theme.fontWeight.regular};
`;

const StyledTotalPriceBox = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding-block:32px;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.divider_secondary}`};
`;

const StyledTotalPriceLabel = styled.span`
  padding-left:40px;
  color:${(props) => props.theme.colors.text};
  font-size:${(props) => props.theme.fontSize.ml};
`;

const StyledTotalPrice = styled.span`
  padding-right:40px;
  color:${(props) => props.theme.colors.primary};
  font-size:${(props) => props.theme.fontSize.xl};
`;

function ReceiptList({ orderId }:ReceiptListProps) {
  const order = useFetchOrder(orderId);

  if (!order) {
    return null;
  }

  return (
    <StyledReceiptList>
      <StyledTitle>주문목록</StyledTitle>

      <StyledList>
        {order.menu.map((food) => (
          <StyledListItem key={food.id}>
            <span>{food.name}</span>
            <span>{`${convertKRW(food.price)}원`}</span>
          </StyledListItem>
        ))}
      </StyledList>

      <StyledTotalPriceBox>
        <StyledTotalPriceLabel>총 가격</StyledTotalPriceLabel>
        <StyledTotalPrice>{`${convertKRW(order.totalPrice)}원`}</StyledTotalPrice>
      </StyledTotalPriceBox>
    </StyledReceiptList>
  );
}

export default ReceiptList;
