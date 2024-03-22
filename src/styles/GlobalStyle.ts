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

  @font-face {
    font-family: 'pretendard400';
    font-weight: 400;
    src: url(pre/Pretendard-Regular.woff) format('woff');
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
    font-family: pretendard400;
    font-size: 1.6rem;
    color: white;
  }

  img {
    pointer-events: none;
    user-select: none;
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }

  h2 {
    word-break: keep-all;
  }
`;

export default GlobalStyle;
