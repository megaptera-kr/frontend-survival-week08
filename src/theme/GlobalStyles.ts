import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
    }

    html, 
    body {
        height: 100%
    }

    html {
        font-size: 62.5%;
        font-family:  'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;;
    }
    

    body {
        background: white;
        font-size: 1.6rem;
        letter-spacing: -0.25px;
    }
    
    #root{
        max-width: 108rem;
        width: 100%;
        margin: 0rem auto;
        min-height: 100%;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.defaultText};
    }

    a { 
        color: #fff; 
        text-decoration: none; 
        outline: none; 
    } 

    svg {
        flex-shrink: 0;
    }
`;

export default GlobalStyles;
