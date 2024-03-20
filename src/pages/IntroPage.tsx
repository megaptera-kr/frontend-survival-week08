import styled from 'styled-components';

import { WordH1 } from '../components/common/Word';
import OrderKindButtons from '../components/Intro/OrderKindButtons';

const IntroComment = styled(WordH1)`
  margin: 1.8em 0;
  line-height: 130%;
`;

export default function IntroPage() {
  return (
    <>
      <IntroComment text='원하시는 주문을 터치해주세요' />
      <OrderKindButtons />
    </>
  );
}
