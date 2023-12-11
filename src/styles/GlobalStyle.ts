import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  a {
    color: ${(props) => props.theme.colors.text};
  }

  button,
  input,
  select,
  textarea {
   background: ${(props) => props.theme.colors.background};
   color: ${(props) => props.theme.colors.text};
  }
`;

export default GlobalStyle;
