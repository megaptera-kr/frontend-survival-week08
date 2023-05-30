import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import GlobalStyle from './styles/GlobalStyle';

import routes from './routes';
import defaultTheme from './styles/defaultTheme';

const router = createBrowserRouter(routes);

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const theme = defaultTheme;

  const root = ReactDOM.createRoot(container);

  root.render(
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>,
  );
}

main();
