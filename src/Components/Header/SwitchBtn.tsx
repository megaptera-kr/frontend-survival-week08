import styled from 'styled-components';

const StyledThemeToggle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20.8rem;
  height: 6.4rem;
  border-radius: 3rem;
  border: none;
  background: ${(props) => props.theme.colors.toggleBg};
  color: ${(props) => props.theme.colors.text};
`;

type ToggleProps = {
    isToggle?: boolean;
  };

const StyledSpan = styled.span<ToggleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.873rem;
  height: 5.12rem;
  border-radius: 3rem;
  box-shadow: ${(props) => (props.isToggle ? '0px 2px 10px 0px #0000001f' : 'none')};
  background: ${(props) => (props.isToggle ? props.theme.colors.toggleOn : '#rgba(0,0,0,0)')};
  transition: all 0.3s ease;
  font-family: 'Pretendard';
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
  letter-spacing: -0.03em;
  text-align: center;
  cursor: pointer;
`;
type SwitchProps = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}
export default function SwitchBtn({ isDarkMode, toggleDarkMode }:SwitchProps) {
  return (
    <StyledThemeToggle type="button" onClick={toggleDarkMode}>
      <StyledSpan isToggle={!isDarkMode}>밝게</StyledSpan>
      <StyledSpan isToggle={isDarkMode}>어둡게</StyledSpan>
    </StyledThemeToggle>
  );
}
