import styled, { css } from 'styled-components';

export const SearchForm = styled.form`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    border: 1px solid ${theme.type === 'light' ? theme.colors.white : theme.colors.brand};
    border-radius: ${theme.radius.xs};
    transition: all 250ms ease-in-out;
    overflow: hidden;

    & > img {
      position: absolute;
      width: 20px;
      height: 20px;
      right: 10px;
    }

    & > label {
      ${theme.a11y.visuallyHidden};
    }

    & > input {
      ${theme.typo.regular16};
      width: 100%;
      height: 100%;
      padding: 0 30px 0 15px;
      color: ${theme.colors.white};
    }
  `}
`;

export default SearchForm;
