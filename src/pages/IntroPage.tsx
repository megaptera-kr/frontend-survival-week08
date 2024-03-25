import styled from 'styled-components';

import Heading from '../components/common/Heading';
import OrderKindButtons from '../components/Intro/OrderKindButtons';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 14rem;
  padding-bottom: 30rem;
`;

const Comment = styled(Heading)`
  padding-bottom: 14rem;
  line-height: 130%;
`;

export default function IntroPage() {
  return (
    <Wrapper>
      <Comment>원하시는 주문을 터치해주세요!</Comment>
      <OrderKindButtons />
    </Wrapper>
  );
}
