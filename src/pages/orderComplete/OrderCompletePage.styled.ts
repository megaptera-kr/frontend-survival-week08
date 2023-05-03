import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    ${theme.size.container};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - ${theme.size.header.height});
    border-top-right-radius: ${theme.radius.md};
    padding: 90px 0 25px;
    background-color: ${theme.type === 'light' ? theme.colors.white : theme.colors.tint};
    transition: background-color 250ms ease-in-out;

    @media ${theme.breakPoint.desktop} {
      border-top-right-radius: ${theme.radius.xl};
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  margin-bottom: 20px;
  padding: 0 25px;
`;

export const Bottom = styled.div`
  position: sticky;
  bottom: 0;
  padding: 0 25px 25px;
  backdrop-filter: blur(10px);
`;
