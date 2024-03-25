import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import Cart from './index';

const context = describe;

describe('Cart', () => {
  it('renders summary', () => {
    renderWithProviders(<Cart />, { path: '/order' });

    screen.getByText(/주문내역/);
    screen.getByText(/총 결제 예상금액/);
  });

  context('without selected menu', () => {
    it('renders zero count', () => {
      renderWithProviders(<Cart />, { path: '/order' });

      screen.getByText(/0개/);
    });
  });

  // TODO : External Store mock 필요
  // context('with selected menu', () => {

  //   jest.mock('../../stores/CartStore', () => ({
  //     CartStore: {
  //       subscribe: jest.fn(),
  //       getSnapshot: jest.fn(),
  //       resetAllItems: jest.fn(),
  //       removeItem: jest.fn(),
  //     },
  //   }));

  //   beforeEach(() => {
  //     jest.clearAllMocks();

  //     const items = foods;
  //     CartStore.subscribe.mockImplementation((callback) => callback());
  //     CartStore.getSnapshot.mockReturnValue(items);
  //   });

  //   it('renders selected food list and count', () => {
  //     renderWithProviders(<Cart />, { path: '/order' });

  //     foods.forEach((food) => {
  //       screen.getByText(new RegExp(food.name));
  //     });

  //     screen.getByText(/2개/);
  //   });
  // });
});
