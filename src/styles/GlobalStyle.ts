import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'Jalnan';
    font-weight: normal;
    font-style: normal;
    src: url('/fonts/Jalnan.otf');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Pretendard-Regular.otf');
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/Pretendard-Medium.otf');
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/Pretendard-SemiBold.otf');
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Pretendard-Bold.otf');
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: inherit;
    letter-spacing: -0.03em;
  }

  html {
    font-size: 62.5%;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: background-color 250ms ease-in;
  }

  body {
    font-family: Pretendard;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: background-color 250ms ease-in;
  }

  h1,h2 {
    font-family: Jalnan;
  }

  button {
    border: 0;
    padding: 0;
    background-color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    outline: 0;
    border: 0;
    background-color: transparent;

    &::placeholder {
      color: inherit;
    }
  }

  ul {
    list-style-type: none;
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }
`;

export default GlobalStyle;
