import styled from 'styled-components';
import Button from '../common/Button';

const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding: 3.2rem 3.2rem;
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

const Cancel = styled(Button)`
  flex-grow: 1;
  background-color: #44272b;
  font-size: 3.2rem;
  color: white;
  padding: 3.2rem 0;
  border-radius: 60px;
`;

const Order = styled(Button)`
  background-color: #ff8400;
  flex-grow: 1;
  font-size: 3.2rem;
  color: white;
  padding: 3.2rem 0;
  border-radius: 60px;
`;

export default function CartButtons() {
  return (
    <Wrapper>
      <Cancel>취소</Cancel>
      <Order>주문하기</Order>
    </Wrapper>
  );
}
