import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 3em;
`;

const StyledBaseBtn = styled.button`
  cursor: pointer;
  width: 48.5rem;
  height: 10rem;
  border-radius: 5rem;
  font-family: "Pretendard";
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 3.4rem;
  letter-spacing: -0.03em;
  text-align: center;
  color: white;
`;
const StyledCancleButton = styled(StyledBaseBtn)`
  background: rgba(68, 39, 43, 1);
`;
const StyledOrderButton = styled(StyledBaseBtn)`
  background: rgba(255, 132, 0, 1);
`;

type OrderBtnProps = {
  clearMenu: () => void;
  orderMenu: () => void;
};
export default function OrderBtn({ clearMenu, orderMenu }: OrderBtnProps) {
  return (
    <StyledContainer>
      <StyledCancleButton type="button" onClick={clearMenu}>
        취소
      </StyledCancleButton>
      <StyledOrderButton type="button" onClick={orderMenu}>
        주문하기
      </StyledOrderButton>
    </StyledContainer>
  );
}
