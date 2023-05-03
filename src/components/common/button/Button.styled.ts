import styled, { css } from 'styled-components';

import type { ButtonVariant } from './Button';

type ButtonProps = {
  variant: ButtonVariant;
}

export const Button = styled.button.attrs(({ type }) => ({
  type: type ?? 'button',
}))<ButtonProps>`
  ${({ theme, variant }) => css`
    ${theme.typo.medium14};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: ${theme.radius.lg};
    color: ${theme.colors.white};
    background-color: ${variant === 'active' ? theme.colors.brand : theme.colors.brown};
    transition: background-color 250ms ease-in-out;

    @media (hover: hover) {
      &:hover {
        background-color: ${variant === 'active' ? theme.colors.shade : theme.colors.deepbrown};
      }
    }
  `}
`;
