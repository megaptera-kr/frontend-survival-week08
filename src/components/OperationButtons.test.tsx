import { fireEvent, screen } from '@testing-library/react';
import OperationButtons from './OperationButtons';
import { renderWithProviders } from '../testHelper';

describe('OperationButton', () => {
  const onClickCancel = jest.fn();
  const onClickOrder = jest.fn();

  function renderOperationButton() {
    renderWithProviders((
      <OperationButtons
        onClickCancel={onClickCancel}
        onClickOrder={onClickOrder}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders OperationButton', () => {
    renderOperationButton();

    screen.getByText('취소');
    screen.getByText('주문하기');
  });

  it('listens for OperationButton click event', () => {
    renderOperationButton();

    fireEvent.click(screen.getByText('취소'));

    expect(onClickCancel).toBeCalled();

    fireEvent.click(screen.getByText('주문하기'));

    expect(onClickOrder).toBeCalled();
  });
});
