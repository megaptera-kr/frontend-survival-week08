import styled from 'styled-components';

import Food from '../../types/Food';

const StyledContainer = styled.li`
  position: relative;
  height: 15.6rem;
  border-radius: 2rem;
  background: ${(props) => props.theme.colors.oderCard};
  span {
    display: block;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    border: 0px;
    background: transparent;
    cursor: pointer;
  }
`;

const StyledSpanBase = styled.span`
  font-family: "Pretendard";
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 3.3rem;
  letter-spacing: -0.03em;
  text-align: left;
`;

const StyledFoodName = styled(StyledSpanBase)`
  color: ${(props) => props.theme.colors.text};
  padding: 3rem;
`;

const StyledFoodPrice = styled(StyledSpanBase)`
  color: rgba(255, 132, 0, 1);
  padding-inline: 3rem;
`;

type CartItemProps = {
  food: Food;
  handleRemoveMenu: (index: number) => void;
  index: number;
};
export default function CartItem({
  food,
  handleRemoveMenu,
  index,
}: CartItemProps) {
  const { name, price } = food;
  return (
    <StyledContainer>
      <StyledFoodName>{name}</StyledFoodName>
      <StyledFoodPrice>
        {price.toLocaleString()}
        원
      </StyledFoodPrice>
      <button type="button" onClick={() => handleRemoveMenu(index)}>
        X
      </button>
    </StyledContainer>
  );
}
