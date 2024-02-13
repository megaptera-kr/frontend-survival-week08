import { render, screen } from '@testing-library/react';

import Cart from './Cart';
import TestProvider from '../../hooks/TestProvider';

jest.mock('react-router');

describe('Cart', () => {
  it('render Cart', () => {
    render(
      <TestProvider>
        <Cart />
      </TestProvider>,
    );
    screen.getByText(/주문내역/);
    screen.getByText(/총 결제 예상/);
  });
});
