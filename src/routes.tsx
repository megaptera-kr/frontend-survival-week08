import Layout from './components/Layout';

import OrderPage from './pages/OrderPage';
import OrderCompletePage from './pages/OrderCompletePage';
import IntroPage from './pages/IntroPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <IntroPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
