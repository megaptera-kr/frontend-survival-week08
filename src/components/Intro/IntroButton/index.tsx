import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

type IntroButtonProps = {
  goToOrder:() => void
}

type ButtonProps = {
  type?:'button'|'submit'|'reset';
  isDarkMode:boolean;
}

const StyledButtonBox = styled.div`
  display:flex;
  column-gap:40px;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 200px;
  margin-bottom: 60px;
`;

const StyledButton = styled.button.attrs<ButtonProps>(
  (props) => ({ type: props.type ?? 'button' }),
)<ButtonProps>`
  width:470px;
  height:591px;
  border-radius:40px;
  font-family: inherit;
  color:${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.xl};
  background-color: ${(props) => props.theme.colors.intro_btn_bg};

  :hover {
    background-color: ${
  (props) => !props.isDarkMode && props.theme.colors.intro_btn_bg_hover};
    border: ${
  (props) => props.isDarkMode && `3px solid ${props.theme.colors.primary}`};
    };
`;

function IntroButton({ goToOrder }:IntroButtonProps) {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledButtonBox>
      <StyledButton onClick={goToOrder} isDarkMode={isDarkMode}>
        <StyledImg src="/images/fastfood.png" alt="매장 주문" />
        <p>매장 주문</p>
      </StyledButton>
      <StyledButton onClick={goToOrder} isDarkMode={isDarkMode}>
        <StyledImg src="/images/bag.png" alt="전체 포장" />
        <p>전체 포장</p>
      </StyledButton>
    </StyledButtonBox>
  );
}

export default IntroButton;
