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
    font-family: 'Pretendard';
    font-weight: ${(props) => props.theme.fontWeight.semi_bold};
  }

  body {
    width: 1080px;
    margin-inline:auto;
    font-size: 1.6rem;
  }

  #root {
    background: ${(props) => `linear-gradient(
      90deg,
      ${props.theme.colors.bg_gradient_start},
      ${props.theme.colors.bg_gradient_end}
    );`}
  }

  button {
    border: none;
    cursor:pointer;
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }
`;

export default GlobalStyle;
