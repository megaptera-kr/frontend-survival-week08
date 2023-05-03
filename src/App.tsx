import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import routes from './routes';
import GlobalStyle from './style/GlobalStyle';

export default function App() {
  const router = createBrowserRouter(routes);
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}
