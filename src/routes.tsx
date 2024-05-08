import IntroPage from './pages/IntroPage';
import Layout from './pages/Layout';
import OrderPage from './pages/OrderPage';
import ResultPage from './pages/ResultPage';

const routes = ([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <IntroPage />,
      },
      {
        path: '/order',
        element: <OrderPage />,
      },
      {
        path: '/order/complete',
        element: <ResultPage />,
      },
    ],
  },
]);

export default routes;
