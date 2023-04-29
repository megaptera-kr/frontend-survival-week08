import styled, { css } from 'styled-components';

export const MenuItem = styled.li`
    width: 100%;
    aspect-ratio: 0.7828;
`;

export const MenuBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.xs};
    padding: 20px 15px;
    background-color: ${theme.type === 'light' ? theme.colors.secondary : theme.colors.primary};
    transition: all 250ms ease-in-out;

    & > img {
      width: 65.4516%;
      margin: 0 auto;
      aspect-ratio: 1;
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${theme.type === 'light' && theme.colors.hover};
        box-shadow: ${theme.type === 'dark' && theme.shadow.hover};
      }
    }
  `}
`;

export const InfoBox = styled.div`
  ${({ theme }) => css`
    ${theme.typo.semibold16};
    color: ${theme.type === 'light' ? theme.colors.black : theme.colors.white};
    text-align: left;
    transition: color 250ms ease-in-out;

    &:first-of-type {
      margin-bottom: 5px;
    }

    & > dt {
      ${theme.a11y.visuallyHidden};
    }

    @media ${theme.breakPoint.desktop} {
      ${theme.typo.semibold24};

      &:first-of-type {
        margin-bottom: 10px;
      }
    }
  `}
`;
