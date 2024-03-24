import { screen } from '@testing-library/react';
import Layout from './Layout';
import renderWithProviders from '../testHelper';

describe('Layout', () => {
  it('render correlty', () => {
    renderWithProviders(<Layout />);
    screen.getByText('메가테라 푸드코트 키오스크');
  });
});
