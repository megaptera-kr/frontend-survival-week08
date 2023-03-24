import styled from 'styled-components';

import fastfood from '../../static/images/fastfood.png';
import bag from '../../static/images/bag.png';

const IntroWrap = styled.div`
  padding: 10% 0;
`;

const IntroText = styled.div`
    width: 100%;
    height: 30rem;
    text-align: center;
    font-size: 7rem;
    letter-spacing: 0.3rem;
    line-height: 1.3;
`;

const OrderTypeWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  li {
    width: 400px;
    height: 535px;
    border-radius: 40px;
    padding: 12% 0;
    background: ${(props) => props.theme.colors.orderTypeCard};
    color: ${(props) => props.theme.colors.secondarytext};
  }
`;

const OrderTypeText = styled.div`
  width: 100%;
  height: 100px;
  font-size: 4rem;
  text-align: center;
  line-height: 14rem;
`;

const OrderTypeImage = styled.img`
  width: 182px;
  height: 183px;
  display: block;
  margin: auto;
`;

export default function IntroPage() {
  return (
    <IntroWrap>
      <IntroText>
        원하시는 주문을
        <br />
        터치해주세요
      </IntroText>
      <OrderTypeWrap>
        <li>
          <OrderTypeImage src={fastfood} alt="fastfood" />
          <OrderTypeText>매장 주문</OrderTypeText>
        </li>
        <li>
          <OrderTypeImage src={bag} alt="bag" />
          <OrderTypeText>전체 포장</OrderTypeText>
        </li>
      </OrderTypeWrap>
    </IntroWrap>
  );
}
