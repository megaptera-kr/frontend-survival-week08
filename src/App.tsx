import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { Reset } from 'styled-reset';

import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Reset />
      <GlobalStyle />
    </>
  );
}
