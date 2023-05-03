import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

import routes from './routes';
import { GlobalStyle, lightTheme, darkTheme } from './styles';
import { ReactQueryProvider } from './libs';

const router = createBrowserRouter(routes);

export default function App() {
  const { isDarkMode } = useDarkMode();

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
