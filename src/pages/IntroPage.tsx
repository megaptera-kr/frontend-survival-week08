import styled from 'styled-components';

import { WordH1 } from '../components/common/Word';
import OrderKindButtons from '../components/Intro/OrderKindButtons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20rem;
  padding-bottom: 30rem;
`;

const IntroComment = styled(WordH1)`
  margin-bottom: 10rem;
  line-height: 130%;
`;

export default function IntroPage() {
  return (
    <Wrapper>
      <IntroComment text='원하시는 주문을 터치해주세요' />
      <OrderKindButtons />
    </Wrapper>
  );
}
