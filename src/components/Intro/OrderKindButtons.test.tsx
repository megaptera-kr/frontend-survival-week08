import { screen } from '@testing-library/react';

import OrderKindButtons from './OrderKindButtons';
import renderWithProviders from '../../testHelper';

describe('RootButton', () => {
  it('"매장 주문" 버튼이 보여진다.', () => {
    renderWithProviders(<OrderKindButtons />);
    screen.getByText(/매장주문/);
    screen.getByText(/전체포장/);
  });
});
