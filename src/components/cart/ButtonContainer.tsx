import styled from 'styled-components';
import useCartStore from '../../hooks/useCartStore';
import Button from './Button';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 3.2rem;
`;

export default function ButtonContainer() {
  const [{ menu, totalPrice }, store] = useCartStore();
  return (
    <Container>
      <Button name="취소" handleClick={() => store.allCancelMenu()} />
      <Button name="주문하기" handleClick={() => store.orderMenuRequest({ menu, totalPrice })} />
    </Container>
  );
}
