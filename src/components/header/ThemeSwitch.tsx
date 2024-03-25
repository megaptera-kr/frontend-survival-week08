/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import { useContext } from 'react';

import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeProvider';

type ThemeButtonStyleProps = {
  active: string;
};

const ThemeButtonStyle = styled.button<ThemeButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.8rem;
  height: 5.4rem;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: 30px;
  cursor: pointer;

  span {
    display: block;
    width: 9.8rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.6rem;
    border-radius: 30px;
    background-color: transparent;
    color: #fff;
    text-align: center;
  }

  span:first-of-type {
    background-color: ${(props) => props.theme.colors.basicPrimary};
    color: ${(props) => props.theme.colors.textPrimary};
  }

  ${(props) =>
    props.active === 'dark' &&
    css`
      span:first-of-type {
        background-color: transparent;
        color: ${props.theme.colors.textPrimary};
      }
      span:last-of-type {
        background-color: ${props.theme.colors.basicPrimary};
        color: ${props.theme.colors.textPrimary};
      }
    `}
`;

function ThemeSwitch() {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  return (
    <ThemeButtonStyle active={theme} onClick={onChangeTheme}>
      <span>밝게</span>
      <span>어둡게</span>
    </ThemeButtonStyle>
  );
}

export default ThemeSwitch;
