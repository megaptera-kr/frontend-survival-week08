import styled from 'styled-components';
import useCartStore from '../../hooks/useCartStore';

const Wrapper = styled.section`
  background-color: #f4f4f4;
  color: black;
`;

export default function CartItems() {
  const [snapshot, cartStore] = useCartStore();
  const { cartItems } = snapshot;

  return (
    <Wrapper>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
    </Wrapper>
  );
}
