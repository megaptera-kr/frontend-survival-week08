import styled from 'styled-components';
import StyledButton from '../../Button';

type CartButtonProps = {
  goToIntro:() => void
  goToResult:() => void
}

const StyledCartButtonBox = styled.div`
  height:100px;
  display: flex;
  column-gap:10px;
`;

const StyledCancelButton = styled(StyledButton)`
  flex:1;
  border-radius: 50px;
  color:${(props) => props.theme.colors.title};
  font-size:${(props) => props.theme.fontSize.md};
  background-color: ${(props) => props.theme.colors.cancel_btn_bg};

  :hover {
  background-color: ${(props) => props.theme.colors.cancel_btn_bg_hover};
}
`;

const StyledOrderButton = styled(StyledButton)`
  flex:1;
  border-radius: 50px;
  color:${(props) => props.theme.colors.title};
  font-size:${(props) => props.theme.fontSize.md};
  background-color: ${(props) => props.theme.colors.primary};

:hover {
  background-color: ${(props) => props.theme.colors.order_btn_hover};
}
`;

function CartButton({ goToIntro, goToResult }:CartButtonProps) {
  return (
    <StyledCartButtonBox>
      <StyledCancelButton onClick={goToIntro}>취소</StyledCancelButton>
      <StyledOrderButton onClick={goToResult}>주문하기</StyledOrderButton>
    </StyledCartButtonBox>
  );
}

export default CartButton;
