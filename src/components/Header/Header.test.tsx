import { screen } from '@testing-library/react';
import Header from '.';
import renderWithThemeProvider from '../../renderWithThemeProvider';

function renderHeader() {
  renderWithThemeProvider(<Header />);
}

describe('Header', () => {
  beforeEach(() => {
    renderHeader();
  });

  it('renders logo', () => {
    const logo = screen.getByAltText(/logo/);
    expect(logo).toBeInTheDocument();
  });
  it('renders title', () => {
    const title = screen.getByText(/메가테라 푸드코트/);
    expect(title).toBeInTheDocument();
  });
  it('renders theme toggle button', () => {
    const toggleBtn = screen.getByRole('button');
    expect(toggleBtn).toBeInTheDocument();
  });
});
