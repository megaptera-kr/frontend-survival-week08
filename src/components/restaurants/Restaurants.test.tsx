import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import Restaurants from './Restaurants';

import restaurants from '../../../fixtures/restaurants';
import Restaurant from '../../types/Restaurant';

const context = describe;

describe('Restaurants', () => {
  context('without restaurants', () => {
    const emptyRestaurants: Restaurant[] = [];
    it('render restaurants information', () => {
      renderWithProviders(<Restaurants restaurants={emptyRestaurants} />, {
        path: '/order',
      });

      screen.getByText(/식당이 존재하지 않습니다./);
    });
  });

  context('with restaurants', () => {
    it('render restaurants information', () => {
      renderWithProviders(<Restaurants restaurants={restaurants} />, {
        path: '/order',
      });

      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
      screen.getByText(/혹등고래카레/);
      screen.getByText(/짬뽕/);
      screen.getByText(/8,000/);
      screen.getByText(/5,000/);
    });
  });
});
