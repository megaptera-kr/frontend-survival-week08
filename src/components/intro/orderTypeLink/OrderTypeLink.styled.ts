import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const OrderTypeLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${theme.type === 'light'
    ? theme.colors.white
    : theme.colors.tint};
    aspect-ratio: 0.7951;
    transition: all 250ms ease-in-out;

    @media (hover: hover) {
      &:hover {
        box-shadow: ${theme.type === 'dark' && theme.shadow.hover};
        background-color: ${theme.colors.hover};
      }
    }
  `}
`;

export const Icon = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.typo.bold24};
    color: ${theme.type === 'light'
    ? theme.colors.black
    : theme.colors.white};
    transition: all 250ms ease-in-out;
  `}
`;
