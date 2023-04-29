import styled, { css } from 'styled-components';

export const CartItem = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: ${theme.radius.xs};
    padding: 10px 15px;
    background-color: ${theme.type === 'light' ? theme.colors.white : theme.colors.tint};
    aspect-ratio: 1.9872;
    transition: all 250ms ease-in-out;
    user-select: none;
  `}
`;

export const RemoveBtn = styled.button.attrs(() => ({ type: 'button' }))`
    ${({ theme }) => css`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 14px;
    height: 14px;

    & > span {
      ${theme.a11y.visuallyHidden};
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0:
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
      transition: background-color 250ms ease-in-out;
    }

    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  `}
`;

export const MetaInfo = styled.dl`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    & > div {
      ${theme.typo.medium14};
      color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
      transition: all 250ms ease-in-out;

      & > dt {
        ${theme.a11y.visuallyHidden};
      }

      &:last-of-type {
        color: ${theme.colors.brand};
      }
    }
  `}
`;
