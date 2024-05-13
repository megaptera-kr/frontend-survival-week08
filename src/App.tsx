import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { useDarkMode } from 'usehooks-ts';
import routes from './routes';
import darkTheme from './styles/darkTheme';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/globalStyle';

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
