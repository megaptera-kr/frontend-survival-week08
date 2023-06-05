import fixtures from '../../../fixtures';
import { render, screen } from '../../utils/test-utils';
import OrderList from './OrderList';

const context = describe;

describe('OrderList', () => {
  const { menu, totalPrice } = fixtures.order;
  function renderOrderList() {
    render(<OrderList orderMenu={menu} totalPrice={totalPrice} />);
  }

  context('주문메뉴와 총가격을 전달하면', () => {
    it('주문목록과 총가격이 렌더링 된다.', () => {
      renderOrderList();

      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
      expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
      expect(screen.getByText(/13,000원/)).toBeInTheDocument();
    });
  });
});
