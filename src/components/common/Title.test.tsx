import { screen } from '@testing-library/react';

import Title from './Title';
import renderWithProviders from '../../testHelper';

describe('Text', () => {
  it('render corrlecty', () => {
    const { container } = renderWithProviders(<Title>Test Title</Title>);
    const textElement = container.firstChild;

    expect(textElement).toHaveStyle(`
      font-size: 4rem;
      user-select: none;
    `);
  });

  it('render children correctly', () => {
    renderWithProviders(<Title>Test Title</Title>);
    screen.getByText('Test Title');
  });
});
