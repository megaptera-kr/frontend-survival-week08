import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const route = createBrowserRouter(routes);

export default function App() {
  return (
    <RouterProvider router={route} />
  );
}
