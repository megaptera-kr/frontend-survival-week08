import Intro from './pages/Intro';
import Layout from './pages/Layout';
import Order from './pages/Order';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Intro /> },
      { path: '/order', element: <Order /> },
    ],
  },
];

export default routes;
