import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

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
    font-family: 'yg-jalnan', sans-serif;
    font-size: 1.6rem;
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
      font-family: 'yg-jalnan', sans-serif;
    }
  }
`;

export default GlobalStyle;
