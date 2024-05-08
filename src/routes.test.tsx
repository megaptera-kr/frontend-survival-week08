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

    it('renders IntroPage', () => {
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

    it('renders OrderPage', () => {
      const cartTitle = screen.getByText(/주문내역/);
      const allCategoryBtn = screen.getByText(/전체/);
      const placeholderText = screen.getByPlaceholderText(/식당이름을 입력해주세요/);

      expect(cartTitle).toBeInTheDocument();
      expect(allCategoryBtn).toBeInTheDocument();
      expect(placeholderText).toBeInTheDocument();
    });
  });
});
