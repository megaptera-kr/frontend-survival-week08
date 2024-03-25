import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import Menu from './Menu';

import Food from '../../types/Food';

import foods from '../../../fixtures/foods';

const context = describe;

describe('Menu', () => {
  context('without Menu', () => {
    const menu: Food[] = [];
    it('render menu information', () => {
      renderWithProviders(<Menu menu={menu} />, { path: '/order' });

      screen.getByText(/메뉴가 존재하지 않습니다./);
    });
  });
  context('with Menu', () => {
    it('render menu information', () => {
      renderWithProviders(<Menu menu={foods} />, { path: '/order' });

      screen.getByText(/짜장면/);
      screen.getByText(/짬뽕/);
      screen.getByText(/8,000/);
      screen.getByText(/5,000/);
    });
  });
});
