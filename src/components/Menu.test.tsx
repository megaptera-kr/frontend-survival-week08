import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import fixtures from '../../fixtures';
import Food from '../types/Food';
import { renderWithProviders } from '../testHelper';

const context = describe;

describe('Menu', () => {
  context('with menu', () => {
    const menu = fixtures.foods;

    it('renders Menu', () => {
      renderWithProviders((
        <Menu menu={menu} />
      ));

      screen.getByText(/짜장면/);
      screen.getByText(/8,000원/);
      screen.getByText(/짬뽕/);
      screen.getByText(/5,000원/);
    });
  });

  context('without menu', () => {
    const menu: Food[] = [];

    it('renders no foods message', () => {
      render(<Menu menu={menu} />);

      screen.getByText(/메뉴가 존재하지 않습니다/);
    });
  });
});
