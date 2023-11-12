import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
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
    font-family: Pretendard-Regular, sans-serif, Arial;
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text}
  }

  button {
    border: none;
  }

  ul,
  li {
    margin: 0;
    list-style: none;
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
      font-family: yg-jalnan, sans-serif, Arial;
    }
  }
`;

export default GlobalStyle;
