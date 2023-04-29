import styled, { css } from 'styled-components';

export const Toggle = styled.button`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 104px;
    height: 32px;
    border-radius: ${theme.radius.sm};
    padding: 0 5px;
    background-color: ${theme.colors.tint};

    &::before {
      content: "";
      position: absolute;
      width: 45%;
      height: 80%;
      border-radius: ${theme.radius.sm};
      background-color: ${theme.type === 'light' ? theme.colors.white : theme.colors.primary};
      box-shadow: ${theme.type === 'light' && theme.shadow.md};
      transform: translateX(0);
      transition: all 250ms ease-in-out;
    }

    &[aria-checked="true"]::before {
      transform: translateX(100%);
    }

    & > span {
      ${theme.typo.medium10};
      width: 100%;
      transition: color 250ms ease-in-out;
      z-index: 2;

      &:first-of-type {
        color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
      }
      &:last-of-type {
        color: ${theme.colors.white};
      }
    }

    &[aria-checked="true"] > span {
      &:first-of-type {
        color: ${theme.colors.white};
      }
      &:last-of-type {
        color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
      }
    }
  `}
`;

export default Toggle;
