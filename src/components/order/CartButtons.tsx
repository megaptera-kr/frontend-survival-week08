import { useNavigate } from 'react-router';
import styled from 'styled-components';

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  background: #44272B;
  color: white;
  border-radius: 50px;
  width: 49%;
  border: 0;
  cursor: pointer;
  padding-block: 2rem;
  font-size: 2.8rem;
`;

const OrderButton = styled.button`
  background: #FF8400;
  color: white;
  border-radius: 50px;
  width: 49%;
  border: 0;
  cursor: pointer;
  padding-block: 2rem;
  font-size: 2.8rem;
`;

function CartButtons() {
  const navigator = useNavigate();
  return (
    <ButtonSection>
      <CancelButton type="button" onClick={() => { navigator('/'); }}>
        취소
      </CancelButton>
      <OrderButton type="button">주문하기</OrderButton>
    </ButtonSection>
  );
}

export default CartButtons;
