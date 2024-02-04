import { render, screen } from '@testing-library/react';

import TestProvider from '../../hooks/TestProvider';
import Menu from './Menu';

import foods from '../../../fixtures/foods';

import Food from '../../types/Food';

const context = describe;

describe('Menu', () => {
  it('render Menu', () => {
    render(
      <TestProvider>
        <Menu menu={foods} />
      </TestProvider>,
    );

    expect(screen.getByText(/짜장면/));
    expect(screen.getByText(/짬뽕/));
  });

  context('without Menu', () => {
    const emptyMenu:Food[] = [];
    it('render no food Messages', () => {
      render(
        <TestProvider>
          <Menu menu={emptyMenu} />
        </TestProvider>,
      );

      expect(screen.getByText(/메뉴가 존재하지 않습니다.!/));
    });
  });
});
