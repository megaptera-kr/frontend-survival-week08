import { render, screen, waitFor } from '@testing-library/react';

import Receipt from './Receipt';

import TestProvider from '../../hooks/TestProvider';

jest.mock('../../hooks/useFetchOreder');
describe('Receipt', () => {
  const navigateToHome = jest.fn();
  it('render Receipt', async () => {
    render(
      <TestProvider>
        <Receipt orderId="ORDER_ID" navigateToHome={navigateToHome} />
      </TestProvider>,
    );
    await waitFor(() => {
      expect(screen.getByText(/주문이 완료되었습니다!/));
    });
  });
});
