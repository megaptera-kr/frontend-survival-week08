import { screen } from '@testing-library/react';
import Heading from './Heading';
import renderWithProviders from '../../testHelper';

describe('Heading', () => {
  it('should render with correct styles', () => {
    renderWithProviders(<Heading>Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');

    expect(heading).toHaveStyle(`
      font-size: 8rem;
    `);
  });

  it('should render children correctly', () => {
    renderWithProviders(<Heading>Test Heading</Heading>);

    const heading = screen.getByText('Test Heading');
    expect(heading).toBeInTheDocument();
  });
});
