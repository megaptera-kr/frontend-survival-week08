import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';
import { Reset } from 'styled-reset';
import routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

const router = createBrowserRouter(routes);

export default function App() {
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
