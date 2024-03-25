import { screen } from '@testing-library/react';
import renderWithProviders from '../../testHelper';

import useReadRestaurants from '../../hooks/useReadRestaurants';

import Restaurants from './Restaurants';

const context = describe;

jest.mock('../../hooks/useReadRestaurants');

describe('Restaurants', () => {
  let restaurantName: string;
  let categoryName: string;

  beforeEach(() => {
    restaurantName = '';
    categoryName = '전체';
  });

  const rendering = () => {
    renderWithProviders(
      <Restaurants
        restaurantName={restaurantName}
        categoryName={categoryName}
      />,
    );
  };

  context('Restaurants 가 렌더링 되면', () => {
    it('레스토랑과 메뉴의 정보가 화면에 표시된다.', () => {
      rendering();
      screen.getByText('메가반점');
      screen.getByText('메리김밥');
    });
  });

  context('Restaurants 가 렌더링 되면', () => {
    it('레스토랑과 메뉴의 정보가 화면에 표시된다.', () => {
      (useReadRestaurants as jest.Mock).mockReturnValue({ restaurants: [] });
      rendering();

      screen.getByText('검색 결과가 없습니다');
    });
  });
});
