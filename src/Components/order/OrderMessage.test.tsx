import { render, screen } from '@testing-library/react';
import TestProvider from '../../hooks/TestProvider';
import OrderMessage from './OrderMessage';
import receipt from '../../../fixtures/receipt';

describe('OrderMessage', () => {
  it('render OrderMessage', () => {
    render(
      <TestProvider>
        <OrderMessage order={receipt} />
      </TestProvider>,
    );
    screen.getByText(/RECEIPT_ID/);
    screen.getByText(/주문이 완료되었습니다!/);
  });
});
