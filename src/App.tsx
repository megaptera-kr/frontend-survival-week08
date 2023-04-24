import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import { Reset } from 'styled-reset';
import routes from '../routes';
import darkTheme from './styles/darkTheme';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

const router = createBrowserRouter(routes);

export default function App() {
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
