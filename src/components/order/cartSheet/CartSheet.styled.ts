import styled, { css } from 'styled-components';

export const CartSheet = styled.article`
  ${({ theme }) => css`
    position: sticky;
    bottom: 0;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
    height: 324px;
    border-radius: ${theme.radius.lg} ${theme.radius.lg} 0 0;
    padding: 20px 25px;
    background-color: ${theme.type === 'light' ? theme.colors.secondary : theme.colors.primary};
    box-shadow: ${theme.shadow.sheet};
    transition: all 250ms ease-in-out;
    z-index: ${theme.zindex.sticky};

    & > h2 {
      ${theme.a11y.visuallyHidden};
    }
  `}
`;

export const CartItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: max-content;
  gap: 12px;
  height: 174px;
  overflow: auto;
`;

export const UtilBtns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
`;
