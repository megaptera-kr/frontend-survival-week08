import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle<{$isDarkMode : boolean}>`
  ${reset}
  html {
    font-size:62.5%!important;
  }
  html, body, button, input, ::selection {
    font-family: 'Pretendard Variable', 'Jalnan' ;
    font-size:inherit;
  }
  body{
    width:1080px;
    margin:0 auto;
    position:relative;
    color:#fff;
    box-sizing: border-box;
    letter-spacing: -1.44px;
    border:1px solid #4E4E4E;
    background:#1E1E1E;
  }
  button{
    padding:0;
    border:none;
    cursor:pointer;
    background:none;
  }
  #root{
    background: ${(props) => (!props.$isDarkMode ? 'linear-gradient(134deg, #F89E21 0.7%, #FF6400 65.66%)' : '#1E1E1E')};
  }
`;

export default GlobalStyle;
