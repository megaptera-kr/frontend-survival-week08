import { fireEvent, render, screen } from '@testing-library/react';

import TestProvider from '../../hooks/TestProvider';

import CategoryBtn from './CategoryBtn';

const context = describe;
describe('CategoryBtn', () => {
  const selectedCategory = '포도';
  const setCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderAndClick = (category: string) => {
    render(
      <TestProvider>
        <CategoryBtn
          category={category}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
      </TestProvider>,
    );
    const button = screen.getByText(new RegExp(category));
    fireEvent.click(button);
  };

  const categories = ['전체', '포도', '딸기', '수박'];
  categories.forEach((category) => {
    context('when the category is passed as a prop and the button is clicked', () => {
      it('calls setCategory with the clicked category.', () => {
        renderAndClick(category);
        expect(setCategory).toBeCalledWith(category);
      });
    });
  });
});
