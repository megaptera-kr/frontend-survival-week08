import styled from 'styled-components';

import CartInfoBar from './CartInfoBar';
import CartItems from './CartItems';
import CartButtons from './CartButtons';

type CartProps = {
  orderType: string;
};

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.cartBackground};
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.colors.bodyPrimary};
  padding: 2.8rem 1.2rem;
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
