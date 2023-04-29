import styled, { css } from 'styled-components';

export const Restaurant = styled.article`
  ${({ theme }) => css`
    position: relative;
    padding: 40px 25px;

    & > h3 {
      ${theme.typo.bold24};
      margin-bottom: 10px;
      color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
      transition: color 250ms ease-in-out;
    }

    &:not(:last-of-type)::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: calc(100% - 50px);
      height: 1px;
      background-color: ${theme.colors.secondary};
      transform: translateX(-50%);
      transition: background-color 250ms ease-in-out;
    }

    @media ${theme.breakPoint.desktop} {
      padding: 40px 50px;

      &:not(:last-of-type)::after {
        width: calc(100% - 100px);
      }
    }
  `}
`;

export const Menus = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
`;
