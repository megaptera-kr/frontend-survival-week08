import fixtures from '../../../fixtures';
import renderWithProviders from '../../testHelper';
import OrderComplete from './OrderComplete';

test('OrderComplete', () => {
  const { receipts } = fixtures;
  const receipt = receipts[0];

  renderWithProviders(<OrderComplete receipt={receipt} />);
});
