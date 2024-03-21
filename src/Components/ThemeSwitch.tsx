/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import { useState } from 'react';

import styled, { css } from 'styled-components';

type ThemeButtonProps = {
  active?: boolean;
};

const ThemeButton = styled.button<ThemeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 6.4rem;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: 30px;

  span {
    display: block;
    width: 9.8rem;
    height: 5rem;
    line-height: 5rem;
    font-size: 2rem;
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
    props.active &&
    css`
      span:first-of-type {
        background-color: transparent;
        color: #fff;
      }
      span:last-of-type {
        background-color: ${props.theme.colors.basicPrimary};
        color: ${props.theme.colors.textPrimary};
      }
    `}
`;

function ThemeSwitch() {
  const [active, setActive] = useState(false);
  const handleClickActive = () => {
    setActive(!active);
  };
  return (
    <ThemeButton active={active} onClick={handleClickActive}>
      <span>밝게</span>
      <span>어둡게</span>
    </ThemeButton>
  );
}

export default ThemeSwitch;
