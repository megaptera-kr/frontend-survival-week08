import React, {
  Dispatch, SetStateAction, useContext,
} from 'react';
import styled from 'styled-components';
import { useToggle } from 'usehooks-ts';
import { StyleContext } from '../../context/StyleProvider';

export type SwitchProps = {
  labels?: [string, string]
  defaultChecked?: boolean
  checked?: boolean
  setChecked?: Dispatch<SetStateAction<boolean>>
  onClick?: () => void
}

const StyledSwitchContainer = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.8rem;
  height: 6.4rem;
  border-radius: 3rem;
  background: ${({ isDarkMode, theme }) => (isDarkMode ? theme.colors.darkgray100 : theme.colors.primary)};
`;

const StyledSwitchButton = styled.button<{ isChecked: boolean, isDarkMode: boolean }>`
  padding: 0;
  width: 9.9rem;
  height: 5.1rem;
  cursor: pointer;
  border: none;
  border-radius: 30px;
  background: ${({ isChecked, isDarkMode, theme }) => {
    if (isChecked) {
      return isDarkMode ? theme.colors.darkgray200 : theme.colors.white;
    }

    return isDarkMode ? theme.colors.darkgray100 : theme.colors.primary;
  }};
  color: ${({ isChecked, isDarkMode, theme }) => {
    if (isChecked) {
      return isDarkMode ? theme.colors.white : theme.colors.black;
    }

    return theme.colors.white;
  }};
`;

export function Switch({
  labels = ['', ''],
  defaultChecked = true,
  checked: controlledChecked,
  setChecked: setControlledChecked,
  onClick,
}: SwitchProps) {
  const { isDarkMode } = useContext(StyleContext);
  const isControlled = typeof setControlledChecked !== 'undefined';
  const [unControlledChecked, toggleUnControlledChecked] = useToggle(defaultChecked);
  const isChecked = controlledChecked ?? unControlledChecked;

  const handleClick = () => {
    if (isControlled) {
      setControlledChecked((prev) => !prev);
    } else {
      toggleUnControlledChecked();
    }

    onClick?.();
  };

  return (
    <StyledSwitchContainer isDarkMode={isDarkMode}>
      {labels?.map((label, index) => (
        <StyledSwitchButton
          key={label}
          type="button"
          onClick={handleClick}
          isChecked={!index ? isChecked : !isChecked}
          isDarkMode={isDarkMode}
        >
          {label}
        </StyledSwitchButton>
      ))}
    </StyledSwitchContainer>
  );
}
