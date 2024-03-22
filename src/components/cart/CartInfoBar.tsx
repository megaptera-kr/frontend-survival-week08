import styled from 'styled-components';
import CartItemCount from './CartItemCount';
import CartTotalPrice from './CartTotalPrice';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2.4rem;
`;

type CartInfoBarProps = {
  orderType: string;
};

function CartInfoBar({ orderType }: CartInfoBarProps) {
  return (
    <Wrapper>
      <CartItemCount orderType={orderType} />
      <CartTotalPrice />
    </Wrapper>
  );
}

export default CartInfoBar;
