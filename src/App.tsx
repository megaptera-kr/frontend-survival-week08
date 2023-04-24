/* eslint-disable no-tabs */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import routes from './routes';
import defaultTheme from './theme/defaultTheme';
import darkTheme from './theme/darkTheme';

const GlobalStyle = createGlobalStyle`
  	${reset}
	  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
	  @font-face {
    font-family: 'Jalnan';
    font-weight: normal;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.ttf') format("truetype");
    font-display: swap;
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
		width:1080px;
	} 

	body { 
		font-size: 1.6rem;
		background:${(props) => props.theme.colors.background}
	}

	:lang(ko) {
		h1, h2, h3 {
		word-break: keep-all;
		}
	}
`;

export default function App() {
  const router = createBrowserRouter(routes);
  const { isDarkMode } = useDarkMode();
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
