import { screen, fireEvent, waitFor } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import Receipt from '../../components/receipt';

const context = describe;

describe('<Receipt />', () => {
  const orderId = 'ORDER_ID';
  const handleClickBackToHome = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderReceipt = () => {
    renderWithProviders((
      <Receipt
        orderId={orderId}
        onClickBackToHome={handleClickBackToHome}
      />
    ));
  };

  it('render without crash', () => {
    renderReceipt();
    screen.getByText(new RegExp(orderId));
    screen.getByText(/주문이 완료되었습니다!/);
  });

  context('when the user clicks on the button', () => {
    it('call the click handler', () => {
      renderReceipt();
      fireEvent.click(screen.getByText(/메인화면으로 돌아가기/));
      expect(handleClickBackToHome).toBeCalled();
    });
  });
});
