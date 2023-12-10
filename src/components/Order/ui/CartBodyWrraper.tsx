import styled from 'styled-components';

import { Stack } from '../../../atoms';

const CartBodyWrraper = styled(Stack)`
  padding: 4rem 0;
  flex-wrap: wrap;
  row-gap: 2.4rem;
  column-gap: 2.4rem;
  max-height: 41.6rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default CartBodyWrraper;
