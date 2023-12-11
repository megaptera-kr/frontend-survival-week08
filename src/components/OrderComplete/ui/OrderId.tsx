import styled from 'styled-components';

import { Typography } from '../../../atoms';

const OrderId = styled(Typography)`
  color: ${({ theme }) => theme.colors.orderID};
`;

export default OrderId;
