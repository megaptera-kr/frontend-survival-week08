import styled from 'styled-components';
import CartItemCount from './CartItemCount';
import CartTotalPrice from './CartTotalPrice';

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background-color: #f4f4f4;
`;

function CartInfoBar() {
  return (
    <Wrapper>
      <CartItemCount />
      <CartTotalPrice />
    </Wrapper>
  );
}

export default CartInfoBar;
