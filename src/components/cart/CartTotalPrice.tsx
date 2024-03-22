import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';
import Text from '../common/Text';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Text)`
  font-size: 3.4rem;
  margin-left: 5.2rem;
  font-weight: 700;
`;

const Price = styled(Text)`
  font-size: 3.4rem;
  font-weight: 700;
  margin-right: 3.6rem;
  color: ${(props) => props.theme.colors.bodyHighlight};
`;

function CartTotalPrice() {
  const [, cartStore] = useCartStore();
  return (
    <Wrapper>
      <Title>총 결제 예상금액</Title>
      <Price>{cartStore.formattedTotalPrice()}원</Price>
    </Wrapper>
  );
}

export default CartTotalPrice;
