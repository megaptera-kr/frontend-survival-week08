import styled, { css } from 'styled-components';

export const Badge = styled.div`
  ${({ theme }) => css`
    ${theme.typo.medium12};
    display: flex;
    align-items: center;
    height: 20px;
    border-radius: 15px;
    padding: 0 8px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.brand};
  `}
`;
