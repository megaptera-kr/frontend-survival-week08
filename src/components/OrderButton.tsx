import styled from 'styled-components';

type OrderButtonProps = {
  onClickCancel: () => void;
  onClickOrder: () => void;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 2.5rem;
  margin-top:15px;
  padding-block: .8em;
  width: 48%;
  border: 0;
  border-radius: 3em;
  color: #FFFFFF;
  cursor: pointer;
`;

const CancelButtonClick = styled(Button)`
  background-color: #44272B;
  
  &:hover {
    background-color: #170A0C;
  }
`;

const OrderButtonClick = styled(Button)`
  background-color: #ff8400;
  
  &:hover {
    background-color: #d87000;
  }
`;
export default function OrderButton({ onClickCancel, onClickOrder } : OrderButtonProps) {
  return (
    <Container>
      <CancelButtonClick type="button" onClick={onClickCancel}>
        취소
      </CancelButtonClick>
      <OrderButtonClick type="button" onClick={onClickOrder}>
        주문하기
      </OrderButtonClick>
    </Container>
  );
}
