import _ from 'lodash';

import styled from 'styled-components';

import Receipt from '../../types/Receipt';

import OrderMenuItem from './OrderMenuItem';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  padding-block: 4rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.menuLine};
  font-family: "Pretendard";
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 5.8rem;
  letter-spacing: -0.03em;
  text-align: left;
  color: ${(props) => props.theme.colors.message};
`;

const StyledList = styled.ul``;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 3.4rem;
  border-block: 1px solid ${(props) => props.theme.colors.menuLine};

  span:first-of-type {
    font-family: "Pretendard";
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3.8rem;
    letter-spacing: -0.03em;
    text-align: left;
    color: ${(props) => props.theme.colors.message};
  }

  span:last-of-type {
    font-family: "Pretendard";
    font-size: 48px;
    font-weight: 700;
    line-height: 57px;
    letter-spacing: -0.03em;
    text-align: right;
    color: rgba(255, 132, 0, 1);
    margin-bottom: 10em;
  }
`;

type OrderMenuProps = {
  order: Receipt;
};
export default function OrderMenu({ order }: OrderMenuProps) {
  return (
    <StyledContainer>
      {!_.isEmpty(order) && (
        <>
          <StyledTitle>주문목록</StyledTitle>
          <StyledList>
            {order.menu?.length
              && order.menu.map((food) => (
                <OrderMenuItem key={food.id} food={food} />
              ))}
          </StyledList>
          <StyledWrapper>
            <span>총가격:</span>
            <span>{order.totalPrice.toLocaleString()}</span>
          </StyledWrapper>
        </>
      )}
    </StyledContainer>
  );
}
