import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import Layout from './layout/Layout';
import CompletePage from './pages/CompletePage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <CompletePage /> },
    ],
  },
];

export default routes;
