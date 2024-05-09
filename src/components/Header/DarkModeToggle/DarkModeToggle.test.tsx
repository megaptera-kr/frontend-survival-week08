import { fireEvent, screen } from '@testing-library/react';
import DarkModeToggle from '.';
import renderWithThemeProvider from '../../../renderWithThemeProvider';

const mockedUsedToggle = jest.fn();

jest.mock('usehooks-ts', () => ({
  ...jest.requireActual('usehooks-ts'),
  useDarkMode: () => ({
    toggle: mockedUsedToggle,
  }),
}));

const context = describe;
describe('DarkModeToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    renderWithThemeProvider(<DarkModeToggle />);
  });

  it('it renders 밝게, 어둡게 button', () => {
    const light = screen.getByText('밝게');
    const dark = screen.getByText('어둡게');

    expect(light).toBeInTheDocument();
    expect(dark).toBeInTheDocument();
  });

  context('if user click button', () => {
    it('toggle function will be called', () => {
      const toggleBtn = screen.getByRole('button');
      fireEvent.click(toggleBtn);

      expect(mockedUsedToggle).toHaveBeenCalled();
    });
  });
});
