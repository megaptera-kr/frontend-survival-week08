import styled from 'styled-components';
import OrderButtons from '../components/OrderButtons';

import BasicTitleStyle from '../styles/BasicTitleStyle';
import PageCommonWrapStyle from '../styles/PageCommonWrapStyle';

const IntroPageWrapStyle = styled(PageCommonWrapStyle)`
  background-color: transparent;
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
