import styled from 'styled-components';

import CartInfoBar from './CartInfoBar';
import CartItems from './CartItems';
import CartButtons from './CartButtons';

type CartProps = {
  orderType: string;
};

const Wrapper = styled.section`
  background-color: white;
  padding-top: 5.2rem;
`;

export default function Cart({ orderType }: CartProps) {
  return (
    <Wrapper>
      <CartInfoBar orderType={orderType} />
      <CartItems />
      <CartButtons orderType={orderType} />
    </Wrapper>
  );
}
