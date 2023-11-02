import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { useReadLocalStorage } from 'usehooks-ts';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import darkTheme from './styles/darkTheme';
import defaultTheme from './styles/defaultTheme';

export default function App() {
  const router = createBrowserRouter(routes);

  const isDarkMode = useReadLocalStorage('darkMode');

  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
