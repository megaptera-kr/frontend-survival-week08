import Intro from './pages/Intro';
import Layout from './components/Layout';
import Order from './pages/order/Order';
import Complete from './pages/complete/Complete';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Intro /> },
      {
        path: '/order',
        element: <Order />,
      },
      { path: '/order/complete', element: <Complete /> },
    ],
  },
];

export default routes;
