import styled, { css } from 'styled-components';

export const OrderCompleteMessage = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
      width: 60px;
      height: 60px;
      margin-bottom: 16px;
    }

    & > h2 {
      ${theme.typo.bold40};
      margin-bottom: 8px;
      color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
      text-align: center;
      transition: color 250ms ease-in-out;
    }

    & > strong {
      ${theme.typo.medium20};
      color: ${theme.colors.tertiary};
      transition: color 250ms ease-in-out;
    }
  `}
`;
