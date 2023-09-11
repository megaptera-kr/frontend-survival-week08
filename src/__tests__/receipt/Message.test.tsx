import { screen } from '@testing-library/react';
import renderWithProviders from '../../testHelper';
import Message from '../../components/receipt/Message';

describe('<Message />', () => {
  const orderId = 'ORDER_ID';

  it('render without crash', () => {
    renderWithProviders((
      <Message orderId={orderId} />
    ));

    screen.getByText(new RegExp(orderId));
    screen.getByText(/주문이 완료되었습니다!/);
  });
});
