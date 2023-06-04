import { useDarkMode } from 'usehooks-ts';
import 'jest-styled-components';
import userEvent from '@testing-library/user-event';
import {
  render, renderHook, screen, waitFor,
} from '../../utils/test-utils';
import OrderButton from './OrderButton';

const context = describe;

describe('OrderButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const handleClick = jest.fn();

  function renderOrderButton() {
    render(
      <OrderButton
        name="매장 주문"
        image="fastfood"
        handleClick={handleClick}
      />,
    );
  }
  context('name="매장 주문", image="fastfood", handleClick, isDarkMode를 전달받으면', () => {
    it('패스트푸드 이미지와 매장 주문의 글씨가 포함된 버튼이 렌더링 된다.', () => {
      renderOrderButton();

      expect(screen.getByText('매장 주문')).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'fastfood' })).toBeInTheDocument();
    });
  });

  context('사용자가 버튼을 클릭하면', () => {
    it('handleClick 호출된다.', async () => {
      renderOrderButton();

      const button = screen.getByText('매장 주문');
      userEvent.click(button);

      await waitFor(() => {
        expect(handleClick).toBeCalled();
      });
    });
  });
  context('테마가 기본테마 일 때', () => {
    it('버튼 배경색이 #FFF이다', () => {
      renderOrderButton();

      const orderButton = screen.getByTestId('order-button');
      expect(orderButton).toHaveStyle(`
        background: #FFF
      `);
    });

    it('마우스가 버튼 위에 있을 때 버튼 배경색이 #FFF1DC이다', () => {
      renderOrderButton();

      const orderButton = screen.getByTestId('order-button');

      expect(orderButton).toHaveStyleRule('background', '#FFF1DC', {
        modifier: ':hover',
      });
    });
  });

  context('테마가 다크모드 일 때', () => {
    it('버튼 배경색이 #3A3A3A으로 변경된다', () => {
      const { result } = renderHook(() => useDarkMode());
      renderHook(() => result.current.toggle());
      renderOrderButton();

      const orderButton = screen.getByTestId('order-button');
      expect(orderButton).toBeInTheDocument();
      expect(orderButton).toHaveStyle(`
        background: #3A3A3A
      `);
    });
    it('마우스가 버튼 위에 있을 때 버튼 배경색이 #3A3A3A이다', () => {
      renderOrderButton();

      const orderButton = screen.getByTestId('order-button');
      userEvent.hover(orderButton);
      expect(orderButton).toHaveStyle(`
        background: #3A3A3A
      `);
    });
  });
});
