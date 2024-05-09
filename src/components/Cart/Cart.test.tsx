import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Cart from '.';
import Food from '../../types/food';

const state:{menu:Food[]} = {
  menu: [{
    id: '1', name: '짜장면', price: 8000, image: '짜장면이미지',
  }, {
    id: '2', name: '김밥', price: 4000, image: '김밥이미지',
  },
  ],
};

const clearCart = jest.fn();

jest.mock('../../hooks/useCartStore', () => () => [state, { clearCart }]);

function renderCart() {
  render((
    <MemoryRouter initialEntries={['/order']}>
      <Cart />
    </MemoryRouter>
  ));
}

const context = describe;
describe('Cart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    renderCart();
  });

  it('renders CartHeader', () => {
    const title = screen.getByText(/주문내역/);
    const totalPriceText = screen.getByText(/총 결제 예상금액/);

    expect(title).toBeInTheDocument();
    expect(totalPriceText).toBeInTheDocument();
  });
  it('renders OrderButton', () => {
    const cancelBtn = screen.getByText(/취소/);
    const orderBtn = screen.getByText(/주문하기/);

    expect(cancelBtn).toBeInTheDocument();
    expect(orderBtn).toBeInTheDocument();
  });

  context('if menu is not empty array in CartStore', () => {
    it('renders menu list', () => {
      const menuList = screen.getAllByRole('listitem');

      menuList.forEach((food, index) => {
        expect(food).toHaveTextContent(state.menu[index].name);
      });
    });
  });

  context('when it unmounted', () => {
    beforeEach(() => {
      const { unmount } = render((
        <MemoryRouter initialEntries={['/order']}>
          <Cart />
        </MemoryRouter>
      ));
      unmount();
    });

    it('clearCart function will be called', () => {
      expect(clearCart).toHaveBeenCalled();
    });
  });
});
