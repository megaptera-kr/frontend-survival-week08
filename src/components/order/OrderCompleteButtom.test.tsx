import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import renderWithProviders from '../../testHelper';
import OrderCompleteButtom from './OrderCompleteButtom';

test('OrderCompleteButtom', () => {
  const { receipts } = fixtures;
  const receipt = receipts[0];

  const formattedTotalPrice = receipt.formattedTotalPrice();

  renderWithProviders(
    <OrderCompleteButtom formattedTotalPrice={formattedTotalPrice} />,
  );

  screen.getByText('총 가격');
  const price = `${formattedTotalPrice}원`;
  screen.getByText(price);
});
