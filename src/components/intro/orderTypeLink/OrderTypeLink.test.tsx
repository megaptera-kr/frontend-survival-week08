import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, useSearchParams } from 'react-router-dom';

import OrderTypeLink, { OrderType } from './OrderTypeLink';
import { withAllContexts, withRouter } from '../../../tests/utils';
import PATH from '../../../constants/path';

const context = describe;

describe('OrderTypeLink', () => {
  function QueryStringDisplay() {
    const [searchParams] = useSearchParams();
    return <pre>{JSON.stringify(searchParams.get('type'))}</pre>;
  }

  function renderOrderTypeLink(orderType: OrderType) {
    return render(
      withAllContexts(withRouter(
        <>
          <Route path={PATH.ROOT} element={<OrderTypeLink orderType={orderType} />} />
          <Route path={PATH.ORDER} element={<QueryStringDisplay />} />
        </>,
      )),
    );
  }

  context('with eat in type', () => {
    it('render "매장 주문"', () => {
      renderOrderTypeLink('eatin');

      expect(screen.getByText(/매장 주문/)).toBeInTheDocument();
    });
  });

  context('with take out type', () => {
    it('render "전체 포장"', () => {
      renderOrderTypeLink('takeout');

      expect(screen.getByText(/전체 포장/)).toBeInTheDocument();
    });
  });

  context('with clicked', () => {
    it('navigate to page with order type query"', async () => {
      renderOrderTypeLink('eatin');

      await userEvent.click(screen.getByRole('link'));

      expect(screen.getByText(/eatin/)).toBeInTheDocument();
    });
  });
});
