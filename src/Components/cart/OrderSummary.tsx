import styled from 'styled-components';
import Food from '../../types/Food';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const StyleBaseText = styled.h2`
  display: flex;
  align-items: center;
  font-family: "Pretendard";
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 3.8rem;
  letter-spacing: -0.03em;
  text-align: left;
  color: ${(props) => props.theme.colors.text};
`;

const StyledTitle = styled(StyleBaseText)`
  gap: 6px;

  img {
    width: 4rem;
    height: 4rem;
  }
  span {
    font-size: 0.75em;
    margin-left: 0.5em;
    padding: 0.2em 1em;
    border-radius: 1em;
    background-color: rgb(255, 132, 0);
    color: rgb(255, 255, 255);
  }
`;

const StyledSum = styled(StyleBaseText)`
  span {
    color:rgba(255, 132, 0, 1);
  }
`;

type OrderSummary = {
  selectedMenu: Food[];
};

export default function OrderSummary({ selectedMenu }: OrderSummary) {
  const sum = selectedMenu.reduce((acc: number, food) => acc + food.price, 0);
  const menuCount = selectedMenu.length;
  return (
    <StyledContainer>
      <StyledTitle>
        <img src="./images/shopping-cart.png" alt="" />
        주문내역
        <span>
          {menuCount}
          개
        </span>
      </StyledTitle>
      <StyledSum>
        총 결제 예상금액
        <span>
          {sum.toLocaleString()}
          원
        </span>
      </StyledSum>
    </StyledContainer>
  );
}
