import { Reset } from 'styled-reset';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './theme/defaultTheme';

const router = createBrowserRouter(routes);

export default function App() {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
