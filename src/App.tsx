import { Reset } from 'styled-reset';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
