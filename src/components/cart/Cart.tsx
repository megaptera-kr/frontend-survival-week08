import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';
import CartInfoBar from './CartInfoBar';

type CartProps = {
  orderType: string;
};

const Wrapper = styled.section`
  background-color: white;
  padding-top: 5.2rem;
`;

export default function Cart({ orderType }: CartProps) {
  const [{ cartItems }, cartStore] = useCartStore();

  return (
    <Wrapper>
      <CartInfoBar />
    </Wrapper>
  );
}
