import styled, { css } from 'styled-components';

import { useDarkMode } from 'usehooks-ts';
import { ButtonProps } from '../../types/button';

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`;

const HeaderTitle = styled.div`
  display: flex;

  & img {
    display: block;
    width: 68px;
    height: 60px;
  }

  & h1 {
    padding-left: 0.3em;
    line-height: 150%;
    font-size: 4.8rem;
    font-weight: bold;
    color: #fff;
  }
`;

const HeaderButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

type HeaderThemeButtonProps = {
  isDarkMode: boolean;
} & ButtonProps;

const HeaderThemeButton = styled.button.attrs<HeaderThemeButtonProps>((props) => ({
  type: props.type || 'button',
}))<HeaderThemeButtonProps>`
  padding: 1em 0.3em;
  border: 0px;
  border-radius: 2em;
  background-color: ${(props) => (props.isDarkMode ? '#3A3A3A' : '#FFA454')};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  & span {
    transition: all 0.1s ease;
  }

  & span:first-of-type {
    padding: 0.7em 1.5em;
    border-radius: 3em;
    color: #000;
    background-color: #fff;
    

    ${(props) => (props.isDarkMode && css`
      color: #fff;
      background-color: transparent;
    `)};
  }

  & span:last-of-type {
    padding: 0.7em 1.5em;
    
    ${(props) => (props.isDarkMode && css`
      border-radius: 3em;
      color: ${props.theme.colors.text};
      background-color: ${props.theme.colors.background};
    `)};
  }
`;

export default function Header() {
  const { isDarkMode, toggle } = useDarkMode(false);

  return (
    <HeaderWrap>
      <HeaderTitle>
        <img src="/images/logo.png" alt="logo" />
        <h1>메가테라 푸드코트 키오스크</h1>
      </HeaderTitle>
      <HeaderButtonWrap>
        <HeaderThemeButton isDarkMode={isDarkMode} onClick={toggle}>
          <span>밝게</span>
          <span>어둡게</span>
        </HeaderThemeButton>
      </HeaderButtonWrap>
    </HeaderWrap>
  );
}
