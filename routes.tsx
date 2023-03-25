import Layout from './src/components/Layout';

import IntroPage from './src/pages/IntroPage';
import OrderDone from './src/pages/OrderDonePage';
import OrderPage from './src/pages/OrderPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <IntroPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/completed', element: <OrderDone /> },
    ],
  },
];

export default routes;
