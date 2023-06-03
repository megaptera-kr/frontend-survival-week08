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
    color: white;
    background-color : ${((props) => (props.theme.colors.bodyBackground))};
  }
  button{
    border: none;
    cursor: pointer;
  }
    h1, h2, h3 {
      word-break: keep-all;
    }
`;

export default GlobalStyle;
