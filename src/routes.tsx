import * as P from './pages';
import Layout from './components/layout/Layout';
import PATH from './constants/path';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <P.Intro /> },
      { path: PATH.ORDER, element: <P.Order /> },
      { path: PATH.COMPLETE, element: <P.OrderComplete /> },

    ],
  },
];

export default routes;
