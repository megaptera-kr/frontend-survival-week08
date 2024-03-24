import IntroPage from './pages/IntroPage';
import OrderPage from './pages/OrderPage';
import OrderCompletePage from './pages/OrderCompletePage';

import Layout from './components/Layout';

const routes = [
  {
    element: <Layout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        index: true,
        element: <IntroPage />,
      },
      {
        path: 'order',
        element: <OrderPage />,
      },
      {
        path: 'order/complete',
        element: <OrderCompletePage />,
      },
    ],
  },
];

export default routes;
