import styled, { css } from 'styled-components';

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderHistory = styled.div`
  ${({ theme }) => css`
    ${theme.typo.semibold16};
    display: flex;
    align-items: center;
    column-gap: 3px;
    color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
    transition: all 250ms ease-in-out;

    & > img {
      width: 20px;
      height: 20px;
      margin-left: 2px;
    }
  `}
`;

export const ExpectedAmount = styled.div`
  ${({ theme }) => css`
    ${theme.typo.bold16};
    color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
    transition: all 250ms ease-in-out;

    & > strong {
      color: ${theme.colors.brand};
    }
  `}
`;
