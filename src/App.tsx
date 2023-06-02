import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Reset } from 'styled-reset';

import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';
import AppProviders from './providers/AppProviders';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <AppProviders>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </AppProviders>
  );
}
