import styled from 'styled-components';
import OrderButtons from '../components/OrderButtons';

import BasicTitleStyle from '../styles/BasicTitleStyle';

const IntroPageWrapStyle = styled.article`
  height: calc(100vh - 16rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function IntroPage() {
  return (
    <IntroPageWrapStyle>
      <BasicTitleStyle>
        원하시는 주문을
        <br />
        터치해주세요.
      </BasicTitleStyle>
      <OrderButtons />
    </IntroPageWrapStyle>
  );
}

export default IntroPage;
