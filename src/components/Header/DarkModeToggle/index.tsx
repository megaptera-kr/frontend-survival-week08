import styled, { css } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

type ButtonProps = {
  type?:'button'|'submit'|'reset'
  active:boolean
}

const StyledToggle = styled.button.attrs<ButtonProps>((props) => (
  { type: props.type ?? 'button' }
))<ButtonProps>`
  display:flex;
  justify-content: center;
  align-items: center;
  width:208px;
  height: 64px;
  padding:6px;
  border-radius:30px;
  background-color: ${(props) => props.theme.colors.toggle_bg};

  span {
    width: 98px;
    height: 51px;
    display:flex;
    align-items:center;
    text-align: center;
    justify-content:center;
    border-radius: 30px;
    color:${(props) => props.theme.colors.text};
    font-size:${(props) => props.theme.fontSize.xs};

    :first-child {
      ${(props) => !props.active && css`
      background-color:${props.theme.colors.toggle_active}
    `}
    }

    :last-child {
      ${(props) => props.active && css`
      background-color:${props.theme.colors.toggle_active}
    `}
    }
  }

`;

function DarkModeToggle() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <StyledToggle onClick={toggle} active={isDarkMode}>
      <span>밝게</span>
      <span>어둡게</span>
    </StyledToggle>
  );
}

export default DarkModeToggle;
