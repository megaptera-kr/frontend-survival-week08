import { render, screen, waitFor } from '@testing-library/react';
import { Route } from 'react-router-dom';

import RestaurantsTable from './RestaurantsTable';
import { withAllContexts, withRouter } from '../../../tests/utils';
import { restaurants } from '../../../../fixtures';

describe('Restaurants Table', () => {
  function renderRestaurantsTable() {
    render(withAllContexts(withRouter(<Route path="/" element={<RestaurantsTable />} />)));
  }

  const menus = restaurants.flatMap((restaurant) => restaurant.menu);

  it('render list of restaurants and the menus', async () => {
    renderRestaurantsTable();

    restaurants.forEach(async (restaurant) => {
      await waitFor(() => expect(screen.getByRole('heading', { level: 3, name: restaurant.name })).toBeInTheDocument());
    });

    menus.forEach(async (menu) => {
      await waitFor(() => expect(screen.getByText(menu.name)).toBeInTheDocument());
    });
  });
});

// - 사용자는 식당과 식당에서 제공되는 메뉴 목록을 볼 수 있다.
// - 사용자는 식당의 메뉴를 클릭하면 주문내역에 음식을 담을 수 있다.
// - 사용자는 주문내역에 음식을 중복해서 담을 수 있다.
