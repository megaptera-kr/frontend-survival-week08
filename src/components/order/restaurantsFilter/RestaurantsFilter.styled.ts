import styled, { css } from 'styled-components';

export const RestaurantsFilter = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    height: ${theme.size.filter.height};
    padding: 0 15px;

    @media ${theme.breakPoint.desktop} {
      padding: 0 30px;
    }
  `}
}
`;
