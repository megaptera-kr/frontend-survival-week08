import styled, { css } from 'styled-components';

export const Tab = styled.button.attrs(() => ({
  type: 'button',
}))`
${({ theme }) => css`
  ${theme.typo.medium20};
  position: relative;
  width: 100%;
  height: 100%;
  color: ${theme.colors.white};
  transition: all 250ms ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.xs} ${theme.radius.xs} 0 0;
    transform: translateY(1px);
    transition: all 250ms ease-in-out;
  }

  & > span {
    position: relative;
    z-index: 2;
  }

  &[aria-selected='true'] {
    color: ${theme.colors.brand};

    &::before {
      background-color: ${theme.type === 'light' ? theme.colors.white : theme.colors.tint};
    }
  }
`}
`;
