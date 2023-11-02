import { fireEvent, screen } from '@testing-library/react';
import MenuItem from './MenuItem';
import { renderWithProviders } from '../testHelper';

describe('MenuItem', () => {
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
    image: 'IMAGE',
  };

  const onClickItem = jest.fn();

  function renderMenuItem() {
    renderWithProviders((
      <MenuItem
        food={food}
        onClickItem={onClickItem}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders MenuItem', () => {
    renderMenuItem();

    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });

  it('listens for restaurant click event', () => {
    renderMenuItem();

    fireEvent.click(screen.getByText(/짜장면/));

    expect(onClickItem).toBeCalledWith(food);
  });
});
