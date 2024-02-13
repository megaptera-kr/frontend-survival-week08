import { render, screen } from '@testing-library/react';
import Header from './index';

import TestProvider from '../../hooks/TestProvider';

describe('Header', () => {
  it('render Header', () => {
    const isDarkMode = true;
    const toggleDarkMode = jest.fn();

    render(
      <TestProvider>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </TestProvider>,
    );
    screen.getByText(/메가테라 푸드코트 키오스크/);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
