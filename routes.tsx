import React from 'react';
import Layout from './src/components/Layout';
import IntroPage from './src/pages/IntroPage';
import OrderCompletePage from './src/pages/OrderCompletePage';
import OrderPage from './src/pages/OrderPage';

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
