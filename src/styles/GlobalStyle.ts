import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      box-sizing: border-box;
    }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; 
  }

  body {
    font-size: 1.6rem;
    font-family: "Pretendard Variable", Pretendard, sans-serif ;
    width: 1080px;
    margin: 0 auto;
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
  }
`;

export default GlobalStyle;
