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
    font-family: 'Cafe24Supermagic-Bold-v1.0';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    /* background: ${(props) => props.theme.colors.layoutBackground}; */
    
    color: ${(props) => props.theme.colors.text};
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }

  button {
    font-family: 'Cafe24Supermagic-Bold-v1.0';
    cursor: pointer;
  }
 
  @font-face {
    font-family: 'Ansungtangmyun-ESG';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ansungtangmyun-ESG.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Cafe24Supermagic-Bold-v1.0';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/Cafe24Supermagic-Bold-v1.0.woff2') format('woff2');
  }
`;

export default GlobalStyle;
