import Layout from '../components/common/Layout';

import EntryPage from '../pages/EntryPage';
import OrderPage from '../pages/OrderPage';
import ReceiptPage from '../pages/ReceiptPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { index: true, element: <EntryPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <ReceiptPage /> },
    ],
  },
];

export default routes;
