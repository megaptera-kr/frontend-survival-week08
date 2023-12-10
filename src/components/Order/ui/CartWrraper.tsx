import styled from 'styled-components';

import { Stack } from '../../../atoms';

const CartWrraper = styled(Stack)`
  padding: 4rem 3rem 5rem 3rem;
  background: ${({ theme }) => theme.colors.cartBackground};
`;

export default CartWrraper;
