import { fireEvent, render, screen } from '@testing-library/react';

import SwitchBtn from './SwitchBtn';

import TestProvider from '../../hooks/TestProvider';

const context = describe;

describe('SwitchBtn', () => {
  const isDarkMode = false;
  const toggleDarkMode = jest.fn();

  beforeAll(() => {
    jest.clearAllMocks();
  });

  const renderHeader = () => {
    render(
      <TestProvider>
        <SwitchBtn isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </TestProvider>,
    );
  };

  it('render SwitchBtn', () => {
    renderHeader();
    expect(screen.getByText(/밝게/)).toBeInTheDocument();
    expect(screen.getByText(/어둡게/)).toBeInTheDocument();
  });

  context('button click', () => {
    it('toggleDarkMode called.', () => {
      renderHeader();
      const lightBtn = screen.getByText(/밝게/);
      fireEvent.click(lightBtn);
      expect(toggleDarkMode).toHaveBeenCalled();
    });
  });
});
