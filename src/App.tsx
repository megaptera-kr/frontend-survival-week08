import { createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router';
import { Reset } from 'styled-reset';
import { useDarkMode } from 'usehooks-ts';

import GlobalStyle from './styles/GlobalStyle';

import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={{ ...theme }}>
      <RouterProvider router={router} />
      <Reset />
      <GlobalStyle />
    </ThemeProvider>
  );
}
