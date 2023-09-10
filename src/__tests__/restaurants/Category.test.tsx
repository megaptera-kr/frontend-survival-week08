import { screen, render, fireEvent } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import Category from '../../components/restaurants/Category';

const context = describe;

describe('<Category />', () => {
  const category = '중식';
  const currentCategory = '중식';
  const setCurrentCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCategory = () => {
    renderWithProviders((
      <Category
        category={category}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    ));
  };

  it('renders category text', () => {
    renderCategory();
    screen.getByText('중식');
  });

  context('when the user clicks the category button ', () => {
    it('call the click handler', () => {
      renderCategory();
      fireEvent.click(screen.getByText('중식'));
      expect(setCurrentCategory).toBeCalledWith(category);
    });
  });
});
