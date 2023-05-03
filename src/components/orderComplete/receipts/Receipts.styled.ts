import styled, { css } from 'styled-components';

export const Receipts = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.type === 'light' ? theme.colors.tertiary : theme.colors.white};
    border-bottom: 1px solid ${theme.colors.secondary};
    padding: 16px 0;
    transition: border-color 250ms ease-in-out;

    & > h3 {
      ${theme.typo.bold24};
      margin-bottom: 16px;
      padding: 0 16px;
      color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
      transition: color 250ms ease-in-out;
    }
  `}
`;

export const ReceiptInfo = styled.dl`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.secondary};
    border-bottom: 1px solid ${theme.colors.secondary};
    margin-bottom: 16px;
    padding: 16px 0;
    transition: border-color 250ms ease-in-out;

    & > div {
      ${theme.typo.regular16};
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
      transition: color 250ms ease-in-out;

      &:not(:last-of-type) {
        margin-bottom: 12px;
      }
    }
  `}
`;

export const TotalPrice = styled.dl`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;

    & > dt {
      ${theme.typo.bold16};
      color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
      transition: color 250ms ease-in-out;
    }

    & > dd {
      ${theme.typo.bold24};
      color: ${theme.colors.brand};
    }
  `}
`;
