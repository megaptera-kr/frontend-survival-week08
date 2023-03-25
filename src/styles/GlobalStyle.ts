import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @font-face {
  font-family: 'yg-jalnan';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
  font-style: normal;
 }

 @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
}

 html {
  box-sizing: border-box;
  overflow-y: scroll;
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
  font-family: 'Pretendard-Regular';
 }
 
 :lang(ko) {
  h1, h2, h3 {
   word-break: keep-all;
  }
 }
`;

export default GlobalStyle;
