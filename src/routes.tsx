import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import OrderComplete from './pages/OrderComplete';
import Restaurants from './pages/Restaurants';

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/restaurants',
        element: <Restaurants />,
      },
      {
        path: '/orders/:id',
        element: <OrderComplete />,
      },
    ],
  },
];

export default routes;
