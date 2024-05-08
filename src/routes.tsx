import IntroPage from './pages/IntroPage';
import Layout from './pages/Layout';
import OrderPage from './pages/OrderPage';

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
      // {
      //   path: '/order/complete',
      //   element: <ResultPage />,
      // },
    ],
  },
]);

export default routes;
