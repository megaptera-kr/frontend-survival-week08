import { useDarkMode } from 'usehooks-ts';

import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';
import routes from './routes';
import worker from './mocks/browser';
import GlobalStyle from './styles/globalStyle';
import DefaultTheme from './styles/defaultTheme';
import DarkTheme from './styles/darkTheme';

const router = createBrowserRouter(routes);

export default function main() {
  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? DefaultTheme : DarkTheme;

  if (process.env.NODE_ENV === 'development') {
    worker.start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    });
  }
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
