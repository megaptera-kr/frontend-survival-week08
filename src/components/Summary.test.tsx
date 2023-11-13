import { screen } from '@testing-library/react';
import Summary from './Summary';
import fixtures from '../../fixtures';
import { renderWithProviders } from '../testHelper';

describe('Summary', () => {
  const selectedMenu = fixtures.foods;

  it('renders Summary', () => {
    renderWithProviders((
      <Summary
        selectedMenu={selectedMenu}
      />
    ));

    screen.getByText(/주문내역/);
    screen.getByText(/2개/);
    screen.getByText(/총 결제 예상금액/);
    screen.getByText(/13,000/);
  });
});
