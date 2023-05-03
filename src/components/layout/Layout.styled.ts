import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    position: relative;
    width: 100vw;
    min-height: calc(100vh - ${theme.size.header.height});
  `}
`;

export default Main;
