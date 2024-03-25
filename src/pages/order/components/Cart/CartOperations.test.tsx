import { screen } from '@testing-library/react';

import CartOperations from './CartOperations';
import { renderWithProviders } from '../../../../testHelper';

describe('OperationButtons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render CartOperations', () => {
    renderWithProviders((
      <CartOperations />
    ));

    screen.getByText('취소');
    screen.getByText('주문하기');
  });
});
