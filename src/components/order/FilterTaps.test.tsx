import { screen } from '@testing-library/react';

import FilterTaps from './FilterTaps';
import renderWithProviders from '../../testHelper';

const context = describe;

jest.mock('../../hooks/useReadCategories');

describe('FilterTaps', () => {
  const categoryMock = '분식';
  const setCategoryMock = jest.fn();

  context('render', () => {
    it('카테고리 버튼이 종류별로 표시된다.', () => {
      renderWithProviders(
        <FilterTaps category={categoryMock} setCategory={setCategoryMock} />,
      );

      screen.queryByText('전체');
      screen.queryByText('한식');
      screen.queryByText('중식');
      screen.queryByText('일식');
    });
  });
});
