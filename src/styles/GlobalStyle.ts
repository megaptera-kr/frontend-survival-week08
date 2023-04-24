import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    text-decoration: none;
  }

  html {
    box-sizing : border-box;
    font-size: 80%; 
  }

  body {
    color: ${(props) => props.theme.colors.text};
    font-family: '빙그레체', Courier, monospace;
  }

  li {
    list-style: none;
  }

`;

export default GlobalStyle;
