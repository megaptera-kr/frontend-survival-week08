import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { IntroPage, OrderPage, OrderCompletePage } from '../pages';
import { Layout } from '../molecule';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IntroPage />} />

          <Route path='order'>
            <Route index element={<OrderPage />} />

            <Route path='complete'>
              <Route path=':id' element={<OrderCompletePage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
