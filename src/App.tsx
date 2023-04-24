import { Reset } from 'styled-reset';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import useDarkMode from 'usehooks-ts/dist/esm/useDarkMode/useDarkMode';

import GlobalStyle from './styles/GlobalStyle';

import routes from './routes';

import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

export default function App() {
  const router = createBrowserRouter(routes);

  const { isDarkMode } = useDarkMode();

  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
