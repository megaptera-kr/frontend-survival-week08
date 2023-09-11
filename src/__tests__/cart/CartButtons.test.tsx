import { fireEvent, screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import CartButtons from '../../components/cart/CartButtons';

const context = describe;

describe('<CartButtons />', () => {
  const handleClickCancel = jest.fn();
  const handleClickOrder = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCartButtons = () => {
    renderWithProviders((
      <CartButtons
        onClickCancel={handleClickCancel}
        onClickOrder={handleClickOrder}
      />
    ));
  };

  it('renders order buttons', () => {
    renderCartButtons();
    screen.getByText('취소');
    screen.getByText('주문하기');
  });

  context('When the user clicks on the buttons', () => {
    it('call the click handler', () => {
      renderCartButtons();

      fireEvent.click(screen.getByText(/취소/));
      expect(handleClickCancel).toBeCalled();

      fireEvent.click(screen.getByText('주문하기'));
      expect(handleClickOrder).toBeCalled();
    });
  });
});
