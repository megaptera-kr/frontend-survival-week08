import { screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import Summary from '../../components/cart/Summary';
import fixtures from '../../../fixtures';

describe('<Summary />', () => {
  const { foods } = fixtures;

  it('renders total count and price', () => {
    renderWithProviders(<Summary cartMenu={foods} />);
    screen.getByText('3개');
    screen.getByText(/27,000/);
  });
});
