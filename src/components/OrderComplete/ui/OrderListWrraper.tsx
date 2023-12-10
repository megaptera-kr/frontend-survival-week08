import styled from 'styled-components';

import { Stack } from '../../../atoms';

const OrderListWrraper = styled(Stack)`
  padding: 3.2rem 4rem;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.orderCompleteListBorder}`};
`;

export default OrderListWrraper;
