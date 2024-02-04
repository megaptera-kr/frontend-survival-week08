import Layout from './Components/Layout';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import OrderComplete from './pages/OrderComplete';

const routes = [
  {
    element: <Layout />,
    children: [

      { path: '/', element: <HomePage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <OrderComplete /> },
    ],
  },
];

export default routes;
