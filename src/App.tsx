import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { useDarkMode } from 'usehooks-ts';
import routes from './routes';
import GlobalStyle from './style/GlobalStyle';
import darkTheme from './style/Theme/darkTheme';
import defaultTheme from './style/Theme/defaultTheme';

const router = createBrowserRouter(routes);

export default function App() {
  const { isDarkMode, toggle } = useDarkMode();
  const theme = isDarkMode ? defaultTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reset />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
