import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle<{$isDarkMode : boolean}>`
  ${reset}
  html {
    font-size:62.5%!important;
  }
  html, body, button, input, ::selection {
    font-family: 'Jalnan', "Pretendard Variable";
    font-size:inherit;
  }
  body{
    padding:50px 0;
    height:100vh;
    background: ${(props) => (!props.$isDarkMode ? 'linear-gradient(134deg, #F89E21 0.7%, #FF6400 65.66%)' : '#1E1E1E')};
    color:#fff;
    box-sizing: border-box;
    letter-spacing: -1.44px;
  }
  button{
    padding:0;
    border:none;
    cursor:pointer;
    background:none;
  }
`;

export default GlobalStyle;
