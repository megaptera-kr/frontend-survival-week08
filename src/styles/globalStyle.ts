/* eslint-disable no-tabs */
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
  	letter-spacing: -0.03em;
	}

	:lang(ko) {
		h1, h2, h3 {
			word-break: keep-all;
		}
	}
`;

export default GlobalStyle;
