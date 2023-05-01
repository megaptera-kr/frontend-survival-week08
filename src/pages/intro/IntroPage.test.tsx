import { render, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';

import IntroPage from './IntroPage';
import { withAllContexts, withRouter } from '../../tests/utils';

describe('Intro Page', () => {
  function test() {
    return render(withAllContexts(withRouter(<Route path="/" element={<IntroPage />} />)));
  }
  it('render correclty', () => {
    test();
    expect(screen.getByRole('heading', { level: 2, name: '원하시는 주문을 터치해주세요' }));
  });
});
