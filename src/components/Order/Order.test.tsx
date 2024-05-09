import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Order from '.';

describe('Order', () => {
  beforeEach(() => {
    render((
      <MemoryRouter initialEntries={['/order']}>
        <Order />
      </MemoryRouter>
    ));
  });

  it('renders FilterableRestaurantsTable', async () => {
    const labelText = screen.getByLabelText(/검색/);
    const placeholderText = screen.getByPlaceholderText(/식당이름을 입력해주세요/);

    expect(labelText).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();

    const menuItem = await screen.findByText(/짜장면/);
    expect(menuItem).toBeInTheDocument();
  });

  it('renders Cart', () => {
    const title = screen.getByText(/주문내역/);
    const totalPriceText = screen.getByText(/총 결제 예상금액/);

    expect(title).toBeInTheDocument();
    expect(totalPriceText).toBeInTheDocument();

    const cancelBtn = screen.getByText(/취소/);
    const orderBtn = screen.getByText(/주문하기/);

    expect(cancelBtn).toBeInTheDocument();
    expect(orderBtn).toBeInTheDocument();
  });
});
