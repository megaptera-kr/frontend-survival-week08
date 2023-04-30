import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../styles/defaultTheme';

export type ButtonProps = {
  children: ReactNode
  name?: string
  onClick: () => void
  className?: string
  width?: string
  height?: string
  bgColor?: keyof Theme['colors']
  radius?: string
  color?: keyof Theme['colors']
  fontSize?: string
}

const StyledButton = styled.button<Pick<ButtonProps, 'width' | 'height' | 'bgColor' | 'radius' | 'color' | 'fontSize'>>`
  ${({
    theme, width, height, bgColor = 'gray100', radius, color = 'black', fontSize = '1rem',
  }) => css`
    width: ${width};
    height: ${height};

    border: none;
    background: ${theme.colors[bgColor]};
    color: ${theme.colors[color]};
    border-radius: ${radius ?? '40px'};
    font-size: ${fontSize};
    cursor: pointer;
  `}
`;

export function Button({
  className, name, onClick, radius, children, width = '100px', height = '100px', bgColor, color, fontSize,
}: ButtonProps) {
  return (
    <StyledButton
      type="button"
      name={name}
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      radius={radius}
      fontSize={fontSize}
    >
      {children}
    </StyledButton>
  );
}
