import { createBrowserRouter } from 'react-router-dom';
import OrderPage from '../pages/OrderPage';
import OrderCompletePage from '../pages/OrderCompletePage';
import Layout from '../pages/Layout';

export const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/order', element: <OrderPage /> },
      { path: '/orderComplete', element: <OrderCompletePage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
