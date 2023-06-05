import fixtures from '../../../fixtures';
import { render, screen } from '../../utils/test-utils';
import CompleteHeader from './CompleteHeader';

const context = describe;

describe('CompleteHeader', () => {
  const { id } = fixtures.order;
  function renderOrderList() {
    render(<CompleteHeader orderId={id} />);
  }
  context('orderId를 전달하면', () => {
    it('"주문이 완료되었습니다 문구와 주문번호가 렌더링 된다."', () => {
      renderOrderList();

      expect(screen.getByText('주문이 완료되었습니다!')).toBeInTheDocument();
      expect(screen.getByText(/12345678910/)).toBeInTheDocument();
    });
  });
});
