import styled from 'styled-components';
import fastfood from '../../static/images/fastfood.png';

const OrderTypeImage = styled.img`
  height: 183px;
  width: 182px;
  left: 8px;
  top: 8px;
`;

export default function IntroPage() {
  return (
    <div>
      <div>원하시는 주문을</div>
      <div>터치해주세요</div>
      <div>
        <OrderTypeImage src={fastfood} alt="fastfood" />
      </div>
    </div>
  );
}
