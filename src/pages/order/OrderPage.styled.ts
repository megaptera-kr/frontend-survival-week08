import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    ${theme.size.container};
    padding: 0;
  `}
`;
