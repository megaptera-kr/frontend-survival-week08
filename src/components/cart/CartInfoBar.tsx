import styled from 'styled-components';
import CartItemCount from './CartItemCount';
import CartTotalPrice from './CartTotalPrice';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
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
