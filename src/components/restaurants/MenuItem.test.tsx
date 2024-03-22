/* eslint-disable comma-dangle */
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import MenuItem from './MenuItem';

import foods from '../../../fixtures/foods';

describe('MenuItem', () => {
  const food = foods[0];
  const handelClickItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render food information', () => {
    renderWithProviders(
      <MenuItem food={food} onClickItem={handelClickItem} />,
      { path: '/order' }
    );

    screen.getByText(/짜장면/);
    screen.getByText(/8,000/);
    expect(screen.getByRole('img')).toHaveAttribute('alt', '짜장면_이미지');
  });

  it('listens for food click event', () => {
    renderWithProviders(
      <MenuItem food={food} onClickItem={handelClickItem} />,
      { path: '/order' }
    );

    fireEvent.click(screen.getByText(/짜장면/));
    expect(handelClickItem).toBeCalled();
  });
});
