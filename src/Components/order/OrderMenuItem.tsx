import styled from 'styled-components';

import Food from '../../types/Food';

const StyledList = styled.li`
  display: flex;
  justify-content: space-between;
  padding-block: 2rem;
  color: ${(props) => props.theme.colors.message};
`;

const StyledSpan = styled.span`
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: -0.03em;
  text-align: left;
`;

type OrderMenuItemProps = {
  food: Food;
};
export default function OrderMenuItem({ food }: OrderMenuItemProps) {
  return (
    <StyledList key={food.id}>
      <StyledSpan>{food.name}</StyledSpan>
      <StyledSpan>
        {food.price.toLocaleString()}
        원
      </StyledSpan>
    </StyledList>
  );
}
