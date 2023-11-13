import { fireEvent, screen } from '@testing-library/react';
import Category from './Category';
import { renderWithProviders } from '../testHelper';

describe('Category', () => {
  const active = false;
  const category = '일식';

  const setFilterCategory = jest.fn();

  function renderCategory() {
    renderWithProviders((
      <Category
        active={active}
        category={category}
        setFilterCategory={setFilterCategory}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Category', () => {
    renderCategory();

    screen.getByText(/일식/);
  });

  it('listens for category button click event', () => {
    renderCategory();

    fireEvent.click(screen.getByText('일식'));

    expect(setFilterCategory).toBeCalledWith(category);
  });
});
