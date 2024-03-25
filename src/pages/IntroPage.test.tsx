import { screen } from '@testing-library/react';
import renderWithProviders from '../testHelper';

import IntroPage from './IntroPage';

test('IntroPage', () => {
  renderWithProviders(<IntroPage />);

  screen.getByText(/원하시는 주문을 터치해주세요!/);
  screen.getByText(/매장주문/);
  screen.getByText(/전체포장/);
});
