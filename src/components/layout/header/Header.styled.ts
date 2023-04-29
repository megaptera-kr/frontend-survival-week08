import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    height: ${theme.size.header.height};
    padding: 25px 0 15px;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.size.container}
    display: flex;
    justify-content: space-between;
  `}
`;

export const Content = styled.div`
${({ theme }) => css`
  display: flex;
  align-items: center;
  column-gap: 20px;

  & > img {
    width: 28px;
    height: 24px;
  }

  & > h1 {
    ${theme.typo.bold16};
    color: ${theme.colors.white};
  }

  @media ${theme.breakPoint.desktop} {
    & > img {
      width: 34px;
      height: 30px;
    }

    & > h1 {
      ${theme.typo.bold24};
    }
  }
  `}
`;
