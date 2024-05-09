import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import routes from './routes';

function renderRouter(path = '/') {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
}

const context = describe;
describe('routes', () => {
  context('if route /', () => {
    beforeEach(() => {
      renderRouter();
    });

    it('it renders IntroPage', () => {
      const paragraph = screen.getByText(/원하시는 주문을/);
      const hereBtn = screen.getByText(/매장 주문/);
      const toGoBtn = screen.getByText(/전체 포장/);

      expect(paragraph).toBeInTheDocument();
      expect(hereBtn).toBeInTheDocument();
      expect(toGoBtn).toBeInTheDocument();
    });
  });

  context('if route /order', () => {
    beforeEach(() => {
      renderRouter('/order');
    });

    it('it renders OrderPage', () => {
      const cartTitle = screen.getByText(/주문내역/);
      const allCategoryBtn = screen.getByText(/전체/);
      const placeholderText = screen.getByPlaceholderText(/식당이름을 입력해주세요/);

      expect(cartTitle).toBeInTheDocument();
      expect(allCategoryBtn).toBeInTheDocument();
      expect(placeholderText).toBeInTheDocument();
    });
  });

  // TODO: orderId 없을 때 테스트 추가 []
  context('if route /order/complete', () => {
    beforeEach(() => {
      renderRouter('/order/complete?orderId={orderId}');
    });

    it('it renders ResultPage', async () => {
      const orderIdText = screen.getByText(/주문번호/);
      const btn = screen.getByText(/메인화면으로 돌아가기/);
      const title = await screen.findByText(/주문목록/);
      const totalPriceText = await screen.findByText(/총 가격/);

      expect(orderIdText).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(totalPriceText).toBeInTheDocument();
      expect(btn).toBeInTheDocument();
    });
  });
});
