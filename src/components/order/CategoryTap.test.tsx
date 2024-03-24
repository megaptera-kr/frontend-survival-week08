import { screen, fireEvent } from '@testing-library/react';

import CategoryTap from './CategoryTap';
import renderWithProviders from '../../testHelper';

const context = describe;

describe('CategoryTap', () => {
  const nameMock = '분식';
  const categoryMock = '분식';
  const setCategoryMock = jest.fn();

  context('render', () => {
    it('카테고리 버튼이 표시된다.', () => {
      renderWithProviders(
        <CategoryTap
          name={nameMock}
          category={categoryMock}
          setCategory={setCategoryMock}
        />,
      );

      screen.getByText(nameMock);
    });
  });

  context('render', () => {
    it('카테고리 버튼이 클릭된다.', () => {
      renderWithProviders(
        <CategoryTap
          name={nameMock}
          category={categoryMock}
          setCategory={setCategoryMock}
        />,
      );

      const button = screen.getByText(nameMock);
      fireEvent.click(button);

      expect(setCategoryMock).toHaveBeenCalled();
      expect(setCategoryMock).toHaveBeenCalledWith(nameMock);
    });
  });
});
