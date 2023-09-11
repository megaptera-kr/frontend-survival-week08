import { fireEvent, screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import MenuItem from '../../components/restaurants/MenuItem';

const context = describe;

describe('<MenuItem />', () => {
  const handleClickFood = jest.fn();
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8000,
    image: 'IMAGE',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const rednerMenuItem = () => {
    renderWithProviders(<MenuItem food={food} onClickFood={handleClickFood} />);
  };

  it('render food info', () => {
    rednerMenuItem();
    screen.getByText(/짜장면/);
    screen.getByText(/8,000/);
  });

  context('when the user clicks the food button', () => {
    it('call the click handler', () => {
      rednerMenuItem();
      fireEvent.click(screen.getByText(/짜장면/));
      expect(handleClickFood).toBeCalledWith(food);
    });
  });
});
