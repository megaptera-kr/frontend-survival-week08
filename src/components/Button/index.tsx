import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../styles/defaultTheme';

export type ButtonProps = {
  children: ReactNode
  onClick: () => void
  className?: string
  width?: string
  height?: string
  bgColor: keyof Theme['colors']
}

const StyledButton = styled.button<Pick<ButtonProps, 'width' | 'height' | 'bgColor'>>`
  ${({ width, height, bgColor }) => css`
    width: ${width};
    height: ${height};

    background: ${bgColor};
    border-radius: 40px;
    cursor: pointer;
  `}
`;

export function Button({
  className, onClick, children, width = '100px', height = '100px', bgColor = 'gray100',
}: ButtonProps) {
  return (
    <StyledButton
      type="button"
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      bgColor={bgColor}
    >
      {children}
    </StyledButton>
  );
}
