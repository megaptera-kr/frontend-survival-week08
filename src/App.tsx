import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Reset } from 'styled-reset';
import { useReadLocalStorage } from 'usehooks-ts';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';
import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  const isDarkMode = useReadLocalStorage('darkMode');
  const theme = isDarkMode ? darkTheme : defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
