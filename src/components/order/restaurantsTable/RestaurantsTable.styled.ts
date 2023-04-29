import styled, { css } from 'styled-components';

export const RestaurantsTable = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-height: calc(100vh - ${theme.size.header.height} - ${theme.size.filter.height} - ${theme.size.cart.height});
    border-top-right-radius: ${theme.radius.md};
    background-color: ${theme.type === 'light' ? theme.colors.white : theme.colors.tint};
    transition: background-color 250ms ease-in-out;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${theme.size.cart.height};
      background-color: ${theme.type === 'light' ? theme.colors.secondary : theme.colors.tint};
      transform: translateY(100%);
      transition: background-color 250ms ease-in-out;
    }

    @media ${theme.breakPoint.desktop} {
      border-top-right-radius: ${theme.radius.xl};
    }
  `}
`;

export const A11yTitle = styled.h2`
  ${({ theme }) => css`
    ${theme.a11y.visuallyHidden};
  `}
`;

export const NoSearch = styled.p`
  ${({ theme }) => css`
    ${theme.typo.semibold24};
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${theme.colors.brand};
    transition: color 250ms ease-in-out;
    transform: translate(-50%, 50%);
  `}
`;
