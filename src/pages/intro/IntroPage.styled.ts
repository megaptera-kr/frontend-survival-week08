import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    ${theme.size.container};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: inherit;

    & > h2 {
      ${theme.typo.bold40};
      margin-bottom: 76px;
      color: ${theme.colors.white};
      text-align: center;
    }

    @media ${theme.breakPoint.desktop} {
      & > h2 {
        ${theme.typo.bold55};
        margin-bottom: 76px;
        padding: 0 75px;
        color: ${theme.colors.white};
      }
    }
  `}
`;

export const OrderLinks = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    column-gap: 20px;

    @media ${theme.breakPoint.desktop} {
      min-width: 50%;
      margin: 0 auto;
    }
  `};
`;
