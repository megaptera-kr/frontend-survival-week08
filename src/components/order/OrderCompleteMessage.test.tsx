import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import renderWithProviders from '../../testHelper';
import OrderCompleteMessage from './OrderCompleteMessage';

test('OrderCompleteMessage', () => {
  const { receipts } = fixtures;
  const receipt = receipts[0];

  renderWithProviders(<OrderCompleteMessage receipt={receipt} />);

  screen.queryByText(/매장주문이/);
  screen.queryByText(/완료되었습니다/);

  const receiptId = `주문번호 ${receipt.id}`;
  screen.getByText(receiptId);
});
