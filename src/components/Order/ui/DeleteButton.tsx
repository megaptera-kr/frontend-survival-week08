import styled from 'styled-components';

import { Button } from '../../../atoms';

const DeleteButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.orderCardIcon};
`;

export default DeleteButton;
