import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Main from './Main';
import useRender from '../../hooks/usdRender';

const context = describe;

describe('메인 화면이 나타난다', () => {
  context('원하시는 주문을 선택할 수 있는 버튼을 실행한다.', () => {
    it('매장 주문이 보인다.', () => {
      useRender(
        <MemoryRouter>
          <Main />
        </MemoryRouter>,
      );
      expect(screen.findAllByText('매장 주문')).toBeTruthy();
    });
  });
});
